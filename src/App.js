import React from 'react'
import HomePage from './asset/View/HomePage';
import { BrowserRouter as Router , Route  } from 'react-router-dom';
import Cart from './component/Cart/Cart'
import NavBar from './component/Navbar/NavBar'
import Shop from './component/Shop/Shop'
import Footer from './component/footer/footer'
import SideBar from './component/SideBar/SideBar';
import MoviesPage from './asset/View/MoviesPage';
import BooksPage from './asset/View/BooksPage';


const App = () => {


  return (
    <div className='flex bg-black'>
       <Router >
       <SideBar />  
        <NavBar />
        {/* navbar routes */}
             <Route exact path="/"> <HomePage /> </Route>              
             <Route  path="/shop">   <Shop />   </Route>
             <Route  path="/cart">   <Cart />  </Route>
        {/* sidebar routes */}

        
             <Route path="/movies"> <MoviesPage /> </Route>
             <Route path="/books"> <BooksPage /> </Route>


      <Footer/>
    </Router>

    </div>
    

  )
}

export default App
