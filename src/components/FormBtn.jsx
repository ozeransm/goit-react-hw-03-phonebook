import css from './Form.module.css'
export const FormBtn = ({handlerSubmit})=>{
    return(
        <button className={css.btnForm} onClick={handlerSubmit} type="submit">Add contact</button>
    )
}