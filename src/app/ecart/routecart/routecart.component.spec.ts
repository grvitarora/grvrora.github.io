import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutecartComponent } from './routecart.component';

describe('RoutecartComponent', () => {
  let component: RoutecartComponent;
  let fixture: ComponentFixture<RoutecartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutecartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
