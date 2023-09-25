import './Field.css';
export const Field = ({ type = "text", label, placeholder, value, onChanged, required = false }) => {

    const onType = (event) => {
        onChanged(event.target.value);
    }

    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input
                value={value}
                type={type}
                onChange={onType}
                required={required}
                placeholder={`${placeholder}...`}
            />
        </div>
    )
}

export default Field