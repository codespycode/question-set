import { Difficulty } from './question.model';

export interface CatalogEntry {
  name: string;
  topic: string;
  difficulty: Difficulty;
  urls: { platform: string; url: string }[];
}

/**
 * Curated catalog of 150+ popular coding problems across
 * LeetCode, CodingNinjas, GeeksForGeeks, and Naukri (CodeStudio).
 */
export const PROBLEM_CATALOG: CatalogEntry[] = [
  // ── Array ──
  { name: 'Two Sum', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/two-sum/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/two-sum_839653' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/key-pair5616/1' },
  ]},
  { name: 'Best Time to Buy and Sell Stock', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/best-time-to-buy-and-sell-stock_893405' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/buy-and-sell-a-share-at-most-twice/1' },
  ]},
  { name: 'Contains Duplicate', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/contains-duplicate/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/contains-duplicate/1' },
  ]},
  { name: 'Maximum Subarray', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximum-subarray/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/maximum-subarray-sum_630526' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1' },
  ]},
  { name: 'Product of Array Except Self', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/product-of-array-except-self/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/product-of-array-except-self_630271' },
  ]},
  { name: 'Maximum Product Subarray', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximum-product-subarray/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1' },
  ]},
  { name: 'Find Minimum in Rotated Sorted Array', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/minimum-element-in-a-sorted-and-rotated-array3611/1' },
  ]},
  { name: 'Search in Rotated Sorted Array', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/search-in-rotated-sorted-array_1082554' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1' },
  ]},
  { name: 'Three Sum', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/3sum/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/three-sum_6922132' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1' },
  ]},
  { name: 'Container With Most Water', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/container-with-most-water/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/container-with-most-water0535/1' },
  ]},
  { name: 'Trapping Rain Water', topic: 'Array', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/trapping-rain-water/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/trapping-rain-water_630519' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1' },
  ]},
  { name: 'Merge Intervals', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/merge-intervals/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/merge-intervals_699917' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1' },
  ]},
  { name: 'Median of Two Sorted Arrays', topic: 'Array', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/median-of-two-sorted-arrays_985294' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-different-sizes/1' },
  ]},
  { name: 'Next Permutation', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/next-permutation/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/next-permutation_893046' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/next-permutation5226/1' },
  ]},
  { name: 'Sort Colors', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/sort-colors/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1' },
  ]},
  { name: 'Set Matrix Zeroes', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/set-matrix-zeroes/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/set-matrix-zeros_3846774' },
  ]},
  { name: 'Spiral Matrix', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/spiral-matrix/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1' },
  ]},
  { name: 'Subarray Sum Equals K', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1' },
  ]},
  { name: 'Rotate Array', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/rotate-array/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/rotate-array_1230543' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1' },
  ]},
  { name: 'Find the Duplicate Number', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/find-the-duplicate-number/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/find-the-duplicate-number_1112602' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/find-the-duplicate-number/1' },
  ]},
  { name: 'Max Consecutive Ones', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/max-consecutive-ones/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/max-consecutive-ones/1' },
  ]},
  { name: 'Remove Duplicates from Sorted Array II', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/remove-duplicates-from-sorted-array-ii/1' },
  ]},
  { name: 'Four Sum', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/4sum/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/4sum_893024' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/find-all-four-sum-numbers1702/1' },
  ]},
  { name: 'Merge Sorted Array', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/merge-sorted-array/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/merge-sorted-array_839729' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1' },
  ]},
  { name: 'Fibonacci Number', topic: 'Dynamic Programming', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/fibonacci-number/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/fibonacci-number_920554' },
  ]},
  { name: 'Majority Element', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/majority-element/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/majority-element_842495' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/majority-element-1587115620/1' },
  ]},
  { name: 'Find Pivot Index', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/find-pivot-index/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1' },
  ]},
  { name: 'Running Sum of 1d Array', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/running-sum-of-1d-array/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/running-sum-of-1d-array/1' },
  ]},
  { name: 'Plus One', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/plus-one/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/plus-one/1' },
  ]},
  { name: 'First Missing Positive', topic: 'Array', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/first-missing-positive/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/first-missing-positive_893030' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/smallest-positive-missing-number-1587115621/1' },
  ]},
  { name: 'Non Decreasing Array', topic: 'Array', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/non-decreasing-array/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/non-decreasing-array/1' },
  ]},
  { name: 'Find Second Largest Number in Array', topic: 'Array', difficulty: 'Easy', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/second-largest3735/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/second-largest-element-in-the-array_873375' },
  ]},

  // ── String ──
  { name: 'Valid Anagram', topic: 'String', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/valid-anagram/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/anagram-1587115620/1' },
  ]},
  { name: 'Valid Palindrome', topic: 'String', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/valid-palindrome/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/palindrome-string0817/1' },
  ]},
  { name: 'Longest Substring Without Repeating Characters', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/longest-substring-without-repeating-characters_758894' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/length-of-the-longest-substring3036/1' },
  ]},
  { name: 'Longest Palindromic Substring', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/longest-palindromic-substring/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/longest-palindromic-substring_758900' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/1' },
  ]},
  { name: 'Group Anagrams', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/group-anagrams/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/print-anagrams-together/1' },
  ]},
  { name: 'Longest Common Prefix', topic: 'String', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/longest-common-prefix/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1' },
  ]},
  { name: 'Minimum Window Substring', topic: 'String', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/minimum-window-substring/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/minimum-window-substring_839638' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1' },
  ]},
  { name: 'Palindromic Substrings', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/palindromic-substrings/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/count-palindrome-sub-strings-of-a-string0652/1' },
  ]},
  { name: 'String to Integer (atoi)', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/string-to-integer-atoi/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/implement-atoi/1' },
  ]},

  // ── Linked List ──
  { name: 'Reverse Linked List', topic: 'Linked List', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/reverse-linked-list/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/reverse-linked-list_920513' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1' },
  ]},
  { name: 'Merge Two Sorted Lists', topic: 'Linked List', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/merge-two-sorted-linked-lists_800332' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1' },
  ]},
  { name: 'Linked List Cycle', topic: 'Linked List', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/linked-list-cycle/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/detect-cycle-in-a-linked-list_920516' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1' },
  ]},
  { name: 'Add Two Numbers', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/add-two-numbers/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/add-two-numbers_1170520' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1' },
  ]},
  { name: 'Remove Nth Node From End of List', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/remove-nth-node-from-end-of-list_799912' },
  ]},
  { name: 'Reorder List', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/reorder-list/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/reorder-list/1' },
  ]},
  { name: 'Merge K Sorted Lists', topic: 'Linked List', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/merge-k-sorted-lists_992772' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1' },
  ]},
  { name: 'Flatten a Linked List', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/flatten-a-linked-list_1112655' },
  ]},

  // ── Tree ──
  { name: 'Invert Binary Tree', topic: 'Tree', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/invert-binary-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/mirror-tree/1' },
  ]},
  { name: 'Maximum Depth of Binary Tree', topic: 'Tree', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/height-of-binary-tree/1' },
  ]},
  { name: 'Same Tree', topic: 'Tree', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/same-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/determine-if-two-trees-are-identical/1' },
  ]},
  { name: 'Binary Tree Level Order Traversal', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/level-order-traversal_796002' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/level-order-traversal/1' },
  ]},
  { name: 'Validate Binary Search Tree', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/validate-binary-search-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/check-for-bst/1' },
  ]},
  { name: 'Lowest Common Ancestor of a BST', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/lowest-common-ancestor-in-a-bst_842495' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1' },
  ]},
  { name: 'Binary Tree Maximum Path Sum', topic: 'Tree', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/maximum-path-sum-in-a-binary-tree_1214968' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/maximum-path-sum-from-any-node/1' },
  ]},
  { name: 'Serialize and Deserialize Binary Tree', topic: 'Tree', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/serialize-and-deserialize-binary-tree_920328' },
  ]},
  { name: 'Construct Binary Tree from Preorder and Inorder', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/construct-tree-1/1' },
  ]},
  { name: 'Diameter of Binary Tree', topic: 'Tree', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/diameter-of-binary-tree/1' },
  ]},
  { name: 'Balanced Binary Tree', topic: 'Tree', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/balanced-binary-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/check-for-balanced-tree/1' },
  ]},
  { name: 'Binary Tree Zigzag Level Order Traversal', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/zigzag-tree-traversal/1' },
  ]},

  // ── Dynamic Programming ──
  { name: 'Climbing Stairs', topic: 'Dynamic Programming', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/climbing-stairs/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/climbing-stairs_920554' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/count-ways-to-reach-the-nth-stair-1587115620/1' },
  ]},
  { name: 'Coin Change', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/coin-change/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/coin-change_630359' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/number-of-coins1702/1' },
  ]},
  { name: 'Longest Increasing Subsequence', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/longest-increasing-subsequence_630459' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1' },
  ]},
  { name: 'Word Break', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/word-break/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/word-break_1094901' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/word-break1352/1' },
  ]},
  { name: 'House Robber', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/house-robber/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/house-robber_839733' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1' },
  ]},
  { name: 'House Robber II', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/house-robber-ii/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/house-robber-ii_839734' },
  ]},
  { name: 'Longest Common Subsequence', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/longest-common-subsequence/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/longest-common-subsequence_624879' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1' },
  ]},
  { name: '0/1 Knapsack', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/0-1-knapsack_920542' },
  ]},
  { name: 'Edit Distance', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/edit-distance/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/edit-distance_630420' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/edit-distance3702/1' },
  ]},
  { name: 'Decode Ways', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/decode-ways/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/total-decoding-messages1235/1' },
  ]},
  { name: 'Unique Paths', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/unique-paths/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/unique-paths_920332' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/number-of-unique-paths5339/1' },
  ]},
  { name: 'Partition Equal Subset Sum', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/partition-equal-subset-sum_892980' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1' },
  ]},
  { name: 'Matrix Chain Multiplication', topic: 'Dynamic Programming', difficulty: 'Hard', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/matrix-chain-multiplication_624880' },
  ]},

  // ── Graph ──
  { name: 'Number of Islands', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/number-of-islands/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/number-of-islands_630512' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/find-the-number-of-islands/1' },
  ]},
  { name: 'Clone Graph', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/clone-graph/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/clone-graph/1' },
  ]},
  { name: 'Course Schedule', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/course-schedule/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/course-schedule_985244' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/course-schedule/1' },
  ]},
  { name: 'Course Schedule II', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/course-schedule-ii/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/course-schedule/1' },
  ]},
  { name: 'Pacific Atlantic Water Flow', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/' },
  ]},
  { name: 'Word Ladder', topic: 'Graph', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/word-ladder/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/word-ladder_1102319' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/word-ladder/1' },
  ]},
  { name: 'Graph Valid Tree', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/graph-valid-tree/' },
  ]},
  { name: 'Topological Sort', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/topological-sort/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/topological-sort_982938' },
  ]},
  { name: "Dijkstra's Algorithm", topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/dijkstra-s-shortest-path_920469' },
  ]},
  { name: 'Bellman Ford Algorithm', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/bellman-ford_2041977' },
  ]},
  { name: 'Detect Cycle in Directed Graph', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/detect-cycle-in-a-directed-graph_1062626' },
  ]},
  { name: 'Rotten Oranges', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/rotting-oranges/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/rotten-oranges2536/1' },
  ]},

  // ── Stack ──
  { name: 'Valid Parentheses', topic: 'Stack', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/valid-parentheses/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/valid-parentheses_795104' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1' },
  ]},
  { name: 'Min Stack', topic: 'Stack', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/min-stack/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/min-stack_985311' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/special-stack/1' },
  ]},
  { name: 'Largest Rectangle in Histogram', topic: 'Stack', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/largest-rectangle-in-a-histogram_1058184' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1' },
  ]},
  { name: 'Daily Temperatures', topic: 'Stack', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/daily-temperatures/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1' },
  ]},
  { name: 'Next Greater Element', topic: 'Stack', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/next-greater-element-i/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/next-greater-element_799354' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1' },
  ]},
  { name: 'Evaluate Reverse Polish Notation', topic: 'Stack', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1' },
  ]},

  // ── Heap / Priority Queue ──
  { name: 'Top K Frequent Elements', topic: 'Heap', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/top-k-frequent-elements/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/top-k-frequent-elements_985282' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/top-k-frequent-elements-in-array/1' },
  ]},
  { name: 'Find Median from Data Stream', topic: 'Heap', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/find-median-from-data-stream/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/find-median-from-data-stream_985253' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1' },
  ]},
  { name: 'Kth Largest Element in an Array', topic: 'Heap', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/kth-largest-element-in-an-array_893056' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1' },
  ]},
  { name: 'Kth Smallest Element in a Sorted Matrix', topic: 'Heap', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/kth-element-in-matrix/1' },
  ]},

  // ── Binary Search ──
  { name: 'Binary Search', topic: 'Binary Search', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/binary-search/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/binary-search_972' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/binary-search-1587115620/1' },
  ]},
  { name: 'Search a 2D Matrix', topic: 'Binary Search', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/search-a-2d-matrix/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/search-a-2d-matrix_980531' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/search-in-a-matrix17201720/1' },
  ]},
  { name: "Koko Eating Bananas", topic: 'Binary Search', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/koko-eating-bananas/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/koko-eating-bananas_920604' },
  ]},
  { name: 'Aggressive Cows', topic: 'Binary Search', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/aggressive-cows/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/aggressive-cows_1082559' },
  ]},
  { name: 'Book Allocation Problem', topic: 'Binary Search', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/allocate-books_1090540' },
  ]},

  // ── Design ──
  { name: 'LRU Cache', topic: 'Design', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/lru-cache/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/lru-cache_3153' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/lru-cache/1' },
  ]},
  { name: 'Design Twitter', topic: 'Design', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/design-twitter/' },
  ]},
  { name: 'Implement Trie (Prefix Tree)', topic: 'Design', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/implement-trie_1387095' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1' },
  ]},
  { name: 'Design Add and Search Words', topic: 'Design', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/' },
  ]},
  { name: 'LFU Cache', topic: 'Design', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/lfu-cache/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/lfu-cache-1665050355/1' },
  ]},

  // ── Backtracking ──
  { name: 'Combination Sum', topic: 'Backtracking', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/combination-sum/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/combination-sum_981296' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/combination-sum-1587115620/1' },
  ]},
  { name: 'Permutations', topic: 'Backtracking', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/permutations/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/permutations_839564' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1' },
  ]},
  { name: 'Subsets', topic: 'Backtracking', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/subsets/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/subsets_920343' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/subsets-1587115621/1' },
  ]},
  { name: 'N-Queens', topic: 'Backtracking', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/n-queens/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/n-queens_759332' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/n-queen-problem0315/1' },
  ]},
  { name: 'Word Search', topic: 'Backtracking', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/word-search/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/word-search_1094937' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/word-search/1' },
  ]},
  { name: 'Sudoku Solver', topic: 'Backtracking', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/sudoku-solver/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/sudoku-solver_699919' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1' },
  ]},
  { name: 'Letter Combinations of a Phone Number', topic: 'Backtracking', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/possible-words-from-phone-digits-1587115620/1' },
  ]},
  { name: 'Palindrome Partitioning', topic: 'Backtracking', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/palindrome-partitioning/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/palindrome-partitioning_799931' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/palindromic-patitioning4845/1' },
  ]},

  // ── Greedy ──
  { name: 'Jump Game', topic: 'Greedy', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/jump-game/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/jump-game/1' },
  ]},
  { name: 'Jump Game II', topic: 'Greedy', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/jump-game-ii/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1' },
  ]},
  { name: 'Activity Selection', topic: 'Greedy', difficulty: 'Easy', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/activity-selection_1062712' },
  ]},
  { name: 'Fractional Knapsack', topic: 'Greedy', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/fractional-knapsack_975286' },
  ]},
  { name: 'Job Sequencing Problem', topic: 'Greedy', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/job-sequencing-problem_1169460' },
  ]},
  { name: 'Minimum Platforms', topic: 'Greedy', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/minimum-number-of-platforms_799400' },
  ]},

  // ── Bit Manipulation ──
  { name: 'Single Number', topic: 'Bit Manipulation', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/single-number/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/single-number1014/1' },
  ]},
  { name: 'Number of 1 Bits', topic: 'Bit Manipulation', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/number-of-1-bits/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/set-bits0143/1' },
  ]},
  { name: 'Counting Bits', topic: 'Bit Manipulation', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/counting-bits/' },
  ]},
  { name: 'Reverse Bits', topic: 'Bit Manipulation', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/reverse-bits/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/reverse-bits3556/1' },
  ]},
  { name: 'Power of Two', topic: 'Bit Manipulation', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/power-of-two/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1' },
  ]},

  // ── Sliding Window ──
  { name: 'Sliding Window Maximum', topic: 'Sliding Window', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/sliding-window-maximum/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/sliding-window-maximum_980226' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1' },
  ]},
  { name: 'Longest Repeating Character Replacement', topic: 'Sliding Window', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
  ]},
  { name: 'Permutation in String', topic: 'Sliding Window', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/permutation-in-string/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/search-a-word-in-a-2d-grid1215/1' },
  ]},
  { name: 'Fruit Into Baskets', topic: 'Sliding Window', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/fruit-into-baskets/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/fruit-into-baskets-1663137462/1' },
  ]},

  // ── Two Pointers ──
  { name: 'Two Sum II - Input Array Is Sorted', topic: 'Two Pointers', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
  ]},
  { name: 'Move Zeroes', topic: 'Two Pointers', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/move-zeroes/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0751/1' },
  ]},
  { name: 'Remove Duplicates from Sorted Array', topic: 'Two Pointers', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1' },
  ]},

  // ── Math / Number Theory ──
  { name: 'Reverse Integer', topic: 'Math', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/reverse-integer/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/reverse-digit0316/1' },
  ]},
  { name: 'Palindrome Number', topic: 'Math', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/palindrome-number/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/palindrome0746/1' },
  ]},
  { name: 'Roman to Integer', topic: 'Math', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/roman-to-integer/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/roman-number-to-integer3201/1' },
  ]},
  { name: 'Pow(x, n)', topic: 'Math', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/powx-n/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1' },
  ]},
  { name: 'Sieve of Eratosthenes', topic: 'Math', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/sieve-of-eratosthenes5242/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/sieve-of-eratosthenes_3976322' },
  ]},

  // ── Recursion ──
  { name: 'Generate Parentheses', topic: 'Recursion', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/generate-parentheses/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/generate-parentheses_920444' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/generate-all-possible-parentheses/1' },
  ]},
  { name: 'Power Set', topic: 'Recursion', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/power-set4302/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/power-set_1062667' },
  ]},
  { name: 'Tower of Hanoi', topic: 'Recursion', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1' },
  ]},

  // ── Intervals ──
  { name: 'Non Overlapping Intervals', topic: 'Intervals', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/non-overlapping-intervals/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/non-overlapping-intervals/1' },
  ]},
  { name: 'Insert Interval', topic: 'Intervals', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/insert-interval/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/insert-interval-1666733333/1' },
  ]},
  { name: 'Meeting Rooms II', topic: 'Intervals', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/meeting-rooms-ii/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/meeting-rooms-ii_893289' },
  ]},

  // ── Linked List (new) ──
  { name: 'Sort List', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/sort-list/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/sort-a-linked-list/1' },
  ]},
  { name: 'Odd Even Linked List', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/odd-even-linked-list/' },
  ]},
  { name: 'Swap Nodes in Pairs', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/swap-nodes-in-pairs/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/pairwise-swap-elements-of-a-linked-list-by-swapping-data/1' },
  ]},
  { name: 'Delete Node in a Linked List', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/delete-node-in-a-linked-list/' },
  ]},
  { name: 'Remove Duplicates from Sorted List', topic: 'Linked List', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1' },
  ]},
  { name: 'Remove Linked List Elements', topic: 'Linked List', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/remove-linked-list-elements/' },
  ]},
  { name: 'Copy List with Random Pointer', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1' },
  ]},
  { name: 'Intersection of Two Linked Lists', topic: 'Linked List', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/intersection-of-two-linked-list/1' },
  ]},
  { name: 'Rotate List', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/rotate-list/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/rotate-a-linked-list/1' },
  ]},
  { name: 'Linked List Cycle II', topic: 'Linked List', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/linked-list-cycle-ii/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/find-the-first-node-of-loop-in-linked-list/1' },
  ]},
  { name: 'Reverse Nodes in k-Group', topic: 'Linked List', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/reverse-nodes-in-k-group_983644' },
  ]},
  { name: 'Palindrome Linked List', topic: 'Linked List', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/palindrome-linked-list/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1' },
  ]},

  // ── Bit Manipulation (new) ──
  { name: 'Add Binary', topic: 'Bit Manipulation', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/add-binary/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/add-binary-strings3805/1' },
  ]},

  // ── Math (new) ──
  { name: 'Max Points on a Line', topic: 'Math', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/max-points-on-a-line/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/max-points-on-a-line/1' },
  ]},
  { name: 'Sqrt(x)', topic: 'Math', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/sqrtx/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/square-root/1' },
  ]},
  { name: 'Factorial Trailing Zeroes', topic: 'Math', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/factorial-trailing-zeroes/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/trailing-zeroes-in-factorial5134/1' },
  ]},
  { name: 'Convert Binary Number in a Linked List to Integer', topic: 'Math', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/' },
  ]},
  { name: 'GCD of Two Numbers', topic: 'Math', difficulty: 'Easy', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1' },
  ]},

  // ── String (new) ──
  { name: 'Compare Version Numbers', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/compare-version-numbers/' },
  ]},
  { name: 'Count and Say', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/count-and-say/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/decode-the-pattern1138/1' },
  ]},
  { name: 'Minimum Characters to Make String Palindromic', topic: 'String', difficulty: 'Hard', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/minimum-characters-to-be-added-at-front-to-make-string-palindrome/1' },
  ]},
  { name: 'KMP String Matching', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/search-pattern0205/1' },
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/' },
  ]},
  { name: 'Rabin Karp Algorithm', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm4012/1' },
  ]},
  { name: 'Reverse Words in a String', topic: 'String', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1' },
  ]},

  // ── Dynamic Programming (new) ──
  { name: 'Maximum Sum Circular Subarray', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximum-sum-circular-subarray/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/max-circular-subarray-sum-1587115620/1' },
  ]},
  { name: 'Best Time to Buy and Sell Stock IV', topic: 'Dynamic Programming', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/' },
  ]},
  { name: 'Best Time to Buy and Sell Stock III', topic: 'Dynamic Programming', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/' },
  ]},
  { name: 'Best Time to Buy and Sell Stock II', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/' },
  ]},
  { name: 'Interleaving String', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/interleaving-string/' },
  ]},
  { name: 'Unique Paths II', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/unique-paths-ii/' },
  ]},
  { name: 'Triangle', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/triangle/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/triangle-number/1' },
  ]},
  { name: 'Maximal Square', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximal-square/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/maximal-square2702/1' },
  ]},
  { name: 'Maximum Profit in Job Scheduling', topic: 'Dynamic Programming', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/' },
  ]},
  { name: 'Palindrome Partitioning II', topic: 'Dynamic Programming', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/palindrome-partitioning-ii/' },
  ]},
  { name: 'Super Egg Drop', topic: 'Dynamic Programming', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/super-egg-drop/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1' },
  ]},
  { name: 'Minimum Path Sum', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/minimum-path-sum/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/minimum-cost-path3833/1' },
  ]},
  { name: 'Maximum Sum Increasing Subsequence', topic: 'Dynamic Programming', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1' },
  ]},
  { name: 'Minimum Cost to Cut a Stick', topic: 'Dynamic Programming', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/' },
  ]},

  // ── Recursion (new) ──
  { name: 'Rat in a Maze', topic: 'Recursion', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/rat-in-a-maze_1215030' },
  ]},
  { name: 'Permutation Sequence', topic: 'Recursion', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/permutation-sequence/' },
  ]},
  { name: 'Flood Fill', topic: 'Recursion', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/flood-fill/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/flood-fill-algorithm1856/1' },
  ]},
  { name: 'Combination Sum II', topic: 'Recursion', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/combination-sum-ii/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/combination-sum-ii/1' },
  ]},
  { name: 'Permutations II', topic: 'Recursion', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/permutations-ii/' },
  ]},
  { name: 'Subsets II', topic: 'Recursion', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/subsets-ii/' },
  ]},
  { name: 'Combination Sum III', topic: 'Recursion', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/combination-sum-iii/' },
  ]},
  { name: 'Subset Sum', topic: 'Recursion', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1' },
  ]},
  { name: 'Valid Palindrome', topic: 'Recursion', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/valid-palindrome/' },
  ]},

  // ── Greedy (new) ──
  { name: 'N Meetings in One Room', topic: 'Greedy', difficulty: 'Easy', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/n-meetings-in-one-room_799372' },
  ]},

  // ── Binary Search (new) ──
  { name: 'Find First and Last Position of Element in Sorted Array', topic: 'Binary Search', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1' },
  ]},
  { name: 'Kth Element of Two Sorted Arrays', topic: 'Binary Search', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/kth-element-of-2-sorted-array_1164159' },
  ]},
  { name: 'Single Element in a Sorted Array', topic: 'Binary Search', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/single-element-in-a-sorted-array/' },
  ]},
  { name: 'Find Nth Root of M', topic: 'Binary Search', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1' },
  ]},

  // ── Heap (new) ──
  { name: 'Find K Pairs with Smallest Sums', topic: 'Heap', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/' },
  ]},
  { name: 'K Maximum Sum Combinations', topic: 'Heap', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/maximum-sum-combination/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/k-max-sum-combinations_975322' },
  ]},

  // ── Stack (new) ──
  { name: 'Online Stock Span', topic: 'Stack', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/online-stock-span/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1' },
  ]},
  { name: 'Next Smaller Element', topic: 'Stack', difficulty: 'Easy', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/immediate-smaller-element1142/1' },
    { platform: 'CodingNinjas', url: 'https://www.naukri.com/code360/problems/next-smaller-element_1112581' },
  ]},
  { name: 'Sort Stack using Recursion', topic: 'Stack', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/sort-a-stack/1' },
  ]},
  { name: 'Implement Queue using Stacks', topic: 'Stack', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/queue-using-two-stacks/1' },
  ]},
  { name: 'Implement Stack using Queues', topic: 'Stack', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/implement-stack-using-queues/' },
  ]},

  // ── Tree (new) ──
  { name: 'Check for Children Sum Property', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/children-sum-parent/1' },
  ]},
  { name: 'Flatten Binary Tree to Linked List', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1' },
  ]},
  { name: 'Symmetric Tree', topic: 'Tree', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/symmetric-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/symmetric-tree/1' },
  ]},
  { name: 'Construct Binary Tree from Inorder and Postorder', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/tree-from-postorder-and-inorder/1' },
  ]},
  { name: 'Lowest Common Ancestor of a Binary Tree', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1' },
  ]},
  { name: 'Maximum Width of Binary Tree', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximum-width-of-binary-tree/' },
  ]},
  { name: 'Root to Node Path', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/root-to-leaf-paths/1' },
  ]},
  { name: 'Vertical Order Traversal of a Binary Tree', topic: 'Tree', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/print-a-binary-tree-in-vertical-order/1' },
  ]},
  { name: 'Top View of Binary Tree', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1' },
  ]},
  { name: 'Bottom View of Binary Tree', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1' },
  ]},
  { name: 'Right/Left View of Binary Tree', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1' },
  ]},
  { name: 'Morris Preorder Traversal', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/morris-traversal/1' },
  ]},
  { name: 'Morris Inorder Traversal', topic: 'Tree', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/morris-traversal/1' },
  ]},
  { name: 'Binary Tree Preorder Traversal', topic: 'Tree', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/binary-tree-preorder-traversal/' },
  ]},
  { name: 'Binary Tree Inorder Traversal', topic: 'Tree', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
  ]},
  { name: 'Binary Tree Postorder Traversal', topic: 'Tree', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/binary-tree-postorder-traversal/' },
  ]},

  // ── BST ──
  { name: 'Convert Sorted Array to BST', topic: 'BST', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/array-to-bst4443/1' },
  ]},
  { name: 'Kth Largest Element in a Stream', topic: 'BST', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/' },
  ]},
  { name: 'Binary Tree to Double Linked List', topic: 'BST', difficulty: 'Hard', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/binary-tree-to-dll/1' },
  ]},
  { name: 'Maximum Sum BST in Binary Tree', topic: 'BST', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/maximum-sum-bst/1' },
  ]},
  { name: 'Binary Search Tree Iterator', topic: 'BST', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/binary-search-tree-iterator/' },
  ]},
  { name: 'Two Sum IV - Input is a BST', topic: 'BST', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/two-sum-iv-input-is-a-bst/' },
  ]},
  { name: 'Kth Largest Element in BST', topic: 'BST', difficulty: 'Easy', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/kth-largest-element-in-bst/1' },
  ]},
  { name: 'Kth Smallest Element in a BST', topic: 'BST', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1' },
  ]},
  { name: 'Ceil in a BST', topic: 'BST', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/implementing-ceil-in-bst/1' },
  ]},
  { name: 'Floor in BST', topic: 'BST', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/floor-in-bst/1' },
  ]},
  { name: 'Predecessor and Successor', topic: 'BST', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/predecessor-and-successor/1' },
  ]},
  { name: 'Construct BST from Preorder Traversal', topic: 'BST', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/' },
  ]},
  { name: 'Search in a Binary Search Tree', topic: 'BST', difficulty: 'Easy', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/search-in-a-binary-search-tree/' },
  ]},
  { name: 'Populate Next Right Pointers of Tree', topic: 'BST', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/' },
  ]},

  // ── Graph (new) ──
  { name: "Kruskal's Algorithm", topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1' },
  ]},
  { name: "Prim's MST", topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1' },
  ]},
  { name: 'Floyd Warshall Algorithm', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1' },
  ]},
  { name: "Kosaraju's Algorithm", topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1' },
  ]},
  { name: 'Is Graph Bipartite', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/is-graph-bipartite/' },
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/bipartite-graph/1' },
  ]},
  { name: 'Detect Cycle in Undirected Graph', topic: 'Graph', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1' },
  ]},
  { name: 'BFS of Graph', topic: 'Graph', difficulty: 'Easy', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1' },
  ]},
  { name: 'DFS of Graph', topic: 'Graph', difficulty: 'Easy', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1' },
  ]},

  // ── Trie ──
  { name: 'Word Search II', topic: 'Trie', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/word-search-ii/' },
  ]},
  { name: 'Maximum XOR With an Element From Array', topic: 'Trie', difficulty: 'Hard', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximum-xor-with-an-element-from-array/' },
  ]},
  { name: 'Maximum XOR of Two Numbers in an Array', topic: 'Trie', difficulty: 'Medium', urls: [
    { platform: 'LeetCode', url: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/' },
  ]},
  { name: 'Number of Distinct Substrings in a String', topic: 'Trie', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/count-of-distinct-substrings/1' },
  ]},
  { name: 'Longest String with All Prefixes', topic: 'Trie', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/longest-string-with-all-prefixes0535/1' },
  ]},
  { name: 'Implement Trie II', topic: 'Trie', difficulty: 'Medium', urls: [
    { platform: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1' },
  ]},
];
