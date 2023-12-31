let chatData = {
  "登山花椒": [
    {
      sender: "八百斤鸭",
      message: "孙韩雅",
      timestamp: "2023-12-29T10:00:00Z"
    },
    {
      sender: "八百斤鸭",
      message: "你还在写代码吗",
      timestamp: "2023-12-29T10:00:56Z"
    },
    {
      sender: "登山花椒",
      message: "对啊，刚写了个聊天页面",
      timestamp: "2023-12-29T10:01:00Z"
    },
    {
      sender: "八百斤鸭",
      message: "啥样的",
      timestamp: "2023-12-29T10:02:00Z"
    },
    {
      sender: "登山花椒",
      message: './img/UIDesign.png',
      timestamp: "2023-12-29T10:03:00Z"
    },
    {
      sender: "登山花椒",
      message: "这是设计图",
      timestamp: "2023-12-29T10:03:50Z"
    },
    
  ],
  "南梦之泽": [
    {
      sender: "八百斤鸭",
      message: "吃饭去？",
      timestamp: "2023-12-28T15:30:00Z"
    },
    {
      sender: "南梦之泽",
      message: "疯狂星期四，去KFC？",
      timestamp: "2023-12-28T15:31:00Z"
    },
    // 可以继续添加更多的消息对象
  ],
  // 可以继续添加更多的对话记录
};

// 将聊天记录表存储到本地存储中
localStorage.setItem("chatData", JSON.stringify(chatData));