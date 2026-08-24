class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        #1. declare arr length
        numsx2 = len(nums) * 2
        ans = [None] * numsx2
        #2. populate the first half of the array with vals from nums
        for i in range(len(nums)):
            ans[i] = nums[i]
            ans[i + len(nums)] = nums[i]
            
        return ans

