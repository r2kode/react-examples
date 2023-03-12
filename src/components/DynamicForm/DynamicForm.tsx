import { Layout, Form } from "./components";
import { getInputs } from "./lib/getInputs";

interface SignUpFormType {
  username: string;
  password: string;
  repeat_password: string;
}

interface AnotherFormType {}

const signUpForm = getInputs<SignUpFormType>("register");
const anotherForm = getInputs<AnotherFormType>("another");

export function DynamicForm({ msg }: { msg?: string }) {
  function onSubmitSignUp(data: unknown): void {
    console.log({ singUp: data });
  }

  function onSubmitAnotherForm(data: unknown): void {
    console.log({ singUp: data });
  }

  const initialValuesSignUp: SignUpFormType = {
    ...signUpForm.initialValues,
    username: "@franklin361",
  };

  return (
    <Layout>
      <div>
        <p>DynamicForm {msg}</p>
        <Form
          {...signUpForm}
          initialValues={initialValuesSignUp}
          onSubmit={onSubmitSignUp}
          titleForm="Sign Up!"
          labelButtonSubmit="Create account"
        />
        <Form
          {...anotherForm}
          titleForm="Another form!"
          onSubmit={onSubmitAnotherForm}
          labelButtonSubmit="Send info"
        />
      </div>
    </Layout>
  );
}
