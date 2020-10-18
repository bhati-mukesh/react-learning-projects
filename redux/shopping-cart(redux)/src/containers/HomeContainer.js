import {connect} from 'react-redux'
import Home from '../components/Home'
import { add_to_cart } from '../services/actions/action'


const mapStateToProps = (state)=>({
    cartData: state.cart_items
})

const mapDispatchToProps = (dispatch)=>({
    addToCartHandler : (data)=>dispatch(add_to_cart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)