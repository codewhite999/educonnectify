import { Users, Brain, ChartBar, Shield } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beneficios para toda la comunidad educativa
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Nuestra plataforma está diseñada para mejorar la experiencia de todos los involucrados
            en el proceso educativo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Para Padres</h3>
              <p className="text-text-light">
                Seguimiento en tiempo real del progreso académico y comunicación directa con docentes
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Brain className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Para Docentes</h3>
              <p className="text-text-light">
                Herramientas para gestionar clases, calificaciones y comunicación eficiente
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ChartBar className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Para Estudiantes</h3>
              <p className="text-text-light">
                Acceso fácil a recursos educativos, tareas y seguimiento de su desempeño
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Para Administradores</h3>
              <p className="text-text-light">
                Control total sobre la gestión escolar, reportes y análisis de datos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;