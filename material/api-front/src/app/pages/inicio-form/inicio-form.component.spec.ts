import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFormComponent } from './inicio-form.component';

describe('InicioFormComponent', () => {
  let component: InicioFormComponent;
  let fixture: ComponentFixture<InicioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
