import { connect } from "react-redux";
import Link from 'next/link';
import { remove } from './redux/actions';


class Page2 extends React.Component {
    render() {
        return (
            <div>
                <Link href="/"> 
                    <a>Go back to Products</a>
                </Link>
                {this.props.readTheStore.map((item) => (
                    <div key={item.id}>
                        <h3>
                            {item.title}
                        </h3>
                        <p>
                            {item.description}
                        </p>
                        <button onClick={() => this.props.dispatchId(item.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ readTheStore: state.cartProducts });
const mapDispatchToProps = (dispatch) => ({dispatchId: (removeItem) => dispatch(remove(removeItem))});


export default connect(mapStateToProps, mapDispatchToProps)(Page2);
