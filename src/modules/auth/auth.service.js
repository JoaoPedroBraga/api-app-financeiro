import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { save, getByEmail } from '../user/index.js';

export const login = async (params) => {
    const user = await getByEmail(params.email);

    //TODO verificar user existe
    if (!user) {
        return { error: 'Senha ou Email errado'};
    }
    //TODO Verificar senha
    const passwordCorrect = bcrypt.compareSync(params.password, user.password)
    if (!passwordCorrect){
        return { error: 'Email ou Senha Errado'};
    }
    // gerar token
    const token = jwt.sign({id:user.id}, process.env.JWT_SECRET)
    
    return {token};
};

export const register = async (params) => {
    const user = await getByEmail(params.email);

    if (user) {
        return { error: 'Email Cadastrado'};
    }

    const userCreated = await save(params);

    const token = jwt.sign({id:userCreated[0]}, process.env.JWT_SECRET)
    
    return {token};
};