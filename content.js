function countArray(arr) 
{
    var obj = { };
    for (var y = 0, k = arr.length; y < k; y++) 
    {
        obj[arr[y]] = (obj[arr[y]] || 0) + 1;
    }
    return obj;
}


var elements = document.getElementsByClassName('DailySchedule Item');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var greenValue = "#70db70";
    var redValue = "#ff8080";
    var yellowValue = '#FFFF00';
    var results = [];
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        var nodeName = String(node.id);
        //Grab only the Members span (Don't care about times)
        if(nodeName.indexOf('Members') >=0)
        {
            var content = String(node.innerText);
            //If there's no one on call, change the field to be Red
            if(content.length == 0)
            {
                element.style.backgroundColor = redValue;
            }
            //There are people on call, we will want to figure out if it's a valid crew of not
            else
            {
                try
                {
                    crewArray = []
                    membersText = content.split(',');
                    for(x = 0; x < membersText.length; x++){
                        //Make an array with the crew positions
                        crewArray.push(membersText[x].match(/\(([^)]+)\)/)[1]);    
                    }
                }
                catch(err)
                {
                    
                }
                 //Only one person is on call (not a crew)
                if(crewArray.length == 1){
                    element.style.backgroundColor = redValue;
                }
                else
                {
                    //Check a matrix of the results
                    crewRes = countArray(crewArray);
                    // ### INVALID CREW ###
                    //Invalid 1 - More than 4 people on call.
                    if(crewArray.length > 4){
                        element.style.backgroundColor = yellowValue;
                    } 
                    // More than 2 cadets
                    else if(crewRes['Cadet'] > 2)
                    {
                        element.style.backgroundColor = yellowValue;
                    }
                    // More than 2 provisionals
                    else if(crewRes['Prov 18+ / Driver'] > 2)
                    {
                        element.style.backgroundColor = yellowValue;
                    }
                    else if(crewRes['Prov 18+'] > 2)
                    {
                        element.style.backgroundColor = yellowValue;
                    }
                    // Need ability to check combinations
                    
                    //#1:    2x900 Drivers
                    else if(crewRes['900Driver'] >= 2)
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#2:    1x900 Driver, 1x900N
                    else if((crewRes['900Driver'] >= 1) && (crewRes['900 EMT'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#3:    1x900 Driver, 1x700 EMT, 1x 500D
                    else if((crewRes['900Driver'] >= 1) && (crewRes['700 EMT'] >= 1) && (crewRes['Prov 18+ / Driver'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#4:    1x900 Driver, 1x700 EMT, 1x 500N
                    else if((crewRes['900Driver'] >= 1) && (crewRes['700 EMT'] >= 1) && (crewRes['Prov 18+'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#5:    1x200 Driver, 2x900N EMT
                    else if((crewRes['Driver'] >= 1) && (crewRes['900 EMT'] >= 2))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#6:    1x200 Driver, 1x700 EMT, 1x500D
                    else if((crewRes['Driver'] >= 1) && (crewRes['700 EMT'] >= 1) && (crewRes['Prov 18+ / Driver'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#7:    1x200 Driver, 1x700 EMT, 1x500N
                    else if((crewRes['Driver'] >= 1) && (crewRes['700 EMT'] >= 1) && (crewRes['Prov 18+'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#8:    1x200 Driver, 1x900 Driver, 1x300N
                    else if((crewRes['Driver'] >= 1) && (crewRes['900Driver'] >= 1) && (crewRes['Prov'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#9:    1x200 Driver, 1x900 Driver, 1x500N
                    else if((crewRes['Driver'] >= 1) && (crewRes['900Driver'] >= 1) && (crewRes['Prov 18+'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#10:    1x200 Driver, 1x900 Driver, 1x500N
                    else if((crewRes['Driver'] >= 1) && (crewRes['900 EMT'] >= 1) && (crewRes['Prov 18+'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#11:    1x200 Driver, 1x900 EMT, 1x300N
                    else if((crewRes['Driver'] >= 1) && (crewRes['900 EMT'] >= 1) && (crewRes['Prov'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#12:    1x500D, 1x900 EMT
                    else if((crewRes['Prov 18+ / Driver'] >= 1) && (crewRes['900 EMT'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    //#13:    1x500D, 1x900 Driver
                    else if((crewRes['Prov 18+ / Driver'] >= 1) && (crewRes['900Driver'] >= 1))
                    {
                        element.style.backgroundColor = greenValue;
                    }
                    else
                    {
                        element.style.backgroundColor = redValue;
                    }                   
                };
            }
        }
    }
}