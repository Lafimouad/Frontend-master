import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { livraison } from '../Modele/livraison';
import { LivraisonService } from '../services/livraison.service';

@Component({
  selector: 'app-edit-livraison',
  templateUrl: './edit-livraison.component.html',
  styleUrls: ['./edit-livraison.component.css']
})
export class EditLivraisonComponent implements OnInit {
  livr:livraison;
  id:number;

  constructor(private route: ActivatedRoute,private service:LivraisonService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("mee",this.id);
  }
    registerForm = new FormGroup({
    'status': new FormControl(null),
    'price': new FormControl(null),
    'moyenDeTransport': new FormControl(null),
    'delivery_date': new FormControl(null),
    'distance': new FormControl(null),
 })
  updateLivraison(){
      this.livr=new livraison()
      this.livr.id=this.id;
      this.livr.status=this.status.value;
      this.livr.price=this.price.value;
      this.livr.moyenDeTransport=this.moyenDeTransport.value;
      this.livr.delivery_date=this.delivery_date.value;
      this.livr.distance=this.distance.value;
      console.log("ghghgh",this.livr);
      this.service.updateLivraison(this.livr).subscribe(data => {
        this.goToLivraisonList();})
    }
  get status() { return this.registerForm.get('status'); }
  get price() { return this.registerForm.get('price'); }
  get moyenDeTransport() { return this.registerForm.get('moyenDeTransport'); }
  get delivery_date() { return this.registerForm.get('delivery_date'); }
  get distance() { return this.registerForm.get('distance'); }

  goToLivraisonList(){

    this.router.navigate(['/list-livraison'])

  }
}