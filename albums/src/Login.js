import React, {Component} from 'react'; 
import firebase from '../initializers/firebase';
import {connect} from 'react-redux';
import {saveToken,clearToken} from '../initializers/action';
import AuthElements from '../components/AuthElements';




class Login extends Component{
	constructor(props){
		super(props);
		this.login = this.login.bind(this); /*Esto es para declarar que this siempre va a ser la 
		                                      la clase y no el boton */

		this.logout = this.logout.bind(this);
		this.state = {
			userLoggedIn:false,
			photoURL:''
		};
	}

	componentDidMount(){
		firebase.auth().onAuthStateChanged((user)=>{
			if(user){
				this.setState({
					userLoggedIn:true,
					photoURL:user.providerData[0].photoURL
				})
			}else{
				this.setState({
					userLoggedIn:false,
					photoURL:""
				})

			}
		})
	}

	login(){
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
		firebase.auth().signInWithPopup(provider).then(result => {
			let token = result.credential.accessToken;
			this.props.saveToken(token); /*llamamos a la accion saveToken y le pasamos el token de google */
		}).catch(err=>{
			console.log(err);
		})
	}

	

	logout(){
		firebase.auth().signOut().then(()=>{
			this.props.clearToken();
		});
	}

	render(){
		return(
				<AuthElements/>
			);
	}
}

const mapStateToProps = (state)=>{
	return{
		token:state.token
	}
}

const mapDispatchToProps = {
	saveToken : saveToken,
	clearToken : clearToken
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
//withStyles({
//  container:{display:'flex',
//  	         flexDirection:'row'}
//})(Login);