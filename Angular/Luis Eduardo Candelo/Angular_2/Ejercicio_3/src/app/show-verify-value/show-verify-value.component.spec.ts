import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVerifyValueComponent } from './show-verify-value.component';

describe('ShowVerifyValueComponent', () => {
  let component: ShowVerifyValueComponent;
  let fixture: ComponentFixture<ShowVerifyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowVerifyValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowVerifyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
