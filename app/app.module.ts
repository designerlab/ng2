import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router'
import { HttpModule, Http } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { APP_CONFIG, AppConfig } from './config/app.config'
import {TranslateModule, TranslateLoader} from "@ngx-translate/core"
import {TranslateHttpLoader} from "@ngx-translate/http-loader"
import { FooterComponent } from "./footer/footer.component"


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, "./app/i18n/", ".json");
}

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouterActivator,
    EventListResolver
} from './events/index'

import { SearchComponent } from './search/search.component'
import { MenuListResolver } from './header/nav/menu-list.resolver.service'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './header/nav/navbar.component'
import { SliderService } from './slider/shared/slider.service'
import { FooterService } from './footer/footer.service'
import { SliderComponent } from './slider/slider.component'
import { TopNavComponent } from './header/topnav/topnav.component'
import { ArticleComponent } from "./article/article.component"
import { ContactComponent } from "./header/contact.component"
import { ToastrService } from './common/toastr.service'
import { ArticleService } from './article/shared/article.service'
import { BreadcrumbService } from './header/breadcrumb/breadcrumb.service'
import { Error404Component } from './error/404.component'
import { TopNavService } from './header/topnav/topnav.service'
import { NavService } from './header/nav/nav.service'
import { AuthService } from './user/auth.service' 
import { appRoutes } from './routes'
import { BreadcrumbComponent } from './header/breadcrumb/breadcrumb.component'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }
        }),
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
        
        ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        SliderComponent,
        TopNavComponent,
        EventDetailsComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        SearchComponent,
        FooterComponent,
        ArticleComponent,
        BreadcrumbComponent,
      
        ContactComponent,
        // FaqComponent,
        // AboutusComponent,
        // ManualComponent
        ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        SliderService,
        FooterService,
        ToastrService,
        EventRouterActivator,
        MenuListResolver,
        TopNavService,
        EventListResolver,
        AuthService,
        NavService,
        BreadcrumbService,
        ArticleService,
        {provide:'canDeactivateCreateEvent', useValue:checkDirtyState},
        { provide: APP_CONFIG, useValue: AppConfig }
        ]
})
export class AppModule{

}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true;
}