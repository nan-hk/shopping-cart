import './itemDetail.css'
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import {Button, FormHelperText, ListItem, ListItemButton, ListItemText, MenuItem, Select} from "@mui/material";
import {useState} from "react";

function ItemDetail({item}) {
    const id = item.id;
    const title = item.name;
    const brand = item.brand;
    const price = item.price;
    const options = item.options;

    const dispatch = useDispatch()
    const [option, setOption] = useState('');

    const handleChange = (event) => {
        setOption(event.target.value);
    };

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
                <FormHelperText>Choose device specifications</FormHelperText>
                <Select
                    value={option}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>Color, Power, Storage</em>
                    </MenuItem>
                    {options.map((option, key) => (
                        <MenuItem
                            key={key}
                            value={option}
                            disabled={option.quantity < 1}
                        >
                            <p> <strong> {option.color} , {option.power}(W), {option.storage}(kB) </strong></p>
                        </MenuItem>
                    ))}
                </Select>
            </div>
            <Button
                disabled={!item.available || option.quantity < 1}
                onClick={() =>
                    dispatch(addToCart({
                        id, title, brand, price, option
                    }))
                }>Add to Cart
            </Button>
        </div>
    )
}

export default ItemDetail