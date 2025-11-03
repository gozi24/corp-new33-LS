import { Link } from "react-router-dom";
import {
  GraduationCap,
  ShieldCheck,
  Microscope,
  BadgeCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/config";

interface HeroFeature {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  bg: string;
}

interface HeroButton {
  text: string;
  href: string;
  variant: "primary" | "outline";
}

interface HeroSectionProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  features?: HeroFeature[];
  cta?: HeroButton[];
}

const defaultConfig: Required<HeroSectionProps> = {
  title: `Welcome to ${siteConfig.siteName}!`,
  description: `${siteConfig.hero_descr}`,
  backgroundImage: "/ebi_hero.jpg",
  backgroundImageAlt:
    "Bright and sterile laboratory featuring high-tech research equipment and medical professionals at work",
  backgroundGradFrom: "#020113",
  backgroundGradTo: "#003BA3",
  features: [
    {
      label: "Training & seminars",
      icon: GraduationCap,
      bg: "bg-[hsl(var(--brand-start))]",
    },
    {
      label: "Regulatory guidance",
      icon: ShieldCheck,
      bg: "bg-[hsl(205_100%_35%)]",
    },
    {
      label: "Practical resources",
      icon: Microscope,
      bg: "bg-[hsl(var(--brand-start))]",
    },
    {
      label: "Certification support",
      icon: BadgeCheck,
      bg: "bg-[hsl(205_100%_35%)]",
    },
  ],
  cta: [
    {
      text: "Get certified",
      href: "/contact",
      variant: "primary",
    },
    {
      text: "Explore resources",
      href: "/resources",
      variant: "outline",
    },
  ],
};

export default function HeroSection(props: HeroSectionProps = {}) {
  const config = {
    ...defaultConfig,
    ...props,
  };

  return (
    <section
      className="pt-5 relative text-white overflow-hidden min-h-screen"
      data-header-anchor
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(2_1%_7%)] to-[hsl(205_100%_38%)]">
        <img
          src={config.backgroundImage}
          alt={config.backgroundImageAlt}
          className="h-full w-full object-cover opacity-50"
          loading="eager"
          decoding="async"
        />
        <div
          className="
            absolute inset-0 bg-gradient-to-r
            from-[var(--from)] to-[var(--to)]
            mix-blend-multiply
          "
          style={{
            "--from": `${config.backgroundGradFrom}`,
            "--to": `${config.backgroundGradTo}`,
          }}
        />
      </div>
      <div className="relative container mx-auto px-4 pt-28 pb-16 md:pt-39 xl:pt-48 lg:pb-40 flex items-center">
        <div className="hero-grid grid gap-6 items-center max-w-3xl lg:max-w-4xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight"
            style={{ lineHeight: "1.15" }}
          >
            {config.title}
          </h1>
          <p className="mt-1 md:mt-4 xl:mt-6 text-white text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl">
            {config.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 max-w-2xl">
            {config.features.map(({ label, icon: Icon, bg }) => (
              <div
                key={label}
                className={cn(
                  "flex items-center gap-2 md:gap-4 text-white rounded-lg px-3 py-3 md:px-4 md:py-4 backdrop-blur-sm bg-white/10 border border-white/20",
                  bg,
                )}
              >
                <div className="flex-shrink-0 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-white/20">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <span className="font-semibold text-sm md:text-base leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 xl:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4">
            {config.cta.map((button) => (
              <Button
                key={button.text}
                asChild
                size="md"
                variant={button.variant}
                className={
                  button.variant === "primary"
                    ? "bg-white text-[hsl(var(--primary))] hover:bg-white/90"
                    : "backdrop-blur-sm"
                }
              >
                <Link to={button.href}>{button.text}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
