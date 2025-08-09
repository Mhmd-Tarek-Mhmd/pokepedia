import { Outlet } from "@tanstack/react-router";
import Layout from "../layouts";

const Route = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export  default Route;
