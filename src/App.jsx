//
/*
  JOINING DIFFERENT COMPONENTS
*/
//
// import React from "react";
// import products from "./products";

// function App() {
//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-800 text-white p-5 flex gap-3">
//         <div className="h-44 w-44 bg-lime-800 rounded-md flex justify-center items-center">
//           <h1 className="text-lg font-semibold">helloww</h1>
//         </div>
//       {products()}
//       </div>
//     </>
//   );
// }

// export default App;

//
/*
  STATE (++Updator)
*/
//
// import React,{useState} from "react";

// function App() {
//   var [a,b] = useState(0);
//   return (
//     <>
//       <div className="h-screen w-full bg-zinc-800 flex justify-center items-center flex-col">
//         <h1 className="text-white text-3xl">
//           "a" values is
//           <span className="text-yellow-500 text-3xl font-semibold"> - {a}</span>
//         </h1>
//         <button onClick={()=> b(a+1)} className="px-4 py-2 bg-green-700 rounded-md text-xl font-semibold text-white">
//           Count++
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;

//
/*
  STATE (Updator) WITH ANOTHER COMPONENT
*/
//
// import React, {useState} from "react";
// import Products from "./products";

// function App() {
//   var [a,b] = useState(0)
//   return (
//     <>
//       <div className="h-screen w-full bg-zinc-800 text-white flex justify-center items-center flex-col">
//         <h1 className="text-3xl">hello from main app</h1>

//         <button
//           onClick={() => b(a + 1)}
//           className="px-4 py-2 bg-green-700 rounded-md text-xl font-semibold text-white"
//         >
//           Count++
//         </button>
//       </div>
//       <Products count={a} />
//     </>
//   );
// }

// export default App;


//
/*
  CONDITIONAL VALUE and className FROM useState
*/
//
import React, {useState} from "react";

function App() {
  var [a,b] = useState(17)
  return (
    <>
      <div className="h-screen w-full bg-zinc-800  flex justify-center items-center flex-col">
        <div className="py-2 text-5xl font-semibold text-white">{a}</div>
        <h1
          className={`text-3xl font-bold ${
            a >= 18 ? "text-green-500" : "text-red-500"
          }`}
        >
          <span className="text-yellow-600 font-semibold">Status:</span>{" "}
          {a >= 18 ? "Allowed" : "Banned"}
        </h1>
        <div className="flex gap-3 my-3">
          <button
            onClick={() => b(a + 1)}
            className="px-4 py-2 bg-green-700 rounded-md text-xl font-semibold text-white"
          >
            Increment
          </button>
          <button
            onClick={() => b(a - 1)}
            className="px-4 py-2 bg-red-700 rounded-md text-xl font-semibold text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

