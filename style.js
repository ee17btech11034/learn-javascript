/*
DOM Introduction:
    --> Document Object Model
    --> HTML content is the document on webpage.
        --> Open any wiki page or any page > inspect > console
            --> `console.log(window)`
                --> We get window object which has all the information needed, like geo location, document, etc.
            --> `console.log(window.document)`
                --> We will get the object of HTML page
                --> This is very common so `console.log(document)` also refers to same
            --> But if we compare content of document from `console.log(window)` WITH `console.log(window.document)`
                --> then we see that we have many function in first where as window.document has only HTML.
                --> If we want to access the other functions then use `console.dir(window.document)` or `console.dir(document)`
            --> `console.log(document.baseURI)`
                --> url of this page
            --> `console.log(document.links)`
                --> This show all the links on that page. 
                --> It is a HTMl collections not array. 

==> HTMLCollections, NodeCollections are not Array, we can convert them to array and then use array properties like forEach, etc.
    --> But we can use access using inde a[i] and some more basic.

==> Selectors:
    --> getElementById('idname')
        --> `document.getElementById('heading1') `//provide or return full h1 tag and its content
    --> Manipulate the data:
        --> `document.getElementById('heading1').innerHTML = "<h2> Changed Data</h2>"`

Document Object Model as Tree:
    --> We call everything a "Node"
                                                        Window
                                                           |
                                                        Document
                                                           |
                                                          HTML
                                                           |
                        `````````````````````````````````````````````````````````````````````````````````
                        |                                                                               |
                      HEAD (Head Node)                                                                 Body (Body node)
                        |                                                                               |
            ``````````````````````````````````                                                         div (div tag /node)  ---> Attribute
            |                   |             |                                                         |
         Title                Meta          Meta                                  `````````````````````````````````````
           |                    |              |                                  |                                    |
    Text (test node)         Atttribute (Attribute Node)                           h1 (tag/node)                   p (tag / node)
                                                                                    |                                   |
                                                                            ``````````````````                      Text Node
                                                                            |                 |
                                                                        Text Node           Attribute


*/