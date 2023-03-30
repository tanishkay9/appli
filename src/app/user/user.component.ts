import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { employee } from './employee.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  employeeForm: FormGroup = new FormGroup({});
  constructor() {}
  empList: employee[] = [];
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      active: new FormControl('', Validators.required),
      updated: new FormControl(new Date()),
    });
  }

  saveEmployee() {
    const empData: any = {
      name: '',
      contact: '',
      email: '',
      department: '',
      role: '',
      active: false,
      updated: '',
    };
    for (const key in this.employeeForm.value) {
      if (Object.prototype.hasOwnProperty.call(this.employeeForm.value, key)) {
        const element = this.employeeForm.value[key];
        empData[key] = element;
      }
    }

    this.empList.push(
      new employee(
        empData.name,
        empData.contact,
        empData.email,
        empData.department,
        empData.role,
        empData.active,
        empData.updated
      )
    );
    this.employeeForm.reset();
  }

  editEmployee(i: number) {
    this.employeeForm.patchValue({
      ...this.empList[i],
    });
  }
  deleteEmployee(i: number) {
    this.empList.splice(i, 1);
  }
}
