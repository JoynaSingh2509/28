class Mango{
constructor(x,y){
        var options = {
            isStatic:true,
			restitution:0,
			friction:1,
        }
        this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.image=loadImage("images/mango.png")

		this.body=Bodies.rectangle(x, y, width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			//ellipseMode(CENTER);		
			//ellipse(500,300,this.r,this.r);
			imageMode(CENTER);
			image(this.image,500,300,70,70);
			pop()
			
	}

}
