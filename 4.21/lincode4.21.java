public class Solution {
    public void rotateString(char[] str, int offset) {
        // write your code here
        char temp;
        if(offset==0)return;//第一种，偏移量为0的情况
        if(str.length==0)return;//第二种字符串长度为0的情况
        int len=str.length;
        //接下来折腾第三种，这类中依然包含着一种特殊情况就是偏移量大于字符串的长度。
        for(int i=1;i<=offset%len;i++){
            temp=str[len-1];
            int j=len-2;
            while(j>=0){
                str[j+1]=str[j];
                j--;
            }
            str[0]=temp;
        }
    }
}