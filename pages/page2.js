import { connect } from "react-redux";
import Link from 'next/link';
import { add, remove } from './redux/actions';

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
                        <p>
                           Count: {item.count} Summ: {item.totalPrice}
                        </p>
                        <button onClick={() => this.props.addBtn(item.id)}>
                            Add
                        </button>
                        <button onClick={() => this.props.removeBtn(item.id)}>
                            Remove
                        </button>
                    </div>
                ))}
                <p>
                    Total price of all {this.props.totalOfAll}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ readTheStore: state.cartProducts, totalOfAll: state.totalOfAll });
const mapDispatchToProps = (dispatch) => ({
    removeBtn: (removeItem) => dispatch(remove(removeItem)), 
    addBtn: (addItem) => dispatch(add(addItem))
});


export default connect(mapStateToProps, mapDispatchToProps)(Page2);
