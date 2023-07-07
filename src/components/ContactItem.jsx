import PropTypes from 'prop-types';
export const ContactItem = ({id, name, number, filter, handlerBtnDel})=>{
    
    return(
       <>
        { 
         name.toLowerCase().includes(filter) && <li>{name}: {number} <button onClick={()=>handlerBtnDel(id)}>Delete</button></li>
        }
       </>
    )
    
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  filter: PropTypes.string,
  
}