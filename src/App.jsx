import reactImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
import { CORE_CONCEPTS } from './data'


const reactDescriptions =['Core','Essentials','Crucial','Fundamental']
function getRandomInt(max){

  return Math.floor(Math.random()* (max+1))
}
function Header(){ //creating a function component

  const description= reactDescriptions[getRandomInt(3)]

  return ( <header> {/* () means that fuction is going to return more then one line of code */}
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}
function CoreConcept({image,title,description}){{/* Destructuring taking a variable strait form object we use as function parameter*/}
  return <li>
    <img src={image} alt={title}/>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
}

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
