export default function Footer() {
    return (
      <footer
        className="relative text-white py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/WhatsApp Image 2024-12-11 at 22.56.23_448c4029.jpg')",
        }}
      >
        <div className="container mx-auto px-6 md:px-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            {/* Branding Section */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold">Amatip Digital Box</h2>
              <p className="text-sm font-light mt-2 max-w-md">
                Your all-in-one digital transformation toolbox to build, grow, and monetize your digital presence.
              </p>
            </div>
  
            {/* Social Media Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://facebook.com"
                className="hover:text-pink-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-pink-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-pink-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-pink-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-600 mt-8"></div>
  
          {/* Links and Copyright */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm">
            <div className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="hover:text-pink-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-pink-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-pink-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </div>
            <p className="font-light text-gray-300">
              © {new Date().getFullYear()} Amatip Digital Box. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  