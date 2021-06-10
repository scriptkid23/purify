import React from 'react';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {Block} from '../../components';
import {styles} from '../../styles/dashboard.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faThermometerHalf,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import {LineChart, Grid} from '../../components/Charts';
import * as shape from 'd3-shape'

const data = [30.5, 30, 29, 31, 31.5, 28.9];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Dashboard({navigation}) {
  const Line = ({ line }) => (
    <Path
        key={'line'}
        d={line}
        stroke={'rgb(134, 65, 244)'}
        fill={'none'}
        strokeWidth={3}
    />
)
  return (
    <Block>
      <Block row noflex margin={10}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon
            size={35}
            style={{marginTop: 3}}
            color={'#132767'}
            icon={faAngleLeft}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 29,
            color: '#132767',
            fontFamily: 'Aeonik',
            letterSpacing: 50,
            fontWeight: 'bold',
          }}>
          Dashboard
        </Text>
      </Block>
      <Block center margin={30}>
        <Block
          noflex
          style={{
            backgroundColor: '#fff',
            width: width - 30,
            height: height / 3,
            borderRadius: 20,
            padding: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          {/* <Text
            style={{
              fontSize: 19,
              fontFamily: 'Aeonik',
              letterSpacing: 10,
              color: '#132767',
              fontWeight: '600',
            }}>
            Temperature
          </Text> */}
          <Block row center>
            <FontAwesomeIcon
              color={'#132767'}
              size={60}
              icon={faThermometerHalf}
            />
            <Block marginTop={10}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: '#132767',
                }}>
                30°<Text style={{fontSize: 30}}>C</Text>
              </Text>

              <Block row>
                <FontAwesomeIcon
                  style={{marginTop: 13}}
                  color={'#FF3061'}
                  size={30}
                  icon={faSortUp}
                />
                <Text
                  style={{
                    fontSize: 30,
                    color: '#FF3061',
                  }}>
                  3<Text style={{fontSize: 20}}>%</Text>
                </Text>
              </Block>
            </Block>
            <Block>
            <LineChart
                style={ { height: 100 } }
                data={ data }
                contentInset={ { top: 20, bottom: 20 } }
                curve={shape.curveNatural}
                // svg={{ strokeWidth:30 }}
            >
                 <Line/>
            </LineChart>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
