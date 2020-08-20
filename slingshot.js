class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
        }
        this.cons=Matter.Constraint.create(options);

        World.add(world,this.cons);
    }
    display(){
var pointA=this.cons.bodyA.position;
var pointB=this.cons.pointB;

        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}