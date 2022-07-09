import React from "react";
import { AnimalsListProvider } from "../context/animals";
import { LoginLogoutProvider } from "../context/login-logout";
import { RedirectProvider } from "../context/redirect";
import { SearchProvider } from "../context/search";

function Providers({ children }) {
  return (
    <>
      <AnimalsListProvider>
        <SearchProvider>
          <RedirectProvider>
            <LoginLogoutProvider>{children}</LoginLogoutProvider>
          </RedirectProvider>
        </SearchProvider>
      </AnimalsListProvider>
    </>
  );
}

export default Providers;
