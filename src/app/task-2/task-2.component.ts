import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-task-2',
  templateUrl: './task-2.component.html',
  styleUrls: ['./task-2.component.scss'],
})
export class Task2Component implements OnInit {
  formData: any[] = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.formDataService.formData$.subscribe((data) => {
      this.formData = data;
    });
  }
}
