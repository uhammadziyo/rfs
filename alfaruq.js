let add = document.getElementById(`add`)
let login = document.getElementById(`login`)
let username = document.getElementById(`username`)
let password = document.getElementById(`password`)
let BtnLogin = document.getElementById(`btn-login`)
let savollar = document.getElementById(`savollar`)
let BtnAdd = document.getElementById(`btn-add`)
add.style.display=`none`

BtnLogin.addEventListener(`click`, ()=>{
    if (username.value == `amirxon` && password.value == `123mmm`) {
        login.style.display = `none`
        add.style.display = `block`
        alert(`xush kelibsiz janobi olilari`)
    } else {
       alert(`sur akkauntdan`) 
    }
})

BtnAdd.addEventListener(`click`, ()=>{
    let p = document.createElement(`p`)
    p.innerHTML =  `sizning savolingiz:` + prompt(`savol kirting janobi olilari`)
    savollar.appendChild(p)
})