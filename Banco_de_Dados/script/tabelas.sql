CREATE DATABASE BD_init_0;
USE BD_init_0;

CREATE TABLE tbUsuarios (
						 id int primary key auto_increment,
                         nome varchar(64) not null,
                         usuario varchar(32) not null,
                         senha varchar(64) not null,
                         email varchar(100) not null,
                         horario_cadastro datetime not null
						) auto_increment = 1000;
                        
