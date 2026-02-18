import { cn } from "@/lib/utils";
import { StudentDetailsCardProps } from "../types/studentTypes";

const StudentDetailsCard = ({
  className,
  label,
  value,
}: StudentDetailsCardProps) => {
  return (
    <div className={cn(className)}>
      <p className="text-gray-400">{label}</p>
      <p className="text-secondary">{value}</p>
    </div>
  );
};

export default StudentDetailsCard;
