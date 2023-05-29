import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewIssueComponent } from './review-issue.component';

describe('ReviewIssueComponent', () => {
  let component: ReviewIssueComponent;
  let fixture: ComponentFixture<ReviewIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
