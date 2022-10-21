import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:web/src/app/user-management/create-user/create-user.component.spec.ts
import { CreateUserComponent } from './create-user.component';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserComponent);
========
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
>>>>>>>> 7c8b2915cf2cffdf0181f8012a3cbb1362c5d3b7:web/src/app/components/login-form/login-form.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
