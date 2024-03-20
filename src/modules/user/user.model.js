import bcrypit from 'bcrypt';
import knex from '../../services/knex.js';

export const getAll = () =>{
    return knex("user").select(
        "id",
        "name",
        "email",
        "created_at",
        "updated_at"
    );
};

export const get = (id) => {
    return knex("user")
    .where(id)
    .select("id","name","email","created_at","updated_at")
    .first();
}

export const save = (params) => {
    params.password = bcrypit.hashSync(params.password, 10);
    return knex("user").insert(params);
};

export const remove = (id) => {
    return knex("user").delete(id);
};

export const update = (id, params) => {
    return knex("user").where({id}).update(params);
}