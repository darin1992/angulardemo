import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',                   //组件选择器
  templateUrl: './heroes.component.html',   //组件模板
  styleUrls: ['./heroes.component.sass']    //组件私有css文件
})
// @Pipe({name: 'format'})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  // selectedHero: Hero;
  // onSelect(hero : Hero):void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }
  getHeroes(): void{
    // this.heroes = this.heroSerivce.getHeroes();
    this.heroSerivce.getHeroes().subscribe(heroes => this.heroes = heroes);
    //异步获取数据，然后赋值给heroes
  }
  constructor(private heroSerivce: HeroService,private messageService: MessageService) {   //参数：声明了私有heroService属性；标记为一个HeroService注入点
    
  }

  ngOnInit(): void {    //生命周期钩子，创建完成组件后调用，用于放置初始化逻辑
    this.getHeroes();
  }

}
