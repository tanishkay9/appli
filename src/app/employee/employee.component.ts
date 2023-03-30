import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
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
      noticePeriod:new FormControl('', Validators.required),
      currentCTC:new FormControl('', Validators.required),
      ExpectedCTC:new FormControl('', Validators.required),
      sscBoardYear:new FormControl('', Validators.required),
      sscBoardName: new FormControl('', Validators.required),
      sscBoardPercentage: new FormControl('', Validators.required),
      hscBoardYear:new FormControl('', Validators.required),
      hscBoardName: new FormControl('', Validators.required),
      hscBoardPercentage: new FormControl('', Validators.required),
      graduationdYear:new FormControl('', Validators.required),
      graduationName: new FormControl('', Validators.required),
      graduationPercentage: new FormControl('', Validators.required),
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
      noticePeriod:'',
      currentCTC:'',
      ExpectedCTC:'',
      sscBoardYear:'',
      sscBoardName: '',
      sscBoardPercentage: '',
      hscBoardYear:'',
      hscBoardName: '',
      hscBoardPercentage: '',
      graduationdYear:'',
      graduationName: '',
      graduationPercentage:'',
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
        empData.updated,
        empData.noticePeriod,
        empData.currentCTC,
        empData.ExpectedCTC,
        empData.sscBoardYear,
        empData.sscBoardName,
        empData.sscBoardPercentage,
        empData.hscBoardYear,
        empData.hscBoardName,
        empData.hscBoardPercentage,
        empData.graduationdYear,
        empData.graduationName,
        empData.graduationPercentage,
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
