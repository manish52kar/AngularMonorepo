import { async, TestBed } from '@angular/core/testing';
import { LoginBoxModule } from './login-box.module';

describe('LoginBoxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginBoxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoginBoxModule).toBeDefined();
  });
});
