import React from "react";
import { AnimalsListProvider } from "../context/animals";
import { LoginLogoutProvider } from "../context/login-logout";
import { PetOngProvider } from "../context/ong";
import { RedirectProvider } from "../context/redirect";
import { SearchProvider } from "../context/search";

function Providers({ children }) {
  return (
    <>
      <AnimalsListProvider>
        <PetOngProvider>
          <SearchProvider>
            <RedirectProvider>
              <LoginLogoutProvider>{children}</LoginLogoutProvider>
            </RedirectProvider>
          </SearchProvider>
        </PetOngProvider>
      </AnimalsListProvider>
    </>
  );
}

export default Providers;
