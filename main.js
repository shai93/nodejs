var mymodule = require("./mymodule");
var http  = require("http");
//Tests urls with priority
var urlJson = [
    {
        "url": "https://doesNotExist.askarvi.com",
        "priority": 12
        },
        {
        "url": "https://www.askarvi.com",
        "priority": 7
        },
        {
        "url": "http://test1.boldtech.co",
        "priority": 2
        },
        {
        "url": "http://www.google.com",
        "priority": 4
        },
        {
        "url": "http://www.yahoo.com",
        "priority": 9
        },
        {
        "url": "https://www.facebook.com",
        "priority": 1
        }
    
];

mymodule.findServer(urlJson);



