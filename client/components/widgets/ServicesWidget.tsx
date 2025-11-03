import { GraduationCap, CheckCircle, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import servicesData from "@/config/data/servicesWidget.json";

interface ServiceData {
  title: string;
  description: string;
  icon: string;
  href: string;
  backgroundImage?: string;
}

interface Service extends ServiceData {
  icon: React.ComponentType<{ className?: string }>;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  CheckCircle,
  Wrench,
};

const SERVICES: Service[] = servicesData.services.map((service: ServiceData) => ({
  ...service,
  icon: ICON_MAP[service.icon] || GraduationCap,
}));

export default function ServicesWidget() {
  return (
    <section className="py-12 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-16">
          <div className="w-12 md:w-16 h-1 bg-brand-secondary mb-2 md:mb-4"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(205_100%_12%)]">
            Our Services
          </h2>
          <p className="mt-2 md:mt-4 text-sm md:text-lg text-slate-700 max-w-2xl">
            Comprehensive solutions for laboratory safety compliance and quality
            assurance
          </p>
        </div>

        <div className="grid gap-4 md:gap-8 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.href}
                className="relative group overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:shadow-lg hover:border-slate-300 cursor-pointer block"
              >
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.backgroundImage || "/placeholder.svg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {service.backgroundImage && (
                  <div className="absolute inset-0 bg-black/40" />
                )}

                <div className="relative z-10 p-4 md:p-8 h-full flex flex-col justify-end min-h-64 md:min-h-96">
                  <h3
                    className={`mb-2 md:mb-3 text-base md:text-xl font-bold ${
                      service.backgroundImage
                        ? "text-white"
                        : "text-[hsl(205_100%_12%)]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm md:text-base leading-relaxed ${
                      service.backgroundImage
                        ? "text-white/90"
                        : "text-slate-700"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="absolute top-4 md:top-6 right-4 md:right-6 text-white">
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:-rotate-45" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[hsl(var(--secondary-brand))] transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
