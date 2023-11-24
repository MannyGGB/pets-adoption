import React from "react";
import Link from "next/link";
import styles from "@/components/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.div}>
      <p>&copy; Paws and Claws Adoption Emporium</p>
      <Link href="https://github.com/MannyGGB">🐈</Link>
    </div>
  );
}
