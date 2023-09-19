import './TextField.css';
export const TextField = (props) => {

    const onType = (event) => {
        props.onChanged(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={onType}
                required={props.required}
                placeholder={`${props.placeholder}...`}
            />
        </div>
    )
}

export default TextField