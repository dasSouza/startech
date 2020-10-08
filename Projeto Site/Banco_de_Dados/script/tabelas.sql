CREATE DATABASE BD_init_0;
USE BD_init_0;

CREATE TABLE tbUsuario (
	id_Usuario int primary key auto_increment,
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
    	fk_id_Usuario int,
    	foreign key (fk_id_Usuario) references tbUsuario(id_Usuario)
);

CREATE TABLE tbDados_Sensores (
  id_dados INT PRIMARY KEY AUTO_INCREMENT,
  temperatura DECIMAL(5,2) NOT NULL,
  umidade DECIMAL(5,2) NOT NULL,
  horario_captacao DATETIME NOT NULL
);

CREATE TABLE tbSensores (
  id_sensor INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(5) NOT NULL,
  zona_area ENUM('norte', 'sul', 'leste', 'oeste', 'centro') NOT NULL,
  estado_sensor BOOLEAN DEFAULT TRUE,
  horario_primeiro_uso DATETIME NOT NULL,
	fk_id_dados int,
    foreign key (fk_id_dados) references tbDados_Sensores(id_dados)
);

describe tbDados_Sensores;