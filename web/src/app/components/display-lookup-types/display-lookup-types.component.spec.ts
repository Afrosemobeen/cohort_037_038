import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLookupTypesComponent } from './display-lookup-types.component';

describe('DisplayLookupTypesComponent', () => {
  let component: DisplayLookupTypesComponent;
  let fixture: ComponentFixture<DisplayLookupTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLookupTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayLookupTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
