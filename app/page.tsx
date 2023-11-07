
// import Header from "@/components/HomePage/Header";
import Header from "@/components/navigation/Header";
import HeroSection from "./_components/HeroSection";


type Props = {};

function Home({}: Props) {
    return (
        <main className="h-screen w-full bg-white/70 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-slate-950 to-black m-0  ">
             <Header showEssentials = {false} /> 
            <HeroSection /> 
          
        </main>
    );
}

export default Home;
