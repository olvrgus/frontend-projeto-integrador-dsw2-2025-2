// src/main.jsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import DiscosShow from "./pages/discos/DiscosShow.jsx";
import DiscosCreate from "./pages/discos/DiscosCreate.jsx";
import DiscosEdit from "./pages/discos/DiscosEdit.jsx";
import DiscosIndex from "./pages/discos/DiscosIndex.jsx";
import Registrar from "./pages/registrar.jsx";
import Login from "./pages/Login.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const router = createBrowserRouter(
    { path: "/sobre", element: <Sobre /> },
    { path: "/contato", element: <Contato /> },
    { path: "/discos", element: <DiscosIndex /> },
    { path: "/discos/create", element: <DiscosCreate /> },
    { path: "/discos/:id", element: <DiscosShow /> },
    { path: "/discos/:id/edit", element: <DiscosEdit /> },
    { path: "/discos/Registrar", element: <Registrar /> },
    { path: "/discos/Login", element: <Login /> },
);
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);