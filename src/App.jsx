import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProtectedLayout from "./layouts/ProtectedLayout/ProtectedLayout";
import HomePage from "./pages/HomePage/HomePage";
import { APP_LINKS } from "./project/appLinks";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={APP_LINKS.home}
      element={<ProtectedLayout />}
      errorElement={<ErrorPage />}
    >
      <Route path={APP_LINKS.home} element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/house/:id" element={<AboutPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
