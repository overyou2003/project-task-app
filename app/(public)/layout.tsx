import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-20 min-h-screen bg-linear-to-r from-blue-50 to-white">
        {children}
      </main>
      <Footer />
    </>
  );
}