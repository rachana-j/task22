import React from 'react';
import useFetch from '../hooks/useFetch';
import './FetchComponent.css';

const FetchComponent = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="fetch-component">
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchComponent;
