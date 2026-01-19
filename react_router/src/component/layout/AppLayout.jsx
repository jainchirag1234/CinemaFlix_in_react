// import { Home } from "../../pages/Home";
import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./loading";

const AppLayout = () => {
  const navigation = useNavigation();
  //   console.log(navigation);

  if (navigation.state === "loading") return <Loading />;

  return (
    <>
      <Header />
      <Outlet />
      {/* <Home /> */}
      <Footer />
    </>
  );
};
export default AppLayout;
