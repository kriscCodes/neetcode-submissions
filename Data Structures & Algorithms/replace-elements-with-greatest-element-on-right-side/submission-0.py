class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        for i in range(0, len(arr) - 1):
            arr[i] = max(arr[i + 1:])
        
        last_el = len(arr) - 1
        arr[last_el] = -1
        return arr