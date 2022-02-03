import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  proj:any;
  nom=null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProjetbyid(this.userService.getPro()).subscribe(data=>{this.proj=data;console.log(data);})
    console.log("tayyy"+this.proj);
    this.nom=this.proj.nom;
  }

}
