/*

DOM manipulation:
    --> Create a new element.

    --> const weekDaysParent = document.querySelector(".weekdays")
    --> `weekDaysParent.children` -> return HTML Collections
        --> Either we can convert this or 
        --> Use classic for loop
    
--> When we do queryselector or any getElemeny y id or class they are expensive tranverse as it traverse tree and then find it. 
    --> If we have selected an element and want to do some task on this or its children or neighbour. 
    --> It is better not to use query selector again on whole document.
    --> We can use: 
            --> .children 
                --> console.log(weekDaysParent.children)
            --> .firstchild 
                --> console.log(weekDaysParent.firstElementChild); //return Monday div as return first child element of parent
            --> .lastchild
                --> console.log(weekDaysParent.lastElementChild); //return Sunday div as return last child element of parent
            --> .parent 
                --> console.log(weekDaysParent.children[1].parentElement); //return parent element of child[1].
            --> .nextElementSibling
                --> console.log(weekDaysParent.children[1].nextElementSibling); //return next sibling div of Wed.
            --> .childNodes 
                --> console.log("Nodes: ", weekDaysParent.childNodes); //look at the length (15) but how?
                --> For DOM, everything is a Node.
                --> space after elemnt written in HTML is also a Node "Text Node" ****************************************
                --> one tag to another is a Node.
                --> If we add a comment in those spaces then also +2 as (space + comment tag + space)
                --> React is mostly manipulate through childNodes


// Create an Element:
    --> const newElement = document.createElement('div') //create an element of div tag

    --> we can use . (dot) or setAttribute to set the values. 
        --> newElement.className = "a b c" //it go to document then bring this className and then update and then go there and set. 
        --> newElement.setAttribute("className", "a b c") //directly set it
        ==> We prefer setAttribute bcz it saves our ONE round of rip. 
            --> it does not fetch it, it just set it.
            --> Even if it is not present in DOM yet.
    
    --> Similar is                       newElement.innerHTML = "New created div"
        --> 2 round trip for .innerHTML
                        OR
        --> `const newinnerText = document.createTextNode("New created div")`
        -->`newElement.appendChild(newinnerText)`

        --> Here also 2 steps are there. So, it is up to us to decide which one to use. 

    --> Add to document:
        --> Add this to document
        --> document.body.appendChild(newElement) //adding this in body. We can go further as well
*/


