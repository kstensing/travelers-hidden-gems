const { Post, Bookmark, Comment, User } = require('../models')

const bookmarkData = [
  {
    user_id: 1,
    post_id: 4
  },
  {
    user_id: 2,
    post_id: 1
  },
  {
    user_id: 2,
    post_id: 2
  },
  {
    user_id: 2,
    post_id: 3
  },
  {
    user_id: 3,
    post_id: 1
  },
  {
    user_id: 3,
    post_id: 2
  },
  {
    user_id: 4,
    post_id: 1
  }
];

const seedBookmarks = async () => {
  for await (const bookmark of bookmarkData) {
    await Post.bkmrk(bookmark, { Bookmark, Comment, User })
  }
};

// I don't think something like this would work, using Post method bkmrk
// const seedBookmarks = () => Post.bkmrk(bookmarkData, { Bookmark })

// this works to seed
// const seedBookmarks = () => Bookmark.bulkCreate(bookmarkData)

module.exports = seedBookmarks;