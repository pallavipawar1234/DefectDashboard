import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprojectmenuComponent } from './homeprojectmenu.component';

describe('HomeprojectmenuComponent', () => {
  let component: HomeprojectmenuComponent;
  let fixture: ComponentFixture<HomeprojectmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprojectmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeprojectmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
