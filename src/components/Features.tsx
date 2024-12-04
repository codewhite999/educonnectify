import { Computer, Smartphone, Book, Mail, School, Circuit } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que necesitas en una sola plataforma
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Nuestra solución integral combina una potente app móvil para familias y un 
            sistema web completo para la gestión escolar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* App Móvil */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Smartphone className="text-primary" />
              App Móvil
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Book className="text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Seguimiento Académico</h4>
                  <p className="text-text-light">Calificaciones, tareas y asistencia en tiempo real</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Comunicación Directa</h4>
                  <p className="text-text-light">Mensajes, notificaciones y circulares digitales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sistema Web */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Computer className="text-primary" />
              Sistema Web
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <School className="text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Gestión Académica</h4>
                  <p className="text-text-light">Control de notas, asistencia y planificación</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Circuit className="text-primary shrink-0" />
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