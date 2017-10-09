import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroesComponent } from './list-heroes.component';
import { HeroesService } from '../heroes.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';

describe('ListHeroesComponent', () => {
  let component: ListHeroesComponent;
  let fixture: ComponentFixture<ListHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHeroesComponent ],
      imports: [HttpClientModule],
      providers: [HeroesService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeroesComponent);
    component = fixture.componentInstance;
    let service = fixture.debugElement.injector.get(HeroesService);
    spyOn(service, 'getAllHeroes').and.returnValue(Observable.of([new Hero('Karna', 1), new Hero('Mordred', 2), new Hero('Jeanne', 3)]))

    fixture.detectChanges();
  });

  it('should create with 3 li\'s', () => {
    expect(component).toBeTruthy();
    let lis = fixture.debugElement
    .queryAll(By.css('li'));

    expect(lis.length).toBe(3);
  });

  it('should capitalize hero name', () => {
    let hero = new Hero('karna',1);
    let li = fixture.debugElement
    .query(By.css('li')).nativeElement;
    
    li.click();


    // component.inspect(hero);
    expect(li.textContent.trim()).toBe('Karna');

  });
});