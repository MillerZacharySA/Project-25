class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");

        this.body = Bodies.circle(x,y,(r-20)/2,options);

        World.add(world,this.body)
    }
    display(){
        var posx = this.body.position.x;
        var posy = this.body.position.y;
        push();
        translate(posx, posy);       
        rectMode(CENTER); 
        //strokeWeight(3); 
        fill(255,0,255); 
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}