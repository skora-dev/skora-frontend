import CustomButton from "@/components/button/CustomButton";
import { Empty } from "antd";
import { Dispatch, SetStateAction } from "react";
interface EmptyRecordProps {
  setShowAdd: Dispatch<SetStateAction<boolean>>;
}
const EmptyRecord = ({ setShowAdd }: EmptyRecordProps) => {
  return (
    <Empty className="items-center mb-6 flex  flex-col">
      <CustomButton
        title="Create Subject"
        className="w-30"
        onClick={() => setShowAdd(true)}
      />
    </Empty>
  );
};

export default EmptyRecord;
