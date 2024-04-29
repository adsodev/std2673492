import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBgColorThemeComponent } from './change-bg-color-theme.component';

describe('ChangeBgColorThemeComponent', () => {
  let component: ChangeBgColorThemeComponent;
  let fixture: ComponentFixture<ChangeBgColorThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeBgColorThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeBgColorThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
