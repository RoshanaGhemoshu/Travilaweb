"use client";
import React, { useState, useEffect } from 'react'; 
import { Search, ChevronDown, Heart, Star, Globe, DollarSign, Sun, Grid, Sparkles, Menu, X } from 'lucide-react';
import Footer from "../components/Footer";

export default function TravilaWebsite() {
  
  const [activeFilter, setActiveFilter] = useState('Tours');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ADD COUNTDOWN STATE AND EFFECT HERE
  const [countdown, setCountdown] = useState({ days: 228, hours: 9, mins: 50, secs: 44 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  const tours = [
    {
      id: 1,
      title: 'California Sunset/Twilight Boat Cruise',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      badge: 'Exceptional',
      rating: 5.00,
      reviews: 0,
      duration: '7 days 6 nights',
      groupSize: 'Small group',
      price: 35.62,
      countdown: { days: 228, hours: 9, mins: 50, secs: 44 },
      promotion: true
    },
    {
      id: 2,
      title: 'California Sunset/Twilight Boat Cruise',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      rating: 4.96,
      reviews: 672,
      duration: '2 days 3 nights',
      groupSize: 'Family',
      price: 48.25
    },
    {
      id: 3,
      title: 'NYC: Food Tastings and Culture Tour',
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&h=600&fit=crop',
      rating: 4.96,
      reviews: 672,
      duration: '3 days 3 nights',
      groupSize: 'Company',
      price: 17.32
    },
    {
      id: 4,
      title: 'Grand Canyon Horseshoe Bend 2 days',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      rating: 4.96,
      reviews: 672,
      duration: '7 days 6 nights',
      groupSize: 'Small group',
      price: 15.63
    }
  ];

  const filterButtons = ['Tours', 'Hotels', 'Tickets', 'Rental', 'Activities'];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2 text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Unlock the Magic of Travel with Travila - Your Gateway to Extraordinary Experiences</span>
          <button className="ml-4 text-yellow-400 hover:underline flex items-center space-x-1">
            <span>Get This Now</span>
            <span>→</span>
          </button>
        </div>
      </div>

        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌴</span>
                  </div>
                  <span className="text-black font-bold">Travila</span>
               </div>

                {/* Desktop Navigation - ADD hidden lg:flex */}
                <nav className="hidden lg:flex items-center space-x-8">
                 {['Home', 'Tours', 'Destinations', 'Activities', 'Hotel', 'Rental', 'Tickets', 'Pages', 'Blog', 'Contact'].map((item) => (
                  <button
                    key={item}
                    className="text-sm font-medium text-gray-700 hover:text-black flex items-center space-x-1"
                  >
                    <span>{item}</span>
                    {item !== 'Contact' && <ChevronDown className="w-3 h-3" />}
                  </button>
                ))}
              </nav>

              {/* Desktop Right Actions - ADD hidden md:flex */}
              <div className="hidden md:flex items-center space-x-4">
                <button className="flex items-center text-black space-x-1 text-sm">
                  <Globe className="w-4 h-4" />
                  <span>EN</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center text-black space-x-1 text-sm">
                  <span>USD</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="p-2 hover:bg-gray-100 text-black rounded-lg">
                  <Sun className="w-5 h-5" />
                </button>
                <button className="text-sm font-semibold text-black hover:text-gray-700">Signin</button>
                <button className="bg-yellow-400 hover:bg-yellow-500 p-2.5 rounded-lg transition">
                  <Grid className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Button*/}
                <button 
                  className="md:hidden p-2 text-black"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
             </div>

             {/* Mobile Menu Dropdown */}
             {isMenuOpen && (
              <div className="lg:hidden py-4 border-t space-y-2">
                {['Home', 'Tours', 'Destinations', 'Activities', 'Hotel', 'Rental', 'Tickets', 'Pages', 'Blog', 'Contact'].map((item) => (
                  <button
                    key={item}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                   >
                    {item}
                  </button>
                ))}
        
                {/* Mobile Actions */}
                <div className="border-t pt-4 px-4 space-y-3">
                  <button className="flex items-center text-black space-x-2 w-full py-2">
                    <Globe className="w-4 h-4" />
                    <span>EN</span>
                  </button>
                  <button className="flex items-center text-black space-x-2 w-full py-2">
                    <span>USD</span>
                  </button>
                  <button className="flex items-center text-black space-x-2 w-full py-2">
                   <Sun className="w-5 h-5" />
                   <span>Theme</span>
                  </button>
                  <button className="w-full text-left font-semibold text-black py-2">Signin</button>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 p-2.5 rounded-lg transition flex items-center justify-center">
                    <Grid className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

      {/* Search Section */}
      <div className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex items-center">
              <div className="flex-1 flex items-center space-x-3 pr-6">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex-1 outline-none text-gray-700 text-base"
                />
              </div>
              <div className="flex items-center space-x-3">
                {filterButtons.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
                      activeFilter === filter
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {['Categories', 'Duration', 'Review / Rating', 'Price range', 'Language'].map((filter) => (
                <button
                  key={filter}
                  className="px-5 py-2.5 bg-white rounded-xl text-sm font-medium text-gray-700 flex items-center space-x-2 hover:bg-gray-50 border border-gray-200"
                >
                  <span>{filter}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Sort from High to Low</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Title */}
        <div className="mb-12 flex items-start justify-between">
          <div>
            <h1 className="text-6xl text-black font-bold mb-3 leading-tight">Your Journey, Your Way</h1>
            <p className="text-black text-xl">Discover the World's Treasures with Travila</p>
          </div>
          <div className="flex space-x-3 mt-4">
            <button className="w-12 h-12 rounded-full bg-black hover:bg-gray-200 flex items-center justify-center transition border border-gray-200">
              <span className="text-xl">←</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-black hover:bg-gray-200 flex items-center justify-center transition border border-gray-200">
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <button className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                {tour.badge && (
                  <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1">
                    <span>⚡</span>
                    <span>{tour.badge}</span>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold">{tour.rating.toFixed(2)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-black text-lg mb-3 line-clamp-2 leading-snug">{tour.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{tour.duration}</span>
                  <span className="mx-2">·</span>
                  <span>{tour.groupSize}</span>
                </div>

                {/* Countdown Timer */}
                {tour.promotion && (
                  <div className="mb-5 pb-5 border-b border-gray-100">
                    <p className="text-xs text-black mb-3">Promotion will end in</p>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="text-center">
                        <div className="text-2xl text-black font-bold">{countdown.days}</div>
                        <div className="text-xs text-black mt-0.5">Days</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl text-black font-bold">{countdown.hours}</div>
                        <div className="text-xs text-black mt-0.5">Hours</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl text-black font-bold">{countdown.mins}</div>
                        <div className="text-xs text-black mt-0.5">Mins</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl text-black font-bold">{countdown.secs}</div>
                        <div className="text-xs text-black mt-0.5">Secs</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl text-black font-bold">${tour.price.toFixed(2)}</span>
                    <span className="text-black text-sm"> / person</span>
                  </div>
                  {!tour.promotion && (
                    <button className="px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition">
                      Book Now
                    </button>
                  )}
                </div>

                {tour.reviews > 0 && (
                  <p className="text-xs text-black mt-2">({tour.reviews} reviews)</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-semibold text-black mb-3">WHY CHOOSE US</p>
              <h2 className="text-5xl text-black font-bold mb-6 leading-tight">
                Dare to live the lift you've always wanted
              </h2>
              <p className="text-black text-lg mb-8">
                Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practised by our operators worldwide.
              </p>
              <div className="flex items-center space-x-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" />
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-400 rounded-3xl p-6 text-center">
                <div className="text-6xl mb-4">🎫</div>
                <h3 className="font-bold text-xl mb-2">+1500 Destination</h3>
                <p className="text-sm text-black">Across the world, with exclusive destination partners</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-gray-200">
                <div className="bg-blue-100 rounded-2xl h-32 mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="font-bold text-black">Fast Booking</h3>
              </div>
              <div className="bg-orange-400 rounded-3xl p-6 text-white">
                <div className="mb-16">
                  <h3 className="font-bold text-black text-lg mb-2">Best Price</h3>
                  <p className="text-sm opacity-90">Guaranteed</p>
                </div>
                <div className="text-right text-6xl">✈️</div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-gray-200">
                <div className="mb-4">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="font-bold text-black mb-2">Great 24/7 Support</h3>
                <p className="text-sm text-gray-600">We're here for you, any time, any day</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Offer Deals Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl text-black font-bold mb-2">Flight Offer Deals</h2>
              <p className="text-black">Competitive fares for your route-specific searches</p>
            </div>
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-black">
                ←
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-black">
                →
              </button>
            </div>
          </div>

          {/* Flight Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
                <button className="mb-4">
                  <Heart className="w-5 h-5 text-gray-400" />
                </button>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center flex-1">
                    <p className="text-xs text-black mb-1">📅 09 Jan 2021</p>
                    <p className="font-bold text-black">Denmark</p>
                    <p className="text-sm text-black">Business</p>
                  </div>
                  <div className="mx-4">
                    <div className="text-black">✈️</div>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-xs text-black mb-1">⏰ 12 Jul 2021</p>
                    <p className="font-bold text-black">New York</p>
                    <p className="text-sm text-black">Economy</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-2xl text-black font-bold">$288.15</p>
                    <p className="text-xs text-black">12 hours left</p>
                  </div>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Adventure Banners Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Banner 1 */}
            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop" 
                alt="Camping" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Waking up in a far away place</h3>
                <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition">
                  View More →
                </button>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop" 
                alt="Beach" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm mb-2">Explore the World</p>
                <h3 className="text-2xl font-bold mb-3">The adventure starts today</h3>
                <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition">
                  View More →
                </button>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop" 
                alt="Nature" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm mb-2">Discover Vacations</p>
                <h3 className="text-2xl font-bold mb-3">Start your adventure Now</h3>
                <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition">
                  View More →
                </button>
              </div>
            </div>

            {/* Banner 4 */}
            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop" 
                alt="Mountain" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Waking up in a far away place</h3>
                <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition">
                  View More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Dream Destinations Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Images */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=800&fit=crop" 
                alt="Travel" 
                className="rounded-3xl w-full h-96 object-cover"
              />
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1530053969600-caed2596d242?w=600&h=400&fit=crop" 
                  alt="Swimming" 
                  className="rounded-3xl w-full h-44 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop" 
                  alt="Beach" 
                  className="rounded-3xl w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <p className="text-sm font-semibold text-black mb-3">Fast payment</p>
              <h2 className="text-5xl text-black font-bold mb-6 leading-tight">
                Discover Dream Destinations with Ease
              </h2>
              <p className="text-black text-lg mb-8">
                Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practised by our operators worldwide.
              </p>
              <div className="flex items-center space-x-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="PayPal" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-8" />
                <div className="flex space-x-2">
                  <div className="w-10 h-7 bg-red-500 rounded"></div>
                  <div className="w-10 h-7 bg-orange-500 rounded"></div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Skrill" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full border-2 border-black overflow-hidden">
                <img
                  src="/images/client1.jpeg"
                  alt="Client 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-10 h-10 bg-white rounded-full border-2 border-black -ml-3 overflow-hidden">
                  <img
                  src="/images/client2.jpeg"
                  alt="Client 2"
                  className="object-cover w-full h-full"
                  />
              </div>
              <div className="w-10 h-10 bg-white rounded-full border-2 border-black -ml-3 overflow-hidden">
                  <img
                    src="/images/client3.jpeg"
                    alt="Client 3"
                    className="object-cover w-full h-full"
                    />
              </div>
            </div>
              <span className="text-sm font-semibold text-black">+100 thousands</span>
            </div>
          </div>

          <h2 className="text-5xl text-black font-bold mb-4 max-w-xl">What our clients are saying about us?</h2>
          <p className="text-black text-lg mb-12 max-w-2xl">
            Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practised by our operators worldwide.
          </p>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full">
                    <img
                      src="/images/client2.jpeg"
                      alt="Mary Morehouse"
                      className="object-cover w-full h-full"
                   />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Mary Morehouse</h4>
                    <p className="text-sm text-gray-500">Happy Customer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-black leading-relaxed">
                I was sold the minute I heard the description from my mom (who is always right) which led to planning a trip. My husband and I booked our honeymoon to Maldives through TripRex (highly recommend) and the flight was wonderful.
              </p>
            </div>

            <div className="bg-white  rounded-3xl p-8 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full">
                    <img
                      src="/images/client1.jpeg"
                      alt="Renee John"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Renee John</h4>
                    <p className="text-sm text-gray-500">Happy Customer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I booked the cheapest economy Air France ticket I found but at the cheapest price. If I'm equally able to make my purchase from website thanks to your kind assistance. Thanks for providing info about the flight.
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center space-x-2">
            <button className="w-2 h-2 rounded-full bg-gray-400"></button>
            <button className="w-2 h-2 rounded-full bg-black"></button>
            <button className="w-2 h-2 rounded-full bg-gray-400"></button>
          </div>
        </div>
      </div>

      {/* News, Tips & Guides Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl text-black font-bold mb-2">News, Tips & Guides</h2>
              <p className="text-black">Find the destination content to help customers</p>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
              View More →
            </button>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-8">
            {[
              {
                category: 'Cultural',
                tag: 'Travel tips',
                date: 'Nov 23, 2024',
                comments: '315 comments',
                title: 'Ultimate 4-step Travel Planning Guide: How to plan a Business Journey',
                author: 'James Silva',
                type: 'Keep Reading',
                image: '/images/culture.jpeg'
              },
              {
                category: 'Travel',
                tag: 'Travel tips',
                date: 'mar 12, 2023',
                comments: '535 comments',
                title: 'Top 10 Tour places to Budget-friendly destinations in Asia',
                author: 'James Silva',
                type: 'Keep Reading',
                image: '/images/travel.jpeg'
              },
              {
                category: 'Discovery',
                tag: 'Travel tips',
                date: 'april 26, 2022',
                comments: '395 comments',
                title: 'Discovering Hidden Gems: WCOF - the Eccentric Tech Towns Of the Southwest',
                author: 'James Silva',
                type: 'Keep Reading',
                image: '/images/discover.jpeg'
              }
            ].map((post, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition group">
                {/* Image Placeholder 1*/}
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0">
                   <img
                     src={post.image}
                     alt={post.category}
                      className="object-cover w-full h-full"
                   /> 
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-sm font-semibold text-gray-700">{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.tag}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.comments}</span>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-6 leading-snug line-clamp-2 group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full">
                        <img
                        src="/images/client4.jpeg"
                        alt="James Silva"
                        className="object-cover w-full h-full"
                      />
                      </div>
                      <span className="text-sm font-semibold">{post.author}</span>
                    </div>
                    <button className="text-sm font-semibold text-gray-700 hover:text-black">
                      {post.type} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-100 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            Join our newsletter!
          </div>
          <h2 className="text-4xl text-black font-bold mb-4">
            Subscribe to see secret deals prices drop the moment you sign up!
          </h2>
          <div className="flex items-center justify-center space-x-3 mt-8 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-6 py-4 rounded-full border-0 outline-none text-gray-700"
            />
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">No ads. No trails. No commitments</p>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <div className="bg-white py-20 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-12">
            <div>
              <h2 className="text-5xl text-black font-bold mb-3">Popular Destinations</h2>
              <p className="text-gray-800 text-lg">Favorite destinations based on customer reviews</p>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              {['Categories', 'Duration', 'Review / Rating', 'Price range'].map((filter) => (
                <button
                  key={filter}
                  className="px-5 py-2.5 bg-gray-100 rounded-xl text-sm font-medium text-gray-700 flex items-center space-x-2 hover:bg-gray-200 transition"
                >
                  <span>{filter}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { name: 'Venice', tours: 356, activities: 248, image: '/images/venice.jpeg' },
              { name: 'Amsterdam', tours: 555, activities: 248, image: '/images/amsterdam.jpeg' },
              { name: 'Budapest', tours: 150, activities: 248, image: '/images/bupaset.jpeg' },
              { name: 'Lisbon', tours: 159, activities: 248, image: '/images/lisbon.jpeg' }
            ].map((dest, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition group cursor-pointer">
                <div className="h-32 bg-gray-100 rounded-xl mb-4">
                  <img
                    src={dest.image}
                    alt={dest.name}
                     className="object-cover w-full h-full"
                 />
                </div>
                <h3 className="font-bold text-xl mb-2">{dest.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{dest.tours} Tours, {dest.activities} Activities</p>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
                  →
                </button>
              </div>
            ))}
          </div>

          <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'London', tours: 356, activities: 248, image: '/images/london.jpeg' },
              { name: 'Ottawa', tours: 555, activities: 248, image: '/images/ottawa.jpeg' },
              { name: 'Paris', tours: 150, activities: 248, image: '/images/paris.jpeg' }
            ].map((dest, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition group cursor-pointer">
                <div className="h-32 bg-gray-100 rounded-xl mb-4">
                  <img
                    src={dest.image}
                    alt={dest.name}
                     className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">{dest.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{dest.tours} Tours, {dest.activities} Activities</p>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
                  →
                </button>
              </div>
            ))}
            {/* CTA Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col justify-center items-start">
              <h3 className="font-bold text-black text-xl mb-2">Crafting Your Perfect Travel Experience</h3>
              <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition flex items-center space-x-2">
                <span>Browse All destinations</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Rated Hotels Section */}
      <div className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-12">
            <div>
              <h2 className="text-5xl text-black font-bold mb-3">Top Rated Hotels</h2>
              <p className="text-gray-800 text-lg">Quality as judged by customers. Book at the ideal price!</p>
            </div>
            <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition flex items-center space-x-2">
              <span>View More</span>
              <span>→</span>
            </button>
          </div>

          {/* Hotels Grid */}
          <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'California Sunset/Twilight Boat Cruise',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
                location: 'Manchester, England',
                rating: 4.96,
                reviews: 672,
                price: 48.25,
                stars: 5
              },
              {
                title: 'NYC: Food Tastings and Culture Tour',
                image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&h=600&fit=crop',
                location: 'Manchester, England',
                rating: 4.96,
                reviews: 672,
                price: 17.32,
                stars: 5
              },
              {
                title: 'Grand Canyon Horseshoe Bend 2 days',
                image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                location: 'Manchester, England',
                rating: 4.96,
                reviews: 672,
                price: 15.63,
                stars: 5
              },
              {
                title: 'California Sunset/Twilight Boat Cruise',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
                location: 'Manchester, England',
                rating: 4.96,
                reviews: 672,
                price: 48.25,
                stars: 5
              }
            ].map((hotel, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold">{hotel.rating}</span>
                    <span className="text-xs text-gray-500">({hotel.reviews} reviews)</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{hotel.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>📍</span>
                    <span className="ml-1">{hotel.location}</span>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold">${hotel.price}</span>
                      <span className="text-gray-500 text-sm"> / person</span>
                    </div>
                    <button className="px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {/* Footer */}
      <Footer />
    </div>
  );
}
