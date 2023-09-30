import React from "react";

const Contact = (props) => {
    return(
        <div className="row p-md-2 mb-2" style={{ borderRadius:"20px", border:"1px solid #555"}}> 
            <div className="col-2 col-md-1 pt-2 pt-md-1">
                <img src={`https://ui-avatars.com/api/?name=${props.contactObj.name}`} style={{width:"80%"}} ></img>
            </div>

            <div className="col-6 col-md-5 text-warning pt-0">
                <span className="h4">{props.contactObj.name}</span>
                <br />
                <div className="text-black-50">
                    {props.contactObj.email}
                    <br />
                    {props.contactObj.phone}
                </div>
            </div> 

            <div className="col-2 col-md-2 pt-md-3">
                <button className={`btn btn-sm m-1 ${
                    props.contactObj.isFavourite? "btn-warning" : "btn-outline-warning"
                }`}> <i className="bi bi-star" style={{fontSize:"1rem"}} onClick={() => props.toggleFavourite(props.contactObj)} ></i> </button>
            </div>
            
            <div className="col-2 cold-md-3 pt-md-3">
                <button className="btn btn-primary btn-sm m-1">
                    <i className="bi bi-pencil-square" style={{fontSize:"1rem"}} onClick={() => props.editContact(props.contactObj)} ></i>
                </button>
                <button className="btn btn-danger btn-sm m-1">
                    <i className="bi bi-trash-fill" style={{fontSize:"1rem"}} onClick={() => props.deleteContact(props.contactObj)} ></i>
                </button>
            </div>
            
        </div>
    )
}

export default Contact;