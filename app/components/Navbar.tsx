import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link href="/">wikiRocket!</Link>
      </h1>
    </nav>
  );
}
