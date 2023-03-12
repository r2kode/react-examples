import { ReactEventHandler, ReactNode } from "react";

type FormProps = {
  children: ReactNode;
  onSubmit: ReactEventHandler;
  className: string;
};

export const Form = ({ children, onSubmit, className }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
