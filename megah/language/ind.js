exports.wait = () => {
	return`*⏰ AGUARDE UM MOMENTO!*📌`
}

exports.succes = () => {
	return`*Sucesso 🖤*`
}

exports.lvlon = () => {
	return`*Os níveis está ativado*`
}

exports.lvloff = () => {
	return`*Os níveis está desativado 😔*`
}

exports.adultoff = () => {
  return `O conteúdo adulto não está ativado`
}

exports.adulton = () => {
  return `Conteúdo adulto ativado!`
}
exports.pornoff = (pushname, prefix) => {
  return `Opa ${pushname} o conteúdo porno não está ativado neste chat, para ativar digite assim ${prefix}porno 1`
}
exports.adultt = () => {
  return `Ja está ativado!!`
}

exports.lvlnul = () => {
	return`_Você ainda não tem um nível!_`
}
exports.porgc = (pushname) => {
  return `Opa ${pushname} esses tipo de Comando não são permitidos no grupo!`
}
exports.lvlnoon = () => {
	return`*Peça a um adm para ativar os níveis neste grupo!*`
}

exports.noregis = (pushname) => {
	return`*「 NÃO REGISTRADO 」*

*🤝 Percebemos que você ainda não está registrado(a) em nosso banco de dados... para está se registrando use !rg nome|idade - obs: use isso no privado do bot!*\n

•Exemplo: !rg ${pushname}/18`
}

exports.rediregis = () => {
	return`*Você já está registrado em nosso banco de dados 🏦🎲🤝*`
}

exports.stikga = () => {
	return`*Falha, tente novamente mais tarde!*`
}

exports.linkga = () => {
	return`*Link inválido*`
}

exports.groupo = () => {
	return`*Comando só pode ser utilizado em grupos!*`
}

exports.ownerb = () => {
	return`Quem é você? 😕`
}

exports.ownerg = () => {
	return`*🚫*`
} 
exports.vip = () => { 
  return `_Você não possui uma conta vip! 😢_` 
}

exports.admin = () => {
	return`_sai fora membro comum 🤣🤣🤣_`
}
exports.nivel = () => { 
  return`*Para fazer uso deste comando é nescessário ter o nível 3 👳🏿‍♂️*`
} 
exports.badmin = () => {
	return`*Bot não possui adm 😭*`
}

