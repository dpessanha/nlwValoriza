/\*\*

- tipos de parâmetros
- Routes Params => http://localhost:3000/produtos/12234344546
- Query Params => http://localhost:3000/produtos?name=teclado&description=apple
- Body Params => {
- "name": "teclado",
- "description": "apple"
- }
  \*/

/\*\*

- GET => busca informações
- POST => insere informações
- PUT => altera uma informação
- DELETE => remove um dado
- PATCH => altera uma informação específica

# NLW Valoriza

## Regras de negócio

- Cadastro de Usuário
  [] Não é permitido cadastrar mais de um usuário com o mesmo e-mail.
  [] Não é permitido cadastrar usuário sem e-mail.
- Cadastro de TAG
  [] Não é permitido cadastrar mais de uma TAG com o mesmo nome.
  [] Não é permitido cadastrar TAG sem nome.
  [] Não é permitido o cadastro por usuários não administradores
- Cadastro de compliments
  [] Não é permitido um usuário cadastrar um compliment para si.
  [] Não é permitido cadastrar compliments para usuários inválidos.
  [] O usuário precisa estar autenticado no app.
