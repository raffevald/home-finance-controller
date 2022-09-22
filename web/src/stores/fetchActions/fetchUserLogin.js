import { getUserAutoriztionServices } from '../fetchServices/fetchUserLogin';
import { USER_LOGIN } from '../../helper/enums/constants/actionTypes';

// export const startLoading = identifier => ({
//     type: USER_LOGIN.LOADING_TELA,
//     loading: { [identifier]: true},
// });
// export const endLoading = identifier => ({
//     type: USER_LOGIN.LOADING_TELA,
//     loading: { [identifier]: false},
// });

// export const getUserAutoriztion = (values, loading = '') => dispatch => {
//     const {usuario, senha} = values;
//     return new Promise((resolve, reject) => {
//         // dispatch(startLoading(loading));
//         getUserAutoriztionServices({ usuario, senha }).then(response => {
//             console.log(usuario)
//             dispatch({ type: USER_LOGIN.IS_CORRET_LOGIN, payload: response, });
//             console.log(response);
//             resolve(response);
//         }).catch(error => reject(error))
//         // .finally(() => dispatch(endLoading(loading)));
//     });
// };


// export const limparTelaInicial = () => dispatch => {
//     dispatch({ type: USER_LOGIN.IS_CORRET_LOGIN, payload: {}, });
// }

// export const pesquisaTelaInicial = () => dispatch => {
//     dispatch(getUserAutoriztion({ usuario: '11122233344', senha: '2078' }, null));
// };
