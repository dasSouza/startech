USE BD_init_0;

SELECT * FROM tbUsuario;

SELECT * FROM tbUsuario, tbLogin_Usuario where fk_id_Usuario = id_Usuario;

SELECT * FROM tbSensores, tbDados_Sensores where fk_id_dados = id_dados;