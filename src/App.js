
import './App.css';
import Home from './Pages/Home';
import Book from './Pages/Book'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Book' element={<Book />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
