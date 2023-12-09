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

  updateFormData(index: number, data: any) {
    const updatedFormData = [...this.formData.value];
    updatedFormData[index] = data;
    this.formData.next(updatedFormData);
  }

  deleteFormData(index: number) {
    const updatedFormData = [...this.formData.value];
    updatedFormData.splice(index, 1);
    this.formData.next(updatedFormData);
  }
}
