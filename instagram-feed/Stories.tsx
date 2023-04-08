import React from 'react';
import { FlatList } from 'react-native';
import Story from './Story';
import { ImageSourcePropType } from 'react-native';

interface StoriesProps {
  stories: Array<{
    id: number;
    avatar: ImageSourcePropType;
    name: string;
    isSeen: boolean;
  }>;
  profile: {
    avatar: ImageSourcePropType;
  };
}

const Stories: React.FC<StoriesProps> = ({ stories, profile }) => {
  const renderItem = ({ item, index }: { item: typeof stories[number]; index: number }) => {
    if (index === 0) {
      return (
        <>
          <Story name="Youssouf bah" avatar={profile.avatar} isCreateStory={true} isSeen={false} />
          <Story name={item.name} avatar={item.avatar} isSeen={item.isSeen} />
        </>
      );
    } else {
      return <Story name={item.name} avatar={item.avatar} isSeen={item.isSeen} />;
    }
  };

  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
    />
  );
};

export default Stories;
