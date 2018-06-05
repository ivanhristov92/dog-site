import { FormGroup, Label, Input } from 'reactstrap'

const Location = ({value, onChange }) => {
  return (
    <FormGroup>
      <Label for={"location-id"}>Location</Label>
      <Input
        name={"location"}
        value={ value }
        id={"location-id"}
        onChange={ onChange } />
    </FormGroup>
  )
}

export default Location
