import { useEffect, useState } from "react";

const api_endpoint = "http://localhost:3000/api/v1/post";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData(api_endpoint)
  }, [])


  function fetchData() {
    console.log('you click');
    fetch(api_endpoint)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setPosts(data)
      })

  }



}
