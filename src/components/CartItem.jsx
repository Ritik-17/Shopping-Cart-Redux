import {AiOutlineDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  
  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error('Item Removed')
  }
  return (
    <div>
      <div>
        <img src={item.image}/>
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <AiOutlineDelete/>
          </div>
        </div>
      </div>
    </div>
  ) 
  }
export default CartItem;
