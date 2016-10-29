export class App {

  constructor() {
    this.time = Math.floor(14999);
    this.mes = "25:00"
    this.running = false;
       
   
  }

start() {
  setTimeout(function(){  
    
  this.time--; 
  console.log(this.time)
  this.mes=this.time
  }, 
100);
  // if (this.time > 0) {
  //   setTimeout(function() {
  //     this.time--;
  //     let mins = Math.floor(this.time / 10 / 60);
  //     let secs = Math.floor(this.time / 10 % 60);
  //     let tenths = this.time % 10;
  //     if (mins < 10) {
  //     mins = this.mes + mins;
  //   }
  //   if (secs < 10) {
  //     secs = this.mes + secs;
  //   }
  //  start()
   
  //     }, 100);
  // }
}
  reset(){

   this.running = false;  
   this.mes = this.time
   this.mes = "25:00"
   
  }

  decrease(){

  if (this.time < 1200) {
  this.time = 600;
  }
  this.time -= 600;
  let mins = Math.floor(this.time / 10 / 60);
  let secs = Math.floor(this.time / 10 % 60);
  let tenths = this.time % 10;

   if (mins < 10) {
    mins = this.mes + mins;
  }
  if (secs < 10) {
    secs = this.mes + secs;
  }
  
  this.mes=mins + ":" + secs;
  }  

  increase() {
  this.time += 600;
  let mins = Math.floor(this.time / 10 / 60);
  let secs = Math.floor(this.time / 10 % 60);
  let tenths = this.time % 10;

   if (mins < 10) {
    mins = this.mes + mins;
  }
  if (secs < 10) {
    secs = this.mes + secs;
  }
  this.mes=mins + ":" + secs;
   }     
}