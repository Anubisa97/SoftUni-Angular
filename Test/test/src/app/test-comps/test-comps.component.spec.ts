import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompsComponent } from './test-comps.component';

describe('TestCompsComponent', () => {
  let component: TestCompsComponent;
  let fixture: ComponentFixture<TestCompsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCompsComponent]
    });
    fixture = TestBed.createComponent(TestCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
