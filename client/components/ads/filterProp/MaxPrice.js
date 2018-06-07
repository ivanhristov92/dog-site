import { FormGroup, Label, Input } from 'reactstrap'

const MinPrice = ({value, onChange, min, max }) => {
  return (
    <FormGroup>
      <Label for={"max-price-id"}>Max price</Label>
      <br />
      <div className="d-flex justify-content-between">
        <span>{min}</span>
        <span>Current: {value}</span>
        <span>{max}</span>
      </div>
      <Input
        name={"selectedMaxPrice"}
        value={value}
        id={"max-price-id"}
        min={min} max={max}
        type={"range"}
        onChange={onChange}/>
    </FormGroup>
  )
}

export default MinPrice
