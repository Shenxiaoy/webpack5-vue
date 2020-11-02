import test from './test'
import './style.css'
console.log(process.env.NODE_ENV, 'gggggg')
const result = test()
const div = document.createElement('div')
div.classList.add('box')
div.innerHTML = result
// dom.appendChild(div)
