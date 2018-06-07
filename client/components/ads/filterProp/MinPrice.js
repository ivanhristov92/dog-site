import { FormGroup, Label, Input } from 'reactstrap'

const MinPrice = ({value, onChange, min, max }) => {
  return (
    <FormGroup>
      <Label for={"min-price-id"}>Min price</Label>
      <br />
      <div className="d-flex justify-content-between">
        <span>{min}</span>
        <span>Current: {value}</span>
        <span>{max}</span>
      </div>
      <Input
        name={"selectedMinPrice"}
        value={value}
        id={"min-price-id"}
        min={min} max={max}
        type={"range"}
        onChange={onChange}/>
    </FormGroup>
  )
}

export default MinPrice
