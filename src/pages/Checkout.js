import './checkout.css'
import Total from '../components/Total'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import {useNavigate} from "react-router-dom";

function Checkout() {

    const navigate = useNavigate()
    const {cart} = useSelector((state) => state)

    return (
        <div className="cart">
            <div className="cart__left">
                <div>
                    <h3>Shopping Cart</h3>
                    {cart?.map((item, index) => (
                        <CartItem
                            key={index}
                            id={item.id}
                            brand={item.brand}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                            option={item.option}
                            availableNumber={item.option.quantity}
                        />
                    ))}
                </div>
            </div>

            <div className="cart__right">
                <Total/>
            </div>

            <div className='shopping-cart' onClick={() => navigate('/')}>
                <OtherHousesIcon fontSize="large" id={"homeIcon"}/>
            </div>

        </div>
    )
}

export default Checkout