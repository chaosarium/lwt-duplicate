function readTextAloud(text, lang, rate) {
    var msg = new SpeechSynthesisUtterance()
    msg.text = text
    msg.lang = lang
    msg.rate = rate
    window.speechSynthesis.speak(msg)
}

function applyTTS(lang, rate) {
    document.querySelectorAll('.textToSpeak, #textToSpeak, span.click.word.wsty').forEach(item => {
        console.log("added listener")
        item.addEventListener('click', event => {
            console.log("this is great")
            readTextAloud(item.textContent,lang,rate)
        })
    })
}