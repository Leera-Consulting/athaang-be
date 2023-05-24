function removeDuplicates(arr, key) { 

    return arr.filter((v,i,a)=>a.findIndex(v2=>(v2[key]===v[key]))===i)


}

module.exports = {
    removeDuplicates
}