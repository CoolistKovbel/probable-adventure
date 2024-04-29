import MainFooter from "../components/mainFoooter";
import MainHeader from "../components/mainheader";


export default function SadLifeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="min-h-screen w-full p-24 dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <MainHeader />
        {children}
        <MainFooter />
      </main>
    );

  }