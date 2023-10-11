import './cartItem.css'
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({id, brand, title, price, quantity=0, option, availableNumber}) {
  const dispatch = useDispatch()

  return (
      <div className="cartItem">
        <div className="cartItem__info">
          <p className="cartItem__title">{title}</p>
          <p className="cartItem__title">{brand}</p>
          <p className="cartItem__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <p> <strong> {option.color} , {option.power}(W), {option.storage}(kB) </strong></p>
          <div className='cartItem__incrDec'>
            <button onClick={() => dispatch(decrementQuantity({id, option}))}>-</button>
            <p>{quantity}</p>
            <button
                disabled={quantity >= availableNumber}
                onClick={() => dispatch(incrementQuantity({id, availableNumber, option}))}
            >+</button>
          </div>
          <button
              className='cartItem__removeButton'
              onClick={() => dispatch(removeItem({id, option}))}>
            Remove
          </button>
        </div>
      </div>
  )
}

export default CartItem