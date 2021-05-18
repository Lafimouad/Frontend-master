import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LivreryServiceService } from '../services/livrery-service.service';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {
  registerForm: FormGroup

  constructor(private serivce:LivreryServiceService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl(null),
      'lastname': new FormControl(null),
      'salaire': new FormControl(null),
      'bonus': new FormControl(null),
      'distance': new FormControl(null),
   })
  }
  get Nom() { return this.registerForm.get('name'); }
  get Prenom() { return this.registerForm.get('lastname'); }
  get salaire() { return this.registerForm.get('salaire'); }
  get bonus() { return this.registerForm.get('bonus'); }
  get distance() { return this.registerForm.get('distance'); }


  addLivreur()
  {
this.serivce.addLivrery(this.registerForm).subscribe(res=>{
  console.log('done');
  this.goToLivraisonList();
})

}
goToLivraisonList(){

  this.router.navigate(['/list-delivery'])
  
  }
}
