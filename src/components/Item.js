import './item.css'
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import {Button, ListItem, ListItemButton, ListItemText} from "@mui/material";

function Item({item}) {
    const id = item.id;
    const title = item.name;
    const brand = item.brand;
    const price = item.price;
  const dispatch = useDispatch()
  return (
    <div className="item">
        <div>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText>
                            <p className="item__title">Product : {item.name}</p>
                            <p className="item__title">Brand : {item.brand}</p>
                            <p className="item__title">Weight : {item.weight}</p>
                            <p className="item__price">
                                Price :
                                <small>$</small>
                                <strong>{item.price}</strong>
                            </p>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </div>
      <Button
          disabled={!item.available}
        onClick={() => 
          dispatch(addToCart({
              id, title, brand, price
          }))
        }>Add to Cart
      </Button>
    </div>
  )
}

export default Item