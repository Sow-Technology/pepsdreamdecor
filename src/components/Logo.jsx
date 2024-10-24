import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/2.svg" alt="" width={150} height={60} className=" -my-6" />
    </Link>
  );
}
