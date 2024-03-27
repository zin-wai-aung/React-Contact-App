import React from "react";
import { ButtonComponent, PreventComponent } from "../component";
import {useNavigate} from "react-router-dom"

const HomePage = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/")
  }
  return (
    <PreventComponent routhPath={"/"} check={!localStorage.getItem("auth")}>
      <div className=" m-10 font-serif">
        HomePage
        <div className=" w-1/5 mt-5">
          <ButtonComponent onClick={handleLogout} className="!p-2">
            Logout
          </ButtonComponent>
        </div>
      </div>
    </PreventComponent>
  );
};

export default HomePage;
