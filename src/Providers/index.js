import React from "react";
import { AnimalsListProvider } from "../context/animals";
import { PetOngProvider } from "../context/ong";
import { RedirectProvider } from "../context/redirect";
import { SearchProvider } from "../context/search";
import { SolicitationProvider } from "../context/solicitation";
import { UserProvider } from "../context/user";

function Providers({ children }) {
  return (
    <>
      <AnimalsListProvider>
        <PetOngProvider>
          <UserProvider>
            <SearchProvider>
              <SolicitationProvider>
                <RedirectProvider>{children}</RedirectProvider>
              </SolicitationProvider>
            </SearchProvider>
          </UserProvider>
        </PetOngProvider>
      </AnimalsListProvider>
    </>
  );
}

export default Providers;
