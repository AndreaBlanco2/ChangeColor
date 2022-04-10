//add a function on initial load to unselect everything

function changeBg()
{
    //
var select = document.getElementById('colorsel');
var value = select.options[select.selectedIndex].value;

//console.log(value); // en
 //Assign color based on value 
 document.getElementById('td_text').style.backgroundColor = value;
}

function changeColor()
{
    var select = document.getElementsByName('color'); //this is an array
    
    for (var i = 0; i < select.length; i++) //this for is ok
    {
        if (select[i].checked)
        {
            var radioSelected = select[i].value;
            console.log(select[i].value);

        }

    }
    
    document.getElementById('td_text').style.color = radioSelected;

    // console.log(radioSelected);
}
