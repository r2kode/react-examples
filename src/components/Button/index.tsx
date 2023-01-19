type ButtonProps = {
  label: string;
  style: `btn-type-${string} btn-color-${string}`;
};

function Button({ label, style }: ButtonProps) {
  return <button className={style}>{label}</button>;
}

export default Button;
