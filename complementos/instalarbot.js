let handler = async m => m.reply(`
*◄✇⟬↯ື ►۩INSTALACION DEL BOT MODS-ALPHA۩◄ ↯ື✇►*

*VIDEO TUTORIAL: Proximamente 

☣LO QUE NESESITARAS DURANTE LA INSTALACION☣
➤ Termux  
➤ 1 GB de memoria en el teléfono
➤ Aconsejable un WhatsApp secundario
➤ Aconsejable un numero secundario
➤ 2 teléfonos o un 1 teléfono y una PC (es temporal - solo para escanear un código QR)


💥RECOMENDABLE INSTALAR TERMUX DESDE F-DROID💥
➤ Termux: https://f-droid.org/en/packages/com.termux/
➤ WhatsApp recomendado: https://download853.mediafire.com/xawpdplr7wvg/u133oxjqtiry52t/%E2%9E%A2+SOLITARIO+BUSINESS+%E2%9E%A2_2.21.19.21.apk
   
💥COMANDOS DE INSTALASION💥
> termux-setup-storage
➤ apt update && apt upgrade -y -y
➤ apt install git -y
➤ apt install nodejs -y
➤ apt install ffmpeg -y
➤ apt install imagemagick -y
➤ https://github.com/ModsAlpha/-BOT-MODS-ALPHA/tree/master/plugins
➤ cd ShadowBotV3
➤ npm install
➤ npm install -g npm@8.5.4
➤ npm update
➤ npm start
° Escaneas el código QR tienes 30 segundos para hacerlo

💥 INFO EXTRA 💥
➤ Se sugiere leer el archivo README.md 
➤ Bot no compartible con WhatsApp web multi device 
➤ Para habilitar el /añadir y el /sacar usa #enable autoread
- Puede ocasionar que el numero se vaya a soporte 
➤ PayPal para apoyo voluntario: https://www.paypal.me/TheShadowBrokers133
➤ Numero de ayuda durante la instalacion: wa.me/5219992095479 (No Bot, solo ayuda durante la instalación)

*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
