class stone{
    constructor(x,y){

        this.x=x;
        this.y=y;
        this.radius= 30;
        
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(this.x, this.y, this.radius, options)
        this.image=loadImage("stone.png")
    }
    dispaly()
    {
        var posBottom=this.bottomBody.position;
        push()
        translate(posBottom.x, posBottom.y+10);
        fill(255)
        imageMode(CENTER);
        image(this.image,0,0)
        pop()

    }



}