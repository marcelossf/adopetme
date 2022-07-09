import React from "react";
import { AnimalsListProvider } from "../context/animals";
import { LoginLogoutProvider } from "../context/login-logout";
import { RedirectProvider } from "../context/redirect";

function Providers({ children }) {
  return (
    <>
      <AnimalsListProvider>
        <RedirectProvider>
          <LoginLogoutProvider>{children}</LoginLogoutProvider>
        </RedirectProvider>
      </AnimalsListProvider>
    </>
  );
}

export default Providers;
