CREATE TABLE perfils_usuario(
    codigo integer, 
    descricao varchar(50),

    CONSTRAINT pk_perfils_usuario PRIMARY KEY (codigo)
);

CREATE TABLE usuarios (
    codigo integer,
    data_de_cadastro date,
    usuario char(11),
    senha varchar(50),
    nome_completo varchar(50),
    status_usuario varchar(20),
    fk_perfil integer,

    CONSTRAINT pk_usuarios PRIMARY KEY (codigo),
    FOREIGN KEY (fk_perfil) REFERENCES perfils_usuario(codigo)
);


// Massa de dados
INSERT INTO public.perfils_usuario
(codigo, descricao)
VALUES(1, 'administrador');