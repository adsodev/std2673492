import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStyleSelectComponent } from './list-style-select.component';

describe('ListStyleSelectComponent', () => {
  let component: ListStyleSelectComponent;
  let fixture: ComponentFixture<ListStyleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStyleSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListStyleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
