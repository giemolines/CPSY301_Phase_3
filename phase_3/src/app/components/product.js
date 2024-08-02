import '../styles/Product.css';
import Image from 'next/image';

export default function Product({ imageSrc, name, price }) {
  return (
  <main>
    <div className='product'>
    <Image src={imageSrc} width={300} height={500} alt={name}/>
      <h1>{name}</h1>
      <p className='product_price'>{price}</p>
      <p className='product_view'>View</p>
    </div>
    </main>
  );
}
