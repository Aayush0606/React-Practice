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
import TodoHome from "./pages/TodoApp/TodoHome";
import QuoteHome from "./pages/QuoteApp/QuoteHome";
import PasswordHome from "./pages/PasswordApp/PasswordHome";
import CurrencyHome from "./pages/CurrencyApp/CurrencyHome";
import Home, { fetchData } from "./components/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route loader={fetchData} path="" element={<Home />} />
      <Route path="todo" element={<TodoHome />} />
      <Route path="image" element={<QuoteHome />} />
      <Route path="password" element={<PasswordHome />} />
      <Route path="currency" element={<CurrencyHome />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
