
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // let arr1 = l1.split("->");
    // let arr2 = l2.split("->");
    // const arr = ([...arr1, ...arr2]).sort();
    // arr.map(value => {
    //     value += "->";
    // })
    // console.log(arr);
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val > l2.val) {
        [l1, l2] = [l2, l1];
    }
    l1.next = mergeTwoLists(l1.next, l2);
    return l1 || l2
};
mergeTwoLists('1->2->4', '1->3->4');