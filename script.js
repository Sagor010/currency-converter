
     function firstToSecond(){
      var input1=document.getElementById("firstCurrency").value;
      var input2=document.getElementById("secondCurrency").value;

      if(document.getElementById('inputCurrency').value == 'BDT'){

       if(document.getElementById('outputCurrency').value == 'BDT1'){
         document.getElementById('secondCurrency').value=input1*1;
       }

       else if(document.getElementById('outputCurrency').value == 'USD1'){
         document.getElementById('secondCurrency').value=input1*0.011786157;
       }

       else if(document.getElementById('outputCurrency').value == 'GBP1'){
         document.getElementById('secondCurrency').value=input1*0.0085371634;
       }

       else if(document.getElementById('outputCurrency').value == 'INR1'){
         document.getElementById('secondCurrency').value=input1*0.87360431;
       }

       else if(document.getElementById('outputCurrency').value == 'AED1'){
         document.getElementById('secondCurrency').value=input1*0.043284663;
       }
       
      }

     if(document.getElementById('inputCurrency').value == 'USD'){

       if(document.getElementById('outputCurrency').value == 'BDT1'){
         document.getElementById('secondCurrency').value=input1*84.845294;
       }

       else if(document.getElementById('outputCurrency').value == 'USD1'){
        document.getElementById('secondCurrency').value=input1*1.00;
       }

       else if(document.getElementById('outputCurrency').value == 'GBP1'){
         document.getElementById('secondCurrency').value=input1*0.72433814;
       }

       else if(document.getElementById('outputCurrency').value == 'INR1'){
        document.getElementById('secondCurrency').value=input1*74.121215;
       }

       else if(document.getElementById('outputCurrency').value == 'AED1'){
        document.getElementById('secondCurrency').value=input1*3.6725;
       }

     }

     if(document.getElementById('inputCurrency').value == 'GBP'){

      if(document.getElementById('outputCurrency').value == 'BDT1'){
        document.getElementById('secondCurrency').value=input1*117.13493;
      }

      else if(document.getElementById('outputCurrency').value == 'USD1'){
        document.getElementById('secondCurrency').value=input1*1.3806015;
      }

      else if(document.getElementById('outputCurrency').value == 'GBP1'){
        document.getElementById('secondCurrency').value=input1*1.00;
      }

      else if(document.getElementById('outputCurrency').value == 'INR1'){
       document.getElementById('secondCurrency').value=input1*102.33186;
      }

      else if(document.getElementById('outputCurrency').value == 'AED1'){
        document.getElementById('secondCurrency').value=input1*5.0702592;
      }

    }

   if(document.getElementById('inputCurrency').value == 'INR'){

     if(document.getElementById('outputCurrency').value == 'BDT1'){
      document.getElementById('secondCurrency').value=input1*1.144683;
     }

    else if(document.getElementById('outputCurrency').value == 'USD1'){
      document.getElementById('secondCurrency').value=input1*0.013491414;
    }

    else if(document.getElementById('outputCurrency').value == 'GBP1'){
      document.getElementById('secondCurrency').value=input1*0.0097721273;
    }

    else if(document.getElementById('outputCurrency').value == 'INR1'){
      document.getElementById('secondCurrency').value=input1*1.00;
    }

    else if(document.getElementById('outputCurrency').value == 'AED1'){
     document.getElementById('secondCurrency').value=input1*0.049547218;
    }

   }


   if(document.getElementById('inputCurrency').value == 'AED'){

    if(document.getElementById('outputCurrency').value == 'BDT1'){
     document.getElementById('secondCurrency').value=input1*23.102871;
    }

    else if(document.getElementById('outputCurrency').value == 'USD1'){
     document.getElementById('secondCurrency').value=input1*0.27229408;
    }

   else if(document.getElementById('outputCurrency').value == 'GBP1'){
     document.getElementById('secondCurrency').value=input1*0.19722858;
   }

   else if(document.getElementById('outputCurrency').value == 'INR1'){
    document.getElementById('secondCurrency').value=input1*20.182768;
   }

   else if(document.getElementById('outputCurrency').value == 'AED1'){
     document.getElementById('secondCurrency').value=input1*1.00;
   }

  }


 }