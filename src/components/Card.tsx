import React from "react";

export interface CardProps {
  title: string;
  description: string;
  isFocused: boolean;
  isNearFocus: boolean;
  isFarFromFocus: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, isFocused, isNearFocus, isFarFromFocus }: CardProps) => {
  const cardClassNames = ["p-4 rounded-lg transition-all duration-300 overflow-hidden", isFocused ? "bg-purple-900 text-white scale-110 opacity-100 w-[250px] h-[250px]" : "", isNearFocus ? "flex items-center justify-center bg-gray-700 text-gray-300 scale-100 opacity-50 w-[200px] h-[200px] text-4xl" : "", isFarFromFocus ? "flex items-center justify-center bg-gray-600 text-gray-400 scale-90 opacity-20 w-[150px] h-[150px] text-2xl" : ""].filter(Boolean).join(" ");

  return (
    <div className={cardClassNames}>
      <h1 className={`text-center font-bold${isFocused ? "font-extrabold text-xl" : ""}`}>{title}</h1>
      <p className={`${!isFocused ? "hidden" : "mt-5 font-extralight"}`}>{description}</p>
    </div>
  );
};

export default Card;
