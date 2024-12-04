import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-text-light max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
            Descubre cómo EduSystem ha transformado la gestión educativa en diferentes instituciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up [animation-delay:400ms]">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <p className="text-text-light mb-4">
              "La implementación de EduSystem ha mejorado significativamente nuestra comunicación con los padres y la eficiencia administrativa."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold">María González</p>
              <p className="text-text-light text-sm">Directora, Colegio San José</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up [animation-delay:600ms]">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <p className="text-text-light mb-4">
              "Como docente, ahora puedo dedicar más tiempo a la enseñanza y menos a tareas administrativas. La plataforma es intuitiva y fácil de usar."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold">Carlos Ramírez</p>
              <p className="text-text-light text-sm">Profesor de Matemáticas</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up [animation-delay:800ms]">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <p className="text-text-light mb-4">
              "Como padre, aprecio poder seguir el progreso de mis hijos en tiempo real y mantener una comunicación fluida con los profesores."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold">Ana Martínez</p>
              <p className="text-text-light text-sm">Madre de Familia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;