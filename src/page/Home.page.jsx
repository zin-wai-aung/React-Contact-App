import React, { useEffect } from "react";
import { ButtonComponent, PreventComponent } from "../component";
import { Outlet, useNavigate } from "react-router-dom";
import { getProfile } from "../service/auth.service";

const HomePage = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  const handleAdd = () => {
    nav("/home/add");
  };

  useEffect(() => {
    (async () => {
      const res = await getProfile();
      // console.log(res)
    })();
  }, []);

  return (
    <PreventComponent routhPath={"/"} check={!localStorage.getItem("auth")}>
      <div className="container mx-auto font-serif m-5 h-screen">
        <div className=" container w-[79%] mx-auto h-full">
          <nav className="fixed w-full top-0 left-0 mx-auto mt-5 bg-white">
            <div className="flex w-[70%] container mx-auto justify-between items-center border-b py-4">
              <h1 className=" cursor-pointer" onClick={() => nav("/home")}>
                Contact App
              </h1>
              <div className=" flex space-x-3">
                <ButtonComponent onClick={handleAdd} className="!p-2">
                  Add
                </ButtonComponent>
                <ButtonComponent onClick={handleLogout} className="!p-2">
                  Logout
                </ButtonComponent>
              </div>
            </div>
          </nav>

          <Outlet />
        </div>
      </div>
    </PreventComponent>
  );
};

export default HomePage;
