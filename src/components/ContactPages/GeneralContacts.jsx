import React from "react";
import Contact from "./Contact";

const GeneralContacts = (props) => {
  return (
    <div className="col-12 py-2" style={{ borderRadius: "10px", backgroundColor:"#cdf5f7"}}>
            <div className="text-center text-black-25">General Contacts</div>
            <div className="p-2">
              {props.contacts.map((contactObj, index) => (
                <Contact contactObj={contactObj} key={index}></Contact>
              ))}
            </div>
    </div>
  );
};

export default GeneralContacts;
