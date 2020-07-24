import {
  ContentChildren,
  Component,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { TreeTableCellComponent } from "./tree-table-cell/tree-table-cell.component";

@Component({
  selector: "app-tt-row",
  templateUrl: "./tree-table-row.component.html",
  styleUrls: ["./tree-table-row.component.css"]
})
export class TreeTableRowComponent implements OnInit {
  @ViewChild("rowTemplate")
  public rowTemplate: TemplateRef<any>;

  @ContentChildren(TreeTableCellComponent)
  public cells: QueryList<TreeTableCellComponent>;

  constructor() {}

  ngOnInit() {}
}
