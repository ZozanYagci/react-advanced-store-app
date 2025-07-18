import { Outlet } from "react-router";
import ButtonUsage from "../components/ButtonUsage";

export default function MainLayout() {
  return (
    <div className="container">
      <ButtonUsage></ButtonUsage>
      <h1>Main Layout</h1>
      <Outlet></Outlet>
    </div>
  );
}
