import { useEffect, useState } from 'react';
import * as MultiCarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/* variavel para se conecta com nossa api */
import { api } from '../../services/api.js';

import { CardProduct } from '../cardProducts/index.jsx';
import { Container, Title, } from './styles.js';

const Carousel = /* fizemos esse processo da biblioteca 'carousel' por que ela conflita com versao nova do react 19  */
  MultiCarouselModule.default?.default ||
  MultiCarouselModule.default ||
  MultiCarouselModule.Carousel;

// Busca os produtos em oferta na API e os exibe em carrossel.
export function OffersCarousel() {
  const [offers, setOffers] = useState([]); /* array com nossas ofertas */

  useEffect(() => { 
    async function LoadProducts() {
      const { data } = await api.get('/products');

      const onlyOffers = data.filter((product) => product.offer) /* filtrando produtos em ofertas */
      
      setOffers(onlyOffers); /* adicionar no useState as oferta trazida pela api e filtrada pelo filter */
    }

    LoadProducts(); /* chama a funçao */
  }, []);

  const responsive = { //* responsividades para o carrosel que vai ser mostrado no desktop e mobile */
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
      <Title>OFERTAS DO DIA</Title>

      <Carousel /* configs que o carrosel vai possuir */
      responsive={responsive}
      infinite={true}
      partialVisbile={false}
      itemClass='carousel-item'
      >
        {offers.map((product) => ( /* mapaeando produtos vindo do useState */
         <CardProduct key={product.id} product={product}/>
        ))}
      </Carousel>
    </Container>
  );
}
