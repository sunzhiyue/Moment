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
 *     Initial: 2018/01/20        Sun Zhiyue
 */

import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Color from '../res/Colors';
import Chatbar from '../components/Home/Chatbar';
import Recommend from '../components/Home/Recommended';

class FindScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View
        style={styles.viewPager}
      >
        <Header
          backgroundColor="#fff"
          centerComponent={{ text: '首页', style: { color: '#000' } }}
        />
        <View>
          <Text style={styles.room}>推荐聊天室</Text>
        </View>
        <ScrollView
          horizontal
          style={styles.scroll}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.addchat}>
            <Icon name="ios-add-circle-outline" size={50} color={Color.buttonColor} />
            <Text>创建聊天</Text>
          </View>
          <Chatbar />
          <Chatbar />
          <Chatbar />
        </ScrollView>
        <ScrollView>
          <Recommend />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scroll: {
    height: 120,
  },
  room: {
    margin: 10,
  },
  addchat: {
    margin: 6,
    height: 100,
    width: 80,
    backgroundColor: Color.tintColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FindScreen;
