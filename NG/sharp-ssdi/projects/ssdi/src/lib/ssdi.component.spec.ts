import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsdiComponent } from './ssdi.component';

describe('SsdiComponent', () => {
  let component: SsdiComponent;
  let fixture: ComponentFixture<SsdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
