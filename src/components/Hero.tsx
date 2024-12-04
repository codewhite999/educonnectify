import { GraduationCap, Smartphone, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 to-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 animate-fade-up">
            La nueva era de la educación comienza aquí
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-8 animate-fade-up [animation-delay:200ms]">
            Digitaliza la gestión de tu colegio con nuestra solución integral. 
            App móvil para padres y estudiantes, sistema web para docentes y administración.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up [animation-delay:400ms]">
            <a href="#contact" className="btn-primary hover:scale-105 transition-transform">
              Solicita tu demo
            </a>
            <a href="#benefits" className="btn-secondary hover:scale-105 transition-transform">
              Conoce los beneficios
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg animate-fade-up [animation-delay:600ms] hover:scale-105 transition-all duration-300">
              <GraduationCap size={32} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Gestión Académica</h3>
              <p className="text-text-light text-center">Simplifica la administración escolar</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg animate-fade-up [animation-delay:800ms] hover:scale-105 transition-all duration-300">
              <Smartphone size={32} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">App Móvil</h3>
              <p className="text-text-light text-center">Conecta con padres y estudiantes</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg animate-fade-up [animation-delay:1000ms] hover:scale-105 transition-all duration-300">
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