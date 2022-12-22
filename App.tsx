import * as SplashScreen from "expo-splash-screen";
import React from "react";

import App from "./app/app";

SplashScreen.preventAutoHideAsync();

function IgniteApp() {
  return <App />;
}

export default IgniteApp;
