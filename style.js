/*

DOM manipulation:
    

    # Edit Element
        --> document.querySelector(".weekdays").appendChild(li)
                --> Here we have to traverse again and again.
        --> thursdayDiv.replaceWith(newthursdayDiv) //we did an replace
                --> Here we have reference in thurDiv and just running replace
        
    --> Simple way to add:
        --> const monDiv = document.querySelector("li:last-child")
        --> monDiv.outerHTML = `<li> Sunday </li>` 

    # Remove Element
        --> remove it
        --> monDiv.remove()
*/


