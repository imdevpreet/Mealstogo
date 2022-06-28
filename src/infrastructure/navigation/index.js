import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../authentication/authentication.context";

export const Navigation = () => {
  const { isAutenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAutenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
