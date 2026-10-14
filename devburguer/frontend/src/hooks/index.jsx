import { CartProvider } from './cartContext.jsx';
import { UserProvider } from './userContext.jsx';

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};

export default AppProvider;
