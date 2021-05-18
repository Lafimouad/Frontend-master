import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LivraisonService } from '../services/livraison.service';

@Component({
  selector: 'app-ajout-livraison',
  templateUrl: './ajout-livraison.component.html',
  styleUrls: ['./ajout-livraison.component.css']
})
export class AjoutLivraisonComponent implements OnInit {

  registerForm: FormGroup

  constructor(private serivce:LivraisonService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'status': new FormControl(null),
      'price': new FormControl(null),
      'moyenDeTransport': new FormControl(null),
      'delivery_date': new FormControl(null),
      'distance': new FormControl(null),
   })
  }
  get status() { return this.registerForm.get('status'); }
  get price() { return this.registerForm.get('price'); }
  get moyenDeTransport() { return this.registerForm.get('moyenDeTransport'); }
  get delivery_date() { return this.registerForm.get('delivery_date'); }
  get distance() { return this.registerForm.get('distance'); }
  
  addLivraison()
  {
this.serivce.addlivraison(this.registerForm).subscribe(res=>{
  console.log('done',res)
})

}
}
