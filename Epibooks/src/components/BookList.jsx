import Books from '../data/fantasy.json';
import SingleBook from "./SingleBook";

const BookList = function(){
    return (
      Books.map(libro => {
        return (
          <SingleBook libro={libro} key={libro.asin}/>
        )
      })
    )
  }

export default BookList;