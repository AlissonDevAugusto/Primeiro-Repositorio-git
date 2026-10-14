import { Route, Routes } from 'react-router-dom';

/* pages */
import {
  Login,
  Register,
  Home,
  Menu,
  Cart,
  Checkout,
  CompletePayment,
  Orders,
  NewProduct,
  ListProducts,
  EditProduct,
} from '../pages';
import { UserLayout } from '../layouts/userLayout';
import { AdminLayout } from '../layouts/adminLayout';

// Centraliza as rotas públicas e administrativas da aplicação.
export function Router() {
  return (
    <Routes>
      {/* rotas com outlet Header,Footer */}
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/checkout-pedidos" element={<Cart />} />
        <Route path="/checkout-finalizar" element={<Checkout />} />
        <Route path="/checkout-concluido" element={<CompletePayment />} />
      </Route>

      {/* rotas com outlet admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/cadastrar-produto" element={<NewProduct />} />
        <Route path="/admin/editar-produto" element={<EditProduct />} />
        <Route path="/admin/listar-produto" element={<ListProducts />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
