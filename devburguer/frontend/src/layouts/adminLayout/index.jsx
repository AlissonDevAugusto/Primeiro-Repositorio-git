import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { SideNavAdmin } from '../../components/sideNavAdmin';

import { Container } from './styles';

// Protege as rotas administrativas e organiza a navegação lateral com o conteúdo.
export function AdminLayout() {
  const { pathname } = useLocation();
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburguer:userData'),
  );

  return isAdmin ? (
    <Container $fullWidthContent={pathname === '/admin/cadastrar-produto'}>
      <SideNavAdmin />

      <main>
        <section>
          <Outlet />
        </section>
      </main>

    </Container>
  ) : ( <Navigate to="/login" /> );
}
