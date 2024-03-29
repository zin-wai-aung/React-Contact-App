import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import {
  ContainerComponent,
  FormComponent,
  ButtonComponent,
  LoadingComponent,
  ErrorComponent,
  PreventComponent,
} from "../component";
import { LoginAction } from "../store/action/auth.action";

const RegisterPage = () => {
  const nav = useNavigate();

  const { loading, data, error, auth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  // const { handleDealApi, loading, error, data } = useApi(Register);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  },[data])

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(res);
    // handleDealApi(formData)
    LoginAction(dispatch,formData)
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
                Register Your Account
              </h1>

              {error && <ErrorComponent> {error} </ErrorComponent>}

              <form className=" space-y-4" onSubmit={handleSubmit}>
                <FormComponent
                  value={formData.name}
                  onChange={handleChange}
                  name={"name"}
                  type={"text"}
                  label={"Enter Username"}
                  placeholder={"Mg Mg"}
                />

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
                  placeholder={"Password"}
                />

                <FormComponent
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  name={"password_confirmation"}
                  type={"password"}
                  label={"Confirm Your Password"}
                  placeholder={"Confirm password"}
                />

                <ButtonComponent type="submit" style={""}>
                  {" "}
                  Register
                </ButtonComponent>
              </form>
              <p className=" text-center mt-3">
                Already have an account?
                <span
                  className=" underline text-orange-500 mx-2 cursor-pointer"
                  onClick={() => nav("/")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        )}
      </ContainerComponent>
    </PreventComponent>
  );
};

export default RegisterPage;
