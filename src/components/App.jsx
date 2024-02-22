import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainSection from './MainSection';
import AboutSection from './AboutSection';
import ReviewsSection from './ReviewsSection';
import GallerySection from './GallerySection';

function App() {
  return (
    <main>
      <Header />
      <MainSection />
      <AboutSection />
      <ReviewsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}

export default App;
