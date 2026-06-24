import ProductCard from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import hero2 from "../assets/hero2.png";

export default function Product() {
  return (
    <div>
    <section id="products" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Our Range" title="Our Products" sub="Wholesome cereals crafted for every member of the family." />
        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          <ProductCard
            img={hero2}
            tag="For Children & Adults"
            title="Mamavite Tom Brown"
            desc="Natural cereal made with whole grains, flaxseed, tiger nuts, and millet. High in fibre, minerals, and energy — perfect for breakfast."
            badges={["100% Natural", "No Preservatives", "Gluten-Friendly"]}
            price="Starting from ₦3,000"
            waMessage="Hi Mamavite, I'd like to order Mamavite Tom Brown cereal. Please share pack sizes and delivery details."
            delay={0}
            popular
          />
          <ProductCard
            img={hero2}
            tag="6 Months+"
            title="Mamavite Nutritious Baby Cereal"
            desc="High-protein baby cereal made with soya, groundnut, tigernut, dates, and grains. Easy to digest — just add warm water."
            badges={["High in Protein", "No Preservatives", "Easy to Digest"]}
            price="Contact us for pricing"
            waMessage="Hi Mamavite, I'd like to order the Nutritious Baby Cereal (6 months+). Please share pricing and delivery to my area."
            delay={120}
          />
        </div>
      </div>
    </section>
    </div>
  )
}
