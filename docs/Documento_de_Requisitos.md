# Documento de Requisitos

## Requisitos Funcionais

O sistema deve permitir que um usuário possa cadastrar um endereço que será vinculado a sua conta informando o logradouro, bairro, cidade e estado.

O sistema deve permitir que um usuário possa editar todos os dados do endereço vinculado a sua conta.

O sistema deve permitir que um usuário possa criar uma conta informando o nome, e-mail, se está ativa e endereço.

O sistema deve permitir que um usuário possa editar todos os dados de sua conta.

O sistema deve permitir que um usuário possa editar o estado de ativação da sua conta.

O sistema deve permitir que um usuário possa visualizar todos os dados da sua conta.

O sistema deve permitir que um gestor realize a busca paginada de informações de múltiplas contas existentes, retornando no máximo 20 registros por página.

O sistema deve permitir que um gestor cadastre um item informando nome, descrição, imagem, preço e seu estado de ativação.

O sistema deve permitir que um gestor edite qualquer valor de um item existente.

O sistema deve permitir que um gestor altere a ativação de um item existente.

O sistema deve permitir que um gestor realize a busca das informações de um item existente pelo seu nome.

O sistema deve permitir que um gestor realize a busca paginada de informações de múltiplos itens existentes, retornando no máximo 20 registros por página.

O sistema deve permitir que um cliente possa criar uma conta informando o id de usuário, nome, e-mail,  se está ativo, endereço e métodos de pagamento.

O sistema deve permitir que um cliente possa editar todos os dados de sua conta.

O sistema deve permitir que um cliente possa editar o estado de ativação da sua conta..

O sistema deve permitir que um cliente possa visualizar todos os dados da sua conta.

O sistema deve permitir que um cliente possa cadastrar um método de pagamento que será vinculado a sua conta informando o tipo e os dados da conta bancária.

O sistema deve permitir que um cliente possa editar todos os dados de qualquer método de pagamento vinculado a sua conta.

O sistema deve permitir que um cliente realize a busca paginada de informações de múltiplas métodos de pagamento existentes vinculados a sua conta, retornando no máximo 20 registros por página.

O sistema deve permitir que o cliente possa solicitar pedidos e cada pedido precisa estar vinculado a um cliente, conter um status, método de pagamento e os itens solicitados.

O sistema deve permitir que o cliente possa visualizar todos os seus pedidos e as informações destes.

O sistema deve permitir que o cliente possa validar o seu pedido.

O sistema deve permitir que um entregador possa criar uma conta informando o id de usuário, nome, e-mail,  se está ativo, endereço e métodos de pagamento.

O sistema deve permitir que um entregador possa editar todos os dados de sua conta.

O sistema deve permitir que um entregador possa editar o estado de ativação da sua conta..

O sistema deve permitir que um entregador possa visualizar todos os dados da sua conta.

O sistema deve permitir que um entregador possa visualizar o seu saldo.

O sistema deve permitir que um entregador possa visualizar a sua entrega atual.

O sistema deve permitir que um entregador consiga visualizar a rota que será realizada para a entrega.

## Requisitos Não Funcionais

O sistema deve estar disponível em 95% do tempo total de execução.

O sistema deve ser capaz de responder 90% das requisições em até 5s.

O sistema deve ser capaz de suportar 10000 usuários simultâneos.

O sistema deve ser compatível com os navegadores Edge, Chrome e Firefox.

Todas as senhas devem ser protegidas por criptografia segura.

O sistema precisa conter autenticação JWT.

As informações devem ser protegidas por HTTPS.

## Regras de Negócio

Um pedido pode conter apenas um dentre os seguintes status por vez: recebido, em produção, pronto, despachado, entregue, cancelado.

Um tipo de método de pagamento pode ser um dentre os descritos: pix, cartão de crédito, cartão de débito.

O pedido pode ser validado somente se o dispositivo do entregador e o do consumidor estiverem a no máximo 10 metros de distância um do outro.

Um pedido pode ser validado somente uma única vez.