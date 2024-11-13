import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <div>Home 2</div>
      <Link href="/sobre">Ir para Sobre</Link>
      <br/>
      <Link href="/tempo">Ir para Tempo</Link>
    </div>
  );
}

export default Home;
