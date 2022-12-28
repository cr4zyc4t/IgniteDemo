import { preventAutoHideAsync } from "expo-splash-screen";
import React from "react";

import App from "./app/app";

preventAutoHideAsync();

function IgniteApp() {
  return <App />;
}

export default IgniteApp;
