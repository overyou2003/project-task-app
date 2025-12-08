import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer-home";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 flex flex-col justify-center ">
        {children}
      </main>
    </div>
  );
}
