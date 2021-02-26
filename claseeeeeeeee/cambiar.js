const body = document.body



var h = document.createElement("H1");
var t = document.createTextNode("Your H1 text");
h.appendChild(t);

document.body.appendChild(h);


//false false
//true false
//false true
//true true

  fetch('https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {

    var nombres = ["peanuts", "spaguetti", "weekend", "candy", "reading", "lasagna","exercise","computer","pizza","carrot","dentist","brusel sprout"];
    

    var table = document.createElement('table');
      for( var i = 0; i < data.length; i++ ) {
      
        var child = data[i];
        if(i === 0 ) {
          addHeaders(table, Object.keys(child));
        }
        var row = table.insertRow();
        Object.keys(child).forEach(function(k) {
          console.log(k);
          console.log(k);
          var cell = row.insertCell();
          cell.appendChild(document.createTextNode(child[k]));
          console.log(child[k]);
        })
      }
 addTable(nombres, data);
      
      document.getElementById('container').appendChild(table);  
    // Work with JSON data here
    console.log(tableFor("pizza",data))
    var pizza = tableFor("pizza", data);
    var num = mcc(pizza);
    var pizza = tableFor("pizza", data);
    var pizza = tableFor("pizza", data);
    var pizza = tableFor("pizza", data);
    var pizza = tableFor("pizza", data);
    
  })
  .catch((err) => {
    // Do something for an error here
  })


  


function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
   }

function tableFor(event, data) {
    console.log(data)
       var table = [0, 0, 0, 0];
       
   
        for (var i = 0; i < data.length; i++) {
          var entry = data[i], index = 0;
        
           if (hasEvent(event, entry)) index += 1;
           if (entry.squirrel) index += 2;
           table[index] += 1;
          
      }
      
      return table;
      
     }

     function addHeaders(table, keys) {
        var row = table.insertRow();
        for( var i = 0; i < keys.length; i++ ) {
          var cell = row.insertCell();
          cell.appendChild(document.createTextNode(keys[i]));
         
        }
      }

      function tablaa(data)
      {
       
    }


    const someObject = { 
        prop1: 0, 
        prop2: 100 
    } 
     
    // fs is a module of nodejs to interact with file system 
    // we specify the file name and the stringified JSON object 
    // as well as a callback to handle a possible error 
    fs.writeFile('myfile.json', JSON.stringify(someObject), (err) => { 
      if (err) throw err 
      console.log('The file has been saved!') 
    }) 


    function mcc(vector)
    {
        let tn = vector[0];
        let fp = vector[2];
        let fn = vector[1];
        let tp = vector[3];

        
        return (tp *tn - fp * fn) / marth.sqrt((tp+fp) * (tp+fn) *(tn+fp) *(tn+fn));
    }



    function addTable(nombres, data) {
        var myTableDiv = document.getElementById("myDynamicTable");
      
        var table = document.createElement('TABLE');
        table.border = '1';
      
        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
      
        for (var i = 0; i < 11; i++) {
          var tr = document.createElement('TR');
          tableBody.appendChild(tr);
      
          
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode( nombres[i] + "," + tableFor(nombres[i],data)));
            tr.appendChild(td);
          
        }
        myTableDiv.appendChild(table);
      }
      




