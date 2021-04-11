import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleButton = this.handleButton.bind(this)
  }

  handleChange(e){
        this.setState({
            searchTerm: e.target.value
        });
        let url = '/browse/' + e.target.value
        this.props.history.push({pathname: url})    
   }

   handleButton(e){
        var searchInput = document.querySelector('#search-input');
        if (searchInput.classList.contains('search-input-invisible')){
            searchInput.classList.remove('search-input-invisible');
            searchInput.classList.add('search-input');
            searchInput.disabled = false;
            searchInput.select();
        }
        else{
            searchInput.classList.remove('search-input');
            searchInput.classList.add('search-input-invisible');
            searchInput.disabled = true;
        }

        var searchButton = document.querySelector('#search-button');
        if (searchButton.classList.contains('search-button')){
            searchButton.classList.remove('search-button');
            searchButton.classList.add('search-button-expanded');
        }
        else{
            var searchButton = document.querySelector('.search-button-expanded');
            searchButton.classList.remove('search-button-expanded');
            searchButton.classList.add('search-button');
        }
   }


  

  render() {
    
    return (
      <div className="search-bar-container">
            <div onClick={this.handleButton} className="search-button" id="search-button">
                <strong className="material-icons">
                    search
                </strong>
            </div>
            <input type="text"
                value={this.state.searchTerm}
                onChange={this.handleChange}
                className="search-input-invisible"
                id="search-input"
                placeholder="Titles, Genres"
                disabled
            />
      </div>
    );
  }
}

export default SearchBar;
