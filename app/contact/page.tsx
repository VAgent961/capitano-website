import ContactSection1 from '@/components/Contact/ContactSection1';
import ContactSection2 from '@/components/Contact/ContactSection2';

export const metadata = {
  title: 'Contact Us | Capitano Batroun',
  description: 'Contact Capitano in Batroun Old Souk for reservations and inquiries.'
};

export default function ContactPage() {
  return (
    <div className="bg-background text-ink antialiased min-h-full selection:bg-primary selection:text-white">
      <ContactSection1 />
      <ContactSection2 />
    </div>
  );
}
