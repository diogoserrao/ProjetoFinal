exports.getAllPosts = (req, res) => {
    User.findAll().then(posts => {
        res.send(posts);
    });
};

exports.deletePost = (req, res) =>{

};

exports.createPost = (req, res) =>{

};

exports.updatePost = (req, res) =>{

};