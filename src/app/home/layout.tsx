import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';

import { VehicleProvider } from '../../context/VehicleContext';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <VehicleProvider>
          {children}
        </VehicleProvider>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
