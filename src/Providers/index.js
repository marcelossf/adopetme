import React from "react";
import { AnimalsListProvider } from "../context/animals";
import { RedirectProvider } from "../context/redirect";

function Providers({ children }) {
  return (
    <>
      <AnimalsListProvider>
        <RedirectProvider>
            {children}
        </RedirectProvider>
      </AnimalsListProvider>
    </>
  );
}

export default Providers;
