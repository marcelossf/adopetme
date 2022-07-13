import React from "react";
import { AnimalsListProvider } from "../context/animals";
import { LoginLogoutProvider } from "../context/login-logout";
import { PetOngProvider } from "../context/ong";
import { RedirectProvider } from "../context/redirect";
import { SearchProvider } from "../context/search";
import { SolicitationProvider } from "../context/solicitation";

function Providers({ children }) {
  return (
    <>
      <AnimalsListProvider>
        <PetOngProvider>
          <SearchProvider>
            <SolicitationProvider>
              <RedirectProvider>
                <LoginLogoutProvider>{children}</LoginLogoutProvider>
              </RedirectProvider>
            </SolicitationProvider>
          </SearchProvider>
        </PetOngProvider>
      </AnimalsListProvider>
    </>
  );
}

export default Providers;
