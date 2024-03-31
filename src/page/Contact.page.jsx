import React, { useEffect, useState } from "react";
import { getAllContacts, deleteContact } from "../service/contact.service";
import { LoadingComponent, ErrorComponent, ContactCard } from "../component";
import { useGetContactQuery } from "../store/service/endpoint/contact.endpoint";

const ContactPage = () => {

  const { isError,isLoading,data,isSuccess } = useGetContactQuery();
  
  const [deleteItem, setDeleteItem] = useState(false);

  const handleDelete = async (id) => {
    // console.log(id);
    await deleteContact(id);
    setDeleteItem((pre)=>!pre) // =  setDeleteItem(!deleteItem)

  };

  return (
    <div className="Center mt-14">
      <div className=" w-2/3 flex justify-center items-center">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            {isError.message && <ErrorComponent />}

            <div className=" w-full">
              {data.contacts.data.map((i) => (
                <ContactCard
                  key={i.id}
                  data={i}
                  handleDelete={handleDelete}
                  className="bg-white rounded-lg shadow-md p-6"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
