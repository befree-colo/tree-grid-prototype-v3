export class AppTreeNode {
  public depth: number;
  public children: AppTreeNode[];
  public expanded: boolean;

  public constructor(depth: number, children: AppTreeNode[]) {
    this.depth = depth;
    this.children = children;
    this.expanded = false;
  }

  public hasChildren() {
    return this.children.length > 0;
  }
}

class InternalTreeNode extends AppTreeNode {
  depth: number;
  name: string;
  icon: string;

  public constructor(
    depth: number,
    children: AppTreeNode[],
    name: string,
    icon?: string,
    policy?: string,
    sizeInMB?: number,
    tags?: string[]
  ) {
    super(depth, children);
    this.name = name;
    this.icon = icon;
    this.policy = policy;
    this.sizeInMB = sizeInMB;
    this.tags = tags;
  }
}
