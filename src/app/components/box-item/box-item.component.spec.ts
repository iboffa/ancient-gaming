import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxItemComponent } from './box-item.component';

describe('BoxItemComponent', () => {
  let component: BoxItemComponent;
  let fixture: ComponentFixture<BoxItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BoxItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
