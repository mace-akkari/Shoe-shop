import { useState } from "react";
import { useLocation } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { state } = useLocation();

  const [SelectedBoot, SetSelectedBoot] = useState(state);
  const [quantity, setQuantity] = useState(1);
  const [selectedColour, SetselectedColour] = useState("");
  const [selectedSize, SetSelectedSize] = useState("");

  console.log("slelcet ", SelectedBoot);

  const handleCartAddFuc = () => {
    let cart = localStorage.getItem("cart");

    if (!selectedSize || !selectedColour) {
      toast.error("Please select a colour and size.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (quantity === 0) {
      toast.error("Please enter a quantity.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (cart === null) {
        localStorage.setItem("cart", []);
      }
      let cartItem = {
        name: SelectedBoot.name,
        id: SelectedBoot.id,
        price: SelectedBoot.price,
        quantity: quantity,
        size: selectedSize,
        description: SelectedBoot.description,
        image: SelectedBoot.image,
        color: selectedColour,
      };

      console.log("cartItem ", cartItem);

      let updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      updatedCart.push(cartItem);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Item Added to the cart.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("cart", updatedCart);
    }
  };

  return (
    <div class="container">
      <div class="card">
        <div class="container-fliud">
          <div class="wrapper row">
            <div class="preview col-md-6">
              <div class="preview-pic tab-content">
                <div class="tab-pane active" id="pic-1">
                  <img src={SelectedBoot.image} />
                </div>
              </div>
            </div>
            <div class="details col-md-6">
              <h3 class="product-title">{SelectedBoot.name}</h3>
              <div class="rating">
                {console.log("selected boot ", SelectedBoot.ratings)}
                <div class="stars">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <span
                      class={`fa fa-star ${
                        rating <= SelectedBoot.ratings && " checked"
                      } `}
                    >
                      {console.log(
                        "rating ",
                        rating,
                        "Selectedboot ",
                        SelectedBoot.ratings
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <p class="product-description">{SelectedBoot.description}</p>
              <h4 class="price">
                Price: <span>£{SelectedBoot.price}</span>
              </h4>
              <h5 class="sizes">
                sizes
                <br /> UK/EU:
                {SelectedBoot.sizes.map(
                  (size, idx) =>
                    size.available && (
                      <span
                        onClick={() => SetSelectedSize(size.size)}
                        class={`size ${
                          selectedSize === size.size && " selectedSize"
                        } cp`}
                        style={{ fontSize: 16 }}
                      >
                        {size.size}
                      </span>
                    )
                )}
              </h5>
              <h5 class="colors">
                colors:
                {SelectedBoot.colours.map((colour) => (
                  <div
                    class="color"
                    style={{ backgroundColor: colour }}
                    onClick={() => SetselectedColour(colour)}
                  >
                    {selectedColour === colour && (
                      <i class="fa color-white fa-check" aria-hidden="true"></i>
                    )}
                  </div>
                ))}
              </h5>
              <div className="d-flex">
                <h5 class="sizes" style={{ marginRight: 10 }}>
                  Quantity:{" "}
                </h5>
                <div
                  class={`value-button text-center ${
                    quantity <= 0 ? "cursor-disabled" : "cp"
                  }`}
                  onClick={() => setQuantity(quantity - 1)}
                  value="Decrease Value"
                >
                  -
                </div>
                <input type="number" id="number" value={quantity} />
                <div
                  class="value-button text-center cp"
                  onClick={() => setQuantity(quantity + 1)}
                  value="Increase Value"
                >
                  +
                </div>
              </div>
              <div class="action">
                <button
                  class="add-to-cart btn btn-default"
                  onClick={handleCartAddFuc}
                  type="button"
                >
                  add to cart
                </button>
              </div>
            </div>
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
            style={{ zIndex: 1000 }}
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
