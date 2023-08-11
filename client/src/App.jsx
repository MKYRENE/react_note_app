import { useState } from 'react'; //hook function 'useState' this is one of the function in the react package.

//COMPONENTS IMPORTS
import Header from './components/Header'
import Footer from './components/Footer'

//PAGES IMPORT
import About from './pages/About'
import Contact from './pages/Contact'
import Landing from './pages/Landing'



function App() {
  const [page, setPage] = useState('landing');//useState function returns an array
  const [count, setCount] = useState('0')


  const handlePageView = () => {
    switch (page) {
      case 'landing':
        return <Landing />;
      case 'about':
        return <About />;
      default:
        return <Contact />
    }

  }

  return (
    < >
      <Header count={count} page={page} setPage={setPage} />

    {handlePageView()}

<p>Count:{count}</p>
    <Footer count={count} />
    </>
  );
}

export default App;
