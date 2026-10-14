import { CategoriesCarousel, OffersCarousel } from '../../components';

import { Banner, Container, } from './styles.js';

// Compõe a página inicial com banner, categorias e ofertas.
export function Home() {
  return (
    <div>
      <main>
        <Banner>
          <h1>Bem-Vindo(a)!</h1>
        </Banner>

        <Container>
          <div>
            <CategoriesCarousel/>
            <OffersCarousel />
          </div>
        </Container>
      </main>
    </div>
  );
}
