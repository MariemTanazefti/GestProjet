import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  proj:any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProjetbyid(this.userService.getPro()).subscribe(data=>{this.proj=data;console.log(data);})
    console.log("tayyy"+this.proj);
  }

}
