CREATE DATABASE Art_aTech;
DROP DATABASE Art_aTech;
USE Art_aTech;

CREATE TABLE galeria(
idGaleria int primary key auto_increment,
cnpj CHAR(14)
);

CREATE TABLE usuario(
idUsuario int primary key auto_increment,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50),
fkGaleria int,
	constraint fkGalUsu foreign key (fkGaleria) REFERENCES galeria(idGaleria)
);

CREATE TABLE obra(
idObra int primary key auto_increment,
descricao VARCHAR(300),
fkGaleria int,
	constraint fkGalObr foreign key (fkGaleria) REFERENCES galeria(idGaleria)
);

CREATE TABLE medida(
idMedida int primary key auto_increment,
ldr_luminosidade DECIMAL,
lm35_temperatura DECIMAL,
momento DATETIME,
fkObra int,
	constraint fkObrMed foreign key (fkObra) REFERENCES obra(idObra)
);

INSERT INTO galeria VALUES
	(null, 00000000000000);