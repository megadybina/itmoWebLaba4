
//GET /error
exports.pageNotFound = (req,res) => {
    res.render("..\\views\\error");
}


//GET /forbidden
exports.forbiddenAction = (req,res) => {
    res.render("..\\views\\forbidden");
}
