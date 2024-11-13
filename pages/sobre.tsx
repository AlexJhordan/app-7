import Link from "next/link";
import React from "react";

export const Sobre = () => {
  return (
    <>
      <div>Sobre 2</div>
      <Link href="/" prefetch={true}>
        Ir para Home
      </Link>
    </>
  );
};

export default Sobre;
