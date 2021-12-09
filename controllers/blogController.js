const accModel = require("../models/accountModel");
const blogModel = require("../models/blogModel");

//GET /blog/post/newpost
exports.blog_newPost_get = (req,res) => {
    if(currentLogin==-1){res.redirect(301,"/account/login");}
    else{
        res.render("..\\views\\blog\\newpost", {
            currentLogin: currentLogin
        });
    }
    
}
//POST /blog/post/newpost
exports.blog_newPost_post = (req,res) => {
    if (!req.body) return res.sendStatus(400)

    var newPostId = blogModel.addPost(req.body, accModel.getUser(currentLogin), currentLogin);
    res.redirect(301, `/blog/post/${newPostId}`);
}

//POST /blog/post/:id/delete
exports.deletePostbyID_post = (req,res) => {
    var post = blogModel.getPostById(req.params.id);
    if(post.userId==currentLogin){
        blogModel.deletePost(req.params.id);
        res.redirect(301,"/");
    }
    else if(currentLogin==-1){
        res.redirect(301,"/account/login");
    }
    else{
        res.redirect(301,"/forbidden");
    }
    
}

//GET /blog/post/:id/edit
exports.editPostbyId_get = (req,res) => {
    var post = blogModel.getPostById(req.params.id);
    if(post.userId==currentLogin){
        res.render("..\\views\\blog\\edit", {
            post: blogModel.getPostById(req.params.id),
            postId: req.params.id,
            currentLogin: currentLogin
        });
    }
    else if(currentLogin==-1){
        res.redirect(301,"/account/login");
    }
    else{
        res.redirect(301,"/forbidden");
    }
    
}
//POST /blog/post/:id/edit
exports.editPostbyId_post = (req,res) => {
    blogModel.updatePost(req.body, req.params.id);
    res.redirect(301, `/blog/post/${req.params.id}`);
}

//GET /blog/post/:id
exports.viewPostbyId_get = (req,res) => {
    var post = blogModel.getPostById(req.params.id);
    if (post == -1){res.redirect(301,"/error");}
    else{
        res.render("..\\views\\blog\\post", {
            post: blogModel.getPostById(req.params.id),
            postId: req.params.id,
            currentLogin: currentLogin
         });
    }
}
//GET /blog/
exports.blogViewIndex_get = (req,res) => {
    res.render("..\\views\\blog\\index", {
        posts: blogModel.getAllPosts(),
        currentLogin: currentLogin
    });
}