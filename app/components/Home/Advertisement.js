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
 *     Initial: 2018/01/29        Sun Zhiyue
 */
import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import Color from '../../res/Colors';
import Dimensions from '../../res/Styles';

export default class Advertisement extends React.Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={[
            {
              key: 1,
              name: 'haha',
              uri: 'https://gratisography.com/pictures/335_1.jpg',
            },
            {
              key: 2,
              name: 'www',
              uri: 'https://images.unsplash.com/photo-1484795819573-86ae049cb815?ixlib=rb-0.3.5&s=32d38547b367c01215ee98eadd9bb0eb&auto=format&fit=crop&w=1050&q=80',
            },
            {
              key: 3,
              name: 'haha',
              uri: 'https://static1.hdwallpapers.net/wallpapers/2017/08/04/1135/thumb_multicolor-stripes.jpg',
            },
            {
              key: 4,
              name: 'www',
              uri: 'https://gratisography.com/pictures/395_1.jpg',
            },
            {
              key: 5,
              name: 'haha',
              uri: 'https://gratisography.com/pictures/423_1.jpg',
            },
            {
              key: 6,
              name: 'www',
              uri: 'https://gratisography.com/pictures/447_1.jpg',
            },
          ]}
          renderItem={({ item }) => (
            <View style={styles.card} >
              <Image
                source={{ uri: item.uri }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  margin: 20,
                }}
              />
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.tintColor,
    height: Dimensions.Height(450),
    borderBottomWidth: 1,
    borderColor: Color.fontColor,
  },
});
