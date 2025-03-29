import { useEffect, useState } from "react";

const api_endpoint = "http://localhost:3000/api/v1/post";
const apiImg = "http://localhost:3000/images";

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


  return (
    <>

      <main>

        <div>
          <div className="container">
            <h1 className="text-center text-info p-3 ">Blog Di Eduard  <i class="bi bi-box2-heart"></i></h1>
          </div>

        </div>
        <div className="container ">
          <div className="row flex-column ">
            {
              posts.map((element, index) =>
                <div className="col p-3 " key={index}>
                  <div className="card d-flex flex-row ">
                    <div className='img-container d-flex'>
                      <img src={`${apiImg}/${element.image}`} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                      <div className="div d-flex column-gap-3">
                        <h5 className="card-title">{element.title}</h5>
                      </div>
                      <p className="card-text">{element.content}</p>
                    </div>
                  </div>
                </div>

              )}

          </div>
        </div>

      </main>


    </>
  )



}
