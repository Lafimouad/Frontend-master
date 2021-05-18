import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLivreryComponent } from './list-livrery.component';

describe('ListLivreryComponent', () => {
  let component: ListLivreryComponent;
  let fixture: ComponentFixture<ListLivreryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLivreryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLivreryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
