import React, { useState } from 'react'
import {
  FormComponent,
  ButtonComponent,
} from "../component";
import { addNewContact } from '../service/contact.service';
import {useNavigate} from "react-router-dom"

const ContactAppPage = () => {

  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleAdd =  async (e) => {
    e.preventDefault();
    const res = await addNewContact(formData);
    // console.log(res)
    if (res) {
      
      nav("/home")
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
            Create Contact
          </ButtonComponent>
        </form>
      </div>
    </div>
  );
}

export default ContactAppPage