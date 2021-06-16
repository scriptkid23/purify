import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RealtimeChart from '../../../components/RealtimeChart'

class CacbonicCard extends React.Component {
  timer;
  constructor(props) {
    super(props);
    const yaxisData = Array.from(Array(this.max).keys()).map(() => {
      return 0;
    });

    this.state = {
      max: 150,
      bountry: 50,
      yaxisData,
      counter: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const {yaxisData, counter} = this.state;
      if (yaxisData.length > this.state.max) {
        clearInterval(this.timer);
        return;
      }
      if (counter > 10) {
        yaxisData.shift();
      }
      let dta = this.getRandomInt(this.state.max);

      this.setState({yaxisData: [...yaxisData, dta], counter: counter + 1});
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(this.state.max));
  };

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <RealtimeChart
          yaxisData={this.state.yaxisData}
          indexToClipFrom={this.state.counter}
          bountry={this.state.bountry}
          yMax={this.state.max}
        />
      </View>
    );
  }
}

export default CacbonicCard;
