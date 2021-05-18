import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivreryServiceService } from '../services/livrery-service.service';

@Component({
  selector: 'app-list-livrery',
  templateUrl: './list-livrery.component.html',
  styleUrls: ['./list-livrery.component.css']
})
export class ListLivreryComponent implements OnInit {
  userList: Array<any> = [];

  constructor(private service:LivreryServiceService,private route:Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res=>{
      
      this.userList=res.list;
    })
  }

  editUser(id)
  {
    this.route.navigate(['/edit-delivery',id])

    
  }
  del(id:number){
    this.service.deletelivrery(id).subscribe(data=>console.log(data))
    location.reload();}


}
