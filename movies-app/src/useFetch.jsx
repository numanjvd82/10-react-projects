import { useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let controller = new AbortController();
  let { signal } = controller;

  const fetchData = async (controller) => {
    let { signal } = controller;
    try {
      const response = await fetch(url, { signal });
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      controller.abort();
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
