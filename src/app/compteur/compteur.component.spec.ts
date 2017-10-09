import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurComponent } from './compteur.component';
import { By } from '@angular/platform-browser';

describe('CompteurComponent', () => {
  let component: CompteurComponent;
  let fixture: ComponentFixture<CompteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment', () =>{
    let buttonEl = fixture.debugElement.queryAll(By.css("button"))[0].nativeElement;
    buttonEl.click();
    // component.increment()
    expect(component.compte).toBe(1)

    fixture.detectChanges();
    let SpanEl = fixture.debugElement.query(By.css("span")).nativeElement;

    expect(SpanEl.textContent).toBe("1")
  });

  it('should decrement', () =>{
    let buttonEl = fixture.debugElement.queryAll(By.css("button"))[1].nativeElement;
    buttonEl.click();
    // component.decrement()
    expect(component.compte).toBe(-1)

    fixture.detectChanges();
    let SpanEl = fixture.debugElement.query(By.css("span")).nativeElement;

    expect(SpanEl.textContent).toBe("-1")
  });

  it('should reset', () => {
    component.increment()
    let buttonEl = fixture.debugElement.queryAll(By.css("button"))[2].nativeElement;
    buttonEl.click();
    // component.reset()
    expect(component.compte).toBe(0);

    fixture.detectChanges();
    let SpanEl = fixture.debugElement.query(By.css("span")).nativeElement;

    expect(SpanEl.textContent).toBe("0")
  });
});
