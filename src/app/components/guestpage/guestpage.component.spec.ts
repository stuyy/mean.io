import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestpageComponent } from './guestpage.component';

describe('GuestpageComponent', () => {
  let component: GuestpageComponent;
  let fixture: ComponentFixture<GuestpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
