
import './styles/global.scss';

import Data from './components/UserData/Data';

import Header from './components/Header/header';

import Footer from './components/Footer/Footer';

import ProductsCard from './components/productsCard/ProductsCard';

import Cart from './components/Cart/Cart';

export default function App() {
 
  return (
<>
      <Header />
      <main>
      <Cart />
      <Data />
      <ProductsCard />
      </main>
      <Footer />
  </>
  )
}
