const fetch=require("node-fetch")
const { DOMParser }=(new (require("jsdom").JSDOM)("")).window;
module.exports = async (req, res) => {
  res.status(200).json([...(new DOMParser().parseFromString(await (await fetch("https://routinehub.co/shortcut/"+encodeURIComponent(req.query.id)+"/")).text(),"text/html")).querySelectorAll(".feedback>[data-feedback-id]")].map(function e2j(e){
let user=decodeURIComponent(e.querySelector('a[href*="/user/"]').href.match(/\/user\/([^\/\?\&]+)/)[1]);
let body=e.querySelector('.body').textContent.trim();
let date=e.querySelector('small').textContent.split("·")[1].trim();
let children=[...e.children[0].children].filter(e=>e.dataset.feedbackId).map(e2j);
let tags=[...e.children[0].children].filter(e=>!e.dataset.feedbackId).map(e=>[...e.querySelectorAll(".tag"),...(e.classList.contains("tag")?[e]:[])]).flat().map(e=>e.textContent.trim());
return {user,body,date,children,tags}
}));
};
