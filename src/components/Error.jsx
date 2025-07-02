import { useRouteError } from "react-router-dom";
import React from "react";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  const { data, status, statusText } = error;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-500">
      <h1 className="font-bold text-4xl">{data}</h1>
      <br />
      <h2 className="font-bold text-3xl">{status + "  " + statusText}</h2>
      <h2 className="font-bold text-3xl mt-3">Oops! Something went wrong.</h2>
    </div>
  );
};

export default Error;
