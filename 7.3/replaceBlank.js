const replaceBlank = (str, length) => {
    if (str === null && length <= 0) {
        return 0;
    }
    let orgLength = str.length;
    let blankNum = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            blankNum++;
        }
    }

    let newLength = orgLength + blankNum * 2;

    if (newLength > length) return;

    while(orgLength>=0&&newLength>orgLength){
        //当字符串没有空格时，就会出现ewLength=originLength的情况，从而减少复制操作
        if(str[orgLength]===' '){
            str[newLength--]='0';
            str[newLength--]='2';
            str[newLength--]='%';
        }else{
            str[newLength--]=str[orgLength];
        }
        orgLength--;
    }
    return str;
};

const main = () => {
    let length = 100;
    let str = 'wei qiu juan';
    console.log(replaceBlank(str, length));
};

main();//哈哈哈，没跑出来，我也不知道为啥