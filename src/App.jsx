import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/Button/Button';

import componentImg from './assets/components.png';
import { CORE_CONCEPTS,EXAMPLES } from './data';






function App() {

  const [selectedTopic,setSelectedTopic]=useState();
  let dynamicExamplesContent='Select sub category'
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);{/**seting state value depending on what button was clicked */}
}
  return (
    <div>
      <Header /> {/* Using our function component*/}
      
      <main>
        <section id='core-concepts'>
          <h2>Core Components</h2>
          <ul>
        {CORE_CONCEPTS.map(item => <CoreConcept {...item}/>)} {/*Works if props and item have similar value names*/}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic} onClick={handleClick}>Components</TabButton>
            <TabButton isSelected={selectedTopic} onClick={handleClick}>JSX</TabButton>
            <TabButton isSelected={selectedTopic} onClick={handleClick}>Props</TabButton>
            <TabButton isSelected={selectedTopic} onClick={handleClick}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Select a Topic</p> :<div id='tab-content'> {/* if ? true : false*/}
            <h3>
              {EXAMPLES[selectedTopic].title}{/*Set dynamic content based on object names from data.js */}
            </h3>
            <p>
            {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
          
        </section>
      </main>
    </div>
  );
}

export default App;
