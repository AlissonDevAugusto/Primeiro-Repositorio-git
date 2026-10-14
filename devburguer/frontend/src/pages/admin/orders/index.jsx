import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row.jsx';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api.js';
import { Filter, FilterOption } from './styles.js';
import { orderStatusOptions } from './orderStatus.js';
import { Container } from './styles.js';

// Busca pedidos na API, filtra por status e os mostra na tabela administrativa.
export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [rows, setRows] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);

  useEffect(() => {
    async function LoadOrders() {
      const { data } = await api.get('/orders');

      setOrders(data);
      setFilteredOrders(data);
    }
    LoadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    setActiveStatus(status.id);

    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrder = orders.filter((order) => order.status === status.value);

      setFilteredOrders(newOrder);
    }
  }

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = orderStatusOptions.findIndex(
        (item) => item.id === activeStatus,
      );

      const newFilteredOrders = orders.filter(
        (order) => order.status === orderStatusOptions[statusIndex].value,
      );

      setTimeout(() => {
        setFilteredOrders(newFilteredOrders);
      }, 1000);
      
    }
  }, [orders]);

  return (
    <Container>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>
      <TableContainer
        component={Paper}
        sx={{
          height: 'min(65vh, 620px)',
          overflow: 'auto',
          width: 'min(100%, 1100px)',
          margin: '0 auto',
          background:
            'linear-gradient(to bottom, #1f1f1f 0, #1f1f1f 58px, #fff 58px, #fff 100%)',
          borderRadius: '20px',
        }}
      >
        <Table stickyHeader aria-label="collapsible table">
          <TableHead
            sx={{
              '& .MuiTableCell-root': {
                backgroundColor: '#1f1f1f',
                color: '#fff',
              },
              '& .MuiTableCell-root:first-of-type': {
                borderRadius: '20px 0 0 0',
              },
              '& .MuiTableCell-root:last-of-type': {
                borderRadius: '0 20px 0 0',
              },
            }}
          >
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: '#fff' }}>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
