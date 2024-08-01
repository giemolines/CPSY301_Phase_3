import cart_product from "../components/cart_product";
export default function page() {
  return (
  <main>
    <div>
        <h1>Checkout</h1>
        <p>Added Products</p>
        <cart_product/>
    </div>
    </main>
  );
}
