class Bird {
    constructor (x,y) {
    var options = {
    restitution:0.5,
    friction:2
    }
    this.body = Bodies.rectangle (x,y,50,50,options)
    World.add (world,this.body)
    this.w = 50
    this.h = 50
        }
    display () {
    var pos = this.body.position
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    fill ("red")
    rectMode(CENTER)
    rect (0,0,this.w,this.h) 
    pop ()
    }
    }