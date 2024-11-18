import TabButton from "../Button/Button"
import { EXAMPLES } from "../../data"
import './Examples.css'
const Examples =( {selectedTopic,handleClick})=>{/*passing state and handle click as props so we can change state in parent component*/


    return(<section id='examples'>
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
        
</section>)
}

export default Examples