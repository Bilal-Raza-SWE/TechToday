import { useEffect, useState } from 'react';

export default function News() {
  const [loading, setLoading] = useState(true);

  const API = "http://hn.algolia.com/api/v1/search?query=react";

  const fetchApiData = async (url) =>{
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      console.log(data.hits);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchApiData(API);
  }, [])


  return (
    <div>
      <h3>News</h3>
    </div>
  )
}
