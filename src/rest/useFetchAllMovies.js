import { useState, useEffect } from 'react';

const REST_API_ROOT_ENDPOINT = 'http://localhost:2020/api';

const useFetchAllMovies = (filter = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const endpoint = `${REST_API_ROOT_ENDPOINT}/movies`;

  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        setData(filter ? res.filter(filter) : res);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchAllMovies;
