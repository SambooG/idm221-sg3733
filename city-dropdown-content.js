
                  function myFunction() {document.getElementById("myDropdownPa").classList.toggle("show");}
                  /*Close the dropdown menu if the user clicks outside of it */
                  window.onclick = function(event) { if (!event.target.matches('.dropbtn')) 
                  {var dropdowns = document.getElementsByClassName("dropdown-content1"); 
                  var i; 
                  for (i = 0; i < dropdowns.length; i++) { 
                  var openDropdownPa = dropdowns[i]; if (openDropdownPa.classList.contains('show')) 
                  {
                  openDropdownPa.classList.remove('show'); 
                    } 
                  }
                 }
                }
            

              
 

  


    function myFunction() {document.getElementById("myDropdown").classList.toggle("show");}
    /*Close the dropdown menu if the user clicks outside of it */
    window.onclick = function(event) { if (!event.target.matches('.dropbtn1')) 
    {var dropdowns = document.getElementsByClassName("dropdown-content2"); 
    var i; 
    for (i = 0; i < dropdowns.length; i++) { 
    var openDropdown = dropdowns[i]; if (openDropdown.classList.contains('show')) 
    {
    openDropdown.classList.remove('show'); 
      } 
    }
   }
  }
  