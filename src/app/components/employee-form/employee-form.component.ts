import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  styleUrls: ['./employee-form.component.scss'],
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    age: new FormControl(),
    name: new FormControl(),
    salary: new FormControl(),
  });

  constructor(private _employeeService: EmployeeService) {}

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeeService.createEmployee(employeeForm.value).subscribe();
  }
}
