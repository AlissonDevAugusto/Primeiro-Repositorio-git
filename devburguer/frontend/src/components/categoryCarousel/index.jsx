import { useEffect, useState } from 'react';
import * as MultiCarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container, Title, ContainerItems, CategoryLink } from './styles.js';

/* variavel para se conecta com nossa api */
import { api } from '../../services/api.js';


const Carousel = /* fizemos esse processo da biblioteca 'carousel' por que ela conflita com versao nova do react 19  */
  MultiCarouselModule.default?.default ||
  MultiCarouselModule.default ||
  MultiCarouselModule.Carousel;

// Busca as categorias na API e as apresenta em um carrossel navegável.
export function CategoriesCarousel() {
  /* navegaçao */
  const [categories, setCategories] = useState([]); /* arrays com as categorias */

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data); /* adicionar no useState a categoria trazida pela api */
    }

    loadCategories(); /* chama a funçao */
  }, []);

  const responsive = { /* responsividades para o carrosel que vai ser mostrado no desktop e mobile */
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>CATEGORIAS</Title>

      <Carousel /* configs que o carrosel vai possuir */
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => ( /* mapeando as categorias vindo do useState*/
          <ContainerItems key={category.id} imageUrl={category.url}>
            <CategoryLink to={`/cardapio?categoria=${category.id}`}>
              {category.name}
            </CategoryLink>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}
