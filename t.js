async function hb(){
  return JSON.stringify([{
    name:'ds',url:'https://0472.org/hls/cgtn.m3u8'
  },{
    name:'gg',url:'https://0472.org/hls/cgtne.m3u8'
  }])
}

hb()
//hb().then(ar=>xtv.update(ar))

