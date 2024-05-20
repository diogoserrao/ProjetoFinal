exports.getAllComments = (req, res) => {
    User.findAll().then(comments => {
        res.send(comments);
    });
};

exports.deleteComment = (req, res) =>{

};

exports.createComment = (req, res) =>{

};

exports.updateComment = (req, res) =>{

};