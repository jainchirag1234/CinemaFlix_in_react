import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movies } from "./pages/Movies";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./component/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import "./App.css";
import { SignUp } from "./pages/signup";
import { SignIn } from "./pages/SignIn";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./component/UI/MovieDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movies />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },

        { path: "/signUp", element: <SignUp /> },
        { path: "/signIn", element: <SignIn /> },
        // {
        //   path: "*",
        //   element: <NotFound />,
        // },
      ],
    },
  ]);
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movies />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Route>
  //   )
  // );
  return <RouterProvider router={router} />;
};
export default App;
