import CustomImage from "@/components/image";
import { notFound } from "next/navigation";
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import TwitterLogo from '../../../../public/logo-black.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from "@mui/material/Button";

interface Props {
  params: {
    id: string;
  }
}


const ProductDetailsPage = async ({ params: { id } }: Props) => {

  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${id}`
    );
    const product = await res.json();

    return (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto mt-15">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-around py-20">
            <div>
              <CustomImage product={product} />
            </div>
            <div className="lg:w-1/2 w-full  lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {Array.from(
                    {
                      length: Math.floor(product.rating.rate),
                    },
                    (_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-500" />
                    )
                  )}
                  {
                    Array.from(
                      {
                        length: 5 - Math.floor(product.rating.rate),
                      },
                      (_, i) => (
                        <StarIconOutline key={i} className="h-4 w-4 text-yellow-500" />
                      )
                    )
                  }
                  <span className="text-gray-600 ml-3">{product.rating.count} Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s items-center gap-1">
                  <a className="w-6 h-6 cursor-pointer">
                    <div className="icons8-facebook"></div>
                  </a>
                  <a className="w-4 h-4 cursor-pointer">
                    <Image src={TwitterLogo} alt={"TwitterLogo"}/>
                  </a>
                  <a className="w-6 h-6 cursor-pointer">
                  <div className="icons8-instagram"></div>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed mb-5 mt-6">{product.description}</p>
              <div className=" gap-x-3 flex justify-between items-center">
                <span className="title-font font-medium text-2xl text-blue-600 justify-center">${product.price}</span>
                <div>
                  <Button aria-label="like">
                       <FavoriteBorderIcon color="error"/>
                  </Button>
                  <Button aria-label="cart" className="">
                        <ShoppingCartIcon className="" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    notFound()
  }
}

export default ProductDetailsPage


