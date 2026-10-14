import imageBasket from '../../assets/basket.svg';

import { ContainerButton } from './styles';

// Mostra o atalho para o carrinho com a quantidade atual de itens.
export function BasketButton({...props}) {

    return (
        <ContainerButton {...props}>
            <img src={imageBasket} alt='cesta-de-compra'/>
        </ContainerButton>
    )
}
