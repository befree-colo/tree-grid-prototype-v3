import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-tt-column",
  templateUrl: "./tree-table-column.component.html",
  styleUrls: ["./tree-table-column.component.css"]
})
export class TreeTableColumnComponent implements OnInit {
  @ViewChild("columnTemplate")
  public columnTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
