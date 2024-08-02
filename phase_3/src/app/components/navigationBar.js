"use client";
import React, { useState } from 'react';
import Link from "next/link";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { ListRounded } from "@mui/icons-material";
import AuthForm from '../components/AuthForm'; 

export default function NavigationBar() {
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(false);

  const openAuthForm = () => setIsAuthFormOpen(true);
  const closeAuthForm = () => setIsAuthFormOpen(false);

  return (
    <header className="sticky top-0 z-50 p-4 bg-white shadow-md">
      <div className="flex flex-row justify-between items-center mx-6">
        <div className="flex-1 flex justify-start">
          <Link href="#">
            <ListRounded className="h-8 w-8 text-gray-700 hover:text-gray-900 hover:scale-110 transition duration-200 ease-in-out" />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <a href="../">
            <img src="/ingraph_logo.png" width={80} alt="Logo" />
          </a>
        </div>
        <div className="flex-1 flex flex-row justify-end items-center gap-4 text-sm">
          <div className="bg-green-700 text-white p-2 rounded-xl hover:bg-green-600 transition duration-200 ease-in-out cursor-pointer">
            <Link href="#" className="block" onClick={openAuthForm}>
              Sign up
            </Link>
          </div>
          <div className="text-gray-700 hover:text-green-700 transition duration-200 ease-in-out cursor-pointer" onClick={openAuthForm}>
            Sign in
          </div>
          <div>
            <Link href="../cart">
              <ShoppingCartRoundedIcon className="h-5 w-5 text-gray-700 hover:text-gray-900 transition duration-200 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>

      {isAuthFormOpen && <AuthForm onClose={closeAuthForm} />}
    </header>
  );
}
