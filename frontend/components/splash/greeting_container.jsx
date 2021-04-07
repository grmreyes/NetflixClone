import {connect} from 'react-redux';
import {signin} from '../../actions/session_actions';
import Greeting from './greeting';



const mapDispatchToProps = dispatch => ({
        signin: (user) => dispatch(signin(user))
})


export default connect(null, mapDispatchToProps)(Greeting)