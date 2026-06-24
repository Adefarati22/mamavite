import Float from "../components/Float";
import About from "./About";
import Faq from "./Faq";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Ingredients from "./Ingredients";
import Order from "./Order";
import Prepare from "./Prepare";
import Product from "./Product";
import Review from "./Review";
import TrustBar from "./TrustBar";
import Why from "./Why";

export default function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Product />
      <Why />
      <Prepare />
      <Ingredients />
      <Review />
      <About />
      <Faq />
      <Order />
      <Float/>
    </>
  );
}
