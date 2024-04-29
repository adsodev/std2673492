import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsChangeComponent } from './texts-change.component';

describe('TextsChangeComponent', () => {
  let component: TextsChangeComponent;
  let fixture: ComponentFixture<TextsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextsChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
