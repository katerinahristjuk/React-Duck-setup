import { properties } from './../config/properties';

export const getUsers = () => {
    return fetch(`${properties.api.root}/users`)
        .then(res => res.json())
        .then(json => Promise.resolve(json))
        .catch(error => Promise.reject(error))
}

export const changeUser = (user) => {
    return fetch(`${properties.api.root}/users/${user.id}`,
    {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(json => Promise.resolve(json))
        .catch(error => Promise.reject(error))
}

export const delUser = (user) => {
    return fetch(`${properties.api.root}/users/${user.id}`,
    {
        method: 'DELETE'
    })
}