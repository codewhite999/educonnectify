import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Descubre cómo EduSystem ha transformado la gestión educativa en diferentes instituciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
            </div>
            <p className="text-text-light mb-4">
              "La implementación de EduSystem ha mejorado significativamente nuestra comunicación con los padres y la eficiencia administrativa."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold">María González</p>
              <p className="text-text-light text-sm">Directora, Colegio San José</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
            </div>
            <p className="text-text-light mb-4">
              "Como docente, ahora puedo dedicar más tiempo a la enseñanza y menos a tareas administrativas. La plataforma es intuitiva y fácil de usar."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold">Carlos Ramírez</p>
              <p className="text-text-light text-sm">Profesor de Matemáticas</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
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