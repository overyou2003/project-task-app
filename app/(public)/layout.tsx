import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer-home";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-linear-to-r from-blue-50 to-white overflow-scroll">
      <Navbar />
      <div className="mt-35 px-10 xl:px-20">{children}</div>
      <Footer />
    </div>
  );
}
