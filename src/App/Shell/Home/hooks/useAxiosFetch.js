import {useState} from 'react';
import axios from 'axios';

export const useAxiosFetch = req => {
  const [data, setData] = useState(null);
  const [request, setRequest] = useState(req);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    setIsError(false);
    setIsLoading(true);

    return axios(request).then(({data: token}) => {
      setData(token);
      console.log(token);
      setIsLoading(false);
    })
      .catch(err => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  return {data, isLoading, isError, fetchData};
};