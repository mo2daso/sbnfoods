import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      title: "Wedding Catering",
      description: "Complete wedding solutions with customizable menus",
      price: "Starting from 1.5 Lakh",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
    },
    {
      title: "Corporate Events",
      description: "Professional catering for business meetings and events",
      price: "Starting from 50,000",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865"
    },
    {
      title: "Private Parties",
      description: "Personalized menus for intimate gatherings",
      price: "Starting from 25,000",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d"
    },
    {
      title: "Festival Catering",
      description: "Special menus for festive celebrations",
      price: "Starting from 75,000",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1"
    },
    {
      title: "Birthday Parties",
      description: "Fun and delicious catering for all ages",
      price: "Starting from 20,000",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3"
    },
    {
      title: "Bulk Ordering",
      description: "Large-scale catering solutions",
      price: "Starting from 35,000",
      image: "https://images.unsplash.com/photo-1521917441209-e886f0404a7b"
    }
  ];

  const addons = [
    {
      icon: "fas fa-cheese",
      title: "Live Cooking Stations",
      description: "Interactive culinary experience"
    },
    {
      icon: "fas fa-cocktail",
      title: "Beverage Service",
      description: "Premium drink selections"
    },
    {
      icon: "fas fa-utensils",
      title: "Premium Tableware",
      description: "Elegant dining setup"
    },
    {
      icon: "fas fa-ice-cream",
      title: "Dessert Stations",
      description: "Sweet endings to your event"
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="py-16 px-4 dark:text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-red-600 text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={service.image}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    alt={service.title}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-red-600 font-medium">
                    <i className="fas fa-rupee-sign"></i> {service.price}
                  </div>
                  <Link 
                    to="/contact" 
                    className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2"
                  >
                    Enquire <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 dark:bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-8 text-red-600 text-center">Special Add-ons</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center">
                  <i className={`${addon.icon} text-red-600 text-3xl mb-4`}></i>
                  <h4 className="font-bold mb-2">{addon.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Ready to Plan Your Event?</h3>
            <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Let us help you create an unforgettable experience with our premium catering services.
            </p>
            <Link 
              to="/contact"
              className="btn-primary inline-block"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;