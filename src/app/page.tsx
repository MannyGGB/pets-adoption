import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Adoption Agency</h1>
      <Link href="/pets">View Animals</Link>
    </main>
  );
}
