import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Children } from "react";


const getData =async()=>{
  const res =await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = res.json();

  return data.data;
}

export default async function Home({Children}) {

const allCategories=await getData();
  return (
    <>
        
        <div className="grid grid-cols-12 gap-2 mx-auto container  py-4">

        <div className="grid col-span-3">
          <h2>All Categories</h2>

        </div>


        <div className="grid col-span-6">
          <h2>News HOme</h2>
        </div>


            <div className="grid col-span-3">
              <h1>Login with</h1>
            </div>
        </div>

    
     {Children}
    </>
  );
}
