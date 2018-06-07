import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import axios from 'axios'
import DogBreed from './filterProp/DogBreed'
import AdvertType from './filterProp/AdvertType'
import Location from './filterProp/Location'
import MinPrice from './filterProp/MinPrice'
import MaxPrice from './filterProp/MaxPrice'
import Keyword from './filterProp/Keyword'

const MIN_DISTANCE_VALUE = 0;
const MAX_DISTANCE_VALUE = 200;
const breedType = ["All Breeds", "Boxer", "Pitbull", "Puppy", "Doggy"]
const advertType = ["All Advert Type", "For Sale", "For Adopt", "For Stud", "Lost/Found"]

class FilterMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      breed: this.getBreedType()[0],
      advertType: this.getAdvertType()[0],
      location: "",
      keyword: "",
      minPrice: 0,
      maxPrice: 0,
      selectedMinPrice: 0,
      selectedMaxPrice: 0
    };

    // Bind handlers
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.setMinMaxPrice()
  }

  setMinMaxPrice () {
    axios.get("http://localhost:4000/api/BreedingAds")
      .then(response => {
        const data = response.data
        let minPrice = 100000
        let maxPrice = 0

        data.forEach(d => {
          const price = d.price
          if (price < minPrice) {
            minPrice = price
          } else if (price > maxPrice) {
            maxPrice = price
          }
        })
        this.setState({
          minPrice,
          maxPrice,
          selectedMinPrice: minPrice,
          selectedMaxPrice: maxPrice
        })
      })
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
            if (this.state.advertType = this.getAdvertType()[0]) {
              // Advert type is "All Advert Type"
              lookingIds.push(breed.id)
            } else if (this.state.advertType.toLowerCase() === "breed.advertType.toLowerCase()") {
              lookingIds.push(breed.id)              
            }
          } else if (this.state.breed = this.getBreedType()[0]) {
            // Selected breed is "All breeds"
            if (this.state.advertType = this.getAdvertType()[0]) {
              // Advert type is "All Advert Type"
              lookingIds.push(breed.id)
            } else if (this.state.advertType.toLowerCase() === "breed.advertType.toLowerCase()") {
              lookingIds.push(breed.id)              
            }           
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
          const selectedMinPrice = this.state.selectedMinPrice;
          const selectedMaxPrice = this.state.selectedMaxPrice;

          data.forEach(breedAd => {
            const breedId = breedAd.breedId;
            const info = breedAd.info.toLowerCase();
            const title = breedAd.title.toLowerCase();
            const features = breedAd.features.toLowerCase();
            const city = breedAd.city.toLowerCase();
            const price = breedAd.price;

            lookingIds.forEach(id => {
              if (breedId === id && selectedMinPrice <= price && selectedMaxPrice >= price) {
                if (location === "") {
                  if (keyword === "") {
                    console.log(breedAd)
                  } else if (info.includes(keyword) || title.includes(keyword) || features.includes(keyword) || city.includes(keyword)) {
                    console.log(breedAd)
                  }
                } else if (city === location) {
                  if (keyword === "") {
                    console.log(breedAd)
                  } else if (info.includes(keyword) || title.includes(keyword) || features.includes(keyword) || city.includes(keyword)) {
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
          <MinPrice
            onChange={this.onChangeHandler}
            value={this.state.selectedMinPrice}
            min={this.state.minPrice}
            max={this.state.maxPrice} />
          <MaxPrice 
            onChange={this.onChangeHandler}
            value={this.state.selectedMaxPrice}
            min={this.state.minPrice}
            max={this.state.maxPrice} />
          <Keyword
            onChange={this.onChangeHandler}
            value={this.state.keyword} />
          <Button block outline color={"success"} onSubmit={this.onSubmitHandler}>Search</Button>
        </Form>
      </div>
    );
  }
}

export default FilterMenu
