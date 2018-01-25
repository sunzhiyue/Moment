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
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Color from '../../res/Colors';

export default class Chatbar extends React.Component {
  render() {
    return (
      <View style={styles.char}>
        <View style={styles.userPhoto}>
          <Image
            source={{ uri: 'https://static1.hdwallpapers.net/wallpapers/2017/08/04/1135/thumb_multicolor-stripes.jpg' }}
            style={{ width: 30, height: 30, borderRadius: 15 }}
          />
        </View>
        <Text>asdasd</Text>
        <View style={styles.}>
          <Icon name="ios-radio-button-on" size={10} />
          <Text>正在聊天</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  userPhoto: {
    width: 26,
    height: 26,
    margin: 4,
  },
  char: {
    width: 160,
    height: 100,
    backgroundColor: Color.tintColor,
    margin: 6,
    borderRadius: 5,
  },
});
