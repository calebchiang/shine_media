import React, { useState } from 'react';
import '../index.css';
import { getDatabase, ref, push } from "firebase/database";
import { app } from '../firebaseConfig'; // Adjust the path to where your firebaseConfig.js is located

function ContactForm() {
    const [formData, setFormData] = useState({
        goals: '',
        email: '',
        name: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        message: '',
        success: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation to ensure all fields are filled
        if (!formData.goals || !formData.email || !formData.name) {
            setSubmitStatus({ message: 'Please fill in all fields.', success: false });
            return;
        }

        // Access the database
        const database = getDatabase(app);
        const formRef = ref(database, 'forms');

        // Push the data to Firebase Realtime Database
        push(formRef, {
            goals: formData.goals,
            email: formData.email,
            fullName: formData.name,
        }).then(() => {
            console.log('Form submitted successfully');
            setFormData({ goals: '', email: '', name: '' }); // Reset the form fields
            setSubmitStatus({ message: 'Form submitted successfully!', success: true });
        }).catch((error) => {
            console.error('Failed to submit the form:', error);
            setSubmitStatus({ message: 'Failed to submit the form. Please try again.', success: false });
        });
    };

    return (
        <div className="bg-blue-50 flex items-center justify-center p-20 font-bitter">
            <div className="bg-white max-w-lg mx-auto p-6 shadow-md rounded-lg">
                <div className="bg-white p-4 rounded-md">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Let's Discuss Your Needs!</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">What are your goals?</label>
                            <textarea
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                name="goals"
                                value={formData.goals}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        {submitStatus.message && (
                            <div className={`text-sm ${submitStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                                {submitStatus.message}
                            </div>
                        )}
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
