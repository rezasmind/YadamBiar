const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv')
dotenv.config()

const token = process.env.TOKEN

const bot = new TelegramBot(token, {polling: true})


// start message response
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id 
    bot.sendMessage(chatId, "سلام من قراره بهت یادآوری کنم زیاااد!" , {
        "reply_markup": {
            "keyboard": [["یادم بیار"]],
        }
    })

    });


// yadambiar message response
bot.on("message", (msg,match) => {
    const chatId = msg.chat.id
    var yadambiar = "یادم بیار"
    var char = "دقیقه"
    if (msg.text.toString().includes(yadambiar)) {
        bot.sendMessage(chatId, "خب زمانی که  بهت یاد آوری کنم همراه با پیامشو اینجوری واسم بفرست:  ")
        bot.sendMessage(chatId, "n روز | x ساعت | y دقیقه | پیام شما")
        setTimeout(() => {
            bot.sendMessage(chatId, "n روز | x ساعت | y دقیقه | پیام شما")
        }, 1000)
        setTimeout(() => {
            bot.sendMessage(chatId, "دقیقا متن بالارو کپی کنید و عدد هارو جای گذاری کنید!")
            bot.sendMessage(chatId, "هرکدوم رو که نمیخواید بجاش عدد 0 بزارید")
        }, 1000)

    }

    if (msg.text.toString().includes(char)) {
        bot.sendPhoto(msg.chat.id,"./gif.gif",{caption : "پیام دریافت شد ارباب حتما یادم میمونه و بهتون یادآوری میکنم!"} );
        function remind() {
            const day = msg.text.split('|')[0]
            const dayNum = day.split(' ')[0]
            const hour = msg.text.split('|')[1]
            const hourNum = hour.split(' ')[1]
            const min = msg.text.split('|')[2]
            const minNum = min.split(' ')[1]
            const message = msg.text.split('|')[3]
            function getInterval(day,hour,min) {
                let interval = 0
                interval = interval + (day * 24 * 60 * 60 * 1000)
                interval = interval + (hour * 60 * 60 * 1000)
                interval = interval + (min * 60 * 1000)
                return interval
            }
        
            setTimeout(() => {
                bot.sendMessage(chatId, message)
            }, getInterval(dayNum,hourNum,minNum))
        }

        setTimeout(() => {
            remind()
            }, 2000)

    }


})

