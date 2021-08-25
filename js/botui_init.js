function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
      delay: 800,
      content: "Hi, 欢迎光临Wlog😊"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "我是wmz1024😄(不会和aki店大欺客"
      }).then(function() {
        botui.message.add({
          delay: 1100,
          content: "你也可以叫我wmz😋"
        }).then(function() {
          botui.action.button({
            delay: 1600,
            action: [{
              text: "我想知道更多故事!😃",
              value: "sure"
            }, {
              text: "好的，就这样吧，拜拜！🙄",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        botui.message.add({
          delay: 600,
          content: "🎉🎉🎉🎉🎉🎉"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        botui.message.add({
          delay: 600,
          content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
        })
      },
      secondpart = function() {
        botui.message.add({
          delay: 5000,
          content: "首先呢，很感谢您肯在这里驻足片刻❤️。Wlog是一个个人性质的博客，我会在这里发表各种各样的内容。"
        }).then(function() {
          botui.message.add({
            delay: 15000,
            content: "分类里的名字都是瞎编（雀食"
          }).then(function() {
            botui.message.add({
              delay: 5000,
              content: "分类也有一点我的恶趣味在。👀"
            }).then(function() {
              botui.message.add({
                delay: 8000,
                content: "分类反正不用管的"
              }).then(function() {
                botui.message.add({
                  delay: 5000,
                  content: "日记是个人日记哦，流水账一样的，不要看，很羞耻的。😶"
                }).then(function() {
                  botui.message.add({
                    delay: 4000,
                    content: "文章都有挺好的文章，通知没用（字数：你礼貌吗？"
                  }).then(function() {
                    botui.action.button({
                      delay: 1100,
                      action: [{
                        text: "为什么叫Wlog？🤔",
                        value: "why-mashiro"
                      }]
                    }).then(function(a) {
                      thirdpart()
                    })
                  })
                })
              })
            })
          })
        })
      },
      thirdpart = function() {
        botui.message.add({
          delay: 1e3,
          content: "诶？wmz1024是我的名字啊😏，Wlog，emm🤔，大概是因为我在缩短博客名字吧（wlog=wmz1024'weblog。"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "😲，那英文名为什么叫wmz呢？",
              value: "why-cat"
            }]
          }).then(function(a) {
            fourthpart()
          })
        })
      },
      fourthpart = function() {
        botui.message.add({
          delay: 3000,
          content: "只是名字拼音缩写而已了 "
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "灵感来自于刀剑神域~"
          }).then(function() {
            botui.action.button({
              delay: 1500,
              action: [{
                text: "方便透露一下真名吗？👀",
                value: "why-domain"
              }]
            }).then(function(a) {
              fifthpart()
            })
          })
        })
      },
      fifthpart = function() {
        botui.message.add({
          delay: 5000,
          content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "只是一介无名小卒而已^_^"
          })
        })
      }
  }