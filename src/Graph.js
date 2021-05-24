import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {mixPath, serialize, useVector} from 'react-native-redash';

import {GraphIndex, graphs, SIZE} from './Model';
import Header from './Header';
import Cursor from './Cursor';

const {width} = Dimensions.get('window');
const AnimatedPath = Animated.createAnimatedComponent(Path);

const SELECTION_WIDTH = width - 32;
const BUTTON_WIDTH = (width - 32) / graphs.length;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundSelection: {
    backgroundColor: '#f3f3f3',
    ...StyleSheet.absoluteFillObject,
    width: BUTTON_WIDTH,
    borderRadius: 8,
  },
  selection: {
    flexDirection: 'row',
    width: SELECTION_WIDTH,
    alignSelf: 'center',
  },
  labelContainer: {
    padding: 16,
    width: BUTTON_WIDTH,
  },
  label: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Graph = () => {
  const translation = useVector();
  const transition = useSharedValue(0);
  const previous = useSharedValue(0);
  const current = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => {
    const previousPath = graphs[previous.value].data.path;
    const currentPath = graphs[current.value].data.path;
    return {
      d:  serialize(previousPath),
    };
  });
  const style = useAnimatedStyle(() => ({
    transform: [{translateX: withTiming(BUTTON_WIDTH * current.value)}],
  }));
  return (
    <View style={styles.container}>
      <Header translation={translation} index={current} />
      <View>
        <Svg width={SIZE} height={SIZE}>
          <AnimatedPath
            animatedProps={animatedProps}
            fill="transparent"
            stroke="black"
            strokeWidth={3}
          />
        </Svg>
      </View>
    </View>
  );
};

export default Graph;
