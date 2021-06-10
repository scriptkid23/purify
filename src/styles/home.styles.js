import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sensorInfo: {
    fontFamily: 'Aeonik',
    color: '#152383',
  },
  sensorComponent: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '88%',
    height: 70,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 7.49,

    elevation: 12,
  },
  bodyText: {
    fontFamily: 'Aeonik',
    fontSize: 18,
    color: '#152383',
    marginTop: 10,
  },
  header: {
    paddingTop: 30,
    padding: 20,
    height: 130,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5.84,

    elevation: 1,
  },
  headerText: {
    fontFamily: 'Aeonik',
    fontSize: 13,
    color: '#152383',
  },
  headerWelcome: {
    fontFamily: 'Aeonik',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#152383',
  },
  btnSearch: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7.49,

    elevation: 12,
  },
  btnSearchMini: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7.49,

    elevation: 12,
  },
  headerName: {
    fontFamily: 'Aeonik',
    fontSize: 30,
    color: '#152383',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
