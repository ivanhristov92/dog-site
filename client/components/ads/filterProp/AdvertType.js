import { FormGroup, Label, Input } from 'reactstrap'

const AdvertType = ({value, onChange, advertType}) => {
  return (
    <FormGroup>            
      <Label for={"advert-type"}>Dog breed</Label>
      <Input
        name={"advertType"}
        value={value}
        onChange={onChange}
        type={"select"}
        id={"breed-id"}>
          { advertType().map(val => {
            return <option key={val}>{val}</option>
          }) }
      </Input>
    </FormGroup>
  )
}

export default AdvertType
