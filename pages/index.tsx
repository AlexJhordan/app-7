import Link from "next/link";
import React from "react";

export const Index = () => {
  return (
    <>
      <div>Index 2</div>
      <Link href="/sobre" prefetch={true}>
      <a>Ir para Sobre</a>
      </Link>
    </>
  );
};

export default Index;
