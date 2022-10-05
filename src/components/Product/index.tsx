import { useErrorHandler } from "react-error-boundary";

function Product() {
  const handleError = useErrorHandler();

  const handleClick = () => {
    handleError("yippee-ki-yay!!!");
  };

  return (
    <div>
      <h2>Product</h2>
      <button onClick={handleClick}>Klik</button>
    </div>
  );
}

export default Product;
