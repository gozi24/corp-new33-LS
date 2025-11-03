import { PageBanner } from "@/components/layout/PageBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQWidget from "@/components/widgets/FAQWidget";
import pageBannersConfig from "@/config/data/pageBanners.json";

const pageConfig = (pageBannersConfig as any).pages.Faq;

export default function Faq() {
  return (
    <div className="bg-white text-slate-900">
      <PageBanner
        title={pageConfig.title}
        description={pageConfig.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "FAQ" },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <FAQWidget />
      </div>
    </div>
  );
}
