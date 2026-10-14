import PropTypes from "prop-types";

import { useCart } from "../../hooks/cartContext.jsx";

import { BasketButton } from "../basketButton/index.jsx";
import { Container, CardImage} from './styles.js';
import { formatPrice } from '../../utils/formatPrice.js';

// Mostra os dados de um produto e aciona sua inclusão no carrinho.
export function CardProduct({ product }) {
    const {putProductInCart} = useCart();

    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />  

            <div>
                <p>{product.name}</p>
                <strong>{formatPrice(product.price)}</strong>
            </div>

            <BasketButton onClick={() => putProductInCart(product)} />
            
        </Container>
        
    )
}

CardProduct.propTypes = {
    products: PropTypes.object,
};

