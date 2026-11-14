import HomeSection1 from '@/components/Home/HomeSection1';
import HomeMenu from '@/components/Home/HomeMenu';
import HomeSection3 from '@/components/Home/HomeSection3';
import HomeContact from '@/components/Home/HomeContact';

export const metadata = {
  title: 'Capitano | Authentic Italian Kitchen & Bar in Batroun',
  description: 'Experience authentic Italian cuisine in the historic Batroun Old Souk. Fresh ingredients, signature pizzas, and pasta. Book your table today.'
};

export default function HomePage() {
  return (
    <div className="bg-background text-ink antialiased selection:bg-primary selection:text-white">
      <HomeSection1 />
      <HomeMenu />
      <HomeSection3 />
      <HomeContact />
    </div>
  );
}
