import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      email: new FormControl(null),
      confirmpass: new FormControl(null),
    });
  }

  onSubmit() {
    const { username, password, email, confirmpass } = this.reactiveForm.value;
    if (
      username &&
      password &&
      email &&
      confirmpass &&
      confirmpass == password
    ) {
      fetch('http://127.0.0.1:8000/register/', {
        method: 'POST',
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((response) => {
        if (response.status === 201) {
          this.reactiveForm.setValue({
            email: '',
            username: '',
            password: '',
            confirmpass: '',
          });
          window.location.replace('http://www.w3schools.com');
        } else {
          console.log(
            `BACKEND ERROR: ${response.status} & ${response.statusText}`
          );
        }
      });
    }
  }
}
