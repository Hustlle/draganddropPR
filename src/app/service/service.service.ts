import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";
import {TaskProjectInterface} from "../common/interface/main.interface";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {
  }

  getProject(id: string) {
    return this.http.get(`${this.apiUrl}/api/projects/${id}`)
  }

  getTaskProject(id: string) {
    return this.http.get(`${this.apiUrl}/api/projects/${id}/tasks`)
  }

  postTaskProject(id: string, body: TaskProjectInterface): void {
    this.http.post(`${this.apiUrl}/api/projects/${id}/tasks`, body)
  }

  updateTaskProject(idPr: string, idTask: string, body: TaskProjectInterface): void {
    this.http.put(`${this.apiUrl}/api/projects/${idPr}/tasks/${idTask}`, body)
  }

  deleteTask(idPr: string, idTask: string): void {
    this.http.delete(`${this.apiUrl}/api/projects/${idPr}/tasks/${idTask}`)
  }

  changeStatusAtTask(idPr: string, idTask: string, body: TaskProjectInterface): void {
    this.http.patch(`${this.apiUrl}/api/projects/${idPr}/tasks/${idTask}`, body)
  }

  postAddProject(body: TaskProjectInterface): void {
    this.http.post(`${this.apiUrl}/api/projects`, body)
  }
}
