import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient, Router)
export class App {
    router: Router;
    http: HttpClient;

    constructor(http: HttpClient) {
        console.log("content type - defaults 3");
        http.configure(config => {
            config
                .withBaseUrl("http://tutaurelia.azurewebsites.net/api/");
        });
        this.http = http;
    }

    configureRouter(config, router: Router) {
        this.router = router;

        config.title = "Contacts App";
        config.map([
            { route: ["", "contactslist"], moduleId: "./views/contacts-list", nav: true, title: "List" }
        ]);
    }
}