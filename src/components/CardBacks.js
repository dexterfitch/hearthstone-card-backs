import React, { Component } from 'react';
import 'isomorphic-fetch';
import CardBack from './CardBack';
import { CardColumns } from 'react-bootstrap';

const API_URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks?rapidapi-key=973cb2a1admshfd1fbc8bb667566p1be040jsn9071e0416b57"

export default class CardBacks extends Component {
  state = {
    cardbacks: []
  }

  fetch = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data =>
      this.setState({
        cardbacks: data.map(
          cardback => ({
            name: cardback.name,
            description: cardback.description,
            img: cardback.img === undefined ? "https://via.placeholder.com/375x518" : cardback.img
          })
        )
      })
    )
  }

  UNSAFE_componentWillMount() {
    this.fetch()
  }

  render() {
    return (
      <CardColumns>
        { this.state.cardbacks.map( cardback =>
          <CardBack 
            key={ cardback.name }
            name={ cardback.name }
            description={ cardback.description }
            img={ cardback.img }
          />
        )}
      </CardColumns>
    )
  }
}