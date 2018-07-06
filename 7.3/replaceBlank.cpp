
#include<iostream>
using namespace std;

void replaceBlank(char str[],int length){
   if(str==NULL||length<=0) return;
   int originLength=0;
   int blankNum=0;
   int i=0;
   for(i=0;str[i]!='\0';i++){
    originLength++;
    if(str[i]==' '){
        blankNum++;
    }
   }
   int newLength=originLength+blankNum*2;
   if(newLength>length) return;

   while(originLength>=0&&newLength>originLength){
    //当字符串没有空格时，就会出现ewLength=originLength的情况，从而减少复制操作
    if(str[originLength]==' '){
        str[newLength--]='0';
        str[newLength--]='2';
        str[newLength--]='%';
    }else{
        str[newLength--]=str[originLength];
    }
    originLength--;
   }
   cout<<str<<endl;
}

int main(){
const int length=100;
char a[length]="hello world!";
replaceBlank(a,length);
}
