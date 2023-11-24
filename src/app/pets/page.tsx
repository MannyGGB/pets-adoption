import React from "react";
import { getPets, typePets } from "../../lib/petsLib";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pets up for adoption | Paws and Claws Adoption Emporium",
  description: "A list of pets up for adoption",
};

type petSearchQuery = {
  sortByAge: string;
};

function comparePets(a: typePets, b: typePets) {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return 0;
  }
}

export default function Petspage({
  searchParams,
}: {
  searchParams: petSearchQuery;
}) {
  const pets = getPets();

  let sortedPets = [...pets];

  if (searchParams.sortByAge == "asc") {
    sortedPets.sort(comparePets).reverse(); // we added the .reverse here for it to work as we want it
  } else if (searchParams.sortByAge == "desc") {
    sortedPets.sort(comparePets);
  }

  return (
    <div className="flex flex-col items-center">
      <h1>Checkout the pets</h1>
      <div className="flex flex-col items-center text-gray-400">
        <Link href="/pets">Remove the sort</Link>
        <Link href="/pets?sortByAge=asc">Ascending Age</Link>
        <Link href="/pets?sortByAge=desc">Descending Age</Link>
      </div>
      {sortedPets.map((pet, index) => {
        return (
          <div key={index} className="p-3">
            <Link href={`/pets/${pet.slug}`}>{pet.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
