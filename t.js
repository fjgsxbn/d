async function hb(){
  return JSON.stringify([{
    name:'ds',url:'https://0472.org/hls/cgtn.m3u8'
  },{
    name:'gg',url:'https://0472.org/hls/cgtne.m3u8'
  }])
}
hb().then(ar=>xtv.update(ar))
setInterval(async ()=>{hb().then(ar=>xtv.update(ar))},5000)


function h(){
  return JSON.stringify([{
    name:'ds',url:'https://0472.org/hls/cgtn.m3u8'
  },{
    name:'gg',url:'https://0472.org/hls/cgtne.m3u8'
  }])
}
//xtv.update(h())
