import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">EduSoft360</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-text hover:text-primary transition-colors">Características</a>
            <a href="#benefits" className="text-text hover:text-primary transition-colors">Beneficios</a>
            <a href="#testimonials" className="text-text hover:text-primary transition-colors">Testimonios</a>
            <a href="#contact" className="btn-primary">Solicita tu demo</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </a>
            <a 
              href="#benefits" 
              className="text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#testimonials" 
              className="text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicita tu demo
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;