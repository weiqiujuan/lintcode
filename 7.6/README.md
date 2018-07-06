## 题目：

> A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 How many possible unique paths are there?


>Above is a 3 x 7 grid. How many possible unique paths are there?
Note: m and n will be at most 100.

## 思路：

> 排列组合(复杂度较高)，只能向右走或者向下走，即从起点到终点只有（m+n-2）个位置，
   插入向右行进的（n-1）位置或者插入向下行进的（m-1）个位置。

> 想要到达终点``position[m][n]``,必先达到``position[m-1][n]``或者``position[m][n-1]``，所以它们的和即就是到达路径的总数。