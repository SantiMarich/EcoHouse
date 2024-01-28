import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

import { BrowserRouter as Router } from "react-router-dom";
import HouseContextProvider from "./components/HouseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HouseContextProvider>
    <Router>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-emj64zlfmkr6l2dx.us.auth0.com"
          clientId="MyjmDaYtJSz5C4QNupTe6us5KeKmqkDW"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </Router>
  </HouseContextProvider>
);
