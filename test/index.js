import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import CollapsingToolbar from '../react-native-collapsingtoolbar/';
import Icon from 'react-native-vector-icons/Ionicons';

class Demo extends Component {

  render() {
    return (
          <CollapsingToolbar 
            leftItem={<Icon name="md-menu" size={30} color="#fff" />}
            rightItem={<Icon name="md-create" size={30}  color="#fff" />}
            title='Demo Toolbar'
            src={require('./nav.png')}>
            <Text>
              Create             
            </Text>
          </CollapsingToolbar>
    );
  }
}

export default Demo;
