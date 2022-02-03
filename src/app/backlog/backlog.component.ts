import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  proj:any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProjetbyid(this.userService.getPro()).subscribe(data=>{this.proj=data;console.log(data);})
    console.log("tayyy"+this.proj);
  }

}
