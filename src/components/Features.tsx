import { Computer, Smartphone, Book, Mail, School, Settings } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Todo lo que necesitas en una sola plataforma
          </h2>
          <p className="text-text-light max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
            Nuestra solución integral combina una potente app móvil para familias y un 
            sistema web completo para la gestión escolar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* App Móvil */}
          <div className="space-y-8 animate-fade-up [animation-delay:400ms]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800"
                alt="App Móvil"
                className="rounded-lg shadow-xl mb-8 hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Smartphone className="text-primary" />
                App Móvil
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <Book className="text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Seguimiento Académico</h4>
                  <p className="text-text-light">Calificaciones, tareas y asistencia en tiempo real</p>
                </div>
              </div>
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <Mail className="text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Comunicación Directa</h4>
                  <p className="text-text-light">Mensajes, notificaciones y circulares digitales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sistema Web */}
          <div className="space-y-8 animate-fade-up [animation-delay:600ms]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
                alt="Sistema Web"
                className="rounded-lg shadow-xl mb-8 hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Computer className="text-primary" />
                Sistema Web
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <School className="text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Gestión Académica</h4>
                  <p className="text-text-light">Control de notas, asistencia y planificación</p>
                </div>
              </div>
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <Settings className="text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Administración Integral</h4>
                  <p className="text-text-light">Matrícula, pagos y reportes automatizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;