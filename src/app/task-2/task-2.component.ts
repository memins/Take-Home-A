import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-task-2',
  templateUrl: './task-2.component.html',
  styleUrls: ['./task-2.component.scss'],
})
export class Task2Component implements OnInit {
  formData: any[] = [];
  forms: FormGroup[] = [];

  constructor(
    private formDataService: FormDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formDataService.formData$.subscribe((data) => {
      this.formData = data;
      this.forms = data.map((item) =>
        this.fb.group({
          text: item.text,
          select: item.select,
          date: item.date,
        })
      );
    });
  }

  updateFormData(index: number) {
    this.formDataService.updateFormData(index, this.forms[index].value);
  }

  deleteFormData(index: number) {
    this.formDataService.deleteFormData(index);
  }
}
