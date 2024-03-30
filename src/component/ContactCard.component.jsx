import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ContactCardComponent = ({ data , handleDelete }) => {
  const nav = useNavigate();

  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };

  const handleEdit = () => {
    // console.log(data.id)
    nav("/home/add",{state:{edit:true,data,id:data.id}})
  }


  return (
    <div className=" bg-slate-200 rounded-lg shadow text-indigo-600 flex justify-between items-center p-5 my-3">
      <div onClick={handleRedirect} className=" flex flex-col cursor-pointer">
        <h3 className="text-2xl font-bold">{data.name}</h3>
        <h3 className="text-xl font-medium">{data.phone}</h3>
        <h3 className=" text-lg">{data.email}</h3>
      </div>
      <div className=" flex items-center space-x-3">
        <FaEdit onClick={handleEdit} className=" text-2xl cursor-pointer" />
        <MdDelete onClick={handleDelete.bind(this,data.id)} className=" text-2xl  text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ContactCardComponent;
