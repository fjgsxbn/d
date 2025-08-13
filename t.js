async function(){
  return[{
    name:'',url:''
  },{
    
  }]
}


xtv.update(await hb());
setInterval(async () => {
                 try {
                  
                     xtv.update(await hb());
                 } catch (e) {
                     console.error('请求失败：', e);
                 }
             }, 5000);
