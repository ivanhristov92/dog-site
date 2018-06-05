import { FormGroup, Label, Input } from 'reactstrap'

const DogBreed = ({value, onChange, breedType}) => {
  return (
    <FormGroup>            
      <Label for={"breed-id"}>Dog breed</Label>
      <Input
        name={"breed"}
        value={value}
        onChange={onChange}
        type={"select"}
        id={"breed-id"}>
          { breedType().map(val => {
            return <option key={val}>{val}</option>
          }) }
      </Input>
    </FormGroup>
  )
}

export default DogBreed
