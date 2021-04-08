import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { TimerService } from "./timer.service";
import { TemporizadorComponent } from "./temporizador/temporizador.component";
import { ListaComponent } from './lista/lista.component';
import { ListaService } from './lista.service';
import { PopulandoService } from './populando.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "temporizador", component: TemporizadorComponent },
      { path: "lista", component: ListaComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    TemporizadorComponent,
    ListaComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, ListaService, PopulandoService,]
})
export class AppModule {}
