export default function Custom404() {
  return (
    <div className=" w-full h-full flex justify-center items-center font-galaxyoutline text-3xl ">
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

//to było z fallback true w films/[id]
// if (router.isFallback) {
//   return (
//     <>
//       <div className=" w-full h-full flex justify-center items-center font-galaxyoutline text-3xl ">
//         <h1>Something went wrong. Still trying to load data...</h1>
//       </div>
//     </>
//   );
// }
