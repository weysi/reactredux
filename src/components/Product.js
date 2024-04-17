import "./Product.css";

import { useDispatch, useSelector } from "react-redux";
import { getAll, getFindById } from "../features/product/productSlice";

const Product = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div id="product" class="m-4">
      <div class="row clearfix">
        <div class="col-md-3 col-sm-6">
          <div class="product-grid">
            <div class="product-image">
              <a href="#" class="image">
                <img
                  class="pic-1"
                  src="https://th.bing.com/th/id/R.8c7872c8179f54526fc49ddedbfe9bdc?rik=w2kzaA2CPCCERA&pid=ImgRaw&r=0"
                />
              </a>
              <ul class="product-links">
                <li>
                  <a href="#">
                    <i class="fa fa-shopping-bag"></i> Add to cart
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-search"></i> Quick View
                  </a>
                </li>
              </ul>
            </div>
            <div class="product-content">
              <h3 class="title">
                <a href="#">Women's Cotton Top</a>
              </h3>
              <div class="price">$79.99</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="product-grid">
            <div class="product-image">
              <a href="#" class="image">
                <img
                  class="pic-1"
                  src="https://th.bing.com/th/id/R.8c7872c8179f54526fc49ddedbfe9bdc?rik=w2kzaA2CPCCERA&pid=ImgRaw&r=0"
                />
              </a>
              <span class="product-sale-label">Sale!</span>
              <ul class="product-links">
                <li>
                  <a href="#">
                    <i class="fa fa-shopping-bag"></i> Add to cart
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-search"></i> Quick View
                  </a>
                </li>
              </ul>
            </div>
            <div class="product-content">
              <h3 class="title">
                <a href="#">Women's T-Shirt</a>
              </h3>
              <div class="price">
                <span>$85.55</span> $71.11 {product.name}
                <button onClick={() => dispatch(getAll())}>
                  {" "}
                  Buraya bas lo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
