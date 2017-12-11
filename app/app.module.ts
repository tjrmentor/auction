import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import ApplicationComponent  from "./components/application/application";
import { ProductService } from "./services/product-service";
import StarsComponent from "./components/stars/stars";
import NavbarComponent from "./components/navbar/navbar";
import SearchComponent from "./components/search/search";
import CarouselComponent from "./components/carousel/carousel";
import ProductItemComponent from "./components/product-item/product-item";
import FooterComponent from "./components/footer/footer";

@NgModule({
    imports: [BrowserModule],
    declarations: [ApplicationComponent,
                CarouselComponent,
                FooterComponent,
                NavbarComponent,
                ProductItemComponent,
                SearchComponent,
                StarsComponent],
    providers: [ProductService],
    bootstrap: [ApplicationComponent]
})
export class AppModule { }