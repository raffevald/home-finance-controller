INSERT INTO public.perfils_usuario
(codigo, descricao)
VALUES(1, 'administrador');

INSERT INTO public.usuarios
(codigo, data_de_cadastro, usuario, senha, nome_completo, status_usuario, fk_perfil)
VALUES(1, '2022-09-21', '11122233344', '2078', 'Rafael Evald Silva', 'ativo', 1);
