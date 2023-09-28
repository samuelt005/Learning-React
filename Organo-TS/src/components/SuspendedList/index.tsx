import './SuspendedList.css';

interface SuspendedListProps {
    onChanged: (value: string) => void
    label: string
    required: boolean
    value: string
    items: string[]
}

export const SuspendedList = ({ label, onChanged, required, value, items } :SuspendedListProps) => {
    return (
        <div className="suspended-list">
            <label>{label}</label>
            <select
                onChange={(event) => onChanged(event.target.value)}
                required={required}
                value={value}
            >
                <option value=""></option>
                {items.map((item) => {
                    return <option key={item}>{item}</option>;
                })}
            </select>
        </div>
    );
}

export default SuspendedList