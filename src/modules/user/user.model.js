import knex from '../../services/knex.js';

export const getAll = () =>{
    return knex('users');
};

export const save = (params) => {
    return knex('users').where({id}).first();
};

export const remove = (id) => {
    return knex('users').delete(id);
};

export const update = (id, params) => {
    return knex('users').where({id}).update(params);
}