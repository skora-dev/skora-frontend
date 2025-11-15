import { CustomSUccessProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const CustomSuccess = ({
  message,
  pathT0,
  nextButton,
  className,
}: CustomSUccessProps) => {
  return (
    <section className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white border border-gray-100 md:w-full w-[90%] max-w-md py-6 rounded-xl">
        <div className="flex justify-center items-center h-80">
          <Image
            src="/gif/success.gif"
            alt="success"
            width={400}
            height={400}
            className="size-full"
          />
        </div>
        <p className="text-center my-6">{message}</p>
        <div className="mt-6 flex justify-center items-center">
          <Link
            href={pathT0}
            className="rounded-xl bg-blue-950 py-3 px-10 text-white"
          >
            {nextButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomSuccess;
