<h2>二叉树的一些操作
<p>后序递归遍历算法:
<li> 为了区分两次过栈的不同处理方式，在堆栈中增加一个mark域，
<li>  mark=0表示刚刚访问此结点，mark=1表示左子树处理结束返回，
<li>  mark=2表示右子树处理结束返回。每次根据栈顶的mark域决定做何动作
<a href="https://www.cnblogs.com/webFrontDev/p/3865719.html">参考链接</a>