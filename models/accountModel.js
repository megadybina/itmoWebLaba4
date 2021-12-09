var UserList =[];

UserList[0] = { name: "Кот Котофей", ava:"https://c.tenor.com/wvDyYLTH4vEAAAAC/zxc-cat.gif", bday:"2017-08-27", job:"бездельник" };
UserList[1] = { name: "Кот Габофей", ava:"https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg", bday:"2016-02-25", job:"погромист"};
UserList[2] = { name: "Кот Элинфей", ava:"https://cdnimg.rg.ru/img/content/190/36/72/kinopoisk.ru-A-Street-Cat-Named-Bob-2889441_d_850.jpg", bday:"2017-12-10", job:"стилист"};
UserList[3] = { name: "Кот Дадофей", ava:"https://aif-s3.aif.ru/images/025/372/d65c18c42f601f29412b6f690c60e061.jpg", bday:"2018-01-11", job:"геймер"};
UserList[4] = { name: "Кот Вовофей", ava:"https://pics.botanichka.ru/wp-content/uploads/2019/11/chto-nam-hochet-skazat-01.jpg", bday:"2017-05-05", job:"рок звезда"};
UserList[5] = { name: "Кот Стасофей", ava:"https://oir.mobi/uploads/posts/2021-04/1619707690_52-oir_mobi-p-belii-kot-s-raznimi-glazami-zhivotnie-kras-53.jpg", bday:"2018-02-18", job:"хухдожник"};


exports.getUsers = () => {
    return UserList;
}

exports.getUser = (id) => {
    if(UserList[id] != null){
        return UserList[id]
    }
    else{
        return -1;
     }     
}
exports.updateUser = (id, updatedInfo) => {
    UserList[id] = {name: updatedInfo.name, ava: updatedInfo.ava, bday: updatedInfo.bday, job: updatedInfo.job };
}

exports.addUser = (newUser) => {
    var newUserId = Object.keys(UserList).length;
    UserList[newUserId] = {name: newUser.name, ava: newUser.ava, bday: newUser.bday, job: newUser.job };
    UserCreds[newUserId] = {login:  newUser.login, password:  newUser.password};
    return newUserId;
}

var UserCreds = {}; // данные для входа

UserCreds[0] = {login: "0", password: "0"};
UserCreds[1] = {login: "1", password: "1"};
UserCreds[2] = {login: "2", password: "2"};
UserCreds[3] = {login: "3", password: "3"};
UserCreds[4] = {login: "4", password: "4"};
UserCreds[5] = {login: "5", password: "5"};

exports.checkLogin = (recievedLogin, recievedPassword) => {
    for(var i = 0; i<Object.keys(UserCreds).length; i++){
        if (UserCreds[i].login == recievedLogin){
            if (UserCreds[i].password==recievedPassword){
                return i;
            }
            else{
                return -10;  // неверный пароль 
            }
        }
    }
    return -1; // user с таким логином не найден
}

exports.deleteUser = (userId) => {
    for(var i = 0; i<Object.keys(UserCreds).length; i++){
        if (userId==UserCreds[i].login){
            UserCreds.delete(userId);
        }
    }
}

exports.editUser = (userId, editedUserData) => {
    UserList[userId] = editedUserData;
}