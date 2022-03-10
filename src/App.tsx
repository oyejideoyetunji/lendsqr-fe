import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"
import { Navigation } from "./navigation";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
