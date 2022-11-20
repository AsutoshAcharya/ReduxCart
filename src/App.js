import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";
function App() {
  const toggle = useSelector((state) => {
    return state.ui.cartIsVisible;
  });
  return (
    <Layout>
      {toggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
