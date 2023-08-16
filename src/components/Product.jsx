import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);

  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(post.id));
    toast.error('Item is Removed from Cart !')
  }

  function addToCart(){
    dispatch(add(post));
    toast.success('Item Added to Cart !')
  }
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.description}</div>
      <div>
        <img src={post.image} />
      </div>
      <div>{post.price}</div>
      <div>
          {
            cart.some((p) => p.id == post.id) ? 
            (<button onClick={removeFromCart}>
              Remove Item
            </button>) :
            (<button onClick={addToCart}>
              Add to Cart
            </button>)
          }
      </div>
    </div>
  );
};

export default Product;
