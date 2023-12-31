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
    },
    {
        password: "1",
        name: "test",
        avatar: './img/img-4.jpg',
        id: "未知",
        gender: "未知",
        area: "未知",
        birth: "未知",
        costellation: "未知",
        sentence: "未知",
    }
];

// 将用户表存储到本地存储中
localStorage.setItem('userTable', JSON.stringify(userTable));