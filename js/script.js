var click = 1
var click2 = 1
var linkCss = document.getElementById(`link-nav-1`).style.cssText

function linkHover(num) {
    if (click==2) return
    if (click==0) {
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`link-nav-${i}`).style.cssText = linkCss
            document.getElementById(`link-nav-titulo-${i}`).style.cssText += 'transform: rotate(-90deg);top: 25px;left: 25px;width: 50px;height: 50px;'
            document.getElementById(`link-nav-conteudo-${num}`).style.cssText += 'opacity: 0;'
            setTimeout(() => {
                document.getElementById(`link-nav-conteudo-${num}`).style.cssText += 'display: block;'
            }, 300)
        }
        click = 2
        setTimeout(() => {
            click = 1
        }, 1000)
        return
    }
    click = 2
    let nums = []
    for (let i = 1; i <= 5; i++) {
        nums.push(i)
    }
    linkCss = document.getElementById(`link-nav-1`).style.cssText
    nums.splice(num-1, 1)
    document.getElementById(`link-nav-${num}`).style.cssText += 'width: '+(window.screen.width > 1000 ? 1000 : 600)+'px;height: 350px;transform: rotate(0deg);box-shadow: 10px 10px 10px 10px rgba(1, 34, 31, 0.212);'
    document.getElementById(`link-nav-titulo-${num}`).style.cssText += 'transform: rotate(0deg);top: 50px;left: 50px;width: 75px;height: 75px;'
    setTimeout(() => {
        document.getElementById(`link-nav-conteudo-${num}`).style.cssText += 'display: block;'
    }, 1000)
    setTimeout(() => {
        document.getElementById(`link-nav-conteudo-${num}`).style.cssText += 'opacity: 1;'
        click = 0
    }, 1300)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < num) {
            if (i == 0) {
                document.getElementById(`link-nav-${nums[i]}`).style.cssText += 'margin: 0;filter: brightness(60%);'
            }
            document.getElementById(`link-nav-${nums[i]}`).style.cssText += 'margin: 0 0 0 -100px;filter: brightness(60%);'
        } else {
            if (i == nums.length-1) {
                document.getElementById(`link-nav-${nums[i]}`).style.cssText += 'margin: 0;filter: brightness(60%);'
            }
            document.getElementById(`link-nav-${nums[i]}`).style.cssText += 'margin: 0 -100px 0 0;filter: brightness(60%);'
        }
    }
}
function linkHover2(num) {
    if (click2==2) return
    if (click2==0) {
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`link-nav2-${i}`).style.cssText = linkCss
            document.getElementById(`link-nav2-titulo-${i}`).style.cssText += 'transform: rotate(-90deg);top: 25px;left: 25px;width: 50px;height: 50px;'
            document.getElementById(`link-nav2-conteudo-${num}`).style.cssText += 'opacity: 0;'
            setTimeout(() => {
                document.getElementById(`link-nav2-conteudo-${num}`).style.cssText += 'display: block;'
            }, 300)
        }
        click2 = 2
        setTimeout(() => {
            click2 = 1
        }, 1000)
        return
    }
    click2 = 2
    let nums = []
    for (let i = 1; i <= 5; i++) {
        nums.push(i)
    }
    linkCss = document.getElementById(`link-nav2-1`).style.cssText
    nums.splice(num-1, 1)
    document.getElementById(`link-nav2-${num}`).style.cssText += 'width: '+(window.screen.width > 1000 ? 1000 : 600)+'px;height: 450px;transform: rotate(0deg);box-shadow: 10px 10px 10px 10px rgba(1, 34, 31, 0.212);'
    document.getElementById(`link-nav2-titulo-${num}`).style.cssText += 'transform: rotate(0deg);top: 50px;left: 50px;width: 75px;height: 75px;'
    setTimeout(() => {
        document.getElementById(`link-nav2-conteudo-${num}`).style.cssText += 'display: block;'
    }, 1000)
    setTimeout(() => {
        document.getElementById(`link-nav2-conteudo-${num}`).style.cssText += 'opacity: 1;'
        click2 = 0
    }, 1300)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < num) {
            if (i == 0) {
                document.getElementById(`link-nav2-${nums[i]}`).style.cssText += 'margin: 0;filter: brightness(60%);'
            }
            document.getElementById(`link-nav2-${nums[i]}`).style.cssText += 'margin: 0 0 0 -100px;filter: brightness(60%);'
        } else {
            if (i == nums.length-1) {
                document.getElementById(`link-nav2-${nums[i]}`).style.cssText += 'margin: 0;filter: brightness(60%);'
            }
            document.getElementById(`link-nav2-${nums[i]}`).style.cssText += 'margin: 0 -100px 0 0;filter: brightness(60%);'
        }
    }
}

var scroll = window.scrollY
var scroll2 = (window.scrollY - 100 < 0 ? 0 : window.scrollY - 100)
var pading = document.getElementById('introducao-div').clientHeight + 700
var loadInterval = setInterval(() => {
    if (scroll < window.scrollY-20 ) {
        document.getElementById('header').style.top = '-100px'
        document.getElementById('header-back').style.top = '0px'
    } else if (scroll > window.scrollY+20) {
        document.getElementById('header').style.top = '0'
        document.getElementById('header-back').style.top = '-30px'
    }
    scroll = window.scrollY
    pading = document.getElementById('introducao-div').clientHeight + 700
    scroll2 = ((scroll*2) <= 100 ? 0 : (scroll*2) - 100)
    pading - scroll2 < pading - 900 ? document.getElementById('conteiner-preto').style.top = `${pading - 900}px` : document.getElementById('conteiner-preto').style.top = `${pading - scroll2}px`
    document.getElementById('relevantes-titulo').style.marginTop = (document.getElementById('conteiner-preto').clientHeight-500)+'px'
}, 100)

var _relevantes = 0
function relevantesE() {
    _relevantes+1 > 2 ? 0 : _relevantes++
    _relevantes >= 0 ? document.getElementById('relevantes-e').style.marginLeft = `${2000*_relevantes}px` : 0
    _relevantes <= 0 ? document.getElementById('relevantes-d').style.marginLeft = `${2000*(Math.abs(_relevantes))}px` : 0
}
function relevantesD() {
    _relevantes-1 < -2 ? 0 : _relevantes--
    _relevantes >= 0 ? document.getElementById('relevantes-e').style.marginLeft = `${2000*_relevantes}px` : 0
    _relevantes <= 0 ? document.getElementById('relevantes-d').style.marginLeft = `${2000*(Math.abs(_relevantes))}px` : 0
}