import React from "react";

function products({count}) {
  return (
    <>
      <div className="h-screen w-full bg-lime-700 text-white flex justify-center items-center flex-col">
        <h1 className="text-3xl">the count value is = {count}</h1>
      </div>
    </>
  );
}

export default products;
