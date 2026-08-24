class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        
        hash_map = {}

        for number in nums:
            if number not in hash_map:
                hash_map[number] = 1
            else:
                hash_map[number] += 1

        for num in hash_map.values():
            if num > 1:
                #return true immedieatley when a duplicate is found
                return True
        #no duplicate was found
        return False


    