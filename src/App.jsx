import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';
import componentImg from './assets/components.png';

function App() {

  const [selectedTopic,setSelectedTopic]=useState();
  
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);{/**seting state value depending on what button was clicked */}
}
  return (
    <div>
      <Header /> {/* Using our function component*/}
      
      <main>
       <CoreConcepts/>
        <Examples selectedTopic={selectedTopic} handleClick={handleClick}/>
      </main>
    </div>
  );
}

export default App;
