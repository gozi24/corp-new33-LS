import { Link } from "react-router-dom";
import ContactsDetailsWidget from "@/components/widgets/ContactsDetailsWidget";
import SocialMediaWidget from "@/components/widgets/SocialMediaWidget";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/config";

interface NavigationLink {
  label: string;
  href: string;
}

const footerNavigation: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  // { label: "Products", href: "/products" },
  { label: "News", href: "/news" },
  { label: "FAQ", href: "/resources/faq" },
  { label: "Contact", href: "/contact" },
];

const footerServices: NavigationLink[] = [
  { label: "Trainings and Seminars", href: "/services/trainings-and-seminars" },
  { label: "Validation Service", href: "/services/validation-service" },
  { label: "Commissioning and Qualification", href: "/services/commissioning-and-qualification" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1f4a] text-white pb-4">
      <div className="container mx-auto px-4 py-16 grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-4 text-white">
            <Logo variant="footer" />
          </div>
          <p className="text-sm leading-relaxed text-white/90">
            {siteConfig.description}
          </p>
          <div className="mt-8">
            <div className="text-sm font-semibold mb-2">Follow us</div>
            <SocialMediaWidget />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-10">
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/90">
              {footerNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    className="hover:text-brand-secondary transition"
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-2 text-sm text-white/90">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    className="hover:text-brand-secondary transition"
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contacts</h4>
          <div className="text-white/90">
            <ContactsDetailsWidget />
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-start text-sm text-white/90 text-left">
          <p>© 2025 {siteConfig.siteName}. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
