import Navbar from "../components/Navbar";
import logo from "../assets/logo-white.png"
import HeroText from "../components/HeroText";
import HeroPhotos from "../components/HeroPhotos";
import {motion,useScroll,useTransform} from "framer-motion"
import Features from "../components/Features";
import img from "../assets/images/img1.jpg"
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import Badge from "../components/Badge";
import {useMediaQuery} from "react-responsive"

function LandingPage(){
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY,[0,1000],[1,1.15])
    const isMobile = useMediaQuery({maxWidth : 767})
    return(
        <>
        <Navbar />
        <main className="pt-16 md:pt-20">
            <HeroText />
            <motion.div style={{scale : isMobile ? 1:scale}} className="pb-16">
                <HeroPhotos />
            </motion.div>
            <Features />
            <HowItWorks />
            <Badge />
        </main>
        <Footer />
        </>
    )
}

export default LandingPage;