import React, { Suspense } from "react";
import Loader from "./core/components/Loader";
import AnimatedRoutes from "./core/components/AnimatedRoutes";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatedRoutes />
        
      </Suspense>
    </>
  );
}

export default App;