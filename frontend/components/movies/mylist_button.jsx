
import React from 'react'


class MyListButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {added: 'add'}
        this.handleButton=this.handleButton.bind(this);
    }

    componentDidMount(){
        this.props.fetchList({userId: this.props.userId});
        if(Object.values(this.props.list).includes(this.props.movieId)){
            this.setState({added: 'done'})
        }
        else{
            this.setState({added: 'add'})
        }
    }

    handleButton(e){
        
        if(this.state.added==='add'){
            
            this.setState({added: 'done'})
            this.props.createListing({movieId: this.props.movieId,userId: this.props.userId})

            
        }
        else{
            this.setState({added: 'add'})
            this.props.deleteListing({movieId: this.props.movieId,userId: this.props.userId})
        }
    }
    render(){
        return (
            <div onClick={this.handleButton} className="mylist-button">
                <strong className="material-icons">
                    {this.state.added}
                </strong>
            </div>
        )
    }

}

export default MyListButton;