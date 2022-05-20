# Tipos de testes

-   Unitários = Testam um componente/funcionalidade de forma **isolada**.
-   Integração = Testa como um ou mais componentes/funcionalidades se comportam juntos(as).
-   E2E = Simula o que um usuário vai fazer na nossa aplicação diariamente.

# Banco de dados

-   Unitários = Não.
-   Integração = Talvez.
-   E2E = Sim (não só o Banco de Dados, QUALQUER CONEXÃO EXTERNA, INCLUSIVE APIS).

# Exemplo

## E-commerce

### Realizar compra

1. Cadastra usuário no banco.
2. Cadastra endereço no banco.
3. Se comunica com **gateway de pagamentos** para enviar a transação.
4. Cadastra a compra no banco.

-   Unitário: Não tem banco de dados e nem API do Gateway.
-   E2E: Não é aconselhável ter mocks ou dados fakes.

Gateway de pagamento: Conta de teste (API Key de Teste).

# Testes E2E + Banco

-   Os testes não devem interferir entre sí.
-   Não pode usar o banco de desenvolvimento (usar um banco específico para testes).
