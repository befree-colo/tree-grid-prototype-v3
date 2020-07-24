import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-tt-cell",
  templateUrl: "./tree-table-cell.component.html",
  styleUrls: ["./tree-table-cell.component.css"]
})
export class TreeTableCellComponent implements OnInit {
  @ViewChild("cellTemplate")
  public cellTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
