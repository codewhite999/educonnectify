import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-text py-12">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-4">EduSystem</h3>
            <p className="text-white/80">
              Transformando la educación con tecnología innovadora
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@edusystem.com" className="text-white/80 hover:text-white">
                  info@edusystem.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-white">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-white/80">Ciudad, País</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-white/80 hover:text-white">
                  Características
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-white/80 hover:text-white">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} EduSystem. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;