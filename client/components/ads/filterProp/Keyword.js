import { FormGroup, Label, Input } from 'reactstrap'

const Location = ({value, onChange }) => {
  return (
    <FormGroup>
    <Label for={"keyword-id"}>Keyword</Label>
    <Input
      name={"keyword"}
      value={ value }
      id={"keyword-id"}
      onChange={ onChange } />
  </FormGroup>
  )
}

export default Location
