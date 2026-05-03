import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Children } from "react";

export default function Home({Children}) {
  return (
    <>
     <h1>HomePage</h1>
     <Header></Header>
     <Navbar></Navbar>
     {Children}
    </>
  );
}
