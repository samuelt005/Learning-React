import './TextField.css';
export const TextField = (props) => {

    let inputValue = "Teste"

    const onType = (event) => {
        inputValue = event.target.value;
        console.log(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={inputValue} onChange={onType} required={props.required} placeholder={`${props.placeholder}...`}/>
        </div>
    )
}