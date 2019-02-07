import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signos from './signo.json'


export default class ListaSignos extends Component {
    onPress = (idSigno) => {
        this.history.push(`/${idSigno}`)
    }
  render() {
    return (
      <View style={styles.container}>     
        {signos.map((signo, key) => (
        <Button 
            key={key} 
            title={signo.nome} 
            onPress={() => this.props.history.push('/' + key)} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
