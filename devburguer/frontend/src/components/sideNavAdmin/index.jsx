import {
  SignOutIcon,
  NotePencilIcon,
  ShoppingBagOpenIcon,
  ListBulletsIcon,
  PlusSquareIcon,
} from '@phosphor-icons/react';
import Logo from '../../assets/logo.png';

import { ContainerNav, ContainerButtons, NavLinks, ReturnLink } from './styles';
import { useUser } from '../../hooks/userContext';
import { useResolvedPath } from 'react-router-dom';

// Exibe os links de navegação e retorno da área administrativa.
export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  return (
    <ContainerNav>
      <img src={Logo} alt='Logo Do DevBurguer'/>

      <ContainerButtons>
        <NavLinks $isActive={pathname === '/admin/pedidos'} to='/admin/pedidos'>
          <NotePencilIcon size={24} /> 
          Pedidos
        </NavLinks>
        <NavLinks $isActive={pathname === '/admin/listar-produto'} to='/admin/listar-produto'>
          <ShoppingBagOpenIcon size={24} /> 
          Produtos
        </NavLinks>
        {/* <NavLinks $isActive={pathname === '/admin/listar-produto'} to='/admin/listar-produto'>
          <ListBulletsIcon size={24} /> 
          Listar Produtos
        </NavLinks> */}
        <NavLinks $isActive={pathname === '/admin/cadastrar-produto' } to='/admin/cadastrar-produto'>
          <PlusSquareIcon size={24} /> 
          Cadastrar Produto
        </NavLinks>
        
      </ContainerButtons>

      <ReturnLink to='/login' onClick={logout}>
        <SignOutIcon size={20} /> Sair
      </ReturnLink>
    </ContainerNav>
  );
}
