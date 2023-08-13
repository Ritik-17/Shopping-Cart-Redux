import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProductData(){
    setLoading(true)
    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPost(data);
    }
    catch(error){
      console.log(error);
      setPost([]);
    }
    setLoading(false)
  }

  useEffect( () => {
    fetchProductData();
  },[])


  return (
    <div>
      {loading ? <Spinner/> : 
      posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={post.id} post={post} />
      ))}
        </div>
      ) : 
        <div>
          No Data Found
        </div>
       }
    </div>
  );
};

export default Home;
