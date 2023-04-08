const initialData = {
    profile: {
        avatar: require('../assets/instagram-feed-images/avatar-feed1.png'),
    },
    stories: [
        {
            id: 1,
            avatar: require('../assets/instagram-feed-images/avatar-feed1.png'),
            name: 'John Doe',
            isSeen: false
        },
        {
            id: 2,
            avatar: require('../assets/instagram-feed-images/avatar-feed2.png'),
            name: 'Jane Smith',
            isSeen: true
        },
        {
            id: 3,
            avatar: require('../assets/instagram-feed-images/avatar-feed3.png'),
            name: 'Alice Brown',
            isSeen: false
        },
        {
            id: 4,
            avatar: require('../assets/instagram-feed-images/avatar-feed4.png'),
            name: 'Bob Green',
            isSeen: false
        }
    ],
    articles: [
      {
        id: 1,
        avatar: require('../assets/instagram-feed-images/avatar-feed1.png'),
        name: 'John Doe',
        image: require('../assets/instagram-feed-images/image1.png'),
        likes: 100,
        commentCount: 20,
        comments: 'View all 0 comments',
      },
      {
        id: 2,
        avatar: require('../assets/instagram-feed-images/avatar-feed2.png'),
        name: 'Jane Smith',
        image: require('../assets/instagram-feed-images/image2.png'),
        likes: 250,
        commentCount: 10,
        comments: 'View all 0 comments',
      },
      {
        id: 3,
        avatar: require('../assets/instagram-feed-images/avatar-feed3.png'),
        name: 'Alice Brown',
        image: require('../assets/instagram-feed-images/image3.png'),
        likes: 75,
        commentCount: 5,
        comments: 'View all 0 comments',
      },
      {
        id: 4,
        avatar: require('../assets/instagram-feed-images/avatar-feed4.png'),
        name: 'Bob Green',
        image: require('../assets/instagram-feed-images/image4.png'),
        likes: 120,
        commentCount: 30,
        comments: 'View all 0 comments',
      },
    ],
  };

  const updatedArticles = initialData.articles.map(article => {
    return {
      ...article,
      comments: `View all ${article.commentCount} comments`,
    };
  });
  
  const data = {
    ...initialData,
    articles: updatedArticles,
  };
  

  export default data;
  