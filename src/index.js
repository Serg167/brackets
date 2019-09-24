module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 == 1) {
        return false;
    } else {
        //define variables
        var i = 0;
        var foundSubArr = true;

        //logic implementation
        while (i < str.length - 1) {
            for (j in bracketsConfig) {
                if ((str[i] == bracketsConfig[j][0]) && (str[i + 1] == bracketsConfig[j][1])) {
                    str = str.substring(0, i) + str.substring(i + 2, str.length);
                    (i > 0) && i--;
                    foundSubArr = true;
                    break;
                }
                foundSubArr = false;
            }
            !foundSubArr && i++;
        }

        //result check
        if (str.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}
