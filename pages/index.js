import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Format from "@/layout/format";





//components
import Section1 from "@/components/section1";

//fonts
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <Format>
      <Section1></Section1>
    </Format>
  );
}
