import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main>
      <NavigationBar />
      <Outlet />
    </main>
  );
}
