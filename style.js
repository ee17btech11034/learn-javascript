/*

# Events:
    --> JS runs in a single thread and seq, but it has functionality of async.
    --> Event is one of them.
    --> We have many events on browser window like click, scroll, hover, etc.

    --> When we have multiple comps then it is not recommended to add onlick on html bcz it will heavy to maintin. like what if I change the function name or something like this
        --> <a onclick =funcName>    // Not recommened in big application    **************************
        --> doc.getelbyid("a-id").onclick = ()=>{}  //This is better than above but it have less features (does not have propogation ability) then eventlistners.
        --> doc.getelbyid("a-id").addeventlist('event-type, function)    //Best approach as it provides PROPOGATION ABILITY *******************************************
            --> earlier there was a functinality ".attachEvent" -> now deprecated.
            --> ".on" was in framework "jQuery" which was popular before react
    --> In React, we can use onclick on buttons or compa bcz it is potimized in React
 
# .addEventListners:
    --> doc.getelbyid("a-id").addeventlist('event-type, function(e)(), propogation) ***********************************
        --> this has 3 parameters but default propogation is false.
            --> Event Propogation has 2 context: 
                Ex: we have ul > li > div 
                We add event listeners to all of these.
                Now when we click on div comtainer flow will be 
                --> 1. Event Bubbling
                    --> when we set false, this is used
                    --> Inner to outer.
                    --> Flow: output `div eventlistner func > li eventlistner func > ul eventlistner func`
                --> 2. Event Capturing
                    --> when we set true, this is used
                    --> outer to inner
                    --> FLOW: output ` ul eventlistner func > li eventlistner func > div eventlistner func
                --> e.stopPropogation()
                    --> to stop propogation 
        --> e :
            --> What kind of event is that `console.log(e)` in function
            --> type :-> keyboard events or mouse events
            --> timestamp :-> timestamp of everything like when click or all
            --> preventDefault :-> we can change the default behaviour of that element, like when user click on submit it does not submit.
            --> target
            --> toElement
            --> srcElement
            --> currentTarget
            --> clientX
            --> clientY
            --> screenX
            --> screenY
            --> altKey
            --> ctrlKey
            --> shiftKey
            --> keyCode (code for 'a', 'b', 'c', 'd', ...)
        
            --> e.preventDefault() --> we can put it on a  a tag which is rediecting to a link. this will stop this to redirect



# .remove method:   
    --> suppose ul > li > div > a
    --> i want that whenever I click on a div that block shoul disppear. 
        --> we will add eventlistner to ul
        --> e.target => to get the exact element which triggered it
        --> Now if we remove this taret then it will just remove div but li is there which is not good
        --> go to it's parent (li) and then remove that li
        --> e.target.parentNode => select the parent
        --> e.target.parentNode.remove()
            --> OR other way is we go to ul and then remove li. 
            --> li_tag = e.target.parentNode
            --> li_tag.parentNode.removeChild(li_tag)

    --> SpillOver:=> Issue here is what if someone click on li then it will simply remove div as we are removing the parentNode.
        --> we will use if condition 
            --> e.target.tagName === "DIV"






            */


