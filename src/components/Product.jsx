const Product = ({post}) => {
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.description}</div>
      <div>
        <img src={post.image} />
      </div>
      <div>{post.price}</div>
      <div>
        <button>
          {false ? <p>Remove Item</p> : <p>Add to cart</p> }
        </button>
      </div>
    </div>
  );
};

export default Product;
