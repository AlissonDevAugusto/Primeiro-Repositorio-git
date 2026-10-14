import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useId } from 'react';
import { formatDate } from '../../../utils/formatDate';

import { ProductIMG, SelectStatus } from './styles.js';
import { orderStatusOptions } from './orderStatus.js';
import { api } from '../../../services/api.js';

export function Row(props) {
  const { row, setOrders, orders } = props;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const detailsId = useId();

  async function newStatusOrder(id, status) {
    try {
      setLoading(true);
      await api.put(`/orders/${id}`, { status });

      const newOrders = orders.map((order) =>
        order._id === id ? { ...order, status } : order,
      );
      setOrders(newOrders);
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  return (
    <>
     
      <TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label={open ? 'collapse row' : 'expand row'}
            aria-expanded={open}
            aria-controls={detailsId}
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{formatDate(row.date)}</TableCell>
        <TableCell>
          <SelectStatus
            placeholder="Status"
            options={orderStatusOptions.filter((status) => status.id >= 1)}
            defaultValue={orderStatusOptions.find(
              (status) => status.value === row.status,
            )}
            onChange={(status) => newStatusOrder(row.orderId, status.value)}
            isLoading={loading}
            menuPortalTarget={document.body}
          />
        </TableCell>
      </TableRow>
      <TableRow id={detailsId} aria-hidden={!open ? true : undefined}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell component="th" scope="row">
                        {product.id}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <ProductIMG src={product.url} alt={product.name} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  setOrders: PropTypes.array.isRequired,
  orders: PropTypes.func.isRequired,
};
