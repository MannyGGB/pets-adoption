import React from "react";
import { notFound } from "next/navigation";
import { findPetBySlug, getPets } from "../../../lib/petsLib";
import PetCard from "../../../components/PetCard";

type paramsType = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const pets = getPets();
  return pets.map((pet) => {
    return { slug: pet.slug };
  });
}
export default function SlugPage({ params }: paramsType) {
  const pet = findPetBySlug(params.slug);

  if (!pet) {
    notFound();
  }
  return <PetCard petProp={pet} />;
}
