const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Comment number 01',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Comment number 02',
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: 'Comment number 03',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Comment number 04',
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: 'Comment number 01',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Comment number 02',
        user_id: 2,
        post_id: 2,
    },
    {
        comment_text: 'Comment number 03',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Comment number 04',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'Comment number 01',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Comment number 02',
        user_id: 3,
        post_id: 2,
    },
    {
        comment_text: 'Comment number 03',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'Comment number 04',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'Comment number 01',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'Comment number 02',
        user_id: 4,
        post_id: 2,
    },
    {
        comment_text: 'Comment number 03',
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: 'Comment number 04',
        user_id: 4,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;