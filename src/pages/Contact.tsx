import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Wedding'
  });

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Private Party',
    'Festival Catering',
    'Birthday Party',
    'Bulk Order'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      eventType: 'Wedding'
    });
  };

  return (
    <main className="min-h-screen">
      <section className="py-16 px-4 dark:text-white">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-4xl font-bold mb-8 text-red-600 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-red-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Full Name
              </label>
              <input 
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 
                         focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200
                         placeholder-gray-400 dark:placeholder-gray-300"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input 
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 
                         focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200
                         placeholder-gray-400 dark:placeholder-gray-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="eventType" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Event Type
              </label>
              <div className="relative">
                <select 
                  id="eventType"
                  value={formData.eventType}
                  onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 
                           focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200
                           appearance-none cursor-pointer bg-white dark:bg-gray-700"
                >
                  {eventTypes.map((type) => (
                    <option 
                      key={type} 
                      value={type}
                      className="py-2 text-gray-700 dark:text-gray-200"
                    >
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i className="fas fa-chevron-down text-gray-400 dark:text-gray-300"></i>
                </div>
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 
                       transition-all duration-200 font-medium transform hover:scale-[1.02]
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                       dark:focus:ring-offset-gray-800"
            >
              Submit Inquiry
            </button>
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4 text-red-600">Direct Contact</h3>
            <div className="space-y-4">
              <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
                <i className="fas fa-phone-alt text-red-600"></i>
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
                <i className="fas fa-envelope text-red-600"></i>
                <span>contact@sbnfoods.in</span>
              </p>
              <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
                <i className="fas fa-clock text-red-600"></i>
                <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;