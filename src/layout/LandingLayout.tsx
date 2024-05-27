import Navbar from '@/navigation/Navbar';
import { Footer } from '@/templates/Footer';

interface ProsType {
  children: any;
}
const LandingLayout = ({ children }: ProsType) => {
  return (
    <div className="text-gray-700 antialiased">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
