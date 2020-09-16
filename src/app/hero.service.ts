import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service'
@Injectable({
  //@Injectable把这个类标记为依赖注入系统的参与者之一，提供一个可注入的服务
  providedIn: 'root'
  // 根注入器（一个对象），将服务注册为提供者
})
export class HeroService {
  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));    //of(HEROES)会返回一个Observable<Hero[]>可观察对象
  }
  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  constructor(private messageService: MessageService) { 
    //典型的“服务中的服务”场景,把 MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中。
  }
}
