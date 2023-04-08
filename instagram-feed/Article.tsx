import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import data from './data';

interface ArticleProps {
    item: {
        id: number;
        avatar: ImageSourcePropType;
        name: string;
        image: ImageSourcePropType;
        likes: number;
        commentCount: number;
        comments: string;
      };
}


type ArticleProperty = 'likes' | 'commentCount'; // Add any other property here in the future

const getArticleProperty = (id: number, property: ArticleProperty): number | null => {
    const article = data.articles.find((article) => article.id === id);
    return article ? article[property] : null;
};

const Article: React.FC<ArticleProps> = ({ item }) => {

  const [likes, setLikes] = useState<number | null>(getArticleProperty(item.id, "likes"));
  const [commentCount, setCommentCount] = useState<number | null>(getArticleProperty(item.id, "commentCount"));
  const [comment, setComment] = useState('');
  const [isLiked, setIsliked] = useState(false);
  
  // Find the article object in the data.articles array using the desired ID
  const article = data.articles.find((article) => article.id === item.id);


  return (
    <View style={styles.article}>
      <View style={styles.header}>
        <View style={styles.user}>
          <TouchableOpacity>
            <Image source={item.avatar} style={styles.avatar} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text numberOfLines={1} style={styles.name}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={16} />
        </TouchableOpacity>
      </View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.action}>
        <View style={styles.actionLeft}>
          <TouchableOpacity style={styles.actionButton} 
            onPress={() => {
                setIsliked(!isLiked);
                if(isLiked) {
                    setLikes(prevLikes => prevLikes - 1);
                }else {
                    setLikes(prevLikes => prevLikes + 1)
                }
            }}
          >
            
            <Feather name="heart" size={24} color={isLiked ? "red" : "#000"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Feather name="bookmark" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.likes}>{likes} likes</Text>
        <Text style={styles.commentCount}>view all {commentCount} comments</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 10,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  actionLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  info: {
    paddingLeft: 15,
  },
  likes: {
    fontWeight: 'bold',
    paddingBottom: 5,
    marginTop: 5
  },
  commentCount: {
    paddingBottom: 5,
  },
});

export default Article;

  