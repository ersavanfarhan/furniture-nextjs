import { Newest } from "../components/newest";
import { Products } from "../components/product";
import Carousel from "../components/carousel";
import Banner from "../components/banner";

export default function Home() {
  return (
    <>
      <div id="banner" className="xs:px-2 sm:px-2 md:px-3 px-28 lg:py-5 xl:py-5">
        <Banner />
      </div>

      <div>
        <Carousel />
      </div>

      <div
        id="newest"
        className="mt-5 xs:px-2 sm:px-2 md:px-3 px-28 content-center text-center"
      >
        <label className="text-2xl lg:text-3xl xl:text-3xl font-black">
          Our Newest Products
        </label>
        <div id="newest-card" className="w-full mt-3">
          <Newest />
        </div>
      </div>

      <div
        id="browse"
        className="mt-10 xs:px-2 sm:px-2 md:px-3 px-28 content-center text-center"
      >
        <label className="text-2xl lg:text-3xl xl:text-3xl font-black">
          Browse All Products
        </label>
        <div id="product-card" className="w-full mt-3">
          <Products />
        </div>
      </div>
    </>
  );
}
