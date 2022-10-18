import { useState } from "react";
import {
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Toaster, toast } from "react-hot-toast";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import black from "./assets/images/t-shirt-black.jpeg";
import black2 from "./assets/images/t-shirt-black-2.jpeg";
import black3 from "./assets/images/t-shirt-black-3.jpeg";
import black4 from "./assets/images/t-shirt-black-4.jpeg";
import green from "./assets/images/t-shirt-green.jpeg";
import gray from "./assets/images/t-shirt-gray.jpeg";
import white from "./assets/images/t-shirt-white.jpeg";

function App() {
  const [tshirt, setTshirt] = useState(black);
  const [price, setPrice] = useState("19.99");
  const [color, setColor] = useState("black");

  const handleImage = (color) => {
    setTshirt(color);
  };

  const handleprice = (price) => {
    setPrice(price);
  };

  const handleToast = () => {
    const refreshToast = toast.loading("Adding...");
    toast.success("Product Added to Cart", {
      id: refreshToast,
    });
  };

  const handleColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <Toaster />
      <div className="max-w-5xl m-auto px-5">
        <div className="flex flex-wrap justify-around">
          <div className="p-6 md:px-10 md:py-8 md:basis-1/2 min-w-[300px]">
            {/* <img src={carousel} alt="" className="max-w-full py-12 px-0" /> */}
            <InnerImageZoom src={tshirt} zoomSrc={tshirt} />
            <div className="flex justify-between p-0">
              <div className="basis-[24%] cursor-pointer">
                <img
                  src={black}
                  alt=""
                  onClick={() => handleImage(black)}
                  className=""
                />
              </div>
              <div className="basis-[24%] cursor-pointer">
                <img
                  src={black2}
                  alt=""
                  onClick={() => handleImage(black2)}
                  className=""
                />
              </div>
              <div className="basis-[24%] cursor-pointer">
                <img
                  src={black3}
                  alt=""
                  onClick={() => handleImage(black3)}
                  className=""
                />
              </div>
              <div className="basis-[24%] cursor-pointer">
                <img
                  src={black4}
                  alt=""
                  onClick={() => handleImage(black4)}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="p-6 md:px-10 md:py-8 md:basis-1/2 min-w-[300px]">
            <h1 className="text-xl md:2xl lg:text-3xl font-bold mx-0">
              Customizable Modern T-shirt
            </h1>
            <h4 className="text-xl lg:text-3xl font-bold my-5 mx-0">
              ${price}
            </h4>
            <form>
              <select
                onChange={(e) => handleprice(e.target.value)}
                className="block p-2 mt-5 border"
              >
                <option value={"19.99"}>Small</option>
                <option value={"22.99"}>Medium</option>
                <option value={"24.99"}>Large</option>
                <option value={"26.99"}>XL</option>
                <option value={"28.99"}>XLL</option>
              </select>
              <div className="mt-5">
                <h5 className="font-bold text-lg">Color: {color}</h5>
                <div className="flex space-x-2">
                  <div onClick={() => handleColor("black")}>
                    <img
                      className={`${
                        color === "black"
                          ? "h-10 border border-orange-500 cursor-pointer"
                          : "h-10 cursor-pointer"
                      }`}
                      src={black}
                      alt=""
                    />
                  </div>
                  <div onClick={() => handleColor("green")}>
                    <img
                      className={`${
                        color === "green"
                          ? "h-10 border border-orange-500 cursor-pointer"
                          : "h-10 cursor-pointer"
                      }`}
                      src={green}
                      alt=""
                    />
                  </div>
                  <div onClick={() => handleColor("gray")}>
                    <img
                      className={`${
                        color === "gray"
                          ? "h-10 border border-orange-500 cursor-pointer"
                          : "h-10 cursor-pointer"
                      }`}
                      src={gray}
                      alt=""
                    />
                  </div>
                  <div onClick={() => handleColor("white")}>
                    <img
                      className={`${
                        color === "white"
                          ? "h-10 border border-orange-500 cursor-pointer"
                          : "h-10 cursor-pointer"
                      }`}
                      src={white}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                defaultValue="1"
                className="w-8 h-8 lg:w-10 lg:h-10 pl-2 text-xl border focus:outline-none"
              />
              <a
                onClick={handleToast}
                href="/#"
                className="text-xs lg:text-lg flex items-center justify-between bg-orange-500 text-white py-2 px-4 md:px-7 my-7 mx-0 rounded-sm hover:bg-orange-800 transition-all duration-500"
              >
                Add to Cart
              </a>
              <a
                onClick={handleToast}
                href="/#"
                className="text-xs lg:text-lg flex items-center justify-between bg-yellow-500 text-white py-2 px-4 md:px-7 my-7 mx-0 rounded-sm hover:bg-yellow-800 transition-all duration-500"
              >
                Checkout
              </a>
            </div>
            <h3 className="text-lg md:text-2xl font-bold">
              Product Details
              <DocumentMagnifyingGlassIcon className="h-6 w-6 inline text-orange-400" />
            </h3>
            <br />
            <p>
              Give your summer wardrobe a style upgrade with the Men's Active
              T-Shirt.Team it with a pair of short for your morning workout or a
              denims for an evining out with the guys.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
