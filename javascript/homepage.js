function Init(){
    var onload = populateList();
}

function populateList(){
    var data = GetJSON("home.json", function(data){
    var prof = data.prof;
    var classes = data.classes;
    for(var i in prof)
    {
        var li_new = document.createElement("li");
        li_new.textContent = prof[i].job;
        var container1 = document.getElementById("prof");
        container1.appendChild(li_new);
    }
    for(var j in classes)
    {
        var li_new = document.createElement("li");
        li_new.textContent = classes[j].class;
        var container1 = document.getElementById("class");
        container1.appendChild(li_new);
    }
            /*
            for(i in data)
            {   
                if(i == "prof")
                {
                    var li_new = document.createElement("li");
                    li_new.textContent = data[i];
                    var container1 = document.getElementById("prof");
                    container1.appendChild(li_new);
                }
                else{

                    var li_new = document.createElement("li");
                    li_new.textContent = data[i];
                    var container1 = document.getElementById("class");
                    container1.appendChild(li_new);
                }
            }
            */
    });
    /*
    console.log("hello");
    for(i in data)
    {
        console.log(data[i]);
        var li_new = document.createElement("li");
        li_new.textContent = data[i];
        var container1 = document.getElementById("prof");
        container1.appendChild(li_new);
    }
    */
}


function GetJSON(url, callback) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            var data = JSON.parse(req.response);
            callback(data);
        }
    };
    req.open("GET", url, true);
    req.send();
}