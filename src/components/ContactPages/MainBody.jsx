import React from 'react';
import Header  from '../Layout/Header';
import AddRandomContact from './AddRandomContact';
import RemoveAllContacts from './RemoveAllContacts';
import AddContact from './AddContact';
import FavouriteContacts from './FavouriteContacts';
import GeneralContacts from './GeneralContacts';


class MainBody extends React.Component{
    render(){
        return(
            // <div className='row'>
            //     <div className='col'>
            //         Lets start
            //     </div>
            // </div>
            <div>
                <Header></Header>
                <div className='container' style={{minHeight:"85vh"}}>
                    <div className='row py-3'>
                        <div className='col-4 offset-2'>
                            <AddRandomContact/>
                        </div>

                        <div className='col-4'>
                            <RemoveAllContacts />
                        </div>
                        <div className='row py-2'>
                            <AddContact />
                        </div>

                        <div className='row py-2'>
                            <FavouriteContacts />
                        </div>

                        <div className='row py-2'>
                            <GeneralContacts />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
   
}

export default MainBody;