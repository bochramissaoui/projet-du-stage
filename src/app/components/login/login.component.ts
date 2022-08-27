import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Advertiser } from '../../models/Advertiser.model';
import { AlertService } from '../../services/alert.service';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  advertiser: Advertiser;
  activated: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private jwtService: JwtService
  ) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get getFormValue(): any {
    return this.authForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.authForm.invalid) {
      this.loading = false;
      return;
    } else {
      this.alertService.clear();
      this.loading = true;
      const email = this.getFormValue.email.value.toLowerCase();
      const password = this.getFormValue.password.value;
      this.router.navigate(['/dashboards/admin']);
    }
  }
}
