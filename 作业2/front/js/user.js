// 创建一个用户表
var userTable = [
    {
        password: "0929Sunhanya",
        name: "八百斤鸭",
        avatar: './img/user.jpg',
        id: "Duck_800",
        gender: "女",
        area: "江苏 南通",
        birth: "2003-09-29",
        costellation: "天秤座",
        sentence: "一枚脆弱的软工女大学生。",

        friends:[
            {
                name:"登山花椒",
                
            }
        ]
    }
];

// 将用户表存储到本地存储中
localStorage.setItem('userTable', JSON.stringify(userTable));