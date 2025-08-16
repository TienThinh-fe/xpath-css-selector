import React from 'react'
import type { ExerciseComponentProps } from '../../types'

// Exercise 1: Basic button selection
export const Exercise1: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Simple Login Form</h3>
        <div className="max-w-md mx-auto bg-white border rounded-lg p-6 shadow-sm">
          <h4 className="text-xl font-semibold mb-4">Login</h4>
          <div className="space-y-4">
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <button
              id="login-submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exercise 2: Class-based selection
export const Exercise2: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Navigation Menu</h3>
        <nav className="bg-gray-100 p-4 rounded-lg">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#" id="nav-home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" id="nav-about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" id="nav-products" className="nav-link active">
                Products
              </a>
            </li>
            <li>
              <a href="#" id="nav-contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

// Exercise 3: ID-based selection
export const Exercise3: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">User Profile</h3>
        <div className="max-w-md mx-auto bg-white border rounded-lg p-6 shadow-sm">
          <div className="space-y-4">
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <button
              id="save-profile"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exercise 4: Attribute selection
export const Exercise4: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      {/* Newsletter Signup Form */}
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Newsletter Signup</h3>
        <form className="max-w-sm mx-auto bg-gray-50 border rounded-lg p-4 shadow-sm">
          <div className="space-y-3">
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Contact Form */}
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Contact Form</h3>
        <form
          id="contact-form"
          className="max-w-md mx-auto bg-white border rounded-lg p-6 shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-gray-700 mb-1 required-field"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-gray-700 mb-1 required-field"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <button
              id="contact-submit"
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Exercise 5: Text content selection
export const Exercise5: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Product Listing</h3>
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold">Laptop</h4>
            <p className="text-gray-600">$999</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold">Tablet</h4>
            <p className="text-gray-600">$599</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold">Smartphone</h4>
            <p className="text-gray-600">$799</p>
            <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded">
              Out of Stock
            </button>
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold">Monitor</h4>
            <p className="text-gray-600">$399</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
