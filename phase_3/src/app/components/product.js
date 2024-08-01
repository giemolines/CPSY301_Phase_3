export default function Product({ imageSrc, name, price }) {
  return (
  <main>
    <div className='product'>

      <h1>{name}</h1>
      <p className='product_price'>{price}</p>
      <p className='product_view'>View</p>
    </div>
    </main>
  );
}


/**/