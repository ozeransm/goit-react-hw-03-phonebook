import { ContactItem } from "./ContactItem"
import PropTypes from 'prop-types';
export const Contacts = ({ data, formInpFilter, handlerBtnDel })=>{
    
    return(
        <ul>
            {
              data.map((el)=><ContactItem key={el.id} id={el.id} name={el.name} number={el.number} filter={formInpFilter} handlerBtnDel={handlerBtnDel}/>)
            }
        </ul>
    ) 
}
Contacts.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    formInpFilter: PropTypes.string,
}
