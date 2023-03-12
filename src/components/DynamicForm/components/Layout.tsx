export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:mb-0 mb-10 gap-10 place-items-start justify-items-center px-5">
      {children}
    </div>
  );
};
