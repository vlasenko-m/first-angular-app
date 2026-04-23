import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConponent } from './user';

describe('UserComponent', () => {
  let component: UserConponent;
  let fixture: ComponentFixture<UserConponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [component],
    }).compileComponents();

    fixture = TestBed.createComponent(component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
