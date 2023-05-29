import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewProjectComponent } from './review-project.component';

describe('ReviewProjectComponent', () => {
  let component: ReviewProjectComponent;
  let fixture: ComponentFixture<ReviewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
