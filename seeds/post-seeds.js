const { Post } = require('../models');

const postdata = [
    {
        title: "Title for post 01",
        post_text: "Here goes the text for post 01",
        user_id: 1
    },
    {
        title: "Title for post 01",
        post_text: "Here goes the text for post 01",
        user_id: 2
    },
    {
        title: "Title for post 01",
        post_text: "Here goes the text for post 01",
        user_id: 3
    },
    {
        title: "Title for post 01",
        post_text: "Here goes the text for post 01",
        user_id: 4
    },
    {
        title: "Title for post 02",
        post_text: "Here goes the text for post 01",
        user_id: 1
    },
    {
        title: "Title for post 02",
        post_text: "Here goes the text for post 01",
        user_id: 2
    },
    {
        title: "Title for post 02",
        post_text: "Here goes the text for post 01",
        user_id: 3
    },
    {
        title: "Title for post 02",
        post_text: "Here goes the text for post 01",
        user_id: 4
    },
    {
        title: "Title for post 03",
        post_text: "Here goes the text for post 01",
        user_id: 1
    },
    {
        title: "Title for post 03",
        post_text: "Here goes the text for post 01",
        user_id: 2
    },
    {
        title: "Title for post 03",
        post_text: "Here goes the text for post 01",
        user_id: 3
    },
    {
        title: "Title for post 03",
        post_text: "Here goes the text for post 01",
        user_id: 4
    },
    {
        title: "Title for post 04",
        post_text: "Here goes the text for post 01",
        user_id: 1
    },
    {
        title: "Title for post 04",
        post_text: "Here goes the text for post 01",
        user_id: 2
    },
    {
        title: "Title for post 04",
        post_text: "Here goes the text for post 01",
        user_id: 3
    },
    {
        title: "Title for post 04",
        post_text: "Here goes the text for post 01",
        user_id: 4
    },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;