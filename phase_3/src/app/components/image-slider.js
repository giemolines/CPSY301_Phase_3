import Image from "next/image";

export default function ImageSlider() {
    return (

        <div className="w-full h-full">
            <Image src="/slider-1.jpg" layout="fill" objectFit="contain"/>
        </div>

    );
}
