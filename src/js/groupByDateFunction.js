export function groupByDate(arr){
    const temp = arr.reduce((acc, elem) =>{
      const date = elem.dt_txt.split(' ')[0];
      if(!acc[date]){
        acc[date] = [];
      }
      acc[date].push(elem);
      return acc;
    }, {} );
    return Object.getOwnPropertyNames(temp).map(i => temp[i]);
  }