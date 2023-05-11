import {BrowserRouter, Routes, Route} from "react-router-dom";
import './scss/main.scss';
import Home from './components/Home';
import Basket from './components/Basket'
import Product from './components/Product'
import Private from './components/Private'
import Contact from './components/Contact'

import NotFoundPage from './components/NotFoundPage'

const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route exect path='/' element={<Home/>}/>
                <Route exect path="/basket" element={<Basket/>}/>
                <Route exect path="/product" element={<Product/>}/>
                <Route exect path='/private' element={<Private/>}/>
                <Route exect path='/contact' element={<Contact/>}/>

                <Route exect path='/*' element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;