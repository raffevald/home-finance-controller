import { useState, useEffect } from "react";

// import { openNotification } from 'components/Notification';

// import { startLoading, endLoading } from '../ducks/loading';
// import axios from "axios";
import api from "../../services/api/api";
// import { useState } from "react";

// interface login {
//   isLogin: boolean;
// }

// export function fetchPostUserLogin<isLogin = boolean>(user: string, dados: string) {
//   const [isLogin, setIsLogin] = useState<login[]>([])
//   api
//     .post(`/api/login${user}`, dados)
//     .then((response) => {
//       if (response.data) {
//         setIsLogin(response.data)
//       }
//     })
//     .catch((err) => {
//       console.error("ops! ocorreu um erro" + err);
//     });

//   return { isLogin }
// }


// export const fechUsersLogin = function useFech<T = unknown>(user: string, dados: string) {
//   const [isLogin, setIsLogin] = useState<T | null>(null)
//   console.log(dados);
//   useEffect(() => {
//     api
//       .post(`/api/login${user}`, dados)
//       .then(resp => {
//         setIsLogin(resp.data);
//       }).catch((err) => {
//         console.error("ops! ocorreu um erro" + err);
//       })
//   }, [user, dados]);

//   return { isLogin }
// }

export const fechUsersLogin = (user: string, object: object) => {
  // const useState = useState();
  // const [isLogin, setIsLogin] = useState<T | null>(null)
  // const [isLogin, setIsLogin] = ([])

  api
    .post(`/api/login${user}`, object)
    .then((response) => {
      // setIsLogin(response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {

    });
  // return Response
};


















