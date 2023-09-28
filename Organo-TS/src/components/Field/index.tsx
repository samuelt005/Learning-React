import "./Field.css";

interface FieldProps {
    placeholder: string;
    label: string;
    value: string;
    required?: boolean;
    type?: "text" | "color";
    onChanged: (value: string) => void;
}

export const Field = ({
    placeholder,
    label,
    value,
    required = false,
    type = "text",
    onChanged,
}: FieldProps) => {
    const onType = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChanged(event.target.value);
    };

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
    );
};

export default Field;
