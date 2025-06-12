import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-10">
            <div className="max-w-10/12 mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Contact Info */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Contact Us</h2>
                    <p>Email: support@example.com</p>
                    <p>Phone: +880-*******98</p>
                    <p>Address: Tech Street, Dhaka, Bangladesh</p>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Follow Us</h2>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-sm">
                    <h2 className="font-bold text-lg mb-2">Lingo Bingo</h2>
                    <p>A Vocabulary Learning Application</p>
                </div>
            </div>
            <p className="mt-2 text-center py-5">&copy; {new Date().getFullYear()} Bishal Saha. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
