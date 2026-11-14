import GallerySection1 from '@/components/Gallery/GallerySection1';
import GallerySection2 from '@/components/Gallery/GallerySection2';

export const metadata = {
  title: 'Gallery | Capitano Batroun',
  description: 'View photos of our cozy Italian restaurant and signature dishes in Batroun.'
};

export default function GalleryPage() {
  return (
    <div className="bg-background text-ink antialiased selection:bg-primary selection:text-white">
      <GallerySection1 />
      <GallerySection2 />
    </div>
  );
}
