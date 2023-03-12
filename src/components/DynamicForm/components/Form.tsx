import { FormProvider, useForm } from "react-hook-form";
import { InputProps } from "../types";
import {
  CustomCheckBox,
  CustomGenericInput,
  CustomRadioGroup,
  CustomSelect,
} from "./inputs";

interface Props {
  onSubmit: (data: unknown) => void;
  labelButtonSubmit?: string;
  titleForm?: string;

  initialValues: unknown;
  // validationSchema: SchemaForm;
  inputs: InputProps[];
}

export function Form(props: Props) {
  const {
    initialValues,
    inputs,
    onSubmit,
    // validationSchema,
    titleForm,
    labelButtonSubmit = "Submit",
  } = props;

  const formMethods = useForm({
    // resolver: yupResolver(validationSchema),
    defaultValues: { ...(initialValues as any) },
  });

  const createInputs = () =>
    inputs.map(({ validations, typeValue, value, ...inputProps }) => {
      switch (inputProps.type) {
        case "select":
          return <CustomSelect {...inputProps} key={inputProps.name} />;
        case "checkbox":
          return <CustomCheckBox {...inputProps} key={inputProps.name} />;
        case "radio":
          return <CustomRadioGroup {...inputProps} key={inputProps.name} />;
        default:
          return <CustomGenericInput {...inputProps} key={inputProps.name} />;
      }
    });

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="bg-secondary rounded-md p-10 pt-5 shadow-2xl shadow-primary/30 flex flex-col gap-2 border border-primary w-full min-h-[390px]"
      >
        <section className="flex-1 flex flex-col gap-3">
          {createInputs()}
        </section>
        <button
          className="bg-primary transition-opacity w-full rounded-md py-2 hover:opacity-90 active:opacity-100 font-bold mt-4"
          type="submit"
        >
          {labelButtonSubmit}
        </button>
      </form>
    </FormProvider>
  );
}
