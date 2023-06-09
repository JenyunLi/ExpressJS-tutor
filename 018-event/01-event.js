const EventEmitter= require('events');
const event= new EventEmitter();
event.on('play',(data)=>{
  console.log("事件触发了 play",data);
})

event.on('run',(data)=>{
  console.log("会触发 run",data);
})

setTimeout(() => { 
  event.emit('run','111');
 }, 1)