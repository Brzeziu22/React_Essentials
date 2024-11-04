import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/Button/Button';

import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';






function App() {
  function handleClick(selectedButton){
    console.log(selectedButton)
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
            <TabButton onClick={handleClick}>Components</TabButton> {/* passing function to child component without any arguments so we can add arguments in chlid component*/}
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
