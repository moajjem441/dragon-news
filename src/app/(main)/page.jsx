import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Children } from "react";

export default function Home({Children}) {
  return (
    <>
    <h1>Home Page</h1>
     {Children}
    </>
  );
}
