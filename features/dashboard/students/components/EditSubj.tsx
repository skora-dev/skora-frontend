import CustomInput from "@/components/input/CustomInput";
import { useForm } from "react-hook-form";
import {
  EditSubjectFormValues,
  EditSubjectProps,
  editSubjectSchema,
} from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "@/components/button/CustomButton";

const EditSubj = ({
  defaultValues,
  onClose,
  onSubmitData,
}: EditSubjectProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EditSubjectFormValues>({
    resolver: yupResolver(editSubjectSchema),
    defaultValues,
  });

  const onSubmit = (data: EditSubjectFormValues) => {
    onSubmitData(data);
    onClose();
  };
  return (
    <section className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center ">
      <div className="w-[92%] max-w-md bg-white max-h-[95%] overflow-y-auto no-scrollbar p-6 rounded-2xl">
        <section className="p-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CustomInput
              label="Subject"
              name="subject"
              register={register}
              error={errors.subject}
            />

            <CustomInput
              label="CA Score"
              name="caScore"
              type="number"
              register={register}
              error={errors.caScore}
            />

            <CustomInput
              label="Exam Score"
              name="examScore"
              type="number"
              register={register}
              error={errors.examScore}
            />

            <div className="flex mt-6 justify-end gap-3 mt-4">
              <CustomButton
                title="Cancel"
                onClick={onClose}
                className="w-30 bg-white border-primary text-primary border hover:bg-slate-50"
              />
              <CustomButton
                type="submit"
                title="Save Changes"
                className="w-30"
              />
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default EditSubj;
