import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";


import { MahadevExchRouter } from "./MahadevExchSrc/MahadevExchRoutes"; 

const App = () => {
  return (
    <>
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={MahadevExchRouter} />
    </Suspense>
    
    </>
    
  );
};

export default App;
