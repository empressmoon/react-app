import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
import styles from './SearchResults.scss';
//import {getSearchString} from '../../redux/searchStringRedux';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    searchString: PropTypes.string,
  }

  render(){
    const {cards} = this.props;

    return (
      <section className={styles.section}>
        <Container>
          <div className={styles.component}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;
