import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import HouseContextProvider from "./components/HouseContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

const { REACT_APP_AXIOS_URL } = process.env;

const { REACT_APP_AUTH0_DOMAINID } = process.env;
const { REACT_APP_AUTH0_CLIENTID } = process.env;

axios.defaults.baseURL = REACT_APP_AXIOS_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HouseContextProvider>
      <Router>
        <React.StrictMode>
          <Auth0Provider
            domain={REACT_APP_AUTH0_DOMAINID}
            clientId={REACT_APP_AUTH0_CLIENTID}
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <App />
          </Auth0Provider>
        </React.StrictMode>
      </Router>
    </HouseContextProvider>
  </Provider>
);
