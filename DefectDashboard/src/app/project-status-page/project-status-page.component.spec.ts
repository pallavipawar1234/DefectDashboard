import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStatusPageComponent } from './project-status-page.component';

describe('ProjectStatusPageComponent', () => {
  let component: ProjectStatusPageComponent;
  let fixture: ComponentFixture<ProjectStatusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStatusPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
