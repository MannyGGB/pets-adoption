import React from "react";
import { typePets } from "../lib/petsLib";
import Image from "next/image";

interface petCardProps {
  petProp: typePets;
}

export default function PetCard({ petProp }: petCardProps) {
  return (
    <div>
      {petProp.image && (
        <Image
          src={`${petProp.image}`}
          alt={petProp.name}
          height={550}
          width={400}
          placeholder="empty"
        />
      )}
      <h1>{petProp.name}</h1>
      <h3>
        {petProp.breed} | {petProp.color} | {petProp.species}
      </h3>
      <p>{petProp.fun_fact}</p>
    </div>
  );
}
