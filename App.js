import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import "./src/config/firebase";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { LocationContextProvider } from "./src/services/location/location.context";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import {
  AuthenticationContext,
  AuthenticationContextProvider,
} from "./src/infrastructure/authentication/authentication.context";

export default function App() {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
