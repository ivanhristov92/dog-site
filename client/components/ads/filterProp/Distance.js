import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'


const Distance = ({onChange, value, min, max }) => {
  return (
    <FormGroup>
      <Label for={"distance-id"}>Distance</Label>
      <br />
      <div className="d-flex justify-content-between">
        <span>{min} km</span>
        <span>Current: {value} km</span>
        <span>{max} km</span>
      </div>
      <Input
        name={"distance"}
        value={value}
        id={"distance-id"}
        min={min} max={max}
        type={"range"}
        onChange={onChange}/>
    </FormGroup>
  )
}

export default Distance
