class Form{
//create all the materials required the constructor
    constructor(){
       this.title= createElement('h1');
        this.button = createButton("Report");

        this.vehicleNumber = createElement('h2');
        this.vehicleN = createInput("");


        this.vehicleType= createElement('h2');
        this.vehicle= createInput("");


        this.place = createElement("h2");
        this.location = createInput("");

        this.time = createElement('h2');
        this.timeT= createInput("");

        this.additional=createElement('h2');
        this.additionalA=createInput("");

        this.additionalA.size(155,50);
        this.submit = createButton("Submit");
        this.hi = createElement("h1");     
        this.hi2=createElement("h1");
    }


    //make a hide function in order to hide the
    //buttons when not in use
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){

        
       //make a display function to show your form on the screen
        this.title.html('Report an accident');
        this.title.position(70,300);      
        this.button.position(170,400);
        
      
        //make a mouse pressed function to
        //make the button functional
        this.button.mousePressed(()=>{

            this.title.hide();
            this.button.hide();
         
           this.vehicleNumber.html('Vehicle Number : ');
           this.vehicleNumber.position(30,100);
        this.vehicleN.position(250,120);

       
        this.place.html('Location :');
        this.place.position(30,200);
        this.location.position(250,220);


        this.vehicleType.html('Vehicle Type: ');
        this.vehicleType.position(30,300);
        this.vehicle.position(250,320);

        this.time.html('Time: ');
        this.time.position(30,400);
        this.timeT.position(250,420);

        this.additional.html('Additional Details:');
        this.additional.position(30,500);
        this.additionalA.position(250,500);

        this.submit.position(170,600);
     
         

       
        })

        this.submit.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            this.vehicle.hide();
            this.vehicleN.hide();
            this.vehicleNumber.hide();
            this.vehicleType.hide();
            this.place.hide();
            this.location.hide();
            this.time.hide();
            this.timeT.hide();
            this.additional.hide();
            this.additionalA.hide();
            this.submit.hide();

            casuality.vehn= this.vehicleN.value();

            casualityNumber = casualityNumber+1;
            casuality.index =casualityNumber;
            
            casuality.veh=this.vehicle.value();
            casuality.add=this.additionalA.value();
            casuality.tim=this.timeT.value();
            casuality.loc=this.location.value();

            casuality.update();
            casuality.updateCount(casualityNumber);

            this.hi.html('You have successfully')
            this.hi.position(40,200);

            this.hi2.html('submitted your report')
            this.hi2.position(50,250);

           
           

            
        })

        
    }

}