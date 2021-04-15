![image](https://nicflix-dev.s3-us-west-1.amazonaws.com/readme/netflixbanner.png)
======
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-ruby.svg)

Nicflix is a Netflix website clone designed to showcase the awesomeness of Nicolas Cage. Browse, play, and enjoy Nic Cage's greatest hits, all in one platform.

* Backend   : **Ruby on Rails**
* Frontend  : **React-Redux**
* Database  : **PostgreSQL**
* Hosting   : **Heroku**
* Inspiration: **Nicolas Cage**

[Live Site](https://nic-flix.herokuapp.com/)


Highlighted Features and Code
======


## Movie Thumbnail Catalog
* Featured movie playback in background
* Preview playback and more information on hover

*Using a combination of Javascript and CSS, the movie thumbnails expand, play a preview, and show further information about the movie when moused over by the user.*

![Hover Playback](https://github.com/grmreyes/nicflix/blob/main/app/assets/images/hover-small.gif)

### Javascript
```javascript
handleEnter(){
    this.idString = "#".concat(this.props.genre).concat(this.props.movie.id)
    let thumbVid = document.querySelector(this.idString);
    thumbVid.play();
    let indexVid = document.querySelector(".index-video");
      if(indexVid){
        if(indexVid.muted===false){
        this.props.forceMute();
      }}
  }

  handleLeave(){
    this.idString = "#".concat(this.props.genre).concat(this.props.movie.id)
    let thumbVid = document.querySelector(this.idString);
    thumbVid.load();
  }
```
### CSS
```javascript
.movie-thumb-container:hover{
    transform: scale(1.5);
    z-index: 2;
    background-color: #1d1d1d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.movie-thumb-container:hover .thumb-info{
    opacity: 1;
}

.thumb-info{
    opacity: 0;
    padding:15px;
    padding-left: 25px
}
```

## Search
* Instant search loads thumbnails instanly as user searches
* Allows users to search for titles, keywords, genres, and mylist
* Searches even with incomplete search terms

*Utilizes React Component Routes and passing the search term as the wildcard for the url enables results to show in real time. In searching for matches, search term is trimmed of spaces and special characters and can be matched with either the genre, a partial match with the title, or 'mylist' if it is part of the user-created list of movies.*

![Search](https://github.com/grmreyes/nicflix/blob/main/app/assets/images/search-small.gif)

### React Component Routes for Instant Searching

```javascript
<ProtectedRoute exact path="/browse/:searchTerm" component={SearchResultsContainer} />
```
### Search logic for matches
```javascript
//mylist
if(trimmed==='mylist'){
    if(Object.values(list).includes(movie.id)){
        return true;
    }
}
//match with genre
if(movie.genre.name.toLowerCase()===trimmed){
    return true;
}
//match with title
if (trimTitle.match(trimmed)!=null){
    return true;
}
```

Contact
======
[grmreyes@gmail.com](mailto:grmreyes@gmail.com)