exports.nsfwoff = () => {
	return`*`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Nome* : ${pnom}
*Expira* : 30 DAY\n*thank for order premium*`
}


exports.bug = () => {
	return`*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco 🤨*`
}

exports.clears = () => {
	return`Todas as conversas foram apagadas :b`
}

exports.pc = () => {
	return`*`
}

exports.registered = (namaUser, umurUser, date, serialUser, time, sender) => {
	return`Panas🤝, cadastro bem sucedido\n\n_Seus dados_\n\nNome: ${namaUser}\n\nIdade: ${umurUser}\n\ndata: ${date} as ${time}\n\nS/N: ${serialUser}\n\nguarde este codigo, ele é importante!`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* não encontrado, use esse *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, time, role) => { 
	return `╔══❖〘 𝕀ℕ𝔽𝕆 〙❖═══╗
║
╠ ➣ 𝗡𝗼𝗺𝗲: ${pushname}
╠ ➣ 𝗡𝘂́𝗺𝗲𝗿𝗼: wa.me/${sender.split("@")[0]}
╠ ➣ 𝗣𝗼𝗻𝘁𝗼𝘀: Rp${uangku}
╠ ➣ 𝗫𝗽: ${getLevelingXp(sender)}/${reqXp}
╠ ➣ *Nivel*: ${getLevelingLevel(sender)}
╠ ➣ 𝗣𝗮𝘁𝗲𝗻𝘁𝗲: ${role}
╠ ➣ 𝗧𝗼𝘁𝗮𝗹 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗱𝗼: ${_registered.length}
╠ ══❖〘 𝕄𝔼𝔾𝔸ℍ 〙❖══╝

*!info*
*!dono*
*!ping*\n
São exatamente: *${time}*
canal do youtube => https://bit.ly/3fRLXcK

╔══❖〘𝕄𝕖𝕟𝕦 𝕔𝕣𝕚𝕒𝕕𝕠𝕣〙❖══╗
╠ ➣ !𝘀𝘁𝗶𝗰𝗸𝗲𝗿 
╠ ➣ *!s*
╠ ➣ !𝘁𝘁𝘀 <𝖼𝗈𝖽 𝖽𝗈 𝗂𝖽𝗂𝗈𝗆𝖺> <𝗍𝖾𝗑𝗍𝗈>
╠ ➣ !𝗰𝗮𝗱𝗿 <𝗍𝖾𝗑𝗍𝗈>
╠ ➣ !𝗲𝗻𝗰𝘂𝗿𝘁𝗮 <𝗎𝗋𝗅>
╠══❖〘 𝔽𝕌ℕ 𝕄𝔼ℕ𝕌 〙❖═══╣
╠ ➣ !𝗽𝗼𝗸𝗲𝗺𝗼𝗻
╠ ➣ !𝗹𝗼𝗹𝗶
╠ ➣ !𝗻𝗲𝗸𝗼
╠ ➣ !𝗿𝗮𝗻𝗶𝗺𝗲
╠══❖〘𝕄𝔼ℕ𝕌 𝔸𝔻𝕄 〙❖═══╣
╠ ➣ !𝗣𝗿𝗼𝗺𝗼𝘃𝗲𝗿 <@𝗍𝖺𝗀𝗆𝖾𝗆𝖻𝗋𝗈>
╠ ➣ !𝗱𝗲𝗺𝗶𝘁𝗶𝗿 <@𝗍𝖺𝗀𝖺𝖽𝗆𝗂𝗇>
╠ ➣ !𝗯𝗮𝗻 <@𝗍𝖺𝗀𝗆𝖾𝗆𝖻𝗋𝗈>
╠ ➣ !𝗮𝗱𝗱 <𝗇𝗎́𝗆𝖾𝗋𝗈 𝖽𝖺 𝗉𝖾𝗌𝗌𝗈𝖺>
╠ ➣ !𝘀𝗲𝘁𝗻𝗮𝗺𝗲 <𝗇𝗈𝗆𝖾 𝗇𝗏 𝖽𝗈 𝗀𝗋𝗎𝗉𝗈>
╠ ➣ !𝘀𝗲𝘁𝗱𝗲𝘀𝗰 <𝗇𝗈𝗏𝖺 𝖽𝖾𝗌𝖼 𝖽𝗈 𝗀𝗋𝗎𝗉𝗈>
╠ ➣ !𝘀𝗲𝘁𝗺𝗮𝗿𝗰 <𝗇𝗈𝗏𝖺 𝗆𝖺𝗋𝖼𝖺𝖼̧𝖺̃𝗈>
╠ ➣ !𝘄𝗲𝗹𝗰𝗼𝗺𝗲 <1/0>
╠ ➣ !𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸𝗴𝗿𝘂𝗽𝗼 <1/0>
╠ ➣ !𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸𝘆𝘁 <1/0>
╠ ➣ !𝗮𝘁𝗻𝗶𝘃𝗲𝗹 <𝗈𝗇/𝗈𝖿𝖿>
╠ ➣ !𝗴𝗽 <𝗈𝗉𝖾𝗇/𝖼𝗅𝗈𝗌𝖾>
╠ ➣ !𝗶𝗱 <𝗍𝖺𝗀𝗆𝖾𝗆𝖻𝗋𝗈>
╠══❖〘𝕍𝕒𝕣𝕚𝕒𝕕𝕠𝕤〙❖══╣
╠ ➣ !𝗽𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁 <𝗍𝖾𝗑𝗍𝗈>
╠ ➣ !𝗰𝗮𝗿𝗮𝗰𝗼𝗿𝗼𝗮
╠ ➣ !𝗴𝗮𝘆 
╠ ➣ !𝗴𝗮𝘆2 <𝗇𝗈𝗆𝖾 𝖽𝗈 𝖺𝗆𝗂𝗀𝗈>
╠ ➣ *!modo* <1/0>
╠ ➣ !𝗿𝗲𝘀𝗽 <𝗌𝗎𝖺 𝗉𝖾𝗋𝗀𝗎𝗇𝗍𝖺>
╠ ➣ !𝗹𝗲𝘃𝗲𝗹
╠ ➣ !𝗰𝗲𝗽 <𝗌𝖾𝗎 𝖼𝖾𝗉>
╠ ➣ !𝗰𝗹𝗶𝗺𝗮 <nome da cidade>
╠ ➣ !𝗰𝗼𝘃𝗶𝗱 <𝗌𝗎𝖺 𝖴𝖥, 𝖾𝗑: !𝖼𝗈𝗏𝗂𝖽 𝗌𝗉>
╠ ➣ !𝗽𝗹𝗮𝘆 <𝗇𝗈𝗆𝖾 𝖽𝖺 𝗆𝗎𝗌𝗂𝖼𝖺>
╠ ➣ !𝘆𝘁𝗺𝗽3 <𝗎𝗋𝗅>
╠ ➣ !𝗰𝗹𝗼𝗴𝗼 <𝗍𝖾𝗑𝗍𝗈>
╠ ➣ !𝘁𝗲𝘅𝘁3𝗱 <𝗍𝖾𝗑𝗍𝗈>
╠ ➣ *!attp* <texto>
╠ ➣ *!uban* <número banido do whats>
╠ ➣ !𝗰𝗼𝗻𝘃𝗶𝘁𝗲 <𝖾𝗇𝗏𝗂𝖺 𝗈 𝗅𝗂𝗇𝗄 𝖽𝗈 𝗀𝗋𝗎𝗉𝗈>
╠ ➣ !𝘀𝗶𝗺𝗶 <𝗍𝖾𝗑𝗍>
╠ ➣ *!stickerly* <nome do sticker>
╠ ➣ *!email* <email/sua msg>
╠ ➣ !𝗱𝗲𝗹 <𝗆𝖺𝗋𝗊𝗎𝖾 𝖺 𝗆𝗌𝗀 𝖽𝗈 𝖻𝗈𝗍>
║ 
║ modo de interação sempre ativo no pv
║ vamos conversar senpai?...
╚═══❖〘𝕄𝔼𝔾𝔸ℍ〙❖═══╝

*!menu2* para aqueles que o cell não pega a fonte!

`
}
exports.menu2 = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqPx, _registered, pont, time, role) => { 
	return `╔══❖〘 *INFO* 〙❖═══╗
║
╠ ➣ *Nome*: ${pushname}
╠ ➣ *Número*: wa.me/${sender.split("@")[0]}
╠ ➣ *Pontos*: Rp${pont}
╠ ➣ *Xp*: ${getLevelingXp(sender)}/${reqPx}
╠ ➣ *Nivel*: ${getLevelingLevel(sender)}
╠ ➣ *Patente*: ${role}
╠ ➣ *Total registrado*: ${_registered.length}
╠ ══❖〘 *MEGAH* 〙❖══╝

*!info*
*!dono*
*!ping*\n
São extamente: *${time}*
canal do youtube => https://bit.ly/3fRLXcK

╔══❖〘 *MENU CDR* 〙❖══╗
╠ ➣ *!sticker* 
╠ ➣ *!s*
╠ ➣ *!tts* <cod do idioma> <texto>
╠ ➣ *!cadr* <texto>
╠ ➣ *!encurta* <url>
╠══❖〘 *FUN MENU* 〙❖═══╣
╠ ➣ *!pokemon*
╠ ➣ *!loli*
╠ ➣ *!neko*
╠ ➣ *!ranime*
╠══❖〘 *MENU ADM* 〙❖═══╣
╠ ➣ *!promover* <@tagmembro>
╠ ➣ *!demitir* <@tagadmin>
╠ ➣ *!ban* <@tagmembro>
╠ ➣ *!add* <número da pessoa>
╠ ➣ *!setname* <nome nv do grupo>
╠ ➣ *!setdesc* <nova desc do grupo>
╠ ➣ *!setmarc* <nova marcação>
╠ ➣ *!welcome* <1/0>
╠ ➣ *!antilinkgrupo* <1/0>
╠ ➣ *!antilinkyt* <1/0>
╠ ➣ *!atnivel* <on/off>
╠ ➣ *!gp* <open/close>
╠ ➣ *!id* <@tagmembro>
╠══❖〘 *variados* 〙❖══╣
╠ ➣ *!pinterest* <texto>
╠ ➣ *!caracoroa*
╠ ➣ *!gay* 
╠ ➣ *!gay2* <nome do amigo>
╠ ➣ *!modo* <1/0>
╠ ➣ *!resp* <sua pergunta>
╠ ➣ *!level* <apenas em grupo>
╠ ➣ *!cep* <seu cep>
╠ ➣ *!covid* <sua UF, ex: !covid sp>
╠ ➣ *!clima* <sua cidade>
╠ ➣ *!clogo* <texto>
╠ ➣ *!attp* <texto>
╠ ➣ *!uban* <seu número banido do whats>
╠ ➣ *!text3d* <texto>
╠ ➣ *!email* <email/msg>
╠ ➣ *!play* <nome da musica>
╠ ➣ *!ytmp3* <url>
╠ ➣ *!convite* <envia o link do grupo>
╠ ➣ *!stickerly* <nome do sticker>
╠ ➣ *!simi* <texto>
╠ ➣ *!del* <marque a msg do bot>
║
║ modo de interação sempre ativo no pv
║ vamos conversar senpai?...
╚═══❖〘 *MEGAH* 〙❖═══╝`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role, limitCounts) => {
	return`
╭╼≽ *「 🔥LEVEL UP🔥 」*
│≽ *Nome* : ${pushname}
│≽ *Número* : wa.me/${sender.split("@")[0]}
│≽ *XP* : ${getLevelingXp(sender)}
│≽ *Patente*: ${role}
╰╼≽ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`desculpa *${pushname}* seu limite acabou\nNOTA: limite pode ser obtido por *${prefix}buylimit* ou subindo de nível`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE DA CONTA 」*
Seu limite : ${limitCounts}`
}

exports.lev = (limitCounts) => {
  return `${limitCounts}`
  }

exports.satukos = () => {
	return`digite 1 para ativar e 0 para desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*╭╼≽ 「 PONTOS」─╮*\n│≽ *Nome* : ${pushname}\n│≽ *Número* : ${sender.split("@")[0]}\n│≽ *Pontos* : ${uangkau}\n╰─────────`
}
