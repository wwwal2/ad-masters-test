import { connect } from "react-redux";
import Link from 'next/link';
import { add } from './redux/actions';
import products from './comps/data';

class Page1 extends React.Component {
    render() {
        return (
            <div>
                <Link href="/page2"> 
                    <a>Go to Cart </a>
                </Link>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>
                            {product.title}
                        </h3>
                        <p>
                            {product.description}
                        </p>
                        <button onClick={() => this.props.dispatchProduct(product)}>
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({readTheStore: state.cartProducts})
const mapDispatchToProps = (dispatch) => ({dispatchProduct: (newProduct) => dispatch(add(newProduct))})
  
export default connect(mapStateToProps, mapDispatchToProps)(Page1);
  
