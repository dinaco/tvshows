import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import FormRow from '../components/formRow';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput style={styles.input} placeholder="user@email.com" />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="**************"
          />
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});
