import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ClarityModule} from "@clr/angular";

import "@clr/icons";

import {AppComponent} from "./app.component";
import {TreegridComponent} from "./treegrid/treegrid.component";
import {TreeNodeService} from "./treenode.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TreegridComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TreeNodeService]
})
export class AppModule {}
