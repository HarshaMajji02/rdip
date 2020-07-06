/*Calculator */
     /*Addition operation*/
function addition(){
    var a,b,s;
    a=Number(document.getElementById("1st").value);
    b=Number(document.getElementById("2nd").value);
    s= a+b;
    document.getElementById("output").value= s;
    return s;
    }
    /*Subtraction operation*/
    function subtraction(){
    var a,b,s;
    a=Number(document.getElementById("1st").value);
    b=Number(document.getElementById("2nd").value);
    s= a-b;
    document.getElementById("output").value= s;
    return s;
    }
    /*Multiplication operation*/
    function multiply(){
    var a,b,s;
    a=Number(document.getElementById("1st").value);
    b=Number(document.getElementById("2nd").value);
    s= a*b;
    document.getElementById("output").value= s;
    return s;
    }
    /*Sqrt operation*/
    function square(){
    var a,b,s,d;
    a=Number(document.getElementById("1st").value);
    b=Number(document.getElementById("2nd").value);
    d=Math.sqrt(a);
    s=d.toFixed(3);
    document.getElementById("output").value= s;
    return s;
    }
    /*Divison Operation*/
    function division(){
    var a,b,s,d;
    a=Number(document.getElementById("1st").value);
    b=Number(document.getElementById("2nd").value);
    d= a/b;
    s=d.toFixed(3);
    document.getElementById("output").value= s;
    return s;
    }
    /*Percentage*/
    function percent(){
    var a,b,s;
    a=Number(document.getElementById("1st").value);
    b=Number(document.getElementById("2nd").value);
    s=(a/100)*b;
    document.getElementById("output").value= s;
    return s;
    }
    /*Absolute*/
    function absolute(){
    var a,b,s;
    a=Number(document.getElementById("1st").value);
    b=Number(document.getElementById("2nd").value);
    s=Math.abs(a);
    document.getElementById("output").value= s;
    return s;
    } 

/* Form Validation*/

function ss(a){
  var x = document.querySelector(a).value;
  return x;
}
function validate(){
  if (ss(".fname")==null || ss(".fname")=="") {
    alert("Please Enter name");
    return false;
  }
  if (!ss(".fname").match(/^[a-zA-Z]+$/))
    {
        alert("Please Enter A Valid Name!");
        return false;
    }
  if (ss(".email")==null || ss(".email")=="") {
    alert("Please Enter Email");
    return false;
  }
  if (ss(".phone")==null || ss(".phone")=="") {

    alert("Please Enter Phone Number");
    return false;
  }
  if(ss(".phone")<1000000000){
    alert("Please Enter Valid Phone Number");
    return false;
  }

    document.write("Thank you! for filling the form");
    return true;
}


/*Palindrome */

function fun()
{
  var str = document.getElementById('txtbox').value;
  var output = checkPalindrome(str);
  alert('Entered String "'+str +'" is "'+output+'"');
  return;
}
function checkPalindrome(str)
{
  var orignalStr;
  str = str.toLowerCase();
  orignalStr = str;
  str = str.split('');
  str = str.reverse();
  str = str.join('');
  var reverseStr = str;
  if(orignalStr == reverseStr){
    return 'Palindrome';
  }
  else
  {
    return 'Not Palindrome';
  }
}

/*Anagram*/

function checkingANAGRAM(stringA, stringB) {
        str=stringA;
        str1=stringB;
        stringA = stringA.replace(/[^\w]/g, '');
        stringA = stringA.toLowerCase();
        stringB = stringB.replace(/[^\w]/g, '');
        stringB = stringB.toLowerCase();
        stringA = stringA.split('');
        stringA = stringA.sort().join('');
        stringB = stringB.split('');
        stringB = stringB.sort().join('');
         if(stringA==="" || stringB==="")
         {
             alert("Please Enter The Strings");
             return false;
         }
      else if(stringA===stringB)
       {
           alert(str+" and "+str1+" are "+" ANAGRAMS!");
           return true;
       }

       else{
        alert(str+" and "+str1+" are "+" NOT ANAGRAMS!");
        return false;
       }
    }

/*Survival Game*/
 function sur()
    {
      var a=Math.floor(Math.random()*1000);
      var b=Math.floor(Math.random()*1000);
      document.getElementById('input1').value=a;
       document.getElementById('input2').value=b;
       return 0;
    }
    function play()
     {
       var a=document.getElementById('input1').value;
       var x=a%3;
       document.getElementById('input1').value=x;
       var b=document.getElementById('input2').value;
       var y=b%3;
       document.getElementById('input2').value=y;
       if(x==y)
       {
         alert("Tie");
         return true;
       }
       else if((x==0||y==0)&&(y==1||x==1))
       {
         alert("Human Wins");
         return true;
       }
       else if((x==1||y==1)&&(y==2||x==2))
       {
         alert("Cockroach Wins");
         return true;
       }
       else if((x==0||y==0)&&(y==2||x==2))
       {
         alert("Human Dies");
         return true;
       }
       else
       {
         alert("Try Again...!!");
         return false;
       }
       return  0;
     }