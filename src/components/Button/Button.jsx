


const TabButton =({children, onClick})=>{

   

    return <button onClick={()=>{onClick(children)}}>{children}</button> ;{/**{/* Adding value passed to child component as children props as parent component function argument*/}
}
export default TabButton