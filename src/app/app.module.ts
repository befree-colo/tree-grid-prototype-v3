import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ClarityModule } from "@clr/angular";

import "@clr/icons";

import { AppComponent } from "./app.component";
import { TreeTableComponent } from "./tree-table/tree-table.component";
import { TreeTableColumnComponent } from "./tree-table/tree-table-column/tree-table-column.component";
import { TreeTableRowComponent } from "./tree-table/tree-table-row/tree-table-row.component";
import { TreeTableCellComponent } from "./tree-table/tree-table-row/tree-table-cell/tree-table-cell.component";
import { TreeNodeService } from "./treenode.service";
import { HttpClientModule } from "@angular/common/http";

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
    TreeTableComponent,
    TreeTableColumnComponent,
    TreeTableRowComponent,
    TreeTableCellComponent
  ],
  bootstrap: [AppComponent],
  providers: [TreeNodeService]
})
export class AppModule {}
