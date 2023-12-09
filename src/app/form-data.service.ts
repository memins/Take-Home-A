import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private formData = new BehaviorSubject<any[]>([]);
  formData$ = this.formData.asObservable();

  addFormData(data: any) {
    this.formData.next([...this.formData.value, data]);
  }
}
