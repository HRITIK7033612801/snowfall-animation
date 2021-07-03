class Snow{
    constructor(x,y){
        var options={
            friction:1,
            dencity:1,

        }
        this.body=Bodies.rectangle(100,100,options)
        this.image=loadImage("snow5.webp")
        world .add(World,this.body);
    }
    display(){
        this.body.addImage(this.image)
    }
}