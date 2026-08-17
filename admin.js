const STORAGE_DRAFT='sdg-cms-draft';
const STORAGE_PUBLISHED='sdg-cms-publication';
const $=id=>document.getElementById(id);
const blankIndicator=(code='1.1.1')=>({code,target:'',title:'',description:'',source:'',unit:'',detail:'وطني',method:'',updated:new Date().getFullYear().toString(),note:'',tables:[]});
const starter={goal:{number:'1',title:'القضاء على الفقر',description:'القضاء على الفقر بجميع أشكاله في كل مكان.',source:'الهيئة العامة للإحصاء',updated:'2024'},indicators:[blankIndicator()]};
let state=load(STORAGE_DRAFT)||load(STORAGE_PUBLISHED)||structuredClone(starter);
let selected=0;

function load(key){try{return JSON.parse(localStorage.getItem(key)||'null')}catch{return null}}
function normalize(data){
  const goal={...starter.goal,...(data?.goal||{})};
  const indicators=(Array.isArray(data?.indicators)&&data.indicators.length?data.indicators:[blankIndicator()]).map((x,i)=>({...blankIndicator(`${goal.number}.${i+1}.1`),...x,tables:Array.isArray(x.tables)?x.tables.map(table=>({name:table.name||table.title||'',columns:Array.isArray(table.columns)?table.columns:[],rows:Array.isArray(table.rows)?table.rows:[]})):[]}));
  return {goal,indicators};
}
state=normalize(state);

function toast(message,error=false){const el=$('toast');el.textContent=message;el.className=`toast show${error?' error':''}`;clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.className='toast',2600)}
function esc(value=''){return String(value).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function current(){return state.indicators[selected]}

function renderGoal(){const g=state.goal;$('goalNumber').value=g.number||'';$('goalTitle').value=g.title||'';$('goalDescription').value=g.description||'';$('goalSource').value=g.source||'';$('goalUpdated').value=g.updated||''}
function renderList(){
  $('indicatorList').innerHTML=state.indicators.map((x,i)=>`<button class="indicator-item ${i===selected?'active':''}" data-index="${i}"><span class="indicator-badge" dir="ltr">${esc(x.code||'—')}</span><div><strong>${esc(x.title||'مؤشر بلا عنوان')}</strong><small>المؤشر ${i+1}</small></div></button>`).join('');
  document.querySelectorAll('.indicator-item').forEach(btn=>btn.onclick=()=>{syncIndicator();selected=Number(btn.dataset.index);renderEditor();renderList()});
}
function renderEditor(){
  const x=current();$('editorTitle').textContent=x.code?`المؤشر ${x.code}`:'مؤشر جديد';
  ['Code','Target','Title','Description','Source','Unit','Detail','Method','Updated','Note'].forEach(name=>{$(`indicator${name}`).value=x[name.toLowerCase()]||''});
  renderTables();
}
function tableToText(table){return [table.columns||[],...(table.rows||[])].filter(row=>row.length).map(row=>row.map(cell=>cell??'').join('\t')).join('\n')}
function parseTableText(text){return text.split(/\r?\n/).filter(line=>line.trim()).map(line=>line.includes('\t')?line.split('\t'):line.split(',')).map(row=>row.map(cell=>cell.trim()))}
function renderTables(){
  const tables=current().tables||[];
  $('tablesEditor').innerHTML=tables.length?tables.map((table,i)=>`<div class="table-editor" data-table="${i}"><div class="table-editor-head"><input class="table-title" value="${esc(table.name||'')}" placeholder="عنوان الجدول"><button class="text-button danger remove-table" type="button">حذف الجدول</button></div><textarea class="table-data" dir="auto" placeholder="ألصق البيانات هنا">${esc(tableToText(table))}</textarea><p class="table-help">ضع أسماء الأعمدة في الصف الأول، وافصل بين الخلايا بزر Tab أو بفاصلة.</p></div>`).join(''):'<div class="empty-tables">لا توجد جداول بعد. أضف جدولًا أو استورد ملف Excel.</div>';
  document.querySelectorAll('.remove-table').forEach(btn=>btn.onclick=()=>{syncTables();const i=Number(btn.closest('.table-editor').dataset.table);current().tables.splice(i,1);renderTables()});
}
function syncGoal(){state.goal={number:$('goalNumber').value.trim(),title:$('goalTitle').value.trim(),description:$('goalDescription').value.trim(),source:$('goalSource').value.trim(),updated:$('goalUpdated').value.trim()}}
function syncIndicator(){
  if(!state.indicators.length)return;const x=current();
  ['Code','Target','Title','Description','Source','Unit','Detail','Method','Updated','Note'].forEach(name=>x[name.toLowerCase()]=$(`indicator${name}`).value.trim());syncTables();
}
function syncTables(){document.querySelectorAll('.table-editor').forEach(el=>{const table=current().tables[Number(el.dataset.table)];if(table){const parsed=parseTableText(el.querySelector('.table-data').value);table.name=el.querySelector('.table-title').value.trim();table.columns=parsed[0]||[];table.rows=parsed.slice(1)}})}
function syncAll(){syncGoal();syncIndicator()}
function saveDraft(){syncAll();localStorage.setItem(STORAGE_DRAFT,JSON.stringify(state));toast('تم حفظ المسودة على هذا الجهاز')}
function publish(openPreview=false){
  syncAll();const missing=state.indicators.find(x=>!x.code||!x.title);if(!state.goal.title||missing){toast('أكمل عنوان الهدف ورقم وعنوان كل مؤشر',true);return}
  const payload={...state,publishedAt:new Date().toISOString()};localStorage.setItem(STORAGE_DRAFT,JSON.stringify(state));localStorage.setItem(STORAGE_PUBLISHED,JSON.stringify(payload));updateStatus();toast('تم نشر المحتوى في صفحة الهدف');if(openPreview)setTimeout(()=>window.open('goal-1.html','_blank'),350)
}
function updateStatus(){const p=load(STORAGE_PUBLISHED);$('publicationStatus').textContent=p?.publishedAt?`منشور ${new Date(p.publishedAt).toLocaleDateString('ar-SA')}`:'مسودة محلية';document.querySelector('.status-dot').style.background=p?'#1b8354':'#f6b51b'}

function addIndicator(){syncAll();const last=state.indicators.at(-1)?.code||`${state.goal.number}.1.1`;const parts=last.split('.');parts[parts.length-1]=String((Number(parts.at(-1))||0)+1);state.indicators.push(blankIndicator(parts.join('.')));selected=state.indicators.length-1;renderList();renderEditor();$('indicatorTitle').focus()}
function duplicateIndicator(){syncAll();const copy=structuredClone(current());copy.code=`${copy.code}-نسخة`;state.indicators.splice(selected+1,0,copy);selected++;renderList();renderEditor();toast('تم نسخ المؤشر')}
function deleteIndicator(){if(state.indicators.length===1){toast('يجب أن تحتوي الصفحة على مؤشر واحد على الأقل',true);return}if(!confirm('هل تريد حذف هذا المؤشر؟'))return;state.indicators.splice(selected,1);selected=Math.max(0,selected-1);renderList();renderEditor()}
function addTable(){syncIndicator();current().tables.push({name:'',columns:['السنة','القيمة'],rows:[]});renderTables();document.querySelector('.table-editor:last-child .table-title')?.focus()}

function exportJson(){syncAll();download(`goal-${state.goal.number}-content.json`,JSON.stringify(state,null,2),'application/json')}
function download(name,content,type){const blob=new Blob(['\ufeff',content],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),500)}

