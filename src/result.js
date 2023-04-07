import Loading from "./loading";
import { useGlobalContext } from "./context";

const Result = () => {
  const { isLoading, searchData } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loading />;
      </div>
    );
  } else {
    return <h1>hello wolrd</h1>;
  }
};

export default Result;
