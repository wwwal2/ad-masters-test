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
                        <p>
                            Price: {product.price}
                        </p>
                        <button onClick={() => this.props.dispatchId(product.id)}>
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({dispatchId: (idProduct) => dispatch(add(idProduct))})
  
export default connect(null, mapDispatchToProps)(Page1);
  
