import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].country}

  onChangeCountry = event => {
    const x = event.target.value
    const filteredCountry = countryAndCapitalsList.filter(
      eachItem => eachItem.capitalDisplayText === x,
    )
    this.setState({capital: filteredCountry[0].country})
  }

  render() {
    const {capital} = this.state

    return (
      <div>
        <div>
          <h1>Countries and Capitals</h1>
          <select id="capitalCountry" onChange={this.onChangeCountry}>
            {countryAndCapitalsList.map(eachItem => (
              <option id={eachItem.id} value={eachItem.id} key={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitalCountry">is capital of which country?</label>
          <p>{capital}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
