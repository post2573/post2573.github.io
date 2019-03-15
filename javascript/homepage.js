function Init(){
    var onload = populateList();
    var translate = document.getElementById("translate");
    translate.addEventListener("click", TranslatePage, false);
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
               
        });
}

function TranslatePage(event){
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?"
    var keyAPI="trnsl.1.1.20190310T195519Z.205708477287cf70.fbf62d44f53be9ed4b1f466a5e6f0ae621b628c9";
    var textItems = document.getElementsByTagName("*");
    var langAPI = document.getElementById("lang").value;
    
    for (let i = 0; i < textItems.length; i++) {
        var req = new XMLHttpRequest();
        var text = textItems[i].textContent;
        var data = "key="+keyAPI+"&text="+text+"&lang="+langAPI;
        url = url + data;
        req.open("POST", url, true);
        req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        req.send(data);
        req.onreadystatechange = function(){
            if (req.readyState == 4 && req.status == 200) {
                var res = this.responseText;
                var json = JSON.parse(res);
                textItems[i].innerHTML = json.text[0];
            }
        }
    }
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