import Footer from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
}
