import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from "./styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  leftItem: PropTypes.element,
  leftItemPress: PropTypes.func,
  rightItem: PropTypes.element,
  rightItemPress: PropTypes.func,
  toolbarColor: PropTypes.string,
  toolbarMaxHeight: PropTypes.number,
  toolbarMinHeight: PropTypes.number,
}
const defaultProps = {
  leftItem: null,
  leftItemPress: null,
  rightItem: null,
  rightItemPress: null,
  title: 'Home',
  titleColor: '#fff',
  toolbarColor: '#e91e63',
  toolbarMaxHeight: 300,
  toolbarMinHeight: 55,
};

class CollapsingToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    const { children,src,leftItem,leftItemPress,rightItem,rightItemPress,title,titleColor,toolbarColor,toolbarMaxHeight,toolbarMinHeight } = this.props;
    const scrollDistance = toolbarMaxHeight - toolbarMinHeight;
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance],
      outputRange: [0, -scrollDistance],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance / 2, scrollDistance],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance / 2, scrollDistance],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = this.state.scrollY.interpolate({
      inputRange: [0, scrollDistance / 2, scrollDistance],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}>
          <View style={{marginTop: toolbarMaxHeight, minHeight: 700}}>
            {children}
          </View>
        </Animated.ScrollView>
        <Animated.View
          style={[
            styles.header,
            { 
              backgroundColor: toolbarColor,
              height: toolbarMaxHeight,
              transform: [{ translateY: headerTranslate }] 
            },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                height: toolbarMaxHeight,
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={src}
          />
          <Animated.View
            style={[
              styles.action,
              {
                backgroundColor: 'transparent',
                transform: [
                  { scale: titleScale },
                ],
              },
            ]}
          >
            <Text style={[styles.title,{color: titleColor}]}>{title}</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={styles.bar}>
          <TouchableOpacity onPress={leftItemPress}>
            <View style={styles.left}>{leftItem}</View>
          </TouchableOpacity>
          <TouchableOpacity onPress={rightItemPress}>
            <View style={styles.right}>{rightItem}</View>
          </TouchableOpacity>
        </Animated.View>

      </View>
    );
  }
}

CollapsingToolbar.propTypes = propTypes;
CollapsingToolbar.defaultProps = defaultProps;
export default CollapsingToolbar;
