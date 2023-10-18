import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTaskComponent } from './latest-task.component';

describe('LatestTaskComponent', () => {
  let component: LatestTaskComponent;
  let fixture: ComponentFixture<LatestTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestTaskComponent]
    });
    fixture = TestBed.createComponent(LatestTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
