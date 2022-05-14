import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

export default function Footer(props) {
  const {calculate} = props;
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 15,
    borderRadius: 30,
    width: '75%',
  },
});
