import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetails } from '../model/employeedetails';  // ✅ Import model

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent {
  employeeForm: FormGroup;
  employees: EmployeeDetails[] = [];  // store registered employees

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
      salary: ['', [Validators.required, Validators.min(10000)]],
      designation: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const newEmployee: EmployeeDetails = this.employeeForm.value;
      this.employees.push(newEmployee); // add employee to array
      console.log('Employees:', this.employees);
      alert('Employee Registered ✅');
      this.employeeForm.reset();
    }
  }
}
