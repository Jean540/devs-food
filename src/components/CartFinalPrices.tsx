import React from "react";

export const CartFinalPrices = ({
  label,
  price,
}: {
  label: string;
  price: number;
}) => {
  return (
    <div className="font-bold flex justify-between">
      <p>{label}</p>
      <p>R$ {price.toFixed(2)}</p>
    </div>
  );
};
