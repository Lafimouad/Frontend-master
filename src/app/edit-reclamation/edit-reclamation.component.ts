import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { reclamation } from '../Modele/reclamation';
import { reclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent implements OnInit {

  livr:reclamation;
  id:number;

  constructor(private route: ActivatedRoute,private service:reclamationService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("mee",this.id);
  }
  registerForm = new FormGroup({
    'status': new FormControl(null),
    'subject': new FormControl(null),
    'reclamation_date': new FormControl(null),
    'email': new FormControl(null),
 })
  updateReclamation(){
      this.livr=new reclamation()
      this.livr.id=this.id;
      this.livr.status=this.status.value;
      this.livr.email=this.email.value;
      this.livr.reclamation_date=this.reclamation_date.value;
      this.livr.subject=this.subject.value;
      console.log("ghghgh",this.livr);
      this.service.updatereclamation(this.livr).subscribe(data => {
        this.goToLivraisonList();})
    }
    get status() { return this.registerForm.get('status'); }
    get subject() { return this.registerForm.get('subject'); }
    get reclamation_date() { return this.registerForm.get('reclamation_date'); }
    get email() { return this.registerForm.get('email'); }

  goToLivraisonList(){

    this.router.navigate(['/list-reclamation'])

  }
}