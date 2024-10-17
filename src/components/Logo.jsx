import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Image
        src="/logo.png"
        alt=""
        width={150}
        height={60}
        className=" mix-blend-difference"
      />
    </div>
  );
}
