import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivraisonService } from '../services/livraison.service';

@Component({
  selector: 'app-list-livraison',
  templateUrl: './list-livraison.component.html',
  styleUrls: ['./list-livraison.component.css']
})
export class ListLivraisonComponent implements OnInit {
  userList: Array<any> = [];

  constructor(private service:LivraisonService,private route:Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res=>{
      
      this.userList=res.list;
    })
  }

  editUser(id)
  {
    this.route.navigate(['edit-livraison',id])

  }
  del(id:number){
    this.service.deleteLivraison(id).subscribe(data=>console.log(data))
    location.reload();}


}
