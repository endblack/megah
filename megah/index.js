const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   ChatModification,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const speed = require('performance-now')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, mail2, getGroupAdmins, mail, getRandom, banner, start, info, success, close } = require('./lib/functions')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:My dono🥰\n' 
            + 'ORG: ❲████▒▒❳ 90% MaxWorld;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=559184035474:+55 91 8403-5474\n' 
            + 'END:VCARD' 
prefix = '!'
blocked = []   
limitawal = 10
memberlimit = 1
apiz = `vrMSPgXFfqY87hnTJ87arA9N2LN`
apix = `a15d96cb18d0c28d`
cr = '_Olá, por que você não dá uma lida em_ *!info* ?'

/******* max gostoso**********/
const ownerNumber = ["559184035474@s.whatsapp.net","559192136241@s.whatsapp.net","5511988985726@s.whatsapp.net","5514996541467@s.whatsap.net"] 
/************************************/
/*********** DATABASE LEVEL********/
ahb = 3 
ahc = 5 				
/*********** DATABASE LEVEL********/
       
/*********** LOAD FILE ***********/
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const antifake = JSON.parse(fs.readFileSync('./database/json/antifake.json'))
const porno = JSON.parse(fs.readFileSync('./database/bot/porno.json'))
const adulto = JSON.parse(fs.readFileSync('./database/bot/adulto.json'))
const { BarBarApi, ZeksApi, TechApi, TobzApi, ItsApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json')) 
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antisticker = JSON.parse(fs.readFileSync('./database/json/antisticker.json'))
const antilinkyt = JSON.parse(fs.readFileSync('./database/json/antilinkyt.json'))
const antilinkex = JSON.parse(fs.readFileSync('./database/json/antilinkex.json'))

/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
        const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/bot/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

async function connectToWhatsApp() {
	const client = new WAConnection()
	client.autoReconnect = ReconnectMode.onConnectionLost
	client.logger.level = 'warn'
	client.connectOptions.maxRetries = 10
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'),color('∆','red'),color(']','white'),color('Leia o qr code','white'),color('AGORA','red'),color('E um recado:','white'),color('Max é foda','yellow'))
	})
	client.on('connecting', () => {
		console.log(color('Conectando...','cyan'))
	}) 
	
	client.on('chats-received', async({ hasNewChats }) => {
        console.log(color(`você tem ${client.chats.length} chats novos disponíveis: ${hasNewChats}`,'cyan'))
})
    
    client.on('contacts-received', () => {
        console.log(color('você tem ' + Object.keys(client.contacts).length + ' contatos em grupos','cyan'))
    })

	
	client.on('open', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(color('Sessão web aberta','yellow'))
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();
console.log(color('você está conectado!','yellow'))
     
     client.on('close', () => {
     rc = 'A conexão caiu...'
     console.log(color(rc,'red'))
     })

client.on('group-participants-update', async (anu) => {
  const mdata1 = await client.groupMetadata(anu.jid)
  console.log(anu)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata1.id, 'Corra numero fake safado seu ban esta próximo, em 5 segundos!', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata1.id, [num])
					}, 5000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá🥰 @${num.split('@')[0]}\ bem vindo/a ao grupo *${mdata.subject}* por favor não seja um ghost 😳`
				let buff = await getBuffer(ppimg)
				buffer = fs.readFileSync('./som/bv.mp3')
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(mdata.id, buffer, MessageType.audio, {ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				gh = ['tchau sua gostosa','nossa puta saiu 😔','abriu uma vaga no grupo graças ao','O da pa nois saiu 😔','tchau']
				af = gh[Math.floor(Math.random() * gh.length)]
				teks = ``+af +` @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				buffer = fs.readFileSync('./som/tchau.mp3')
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		        client.sendMessage(mdata.id, buffer, MessageType.audio, {ptt:true})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	client.on('CB:action,,battery', json => {
        const batteryLevelStr = json[2][0][1].value
        const batterylevel = parseInt(batteryLevelStr)
        console.log(color('battery level: ' + batterylevel,'cyan'))
        client.sendMessage('559184035474@s.whatsapp.net', `Bateria em ${batterylevel}%`, MessageType.text)
    })
    
	client.on("CB:action,,call", async json => {
    const callerId = json[2][0][1].from;
    console.log(json);
    //if (setting.responder.call.status){
    client.sendMessage(
      callerId,
      "Sistema de cancelamento de ligação e bloqueio automático. Você será bloqueado em 5 segundos!",
      MessageType.text
    );
    setTimeout(async function () {
     client.blockUser(callerId, "add")
     }, 5000);// Block user
    //}
  });
  

	client.on('chat-update', async (mek) => {
		try {
		    if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
            if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = moment.tz('America/Sao_Paulo').format('DD/MM')
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
                        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase() 
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			client.updatePresence(from, Presence.availabe)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const totalchat = await client.chats.all()
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAdulto = isGroup ? adulto.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isPorno = porno.includes(from)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiSticker = isGroup ? antisticker.includes(from) : false
			const isAntiLinkyt = isGroup ? antilinkyt.includes(from) : false
			const isAntiLinkex = isGroup ? antilinkex.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = prem.includes(sender) || isOwner
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
						
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const costumimg = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		    
		    const fakegroup = (teks) => {
			client.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}

const data = () => {

myMonths = ["Janeiro","Fevereiro","Março","Abril","Maio","Junio","Julio","Agosto","Setembro","Outubro","Novembro","Dezembro"];

myDays = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'];

var data = new Date();

var dia = data.getDate();

var dia2 = String(data.getDate()).padStart(2, '0');

var mes = data.getMonth();

var tday = data.getDay(),

tday = myDays[tday];

var ano = data.getFullYear()

dataAtual = tday + ', ' + dia2 + ' de ' + myMonths[mes] + ' de ' + ano;

console.log(dataAtual);

fdata = `dataAtual`

return `dataAtual`
}

		    
	        /*****************END SCURITY FEATURE ********/
	        
	        var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			}
			
	        
	        //function rank
	        const levelRole = getLevelingLevel(sender, _level)
   	     var role = 'Estagiário'
   	     if (levelRole <= 3) {
   	         role = 'Ouro I'
   	     } else if (levelRole <= 5) {
   	         role = 'Ouro II'
   	     } else if (levelRole <= 7) {
   	         role = 'Platina I'
   	     } else if (levelRole <= 8) {
   	         role = 'Platina II'
   	     } else if (levelRole <= 9) {
   	         role = 'Diamante I'
   	     } else if (levelRole <= 10) {
   	         role = 'Diamante II'
   	     } else if (levelRole <= 11) {
   	         role = 'Diamante III'
   	     } else if (levelRole <= 12) {
   	         role = '1st classe I'
   	     } else if (levelRole <= 13) {
   	         role = '1st classe II'
   	     } else if (levelRole <= 14) {
   	         role = '1st classe III'
   	     } else if (levelRole <= 14) {
   	         role = '1st classe IV'
   	     } else if (levelRole <= 15) {
   	         role = 'Mestre I'
   	     } else if (levelRole <= 16) {
   	         role = 'Mestre II'
   	     } else if (levelRole <= 17) {
   	         role = 'Mestre III'
   	     } else if (levelRole <= 18) {
   	         role = 'Mestre IV'
   	     } else if (levelRole <= 19) {
   	         role = 'Mestre V'
   	     } else if (levelRole <= 20) {
   	         role = '2nd classe I'
   	     } else if (levelRole <= 21) {
   	         role = '2nd classe II'
   	     } else if (levelRole <= 22) {
   	         role = '2nd classe III'
   	     } else if (levelRole <= 23) {
   	         role = '2nd classe IV'
   	     } else if (levelRole > 100) {
   	         role = 'deus da destruição '
   	     }
   	     
   	     var premi = '*X*'
			if (isPrem) {
				premi = '*✓*'
			} 
			if (isOwner) {
				premi = '*owner*'
			}
			
					
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Desculpe ${pushname} seu limite acabou\n\n_Nota : limite pode ser obtido por meio de ${prefix}buylimit ou subido de nivel_`, text,{ quoted: mek})
                            const lev1 = ind.lev(limitCounts)
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                        console.log(ind.lev(limitCounts))
                    }
                    const lev2 = ind.lev(limitCounts)
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`Desculpe o grupo não tem o mínimo ${memberlimit} membros,então eu estou saindo em 5 segundos`)
						setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1segundos")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2segundos")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3segundos")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4segundos")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("5segundos")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        } 
        if (budy.includes("://chat.whatsapp.com/")){

		if (!isGroup) return

		if (!isAntiLink) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Banido, motivo = link de grupo!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERRO:* ${e}`)})
		}, 2000)
	}
	if (budy.includes("https://youtu.be/")){

		if (!isGroup) return

		if (!isAntiLinkyt) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Banido, motivo = link do you tube!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}if (budy.includes("https")){

		if (!isGroup) return

		if (!isAntiLinkex) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Banido, motivo = sem permissão de enviar link*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}
			
		if (messagesC.includes("boa")){
		client.updatePresence(from, Presence.recording)
		  
		buffer = fs.readFileSync('./som/n.mp3');
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
	}
	if (messagesC.includes("loli")){
	client.updatePresence(from, Presence.recording)
		ga = ['./som/oni2.mp3','./som/sfoni.mp3','./som/baka.mp3'] 
		af = ga[Math.floor(Math.random() * ga.length)]
		buffer = fs.readFileSync(``+af +``);
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
	}
	if (messagesC.includes("animel")){
		  
		buffer = fs.readFileSync('./som/ari.mp3');
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
	}

	if (messagesC.includes("!say")){
	  const teks = text.replace(/!say /, "")
	  client.sendMessage(from, teks, text, { quoted: mek})
	}
	if (messagesC.includes("oi")){
	client.updatePresence(from, Presence.recording)
	    ga = ['./som/oi2.mp3','./som/bot.mp3'] 
		af = ga[Math.floor(Math.random() * ga.length)]
		buffer = fs.readFileSync(``+af +``);
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					
					if (budy.includes("para")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/baka.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("bot")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/bot.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("safada")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/safada.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("Safada")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/safada.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("Gostoso")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/joabe.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("gostoso")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/joabe.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					
					if (messagesC.includes("davi")){
					  
				  buffer = fs.readFileSync('./som/praga.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("joabe")){
					  
				  buffer = fs.readFileSync('./som/joabe.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("rebeca")){
					  
				  buffer = fs.readFileSync('./som/rebeca.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("mano")){
					result = fs.readFileSync(`./strg/sticker/ta.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					}


             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
							
			switch(command) {
				case 'mutual6':
				  case 'me':	    
                if (!isRegistered) return reply( ind.noregis(pushname))
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next6':
                if (!isRegistered) return reply( ind.noregis(pushname))
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
				case 'transfer':
				case 'enviar':
				case 'envia':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('559184035474@s.whatsapp.net', fee)
                reply(`*「 SUCESSO 」*\n\ntranferencia de pontos bem sucedida\nde : +${sender.split("@")[0]}\npara : +${tujuan}\nquandidade de pontos : ${jumblah}\nimpostos : ${fee}`)
                break
                case 'ler':
                var chats = await client.chats.all()
                chats.map( async ({ jid }) => {
                await client.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await client.sendMessage(from, teks, text, {quoted: mek})
		console.log(chats.length)
		break
                case 'instaimg':
                client.updatePresence(from, Presence.composing) 
				    cs = body.slice(10)
					data = await fetchJson(`https://api.zeks.xyz/api/ig?url=${cs}&apikey=${apiz}`, {method: 'get'})
					reply(ind.wait())
					vd = `${data.result[0].url}`
					buffer = await getBuffer(vd)
					fim = buffer
					client.sendMessage(from, fim, image, { quoted: mek, caption: `@${data.owner}\n\nDescrição: ${data.caption}`})
					console.log(data.result[0].url)
					console.log("Divid")
					console.log(fim)
					break 
				    case 'instavd':
				client.updatePresence(from, Presence.composing) 
				    cs = body.slice(10)
					data = await fetchJson(`https://api.zeks.xyz/api/ig?url=${cs}&apikey=${apiz}`, {method: 'get'})
					reply(ind.wait())
					vd = `${data.result[0].url}`
					n = JSON.parse(JSON.stringify(vd));
					pok = n
					buffer = await getBuffer(pok)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `megah-chan.mp4`, quoted: mek, caption: `@${data.owner}\n\ndescrição: ${data.caption}`})
					console.log(data.result[0].url)
					break
					case 'tiktok':
				client.updatePresence(from, Presence.composing) 
				    cs = body.slice(8)
					data = await fetchJson(`https://api.zeks.xyz/api/tiktok?url=${cs}&apikey=${apiz}`, {method: 'get'})
					reply(ind.wait())
					vd = `${data.no_watermark}`
					buffer = await getBuffer(vd)
					gah = buffer
					client.sendMessage(from, gah, video, {mimetype: 'video/mp4', filename: `megah-chan.mp4`, quoted: mek, caption: `titulo: ${data.title}\n\nTotal de likes ${data.like_count}\n`})
					await limitAdd(sender)
					console.log(data.no_watermark)
					break
					case 'c':
					if (!q) return reply('Masukan link group')
					       cs = `body.slice(3)`
					       reply('calma')
					       console.log(cs)
                           const response = await client.acceptInvite(cs);
                           console.log(response);
                           break
                           case 'join':
                           if (!q) return reply('Masukan link group')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
                           var response2 = await client.acceptInvite(codeInvite);
                           console.log(response2);
                           break
					case 'facevd':
				client.updatePresence(from, Presence.composing) 
				    cs = body.slice(8)
					anu = await fetchJson(`https://api.zeks.xyz/api/fbdl?apikey=${apiz}&url=${cs}`, {method: 'get'})
					reply(ind.wait())
					vd = `${anu.data.links.hd}`
					pok = vd
					buffer = await getBuffer(pok)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `megah-chan.mp4`, quoted: mek, caption: `${anu.data.title}`})
					console.log(vd)
					console.log("perai", color(red))
					console.log(buffer)
					break			    
				case 'pontos':
				if (!isRegistered) return reply(ind.noregis(pushname))
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'canal':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210226_190234.jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=26%25&text.0.position.y=49%25&text.0.size=14&text.0.color=000000&text.0.font.family=Poppins`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
				case 'buylimit':
				if (args.length < 1) return reply('digite um valor')
				if (!isRegistered) return reply(ind.noregis(pushname))
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`delculpe, seus pontos não são suficientes`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 COMPRA FEITA」*\n\n*remetente* : Admin\n*receptor* : ${pushname}\n*valor nominal* : ${payout} \n*preço limite* : ${koinPerlimit}/limit\n*o resto de sues pontos* : ${checkATMuser(sender)}\n\nseu código de pagamento\n${createSerial(15)}`)
				} 
				break
                case 'mod':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(5)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*de*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*tamanho*: ${hepi.size}\n*ultima versão*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*versão*: ${hupo.version}\n*tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*ultima att*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender) 
			break

                                case 'antilinkgrupo':

                                	
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Mas já ativaram isso? 🤔')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Ativado!')
						client.sendMessage(from,`Atenção a todos os membros deste grupo, o anti-link de grupos está ativo, Caso você enviar um link no grupo, vc será removido!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Anti-link de grupos foi desativado!')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
			break
			case 'antilinkyt':

                                	
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLinkyt) return reply('Mas já ativaram isso aqui!🤔')
						antilinkyt.push(from)
						fs.writeFileSync('./database/json/antilinkyt.json', JSON.stringify(antilinkyt))
						reply('Ativado!')
						client.sendMessage(from,`Atenção a todos os membros deste grupo, o anti-link do you tube está ativo, Caso você enviar um link no grupo, vc será removido!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkyt) return reply('Anti-link do you tube foi desativado!')
						var ini = antilinkyt.indexOf(from)
						antilinkyt.splice(ini, 1)
						fs.writeFileSync('./database/json/antilinkyt.json', JSON.stringify(antilinkyt))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
			break
			case 'antilinkex':

                                	
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLinkex) return reply('Mas já ativaram isso aqui!🤔')
						antilinkex.push(from)
						fs.writeFileSync('./database/json/antilinkex.json', JSON.stringify(antilinkex))
						reply('Ativado!')
						client.sendMessage(from,`Atenção a todos os membros deste grupo, o anti-link extremo está ativo, Caso você enviar um link no grupo, vc será removido!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkex) return reply('Anti-link do you tube foi desativado!')
						var ini = antilinkex.indexOf(from)
						antilinkex.splice(ini, 1)
						fs.writeFileSync('./database/json/antilinkex.json', JSON.stringify(antilinkex))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
			break
            case 'encurta':
				if (!isRegistered) return reply(ind.noregis(pushname))
				cs = args[0]
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=${apiz}&url=${cs}`)
                hasil = `*Aqui está seu link encurtado:* ${data.short}`
                reply(hasil) 
                break
                case 'arquiva':
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                client.modifyChat(from, ChatModification.archive)
                break
                case 'attp':
				if (args.length < 1) return reply('digite o texto')
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				client.sendMessage(from, attp2, sticker, {quoted: mek})
				break
				case 'stickerly':
				if (args.length < 1) return reply('digite o texto')
				cs = body.slice(11)
				ranp = getRandom('.png')
				rano = getRandom('.webp')
				anu = await fetchJson(`https://api.xteam.xyz/sticker/stickerly?q=${cs}&APIKEY=${apix}`)
				n = JSON.parse(JSON.stringify(anu.result.stickerlist));
				console.log(n)
				nimek =  n[Math.floor(Math.random() * n.length)];
				d = nimek
				if (anu.error) return reply(anu.error)
				exec(`wget ${d} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				fs.unlinkSync(ranp)
	   		if (err) return reply(ind.stikga())
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, sticker, {quoted: mek})
				fs.unlinkSync(rano)
					})
				break
                case 'nangis6':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'stag':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                                        if (!isQuotedSticker) return reply('marque o stiker')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await client.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await client.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(6)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        client.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					case 'imgtag':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`marque uma img`)
                    }
                    break
                   
                //function porno
                case 'boquete':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (!isAdulto) return reply(ind.adultoff)
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					reply(ind.wait())
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'buceta':
					case 'bct':  
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isGroup) return reply(ind.porgc(pushname))
				if (!isPorno)return reply(ind.pornoff(pushname, prefix))
					rate = body.slice(1)
					const ii =['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-JhOANDNrujfW1KezJ4nvXzTtwmEqKGfaA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxidZ--GjsstJaX7Rf6ps9g743cLvgbJMW0A&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_rw-cyYMg7_Ac-4FVxgbO1ydBmy2wCVNIQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLu4MJZscQLiiTNrpKRxzZhGM9MFlF1dc8-w&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0m8gvBmbfCbahcwQzpN-f8w8anZBxQd6AIA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR450z-N2bPXS92e-ymd9HTTHkHbntwuqLMyQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAUUReFxZ98I7Oi2JW60spI8Dxe2wO59ceQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfyrNsjZIgR0P53B6AfZ3IqDS2ihflBJ9iQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7CcgwXA_-muWAMeK2ue852T4y_irRheaww&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvuQxDk7l-D1odxx_1nmiGNfuencKbqViwg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2x5i7OoAhF55WI9vmUkCGiit-UbKe0llvQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfKBXuX1W2pwdf_cuS_PvwnNLLh22wmSlXQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmelSQkQAWwOCzQoK9mkWyb3SGtFt8jyrlw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXQk5SlknMkQaBKuUO9Js9pzzpsA7znIMog&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CRa65CQoDOicM8koSJmQIoqA837mVe0O9w&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdpILUox-eBa8TeJcq7Gv8pWuUzEeDEFQJA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSBALTATDizOEC5ysNXgCse-bFFs3BLx0pg&usqp=CAU']
					const iu = ii[Math.floor(Math.random() * ii.length)] 
					buffer = await getBuffer(``+iu +``)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:'👀'}) 
					
					break
					case 'peito':
					  case 'peitos':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isGroup) return reply(ind.porgc(pushname))
				if (!isPorno)return reply(ind.pornoff(pushname, prefix))
					rate = body.slice(1)
					const pp =['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngFVtYpNk-lKnkiveoEoHIR83Oi02kKUpIg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQa3P1Zy36AZXsIS-0ZBuWIJVuvBbcl4Emw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqiLOVs-ej9r62D148JABUHwWDURKelnVDyw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8txLmS-OVZNGnCzUsfXWXQMI2BNNDaVeEQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRna0oTQVaLhzF7N3JHiRaNiRngUX6NYbZUbg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_fm4leol0wPYOK8JQwYUEadMTRZQf17ndw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHpOeGyCF4srsSJF0Sni8L-bfrbnN8q-7Rg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U4cGDrDcx2TEasKChXn5J5Karbxt_eh6mg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0I03Immbd8n2nVcpTSHdsGFtNi4bt2l4bTQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_XOD3nFmtAXsl6DCX61x6notS7OWjsBwSg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGFRbvAz3Qsq3TEQN7ASmG1Y9JRMl5ruucA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9u18GAi3uRd92jY5yiMQlPyixAIhkQ65m2Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdQWD5VNNKOcvfrXnVL8h0pRBNTtBlJw4GA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXG8-M-_sPZSvIl5auk3GVNRFAIEE5Pnj8og&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDN3C_Wu8h-hOHLd31UU-NX6ZBsKHU4085YA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAirN-58GaY2xZiu6Ss8QPTI1Zt-TcdQRHWg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZtI3nJtMZcgd74peXH23CCT17fG2IRBg5w&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRXxYDRnNDAVLwT7fk4DfgwQ7kHsHkkFQcw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjBupNRlsdimU8BzHcOgkiIDdKNvOHTITOA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDn9bwnJCvuMzW13W-JbaHvfDwPr2u7poqg&usqp=CAU']
					const ll = pp[Math.floor(Math.random() * pp.length)] 
					buffer = await getBuffer(``+ll +``)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:'.....'}) 
					
					break
					case 'beijar':
				if (!isRegistered) return reply(ind.noregis(pushname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'abraco':
					case 'abra':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					
				case 'sswebf':
				
					if (args.length < 1) return reply('Cadê o url tio')
					tekss = body.slice(7)
					reply('Aguarde um pouco...')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${tekss}`)
					bufferz = await getBuffer(anu.gambar)
					client.sendMessage(from, bufferz, image, {quoted: mek})
					break
                      case 'qrcode':
				if (!isRegistered) return reply(ind.noregis(pushname))
				
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'qual o texto para transforma em qrcode?', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek, caption: `aqui está seu qr code ${pushname}`})
					
					break
					case 'chat':
					client.updatePresence(from, Presence.composing)
					client.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted: mek})
					break
					case 'modo':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('ja está ativo!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('modo de interação ativo, se prepare senpai...️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('modo de interação desativado :(️️')
					} else {
						reply(ind.satukos())
					}
					break
                case 'ninjalogo6':
				if (!isRegistered) return reply(ind.noregis(pushname))
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(ind.wait())
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})

                      break
                      case 'antifake':
					try {
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
                case 'plogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=18&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'glitch6':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(8)
					var tels3 = gh.split("|")[0];
					var tels4 = gh.split("|")[1];
					if (args.length < 1) return reply(ind.wrongf())
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'bug':
					case 'report':
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 letras', text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORTADO]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nmotivo : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('559184035474@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos.')
                    break
                    case 'men':
                     client.updatePresence(from, Presence.composing)
                      if (!q.includes('/')) return client.sendMessage(from, 'coloque uma / entre o id e a mensagem!', text, {quoted: mek})
                      const rec = body.slice(5)
                      cec = rec.split("/")[0];
                      cec1 = rec.split("/")[1];
                      if (rec.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 letras', text, {quoted: mek})
                      if (rec.length < 1) return client.sendMessage(from, 'cade o id do grupo?', text, {quoted: mek})
                       ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			           buffer = await getBuffer(ppUrl)
			           rec2 = `${cec}`
                        var nomor = mek.participant
                       const fds1 = `*Grupo que enviou*:\n${groupName}\n\n*membro que enviou:* @${nomor.split("@s.whatsapp.net")[0]}\n\n*Mensagem:* ${cec1}`

                      var options = {
                         text: fds1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage(rec2, options, text, {quoted: mek})
                    reply('Mensagem enviada')
                    break
                    case 'tiktokstalk':
					try {
					if (args.length < 1) return client.sendMessage(from, 'Cadê o nome do User?', text, {quoted: mek})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
					reply(ind.wait)
					teks = `*ID* : ${user.id}\n*Nome de usuário* : ${user.uniqueId}\n*Apelido* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Seguindo* : ${stats.followingCount}\n*Postagens* : ${stats.videoCount}\n*Total de likes* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('nome de usuário inválido...')
					}
					break
                case 'wolflogo6':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(ind.wait())
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}&apikey=BotWea`, {method: 'get'})
                      buffer = await getBuffer(anu.result)
                      client.sendMessage(from, buffer, image, {quoted: mek})
                      await limitAdd(sender)
                      break
                case 'lionlogo6':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(ind.wait())
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      buffer = await getBuffer(anu.result)
                      client.sendMessage(from, buffer, image, {quoted: mek})
                      await limitAdd(sender)
                      break
                      case 'playstore':
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nome Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  reply(store.trim())
                  break
                  case 'grupoinfo':
                  case 'infogp':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME*: ${groupName}\n*MEMBROS*: ${groupMembers.length}\n*ADMINS*: ${groupAdmins.length}\n*DESCRIÇÃO*:\n${groupDesc}`})
                    break
                      case 'wlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_052617.jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=6%25&text.0.position.y=55%25&text.0.size=30&text.0.color=ff0000&text.0.font.family=Signika%20Negative&text.0.font.weight=700&text.0.background.opacity=11&text.0.outline.blur=98&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
					//Se for kibar deixa is creditos
					case 'closetime': //Feito por Lord Resta
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
                    client.updatePresence(from, Presence.composing) 
                    if (args[1]=="s") {var timer = args[0]+"000"
				    } else if (args[1]=="m") {var timer = args[0]+"0000"
				    } else if (args[1]=="h") {var timer = args[0]+"00000"
				    } else {return reply("Use assim:\ns: segundos\nm: minutos\nh: horas\nex: !closetime 30 s")}
				    setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*Fechando grupo* a pedido do adm @${nomor.split("@s.whatsapp.net")[0]}`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				    }, timer)
				    break
				case 'opentime': //Feito por Lord Resta
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
                    if (args[1]=="s") {var timer = args[0]+"000"
				    } else if (args[1]=="m") {var timer = args[0]+"0000"
				    } else if (args[1]=="h") {var timer = args[0]+"00000"
				    } else {return reply("*Use assim:\ns: segundos\nm: minutos\nh: horas\nex: !opentime 30 s")}
				    setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*Abrindo grupo* a pedido do adm @${nomor.split("@s.whatsapp.net")[0]}`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				    }, timer)
				    break
                case 'bfig':
					if (args.length < 1) return reply(' envie um texto!✨')
					reply(mess.wait)	
					teks = body.slice(10)
					ranp = getRandom('.png')
					rano = getRandom('.webp')		
					anu = await fetchJson(`https://api.xteam.xyz/ttp?file&text=${teks}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        await limitAdd(sender)
					break
			    case 'glogo':
			    dark = `${body.slice(7)}`
			    da = dark.split("/")[0];
			    rk = dark.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/0d1dc54c127cf3f8a53afe515a1efb8f.jpg?text.0.text=${rk}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=30&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${da}&text.1.position.gravity=north&text.1.size=30&text.1.color=ff0000&text.1.font.weight=600&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break  
			    case 'dnobg2':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${no}&text.0.position.gravity=north&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0&text.1.text=${bg}&text.1.position.gravity=center&text.1.position.y=25%25&text.1.color=4f00ff&text.1.opacity=83&text.1.font.family=Marck%20Script&text.1.outline.blur=82`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break
			    case 'frase':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://api.ritekit.com/v2/image/quote?text=${no}&author=${bg}&textFont=Lora&textColor=%23000000&textFontWeight=400&authorFont=Lato&authorColor=%23e5e5e5&authorFontWeight=400&highlightColor=transparent&backgroundColor1=%238686bd&backgroundColor2=%231ddad6&width=400&height=400&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break
			    case 'amor':
			    love = `${body.slice(7)}`
			    lo = love.split("/")[0];
			    ve = love.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://assets.imgix.net/examples/couple.jpg?txt64=VEUgQU1PIOKdpO-4jw&txt-font=bold&txt-align=middle%20center&txt-size=${lo}&blur=${ve}&txt-color=FF0000`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break  
			    case 'aguia2':
			    agia = `${body.slice(7)}`
			    ag = agia.split("/")[0];
			    ia = agia.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${ia}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=24&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${ag}&text.1.position.gravity=north&text.1.size=24&text.1.color=0040f2&text.1.font.family=Noticia%20Text&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break  
                case 'black':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T225108.251.jpeg?text.0.text=${teks}&text.0.color=ffffff&text.0.font.family=Tangerine&text.0.font.weight=800&text.0.background.opacity=18&text.0.outline.blur=82`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'attp2':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					client.sendMessage(from, buffer, video, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'clogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_230542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=2%25&text.0.size=23&text.0.color=000000&text.0.opacity=58&text.0.font.weight=600&text.0.font.style=italic&text.0.outline.opacity=24`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break	
                case 'letxt':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-23T231504.507.jpeg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=8%25&text.0.position.y=30%25&text.0.size=30&text.0.color=0800ff&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=northwest&text.1.position.x=7%25&text.1.position.y=30%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break		
                case 'text3d':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_235608.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=2%25&text.0.size=30&text.0.color=ff0000&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=center&text.1.position.x=1%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.outline.blur=57`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break			
                case 'milogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T014719.920.jpeg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=15&text.0.color=000000&text.0.font.family=Ek%20Mukta&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=29`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'aguia':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=30%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Philosopher&text.0.font.style=italic&text.0.background.color=ffffff`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'randlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://darkkkw.herokuapp.com/`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'monkey':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_030251.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=39%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Source%20Sans%20Pro&text.0.font.weight=600`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dlg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://mhankbarbar.tech/api/ephoto?text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dnulis':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 200) return reply('O texto é longo, até 200 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_040232.png?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=10%25&text.0.position.y=8%25&text.0.align=right&text.0.size=55&text.0.color=000000&text.0.opacity=72&text.0.font.family=Bitter&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'tlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_164542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=40%25&text.0.size=50&text.0.color=ffffff&text.0.font.family=Lobster%20Two&text.0.font.weight=800&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'nlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_165159.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=38%25&text.0.size=24&text.0.color=ff0000&text.0.font.family=Signika&text.0.font.weight=600&text.0.background.opacity=34&text.0.outline.opacity=16`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dmeme':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_050527.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=10%25&text.0.position.y=22%25&text.0.size=18&text.0.color=000000&text.0.font.family=Vollkorn&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dnobg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${teks}&text.0.position.gravity=center&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'imgur':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('ate 15 carácteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://m.imgur.com/t/${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                  case 'wp':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					anu = await fetchJson(`https://br.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${body.slice(9)}`)
					reply(mess.wait)
				    translate = `pesquisa: *${teks}*\n\nResultado: *${anu.text}*`
				    client.sendMessage(from, teks, text, {quoted:mek})
				   await limitAdd(sender)
				   break
                      case 'neko':
				if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					const bb =['https://tlgur.com/d/GEz9Dp0g', 'https://tlgur.com/d/GOOepVMG', 'https://tlgur.com/d/GZDA0ld4', 'https://tlgur.com/d/gvqDZxzG', 'https://tlgur.com/d/GXMlveeg', 'https://tlgur.com/d/g057Eb94', 'https://tlgur.com/d/4k7X3Bx4', 'https://tlgur.com/d/g50wEMNG', 'https://tlgur.com/d/8BrMdY98', 'https://tlgur.com/d/8ekOPmNg']
					const ka = bb[Math.floor(Math.random() * bb.length)] 
					buffer = await getBuffer(``+ka +``)
					const gd =['neko neko', '😳', 'mano, que linda', 'aqui safado']
					const dg = gd[Math.floor(Math.random() * gd.length)]
					client.sendMessage(from, buffer, image, { quoted: mek, caption:``+dg +``}) 
					
					break
                case 'person':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'humm'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					case 'shota6':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					
				 //função consulta
				 case 'cep':
				 if (args.length < 1) return reply('cadê o cep?')
					try { 
					lxrd = body.slice(5)
                    data = await fetchJson(`https://viacep.com.br/ws/${lxrd}/json/`, {method: 'get'})
                    console.log(data)
                    if (data.erro) return reply('cep não encontrado')
                    kiny = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${data.cep} \n\n ➸ *ENDEREÇO:* ${data.logradouro}\n\n ➸ *COMPLEMENTO:* ${data.complemento} \n\n ➸ *BAIRRO:* ${data.bairro} \n\n ➸ *LOCALIDADE:* ${data.localidade} \n\n ➸ *UF:* ${data.uf}\n\n ➸ *DDD:* ${data.ddd}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    } catch {
                    return reply('deu erro, cep invalido')
                    }
                    
                    await limitAdd(sender)
                    break
                    case 'covid':
                    if (args.length < 1) return reply('Digite a sigla do estado')
                    if (!isRegistered) return reply(ind.noregis(pushname))
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
                    cs = body.slice(7)
                    if (cs.length > 2) return reply('A sigla dos estados so tem duas letras')
                    data = await fetchJson(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${cs}`, {method: 'get'})
                    console.log(data)
                    if (data.error) return reply('Sigla do estado não encontrada')
                    kiny = `Estado: ${data.state}
Casos: ${data.cases}
Mortes: ${data.deaths}
possiveis casos: ${data.suspects}
casos recusados: ${data.refuses}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    }
                    catch (e) {
                    console.log("ERRO", color('red'))
                    reply('deu erro')
                    }
                    await limitAdd(sender)
                    break
                    case 'tr':
                      tr1 = body.slice(4)
                      data = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${tr1}&from=id&to=pt`)
                      kiny = `tradução: ${data.translated_text}`
                      client.sendMessage(from, kiny, text, {quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'clima':
                    if (args.length < 1) return reply('Digite o nome da cidade sem acentos')
                    try {
                    cs = body.slice(7)
                    data = await fetchJson(`http://api.weatherapi.com/v1/current.json?key=d7f33929455b4e1e986173946210804&lang=pt&q=${cs}`, {method: 'get'})
                    console.log(data)
                    if (data.error) return reply('Cidade não encontrada')
                    kiny = `Cidade: ${data.location.name}
Região: ${data.location.region}
País: ${data.location.country}
id1_local: ${data.location.tz_id}
Latitude: ${data.location.lat}
Temperetura: ${data.current.temp_c}c⁰
raios uv: ${data.current.uv}
pressão: ${data.current.pressure_in}
umidade: ${data.current.humidity}%
Precipitação: ${data.current.precip_mm}
descrição: ${data.current.condition.text}
data: ${data.location.localtime}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    } catch {
                    return reply('Deu erro, tente mandar sem acentos dessa vez')
                    }                  
                    await limitAdd(sender)
                    break
                    case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('Marque um vídeo.')
					reply('aguarde..')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Falha ao converter vídeo para mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break 
                case 'jokerlogo6':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					tels = body.slice(10)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'ranime':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'cada coisa'})
					await limitAdd(sender)
					break
                case 'joox':
                case 'music':  
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break
                //premiom
				case 'ytmp3':
				if (!isRegistered) return reply(ind.noregis(pushname)) 
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					if (args.length < 1) return reply('Cade o Url?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'}) 
					client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
					if (anu.error) return reply(anu.error)
					
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp4`, quoted: mek}) 
					await limitAdd(sender)
					break
					case 'listonline':
					  if (!isRegistered) return reply(ind.noregis(pushname))
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
                         case 'play0':   
	          if (!isRegistered) return reply(ind.noregis(pushname))
              if (isLimit(sender)) return reply(ind.limitend(pusname))  
                play = body.slice(7)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${apiz}`);
               if (anu.error) return reply(anu.error) 
               console.log(anu)
               client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
                 infomp3 = `*Título:* ${anu.result.title}\n*Fonte:* ${anu.result.source}\n*Tamanho:* ${anu.result.size}`
                buffer = await getBuffer(anu.result.thumbnail) 
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('aguarde')
                lagu = await getBuffer(anu.result.url_audio) 
                reply('pronto')
                await client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender)
					break
					case 'play':   
            	if (args.length < 1) return reply('Digite o nome da música')
	          if (!isRegistered) return reply(ind.noregis(pushname))
              if (isLimit(sender)) return reply(ind.limitend(pusname))  
              try{
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${apiz}&q=${play}`)
                if (anu.message) return reply('Não encontrei nada :(')
                console.log(anu)
                reply(ind.wait)
                buffer = await getBuffer(anu.result.thumb)
                infomp3 = `Título: ${anu.result.title}\nDuração: ${anu.result.duration}\nTamanho: ${anu.result.size}\nFonte: ${anu.result.source}`
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('To fazendo o download da música, aguarde...')
                lagu = await getBuffer(anu.result.link)
                reply('terminei, to enviando a música✔')
                await client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: 'megahchan.mp3', quoted: mek})
                } catch {
                return reply('Deu erro :(')
                }
                await limitAdd(sender)
                break
                case 'play2':   
        		if (args.length < 1) return reply('Digite o nome da música')
	          if (!isRegistered) return reply(ind.noregis(pushname))
              if (isLimit(sender)) return reply(ind.limitend(pusname))  
              try{
                play = body.slice(6)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${apiz}&q=${play}`)
                if (anu.message) return reply('Não encontrei nada :(')
                console.log(anu)
                reply(ind.wait)
                buffer = await getBuffer(anu.result.thumb)
                infomp3 = `Título: ${anu.result.title}\nDuração: ${anu.result.duration}\nTamanho: ${anu.result.size}\nFonte: ${anu.result.source}`
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('To fazendo o download da música, aguarde...')
                lagu = await getBuffer(anu.result.link)
                reply('terminei, to enviando a música✔')
                await client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: 'megahchan.mp3', quoted: mek})
                } catch {
                return reply('Deu erro :(')
                }
                await limitAdd(sender)
                break
                case 'video':   
	          if (!isRegistered) return reply(ind.noregis(pushname))
              if (isLimit(sender)) return reply(ind.limitend(pusname))  
                play = body.slice(7)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=${apiz}&q=${play}`)
                if (anu.message) return reply('Não encontrei nada :(')
                console.log(anu)
                reply(ind.wait)
                buffer = await getBuffer(anu.result.thumb)
                infomp3 = `Título: ${anu.result.title}\nDuração: ${anu.result.duration}\nTamanho: ${anu.result.size}\nQualidade: ${anu.result.quality}\n${anu.result.source}`
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('To fazendo o download da video, aguarde...')
                lagu = await getBuffer(anu.result.link)
                end = lagu
                reply('terminei, to enviando o vídeo')
                await client.sendMessage(from, lagu, document, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
                await limitAdd(sender)
                break
                
				case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis(pushname)) 
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					if (args.length < 1) return reply('Cade o Url?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'}) 
					client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
					if (anu.error) return reply(anu.error)
					
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break

                case 'teste10':
                    if (!isRegistered) return reply(ind.noregis(pushname))
					buffer = ('https://scontent-ort2-2.cdninstagram.com/v/t50.2886-16/169844971_482923859566066_7776196664695607501_n.mp4?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=110&_nc_ohc=UcVT93DhtN4AX_nSV4Z&edm=APfKNqwAAAAA&ccb=7-4&oe=60720CDC&oh=1a2277eab882210e6b8c77311819e711&_nc_sid=74f7ba')
					client.sendMessage(from, buffer, text, { quoted: mek})
					
					break
					 case 'nivel':
                case 'level':  
                if (!isRegistered) return reply(ind.noregis(pushname))
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `╭──╼≽ *LEVEL* ──╼\n╼≽ *Nome* : ${pushname}\n╼≽ Número : wa.me/${sender.split("@")[0]}\n╼≽ XP :  ${userXp}/${requiredXp}\n╼≽ Level : ${userLevel}\n╼≽ Patente : ${role}\n\n${per}\n\n╰──────────╼`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis(pushname))
				   checkLimit(sender)
					break
				case 'vinta6':
				    if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					vin = body.slice(7)
					reply(ind.wait())
					vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
					client.sendMessage(from, vintage, image, {caption: 'nih anjim ${vin}', quoted: mek})
					await limitAdd(sender)
					break
                 case 'avengers6':
                 if (!isRegistered) return reply(ind.noregis(pushname))
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					if (!q.includes('|')) return  reply(ind.wrongf())
                   const aruga1 = q.substring(0, q.indexOf('|') - 0)
                    const aruga2 = q.substring(q.lastIndexOf('|') + 1)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=${aruga1}&text2=${aruga2}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'summer6':
					if (!isRegistered) return reply(ind.noregis(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sandwrite6':
					if (!isRegistered) return reply(ind.noregis(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'metaldark6':
					if (!isRegistered) return reply(ind.noregis(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'dropwater6':
					if (!isRegistered) return reply(ind.noregis(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'grenneon6':
					if (!isRegistered) return reply(ind.noregis(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'neontext6':
					if (!isRegistered) return reply(ind.noregis(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'toxic6':
					if (!isRegistered) return reply(ind.noregis(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					break
               case 'slap6':
                    kapankah = body.slice(1)
                    
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, video, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
				
					break
					case 'teste4':
					if (!isRegistered) return reply(ind.noregis(pushname))
					
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media4.giphy.com/media/hhHcFH0xAduCs/giphy.gif?cid=82a1493bheen0lbgvio6qxk6w5aglre0u917rqwgef475dg9&rid=giphy.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})	
					break
              case 'ppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Envie uma imagem com a legenda *${prefix}ppbot*`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obg pelo novo perfil 😗')
					break 
					case 'brainly':
					case 'pesquisa':  
					if (!isRegistered) return reply(ind.noregis(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pergunta:* ${Y.pertanyaan}\n\n*➸ Respostas:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bcgc6':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
					case 'pinterest':
					case 'images':
					case 'imagens':  
					if (!isRegistered) return reply(ind.noregis(pushname)) 
					if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))			
					if (messagesC.includes("hentai")) return reply('naum pode')
					try {
					client.updatePresence(from, Presence.composing) 
					cs = body.slice(11)
					reply(ind.wait())
					anu = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=${apiz}&q=${cs}`, {method: 'get'})
					n = JSON.parse(JSON.stringify(anu.data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					d = nimek
					console.log(color(d, 'cyan'))
					pok = await getBuffer(d)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*achei isso*`})
					} catch {
					return reply('Erro, não encontrei nada')
					}
					await limitAdd(sender)
					break
										case 'hentai':
										if (!isRegistered) return reply(ind.noregis(pushname))
					                    if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=auau`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*achei isso*`})
					await limitAdd(sender)
					break 
					case 'loli':
					if (!isRegistered) return reply(ind.noregis(pushname))
					const gp = ['https://tlgur.com/d/8BrxeP08', 'https://tlgur.com;/d/g50RWvPG', 'https://tlgur.com/d/4k75vyZ4', 'https://tlgur.com/d/g50RWRPG', 'https://tlgur.com/d/8Brxex08', 'https://tlgur.com/d/8ekZB2eg', 'https://tlgur.com/d/g2ZnomAg', 'https://tlgur.com/d/GdBm5e34', 'https://tlgur.com/d/G7o9P0kG', 'https://tlgur.com/d/8Dm5dwlG', 'https://tlgur.com/d/GPMzaJOg', 'https://tlgur.com/d/4yB3LMb8', 'https://tlgur.com/d/gwkzDnMg', 'https://tlgur.com/d/4rZOeK64', 'https://tlgur.com/d/8no2xzeG', 'https://tlgur.com/d/GJaVwKd8', 'https://tlgur.com/d/GMAy9OvG', 'https://tlgur.com/d/4Ra3ZREg', 'https://tlgur.com/d/89wNMkKg', 'https://tlgur.com/d/GYwnB604', 'https://tlgur.com/d/4NkwYra8', 'https://tlgur.com/d/4qYVBjk4', 'https://tlgur.com/d/8QeAQMj8', 'https://tlgur.com/d/gvql1rnG', 'https://tlgur.com/d/GXMr5Q0g', 'https://tlgur.com/d/g05arQa4', 'https://tlgur.com/d/4k75vyZ4', 'https://tlgur.com/d/g50RWvPG', 'https://tlgur.com/d/8BrxeP08']
					reply(ind.wait())
					const fe = ['lolicon 😏', 'safado', 'aqui estar', ' me leve para seu porão onni-chan..', 'yamete kudassai', 'lolizinha hihi', 'onni-chan']
                    const af = fe[Math.floor(Math.random() * fe.length)]
					const le = gp[Math.floor(Math.random() * gp.length)] 
					buffer = await getBuffer(``+le +``)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:``+af +``}) 
					break
					case 'loli1':
					if (!isRegistered) return reply(ind.noregis(pushname)) 
					if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))		
					client.updatePresence(from, Presence.composing) 
					const lab = ['lolicon 😏', 'safado', 'aqui estar', ' me leve para seu porão onni-chan..', 'yamete kudassai', 'lolizinha hihi', 'onni-chan']
                    const abl = lab[Math.floor(Math.random() * lab.length)]
					anu = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=${apiz}&q=loli`, {method: 'get'})
					console.log(anu.data)
					n = JSON.parse(JSON.stringify(anu.data));
					console.log(n)
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: ``+abl +``})
					break
					case 'igstalk':
					cs = body.slice(9)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=${apiz}&username=${cs}`, {method: 'get'})
					reply(ind.wait())
					if (data.message) return reply('Não encontrado')
					n = JSON.parse(JSON.stringify(data.profile_pic));
					pok = await getBuffer(n)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `Nome: ${data.fullname}\n\nSeguidores: ${data.follower}\n\nSeguindo: ${data.following}\n\nBio: ${data.bio}\n\n     fonte: ${data.source}`})
					await limitAdd(sender)
					console.log(data.profile_pic)
					break
					case 'foto1':
					if (isGroup) return reply('comandos de porno so são permitidos no privado')  
					if (!isPorno) return reply(ind.pornoff(pushname, prefix))  
		buffer = await getBuffer(`https://tlgur.com/d/4k7XN0w4`)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: `${per}\n${tanggal}`})
		break
		case 'kk':
		buffer = await getBuffer(`https://tlgur.com/d/GOOpRYKG`)
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
		break
					case 'resepmasakan6':
					if (!isRegistered) return reply(ind.noregis(pushname))
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
                   case 'igstal6k':
                   if (!isRegistered) return reply(ind.noregis(pushname))
                   
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    
					break 
                    case 'Banall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setmarc':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`Marcaçao altarada para: ${cr}`)
					await limitAdd(sender)
					break 
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis(pushname))
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`total de  XPTN BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grupos : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
				case 'rg': 
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('/')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('/') - 0)
                const umurUser = q.substring(q.lastIndexOf('/') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 40) return reply(`Pq seu nick é tão grande, isso seria um nick ou um trem? 🚆`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Sua idade não pode ser mais nova que 10 e nem mais velha que 40`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, date, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, date, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, date, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, date, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
            	case 'mining':
                      if (!isRegistered) return reply(ind.noregis(pushname))
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`desculpe ${pushname} o evento de mineração não foi ativado pelo meu dono!`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`${pushname} tome *${mining} de Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'caracoroa':
				if (!isRegistered) return reply(ind.noregis(pushname))
				
					rate = body.slice(1)
					const ra =['Cara 👨🏽‍🦲 ✨', 'Coroa 👴🏽 ✨' ]
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, '*Resultado:* '+ te+``, text, { quoted: mek })
					await limitAdd(sender) 	
					break
				case 'ping':
					  const chatsIds = await client.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Carregando Messagens...\`\`\`
                
\`\`\` - [ Chats aberto ]  ${totalchat.length}\`\`\`
\`\`\` - [ Samsung ] A10S\`\`\`
\`\`\` - [ WA versão ] ${client.user.phone.wa_version}\`\`\`
\`\`\` - [ Servidor ] Baileys\`\`\`
\`\`\` - [ SELF ] MODO\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4095 ] RAM\`\`\`

\`\`\`Velocidade: ${latensi.toFixed(4)} Segundos\`\`\``
                client.sendMessage(from, p0, text, { quoted: mek})
                    break
				case 'gay':
				if (!isRegistered) return reply(ind.noregis(pushname))  
					const ab =['10%', '15%', '20%', '32%', '34%', '39%', '41%', '49%', '50%', '53%', '55%', '61%', '67%', '69%', '74%', '75%', '80%', '88%', '90%', '93%', '99%', '100%', '5%', '1%', '3%', '0%']
					const be = ab[Math.floor(Math.random() * ab.length)] 
					buffer = await getBuffer('https://tlgur.com/d/gj5azv0G')
					ft = `*🏳‍🌈 | Máquina de gay*\n_${pushname} você é `+be +` gay._`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ft}) 
					
					break
					case 'gay2':		
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(5)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const km = ti[Math.floor(Math.random() * ti.length)]
					dale = `como vc é gay ${rate}\n\n sua porcentagem é `+km +`%`
					client.sendMessage(from, dale, text, { quoted: mek })
					break
					case 'teste':
					  end = data.fdata
				  client.sendMessage(from, end, text, { quoted: mek })
				  break
					case 'gay3':
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque seus amigos!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					const ti2 =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const km2 = ti2[Math.floor(Math.random() * ti2.length)]
					if (mentioned.length > 1) {
						mentions(`Como você é gay @${mentioned[0].split('@')[0]}\n\nsua porcentagem é *`+km2 +`%*`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
					case 'pp':
				if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					buffer = fs.readFileSync('./som/oni.mp3');
					client.sendMessage(from, buffer, audio, { quoted: mek, ptt:true}) 
					break
					case 'pdf':
		arqu = await getBuffer(`https://tlgur.com/d/89wPWwOg`)
		client.sendMessage(from, arqu, document, {mimetype: 'apk', filename: `${arqu.title}.apk`, quoted: mek, caption: `Aqui ${pushname}`})
					break
					case 'tt':
				if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					const la =['https://tlgur.com/d/4qYePX34', 'https://tlgur.com/d/8QedV378', 'https://tlgur.com/d/g6YlLzPG', 'https://tlgur.com/d/gm5xdp9g', 'https://tlgur.com/d/GWNwzvb8', 'https://tlgur.com/d/81eOLDW8', 'https://tlgur.com/d/GEz9ZePg', 'https://tlgur.com/d/GLrkByE4']
					const ca = la[Math.floor(Math.random() * la.length)] 
					buffer = await getBuffer(``+ca +``)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:'gay'}) 
					
					break
					case 'gato':
					if (!isRegistered) return reply(ind.noregis(pushname))  
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTlbh_esNLFhQJwhTtk1KxURqH0vA5xy0oQ&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Fof 🤗'})
					break
					case 'auau':
					case 'cachorro':
					if (!isRegistered) return reply(ind.noregis(pushname))
					const au = ['https://tlgur.com/d/GVwyjDjg', 'https://tlgur.com/d/8Dmo0ZPG', 'https://tlgur.com/d/GPM2yDYg', 'https://tlgur.com/d/4yBwW238', 'https://tlgur.com/d/gwkPWBng', 'https://tlgur.com/d/4zZlWdE4', 'https://tlgur.com/d/4AYJZlv4', 'https://tlgur.com/d/g3vPK6XG', 'https://tlgur.com/d/gj5vWZYG']
					const ua = au[Math.floor(Math.random() * au.length)]
					buffer = await getBuffer(``+ua +``)
					const ba = ['auau', 'fof', 'que fofo', 'lindex🥺']
					const fa = ba[Math.floor(Math.random() * ba.length)]
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ``+fa +``})
					break
					case 'corno':
					if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					const ac =['10%', '15%', '20%', '32%', '34%', '39%', '41%', '49%', '50%', '53%', '55%', '61%', '67%', '69%', '74%', '75%', '80%', '88%', '90%', '93%', '99%', '100%', '5%', '0%']
					const bi = ac[Math.floor(Math.random() * ac.length)] 
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8wf93jMQ3f1CVM7GFz7XlDAfMR6NgORLWw&usqp=CAU`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:`*🏳 🐃| Máquina de corno*\n_${pushname} você é `+bi +` corno._`})
				case 'resp':
				if (!isRegistered) return reply(ind.noregis(pushname))
					rate = body.slice(1)
					const ge =['Não', 'Sim', 'Provavelmente', 'Talvez', 'Minhas fontes dizem que sim', 'Provavelmente não', 'Provavelmente sim', 'Minha resposta é sim', 'Minha resposta é não', 'Quem sabe', 'Também queria saber', 'Não sei']
					const ha = ge[Math.floor(Math.random() * ge.length)] 
					tesk = ha
					client.sendMessage(from, tesk, text, { quoted: mek})
					
					
					
					break
					case 'fala':
					case 'falar':  
				if (!isRegistered) return reply(ind.noregis(pushname)) 
					rate = body.slice(1)
					const kl =['A tua mãe aquela gostosa', 'mas que gado kkkk', 'nossa mano', 'a vaca polonesa', 'mano, nem fudendo', 'e la vamos nos', 'não sei kkk', 'Ok']
					const ah = kl[Math.floor(Math.random() * kl.length)] 
					tesk = ah
					client.sendMessage(from, tesk, text, { quoted: mek})
					
					
					
					break
               case 'help': 
				case 'menu':
				if (!isRegistered) return reply(ind.noregis(pushname))
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
				    buffer = fs.readFileSync('bot_mega.jpg');
					const xiu = ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, time, role);
					reply(xiu)
					break
					case 'menu2':
					if (!isRegistered) return reply(ind.noregis(pushname))
					const reqPx  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				  const pont = checkATMuser(sender)
				  buffer = fs.readFileSync('bot_mega.jpg');
				  const xiu2 = ind.menu2(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqPx, _registered, pont, time, role);
				  reply(xiu2)
				  break
				case 'donasi6':
				case 'donate6':
				if (!isRegistered) return reply(ind.noregis(pushname))
					client.sendMessage(from, donasi(), text)
					break
					case 'leaderboard':
				case 'lb':
				if (!isOwner) return reply(ind.ownerb())
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *TOP LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *TOP PONTOS* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Pontos*: _Rp${uang[i].uang}_\n┗⊱ *Limite*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`mínimo de ${len} usuário para poder acessar o banco de dados`)
                }
				break
				case 'info':
					me = client.user
					uptime = process.uptime()
					ppUrl = await client.getProfilePicture()
					teks = `_Info: .Bot_Megah. Apenas um simples bot para o whatsapp, focada em diversão e moderação de grupos! Quer me add no seu grupo? Converse com !dono 😉_`
					buffer = await getBuffer(ppUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'Esta é a lista de números bloqueados:\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					case 'pack1':
					buffer = fs.readFileSync('./docu/hentai.zip');
					client.sendMessage(from, buffer, document, {mimetype: 'zip', filename: `hentai.zip`, quoted: mek})
					  
                case 'here':
                case 'id':  
                if (!isRegistered) return reply(ind.noregis(pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                    case 'ssweb':
                case 'print':
                if (!isRegistered) return reply(ind.noregis(pushname)) 
					if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					cpq = body.slice(7)
				
					client.updatePresence(from, Presence.composing) 
					cs = body.slice(7)
					data = await (`https://nurutomo.herokuapp.com/api/ssweb?url=${cs}&full=false&type=png`)
					reply(ind.wait())
					fad = data
					pok = await getBuffer(fad)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*achei isso*`})
					await limitAdd(sender)	
					console.log(fad)				
					break
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis(pushname))
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon;;`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: 'pokemon go'})
			     	break
                case 'aujh':
                if (!isRegistered) return reply(ind.noregis(pushname))
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'ytmp46':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break
                case 'text3d6':
                if (!isRegistered) return reply(ind.noregis(pushname))
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
					break
			   case 'map':
			if (!isRegistered) return reply(ind.noregis(pushname))
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break
               case 'kpop':
				if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					const kp =['https://tlgur.com/d/8DmoV3DG', 'https://tlgur.com/d/GPM2b9Lg', 'https://tlgur.com/d/4yBw0Z58', 'https://tlgur.com/d/gwkPvlEg', 'https://tlgur.com/d/8lo0j5K4', 'https://tlgur.com/d/4zZlxvN4', 'https://tlgur.com/d/4AYJ2364', 'https://tlgur.com/d/gj5vAxQG', 'https://tlgur.com/d/8KoxAn58', 'https://tlgur.com/d/gpzBada8', 'https://tlgur.com/d/Gbkn7OPg']
					const pk = kp[Math.floor(Math.random() * kp.length)] 
					buffer = await getBuffer(``+pk +``)
					const vv =['gays pops', 'kpop 🤣', 'humm', 'que gay', 'kkkk', 'seres insignificantes', '....']
					const vc = vv[Math.floor(Math.random() * vv.length)]
					client.sendMessage(from, buffer, image, { quoted: mek, caption:``+vc +``}) 
					case 'ocr': 
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
				case 'stickergif': 
				case 'sticker':
				case 's':
				    
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)

							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Envie uma imagem/gif/video não mt pesada, com a legenda !sticker`)
					}
					break
				case 'audio':
				case 'tts':
				case 'fl':  
				if (!isRegistered) return reply(ind.noregis(pushname))
		
				if (args.length < 1) return client.sendMessage(from, '', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Falta colocar o código do idioma!', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 80
					? reply('Para reduzir spam o máximo de letras permitidas são 80!')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefixo alterado para:* ${prefix}`)
					break 
				case 'link':
				    if (!isGroup) return reply(ind.groupo()) 
				    	if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode(from)
				    yeh = `_Bora dilvulgar o grupo? 🍻😏_\n*Link:* https://chat.whatsapp.com/${linkgc}`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender) 
			        break
			        case 'rv':
				    if (!isGroup) return reply(ind.groupo()) 
				    if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.revokeInvite(from)
				    mg = 'Link atualizado'
				    client.sendMessage(from, mg, text, {quoted: mek})
			        break	
              case 'delete':
					    case 'del':
					    case 'apagar':
					    case 'apaga':
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'marca':
				case 'marcar': 
				  if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `¡ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
				case 'limpa':
				case 'limpar':  
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.modifyChat(_.jid, ChatModification.delete)
					}
					reply(ind.clears())
					break
					case 'bot':
		if (args.length < 1) return reply ('o que é mano, não estar vendo que estou ocupado?😶')
		break
			       case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser(`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `bloqueando ${body.slice(8)}`, text)
					break
                    case 'desblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser(`${body.slice(11)}@c.us`, "remove")
					client.sendMessage(from, `desbloqueando ${body.slice(11)}`, text)
					break
				case 'exit':
				case 'sair':
				case 'bay':  
				if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin()) 
					console.log(from) 
					reply('aaah, vou sair em 5 segundos entaum, tchau 😔')
					setTimeout(async function () {
				  client.groupLeave(from)
				  }, 5000)
					break
					case 'idgrupo':
					if (!isGroup) return reply(ind.groupo())
					console.log(from)
					reply(from)
					break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「BOT_MEGAH」*\n\n${body.slice(4)}`)
						}
						reply('transmitido ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('🤝')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Quem você quer add?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Número privado, não foi possível add!')
					}
					break
					case 'gp':
					case 'grupo7':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					    reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					//group feature 
				case 'hidetag':
				case 'tag':
                if (!isRegistered) return reply(ind.noregis(pushname))
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(5)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break      
            case 'criador':
            case 'dono':
                 client.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 client.sendMessage(from, 'sem travas ou spam, caso contrário....',MessageType.text, { quoted: mek} )
					break    
           case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '🤝', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '🤝', text, {quoted: mek})
					break
           case 'demitir':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use !demitir @tagadministrador')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} seus dias de glória acabaram 😭😭👌`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break 
					case 'cadr':
					case 'escre': 
				
					if (args.length < 1) return reply(ind.wrongf)
					var gold51 = body.slice(6)
                                        var gold291 = gold51.split("|")[0];
					reply(ind.wait)
					nullis = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${gold291}&apikey=${apiz}`)
					client.sendMessage(from, nullis, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'promover':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #promover @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} parabéns por se torna um de nós 🥳🥳`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'ban':
			     	case 'kick':  
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use !ban @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(tesk, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`adeus👋 @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}} catch (e){ 
					console.log(e)
					}
					break
				case 'admin':
					if (!isGroup) return reply(ind.groupo())
					teks = `⭐ *admin acorda (๑•﹏•)* \n\n `
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks +=`\n! @${admon.split('@')[0]}`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'converter':
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('marque o sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'aqui estar '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
					case 'converter':
				case 'toimg2':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('marque o sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, video, {quoted: mek, caption: 'aqui estar '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                 case 'simi':
                    client.updatePresence(from, Presence.composing)
					if (args.length < 1) return reply('o que vc quer conversa?')
					teks = body.slice(6)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
					case 'email':
                    client.updatePresence(from, Presence.composing)
                    if (!isRegistered) return reply(ind.noregis(pushname))
                    if (!q.includes('/')) return  reply('está errado, faz assim:\n\n!email gostosa.ofc@gmail.com/eae gostosa :3')
					if (args.length < 1) return reply('qual o texto?')
					agia = `${body.slice(7)}`
			        eml = agia.split("/")[0];
			        teks = agia.split("/")[1];
					anu = await mail(teks, eml)
					reply(`Pronto, enviei sua msg.`)
					break
					case 'uban':
                    client.updatePresence(from, Presence.composing)
                     if (!isRegistered) return reply(ind.noregis(pushname))
                    if (args.length < 1) return reply('cadê o número que vc deseja desbanir?')
					teks = body.slice(6)
					anu = await mail2(teks)
					reply('pronto enviei o seu número para o whatsapp, em até uma hora seu número vai está desbanido...')
					break
				case 'porno':
					if (isGroup) return reply('Comando de porno so são permitidos no privado')
					if (args.length < 1) return reply('1 para ativar e 0 para destivar')
					if (Number(args[0]) === 1) {
						if (isPorno) return reply(' *Ja está ativo* !!')
						porno.push(from)
						fs.writeFileSync('./database/bot/porno.json', JSON.stringify(porno))
						reply('conteúdo porno ativado!')
					} else if (Number(args[0]) === 0) {
						porno.splice(from, 1)
						fs.writeFileSync('./database/bot/porno.json', JSON.stringify(porno))
						reply('conteúdo porno desativado!')
					} else {
						reply(ind.satukos())
					}
					break
                case 'atnivel':
                case 'atlevel':  
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('Já está ativado!')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === '0') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
                 case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Já está ativado* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*😳 Welcome foi ativado neste grupo!*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*😰 Welcome foi desativado neste grupo!*')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Ja está ativ* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*Evento de mineração ativado!️*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*Evento de mineração desativado!*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *Marque uma pessoa que terá sua foto do perfil clonada:* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('q')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`obg pela foto de perfil 😳 @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender) 
					break
					case 'vsticker':
				case 'gets':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
					case 'stickerlist':
				case 'figus':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*Lista de Stickers :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Marque o sticker!')
					svst = body.slice(12)
					if (!svst) return reply('Defina um nome para o sticker!')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sucesso! para ver seu sticker digite !vsticker (nome)`, MessageType.text, { quoted: mek })
					break
					case 'addvn':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
				case 'getvn':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listvn':
				case 'vnlist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addfoto':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedImage) return reply('Marque uma foto!')
					svst = body.slice(9)
					if (!svst) return reply('defina um nome para a foto!')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sucesso! digite !vfoto (nome) para ver a foto`, MessageType.text, { quoted: mek })
					break
				case 'vfoto':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Encontrado no banco de dados:\n ${namastc}.jpeg` })
					break
				case 'fotolist':
				case 'listfoto':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*Lista de fotos:*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedVideo) return reply('Marque o vídeo!')
					svst = body.slice(10)
					if (!svst) return reply('Defina um nome para o vídeo!!')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sucesso!`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*Lista de Videos:*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
				case 'wait':
				case 'que':
				case 'qanime':  
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
			if (body.startsWith(`${prefix}${command}`)) {
			client.updatePresence(from, Presence.composing)
                  reply(`desculpe *${pushname}*, o comando *${prefix}${command}* não foi encontrado, tente *${prefix}menu*`)
                  }                  
                  
                  if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(color(budy,'yellow'))
						muehe = await simih(budy)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Comando nao registrado by', color(sender.split('@')[0]))
					}
                  
                  if (!isCmd && budy != undefined) {
                  if (isGroup) return console.log(color('Nao permitido em grupo','white'))
                  client.updatePresence(from, Presence.composing)
						console.log(color(budy,'yellow'))
						muehe = await simih(budy)
						reply(muehe)
						console.log(color(muehe,'cyan'))
					}

					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) )