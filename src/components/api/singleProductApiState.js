import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Product list API state management
function SingleProductApiStates(url) {
  const [product, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setProducts(json.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { product, isLoading, isError };
}

export default SingleProductApiStates;