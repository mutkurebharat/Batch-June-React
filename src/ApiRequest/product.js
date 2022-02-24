import { Component } from "react";
import axios from "axios";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: err.message,
        });
      });
  }
  render() {
    const { products, error } = this.state;
    console.log(typeof error);
    return (
      <div>
        {products.length
          ? products.map((product) => {
              return <h1 key={product.id}>{product.title}</h1>;
              // return <img src={product.image} alt="img" key={product.id} />;
            })
          : null}
        {/* {error ? <h1>{error}</h1> : null} */}
      </div>
    );
  }
}

export default Product;
