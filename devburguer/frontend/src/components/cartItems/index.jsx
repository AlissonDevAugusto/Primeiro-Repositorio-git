import { Table } from '../table';
import { useCart } from '../../hooks/cartContext.jsx';
import { formatPrice } from '../../utils/formatPrice.js';

import { ProductImage, ButtonFamily, EmptyCart, Trash } from './styles.js';

// Exibe um item do carrinho e controla sua quantidade ou remoção.
export function CartItems() {
  const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } =
    useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Produtos</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>

      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{formatPrice(product.price)}</Table.Td>
              <Table.Td>
                <ButtonFamily>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  <span>{product.quantity} </span>
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonFamily>
              </Table.Td>
              <Table.Td style={{ fontWeight: 'bold' }}>
                {formatPrice(product.quantity * product.price)}
              </Table.Td>
              <Table.Td>
                <Trash onClick={() => deleteProduct(product.id)} />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCart>Carrinho vazio</EmptyCart>
        )}
      </Table.Body>
    </Table.Root>
  );
}
