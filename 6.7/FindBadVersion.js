const badVersion = (isBadVision) => {

    return (n) => {
        let start = 1, end = n;
        while (start + 1 < end) {
            //二分法如果用start + (end - start) / 2取mid，效率更高
            let mid = Math.floor(start + (end - start) / 2);
            if (isBadVision(mid)) {
                end = mid;
            } else {
                start = mid;
            }
        }
        if (isBadVision(start)) {
            return start;
        } else {
            return end;
        }

    }
};

badVersion();