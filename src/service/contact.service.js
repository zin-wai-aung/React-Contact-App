import { api } from "./Api";

export const getAllContacts = async () => {
  try {
    const res = await api.get("/contact");
    const contactData = res.data.contacts.data;
    return contactData;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getSingleContact = async (id) => {
  try {
    const res = await api.get(`/contact/${id}`);
    return res.data.contact;
  } catch (e) {
    throw new Error(e.message);
  }
};


//add new contact
export const addNewContact = async (formData) => {
  try {
    const res = await api.post("/contact", formData);
    return res.data.success;
  } catch (e) {
    throw new Error(e.message);
  }
};

//update contact
export const editContact = async (id,formData) => {
  try {
    const res = await api.put(`/contact/${id}`, formData);
    if (res.data) {
      return true;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

//delete contact
export const deleteContact = async (id) => {
  try {
    const res = await api.delete(`/contact/${id}`);
    // console.log(res)
    if (res.data) {
      return true;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
