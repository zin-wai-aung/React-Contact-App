import React, { useEffect, useState } from "react";
import { getAllContacts, deleteContact } from "../service/contact.service";
import { LoadingComponent, ErrorComponent, ContactCard } from "../component";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [deleteItem, setDeleteItem] = useState(false);

  const handleDelete = async (id) => {
    // console.log(id);
    await deleteContact(id);
    setDeleteItem((pre)=>!pre) // =  setDeleteItem(!deleteItem)

  };

  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));

      const res = await getAllContacts();
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [deleteItem]);

  return (
    <div className="Center mt-14">
      <div className=" w-2/3 flex justify-center items-center">
        {items.loading ? (
          <LoadingComponent />
        ) : (
          <>
            {items.error && <ErrorComponent />}

            <div className=" w-full">
              {items.data.map((i) => (
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
