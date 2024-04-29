import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnThemeColorComponent } from './btn-theme-color.component';

describe('BtnThemeColorComponent', () => {
  let component: BtnThemeColorComponent;
  let fixture: ComponentFixture<BtnThemeColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnThemeColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnThemeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
