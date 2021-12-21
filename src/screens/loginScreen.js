import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Text,
} from 'react-native';
import FormRow from '../components/formRow';
import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyANA3pNeR869zj51tzx4R3bhxh0WLMeiQY',
      authDomain: 'dino-series.firebaseapp.com',
      databaseURL: 'https://dino-series.firebaseio.com',
      projectId: 'dino-series',
      storageBucket: 'dino-series.appspot.com',
      messagingSenderId: '675831544515',
      appId: '1:675831544515:web:2d697d24429d44caad0076',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }

  onChangeHandler(field, value) {
    /*     this is the ES5 way of doing IDBTransaction, lets use ES6
const newState = {}
newState[field] = value */
    this.setState({[field]: value});
  }

  tryLogin() {
    this.setState({loading: true});
    const {email, password} = this.state;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        this.setState({loading: false});
        this.setState({errorMessage: ''});
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.setState({loading: false});
        this.setState({errorMessage: errorCode});
        this.renderErrorMessage();
      });
  }

  renderErrorMessage() {
    const {errorMessage} = this.state;
    if (errorMessage) {
      return (
        <View>
          <Text>{errorMessage}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow first /* same as first = true */>
          <TextInput
            style={styles.input}
            placeholder="user@email.com"
            value={this.state.email}
            onChangeText={value => this.onChangeHandler('email', value)}
          />
        </FormRow>
        <FormRow last>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="**************"
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
          />
        </FormRow>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button title="Login" onPress={() => this.tryLogin()} />
        )}
        {this.renderErrorMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});
