import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-task-1',
  templateUrl: './task-1.component.html',
  styleUrls: ['./task-1.component.scss'],
})
export class Task1Component implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(3)]],
      select: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formDataService.addFormData(this.form.value);
      console.log(this.form.value);
      this.form.reset();
    }
  }
}
