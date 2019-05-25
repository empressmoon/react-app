import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults } from '../../redux/cardsRedux.js';
//import {getSearchString} from '../../redux/searchStringRedux';
//import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.match.params.searchString),
  searchString: props.match.params.searchString,
});

export default connect(mapStateToProps)(SearchResults);
