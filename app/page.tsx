
// import Header from "@/components/HomePage/Header";
import Header from "@/components/navigation/Header";
import HeroSection from "./_components/HeroSection";


type Props = {};

function Home({}: Props) {
    return (
        <main className="">
             <Header showEssentials = {false} /> 
            <HeroSection /> 
          
        </main>
    );
}

export default Home;
