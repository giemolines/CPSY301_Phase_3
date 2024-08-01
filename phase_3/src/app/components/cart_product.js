import Image from "next/image";
export default function cart_product({ image_file_addres, name, quantity, product_id }) {

    return (
        <main className="bg-black text-left text-white">
            <Image src={image_file_addres} />
            <h2>{name}</h2>
            <
        </main>

    );
}