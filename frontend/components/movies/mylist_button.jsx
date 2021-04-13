
import React from 'react'


class MyListButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {added: 'add'}
        this.handleButton=this.handleButton.bind(this);
    }

    componentDidMount(){
        this.props.fetchList({userId: this.props.userId});
    }

    handleButton(e){
        if(this.state.added==='add'){
            
            this.setState({added: 'done'})
            this.props.createListing({movieId: 1,userId: this.props.userId})
              //  .then(()=>(this.props.fetchList({userId: this.props.userId}))
              //      .then(()=>(render ))

            
        }
        else{
            this.setState({added: 'add'})
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