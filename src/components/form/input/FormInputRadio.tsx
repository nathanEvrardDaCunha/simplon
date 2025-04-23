interface FormInputRadioProps {
    id: string;
    name: string;
    disabled?: boolean;
    value: string;
}

export function FormInputRadio(props: FormInputRadioProps) {
    return (
        <input
            id={props.id}
            name={props.name}
            type={'radio'}
            disabled={props.disabled === undefined ? false : props.disabled}
            value={props.value}
        />
    );
}

{
    /* <section>
    <input type="radio" id="java" name="favorite-language" value="java" />
    <FormLabel htmlFor="java">Java</FormLabel>
</section>; */
}
