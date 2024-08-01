import cart_product from "../components/cart_product";
import Link from "next/link";
export default function page() {
  return (
  <main>
    <div>
      <Link href="../" className="text-3xl">{'<'} </Link>
        <h1>Checkout</h1>
        <p>Added Products</p>
        <cart_product/>
    </div>
    </main>
  );
}
