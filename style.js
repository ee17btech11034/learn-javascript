/*

DOM Selectors:
    --> NodeLists; HTMLCollections, etc.



// double click on HTML file. This will open in browser. 
    --> inspect > console
        --> `document.getElementById('heading1')`
            --> it return while element ==> `<h1 id="heading1" class="main-headings">Hello Raj</h1>`
            --> Here we can access all attributes  like id, className, conect etc from here. 
            --> `document.getElementById('heading1').id` ==> "heading1" 
            --> class Vs className *********************************************************************************
                --> we write class but when DOM creates its Odject then it uses "className" that's why we use className to access not class
                --> `document.getElementById('heading1').class` ==> undefined 
                --> `document.getElementById('heading1').className` ==> "main-headings" 
            
            --> Access using Attrubites:
                --> `document.getElementById('heading1').getAttribute('id')` -> "heading1" 
                --> `document.getElementById('heading1').getAttribute('class')` -> "main-headings"  **********************
            
            --> Set the new Attribute or update one:    
                --> `document.getElementById('heading1').setAttribute('id', "heading2")` -> undefined return krta hai
                --> `document.getElementById('heading1').setAttribute('id', "heading2 heading3")` -> undefined return krta hai -> set multiple val. 
                        --> I know we should not assign multiple id to a single element as no sense, just for practice
            
            --> style this:
                --> we can store the selected element ans then perform actions on that as well
                --> `const pageheading = document.getElementById('heading1')`
                    --> `pageheading.style.backgroundColor="purple"`
                    --> `pageheading.style.color="red"`

    ## .textContent Vs .innerHTML Vs .innerText ********************************************
        --> innerHTMl supports HTML tags bit other two do not.
        --> `const pagePara = document.getElementsByTagName('p')[0]` //used indexing as return HTMLCollections of all p tags.
        --> `pagePara.innerHTML`:
            --> return content inside thiselemt, both span are as it is.
            --> 'I hope you all are okay. <span style="display: none;">hiddedn span</span> <span>visible span</span>'
        -->`pagePara.textContent`:
            --> return text that is without anytags, even hidden text will be visible but no tags and all only text
            --> 'I hope you all are okay. hiddedn span visible span'
        -->`pagePara.innerText`:
            --> return visible text, text which is visible on page
            --> 'I hope you all are okay. visible span'
    --> we can select by className as well  `document.getElementById('c1')`


    ## QuerySelectors:
        --> selectors are similar to CSS like ., #, tagname etc. 
        --> document.querySelector:
            --> returns the first element with this tag ("h1"), class (".className"), id ("#headin1") *********
            --> `document.querySelector('h1')`
        --> document.querySelectorAll:
            --> returns the NodeList of elements with this tag
            --> `document.querySelectorAll('h1')`
                --> access using indexing
                --> `document.querySelectorAll('h1')[0]`
        
        -> even we can select using attributes as well ('input[type="password"]) //select the input field with type=password
        -> we can use all css selectors like ("p:first-child"), etc
    
    ## NodeLists:
        --> check the prototype and we can see forEach that means we can use forEach here. 
        --> it is similar to array but not array as we can not use map here.
        --> Always use functions written in prototype.
        --> we get this in queryselectorAll
    
    ## HTMLCollections:
        --> it does not have any loop function in prototypes
        --> we get this in 'getElementsByClassname".
    
    ## convert to array:
        --> we can convert NodeLists, HTMLCollections to array and use array functions
        --> `Array.from(pagePara) //provide that variable
*/