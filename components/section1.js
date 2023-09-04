import Image from "next/image";
import r3 from "@/public/images/r3.jpg"

export default function section1() {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
      <Image  src={r3} alt="" width={400} height={400}  />
      </div>
      <div className="info"></div>
    </div>
  );
}
