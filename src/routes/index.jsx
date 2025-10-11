import {createBrowserRouter, Navigate} from "react-router-dom";
import {Routes} from '@/examples'
import App from "@/App";

const routes = [
  {path:'.'},];

if (import.meta.env.VITE_ENABLE_EXAMPLES === "true") {
  routes.push(...Routes);
  routes.push({
    path:'/',
    element : <Navigate to="/examples" replace />
  });
} else {
    routes.push({
    path: "/*",
    element: <App />,
  });
}

  export const router = createBrowserRouter(routes);