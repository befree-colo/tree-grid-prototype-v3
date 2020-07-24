import { Component } from "@angular/core";
import { TreeNode } from "./tree-table/tree-table.component";
import { TreeNodeService } from "./treenode.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public tree: TreeNode[];
  public readonly treeColumns = [
    { field: "name", header: "Name" },
    { field: "size", header: "Size" },
    { field: "type", header: "Type" }
  ];

  constructor(private nodeService: TreeNodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => (this.tree = files));
  }
}
