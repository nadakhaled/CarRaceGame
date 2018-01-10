class  Road {
constructor(themeId,speed) {
    this._themeId=themeId
    this._speed=speed
    this._picNum=0
    this._timer=''
    this._roadDec=[]
    this._canvas=document.getElementById('myCanvas')
    this._ctx =this._canvas.getContext("2d")
    this._y=45
    this._width=400
    this._height=window.innerHeight
    this.draw()
  }

  drawLines(){
    this._ctx.clearRect(0,0,this._width,this._height)
    for (var i = 0; i <23; i++) {
     if (this._roadDec[i][1] <this._height) {
       this._roadDec[i][1] += this._roadDec[i][4]
     }else if (this._roadDec[i][1] > this._height - 1) {
        this._roadDec[i][1] =-45
      }
     this._ctx.fillStyle = '#fff'
      this._ctx.fillRect(this._roadDec[i][0], this._roadDec[i][1],this._roadDec[i][2], this._roadDec[i][3])
    }

  }
  draw(){
    for (var i = 0; i < 23; i++) {
      this._roadDec.push([this._canvas.width/3,this._y,5,40,5])
      this._roadDec.push([2*this._canvas.width/3,this._y,5,40,5])
      this._y+= 80+ 10
    }
    var _this = this
    this._timer= setInterval(function(){_this.drawLines()},this._speed)
  }

  stopTimer(){
    clearInterval(this._timer)
  }

  set timer(time){
    var _this=this
    clearInterval(this._timer)
    this._timer= setInterval(function (){_this.drawLines()},time)
  }

  set themes(th){
    this._themes=th
  }

  get themes (){
    return this._themes
  }

  set picNum(s){
    this._picNum=s
  }

  get picNum(){
    return this._picNum
  }

  set speed(sp){
    this._speed=sp
  }

  get speed(){
    return this._speed
  }
//    generateCar(){
//     setInterval(function(){
//     var enemyIndex= (Math.floor(Math.random()*Math.random()*Math.random()*20)*500000)%3
//     console.log(enemyIndex);
//     var enemy=new enemyCar()
//     enemy.draw()
//
// },2000)
//   }

}
