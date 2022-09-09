/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    const sMap = {}
    const tMap = {}

for(let i=0; i<s.length; i++) {
    sMap[s[i]] = t[i];
    tMap[t[i]] = s[i];
        if(sMap[s[i]] !== t[i]) {
            return false;
    }
    
    if(tMap[t[i]] !== s[i]){
        return false;
    }
}
return true;
};