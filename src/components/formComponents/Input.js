import { FormGroup, Label, Input } from 'reactstrap';


const InputForm = ({ name, handleInputChange, label, type, state, setState, regularExpression, value }) => {

    const onChange = (e) => {
        setState({ ...state, input: e.target.value })
    }

    const validation = () => {
        if (regularExpression) {
            if (regularExpression.test(state.input)) {
                setState({ ...state, valid: true })
            } else {
                setState({ ...state, valid: false })
            }
        }
    }

    console.log(state)

    const focus = () => {
        if (state.input.length === 0) {
            setState({ input: '', valid: null })
        }
    }

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input
                className={state.valid ? "is-valid" : "is-invalid"}
                type={type}
                name={name}
                onChange={handleInputChange}
                onFocus={focus}
                onKeyDown={validation}
                onBlur={validation}
                value={value && value}
            />
        </FormGroup>
    );
}

export default InputForm;