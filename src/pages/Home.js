import './home.css'
import ItemDetail from '../components/ItemDetail'
import { ShoppingCart } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {Box, Link, Modal, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import data from "../data/data.json";
import {useState} from "react";

function Home() {

  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const [item, setItem] = useState({})
  const [opened, setOpened] = useState(false)
  const handleClose = () => setOpened(false);

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
      <div className="home">
        <div className="home__container">
          <div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.items.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right"><strong>$</strong>{row.price}</TableCell>
                      <TableCell align="right">
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                              setItem(row)
                              setOpened(true)
                            }}
                        >
                          Detail
                        </Link>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Modal
              open={opened}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
            <Box>
              <ItemDetail
                  item={item}
              />
            </Box>
          </Modal>
        </div>
        <div className='shopping-cart' onClick={() => navigate('/cart')}>
          <ShoppingCart id='cartIcon'/>
          <p>{getTotalQuantity() || 0}</p>
        </div>
      </div>
  )
}

export default Home