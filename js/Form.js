class Form{
//create all the materials required the constructor
    constructor(){
       this.title= createElement('h1');
        this.button = createButton("Report");

        this.vehicleNumber = createElement('h3');
        this.vehicleN = createInput("");


        this.vehicleType= createElement('h3');
        this.vehicle= createInput("");


        this.place = createElement("h3");
        this.location = createInput("");

        this.time = createElement('h3');
        this.timeT= createInput("");

        this.additional=createElement('h3');
        this.additionalA=createInput("");

        this.additionalA.size(155,50);
        this.submit = createButton("Submit");
        this.hi = createElement("h3");     
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
        this.title.position(70,100);      
        this.button.position(170,200);
        
      
        //make a mouse pressed function to
        //make the button functional
        this.button.mousePressed(()=>{

            this.title.hide();
            this.button.hide();
         
           this.vehicleNumber.html('Vehicle Number : ');
           this.vehicleNumber.position(30,80);
        this.vehicleN.position(200,100);

       
        this.place.html('Location :');
        this.place.position(30,120);
        this.location.position(200,140);


        this.vehicleType.html('Vehicle Type: ');
        this.vehicleType.position(30,40);
        this.vehicle.position(200,60);

        this.time.html('Time: ');
        this.time.position(30,160);
        this.timeT.position(200,180);

        this.additional.html('Additional Details:');
        this.additional.position(30,200);
        this.additionalA.position(200,220);

        this.submit.position(150,300);
     
         

       
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

            this.hi.html('You have successfully submitted your report')
            this.hi.position(10,200);
           
           

            
        })

        
    }

}