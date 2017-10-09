import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroesComponent } from './list-heroes.component';
import { HeroesService } from '../heroes.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

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
    spyOn(service, 'getAllHeroes').and.returnValue(Observable.of(['ga','zo','bu','meu']))

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});