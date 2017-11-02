## React Native CollapsingToolbar

## Screen Shot

<img src="https://github.com/sanpyaelin/react-native-collapsingtoolbar/blob/master/screenshot/1.gif" width="285">    <img src="https://github.com/sanpyaelin/react-native-collapsingtoolbar/blob/master/screenshot/2.gif" width="285">


## Getting Started
```bash
$ npm i react-native-collapsingtoolbar
```

## Usage

Import the component:
```js
    import CollapsingToolbar from 'react-native-collapsingtoolbar';
    import Icon from 'react-native-vector-icons/Ionicons';

    <CollapsingToolbar 
        leftItem={<Icon name="md-menu" size={30} color="#fff" />}
        rightItem={<Icon name="md-create" size={30}  color="#fff" />}   
        toolbarColor='#2196f3'  
        title='Demo Toolbar'
        src={require('../../../images/drawer6.png')}>
        <Text>
            Create             
        </Text>
    </CollapsingToolbar>
```

## Props

Prop | Type | Default | description
-----|------|---------|------------
src | object | | require('img.png') or {uri: url}
title| string | Home | toolbar title
titleColor| string | #fff | toolbar title text color
toolbarColor | string | #e91e63 | toolbar background color
toolbarMaxHeight | number | 300 | maximum height of toolbar
toolbarMinHeight | number | 55 | minimum height of toolbar
leftItem | PropTypes.element | | toolbar left menu item
leftItemPress | func | | 
leftItem | PropTypes.element | | toolbar right item
rightItemPress | func | | 
