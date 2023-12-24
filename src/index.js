import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { PropagateLoader } from "react-spinners";
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#E2E4E8",
};

root.render(
  <Suspense
    fallback={<PropagateLoader color="#8c52ff" cssOverride={override} />}
  >
    <App />
  </Suspense>
);
