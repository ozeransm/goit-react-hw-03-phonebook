export const FindContact = ({handlerFind})=>{
    return(
        <label htmlFor="find">
            <p>Find contacts by name</p> 
            <input name="find" type="text" onChange={handlerFind}/>
        </label>
    )
}