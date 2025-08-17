import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../sections/home/hero/hero"
import Feature from "@/sections/home/feature/feature";
import CTA from "@/sections/home/cta/cta";


export default function Home() {
  return (
   <>
   <Hero/>
   <Feature/>
   <CTA/>
   </>
  );
}
