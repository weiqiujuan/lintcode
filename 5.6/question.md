<h3>1.给一个数组 nums 写一个函数将 0 移动到数组的最后面，非零元素保持原数组的顺序


<h5>eg:
<p>给出 nums = [0, 1, 0, 3, 12], 调用函数之后, nums = [1, 3, 12, 0, 0].

<h3>2.返回两个数组的交

      结果中的元素必须是唯一的。结果可以是任何顺序
<h5>eg:
<p>nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2].
<p>思路：将两个数组放到一个数组中，给定两个指针，一个从头开始遍历，一个从中部开始遍历，比较两个数的大小，从而返回两个数的交。
