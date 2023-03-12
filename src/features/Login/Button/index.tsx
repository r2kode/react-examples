export const Button = ({
  onClick,
  type = "button",
  children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full items-center rounded border border-transparent bg-indigo-600 px-3 py-3 font-medium text-white shadow-sm"
    >
      {children}
    </button>
  );
};
