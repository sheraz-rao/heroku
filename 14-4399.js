function load()
{
    var x = document.getElementById("a1").value;
    var api = 'http://api.openweathermap.org/data/2.5/weather?apikey=7dbcb563a005513124e32ec4eeeb8a3b&units=metric&q=';
    api += x;
    
    const e = document.createElement('div');
    e.innerHTML = "Hi, I am the new element!";
	e.appendChild(newEl);
}

function add()
{
    var x = document.getElementById("a1").value;
    var y = document.getElementById("a2").value;

    var output = parseInt(x) + parseInt(y);
    document.getElementById("a3").value += output;    
}