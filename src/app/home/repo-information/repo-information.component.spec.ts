import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoInformationComponent } from './repo-information.component';

describe('UserInformationComponent', () => {
  let component: RepoInformationComponent;
  let fixture: ComponentFixture<RepoInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RepoInformationComponent]
    });
    fixture = TestBed.createComponent(RepoInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
