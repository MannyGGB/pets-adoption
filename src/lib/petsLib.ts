import PETS from "./petsLib.json";

// JSON is automatically parsed

export type typePets = {
  name: string;
  species: string;
  breed: string;
  age: number;
  color: string;
  fun_fact: string;
  image?: string;
  slug: string;
};

export function getPets(): typePets[] {
  return PETS;
}

// checks if the slug that it got as an argument matches one of the slugs in the PETS array
export function findPetBySlug(slug: string) {
  return PETS.find((pet) => pet.slug === slug);
}
