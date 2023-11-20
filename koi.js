/*
    Sc Lumine-MD V2.0
    My Contact 0895-0808-2845
    
    Notes:
    BUKAN BUAT DIJUAL LAGI !!!
   
*/

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://chat.whatsapp.com/CjxuywuwOglE7p2tFBqdH3'
global.ig = '@neekoi_'
global.thumb = fs.readFileSync("./datakoi/image/thumb.jpg")
global.email = 'palsu8877@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Koi'
global.domain = 'https://panel.qyuunee.my.id'
global.apikey2 = '' // Isi Apikey Pltc Lu
global.capikey2 = '' // Isi Apikey Plta Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.owner = ['6289508082845']

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.botname = 'Lumine-MD'
global.packname = 'Lumine-MD'
global.author = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: QyuuNee\nBot: 0895-3253-44177`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Lumine-MD'
global.sp = '⭔'
global.anticall = true

global.mess = {
    success: '🤗 Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 10k Permanen',
}

global.limitawal = {
    premium: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})