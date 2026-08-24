# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        #use a dummy node
        dummy = ListNode()
        #set a pointer called node that initially points to node
        node = dummy
        #check to make sure the nodes given are not None
        while list1 and list2:
            #if the val from the first node is smaller
                #assign the pointer's.next val then move list1 to the next node
            if list1.val < list2.val:
                node.next = list1
                list1 = list1.next
                #is list 2 is less than or equal to list 1 then the pointer instead assigns its next to list2
                #we then move list2
            else:
                node.next = list2
                list2 = list2.next
            #we then move the pointer and have it run through the process again
            node = node.next
        #once the list is traversed if we check list one is a value to set the .next of the tail
        if list1:
            node.next = list1
        # if it is none the then we set the tail.next to list2 which will either be a val or None
        else:
            node.next = list2
        #the .next of dummy is the first val from list1 head or list2 head(depending on wich is smaller)
        #this what taken care of in the while loop
        return dummy.next
            