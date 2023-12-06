import Movies from "../components/Movies";
import { useState } from "react";
import LoadingComponent from "../components/LoadingComponent";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="">
      <Movies />
    </div>
  );
};

export default HomePage;
