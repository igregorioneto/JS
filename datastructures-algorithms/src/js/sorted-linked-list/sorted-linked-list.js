import { defaultEquals } from "../linked-list/defaultEquals";
import LinkedList from "../linked-list/linkedList.js";

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};
function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }
}