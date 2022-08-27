import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdvertisingCampaignForm } from 'src/app/models/Advertising-campaign-form.model';
import { AdvertisingCampaignStatus } from 'src/app/models/enum/advertising-campaign-status';
import { LocationPartner } from 'src/app/models/Location-partner.model';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  createAdForm: FormGroup;
  submitted = false;
  loading = false;
  isUploaded = false;
  notValid = false;
  videoFilename = '';
  error = '';
  success = '';
  locationPartners: LocationPartner[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllLocationPartner();
  }

  private initForm(): void {
    this.createAdForm = this.formBuilder.group({
      title: ['', Validators.required],
      starting_date: ['', Validators.required],
      end_date: ['', Validators.required],
      video_link: ['', Validators.required],
      redirection_link: [
        '',
        [
          Validators.pattern(
            'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+'
          ),
          Validators.required,
        ],
      ],
      location_partners: ['', Validators.required],
    });
  }

  get formValue() {
    return this.createAdForm.controls;
  }

  onSubmit(): void {
    this.error = '';
    this.success = '';
    this.submitted = true;
    this.loading = true;
    // Check if the title contains blank spaces or not
    this.notValid = this.checkTitleValidatation(this.formValue.title.value);
    if (
      this.createAdForm.invalid ||
      this.videoFilename === '' ||
      this.notValid
    ) {
      this.loading = false;
      return;
    } else {
      const locations = this.formValue.location_partners.value
        .toString()
        .split(',');
      const advertisingCampaignForm: AdvertisingCampaignForm = {
        endingDate: this.formValue.end_date.value,
        redirectionLink: this.formValue.redirection_link.value,
        startingDate: this.formValue.starting_date.value,
        status: AdvertisingCampaignStatus.WAITING,
        title: this.formValue.title.value,
        videoLink: this.videoFilename,
        locationPartners: locations,
      };
      console.log(advertisingCampaignForm);
      alert(JSON.stringify(advertisingCampaignForm));
      this.submitted = false;
      this.loading = false;
      this.onClear();
    }
  }

  onClear(): void {
    this.createAdForm.reset();
  }

  // Define a function to upload files
  onUploadFiles(files: File[]): void {
    this.isUploaded = true;
    console.log('File is uploaded successfully');
    this.videoFilename = 'FakePath';
    this.isUploaded = false;
  }

  getAllLocationPartner(): void {
    this.locationPartners = [
      {
        companyName: 'Location 1',
        companyActivity: 'Location 1',
        companyAddress: 'Location 1',
        logo: 'fakePath',
        email: 'location1@gmail.com',
        phone: 4545,
        longitude: 10,
        latitude: 10,
      },
    ];
  }

  checkTitleValidatation(title: string): boolean {
    return title.includes(' ');
  }
}



