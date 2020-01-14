const commentController = require('../controllers/commentController');

module.exports = (app) => {
    app.route('/post/:post_id/comments')
        .get(commentController.list_all_comments)
        .post(commentController.create_a_comment);

    app.route('/comment/:comment_id')
        .get(commentController.get_a_comment)
        .put(commentController.update_a_comment)
        .delete(commentController.delete_a_comment);
};