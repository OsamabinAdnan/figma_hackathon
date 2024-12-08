
import Hero from "@/components/hero";
import PickDrop from "@/components/pickup-dropoff";
import PopularCarsHome from "@/components/popularCarHome";
import RecommendedCarsHome from "@/components/recomCarHome";


export default function Home() {
  return (
   <>
      <Hero/>
      <PickDrop/>
      <PopularCarsHome/>
      <RecommendedCarsHome/>
   </>
  );
}
