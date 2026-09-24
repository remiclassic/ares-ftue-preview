(()=>{
const data=window.ARES_EXAMPLES,base=window.GALLERY_BASE,q=new URLSearchParams(location.search);
let group=data.find(g=>g.id===q.get('example'))||data.find(g=>g.id===window.GALLERY_DEFAULT),step=Number(q.get('screen'))||0;
let theme=q.get('theme')==='light'?'light':'dark';
if(q.get('layout')==='sidebar'&&group.id==='military-top')group=data.find(g=>g.id==='military-side');
const $=id=>document.getElementById(id);$('theme').value=theme;
function draw(){
 step=Math.max(0,Math.min(step,group.screens.length-1));
 $('versions').replaceChildren(...data.filter(g=>!g.archive).map(g=>{const b=document.createElement('button');b.textContent=g.name;b.setAttribute('aria-pressed',String(g===group));const small=document.createElement('small');small.textContent=g.screens.length+' screen'+(g.screens.length===1?'':'s');b.append(small);b.onclick=()=>{group=g;step=0;draw()};return b}));
 $('archives').value=group.archive?group.id:'';
 $('version-name').textContent=group.name;$('description').textContent=group.desc;
 $('screens').replaceChildren(...group.screens.map((s,i)=>{const b=document.createElement('button');b.textContent=s.name;b.setAttribute('aria-current',String(i===step));b.onclick=()=>{step=i;draw()};return b}));
 if(group.archive){const sel=document.createElement('select');sel.setAttribute('aria-label','Choose an earlier screen');group.screens.forEach((s,i)=>{const o=document.createElement('option');o.value=i;o.textContent=s.name;sel.append(o)});sel.value=step;sel.onchange=()=>{step=Number(sel.value);draw()};$('screens').replaceChildren(sel)}
 const screen=group.screens[step],url=new URL(base+screen.url,location.href);url.searchParams.set('theme',theme);if(group.layout)url.searchParams.set('layout',group.layout);
 $('screen').src=url.href;$('screen').title=group.name+' — '+screen.name;$('open').href=url.href;$('position').textContent=(step+1)+' of '+group.screens.length+' · '+screen.name;$('previous').disabled=step===0;$('next').disabled=step===group.screens.length-1;
 const state=new URL(location.href);state.searchParams.set('example',group.id);state.searchParams.set('screen',step);state.searchParams.set('theme',theme);state.searchParams.delete('layout');history.replaceState(null,'',state);
}
$('previous').onclick=()=>{step--;draw()};$('next').onclick=()=>{step++;draw()};$('theme').onchange=e=>{theme=e.target.value;draw()};
$('fullscreen').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen();else $('preview').requestFullscreen().catch(()=>window.open($('open').href,'_blank','noopener'))};
$('notice').onclick=()=>{const gate=$('preview-acknowledgement');$('preview-gate-check').checked=false;$('preview-gate-continue').disabled=true;gate.showModal()};
data.filter(g=>g.archive).forEach(g=>{const o=document.createElement('option');o.value=g.id;o.textContent=g.name+' ('+g.screens.length+')';$('archives').append(o)});$('archives').onchange=e=>{const found=data.find(g=>g.id===e.target.value);if(found){group=found;step=0;draw()}};
draw();
})();
document.getElementById('exit-full').onclick=()=>document.exitFullscreen();
