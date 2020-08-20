class target{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
        
        
            }
            display(){
                fill(random(0,255),random(0,255),random(0,255));
                rect(this.body.position.x,this.body.position.y,this.width,this.height);
                
            }
    }
