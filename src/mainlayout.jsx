import { Outlet } from "react-router-dom";
import MainFooter from "./components/main components/mainfooter";
import MainHeader from "./components/main components/mainheader";

export default function MainLayout() {
  return (
    <>
        <MainHeader />
        <main>
          <Outlet />
        </main>
        <MainFooter />
    </>
  )
}