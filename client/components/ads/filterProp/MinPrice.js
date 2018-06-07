import { FormGroup, Label, Input } from 'reactstrap'

const MinPrice = ({value, onChange, min, max }) => {
  return (
    <FormGroup>
      <Label for={"min-price-id"}>Min price</Label>
      <br />
      <div className="d-flex justify-content-between small">
        <span className={"align-self-center"}>{min}</span>
        <span>
          <Input style={{width: "70px", marginTop: "5px", marginBottom: "5px", fontSize: "13px"}} onChange={onChange} name={"selectedMinPrice"} value={value} type="number" />          
        </span>
        <span className={"align-self-center"}>{max}</span>
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
