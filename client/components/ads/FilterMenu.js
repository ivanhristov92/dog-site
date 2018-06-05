import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import axios from 'axios'
import DogBreed from './filterProp/DogBreed'
import AdvertType from './filterProp/AdvertType'
import Location from './filterProp/Location'
import Distance from './filterProp/Distance'
import Keyword from './filterProp/Keyword'

const MIN_DISTANCE_VALUE = 0;
const MAX_DISTANCE_VALUE = 200;
const breedType = ["All Breeds", "Boxer", "Pitbull", "Puppy", "Doggy"]
const advertType = ["All Advert Type", "For Sale", "For Adopt", "For Stud", "Found"]

class FilterMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: { min: 2, max: 10 },
      breed: this.getBreedType()[0],
      advertType: this.getAdvertType()[0],
      location: "",
      distance:MAX_DISTANCE_VALUE,
      keyword: ""
    };

    // Bind handlers
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler (e) {
    const value = e.target.value;
    const propName = e.target.name;

    this.setState({
      [propName]: value
    });
  }

  onSubmitHandler (e) {
    e.preventDefault()

    let lookingIds = []
    
    axios
      .get("http://localhost:4000/api/Breeds")
      .then(response => {
        response.data.forEach(breed => {
          if (breed.title.toLowerCase() === this.state.breed.toLowerCase()) {
            lookingIds.push(breed.id)
          }
        })
      })
      .then(() => {
        axios
        .get("http://localhost:4000/api/BreedingAds")
        .then(response => {
          const data = response.data;
          const keyword = this.state.keyword.toLowerCase();
          const location = this.state.location.toLowerCase();

          data.forEach(breedAd => {
            const breedId = breedAd.breedId;
            const info = breedAd.info.toLowerCase();
            const title = breedAd.title.toLowerCase();
            const features = breedAd.features.toLowerCase();
            const city = breedAd.city.toLowerCase();

            lookingIds.forEach(id => {
              if (breedId === id) {
                if (location === "") {
                  if (keyword === "") {
                    console.log(breedAd)
                  } else if (info.includes(keyword) || title.includes(keyword) || features.includes(keyword)) {
                    console.log(breedAd)
                  }
                } else if (city === location) {
                  if (keyword === "") {
                    console.log(breedAd)
                  } else if (info.includes(keyword) || title.includes(keyword) || features.includes(keyword)) {
                    console.log(breedAd)
                  }
                }
              }
            })
          })          
        })
        .catch(err => {
          console.log(err)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getBreedType() {
    return breedType
  }

  getAdvertType() {
    return advertType
  }

  render () {
    return (
      <div className="test">
        <Form onSubmit={this.onSubmitHandler}>
          <DogBreed
            onChange={this.onChangeHandler}
            value={this.state.breed}
            breedType={this.getBreedType} />
          <AdvertType
            onChange={this.onChangeHandler}
            value={this.state.getAdvertType}
            advertType={this.getAdvertType} />
          <Location
            onChange={this.onChangeHandler}
            value={this.state.location} />
          <Distance
            onChange={this.onChangeHandler}
            value={this.state.distance}
            min={MIN_DISTANCE_VALUE}
            max={MAX_DISTANCE_VALUE} />
          <Keyword
            onChange={this.onChangeHandler}
            value={this.state.keyword} />
          <Button onSubmit={this.onSubmitHandler}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default FilterMenu