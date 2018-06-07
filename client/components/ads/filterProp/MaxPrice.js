import { FormGroup, Label, Input } from 'reactstrap'

const MinPrice = ({value, onChange, min, max }) => {
  return (
    <FormGroup>
      <Label for={"max-price-id"} className={""}>Max price</Label>
      <br />
      <div className="d-flex justify-content-between small">
        <span className={"align-self-center"}>{min}</span>
        <Input style={{width: "70px", marginTop: "5px", marginBottom: "5px", fontSize: "13px"}} onChange={onChange} name={"selectedMaxPrice"} value={value} type="number" />
        <span className={"align-self-center"}>{max}</span>
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
