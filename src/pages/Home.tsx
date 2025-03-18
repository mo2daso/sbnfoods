import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      icon: 'fas fa-utensils',
      title: 'Premium Cuisine',
      description: 'Expertly crafted menus featuring global flavors'
    },
    {
      icon: 'fas fa-users',
      title: 'Professional Staff',
      description: 'Trained team ensuring impeccable service'
    },
    {
      icon: 'fas fa-star',
      title: 'Custom Menus',
      description: 'Tailored to your preferences and dietary needs'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Exceptional Catering Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Where culinary artistry meets unforgettable events
          </p>
          <Link 
            to="/contact"
            className="btn-primary text-lg md:text-xl px-8 py-4"
          >
            Start Planning Your Event →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center">
                <i className={`${feature.icon} text-4xl text-red-600 mb-4`}></i>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">
            Ready to Create an Unforgettable Event?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we'll make your event truly special.
          </p>
          <Link 
            to="/services"
            className="btn-primary inline-block"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "The attention to detail and quality of service was exceptional. Our guests couldn't stop praising the food!"
                </p>
                <div className="font-medium dark:text-white">
                  - Happy Client
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;