import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleContact } from "../service/contact.service";
import { LoadingComponent, ErrorComponent } from "../component";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

const DetailContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));

      const res = await getSingleContact(id);
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [id]);

  return (
    <div className="Center">
      <div className=" w-2/3 flex justify-center items-center">
        {items.loading ? (
          <LoadingComponent />
        ) : (
          <>
            {items.error && <ErrorComponent />}

            <div className=" w-[300px] h-[350px] rounded-lg shadow bg-indigo-400 flex flex-col justify-center items-center">
              <div className=" flex flex-col items-center justify-center">
                <div className="">
                  <div className=" w-[100px] h-[100px] rounded-full bg-white"></div>
                </div>
                <div className="">
                  <h3 className="text-2xl font-bold text-white my-3">
                    {items.data.name}
                  </h3>
                </div>
                <div className=" flex justify-center items-center space-x-2">
                  <FaPhoneVolume className=" text-xl text-white" />

                  <h3 className="text-xl text-white">{items.data.phone}</h3>
                </div>

                <div className=" flex space-x-2 justify-center items-center bg-gray-100 rounded my-3 py-1 px-10 w-[80%]">
                  <span className=" text-xl">
                    <MdMail />
                  </span>
                  <h3 className="text-xl">{items.data.email}</h3>
                </div>

                <div className=" flex space-x-2 justify-center items-center bg-gray-100 rounded py-1 px-10 w-[80%]">
                  <FaLocationDot className=" text-xl" />
                  <h3 className="text-xl">{items.data.address}</h3>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailContactPage;
