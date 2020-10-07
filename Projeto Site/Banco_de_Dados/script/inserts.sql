USE BD_init_0;

INSERT INTO tbUsuario (id, nome, email, cidade, UF, telefone, horario_cadastro) 
VALUES (null, 'João Genérico', 'joao@email.com','São Paulo', 'SP', '11912345678', NOW());

INSERT INTO tbLogin_Usuario (idLogin_Usuario, usuario, senha, horario_login, fk_id) 
VALUES (null, 'jonjon', SHA1('admin'), NOW(), 1000);