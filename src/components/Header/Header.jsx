import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions =['Core','Essentials','Crucial','Fundamental'];
function getRandomInt(max){

    return Math.floor(Math.random()* (max+1))
  }

const Header=()=>{
     //creating a function component

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

export default Header;
