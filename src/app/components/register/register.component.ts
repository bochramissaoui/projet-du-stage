import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Advertiser } from '../../models/Advertiser.model';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted = false;
  submittedPersonalInfo = false;
  loading = false;
  isUploaded = false;
  error = '';
  step: any = 1;
  emailExists: boolean;

  businesssectors = Constants.BUSINESS_SECTORS;
  multistepform: FormGroup;

  private initForm(): void {
    this.multistepform = new FormGroup({
      personalInfo: new FormGroup({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(8),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
          Validators.minLength(8),
          Validators.maxLength(32),
        ]),
        cpassword: new FormControl('', Validators.required),
      }),
      businessInfo: new FormGroup({
        companyName: new FormControl('', Validators.required),
        companyAddress: new FormControl('', Validators.required),
        companyActivity: new FormControl('', Validators.required),
        website: new FormControl(''),
        logo: new FormControl(''),
      }),
    });
  }

  constructor(
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  submit(): void {
    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.multistepform.controls.businessInfo.invalid && this.step === 2) {
      this.loading = false;
      return;
    }
    if (
      this.multistepform.controls.businessInfo.valid &&
      this.multistepform.controls.personalInfo.valid
    ) {
      this.loading = true;
      // Register APIs
      const advertiser: Advertiser = {
        firstname: this.personalInfo.firstname.value,
        lastname: this.personalInfo.lastname.value,
        email: this.personalInfo.email.value.toLowerCase(),
        password: this.personalInfo.password.value,
        phone: this.personalInfo.phone.value,
        companyName: this.businessInfo.companyName.value,
        companyActivity: this.businessInfo.companyActivity.value,
        companyAddress: this.businessInfo.companyAddress.value,
        logo: this.businessInfo.logo.value,
        website: this.businessInfo.website.value,
        activated: false,
      };
      console.log(advertiser);
    }
  }

  // Define a function to upload files
  onUploadFiles(files: File[]): void {
    this.isUploaded = true;
    const formData = new FormData();
    for (const file of files) {
      formData.append('files', file, file.name);
    }
  }

  get personalInfo() {
    return this.multistepform.controls['personalInfo']['controls'];
  }

  get businessInfo() {
    return this.multistepform.controls['businessInfo']['controls'];
  }

  next(): void {
    this.submittedPersonalInfo = true;

    this.checkEmail(this.personalInfo.email.value).subscribe(
      (result) => {
        this.emailExists = result;
        if (this.emailExists) {
          return;
        }
        if (
          this.multistepform.controls.personalInfo.invalid ||
          this.personalInfo.password.value !== this.personalInfo.cpassword.value
        ) {
          return;
        }
        this.step = this.step + 1;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  previous(): void {
    this.step = this.step - 1;
  }

  // Brand attribut will take the filename as value
  chagneLogoValueAfterUploadFile(filename: string): void {
    this.businessInfo.logo.value = filename;
  }

  private checkEmail(email: string): Observable<boolean> {
    return null;
  }
}
