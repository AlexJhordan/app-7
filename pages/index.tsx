import Link from "next/link";
import React from "react";

function Home() {
  return (
    <>
      <div>Home 2</div>
      <Link href="/sobre" prefetch={true}>
        Ir para Sobre
      </Link>
    </>
  );
}

export default Home;
