const head = document.getElementById('head')
const left = document.getElementById('left')
const right = document.getElementById('right')
const retine = document.getElementById('retine')
const retine2 = document.getElementById('retine2')
const mouth = document.getElementById('mouth')
const audio = document.getElementById('audio')

head.addEventListener('click', function () {
 head.classList.toggle('headh')
 left.classList.toggle('eye')
 right.classList.toggle('eye')
 retine.classList.toggle('retineA')
 retine2.classList.toggle('retine2nd')
 mouth.classList.toggle('loth')
if (audio.paused) {
 audio.play()
} else {
 audio.pause()
}
})