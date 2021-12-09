var posts = [];

posts.push({
    userId: 0,
    ava:"https://c.tenor.com/wvDyYLTH4vEAAAAC/zxc-cat.gif",
    postTitle:"украл сыр в столовке итмо",
    postText:"почти попавсь, но в итоге сбежал с добычей, не раскрыв свою личность",
    postPhoto:"https://i0.wp.com/cooperpetcare.com/wp-content/uploads/2021/04/can-cat-eat-cheese.jpg?fit=800%2C534&ssl=1"
});

posts.push({
        userId: 0,
        ava:"https://c.tenor.com/wvDyYLTH4vEAAAAC/zxc-cat.gif",
        postTitle:"рецензия на сыр из столовки итмо",
        postText:"сыр оказался весьма неплох, тонкий сырный вкус, плотный, приятный, но чегото не хватает не знаю чего<br> Оценка:7/10",
        postPhoto:"https://thediscerningcat.com/wp-content/uploads/2021/08/tabby-cat-with-wine-and-cheese.jpg"
    });

posts.push({
        userId: 1,
        ava:"https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg",
        postTitle:"напрогал себе покушать на питоне",
        postText:"электронный корм невкусный",
        postPhoto:"https://sun9-8.userapi.com/impf/qX70TImxjr-_rCy3Xyb8dXfrlgUIx663zGjiGg/eZYLYraLusU.jpg?size=545x410&quality=96&sign=1908c03e63710dc73511333dfdf7c716&type=album"
    });

posts.push({
        userId: 2,
        ava:"https://cdnimg.rg.ru/img/content/190/36/72/kinopoisk.ru-A-Street-Cat-Named-Bob-2889441_d_850.jpg",
        postTitle:"купила новое платье",
        postText:"по скидке на алике",
        postPhoto:"https://thumbs.dreamstime.com/b/кот-в-зе-еном-frilling-п-атье-на-бе-ой-пре-посы-ке-36212403.jpg"
    });

posts.push({
        userId: 2,
        ava:"https://cdnimg.rg.ru/img/content/190/36/72/kinopoisk.ru-A-Street-Cat-Named-Bob-2889441_d_850.jpg",
        postTitle:"платье с алика село",
        postText:"не стирайте в горячей воде платья с алика",
        postPhoto:"https://www.meme-arsenal.com/memes/4808db7e65492b7233abf5fb753ab0a4.jpg"
    });

posts.push({
        userId: 3,
        ava:"https://aif-s3.aif.ru/images/025/372/d65c18c42f601f29412b6f690c60e061.jpg",
        postTitle:"gaming",
        postText:"опять трон снесли за 15 минут блин",
        postPhoto:"https://img-9gag-fun.9cache.com/photo/aB2G39P_460s.jpg"
    });
posts.push({
        userId: 4,
        ava:"https://pics.botanichka.ru/wp-content/uploads/2019/11/chto-nam-hochet-skazat-01.jpg",
        postTitle:"завтра концерт",
        postText:"всех жду",
        postPhoto:"https://www.meme-arsenal.com/memes/3e82fcc5c263e9de85eadeac491e2497.jpg"
    });
posts.push({
        userId: 5,
        ava:"https://oir.mobi/uploads/posts/2021-04/1619707690_52-oir_mobi-p-belii-kot-s-raznimi-glazami-zhivotnie-kras-53.jpg",
        postTitle:"помывсь",
        postText:"иду смотрети аниме",
        postPhoto:"https://www.meme-arsenal.com/memes/33c8eb7a82f26cbf9db8b9200328f9a8.jpg"
    });
exports.getAllPosts = () => {
    return posts;
}
exports.getPostById = (id) => {
    if(posts[id] != null){
        return posts[id]
    }
    else{
        return -1;
     }  
}
exports.addPost = (post, postAuthor, postAuthorId) => {
    let newPostId = Object.keys(posts).length;
    posts[newPostId] = {userId: postAuthorId, ava: postAuthor.ava, postTitle: post.postTitle, postText: post.postText, postPhoto: post.postPhoto };
    return newPostId;
}

exports.updatePost = (updatedPost, postId) => {
    posts[postId] = {userId: posts[postId].userId, ava: posts[postId].ava, postTitle: updatedPost.postTitle, postText: updatedPost.postText, postPhoto: updatedPost.postPhoto };
}

exports.deletePost = (postId) => {
    posts.splice(postId, 1);
}

exports.getUserPosts = (userId) => {
    let userPosts = [];
    for(var i = 0; i<posts.length; i++){
        if (userId==posts[i].userId){
            posts[i]["postId"] = i;
            userPosts.push(posts[i]);
        }
    }
    return userPosts;
}
