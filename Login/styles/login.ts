import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    color: '#2E3A2C',
    fontFamily: 'Roboto-Medium',
  },
  text: {
    fontSize: 12,
    color: '#2E3A2C',
    marginTop: 16,
    fontFamily: 'Roboto-Medium',
  },
  forgotPasswordText: {
    textAlign: 'right',
    alignSelf: 'stretch',
    paddingRight: '15%',
  },
  input: {
    width: '70%',
    borderBottomWidth: 1, // Define apenas a borda inferior
    borderColor: '#ccc', // Cor da borda
    marginTop: 27,
    paddingHorizontal: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#2E3A2C',
    width: '70%',
    height: 43,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
});
