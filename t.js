async function(){
  return JSON.stringify([{
    name:'ds',url:'https://tv.pull.hebtv.com/jishi/weishipindao.m3u8?t=1755089833&k=eceb21d175171671b224e75913204d7a'
  },{
    name:'gg',url:'https://tv.pull.hebtv.com/jishi/weishipindao.m3u8?t=1755089833&k=eceb21d175171671b224e75913204d7a'
  }])
}


xtv.update(await hb());
setInterval(async () => {
                 try {
                  
                     xtv.update(await hb());
                 } catch (e) {
                     console.error('请求失败：', e);
                 }
             }, 5000);
