import MenuSection1 from '@/components/Menu/MenuSection1';
import MenuSection2 from '@/components/Menu/MenuSection2';

export const metadata = {
  title: 'Our Menu | Capitano Batroun',
  description: 'Explore our menu of authentic Italian dishes, including fresh salads, pasta, pizza, and regional wines.'
};

export default function MenuPage() {
  return (
    <div className="bg-background text-ink antialiased selection:bg-primary selection:text-white">
      <MenuSection1 />
      <MenuSection2 />
    </div>
  );
}
