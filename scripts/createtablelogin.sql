-- Arquivo: create_table_login.sql
-- Descrição: Este script cria a tabela 'login' no banco de dados.

-- Criação da tabela 'login'
CREATE TABLE login (
    id serial PRIMARY KEY,  -- Chave primária, autoincrementada
    hash varchar(100) NOT NULL,  -- Coluna para armazenar o hash da senha
    email text UNIQUE NOT NULL  -- Coluna para armazenar o email, deve ser único
);

-- Fim do script