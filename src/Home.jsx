import { useOutletContext } from "react-router";
import { Outlet } from "react-router";

export function Home() {
  return (
    <>
      <Outlet context={useOutletContext()} />
    </>
  );
}
