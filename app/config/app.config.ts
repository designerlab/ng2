import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
    urlMenu:string;
    urlSlider:string;
}

export const AppConfig: IAppConfig = {    
    apiEndpoint: "",
    urlMenu: "./app/apidata/menudata.json",
    urlSlider: "./app/apidata/sliderdata.json"   
};