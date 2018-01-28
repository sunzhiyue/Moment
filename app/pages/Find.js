/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/01/21        Sun Zhiyue
 */

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';
import { View, Text } from 'react-native';
// import { TabNavigator } from 'react-navigation';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

// import NearbyScreen from './Nearby';
// import NewScreen from './New';

class FindScreen extends React.Component {
  static navigationOptions = {
    header: null,
    headerRight: <Icon.Button name="ios-search-outline" backgroundColor="#fff" color="#000" />,
    tabBarLabel: '发现',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'ios-compass' : 'ios-compass-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      // <View>
      //   <Header
      //     backgroundColor="#fff"
      //     centerComponent={{ text: '发现', style: { color: '#000' } }}
      //   />
      // </View>
      <ScrollableTabView
        scrollWithoutAnimation
        style={{ marginVertical: 10 }}
        locked={false}
        tabBarUnderlineStyle={{ backgroundColor: '#000' }}
        initialPage={1}
        renderTabBar={() => <DefaultTabBar />}
      >
        <View tabLabel="最新"><Text>2</Text></View>
        <Text tabLabel="附近">favorite</Text>
      </ScrollableTabView>
    );
  }
}


export default FindScreen;
