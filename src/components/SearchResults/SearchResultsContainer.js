import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults } from '../../redux/cardsRedux.js';
//import {getSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  cards: getCardsForSearchResults(state),
});

export default connect(mapStateToProps)(SearchResults);
