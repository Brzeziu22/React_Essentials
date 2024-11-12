


const TabButton =({children, onClick, isSelected})=>{

   

    return <button className={isSelected===children && 'active'} /* setting class on button when it was clicked by checking if selected topic matching a children props of button*/onClick={()=>{onClick(children)}}>{children}</button> ;{/**{/* Adding value passed to child component as children props as parent component function argument*/}
}
export default TabButton