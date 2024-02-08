import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRomanComponent } from './input-roman.component';

describe('InputRomanComponent', () => {
  let component: InputRomanComponent;
  let fixture: ComponentFixture<InputRomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputRomanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
