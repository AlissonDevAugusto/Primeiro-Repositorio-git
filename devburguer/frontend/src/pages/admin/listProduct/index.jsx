import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api.js';
import { Container, ProductImage, EditButton} from './styles.js';
import { CheckCircleIcon, PencilIcon, XCircleIcon } from '@phosphor-icons/react';
import { formatPrice } from '../../../utils/formatPrice.js';

// Busca os produtos cadastrados e oferece o acesso à edição de cada item.
export function ListProducts() {
  const [products, setProducts] = useState([]);
const navigate = useNavigate();

  useEffect(() => {
    async function LoadProducts() {
      const { data } = await api.get('/products');

      setProducts(data);
    }

    LoadProducts();
  }, []);

  function IsOffer(offer) {
    if(offer) {
        return <CheckCircleIcon color='green' size='22px'/>
    } else {
        return <XCircleIcon color='red' size='22px'/>
    }
  }

  function EditProduct(product) {
    navigate('/admin/editar-produto', {state: {product}})
  }
  return (
    <Container>
      <TableContainer component={Paper}
        sx={{
          height: 'min(70vh, 680px)',
          overflow: 'auto',
          width: 'min(100%, 1100px)',
          margin: '0 auto',
          background:
            'linear-gradient(to bottom, #1f1f1f 0, #1f1f1f 58px, #fff 58px, #fff 100%)',
          borderRadius: '20px',
        }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">

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
              <TableCell>Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em Ofertas</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell align="center">Editar Produto</TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ backgroundColor: '#fff' }}>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">{formatPrice(product.price)}</TableCell>
                <TableCell align="center">{IsOffer(product.offer)}</TableCell>

                <TableCell align="center">
                  <ProductImage src={product.url} />
                </TableCell>

                <TableCell align="center">
                  <EditButton onClick={() => EditProduct(product)}>
                    <PencilIcon />
                  </EditButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
