import { GraduationCap, Smartphone, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 animate-fade-up">
            La nueva era de la educación comienza aquí
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-8 animate-fade-up">
            Digitaliza la gestión de tu colegio con nuestra solución integral. 
            App móvil para padres y estudiantes, sistema web para docentes y administración.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up">
            <a href="#contact" className="btn-primary">
              Solicita tu demo
            </a>
            <a href="#benefits" className="btn-secondary">
              Conoce los beneficios
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg animate-fade-up">
              <GraduationCap size={32} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Gestión Académica</h3>
              <p className="text-text-light text-center">Simplifica la administración escolar</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg animate-fade-up">
              <Smartphone size={32} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">App Móvil</h3>
              <p className="text-text-light text-center">Conecta con padres y estudiantes</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg animate-fade-up">
              <MessageSquare size={32} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Comunicación</h3>
              <p className="text-text-light text-center">Mantén a todos informados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;