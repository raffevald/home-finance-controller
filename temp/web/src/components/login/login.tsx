// import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import React, { useState } from "react";
// import { fechGetAllAddress } from "../../stores/fetchActions/fechEnderecos";
// import { fechUsersLogin } from "../../stores/fetchActions/fetchPostUserLogin";
// import axios from "axios";
//import api from "../../services/api/api";
// import { useNavigate } from "react-router-dom";
// import internal from "stream";
// import { useDispatch } from "react-redux";

interface login {
    isLogin: boolean;
}

// interface endereco {
//     codigo: number
//     pais: string
//     estado: string
//     cidade: string
//     bairro: string
//     logradouro: string
//     numero: string
//     referencia: string
//     data_de_cadastros: Date
//     data_de_atualizacao: Date
//     usuario_que_cadastro: string
//     fk_status: number
// }

export function Login() {
    const [isLogin, setIsLogin] = useState(false);
   // const navigator = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [password, setSenha] = useState('');
    // const { data } = fechGetAllAddress<endereco[]>();
    // console.log(data);



    async function handleUserLogin(event: FormEvent) {
        event.preventDefault();
        const dados = { usuario, password };
        // const { } = fechUsersLogin(usuario, dados);
        // const { isLogin } = fechUsersLogin(usuario, password)
        // if (isLogin) {
        //     console.log("Finalmente Rafa");
        // }
       // await api.post(`/api/login${usuario}`, dados)
       //     .then((response) => {
                // setIsLogin(response.data);
       //         setIsLogin(response.data);
       //     })
       //     .catch(err => {
      //          console.log(err);
       //        setIsLogin(false);
       //     })
       //     .finally(() => {

       //     });
      //  console.log(isLogin);
      //  if (isLogin) {
     //       navigator("/dashboard")
     //   }
    }


    return (
        <form onSubmit={handleUserLogin} >

            <h3>Login - CAJP</h3>

            <div className="form-group">
                <label>Usuário</label>
                <
                    input type="text"
                    className="form-control"
                    placeholder="Digite seu usuário"
                    onChange={event => setUsuario(event.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Senha</label>
                <
                    input type="password"
                    className="form-control"
                    placeholder="Digite sua senha"
                    onChange={event => setSenha(event.target.value)}
                />

            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Lembra-me</label>
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-dark btn-lg btn-block"
            >
                Acessar
            </button>
            <p className="forgot-password text-right">
                <a href="#">Esqueceu a senha?</a>
            </p>
        </form>
    );

}