function Header(){ //creating a function component
  return ( <header> {/* () means that fuction is going to return more then one line of code */}
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      Fundamental React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}

function App() {
  return (
    <div>
      <Header /> {/* Using our function componten*/}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
