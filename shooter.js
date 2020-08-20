class Shooter {
    constructor(x,y,width,height){
this.image=loadImage("Hexagon.png");

var options={
    isStatic:true,
    restitution:0,
}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);



    }
    display(){
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}