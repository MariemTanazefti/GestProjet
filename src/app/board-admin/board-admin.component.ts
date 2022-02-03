import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  allbook=null;
  content?: string;
  

  onSubmit(f: NgForm) {
    this.userService.addBook(f).subscribe(data => {
      this.content = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
  );
   // window.location.reload();
  }
  clickMethod(name: string, id: string) {
    if(confirm("Are you sure to delete "+name)) {
      this.userService.deletebook(id);
      window.location.reload();
    }
  }
  getFiles(event:any) {
    console.log(event);
}

  constructor(private userService: UserService ) { }
  div1:boolean=false;
  ngOnInit(): void {
    this.userService.loadBook().subscribe(data=>{this.allbook=data;console.log(data);})
    
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
        this.div1=true;
      },
      err => {
        this.content = JSON.parse(err.error).message;
        
      }
    );
  }
}
