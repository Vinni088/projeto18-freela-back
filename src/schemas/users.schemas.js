import joi from "joi"

export const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required()
});
/*{
    name: "João",
    email: "joao@driven.com.br",
    password: "driven",
    confirmPassword: "driven"
}*/

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});
/*{
    email: "joao@driven.com.br",
    password: "driven",
}*/