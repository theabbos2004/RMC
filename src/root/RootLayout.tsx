import { Outlet } from "react-router-dom";
import { Header } from "../components";
export default function RootLayout() {
  return (
    <div className="w-full bg-dark-blue  min-h-[100vh]">
      <div className="w-full  min-h-[100vh] flex flex-col bg-app">
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}
