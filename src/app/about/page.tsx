import Image from 'next/image';
import Link from 'next/link';
import travel from '../../../public/travel.jpg';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-16">
      <section className="relative bg-white shadow-lg rounded-lg max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto">
            <Image
              src={travel}
              alt="Discover Pakistan"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute inset-0"
            />
          </div>

          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
              Discover Pakistan
            </h1>
            <p className="text-gray-700 text-lg leading-8">
              Welcome to <span className="font-bold">Discover Pakistan</span>! 
              Your one-stop destination for uncovering the hidden beauty and culture of Pakistan. 
              We provide inspiring guides, real-life stories, and practical tips to make your travels unforgettable.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 underline decoration-blue-500 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-7 max-w-3xl mx-auto">
            We aim to ignite your wanderlust and inspire you to explore Pakistan&#39;s
            breathtaking landscapes, rich culture, and diverse heritage. 
            Whether it&#39;s snow-capped mountains or bustling cities, every journey has a story to tell.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Expert Travel Guides</h3>
            <p className="text-gray-600">Step-by-step guides to explore popular and hidden gems in Pakistan.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Inspirational Stories</h3>
            <p className="text-gray-600">Real travel stories to spark your imagination and ignite your spirit.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Handy Travel Tips</h3>
            <p className="text-gray-600">Practical advice to make your trips smooth and stress-free.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Gear Reviews</h3>
            <p className="text-gray-600">Honest reviews to help you pick the right gear for your adventures.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Hidden Destinations</h3>
            <p className="text-gray-600">Uncover lesser-known but equally magical spots across Pakistan.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Cultural Insights</h3>
            <p className="text-gray-600">Experience Pakistan&#39;s traditions and hospitality up close.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 py-12 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us on an Unforgettable Journey</h2>
        <p className="text-lg leading-7 max-w-3xl mx-auto mb-8">
        Let&#39;s explore the beauty of Pakistan together. From towering peaks to serene beaches, 
          every adventure awaits your arrival. Ready to start your journey?
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow hover:bg-gray-100 transition">
          <Link href={"/"}>Start Exploring</Link>
        </button>
      </section>
    </div>
  );
}