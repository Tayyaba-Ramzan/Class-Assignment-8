"use client";
import Image from "next/image";
import React, { useState } from "react";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      console.log(error);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gray-50 px-6 py-12 md:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h2 className="text-2xl mb-6 text-center text-blue-950 font-bold">Contact Us for Your Travel Queries</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-300 p-3 rounded-full">
                <Image
                src={"/address.png"}
                alt="Address Icon"
                width={6}
                height={6}
                className="text-blue-600"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">123 Discover Pakistan, Globe City, 98765</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-300 p-3 rounded-full">
              <Image
                src={"/email.png"}
                alt="Email Icon"
                width={6}
                height={6}
                className="text-blue-600"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">discoverpakistan@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-300 p-3 rounded-full">
              <Image
                src={"/call.png"}
                alt="Phone Icon"
                width={6}
                height={6}
                className="text-blue-600"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (987) 654-3210</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-300 p-3 rounded-full">
              <Image
                src={"/site.png"}
                alt="site Icon"
                width={6}
                height={6}
                className="text-blue-600"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Website</h3>
                <p className="text-gray-600">discoverpakistan.vercel.app</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xl text-gray-800 mb-3" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Please provide your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 italic"
                required
              />
            </div>
            
            <div>
              <label className="block text-xl text-gray-800 mb-3" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 italic"
                required
              />
            </div>
            
            <div>
              <label className="block text-xl text-gray-800 mb-3" htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help you"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border-2 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 italic"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors 
                ${status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"}`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-700 text-center font-semibold mt-4">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-700 text-center font-semibold mt-4">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
