import PropTypes from 'prop-types';

export const FormInp = ({handlerInp, formInpName})=>{
    return(
        <label htmlFor="name">
            <span>Name</span>
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handlerInp}
            value={formInpName}
            required
        />
        </label>
    )
}
FormInp.propTypes = {
    formInpName: PropTypes.string,
    
}