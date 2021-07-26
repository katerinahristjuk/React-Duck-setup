import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { usersOperations } from "./duck";
import {UsersComponent} from './UsersComponent';

export default function UsersContainer (){
    const users = useSelector(state=> state.usersReducer.users);
    const dispatch = useDispatch();
    const [user, setUser] = useState({})
    const [activeEdit, setActiveEdit] = useState(false)
    const [list, updateList] = useState(users);

    useEffect(()=>{
        dispatch(usersOperations.fetchUsers())
    },[dispatch])

    function editUser(korisnik, active ){
        setUser(korisnik)
        console.log(korisnik)
        setActiveEdit(active)
    }

    function saveEditedUser(){
        dispatch(usersOperations.editUser(user));
        setUser({});
        setActiveEdit(false)
    }

    const handleDeleteItem = id => {
        updateList(list.filter(user => user.id !== id))
    }

    return(
        <div id='users-container'>
            <h2>users container</h2>
            {activeEdit && <>
                <input type='text' value={user.name} onChange={e=>setUser({...user, name:e.target.value})} />
                <input type='text' value={user.username} onChange={e=>setUser({...user, email:e.target.value})} />
                <input type='text' value={user.email} onChange={e=>setUser({...user, email:e.target.value})} /><br/><br/>
                <button onClick={saveEditedUser}>Save</button>
            </>}

            <UsersComponent
            users={users}
            editUser={editUser}
            handleDeleteItem={handleDeleteItem}
            />
        </div>
    )
}

