import MainFooter from "../components/mainFoooter";
import MainHeader from "../components/mainheader";


export default function SadLifeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="min-h-screen w-full text-white flex items-center justify-center flex-col">
        
        {children}
        
      </main>
    );

  }