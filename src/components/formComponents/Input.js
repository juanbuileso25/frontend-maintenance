import { FormGroup, Label, Input } from 'reactstrap';


const InputForm = ({ name, handleInputChange, label, type, state, setState, regularExpression }) => {

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


    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input
                className={state.valid ? "is-valid" : "is-invalid"}
                type={type}
                name={name}
                onChange={onChange, handleInputChange}
                onKeyUp={validation}
                onBlur={validation}
            />
        </FormGroup>
    );
}

export default InputForm;