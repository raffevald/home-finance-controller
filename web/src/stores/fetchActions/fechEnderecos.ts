import api from "../../services/api/api";
import { useState, useEffect } from "react";

// export const fetchGetAdress = () => {
//   api
//     .get(`/api/endereco`)
//     .then(response => {
//       //dispatch(setCalendarItems(response.data));
//       return response.data;
//     })
//     .catch(err => {
//       console.log(err.response);
//     })
//     .finally(() => {
//       // dispatch(endLoading(LOADING_IDENTIFICATOR));
//     });
// };

export const fechGetAllAddress = function useFech<T = unknown>() {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    api
      .get("/api/endereco")
      .then(resp => {
        setData(resp.data);
      }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
  }, []);
  return { data }
}
