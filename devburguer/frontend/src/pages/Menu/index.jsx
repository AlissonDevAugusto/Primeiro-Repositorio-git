import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* variavel do axios para se conecta com nossa api */
import { api } from '../../services/api.js';

import {
  Container,
  Banner,
  ContainerCategories,
  ContainerProducts,
  CategoryLink,
} from './styles.js';

import { CardProduct, ReturnLink} from '../../components';

// Carrega categorias e produtos da API para montar o cardápio filtrável.
export function Menu() {
  /* navegaçao */
  const navigate = useNavigate();

  /* estados do react */
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { search } = useLocation(); /* ex: ?categoria=2 */
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const categoryId = Number(new URLSearchParams(search).get('categoria'));

    setActiveCategory(categoryId || 0);
  }, [search]);

  useEffect(() => {
    async function loadCategories() {
      /* trazendo da api as categorias e colocando no useState */
      const { data } = await api.get('/categories');

      const newCategory = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategory);
    }

    async function loadProducts() {
      /* trazendo da api os produtos e colocando no useState */
      const { data } = await api.get('/products');

      const newProduct = [...data];

      setProducts(newProduct);
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      /* filtrando qual categoria deve ser mostrada */
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    /* estrutura */
    <Container>
      <Banner>
        <div>
          <h1>
            UM <span>BURGÃO</span>
            <br />
            SEMPRE CAI BEM!
          </h1>
          <span>Esse cardápio está irresistível</span>
        </div>
      </Banner>

      <ContainerCategories>
        <ReturnLink
          to='/'
        >
          &lt; Voltar
        </ReturnLink>

        {categories.map((category) => (
          <CategoryLink
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryLink>
        ))}
      </ContainerCategories>

      <ContainerProducts>
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ContainerProducts>
    </Container>
  );
}
