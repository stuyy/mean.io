import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleposterComponent } from './articleposter.component';

describe('ArticleposterComponent', () => {
  let component: ArticleposterComponent;
  let fixture: ComponentFixture<ArticleposterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleposterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
