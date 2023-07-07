import { FormBtn } from "./FormBtn"
// import { FormInp } from "./FormInp"
// import { FormInpTel } from "./FormInpTel"
import { Component } from "react"
import css from './Form.module.css'
class Form extends Component {
    
    state = {
        name: '',
        number: '',
    }
    handlerSubmit = (e)=>{
        e.preventDefault();
        this.setState({name: '',number: ''});
        this.props.addToContact(this.state)
    }

    handlerInp = ({target:{name, value}})=>{
        this.setState({
          [name]: value,
        })
       
    }
    
    render(){
        return(
            <form className={css.common} action="submit">
                <label htmlFor="name">
                    <span>Name</span>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={this.handlerInp}
                        value={this.state.name}
                        required
                    />
                </label>
                <label htmlFor="number">
                    <span>Number</span> 
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={this.handlerInp}
                        value={this.state.number}
                        required
                    />
                </label>        
                    {/* <FormInp handlerInp={this.handlerInp} formInpName={this.state.name}/>
                    <FormInpTel handlerInpTel={this.handlerInp} formInpNumber={this.state.number}/> */}
                <FormBtn handlerSubmit={this.handlerSubmit}/>
            </form> 
        )
    }
} 

export default Form;