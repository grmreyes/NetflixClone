import {connect} from 'react-redux';
import {signin} from '../../actions/session_actions';
import Splash from './splash';



const mapDispatchToProps = dispatch => ({
        signin: () => dispatch(signin({username: 'gino123',password: '123456'}))
})


export default connect(null, mapDispatchToProps)(Splash)