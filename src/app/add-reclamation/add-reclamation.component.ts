import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { reclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  registerForm: FormGroup

  constructor(private serivce:reclamationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'status': new FormControl(null),
      'subject': new FormControl(null),
      'reclamation_date': new FormControl(null),
      'email': new FormControl(null),
   })
  }
  get status() { return this.registerForm.get('status'); }
  get subject() { return this.registerForm.get('subject'); }
  get reclamation_date() { return this.registerForm.get('reclamation_date'); }
  get email() { return this.registerForm.get('email'); }
  
  addreclamation()
  {
this.serivce.addreclamation(this.registerForm).subscribe(res=>{
  console.log('done',res)
})

}
}