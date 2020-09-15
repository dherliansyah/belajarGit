const object = {
    methodOne: function(){
        console.log(' nilai method one');
    },
    methodTwo: function(){
        this.methodOne()
    }
}
object.methodOne();
// console.log(object.methodOne);

