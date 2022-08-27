import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  resetFormStep1: FormGroup;
  resetFormStep2: FormGroup;
  submitted = false;
  submitted2 = false;
  loading = false;
  emailSent = false;
  error = '';
  success = '';
  step = 1;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    this.resetFormStep1 = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
      ]),
    });
    this.resetFormStep2 = this.formBuilder.group({
      token: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ),
        Validators.minLength(8),
        Validators.maxLength(32),
      ]),
    });
  }

  get formValueStep1() {
    return this.resetFormStep1.controls;
  }

  get formValueStep2() {
    return this.resetFormStep2.controls;
  }

  onSubmitStep1(): void {
    this.submitted = true;
    this.loading = true;
    this.error = '';
    this.success = '';
    if (this.resetFormStep1.invalid) {
      this.loading = false;
      return;
    } else {
      
    }
  }

  onSubmitStep2(): void {
    this.submitted2 = true;
    this.loading = true;
    this.error = '';
    this.success = '';
    if (this.resetFormStep1.invalid) {
      this.loading = false;
      return;
    } else {
    }
  }

  next(): void {
    this.step++;
  }
}
