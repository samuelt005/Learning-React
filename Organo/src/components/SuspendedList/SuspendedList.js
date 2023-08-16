import './SuspendedList.css';
import suspendedList from "./index";

export const SuspendedList = (props) => {
    console.log(props.items)
    return (
        <div className="suspended-list">
            <label>{props.label}</label>
            <select required={props.required}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}