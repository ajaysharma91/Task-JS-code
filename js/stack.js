class Stack
{

     constructor()
     {
     	this.item = [];
     }

     push(element)
     {
     	this.item.push(element);
     }

     pop()
     {
     	if(this.item.isEmpty())
     	{
     		document.write("stack is underflow!!!");
     	}
     	else
     	{
     		return this.item.pop();
     	}
     }

     peek(){

     		return this.item[this.item.length-1];	
     }


}


printValue()
{
	var str="";
	for (var i = item.length - 1; i >= 0; i--) {
		str+= item[i];
	}
}


let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    document.write(printValue());

    console.log(stack.pop());
    console.log(stack.peek());