import { ReactNode } from "react";

interface BoardCardsProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  delay?: string;
}
const BoardCards = ({ label, value, icon, delay }: BoardCardsProps) => {
  return (
    <article
      className="bg-white rounded-xl shadow-primary p-6 border border-neutral-100  transition-all duration-200 card-hover hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: delay ?? "100ms" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-600 mb-1">{label}</p>
          <p className="text-3xl font-bold text-neutral-900">{value}</p>
        </div>
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
    </article>
  );
};

export default BoardCards;
