

import { useState } from 'react';
import Navber from './components/Navber';
import Home from './page/Home';

function App() {

  const [filter , setFliter]   = useState('');

  const searchText = (e) =>{
      setFliter(e.target.value)
  }


  return (
    <>
        <Navber searchText={searchText} filter={filter} />

    <Home filter={filter} />
    </>
  );
}

export default App;
