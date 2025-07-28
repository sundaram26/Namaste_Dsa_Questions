//Isomorphic String(Leetcode - 205)
//I/P:- s=egg, t=add
//O/P:- true
//Explaination:- e->a and g->d can make add from the egg by change one char one time

function IsomorphicString(s, t) { 
    const mapTtoS = {};
    const mapStoT = {};

    for (let i = 0; i < s.length; i++){
        if (!mapTtoS[t[i]] && !mapStoT[s[i]]) { 
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } else if(mapTtoS[t[i]] !== s[i]){
            return false;
        } else if (mapStoT[s[i]] !== t[i]) {
            return false;
        }
    }
    return true;
}

const s = "egg";
const t = "add";

console.log(IsomorphicString(s, t));