"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section in Footer */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Subscribe to see secret deals prices drop the moment you sign up!
              </h3>
            </div>
            <div className="flex items-center space-x-3 ml-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-gray-900 border border-gray-700 outline-none text-white placeholder-gray-500 w-80"
              />
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌴</span>
              </div>
              <span className="text-2xl font-bold">Travila</span>
            </div>
            
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🕐</span>
                <span>Hours: 8:00 - 17:00, Mon - Sat</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>support@travila.com</span>
              </div>
              <div className="pt-4">
                <div className="flex items-center space-x-2 text-sm mb-2">
                  <span>📞</span>
                  <span className="text-gray-400">Need help? Call us</span>
                </div>
                <a href="tel:1-800-222-8888" className="text-yellow-400 text-xl font-bold hover:text-yellow-500">
                  1-800-222-8888
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Follow us</p>
              <div className="flex items-center space-x-3">
                <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition">
                  <span>f</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition">
                  <span>𝕏</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition">
                  <span>📷</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition">
                  <span>in</span>
                </button>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Forum Support</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Live Chat</a></li>
              <li><a href="#" className="hover:text-white transition">How it works</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Charges logo</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Community Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Jobs and Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Awards</a></li>
              <li><a href="#" className="hover:text-white transition">Agencies</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Tour Guide</a></li>
              <li><a href="#" className="hover:text-white transition">Tour Booking</a></li>
              <li><a href="#" className="hover:text-white transition">Hotel Booking</a></li>
              <li><a href="#" className="hover:text-white transition">Ticket Booking</a></li>
              <li><a href="#" className="hover:text-white transition">Rental Services</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Data Processing</a></li>
              <li><a href="#" className="hover:text-white transition">Data Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex items-center justify-between">
          <p className="text-gray-400 text-sm">© 2025 Travila Inc. All rights reserved</p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy policy</a>
            <a href="#" className="hover:text-white transition">Legal notice</a>
            <a href="#" className="hover:text-white transition">Accessibility</a>
          </div>
          <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition">
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}