-- Arquivo: create_table_users.sql
-- Descrição: Este script cria a tabela 'users' no banco de dados.

-- Criação da tabela 'users'
CREATE TABLE users (
    id SERIAL PRIMARY KEY,  -- Chave primária, autoincrementada
    name VARCHAR(100),      -- Coluna para armazenar o nome do usuário
    email TEXT UNIQUE NOT NULL,  -- Coluna para armazenar o email, deve ser único e não nulo
    entries BIGINT DEFAULT 0,     -- Coluna para armazenar o número de entradas, padrão é 0
    joined TIMESTAMP NOT NULL     -- Coluna para armazenar a data de registro, não pode ser nula
);

-- Fim do script