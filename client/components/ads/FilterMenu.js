import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import InputRange from 'react-input-range'
import CSSModules from 'react-css-modules'
import style from './Filter.css'

const MIN_DISTANCE_VALUE = 0;
const MAX_DISTANCE_VALUE = 200;
const breedTypes = ["all", "one", "two", "three"]

class FilterMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: { min: 2, max: 10 },
      breed: "all",
      location: "",
      distance:MAX_DISTANCE_VALUE
    };
    // Bind handlers
    this.onBreedChangeHandler = this.onBreedChangeHandler.bind(this);
    this.onLocationChangeHandler = this.onLocationChangeHandler.bind(this);
    this.onDistanceChangeHandler = this.onDistanceChangeHandler.bind(this);
  }

  onBreedChangeHandler (e) {
    const value = e.target.value
    
    this.setState({
      breed: value
    })
  }

  onLocationChangeHandler (e) {
    const value = e.target.value

    this.setState({
      location: value
    })
  }

  onDistanceChangeHandler (e) {
    const value = e.target.value

    this.setState({
      distance: value
    })
  }

  render () {
    return (
      <div className="test">
        <Form>
          <FormGroup>
            <Label for={"breed-id"}>Dog breed</Label>
            <Input
              name={"breed"}
              value={this.state.breed}
              onChange={this.onBreedChangeHandler}
              type={"select"}
              id={"breed-id"}>
                { breedTypes.map(val => {
                  return <option key={val}>{val}</option>
                }) }
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for={"location-id"}>Location</Label>
            <Input
              name={"location"}
              value={this.state.location}
              id={"location-id"}
              onChange={this.onLocationChangeHandler} />
          </FormGroup>
          <FormGroup>
            <Label for={"distance-id"}>Distance</Label>
            <br />
            <div className="d-flex justify-content-between">
              <span>{MIN_DISTANCE_VALUE} km</span>
              <span>Current: {this.state.distance} km</span>
              <span>{MAX_DISTANCE_VALUE} km</span>
            </div>
            <Input
              name={"distance"}
              value={this.state.distance}
              id={"distance-id"}
              min={MIN_DISTANCE_VALUE} max={MAX_DISTANCE_VALUE}
              type={"range"}
              onChange={this.onDistanceChangeHandler}/>
          </FormGroup>
          <InputRange
              maxValue={20}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
        </Form>
      </div>
    );
  }
}

export default CSSModules(FilterMenu, style)