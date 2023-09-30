import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "123-444-5678",
          email: "ben@email.com",
          isFavourite: false,
        },
        {
          id: 2,
          name: "Akshay Mehta",
          phone: "123-444-5679",
          email: "akshay@email.com",
          isFavourite: true,
        },
        {
          id: 3,
          name: "Prit Parekh",
          phone: "123-555-5678",
          email: "prit@email.com",
          isFavourite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please Enter a valid name" };
    } else if (newContact.email === "") {
      return { status: "failure", msg: "Please Enter a valid email" };
    }

    const duplicateReacord = this.state.contactList.filter((f) => {
      if (f.email === newContact.email || f.phone === newContact.phone) {
        return true;
      }
    });

    if (duplicateReacord.length > 0) {
      return { status: "failure", msg: "Duplicate record!" };
    } else {
      const finalAddedContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavourite: true,
      };
      this.setState((prevState) => {
        // can be one of the childish way to assign the newly brought contact.
        // prevState.contactList.push({
        //   id: 4,
        //   name: newContact.name,
        //   email: newContact.email,
        //   phone: newContact.phone,
        //   isFavourite: false
        // })

        return {
          contactList: prevState.contactList.concat([finalAddedContact]),
        };
      });
      return { status: "success", msg: "Contact is added Successfully!" };
    }
  };

  handleToggleFavourite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((m) => {
          if (m.id === contact.id) {
            return { ...m, isFavourite: !m.isFavourite };
          }
          return m;
        }),
      };
    });
  };

  handleDeleteContact = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter(
          (obj) => obj.id != contact.id
        ),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const finalAddedContact = {
      ...newContact,
      id:
        this.state.contactList.length > 0
          ? this.state.contactList[this.state.contactList.length - 1].id + 1
          : 1,
      isFavourite: false,
    };

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([finalAddedContact]),
      };
    });
  };

  handleRemoveAllContacts = () => {
    this.setState((prevState) => {
      return {
        contactList: (prevState.contactList = []),
      };
    });
  };

  handleEditContact = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };

  handleCancelUpdate = () => {
    this.setState((prevState) => {
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };

  handleUpdateContact = (updatingContact) => {
    if (updatingContact.name === "") {
      return { status: "failure", msg: "Please Enter a valid name" };
    } else if (updatingContact.email === "") {
      return { status: "failure", msg: "Please Enter a valid email" };
    }
    const duplicateReacord = this.state.contactList.filter((f) => {
      if (
        f.email === updatingContact.email ||
        f.phone === updatingContact.phone
      ) {
        return true;
      }
    });

    if (duplicateReacord.length > 0 && !this.state.isUpdating) {
      return { status: "failure", msg: "Duplicate record!" };
    } else {
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.map((obj) => {
            if (obj.id == prevState.selectedContact.id) {
          
              return {
                ...obj,
                name: updatingContact.name,
                email: updatingContact.email,
                phone: updatingContact.phone,
              };
            }
            return obj;
          }),
          isUpdating:false,
          selectedContact:undefined
        };
      });
      return { status: "success", msg: "Contact is updated Successfully!" };
    }
  };

  render() {
    return (
      // <div className='row'>
      //     <div className='col'>
      //         Lets start
      //     </div>
      // </div>
      <div>
        <Header></Header>
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>

            <div className="col-4 row">
              <RemoveAllContacts
                handleRemoveAllContacts={this.handleRemoveAllContacts}
              />
            </div>

            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  addContact={this.handleAddContact}
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  cancelUpdate={this.handleCancelUpdate}
                  updateContact = {this.handleUpdateContact}
                />
              </div>
            </div>

            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite === true
                  )}
                  toggleFavourite={this.handleToggleFavourite}
                  deleteContact={this.handleDeleteContact}
                  editContact={this.handleEditContact}
                />
              </div>
            </div>

            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite === false
                  )}
                  toggleFavourite={this.handleToggleFavourite}
                  deleteContact={this.handleDeleteContact}
                  editContact={this.handleEditContact}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
