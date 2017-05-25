
// Declare variables
var menuObj, topMenu, subMenu, listItem, thread, listText, listThread;

menuObj = {
    "first" : "Events",
    "second" : "Articles",
    "Reporting" : {
        "first" : "Activity Log",
        "Statistics" : {
            "first" : "Real-Time",
            "second" : "Source Metrics",
            "third" : "Users",
            "fourth" : "Slideshows"
        },
        "third" : "Export/Archive"
    },
    "fourth" : "Syndication",
    "fifth" : "API",
    "Support" : {
        "first" : "Articles",
        "second" : "FAQs"
    }
};

function generateMenu(currentObj) {

    // Create root element
    topMenu = document.createElement('ul');

    function processMenu(obj, subList) {
        debugger;

        // Loop through menuObj properties
        Object.keys(obj).forEach(function (item) {

            subMenu = document.createElement('ul');
            listItem = document.createElement('li');
            listThread = document.createTextNode(item);
            thread = document.createTextNode(obj[item]);

            // If the item is an object, create a nested ul tag
            // if not, just append the value to the list
            if (typeof obj[item] === 'object') {
                listItem.appendChild(listThread);
                listItem.appendChild(subMenu);
                subList.appendChild(listItem);
                processMenu(obj[item], subMenu);
            } else {
                listItem.appendChild(thread);
                subList.appendChild(listItem);
            }
        });
    }

    processMenu(currentObj, topMenu);
    return topMenu;
}

document.body.appendChild(generateMenu(menuObj));