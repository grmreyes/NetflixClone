import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this)
    let mylistbool = false;
    this.state = {mylist: mylistbool}
  }

  componentDidMount(){
    if(this.props.user){
        if(this.props.user.listings.includes(this.props.movieId)){
            mylistbool = true;
        }
    }
  }


    handleButton(e){
        this.props.createListing(this.props.movieId,this.props.user.id)
    }


  

  render() {
    
    return (

            <div onClick={this.handleButton} className="mylist-button">
                <strong className="material-icons">
                    star_rate
                </strong>
            </div>

    );
  }
}

export default SearchBar;
