import { FormSection } from "../types";
import { forms } from "./form";

export const getInputs = <T>(section: FormSection) => {
  let initialValues: { [key: string]: any } = {};
  let validationsFields: { [key: string]: any } = {};

  for (const field of forms[section]) {
    initialValues[field.name] = field.value;

    // if (!field.validations) continue;
    // const schema = generateValidations(field);
    // validationsFields[field.name] = schema;
  }
  return {
    // validationSchema: Yup.object({ ...validationsFields }),
    initialValues: initialValues as T,
    inputs: forms[section],
  };
};
