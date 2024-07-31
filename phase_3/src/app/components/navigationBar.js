import Link from "next/link";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { ListRounded } from "@mui/icons-material";

export default function NavigationBar() {
    return (
        <main className="sticky top-0 p-4 bg-white"> 
            <div className="flex flex-row justify-between items-center mx-6">
                <div className="flex-1 flex justify-start">
                    <Link href="#"><ListRounded className="h-8 w-8 hover:fill-slate-600 hover:scale-110 transition duration-200 ease-in-out"/></Link>
                </div>
                <div className="flex-1 flex justify-center">
                    <a href="#">
                        <img src="ingraph_logo.png" width={80} alt="Logo"/>
                    </a>
                </div>
                <div className="flex-1 flex flex-row justify-end text-sm text-center items-center gap-3">
                    <div className="text-white bg-green-700 p-2 rounded-xl mr-2  hover:fill-slate-600 hover:scale-110 transition duration-200 ease-in-out" >
                        <Link href="#" className="">Sign up</Link>
                    </div>
                    <div className="mr-2  hover:text-green-700 hover:scale-110 transition duration-200 ease-in-out">
                        <Link href="#" className="font-light">Sign in</Link>
                    </div>
                    <div> 
                        <Link href="#">
                            <ShoppingCartRoundedIcon className="h-5 w-5 hover:fill-slate-600 hover:scale-110 transition duration-200 ease-in-out"/>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
