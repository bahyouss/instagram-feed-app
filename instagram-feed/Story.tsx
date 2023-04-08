import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface StoryProps {
  avatar: ImageSourcePropType;
  name: string;
  isCreateStory?: boolean;
  isSeen: boolean;
}

const Story: React.FC<StoryProps> = ({ avatar, name, isCreateStory = false, isSeen }) => {
  return (
    <TouchableOpacity style={styles.user}>
      <View>
        <View
          style={[
            styles.avatarBorder,
            {
              borderColor: isCreateStory ? 'transparent' : isSeen ? 'rgb(0,0,0,.0975)' : '#c73191',
            },
          ]}
        >
          <Image source={avatar} style={styles.avatar} />
          {isCreateStory && (
            <View style={styles.plusIcon}>
              <Feather name="plus" size={14} color="#fff" />
            </View>
          )}
        </View>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  user: {
    width: 80,
    paddingHorizontal: 4,
  },
  avatarBorder: {
    width: 56,
    height: 56,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    marginBottom: 8
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  plusIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#318bfb',
    overflow: 'hidden',
  },
  name: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 14,
    color: '#4a4a4a',
    maxWidth: 75,
  },
});

export default Story;
