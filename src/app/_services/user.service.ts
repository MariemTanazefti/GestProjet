import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Projet } from '../projet';


const API_URL = 'http://localhost:3600/api/test/';
const API_Books='http://localhost:3600/';
const Project = 'project';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient ) { }
  addBook(f:NgForm) : Observable<any>{
    return this.http.post(API_Books + 'books/ajout',f,{responseType: 'text'});
  }
  loadBook(): Observable<any> {
   return this.http.get<any>(API_Books+ 'books/all');
  }
  deletebook(id: String){
   return this.http.delete(API_Books+'delete/'+id).subscribe((result) => {
      console.log ('Delete successful')  //reload the table
    });

    
  }

  public passProject(project: string): void {
    window.sessionStorage.removeItem(Project);
    window.sessionStorage.setItem(Project, project);
  }
  public getPro():any {
    const user = window.sessionStorage.getItem(Project);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
  
  public getProjets(id: String):Observable<Projet[]>{
    
    return this.http.get<Projet[]>('http://localhost:8070/projets/'+id);
  }
  public getProjetbyid(id: String):Observable<Projet[]>{
    
    return this.http.get<Projet[]>('http://localhost:8070/Projet/'+id);
  }
  public addProjet(projet:Projet):Observable<Projet>{
    return this.http.post<Projet>('http://localhost:8070/projet',projet);
  }
  public deleteProjet(id:string){
    return this.http.delete('http://localhost:8070/projet/'+id).subscribe((result) => {
      console.log ('Delete successful')});
  }
  public updateProjet(id:number,projet:Projet):Observable<Projet>{
    return this.http.put<Projet>('http://localhost:8070/projet/'+id,projet)
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
