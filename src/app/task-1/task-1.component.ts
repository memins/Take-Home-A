import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-1',
  templateUrl: './task-1.component.html',
  styleUrls: ['./task-1.component.scss'],
})
export class Task1Component implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(3)]],
      select: ['', Validators.required],
      date: ['', Validators.required],
    });
  }
}
