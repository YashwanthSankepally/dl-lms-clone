import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularVideosComponent } from './angular-videos.component';

describe('AngularVideosComponent', () => {
  let component: AngularVideosComponent;
  let fixture: ComponentFixture<AngularVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
