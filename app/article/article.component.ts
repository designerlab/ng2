import { Component, Output, EventEmitter, OnInit, AfterViewChecked  } from '@angular/core'
import { ArticleService } from './shared/article.service'
import { Router } from '@angular/router'
import {TranslateService, LangChangeEvent } from '@ngx-translate/core'
import { BreadcrumbService } from '../header/breadcrumb/breadcrumb.service'

declare var jQuery:any

@Component({
    selector:'article',
    templateUrl:'./app/article/article.component.html'
    
})

export class ArticleComponent implements AfterViewChecked{
    breadcrumb: any
    isValid: any

    articles:any[]
    @Output() langChange = new EventEmitter()

    ngAfterViewChecked() {
    }

    constructor(private articleService: ArticleService, private translate:TranslateService, private router:Router, private breadcrumbService:BreadcrumbService){
        this.lang = translate.currentLang;
    }

    lang = this.lang;
    ngOnInit(){
        this.breadcrumb = this.breadcrumbService.getBreadcrumb()
        this.breadcrumb = this.breadcrumb.name = ""
        this.isValid = this.breadcrumbService.isValid = false
        this.articleService.getArticleData(this.lang)
            .subscribe(resSliderData => {
                this.articles = resSliderData;
            });
  
    }
}