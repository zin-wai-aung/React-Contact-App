import React, { useEffect, useState } from "react";
import { FormComponent, ButtonComponent } from "../component";
import { addNewContact, editContact } from "../service/contact.service";
import { useNavigate, useLocation } from "react-router-dom";
import { useCreateContactMutation } from "../store/service/endpoint/contact.endpoint";

const ContactAddPage = () => {

  const [ addFunction, { isError, isLoading, data, isSuccess } ] = useCreateContactMutation();

  // console.log(isError,isLoading,data,isSuccess)

  const nav = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (location.state?.edit) {
      const { name, email, phone, address } = location.state.data;
      setFormData({ name, phone, email, address });
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await editContact(location.state.id, formData);
    } else {
      res = await addFunction(formData);
    }
    // console.log(res)
    if (res) {
      nav("/home");
    }
  };

  return (
    <div className="Center">
      <div className=" w-1/3">
        <h1 className=" text-2xl font-bold mb-5 text-center text-orange-400 font-serif text-nowrap">
          Create Your Contact
        </h1>

        <form className=" space-y-4" onSubmit={handleAdd}>
          <FormComponent
            value={formData.name}
            onChange={handleChange}
            name={"name"}
            type={"text"}
            label={"Name"}
          />

          <FormComponent
            value={formData.phone}
            onChange={handleChange}
            name={"phone"}
            type={"text"}
            label={"Phone Number"}
          />

          <FormComponent
            value={formData.email}
            onChange={handleChange}
            name={"email"}
            type={"email"}
            label={"Email"}
          />
          <FormComponent
            value={formData.address}
            onChange={handleChange}
            name={"address"}
            type={"text"}
            label={"Address"}
          />

          <ButtonComponent type="submit" style={""}>
            {" "}
            {location.state?.data ? "Update Contact" : "Create Contact"}
          </ButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;
