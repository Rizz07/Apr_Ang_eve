import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';
import { MyUpperCasePipe } from './products/myUpper.pipe';
import { MyLowerCasePipe } from './products/myLowerCase.pipe';
import { MyCasePipe } from './products/myCasePipe.pipe';
import { MyDiscountPipe } from './products/discount.pipe';
import { ProductSearchPipe } from './products/product-search.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
    // all module you will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
            {path: 'orders', component: OrdersComponent},
            {path: 'movies', component: MoviesComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ])
    ],

    //  all components and pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperCasePipe,
        MyLowerCasePipe,
        MyCasePipe,
        MyDiscountPipe,
        ProductSearchPipe,
        StarComponent,
        HomeComponent,
        OrdersComponent,
        MoviesComponent,
        NotFoundComponent,
        ProductDetailComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // all services  declare here
    providers: [
        ProductService
    ]
})



export class AppModule {

}
