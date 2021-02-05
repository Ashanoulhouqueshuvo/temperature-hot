const myGirlFriendName={

    firstName:'Protiva',
    LastName:'Kanom',
    salary:34000,

    getName:function(){


        console.log(this.firstName,this.LastName);
    },
    chargeBill: function(amount,tax,tips){
        console.log(this);
         this.salary=this.salary- amount- tax - tips;
         return this.salary;
         //console.log(this.salary);

    }
    



    }

    const NewGf={
        firstName:'Toma',
        LastName:'akter',
        salary:23000
    }
    const PreviousGf=
    {

       firstName:'Vabna',
       LastName:'Akter',
       salary:21000


    }
    //   var gfChargeBill= myGirlFriendName.chargeBill.bind(NewGf);
      
    //   //gfChargeBill(1200);
    //   console.log(myGirlFriendName.salary);
    // //   gfChargeBill(1200);
    // //   gfChargeBill(12000);
    // //   gfChargeBill(2000);
    //   //myGirlFriendName.chargeBill.salary();
    //  const previousChargeBill=myGirlFriendName.chargeBill.bind(PreviousGf);
    //  previousChargeBill(1200);






     




//console.log(myGirlFriendName.firstName);
// myGirlFriendName.chargeBill(12000);
// myGirlFriendName.chargeBill(1000);
// myGirlFriendName.chargeBill(1200);
// console.log(myGirlFriendName.salary);




//myGirlFriendName.chargeBill.call(NewGf,1000);
//myGirlFriendName.chargeBill.call(NewGf,2000);
//myGirlFriendName.chargeBill.call(NewGf,3000);
// myGirlFriendName.chargeBill.call(NewGf,1000,5,40);
// myGirlFriendName.chargeBill.call(NewGf,2000,50,10);
// myGirlFriendName.chargeBill.call(NewGf,2000,100,90);
// console.log(NewGf);
myGirlFriendName.chargeBill.call(PreviousGf,1000,100,10);
console.log(PreviousGf);


















