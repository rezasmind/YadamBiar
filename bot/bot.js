const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv')
dotenv.config()

const token = process.env.TOKEN

const bot = new TelegramBot(token, {polling: true})

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id // in bakhsh payam karbar ro moshakhas mikone
    const resp = match[1]   // in bakhsh payam karbar ro moshakhas mikone
    
    
    
    bot.sendMessage(chatId, resp)
})