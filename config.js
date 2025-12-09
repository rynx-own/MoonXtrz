global.owner = ['66961417114'] // wajib di isi tidak boleh kosong
global.mods  = ['66961417114'] // wajib di isi tidak boleh kosong
global.prems = ['66961417114'] // wajib di isi tidak boleh kosong
global.nameowner = 'Mas Kumis' // wajib di isi tidak boleh kosong
global.numberowner = '66961417114' // wajib di isi tidak boleh kosong
global.mail = 'ryukoputrategar1507@gmail.com' // wajib di isi tidak boleh kosong
global.gc = 'https://tiktok.com/@ryukoputra' // wajib di isi tidak boleh kosong
global.instagram = 'https://instagram.com/s4tuurnus' // wajib di isi tidak boleh kosong
global.wm = '© MoonAiChat' // isi nama bot atau nama kalian
global.wait = '_*Tunggu sedang di proses...*_' // ini pesan simulasi loading
global.eror = '_*Servernya Error jing*_' // ini pesan saat terjadi kesalahan
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*' // ini pesan simulasi saat loading pembuatan sticker
global.packname = 'Made With' // watermark stikcker packname
global.author = 'Bot bang kumis' // watermark stikcker author
global.maxwarn = '3' // Peringatan maksimum Warn

global.autobio = true // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = true // Set true/false untuk anti spam (default: false)
global.gcspam = true // Set true/false untuk menutup grup ketika spam (default: false)
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'o5Eh7ijV'
// Daftar terlebih dahulu https://api.botcahx.eu.org
    
// AKSESKEY INI DI ISI JIKA DIPERLUKAN (e.g suno ai (ai music ) & fitur prem lainnya//
global.aksesKey = 'o5Eh7ijV'
// Daftar terlebih dahulu https://api.botcahx.eu.org


// Tidak boleh diganti atau di ubah
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//Tidak boleh diganti atau di ubah
global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
