import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl = 'http://localhost:3000/api/todo';
  tasks: any[] = [];

  // Create a Subject to notify components of changes
  private taskUpdated = new Subject<void>();

  constructor(private http: HttpClient) {}

  // Observable to notify components of changes
  tasksUpdated$ = this.taskUpdated.asObservable();

  getTasks(): Observable<any[]> {
    if (this.tasks.length === 0) {
      // Fetch data from the server only if tasks are not already loaded
      return this.http.get<any[]>(this.apiUrl).pipe(
        tap((data) => {
          this.tasks = data; // Update tasks array with the latest data
        })
      );
    } else {
      // If tasks are already loaded, return them from memory
      return new Observable<any[]>((observer) => {
        observer.next(this.tasks);
        observer.complete();
      });
    }
  }

  getTaskById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addTask(post: any): Observable<any> {
    console.log("Adding task");
    console.log([post])
    return this.http.post<any>(this.apiUrl, post).pipe(
      tap((data) => {
        this.tasks.push(data); // Update tasks array locally
        this.taskUpdated.next(); // Notify components after adding a task
      })
    );
  }

  updateTask(id: string, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post).pipe(
      tap((data) => {
        // Update the task in the tasks array
        const index = this.tasks.findIndex((task) => task._id === id);
        if (index) this.tasks[index] = data;
        this.taskUpdated.next(); // Notify components after updating a task
      })
    );
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        // Remove the task from the tasks array
        this.tasks = this.tasks.filter((task) => task._id !== id);
        this.taskUpdated.next(); // Notify components after deleting a task
      })
    );
  }
}
