class Log {
    constructor (x,y,height,angle) {
    var options = {
    restitution:0.5,
    friction:2
    }
    this.body = Bodies.rectangle (x,y,20,height,options)
    World.add (world,this.body)
    Matter.Body.setAngle (this.body,angle)
    this.w = 20
    this.h = height
        }
    display () {
    var pos = this.body.position
    var angle = this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    fill ("brown")
    rectMode(CENTER)
    rect (0,0,this.w,this.h) 
    pop ()
    }
    }