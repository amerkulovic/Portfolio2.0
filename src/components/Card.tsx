export interface CardProps {
  title: string;
  description: string;
  isFocused: boolean;
  isNearFocus: boolean;
  isFarFromFocus: boolean;
}

const Card = ({ title, description, isFocused, isNearFocus, isFarFromFocus }: CardProps) => {
  const cardClassNames = ["p-4 rounded-lg transition-all duration-300", isFocused ? "bg-purple-800 text-white scale-110 opacity-100" : "", isNearFocus ? "bg-gray-700 text-gray-300 scale-100 opacity-80" : "", isFarFromFocus ? "bg-gray-600 text-gray-400 scale-90 opacity-60" : ""].filter(Boolean).join(" ");

  return (
    <div className={cardClassNames} style={{ minWidth: "200px" }}>
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
