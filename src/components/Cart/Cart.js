import { useEffect, useState } from "react";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    handleLoad();
  }, [localStorage.getItem("cart")]);

  const handleLoad = () => {
    let totalPrice = 0;
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems != null) {
      for (let item of cartItems) {
        totalPrice = totalPrice + item.quantity * item.price;
      }
      setTotalPrice(totalPrice);
      setItems(cartItems);
    }
  };

  const handleRemoveFunc = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("id ", id);
    let allItems = items;
    console.log("allItems before", items);
    var filtered = allItems.filter((item, idx) => {
      return idx != id;
    });

    console.log("filtered after", filtered);

    localStorage.setItem("cart", JSON.stringify(filtered));
    handleLoad();
    toast.error("Item removed from the cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="shopping-cart">
      <div className="title">Shopping Cart</div>
      <div className="innerContent">
        {items?.length > 0 ? (
          items.map((item, idx) => (
            <div className="item">
              <div className="image">
                <img src={item.image} width="120" height="80" alt />
              </div>
              <div className="description">{item.description}</div>
              <div className="quantity">
                <span style={{ fontWeight: 600 }}>{item.quantity}</span> Items
              </div>
              <div className="color" style={{ marginRight: 32 }}>
                <div style={{ fontWeight: 600, color: item.color }}>
                  {item.color}
                </div>
              </div>
              <div className="total-price" style={{ fontWeight: 600 }}>
                £{item.price}
              </div>

              <button
                className="removeBtn"
                onClick={(e) => handleRemoveFunc(e, idx)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <h2 style={{ textAlign: "center", color: "red" }}>Your Cart Empty</h2>
        )}
      </div>
      <div className="totalSection">
        <h2 style={{ fontWeight: 600 }}>Total Amount: </h2>
        <h3>£{totalPrice.toFixed(2)}</h3>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Cart;
