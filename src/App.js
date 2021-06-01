import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as shape from 'd3-shape';
import {LineChart, Grid, Path, YAxis, XAxis} from './components/Charts';
import {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
  Line,
} from 'react-native-svg';

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
const Clips = ({x, y, indexToClipFrom, height, bountry}) => {
  return (
    <Defs key={'clips'}>
      <ClipPath id="clip-path-1">
        <Rect x={'0'} y={'0'} width={x(indexToClipFrom) - 2} height={'100%'} />
      </ClipPath>
      <ClipPath id="clip-path-2">
        <Rect
          x={'0'}
          y={'0'}
          width={x(indexToClipFrom) - 2}
          height={y(bountry)}
        />
      </ClipPath>
    </Defs>
  );
};
const RedDashedLine = ({y, bountry}) => (
  <Line
    x1="0"
    y1={y(bountry)}
    x2="100%"
    y2={y(bountry)}
    stroke="red"
    strokeWidth="2"
    strokeDasharray={[4, 4]}
  />
);
const LineRealTime = ({line}) => (
  <Path
    key={'line-1'}
    d={line}
    stroke={'red'}
    strokeWidth={2}
    fill={'none'}
    clipPath={'url(#clip-path-2)'}
  />
);
const RealTimeLineGraph = props => {
  const {yaxisData, indexToClipFrom, bountry, yMax} = props;
  const contentInset = {top: 20, bottom: 20};
  return (
    <View style={{flex: 1}}>
      <View style={{height: 200, flexDirection: 'row'}}>
        <YAxis
          data={yaxisData}
          contentInset={contentInset}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          formatLabel={value => `${value}`}
        />

        <LineChart
          curve={shape.curveNatural}
          style={{flex: 1, marginLeft: 16}}
          yMin={0}
          yMax={yMax}
          data={yaxisData}
          svg={{
            stroke: 'green',
            strokeWidth: 2,
            clipPath: 'url(#clip-path-1)',
          }}
          contentInset={contentInset}>
          <Grid />
          <Clips indexToClipFrom={indexToClipFrom} bountry={bountry} />
          <LineRealTime />
          <RedDashedLine bountry={bountry} />
        </LineChart>
      </View>
    </View>
  );
};

class App extends React.Component {
  timer;
  constructor(props) {
    super(props);
    const yaxisData = Array.from(Array(this.max).keys()).map(() => {
      return 0;
    });

    this.state = {
      max: 150,
      bountry: 80,
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
        <RealTimeLineGraph
          yaxisData={this.state.yaxisData}
          indexToClipFrom={this.state.counter - 1}
          bountry={this.state.bountry}
          yMax={this.state.max}
        />
      </View>
    );
  }
}

export default App;
