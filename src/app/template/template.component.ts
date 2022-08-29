import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  title = 'Template driven forms';
 
  @ViewChild('templateForm') templateForm: NgForm=new NgForm([],[]);
 
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
 
 
  
  onSubmit() {
    console.log(this.templateForm.value);
  }
 
  ngOnInit() {
 
    setTimeout(() => { 
      this.setDefault();
    });
    
  }
 
  setDefault() {
 
    let contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: "400050"
      }
    };
 
    this.templateForm.control.setValue(contact);
  }
 
 
  setValue() {
 
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
      gender: "male",
      isMarried: true,
      country: "1",
      address: {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    };
 
    this.templateForm.setValue(contact);
  }
 
  setAddress() {
 
    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600070"
    };
 
    this.templateForm.control.get("address")?.setValue(address);
 
  };
 
  setCountry() {
 
    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600070"
    };
 
    this.templateForm.control.get("country")?.setValue("1");
 
  };
 
  
  patchAddress() {
 
    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      //pincode: "600070",
      //firstname:'saurv'
    };
 
    this.templateForm.control.get("address")?.patchValue(address);
 
  }
 
  patchName() {
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
    }
 
    this.templateForm.control.patchValue(contact);
 
  }
 
  reset() {
    this.templateForm.reset();
  }
  
}
 

 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
