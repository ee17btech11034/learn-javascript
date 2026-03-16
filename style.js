/*

# settimeout:
    --> setTimeout(handlerFunc, timeOutTime)
        --> setTimeout(handlerFunc, timeOutTime, arg1, arg2)
        --> we can define function and give reference to it or
            --> we can write here only
        --> if we take reference from some where and that func accepts args like arg1, arg2
        --> run once after this time

    --> Clear timeout
        --> clearTimeout(reference)
    
# setInterval:
    --> setInterval(handler, repeatTime, args)
        --> repeat itself after repeatTime.
        --> Sometimes it clashes or override each other which is not good exp like glitch. better to clean the previous interval

    --> clear setinterval
    
    almost sim,ilar to settimeout



# Projects:
    --> 1. Keyboard check
        --> e.key -> tells the key like a, b, alt
        --> e.keyCode -> keyCode for that key but not deprecated we use .code
        --> e.code -> code for that key
    --> 2. Unlimited color -> change color of bg after 1 sec once I click on button and stop when we click on stop
        --> Random color generate 
            --> we will use hex val as it is easy (#_ _ _ _ _ _) -> 2 chars denote R, G, B
            --> const hexValues = "0123456789ABCDEF"
            --> we will use      floor(math.random*16 ) and 
            --> str = "#"
            --> str += randomnum for 6 times
            --> we define interval ref in global using let and then update in start
                --> using this var we can clear this
                --> But when we clear this then better to assign that reference to null. *********************
            
            --> When we assign this to null and again click on start then it will show issues as we directly can not assign to null. 
                --> better to use if statement and then assign it to that so it won't
*/
