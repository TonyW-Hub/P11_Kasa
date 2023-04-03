import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ProtectedLayout from "./layouts/ProtectedLayout/ProtectedLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ProtectedLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
