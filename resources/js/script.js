
// for togg
const click1 = document.querySelector('.res-icon')
const view = document.querySelector('.container')
click1.addEventListener('click',() => {
    view.classList.toggle('showme')
})
// for textarea auto adjust
const textarea = document.querySelector('.text-input-msg');
textarea.style.cssText = `height: ${textarea.scrollHeight}px; overflow-y: hidden`;
textarea.addEventListener('input', function(){
    this.style.height ='35px';
    this.style.height =`${this.scrollHeight}px`;
})
const today = new Date()
// footer form
const chatform = document.querySelector('.input-form');
textarea.addEventListener('input',function(){
    let line= textarea.value.split('\n').length;

    if (textarea.rows < 6 || line < 6){
        textarea.rows = line;
     }
    if (textarea.rows > 1 ){
        chatform.style.align = 'flex-end'
    }
    else{
        chatform.style.align = 'center' 
    }
 })
 function textupp(){
    const texval= textarea.value.toUpperCase()
    return texval;
    }
    
// message send 
const initmsg = document.querySelector('.initmsg')
const chatarea = document.querySelector('.chat-area')
const chatmsgdis = document.getElementById('btn');
chatmsgdis.addEventListener('click', function(e){
    e.preventDefault()
    if (isValid(textarea.value)){
        writtenmsg()
        setTimeout(autoreply,900)
    }
})
// recivemsg
function writtenmsg(){
    let message = `<div class="msg-sent">
                        <p>${textarea.value.trim().replace(/\n/g,'<br>\n')}</p>
                    </div>`
    console.log(message)
    chatarea.insertAdjacentHTML('beforeend',message)
    textarea.focus()
    textarea.rows = 1
    // initmsg.style.display = 'none'
    scrollbottom()
}
// autoreply
function autoreply(){
        let cont = reply()
        let message = `<div class="msg-recive">
        <p>${cont}</p>
    </div>`
    console.log(message)
    chatarea.insertAdjacentHTML('beforeend',message)
    textarea.focus()
    textarea.rows = 1
    textupp()
    textarea.value = ''
    // initmsg.style.display = 'none'
    scrollbottom()
}

function isValid(value){
    let text =value.replace(/\n/g,'')
    text = text.replace( /\s/g)
    return text.length > 0 ;
}
function scrollbottom() {
    chatarea.scrollTo(0, chatarea.scrollHeight)
}

function reply(){
    let txt = textarea.value.toUpperCase()
    if (txt === 'HI' || txt === 'HAI'){
        return "How are you?"
    }
    else if(txt === "FINE" || txt === "GOOD") {
        return "I'm glad to here that! If you have any question ask to me?"
    }
    else if(txt === "NOT GOOD" || txt === "NOT WELL") {
        return "I'm sorry to here that! If you'd like, you can share more?"
    }
    else if(txt === "HOW ARE YOU" || txt === "ABOUT YOU" || txt === "YOU ") {
        return "I'm just a computer program, so I don't have feelings, but I'm here and ready to help you!"
    }
    else if(txt === "WHO ARE YOU") {
        return "I'm just a computer program, but I'm here and ready to help you!"
    }
    else if( txt === "WHAT'S TIME NOW" || txt === "WHAT'S THE TIME" || txt === "WHAT'S THE TIME NOW" || txt === 'WHAT IS THE TIME ')
    {
        return `${addZero(today.getHours())}:${addZero(today.getMinutes())}`
    }
    else if( txt === "TODAY DATE" || txt === "WHAT'S THE DATE" || txt === "WHAT'S THE DATE TODAY" )
    {
        return `${addZero(today.getDate())}:${addZero(today.getMonth()+1)}:${addZero(today.getFullYear())}`
    }
    else if(txt === "NO" || txt === "NOTHING") {
        return "Thank you have a nice day"
    }
    else {
        return "I Don't know about that sorry! Do you have any question?";
    }

}
function addZero(num){
    return num < 10? '0'+num : num ; 
}