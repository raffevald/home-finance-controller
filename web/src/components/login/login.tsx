import { FormEvent } from "react";
import React, { useState } from "react";

export function Login() {

    const [usuario, setUsuario] = useState('');
    const [password, setSenha] = useState('');

    async function handleUserLogin(event: FormEvent) {
        event.preventDefault();
     //   const dados = { usuario, password };
    }

    return (
        <form onSubmit={handleUserLogin} >

            <h3>Login - DCF</h3>

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
