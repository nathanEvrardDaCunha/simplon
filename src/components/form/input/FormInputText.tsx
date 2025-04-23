interface FormInputTextProps {
    id: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

export function FormInputText(props: FormInputTextProps) {
    return (
        <input
            id={props.id}
            name={props.name}
            type={'text'}
            required={props.required === undefined ? true : props.required}
            disabled={props.disabled === undefined ? false : props.disabled}
            placeholder={props.placeholder}
        />
    );
}
