import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';






function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
