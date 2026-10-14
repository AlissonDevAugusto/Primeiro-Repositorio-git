import { ShoppingCartIcon, UserCheckIcon } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from "../../hooks/userContext.jsx";

import {
  Container,
  HeaderLink,
  ReactLink,
  ContainerUser,
  Profile,
  Cart,
} from './styles.js';

// Exibe a navegação, os dados da sessão e os atalhos principais do usuário.
export function Header() {
  const navigate = useNavigate();
  const {pathname} = useResolvedPath();
  const { logout, userInfo } = useUser();

  function LogoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <HeaderLink>
        <ReactLink $isActive={pathname === '/'} to='/'>Home</ReactLink>
        <hr/>
        <ReactLink $isActive={pathname === '/cardapio'} to='/cardapio'>Cardapio</ReactLink>
      </HeaderLink>

      <ContainerUser>
        <Profile>
          <UserCheckIcon size={24} />
          <div>
            <p>
              Olá, <span>{userInfo.name}!</span>{' '}
            </p>
            <button onClick={LogoutUser} >Sair</button>
          </div>
        </Profile>
        <Cart>
          <ShoppingCartIcon size={24} />
          <ReactLink to='/checkout-pedidos'>Carrinho</ReactLink>
        </Cart>
      </ContainerUser>
    </Container>
  );
}
