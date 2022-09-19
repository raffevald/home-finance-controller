import 'bootstrap/dist/css/bootstrap.min.css';

import { Login } from '../../components/login/login';
// import SignUp from '../../components/signup/signup';

export function LoginPage() {
    return (
        <div className="App">
            <div className="outer">
                <div className="inner">
                    <Login/>
                </div>
            </div>
        </div>
    )
}
