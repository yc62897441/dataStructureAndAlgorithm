const a = []
const b = []
const c = []

// for (let i = 0; i < 30000000; i++) {
for (let i = 0; i < 3000000; i++) {
    a.push(Math.floor(Math.random() * 10000))
    b.push(Math.floor(Math.random() * 10000))
    c.push(Math.floor(Math.random() * 10000))
}

const time1 = window.performance.now()
a.concat(c)
const time2 = window.performance.now()
const timeFunc1 = (time2 - time1) / 1000
console.log(`It takes ${timeFunc1} seconds to run a.concat(c).`)
// It takes 0.07940000009536743 seconds to run a.concat(c).

const time3 = window.performance.now()
c.forEach(item => b.push(item))
const time4 = window.performance.now()
const timeFunc2 = (time4 - time3) / 1000
console.log(`It takes ${timeFunc2} seconds to run push each item of c to b`)
// It takes 0.4115 seconds to run push each item of c to b


const d = []
for (let i = 0; i < 300000000; i++) {
    d.push(Math.floor(Math.random() * 10000))
}
const time5 = window.performance.now()
d.push(10)
const time6 = window.performance.now()
const timeFunc3 = (time6 - time5) / 1000
console.log(`It takes ${timeFunc3} seconds to run d.push(10).`)

const e = []
const time7 = window.performance.now()
e.push(10)
const time8 = window.performance.now()
const timeFunc4 = (time8 - time7) / 1000
console.log(`It takes ${timeFunc4} seconds to run e.push(100000000000).`)