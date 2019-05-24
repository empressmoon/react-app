import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
import styles from './SearchResults.scss';
//import {getCardsForSearchResults} from '../../redux/cardsRedux';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    searchString: PropTypes.string,
    columns: PropTypes.array,
  }

  state = {
    value: this.props.cards || [],
  }

  render(){
    const {cards} = this.props;
    return (

      <section className={styles.section}>
        <Container>
          <div className={styles.component}>
            {cards.map(cardData => (
              <Card key={cardData.title} {...cardData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;
