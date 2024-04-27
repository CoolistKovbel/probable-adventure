import MainFooter from "../components/mainFoooter";
import MainHeader from "../components/mainheader";


export default function SadLifeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="min-h-screen w-full p-24">
        <MainHeader />
        {children}
        <MainFooter />
      </main>
    );

  }