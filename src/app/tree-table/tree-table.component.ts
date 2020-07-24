import {
  ContentChildren,
  Component,
  OnInit,
  Input,
  QueryList
} from "@angular/core";
import { ClrSelectedState } from "@clr/angular";
import ChildNode from "@webcomponents/custom-elements/src/Patch/Interface/ChildNode";
import { TreeTableColumnComponent } from "./tree-table-column/tree-table-column.component";
import { TreeTableRowComponent } from "./tree-table-row/tree-table-row.component";

@Component({
  selector: "app-tree-table",
  templateUrl: "./tree-table.component.html",
  styleUrls: ["./tree-table.component.scss"]
})
export class TreeTableComponent implements OnInit {
  private _value: TreeNode[];
  @Input()
  public set value(newValue: TreeNode[]) {
    this._value = newValue;
    this.calculateVisibleTree();
  }

  @Input()
  public columns: { field: string; header: string }[];

  public visibleTree: TreeNode[];

  constructor() {}

  public ngOnInit() {}

  public onToggleClicked(node: TreeNode) {
    if (node) {
      node.expanded = !node.expanded;
      this.calculateVisibleTree();
    }
  }

  public calculateVisibleTree() {
    this.visibleTree = [];
    if (this._value) {
      this._value.forEach(node => this.addExpandedChildrenToDatagrid(node));
    }
  }

  private addExpandedChildrenToDatagrid(node: TreeNode, parent: InternalTreeNode = undefined, depth = 0) {
    if (node) {
      const internalNode: InternalTreeNode = node;
      if (parent) {
        internalNode.parent = parent;
      }
      internalNode.depth = depth;

      this.visibleTree.push(node);
      if (node.children && node.children.length && node.expanded) {
        node.children.forEach(child =>
          this.addExpandedChildrenToDatagrid(child, node, depth + 1)
        );
      }
    }
  }
}

export interface TreeNode {
  data?: any;
  children?: TreeNode[];
  disabled?: boolean;
  selected: ClrSelectedState;
  expanded?: boolean;
}

export interface InternalTreeNode extends TreeNode {
  leaf?: boolean;
  parent?: TreeNode;
  depth?: number;
}
