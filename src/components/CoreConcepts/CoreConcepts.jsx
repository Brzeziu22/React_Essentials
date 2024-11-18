import { CORE_CONCEPTS } from "../../data"
import CoreConcept from "../CoreConcept/CoreConcept"
import './CoreConcepts.css'
const CoreConcepts =()=>{
    return (
        <section id='core-concepts'>
        <h2>Core Components</h2>
        <ul>
      {CORE_CONCEPTS.map(item => <CoreConcept {...item}/>)} {/*Works if props and item have similar value names*/}
      </ul>
      </section>
    )
}

export default CoreConcepts