// src/main.jsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/Discos.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import Discos from "./pages/Discos.jsx";
import DiscosCreate from "./pages/DiscosCreate.jsx";
import DiscosEdit from "./pages/DiscosEdit.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/sobre", element: <Sobre /> },
    { path: "/contato", element: <Contato /> },
    { path: "/discos:id", element: <Discos/> },
    { path: "/discos/create", element: <DiscosCreate /> },
    { path: "/discos:id/edit", element: <DiscosEdit /> },
]);
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);