import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaleComponent } from './newsale.component';

describe('NewsaleComponent', () => {
  let component: NewSaleComponent;
  let fixture: ComponentFixture<NewSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
