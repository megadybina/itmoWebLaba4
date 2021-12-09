const accModel = require("../models/accountModel");
const blogModel = require("../models/blogModel");

global.currentLogin = -1;

//GET /account/signin
exports.signin_get = (req,res) => {
    res.render("..\\views\\account\\signin");
}
//POST /account/signin
exports.signin_post = (req,res) => {
    if (!req.body) return res.sendStatus(400)

    var profileId = accModel.checkLogin(req.body.login, req.body.password);
    if(profileId!=-1){
        res.send("<script>alert('пользователь с таким логином уже существует');</script>");
    }
    else{
        var newUserId = accModel.addUser(req.body);
        currentLogin = newUserId;
        res.redirect(301, `/account/${currentLogin}`);
    }
}

//GET /account/login
exports.login_get = (req,res) => {
    res.render("..\\views\\account\\login");
}
//POST /account/login
exports.login_post = (req,res) => {
    if (!req.body) return res.sendStatus(400)

    var profileId = accModel.checkLogin(req.body.login, req.body.password);
    if(profileId==-1){
        res.send("<script>alert('котик с таким логином не найден');</script> ");
    }
    else if(profileId==-10){
        res.send("<script>alert('неверный пароль');</script>");
    }
    else{
        currentLogin = profileId;
        res.redirect(301, `/account/${currentLogin}`);
    }
}

//POST /account/logout
exports.logout_post = (req,res) => {
    currentLogin = -1
    res.redirect(301, `/`);
}

//GET /account/edit
exports.edit_get = (req,res) => {
    res.render("..\\views\\account\\edit", {
        user: accModel.getUser(currentLogin)
    });
}
//POST /account/edit
exports.edit_post = (req,res) => {
    accModel.updateUser(currentLogin, req.body);
    res.redirect(301, `/account/${currentLogin}`);
}

//GET /account/:id
exports.viewUserbyId_get = (req,res) => {
    res.render("..\\views\\account\\profile", {
        user: accModel.getUser(req.params.id),
        posts: blogModel.getUserPosts(req.params.id),
        id: req.params.id,
        currentLogin: currentLogin
    });
}

//GET /account/
exports.viewUserList_get = (req,res) => {
    res.render("..\\views\\account\\users", {
        userList: accModel.getUsers(),
        currentLogin: currentLogin
    });
}