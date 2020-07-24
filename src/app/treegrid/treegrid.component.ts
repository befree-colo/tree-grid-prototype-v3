import {Component, Input, OnInit} from "@angular/core";
import {ClrSelectedState} from "@clr/angular";

@Component({
  selector: "app-treegrid",
  templateUrl: "./treegrid.component.html",
  styleUrls: ["./treegrid.component.scss"]
})
export class TreegridComponent implements OnInit {
  private _value: TreeNode[];
  @Input()
  public set value(newValue: TreeNode[]) {
    this._value = newValue;
    this.calculateVisibleTree();
  }

  @Input()
  public columns: { field: string; header: string }[];

  public visibleTree: InternalTreeNode[];

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
