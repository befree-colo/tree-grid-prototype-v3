import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TreeNode } from "./tree-table/tree-table.component";

@Injectable()
export class TreeNodeService {
  constructor(private http: HttpClient) {}

  getFilesystem() {
    return this.http
      .get<any>("assets/filesystem.json")
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }

  getLazyFilesystem() {
    return this.http
      .get<any>("assets/filesystem-lazy.json")
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }
}
