import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {
  userList: Array<any> = [];

  constructor(private service:reclamationService,private route:Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res=>{
      this.userList=res.r;

    })
  }

  editUser(id)
  {
    this.route.navigate(['edit-reclamation',id])

  }
  del(id:number){
    this.service.deletereclamation(id).subscribe(data=>console.log(data))
    location.reload();}


}
