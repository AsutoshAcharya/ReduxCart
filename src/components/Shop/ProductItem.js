import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
// import { useSelector } from "react-redux";
const ProductItem = ({ title, price, description, id }) => {
  const dispatch = useDispatch();
  // const cart = useSelector((state) => {
  //   return state;
  // });
  const addTOCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price })); 
    // modern javaScript shortcut where keyname and value hold same name i.e.id:id
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addTOCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
