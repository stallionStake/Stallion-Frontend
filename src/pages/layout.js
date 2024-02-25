// components/RootLayout.js or wherever you keep your layout component
import "../app/globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Navbar />
      <div className='flex-grow overflow-y-auto bg-gray-700 text-white'>{children}</div>
      <Footer />
    </div>
  );
}

