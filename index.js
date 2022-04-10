document.querySelector("#roll").addEventListener("click",rollDice);

var winner= document.querySelector("#winner");
var  member1=document.querySelector("#member-1");
var  member2=document.querySelector("#member-2");
var  member3=document.querySelector("#member-3");



function rollDice()
{
    console.log("inner funn")
    var member1_result=  Math.floor(Math.random() * 6)+1;
    var member2_result=  Math.floor(Math.random() * 6)+1;
    var member3_result=  Math.floor(Math.random() * 6)+1;


    member1.innerText = member1_result;
    member2.innerText = member2_result;
    member3.innerText = member3_result;


    // senerio 1
    if(member1_result > member2_result && member1_result > member3_result && 
       member2_result< member1_result && member2_result > member3_result )
    {
        member1.style.backgroundColor="green"
        member2.style.backgroundColor="blue"
        member3.style.backgroundColor="red"

        winner.innerText="Winner- Member -A" 

    }
    else if(member1_result > member2_result && member1_result > member3_result && 
       member3_result< member1_result && member3_result > member2_result )
    {
        member1.style.backgroundColor="green"
        member2.style.backgroundColor="red"
        member3.style.backgroundColor="blue"

        winner.innerText="Winner:- Member -A" 

    }

    
    // senerio 2
    if(member2_result > member1_result && member2_result > member3_result && 
       member3_result< member2_result && member3_result > member1_result )
    {
        member1.style.backgroundColor="red"
        member2.style.backgroundColor="green"
        member3.style.backgroundColor="blue"

        winner.innerText="Winner:- Member -B" 

    }
    else if(member2_result > member1_result && member2_result > member3_result && 
       member1_result< member2_result && member1_result > member3_result )
    {
        member1.style.backgroundColor="blue"
        member2.style.backgroundColor="green"
        member3.style.backgroundColor="red"

        winner.innerText="Winner:- Member -B" 

    }

    
    // senerio 3
    if(member3_result > member1_result && member3_result > member2_result && 
       member1_result< member3_result && member1_result > member2_result )
    {
        member1.style.backgroundColor="blue"
        member2.style.backgroundColor="red"
        member3.style.backgroundColor="green"

        winner.innerText="Winner:- Member -C" 

    }
    else if(member3_result > member1_result && member3_result > member2_result && 
       member2_result< member3_result && member2_result > member1_result )
    {
        member1.style.backgroundColor="red"
        member2.style.backgroundColor="blue"
        member3.style.backgroundColor="green"

        winner.innerText="Winner:- Member -C" 

    }


    // senerio equality 1
    else if(member1_result == member2_result && member3_result > member1_result)
    {
        member1.style.backgroundColor="blue"
        member2.style.backgroundColor="blue"
        member3.style.backgroundColor="green"

        winner.innerText="Winner:- Member -C" 

    }

    else if(member1_result == member2_result && member3_result < member1_result)
    {
        member1.style.backgroundColor="blue"
        member2.style.backgroundColor="blue"
        member3.style.backgroundColor="red"

        winner.innerText="Draw" 

    }

    // senerio equality 2
    else if(member2_result == member3_result && member1_result > member2_result)
    {
        member1.style.backgroundColor="green"
        member2.style.backgroundColor="blue"
        member3.style.backgroundColor="blue"

        winner.innerText="Winner:- Member -A" 

    }

    else if(member2_result == member3_result && member1_result < member2_result)
    {
        member1.style.backgroundColor="red"
        member2.style.backgroundColor="blue"
        member3.style.backgroundColor="blue"

        winner.innerText="Draw ";

    }

    // senerio equality 3
    else if(member1_result == member3_result && member2_result > member1_result)
    {
        member1.style.backgroundColor="blue"
        member2.style.backgroundColor="green"
        member3.style.backgroundColor="blue"

        winner.innerText="Winner:- Member -B" 

    }

    else if(member1_result == member3_result && member2_result < member1_result)
    {
        member1.style.backgroundColor="blue"
        member2.style.backgroundColor="red"
        member3.style.backgroundColor="blue"

        winner.innerText="Draw ";

    }

    // Senerio equality 4
    else if(member1_result == member2_result && member2_result == member3_result && 
            member1_result == member3_result )
            {
                member1.style.backgroundColor="blue"
                member2.style.backgroundColor="blue"
                member3.style.backgroundColor="blue"

                winner.innerText="Draw ";
            }

}