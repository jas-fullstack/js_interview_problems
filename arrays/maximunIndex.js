function maxIndexDiff(a,  n)
{
        let right = new Array(n);
        right[n - 1] = a[n - 1];
        for(let i = n - 2; i >= 0; i--) {
            right[i] = Math.max(a[i], right[i + 1]);
        }
        let i = 0, j = 0, ans = Number.MIN_SAFE_INTEGER;
        
        while (i < n && j < n) {
            if (a[i] <= right[j]) {
                ans = Math.max(ans, j - i);
                j++;
            } else {
                i++;
            }
        }
    return ans;
}

console.log(maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1],9))