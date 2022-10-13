import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'example2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('example2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD:src/app/app.component.spec.ts
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'GenC_angular app is running!'
    );
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('example2 app is running!');
>>>>>>> b5b1d1602953cc064090c0ab0ff2b8375254d37d:web/src/app/app.component.spec.ts
  });
});
