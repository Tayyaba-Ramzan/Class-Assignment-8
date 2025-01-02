import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-white text-blue-950 py-12 border-t-4 mt-14 border-blue-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Discover Pakistan</h3>
                        <p className="text-gray-800">
                            Discover Pakistan is your go-to travel companion, offering insights, guides, and unforgettable experiences around the globe. Start your journey with us!
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li><Link href="/about" className="hover:underline">About</Link></li>
                            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
                        <ul className="space-y-2">
                            <li><Link href="/blog/city-of-lights-karachi" className="hover:underline">Karachi</Link></li>
                            <li><Link href="/blog/green-capital-islamabad" className="hover:underline">Islamabad</Link></li>
                            <li><Link href="/blog/exploring-the-beauty-of-swat-valley" className="hover:underline">Sawat Valley</Link></li>
                            <li><Link href="/blog/mesmerizing-journey-to-hunza-valley" className="hover:underline">Hunza Valley</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
                        <div className="flex space-x-4 mb-4">
                            <Link href="https://facebook.com">
                                <FiFacebook className="text-2xl hover:text-blue-500 transition-colors" />
                            </Link>
                            <Link href="https://twitter.com">
                                <FiTwitter className="text-2xl hover:text-black transition-colors" />
                            </Link>
                            <Link href="https://instagram.com">
                                <FiInstagram className="text-2xl hover:text-pink-500 transition-colors" />
                            </Link>
                            <Link href="https://youtube.com">
                                <FiYoutube className="text-2xl hover:text-red-500 transition-colors" />
                            </Link>
                        </div>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="px-4 py-2 text-black rounded-md focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-yellow-600 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-white pt-6 text-center">
                    <p>&copy; 2024 Discover Pakistan. All Rights Reserved.</p>
                    <p className="text-black">Made with 🌍 for travelers by Discover Pakistan Team.</p>
                </div>
            </div>
        </footer>
    );
}
