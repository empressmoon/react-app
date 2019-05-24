import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults } from '../../redux/cardsRedux.js';
//import {createAction_changeSearchString} from '../../redux/searchStringRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props),
});

export default connect(mapStateToProps)(SearchResults);
