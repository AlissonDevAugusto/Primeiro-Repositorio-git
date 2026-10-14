import { Container, Banner, Title, Content } from './styles.js';
import Logo from '../../assets/logo.svg';
import { CartItems, CartResume} from '../../components';

// Exibe os itens do contexto do carrinho e o resumo para checkout.
export function Cart() {
    return(
        <Container>
            <Banner> <img src={Logo} alt='logo-devburguer'/> </Banner>

            <Title>Checkout - Pedidos</Title>
            <Content>
                <CartItems />
                <CartResume />
            </Content>
        </Container>
    )
}
