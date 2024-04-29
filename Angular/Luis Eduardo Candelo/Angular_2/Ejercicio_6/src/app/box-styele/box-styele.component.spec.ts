import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxStyeleComponent } from './box-styele.component';

describe('BoxStyeleComponent', () => {
  let component: BoxStyeleComponent;
  let fixture: ComponentFixture<BoxStyeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxStyeleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxStyeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
