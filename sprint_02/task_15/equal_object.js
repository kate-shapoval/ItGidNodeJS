module.exports = function (obj1, obj2) {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if (key1.length === key2.length) {
        for (let i = 0; i < key1.length; i++) {
            if (key1[i] !== key2[i] || typeof key1[i] !== typeof key2[i]) {
                return false;
            }
            if (obj1[key1[i]] !== obj2[key1[i]]) {
                return false;
            }
        }
        return true;
    }
    return false;
}