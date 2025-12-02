import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer-home";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-white">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <div className="mt-35 px-10 xl:px-20">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
