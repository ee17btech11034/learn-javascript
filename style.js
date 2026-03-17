/*
# bind keyword: 
    --> Suppose we have a class React which has m=some peoperties and methods. 
        --> No I want When I create an instance of "React class"
        --> Then I get the reference of buttone in HTMl, 
        --> then i run a methods 'handle click' which console "this.server"

    --> this keyword:
        --> console.log("server: ", this.server); //this.server values is undefined
        --> console.log("this: ", this); // <button id="btn1">button</button>

        - Here we can see handles function was called by "button" so that means parent context for handler is button. 
            that is why we can not acces properties of class even if it is defined in class.  *******************************
        
        --> Context matter alot.
    
    --> to acces the properties of class/constructor we give context of class to this function:
        --> this process is called BIND.
        --> .addEventListener('click', this.handleClick.bind(this)) here we bind the context of constructor usinf `this` keyword

*/

