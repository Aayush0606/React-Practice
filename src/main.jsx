import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { fetchData } from "./components/Home/Home";
import { ThemeProvider } from "./context/Theme/ThemeContext.jsx";

//! With lazy Loading
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=""
        lazy={async () => {
          const LandingHome = await import("./pages/LandingApp/LandingHome");
          return { Component: LandingHome.default };
        }}
        loader={fetchData}
      />
      <Route
        path="todo"
        lazy={async () => {
          const TodoHome = await import("./pages/TodoApp/TodoHome");
          return { Component: TodoHome.default };
        }}
      />
      <Route
        path="image"
        lazy={async () => {
          const QuoteHome = await import("./pages/QuoteApp/QuoteHome");
          return { Component: QuoteHome.default };
        }}
      />
      <Route
        path="password"
        lazy={async () => {
          const PasswordHome = await import("./pages/PasswordApp/PasswordHome");
          return { Component: PasswordHome.default };
        }}
      />
      <Route
        path="currency"
        lazy={async () => {
          const CurrencyHome = await import("./pages/CurrencyApp/CurrencyHome");
          return { Component: CurrencyHome.default };
        }}
      />
      <Route
        path="click1"
        lazy={async () => {
          const CurrencyHome = await import("./pages/ClickMeApp/ClickMe1Home");
          return { Component: CurrencyHome.default };
        }}
      />
      <Route
        path="click2"
        lazy={async () => {
          const CurrencyHome = await import("./pages/ClickMeApp/ClickMe2Home");
          return { Component: CurrencyHome.default };
        }}
      />
    </Route>
  )
);

//! Without Lazy Loading
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route loader={fetchData} path="" element={<Home />} />
//       <Route path="todo" element={<TodoHome />} />
//       <Route path="image" element={<QuoteHome />} />
//       <Route path="password" element={<PasswordHome />} />
//       <Route path="currency" element={<CurrencyHome />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
