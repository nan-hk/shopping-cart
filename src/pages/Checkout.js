import './checkout.css'
import Total from '../components/Total'
import CartItem from '../components/CartItem'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { useSelector } from 'react-redux'

function Checkout() {

  const cart = useSelector((state) => state.cart)

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              brand={item.brand}
              title={item.title}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total/>
      </div>

        <div className='home' onClick={() => navigate('/')}>
            <OtherHousesIcon fontSize="large" id={"homeIcon"}/>
        </div>
    </div>
  )
}

export default Checkout