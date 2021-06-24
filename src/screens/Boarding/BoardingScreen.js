
import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';


const BoardingScreen = [
    {
        title: "Cuida tu economia",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        img: onboarding1
    },
    {
        title: "Cuida tu economia",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        img: onboarding2
    },
    {
        title: "Cuida tu economia",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        img: onboarding3
    }
];

const OnBoarding = () => {
    const [completed, setCompleted] = React.useState(false);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / Dimensions.get("window").width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);

    function renderContent() {
        return (
            <View style={styles.screen}>
                <Animated.ScrollView
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    decelerationRate={0}
                    style={styles.scroll}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { x: scrollX } } },
                    ], { useNativeDriver: false })}
                >
                    {onBoardings.map((item, index) => (
                        <View
                            key={`img-${index}`}
                            style={styles.imageAndTextContainer}
                        >
                            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={item.img}
                                    resizeMode="cover"
                                    style={{
                                        width: 200,
                                        height: 250,
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: '10%',
                                    left: 40,
                                    right: 40
                                }}
                            >
                                <Text style={{
                                    color: '#132767',
                                    fontSize: 35,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                                >
                                    {item.title}
                                </Text>

                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 15,
                                    color: '#132767',
                                }}
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    ))}
                </Animated.ScrollView>
                <TouchableOpacity
                    style={{
                        height: 50,
                        borderRadius: 15,
                        marginHorizontal: 20,
                        marginVertical: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#374EEE',
                    }}
                    onPress={() => { console.log("pressed") }}
                >
                    <Text style={{ color: '#ffffff', fontSize: 30 }}>Let's go</Text>
                </TouchableOpacity>
            </View>

        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, Dimensions.get("window").width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.5, 1, 0.5],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [7, 15, 7],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: dotSize, height: dotSize, }]}
                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    scroll: {
        bottom: '25%'
    },
    imageAndTextContainer: {
        width: 400,
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: '17%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '15%',
    },
    dot: {
        borderRadius: 50,
        backgroundColor: '#374EEE',
        marginHorizontal: 5
    }
});

export default BoardingScreen;
