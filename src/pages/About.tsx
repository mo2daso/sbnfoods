import React from 'react';

function About() {
  const certifications = [
    {
      icon: 'fas fa-certificate',
      name: 'FSSAI Certified',
      description: 'Food Safety and Standards Authority of India'
    },
    {
      icon: 'fas fa-award',
      name: 'ISO 22000:2018',
      description: 'Food Safety Management Systems'
    },
    {
      icon: 'fas fa-shield-alt',
      name: 'HACCP Certified',
      description: 'Hazard Analysis Critical Control Point'
    },
    {
      icon: 'fas fa-leaf',
      name: 'Green Restaurant',
      description: 'Sustainable Kitchen Practices'
    },
    {
      icon: 'fas fa-check-circle',
      name: 'Quality Council',
      description: 'Indian Culinary Federation Member'
    },
    {
      icon: 'fas fa-star',
      name: 'Five Star Rating',
      description: 'Mumbai Food Safety Department'
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="py-16 px-4 dark:text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-red-600 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-100 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-red-600">15 Years of Excellence</h3>
              <p className="mb-4">
                Founded in 2008, SBN Catering has grown from a family kitchen to a premier catering service, 
                serving over 5,000 events across India.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-users text-red-600"></i>
                  <span>60+ Professional Staff</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-trophy text-red-600"></i>
                  <span>22 Industry Awards</span>
                </div>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" 
              className="w-full h-64 object-cover rounded-xl shadow-lg"
              alt="Our Team"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-red-50 dark:bg-gray-800 rounded-xl">
              <i className="fas fa-seedling text-red-600 text-3xl mb-4"></i>
              <h4 className="font-bold mb-2">Sustainable Cooking</h4>
              <p className="text-sm">Zero-waste kitchens & local sourcing</p>
            </div>
            <div className="text-center p-6 bg-red-50 dark:bg-gray-800 rounded-xl">
              <i className="fas fa-heart text-red-600 text-3xl mb-4"></i>
              <h4 className="font-bold mb-2">Quality Promise</h4>
              <p className="text-sm">100% fresh ingredients guarantee</p>
            </div>
            <div className="text-center p-6 bg-red-50 dark:bg-gray-800 rounded-xl">
              <i className="fas fa-clock text-red-600 text-3xl mb-4"></i>
              <h4 className="font-bold mb-2">Timely Service</h4>
              <p className="text-sm">Never late - 99.9% punctuality rate</p>
            </div>
          </div>

          <div className="bg-red-100 dark:bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-8 text-red-600 text-center">Our Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center">
                  <i className={`${cert.icon} text-red-600 text-3xl mb-3`}></i>
                  <h4 className="font-bold mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;