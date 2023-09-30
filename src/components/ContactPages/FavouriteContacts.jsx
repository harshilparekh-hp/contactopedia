import React from "react";
import Contact from "./Contact";

const FavouriteContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: "10px", backgroundColor: "#f7f3cd" }}
    >
      <div className="text-center text-black-25">Favourites</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact
            contactObj={contact}
            key={index}
            toggleFavourite={props.toggleFavourite}
            deleteContact = {props.deleteContact}
            editContact = {props.editContact}
          ></Contact>
        ))}
      </div>
    </div>
  );
};

export default FavouriteContacts;
