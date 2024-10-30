import './CoreConcept.css'

const CoreConcept=({image,title,description})=>{{/* Destructuring taking a variable strait form object we use as function parameter*/}
    return <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
        </li>
}
export default CoreConcept;