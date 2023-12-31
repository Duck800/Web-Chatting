

// 存储好友信息数组
var friendsInfo = [
  {
    name: "登山花椒",
    avatar: './img/img-1.jpg',
    id: "SunHanYa",
    gender: "女",
    area: "上海",
    birth: "2003-09-29",
    costellation: "天秤座",
    sentence: "孙韩雅分身"
  },
  {
    name: "南梦之泽",
    avatar: './img/img-2.jpg',
    id: "HepC",
    gender: "男",
    area: "吉林 长春",
    birth: "2004-02-15",
    costellation: "水瓶座",
    sentence: "猜猜我是谁？"
  },
  {
    name: "Heelift",
    avatar: './img/img-3.jpg',
    id: "YHY1110",
    gender: "女",
    area: "河南 郑州",
    birth: "2003-11-10",
    costellation: "天蝎座",
    sentence: "室友室友！"
  },
  {
    name: "Nuyoah",
    avatar: './img/img-5.jpg',
    id: "LX2345",
    gender: "女",
    area: "甘肃 兰州",
    birth: "2003-09-30",
    costellation: "天秤座",
    sentence: "也是室友！"
  },
];

// 将好友信息数组存储到本地存储中
localStorage.setItem('friendsInfo', JSON.stringify(friendsInfo));
