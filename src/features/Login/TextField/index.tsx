import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

type TextFieldProps = {
  label: string;
  id: string;
  register: UseFormRegisterReturn<"username" | "password">;
  type: HTMLInputTypeAttribute;
};

export const TextField = ({
  label,
  id,
  register,
  ...props
}: TextFieldProps) => {
  return (
    <div>
      <label
        className="block w-full text-sm font-medium text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="mt-1 block w-full border border-gray-300 rounded-md"
        id={id}
        {...register}
        {...props}
      />
    </div>
  );
};
