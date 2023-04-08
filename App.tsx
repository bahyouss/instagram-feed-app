import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Stories from './instagram-feed/Stories';
import Constants from 'expo-constants';
import data from './instagram-feed/data';
import Article from './instagram-feed/Article';

const INSTAGRAM_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png?20160616034027';

export default function App() {
  function renderStoriesItem({ item, index }: { item: typeof data.articles[0]; index: number }) {
    if (index === 0) {
      return (
        <>
          <View style={styles.stories}>
            <Stories stories={data.stories} profile={data.profile} />
          </View>
          <Article item={item}/>
        </>
      );
    } else {
      return <Article item={item}/>
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="camera" size={24} />
        </TouchableOpacity>
        <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />
        <TouchableOpacity>
          <Feather name="send" size={24} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data.articles}
        renderItem={renderStoriesItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 44,
  },
  logo: {
    flex: 1,
    height: 30,
    resizeMode: 'contain',
  },
  stories: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    height: 104,
    padding: 10,
    backgroundColor: '#fafafa',
  },
});


