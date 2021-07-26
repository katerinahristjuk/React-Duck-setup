/* eslint-disable import/no-anonymous-default-export */
import actions from './actions';
import { getUsers, changeUser, delUser } from './../../../api/usersApi';

const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams))
        return getUsers(requestParams)
            .then(result => {
                dispatch(actions.fetchUsersSuccess(result))
                return result;
            })
            .catch(error => {
                dispatch(actions.fetchUsersFail(error));
                return error;
            })
    }
}

const editUser = (requestParams) =>{
    return dispatch => {
        dispatch(actions.editUserRequest(requestParams))
        return changeUser(requestParams)
        .then(result=>{
            dispatch(actions.editUserSuccess(result))
            return result
        })
        .catch( err=>{
            dispatch(actions.editUserFail(err))
            return err
        })
}}

const deleteUser = (requestParams) =>{
    return dispatch => {
        dispatch(actions.deleteUserRequest(requestParams))
        return delUser(requestParams)
        .then(result=>{
            dispatch(actions.deleteUserSuccess(result))
            return result
        })
        .catch( err=>{
            dispatch(actions.deleteUserFail(err))
            return err
        })
}}

export default {
    fetchUsers,
    editUser,
    deleteUser
}