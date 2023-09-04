import r3 from "@/public/images/r3.jpg"
import Image from "next/image"



export default function footer() {
  return (
    <div className="text-3xl">
    

    <Image  src={r3} alt="" width={400} height={400}  />
    </div>
  )
}
