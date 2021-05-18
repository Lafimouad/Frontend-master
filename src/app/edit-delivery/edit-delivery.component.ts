import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { deliveryman } from '../Modele/delivery';
import { LivraisonService } from '../services/livraison.service';
import { LivreryServiceService } from '../services/livrery-service.service';
@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {
  id: number;
  livr:deliveryman;


  constructor(private route: ActivatedRoute,private service:LivreryServiceService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }
    registerForm = new FormGroup({
      'name': new FormControl(null),
      'lastname': new FormControl(null),
      'salaire': new FormControl(null),
      'bonus': new FormControl(null),
      'distance': new FormControl(null),
 })
 updateLivraison(){
  this.livr=new deliveryman()
  this.livr.id=this.id;
  this.livr.name=this.Nom.value;
  this.livr.lastname=this.Prenom.value;
  this.livr.salaire=this.salaire.value;
  this.livr.bonus=this.bonus.value;
  this.livr.distance=this.distance.value;
  console.log("ghghgh",this.livr);
  this.service.updateLivrery(this.livr).subscribe(data => {
    this.goToLivraisonList();})
}
get Nom() { return this.registerForm.get('name'); }
get Prenom() { return this.registerForm.get('lastname'); }
get salaire() { return this.registerForm.get('salaire'); }
get bonus() { return this.registerForm.get('bonus'); }
get distance() { return this.registerForm.get('distance'); }

goToLivraisonList(){

this.router.navigate(['/list-delivery'])

}
}
