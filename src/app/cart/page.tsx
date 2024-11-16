import Image from "next/image";
import Link from "next/link";
import nextIcon from "../../../public/assets/next.svg";

const Cart = () => {
  return (
    <section className="mx-auto py-8 lg:max-w-7xl max-w-[90%] flex flex-col items-start gap-12">
      <div className="flex flex-row gap-4 justify-start">
        <Link href="/" className="font-normal text-base hover:underline">
          Home
        </Link>
        <Image src={nextIcon} alt="icon" width={8} height={8} />
        <p className="font-normal text-base">Your Shopping Cart</p>
      </div>
      <h2 className="font-medium text-lg lg:text-4xl text-black">Your cart</h2>

      {/* Cart Items */}
      <div className="flex flex-row justify-between items-center">
        
      </div>

    </section>
  );
};

export default Cart;
