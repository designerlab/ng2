import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
    urlMenu:string;
    urlSlider:string;
    urlFooter: string;
    urlArticle: string;
}

export const AppConfig: IAppConfig = {    
    apiEndpoint: "",
    urlMenu: "./app/apidata/menudata",
    urlSlider: "./app/apidata/sliderdata",
    urlFooter: "./app/apidata/footer",
    urlArticle: "./app/apidata/topic"

};