CREATE DATABASE BD_init_0;
USE BD_init_0;

CREATE TABLE tbUsuario (
	id int primary key auto_increment,
	nome varchar(64) not null,
	email varchar(100) not null,
    cidade varchar(50) not null,
    UF char(2) not null,
    telefone varchar(14) not null,
	horario_cadastro datetime not null
	) auto_increment = 1000;
                        
CREATE TABLE tbLogin_Usuario (
	idLogin_Usuario int primary key auto_increment,
	usuario varchar(32) not null,
	senha varchar(64) not null,
	horario_login datetime not null,
    fk_id int,
    foreign key (fk_id) references tbUsuario(id)
	);
                              
