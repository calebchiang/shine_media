import React, { useState } from 'react';
import '../index.css'; // Correctly importing your custom CSS file

function ContactForm() {
    const [formData, setFormData] = useState({
        goals: '',
        platform: '',
        budget: '',
        email: '',
        name: ''
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
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.log('Failed to submit the form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="form-background bg-white.bg-opacity-90 ">
            <div className="max-w-lg mx-auto my-10 p-6 shadow-md rounded-lg">
                <div className="bg-white p-6 rounded-md">
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Website platform *</label>
                        <select
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            name="platform"
                            value={formData.platform}
                            onChange={handleChange}
                        >
                            <option value="WordPress">WordPress</option>
                            <option value="Shopify">Shopify</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Project Budget *</label>
                        <select
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                        >
                            <option value="$4,000 - $10,000">$4,000 - $10,000</option>
                            <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                            <option value="Over $20,000">Over $20,000</option>
                        </select>
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
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label className="font-medium text-gray-700">I am human</label>
                        </div>
                    </div>
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
