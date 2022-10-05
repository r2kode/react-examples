import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import User from "../components/User";
import Product from "../components/Product";

/**
 * https://www.npmjs.com/package/react-error-boundary
 */

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alerrt">
      <p>Error in component</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
function ErrorBoundaries() {
  return (
    <div>
      <h2>ErrorBoundaries</h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <User />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Product />
      </ErrorBoundary>
    </div>
  );
}

export default ErrorBoundaries;
