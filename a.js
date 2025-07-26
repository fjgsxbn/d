run()
async function run(){

  let r= await fetch('https://api.cmc.hebtv.com/scms/api/com/article/getArticleList?catalogId=32557&siteId=1')
  let j = await r.json()
  console.log(j)

}
