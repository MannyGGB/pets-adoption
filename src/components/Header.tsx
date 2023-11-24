import React from "react";
import Link from "next/link";
import styles from "@/components/Header.module.css";

export default function Header() {
  return (
    <div className={styles.div}>
      <h1>Paws and Claws Adoption Emporium</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/pets">View Animals</Link>
      </nav>
    </div>
  );
}
