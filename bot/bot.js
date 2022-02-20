const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv')
dotenv.config()

const token = process.env.TOKEN

const bot = new TelegramBot(token, {polling: true})


// start message response
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id 
    
    
    
    bot.sendMessage(chatId, "سلام من قراره بهت یادآوری کنم زیاااد!")
})