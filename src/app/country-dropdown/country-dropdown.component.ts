import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent implements OnInit {

  phoneForm:FormGroup = this._fb.group({
    mobile:[null,[Validators.required]]
  });
  
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  }

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  onSubmit(){
    var phoneData = this.phoneForm.get("mobile").value;
    console.log(phoneData);
  }
}