async function importFile(file){
  try{
    if(file.name.toLowerCase().endsWith('.json')){state=normalize(JSON.parse(await file.text()));selected=0;refresh();toast('تم استيراد ملف JSON للمراجعة');return}
    if(typeof XLSX==='undefined')throw new Error('تعذر تحميل أداة Excel. تحقق من الاتصال بالإنترنت.');
    const workbook=XLSX.read(await file.arrayBuffer(),{type:'array'});const imported=[];
    workbook.SheetNames.forEach((sheetName,sheetIndex)=>{
      const rows=XLSX.utils.sheet_to_json(workbook.Sheets[sheetName],{header:1,defval:''}).filter(row=>row.some(cell=>String(cell).trim()));if(!rows.length)return;
      const marker=String(rows[0]?.[0]||'');const match=marker.match(/(?:المؤشر|Indicator)\s*([\d.]+)/i);let code=match?.[1]||sheetName.match(/[\d.]+/)?.[0]||`${state.goal.number}.${sheetIndex+1}.1`;
      let tableStart=0,title='',source='',tableTitle=sheetName;
      if(match){title=String(rows[1]?.[0]||'');source=String(rows[2]?.[0]||'');tableTitle=String(rows[4]?.[0]||sheetName);tableStart=5}
      const existing=imported.find(x=>x.code===code);
      const tableRows=rows.slice(tableStart).map(r=>r.map(String));
      const columns=tableRows[0]||[];const bodyRows=tableRows.slice(1);
      if(existing)existing.tables.push({name:tableTitle,columns,rows:bodyRows});else imported.push({...blankIndicator(code),title:title||`المؤشر ${code}`,source,tables:[{name:tableTitle,columns,rows:bodyRows}]});
    });
    if(!imported.length)throw new Error('لم يتم العثور على بيانات قابلة للاستيراد.');
    syncAll();state.indicators=imported;selected=0;refresh();toast(`تم استيراد ${imported.length} مؤشرًا للمراجعة`);
  }catch(error){toast(error.message||'تعذر قراءة الملف',true)}
}
function refresh(){renderGoal();renderList();renderEditor();updateStatus()}

$('addIndicator').onclick=addIndicator;$('duplicateIndicator').onclick=duplicateIndicator;$('deleteIndicator').onclick=deleteIndicator;$('addTable').onclick=addTable;
$('saveDraft').onclick=saveDraft;$('publishButton').onclick=()=>publish(false);$('publishBottom').onclick=()=>publish(true);$('exportJson').onclick=exportJson;
$('fileInput').onchange=e=>{const file=e.target.files[0];if(file)importFile(file);e.target.value=''};
$('toggleGoal').onclick=()=>{const fields=$('goalFields');const hidden=fields.hidden=!fields.hidden;$('toggleGoal').textContent=hidden?'إظهار':'إخفاء'};
window.addEventListener('beforeunload',()=>{try{syncAll();localStorage.setItem(STORAGE_DRAFT,JSON.stringify(state))}catch{}});
refresh();
