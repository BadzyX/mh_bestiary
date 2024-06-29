type Props = {
  type?: "default" | "success" | "error" | "neutral";
  label: string;
};

const typeToColorClass = {
  default: "bg-blue-600",
  success: "bg-green-600",
  error: "bg-red-600",
  neutral: "bg-gray-600",
};

export function Button({ type = "default", label }: Props) {
  const colorClass = typeToColorClass[type] || typeToColorClass.default;

  return (
    <button className={`${colorClass} rounded-full px-12 py-1.5`}>
      {label}
    </button>
  );
}
