import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  ContainerComponent,
  FormComponent,
  ButtonComponent,
  LoadingComponent,
  PreventComponent,
  ErrorComponent,
} from "../component";
import { login, processing } from "../store/slice/auth.slice";
import { Login } from "../service/auth.service";

const LoginPage = () => {
  const nav = useNavigate();

  const {loading,data,error,auth} = useSelector((store)=>store.auth)
  const dispatch = useDispatch();


  // const { handleDealApi, loading, error, data } = useApi(Login);



  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  const handleChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(processing()); //loading true
    const res = await Login(formData);
    dispatch(login(res.data))
  };

  return (
    <PreventComponent routhPath={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponent>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="Center">
            <div className=" w-1/3">
              <h1 className=" text-2xl font-bold mb-5 text-center text-orange-400 font-serif">
                Login Your Contact
              </h1>

                {error && <ErrorComponent>{error}</ErrorComponent>}
                
              <form className=" space-y-4" onSubmit={handleSubmit}>
                <FormComponent
                  value={formData.email}
                  onChange={handleChange}
                  name={"email"}
                  type={"email"}
                  label={"Enter Your Email"}
                  placeholder={"example@gmail.com"}
                />

                <FormComponent
                  value={formData.password}
                  onChange={handleChange}
                  name={"password"}
                  type={"password"}
                  label={"Enter Your Password"}
                />

                <ButtonComponent type="submit" style={""}>
                  {" "}
                  Login
                </ButtonComponent>
              </form>
              <p className=" text-center mt-3">
                Don't you have an account? Please
                <span
                  className=" underline text-orange-500 ms-2 cursor-pointer"
                  onClick={() => nav("/register")}
                >
                  Register
                </span>
              </p>
            </div>
          </div>
        )}
      </ContainerComponent>
    </PreventComponent>
  );
};

export default LoginPage;
