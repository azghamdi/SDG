// في النظام الفعلي يأتي هذا الكائن من لوحة إدارة المحتوى؛ الصفحة وملفات التنزيل تقرأ المصدر نفسه.
let goalContent = {
  number: 1,
  title: 'القضاء على الفقر',
  updated: '2024',
  source: 'الهيئة العامة للإحصاء',
  targets: [
    {code:'1.1',title:'القضاء على الفقر المدقع للناس أجمعين أينما كانوا بحلول عام 2030.',note:'يرتبط القياس بخط الفقر الدولي المعتمد وبالتصنيفات السكانية ذات الصلة.'},
    {code:'1.2',title:'خفض نسبة الرجال والنساء والأطفال من جميع الأعمار الذين يعانون الفقر بجميع أبعاده إلى النصف على الأقل.',note:'يشمل القياس التعاريف الوطنية للفقر ومختلف أبعاده.'},
    {code:'1.3',title:'استحداث نظم وتدابير حماية اجتماعية ملائمة على الصعيد الوطني وتحقيق تغطية واسعة للفقراء والضعفاء.',note:'تغطي المؤشرات برامج الحماية الاجتماعية والفئات المستفيدة منها.'},
    {code:'1.4',title:'ضمان تمتع الجميع بالحقوق نفسها في الموارد الاقتصادية والخدمات الأساسية والملكية والتكنولوجيا والخدمات المالية.',note:'تقيس المؤشرات الوصول إلى الخدمات الأساسية وأمن حيازة الأراضي.'},
    {code:'1.5',title:'بناء قدرة الفقراء والفئات الضعيفة على الصمود والحد من تعرضهم للصدمات والكوارث الاقتصادية والاجتماعية والبيئية.',note:'تغطي المؤشرات الخسائر البشرية والاقتصادية واستراتيجيات الحد من مخاطر الكوارث.'},
    {code:'1.a',title:'ضمان حشد موارد كبيرة من مصادر متنوعة لتوفير وسائل كافية لتنفيذ البرامج والسياسات الرامية إلى القضاء على الفقر.',note:'يرتبط القياس بتدفقات الموارد والإنفاق الحكومي على الخدمات الأساسية.'},
    {code:'1.b',title:'وضع أطر سياسات سليمة على الصعد الوطنية والإقليمية والدولية تستند إلى استراتيجيات إنمائية مراعية للفقراء.',note:'يركز القياس على الإنفاق الاجتماعي العام المراعي للفقراء.'}
  ],
  indicators: [
    {code:'1.1.1',target:'1.1',name:'نسبة السكان الذين يعيشون دون خط الفقر الدولي، حسب الجنس والعمر والوضع الوظيفي والموقع الجغرافي.',scope:'سكاني / وطني',status:'منشور'},
    {code:'1.2.1',target:'1.2',name:'نسبة السكان الذين يعيشون دون خط الفقر الوطني، حسب الجنس والعمر.',scope:'سكاني / وطني',status:'منشور'},
    {code:'1.2.2',target:'1.2',name:'نسبة الرجال والنساء والأطفال الذين يعيشون في فقر بجميع أبعاده وفقًا للتعاريف الوطنية.',scope:'سكاني / وطني',status:'منشور'},
    {code:'1.3.1',target:'1.3',name:'نسبة السكان المشمولين بنظم أو حدود دنيا للحماية الاجتماعية، حسب الفئة السكانية.',scope:'حماية اجتماعية',status:'منشور'},
    {code:'1.4.1',target:'1.4',name:'نسبة السكان الذين يعيشون في أسر معيشية يمكنها الحصول على الخدمات الأساسية.',scope:'خدمات أساسية',status:'منشور'},
    {code:'1.4.2',target:'1.4',name:'نسبة مجموع السكان البالغين الذين لديهم حقوق مضمونة في حيازة الأراضي ووثائق معترف بها قانونًا.',scope:'حيازة الأراضي',status:'منشور'},
    {code:'1.5.1',target:'1.5',name:'عدد الوفيات والمفقودين والأشخاص المتضررين مباشرة بسبب الكوارث لكل 100 ألف نسمة.',scope:'كوارث / سكاني',status:'منشور'},
    {code:'1.5.2',target:'1.5',name:'الخسائر الاقتصادية المباشرة الناجمة عن الكوارث قياسًا إلى الناتج المحلي الإجمالي العالمي.',scope:'اقتصادي',status:'منشور'},
    {code:'1.5.3',target:'1.5',name:'عدد البلدان التي تعتمد وتنفذ استراتيجيات وطنية للحد من مخاطر الكوارث.',scope:'سياسات وطنية',status:'منشور'},
    {code:'1.5.4',target:'1.5',name:'نسبة الحكومات المحلية التي تعتمد وتنفذ استراتيجيات محلية للحد من مخاطر الكوارث.',scope:'إداري / محلي',status:'منشور'},
    {code:'1.a.1',target:'1.a',name:'مجموع منح المساعدة الإنمائية الرسمية المقدمة من الجهات المانحة التي تركز على الحد من الفقر.',scope:'تعاون دولي',status:'منشور'},
    {code:'1.a.2',target:'1.a',name:'نسبة مجموع الإنفاق الحكومي على الخدمات الأساسية: التعليم والصحة والحماية الاجتماعية.',scope:'إنفاق حكومي',status:'منشور'},
    {code:'1.b.1',target:'1.b',name:'الإنفاق الاجتماعي العام المراعي للفقراء.',scope:'إنفاق اجتماعي',status:'منشور'}
  ]
};

let publishedIndicator = {
  code:'1.3.1',
  title:'نسبة السكان الذين تشملهم حدود دنيا أو نظم للحماية الاجتماعية، بحسب النوع الاجتماعي والفئات السكانية.',
  description:'يعكس المؤشر نسبة الأشخاص الذين تتم تغطيتهم بشكل فعّال في نظام الحماية الاجتماعية وما يشمله من دعم للأشخاص الذين ليس لديهم عمل، كما يعكس المكوّن الأساسي للحماية الاجتماعية ومصالح الطفل والأم والأشخاص ذوي الإعاقة وضحايا إصابات العمل والمسنين.',
  source:'وزارة الموارد البشرية والتنمية الاجتماعية',
  unit:'عدد',
  detail:'وطني، حسب النوع الاجتماعي والفئات الضعيفة',
  updated:'2024',
  note:'البيانات المتوفرة حسب النوع الاجتماعي والأطفال وذوي الإعاقة فقط.',
  method:'تشمل الحسابات مؤشرات منفصلة لتمييز التغطية الفعّالة للفئات المختلفة. وتُحسب نسبة التغطية بقسمة عدد المستفيدين في مجموع السكان على مجموع السكان، ويُعبّر عنها كنسبة مئوية.',
  tables:[
    {name:'إجمالي السكان الذين تشملهم برامج الحماية الاجتماعية',columns:['السنة','ذكور','إناث','الإجمالي'],rows:[
      [2020,5240889,5437209,10678098],[2021,5165231,5337965,10503196],[2022,6057041,5908315,11965356],[2023,5706507,5705417,11411924],[2024,5478576,5682988,11161564]
    ]},
    {name:'الأطفال الذين تشملهم برامج الحماية الاجتماعية',columns:['السنة','ذكور','إناث','الإجمالي'],rows:[
      [2020,2513873,2437401,4951274],[2021,2481464,2405620,4887084],[2022,2631552,2554185,5185737],[2023,2456897,2381517,4838414],[2024,2380290,2306475,4686765]
    ]},
    {name:'الأشخاص ذوو الإعاقة الذين يتلقون مخصصات نقدية',columns:['السنة','ذكور','إناث','الإجمالي'],rows:[
      [2020,208041,216986,425027],[2021,228190,236823,465013],[2022,231399,237574,468973],[2023,300448,297916,598364],[2024,242871,250295,493166]
    ]}
  ]
};

let basicServicesIndicator={
  code:'1.4.1',
  title:'نسبة السكان الذين يعيشون في أسر معيشية يمكنها الحصول على الخدمات الأساسية.',
  description:'تُعرّف بأنها نسبة السكان الذين يستخدمون أنظمة تقديم الخدمات العامة التي تلبي الاحتياجات الإنسانية الأساسية، بما في ذلك مياه الشرب والصرف الصحي والنظافة والطاقة والتنقل وجمع النفايات والرعاية الصحية والتعليم وتكنولوجيا المعلومات.',
  source:'الهيئة العامة للإحصاء',unit:'نسبة مئوية',detail:'وطني والخدمات الأساسية',updated:'2024',
  method:'يمثل المؤشر مزيجًا من مكونات مختلفة للخدمات الأساسية، ويُعرض على شكل لوحة معلومات لأن كل مكوّن يرتبط بمؤشر مستقل ومنهجية قياس محددة.',
  tables:[
    {name:'الحد الأدنى من الكفاءة في القراءة في نهاية المرحلة الابتدائية حسب النوع الاجتماعي',columns:['السنة','ذكور','إناث','الإجمالي'],rows:[[2016,50.70,77.10,63.30],[2021,62.67,77.22,71.07]]},
    {name:'الحد الأدنى من الكفاءة في القراءة في نهاية المرحلة المتوسطة حسب النوع الاجتماعي',columns:['السنة','ذكور','إناث','الإجمالي'],rows:[[2018,34.50,61.70,47.64],[2022,29.05,45.39,37.40]]},
    {name:'خدمات مياه الشرب والصرف الصحي والنظافة الصحية',columns:['الخدمة','2018','2019','2020','2022','2023'],rows:[['خدمات مياه الشرب المُدارة بأمان','—','—','—','—',99.75],['خدمات مياه الشرب الأساسية',99.70,99.70,99.16,99.91,99.92],['مرافق الصرف الصحي الأساسية المحسنة وغير المشتركة','—','—','—',99.03,99.70],['مرافق الصرف الصحي المحسنة المحدودة',100,100,100,99.35,99.82],['مرافق غسل اليدين بالماء والصابون','—','—','—',98.39,98.42]]},
    {name:'الحصول على الطاقة النظيفة',columns:['الخدمة','2018','2019','2020','2022','2023'],rows:[['السكان الذين يحصلون على الكهرباء',100,100,100,100,100],['السكان الذين يعتمدون أساسًا على الوقود والتقنيات النظيفة',100,100,100,100,100]]},
    {name:'الوصول إلى طرق صالحة للاستخدام في جميع الفصول',columns:['البيان','2022'],rows:[['سكان الريف الذين يعيشون على بُعد كيلومترين من طريق صالح للاستخدام في جميع الفصول',91.77]]},
    {name:'تغطية السكان بشبكات الهاتف المتنقل',columns:['الخدمة','2019','2020','2021','2022','2023'],rows:[['السكان المشمولون بتغطية شبكة الجيل الثالث على الأقل',98.9,99.1,100,100,100],['السكان المشمولون بتغطية شبكة الجيل الرابع',94.2,98.3,100,100,100]]}
  ]
};

let additionalPublishedIndicators=[
  {code:'1.4.2',title:'نسبة السكان البالغين الذين لديهم حقوق مضمونة لحيازة الأرض ووثائق معترف بها قانونيًا، بحسب النوع الاجتماعي ونوع الحيازة.',description:'يغطي المؤشر مختلف أنواع استخدام الأراضي والحيازة المعترف بها وطنيًا، ويقيس حيازة الوثائق القانونية والشعور بأمان حقوق الحيازة.',source:'وزارة العدل',unit:'نسبة مئوية',detail:'وطني، والنوع الاجتماعي',updated:'2022',method:'يتكون من جزأين: نسبة البالغين الذين لديهم وثائق قانونية معترف بها، ونسبة البالغين الذين يرون أن حقوقهم في الأرض مضمونة.',note:'البيانات المنشورة تغطي النوع الاجتماعي.',tables:[{name:'حقوق حيازة الأراضي بحسب النوع الاجتماعي',columns:['الفئة','2018','2019','2020','2021','2022'],rows:[['ذكور',212472,342250,420133,529950,368549],['إناث',36426,44121,62467,101131,87716],['الإجمالي',248898,386371,482600,631081,456265],['النسبة من السكان البالغين (%)',1.11,1.74,2.04,2.75,1.88]]}]},
  {code:'1.5.1',title:'عدد الوفيات والمفقودين والأشخاص المتضررين مباشرة بسبب الكوارث لكل 100 ألف نسمة.',description:'يقيس عدد الأشخاص الذين توفوا أو فُقدوا أو تضرروا مباشرة بسبب الكوارث لكل مائة ألف من السكان.',source:'وزارة الداخلية',unit:'عدد لكل 100 ألف نسمة',detail:'وطني، والنوع الاجتماعي',updated:'2022',method:'مجموع الوفيات والمفقودين والمتضررين مباشرة من الكوارث مقسومًا على السكان، مضروبًا في 100 ألف.',note:'تمثل البيانات جميع فئات الوفيات والمفقودين والمتضررين.',tables:[{name:'المتضررون من الكوارث لكل 100 ألف نسمة',columns:['النوع الاجتماعي','2018','2019','2020','2021','2022'],rows:[['ذكور',0.06,0.13,0.07,0.07,1.06],['إناث',0.02,0.01,0,0.04,0.28],['الإجمالي',0.09,0.15,0.07,0.11,1.34]]}]},
  {code:'1.5.2',title:'الخسائر الاقتصادية المباشرة الناجمة عن الكوارث قياسًا إلى الناتج المحلي الإجمالي.',description:'يقيس نسبة الخسائر الاقتصادية المباشرة التي تُعزى إلى الكوارث مقارنة بالناتج المحلي الإجمالي.',source:'وزارة الداخلية',unit:'نسبة مئوية',detail:'وطني',updated:'2022',method:'مجموع الخسائر المباشرة في المساكن والأصول الإنتاجية والبنية التحتية والزراعة والتعليم والتراث والمرافق الصحية، مقسومًا على الناتج المحلي الإجمالي.',tables:[{name:'نسبة الخسائر الاقتصادية إلى الناتج المحلي الإجمالي',columns:['البيان','2018','2019','2020','2021','2022'],rows:[['النسبة',0.0000001415,0.0000005598,0.00000010081,0.00000005984,0.00000090324]]}]},
  {code:'1.5.3',title:'اعتماد وتنفيذ استراتيجية وطنية للحد من مخاطر الكوارث بما يتماشى مع إطار سِنداي.',description:'يقيس مدى اعتماد المملكة وتنفيذها لاستراتيجية وطنية للحد من مخاطر الكوارث متوافقة مع إطار سِنداي 2015–2030.',source:'مجلس المخاطر الوطنية',unit:'حالة تنفيذ',detail:'وطني',updated:'2024',method:'تقييم وجود الاستراتيجية الوطنية ومدى توافقها وتنفيذها وفق متطلبات إطار سِنداي.',note:'يعرض المؤشر حالة السياسة والاستراتيجية على المستوى الوطني.',tables:[]},
  {code:'1.5.4',title:'نسبة الحكومات المحلية التي تعتمد وتنفذ استراتيجيات محلية للحد من مخاطر الكوارث.',description:'يقيس نسبة الحكومات المحلية التي تعتمد وتنفذ خططًا محلية للحد من مخاطر الكوارث بما يتماشى مع الاستراتيجية الوطنية.',source:'مجلس المخاطر الوطنية',unit:'نسبة مئوية',detail:'المناطق الإدارية',updated:'2024',method:'عدد الحكومات المحلية التي تطبق استراتيجيات أو خططًا متوافقة مقسومًا على إجمالي الحكومات المحلية.',note:'المطبق في المناطق هو خطط الطوارئ وخطط مواجهة الكوارث.',tables:[{name:'تطبيق خطط الحد من مخاطر الكوارث في المناطق',columns:['المنطقة','الحالة'],rows:['الباحة','أبها','سكاكا','بريدة','الدمام','حائل','جازان','مكة المكرمة','المدينة المنورة','نجران','عرعر','الرياض','تبوك'].map(region=>[region,'نعم']).concat([['الإجمالي','13 منطقة — 100%']])}]},
  {code:'1.a.1',title:'منح المساعدة الإنمائية الرسمية التي تركز على الحد من الفقر.',description:'إجمالي منح المساعدة الإنمائية الرسمية الموجهة للخدمات الاجتماعية والصحة والتعليم والمياه والصرف الصحي والأمن الغذائي.',source:'منصة المساعدات السعودية — مركز الملك سلمان للإغاثة',unit:'دولار أمريكي',detail:'حسب القطاع',updated:'2024',method:'مجموع منح المساعدة الإنمائية الرسمية التي تركز على الحد من الفقر بحسب القطاع والسنة.',note:'تمثل البيانات ما قُدم من خلال مركز الملك سلمان للإغاثة والأعمال الإنسانية.',tables:[{name:'المساعدات الموجهة للحد من الفقر حسب القطاع',columns:['القطاع','2020','2021','2022','2023','2024','الإجمالي'],rows:[['الأمن الغذائي والزراعة',284937128,400069842,140024839,122611766,110421594,1058065169],['التعليم',256830753,234965919,174575388,543265366,493017523,1702654949],['التغذية',40782066,21832915,9072436,1750000,13250000,86687417],['الصحة',479726752,295218524,259995432,823941833,737291653,2596174194],['المياه والإصحاح البيئي',23998870,4110274,389778040,336081382,999502339,1753470905],['متعدد القطاعات',30041463,23580744,87656524,98824093,118075087,358177911],['الإجمالي',1116317031,979778218,1061102659,1926474440,2471558196,7555230545]]}]},
  {code:'1.a.2',title:'نسبة الإنفاق الحكومي على الخدمات الأساسية: التعليم والصحة والحماية الاجتماعية.',description:'إجمالي الإنفاق الحكومي العام على التعليم والصحة والحماية الاجتماعية، معبرًا عنه قيمةً ونسبةً من إجمالي الإنفاق الحكومي.',source:'وزارة المالية',unit:'مليار ريال سعودي، ونسبة مئوية',detail:'وطني، وحسب القطاع',updated:'2024',method:'إنفاق القطاع على الخدمات الأساسية مقسومًا على إجمالي الإنفاق الحكومي في السنة المالية.',tables:[{name:'الإنفاق على الخدمات الأساسية',columns:['القطاع','2020 قيمة','2020 %','2021 قيمة','2021 %','2022 قيمة','2022 %','2023 قيمة','2023 %','2024 قيمة','2024 %'],rows:[['التعليم',205,19.1,192,18.5,202,17.4,210,16.2,204,14.8],['الصحة والتنمية الاجتماعية',190,17.7,197,19.0,227,19.5,256,19.8,273,19.9]]}]}
];

const cmsPublication=(()=>{try{return JSON.parse(localStorage.getItem('sdg-cms-publication')||'null')}catch{return null}})();
if(cmsPublication?.goal&&Array.isArray(cmsPublication.indicators)&&cmsPublication.indicators.length){
  goalContent={...goalContent,...cmsPublication.goal,indicators:cmsPublication.indicators.map(indicator=>({code:indicator.code,target:indicator.target||'',name:indicator.title,scope:indicator.detail||'وطني',status:'منشور'}))};
  publishedIndicator=cmsPublication.indicators[0];
  basicServicesIndicator=cmsPublication.indicators[1]||{...cmsPublication.indicators[0],code:`${cmsPublication.goal.number||1}.2`};
  additionalPublishedIndicators=cmsPublication.indicators.slice(2);
}

const formatNumber=value=>new Intl.NumberFormat('en-US',{useGrouping:true,maximumFractionDigits:12}).format(value);
const publishedContainer=document.querySelector('#publishedIndicators');
const indicatorTabs=document.querySelector('#indicatorTabs');
const indicatorId=code=>`indicator-${code.replaceAll('.','').replaceAll('a','a').replaceAll('b','b')}`;
const indicatorLabels={
  '1.3.1':'الحماية الاجتماعية','1.4.1':'الخدمات الأساسية','1.4.2':'حيازة الأراضي',
  '1.5.1':'المتضررون من الكوارث','1.5.2':'الخسائر الاقتصادية','1.5.3':'الاستراتيجية الوطنية',
  '1.5.4':'الخطط المحلية','1.a.1':'المساعدات الإنمائية','1.a.2':'الإنفاق على الخدمات'
};
const indicatorShortName=indicator=>indicatorLabels[indicator.code]||(indicator.scope||indicator.title||indicator.name||'مؤشر').split('/')[0].trim().slice(0,28);
const primaryCodes=cmsPublication?.indicators?.length?cmsPublication.indicators.map(indicator=>indicator.code):['1.3.1','1.4.1','1.4.2','1.5.1','1.5.2','1.5.3','1.5.4','1.a.1','1.a.2'];
const displayIndicators=[
  ...primaryCodes.map(code=>goalContent.indicators.find(indicator=>indicator.code===code)),
].filter(Boolean);

if(cmsPublication?.goal){
  const goalNumber=String(goalContent.number||1).padStart(2,'0');
  document.querySelector('#goalHeroTitle').textContent=goalContent.title;
  document.querySelector('#goalHeroDescription').textContent=goalContent.description||'';
  document.querySelector('#goalHeroUpdated').textContent=`آخر تحديث: ${goalContent.updated||''}`;
  document.querySelector('#goalHeroSource').textContent=`المصدر: ${goalContent.source||''}`;
  document.querySelector('#goalBreadcrumbCurrent').textContent=`الهدف ${goalContent.number||1}`;
  document.querySelector('#goalLabelNumber').textContent=goalNumber;
  document.querySelector('#goalLabelText').textContent=`الهدف ${goalContent.number||1} من أهداف التنمية المستدامة`;
  document.querySelector('#goalTileNumber').textContent=goalContent.number||1;
  document.querySelector('#goalTileTitle').textContent=goalContent.title;
  document.title=`الهدف ${goalContent.number||1}: ${goalContent.title} | التنمية المستدامة`;
}

indicatorTabs.innerHTML=displayIndicators.map((indicator,index)=>`
  <a class="${index===0?'active':''}" href="#${indicatorId(indicator.code)}">
    <b dir="ltr">${indicator.code}</b>
  </a>`).join('');

const detailedArticles=`
  <article class="simple-indicator" id="indicator-131">
    <header class="simple-indicator__title"><span>${publishedIndicator.code}</span><div><small>المؤشر الأول</small><h3>${publishedIndicator.title}</h3></div></header>
    <table class="metadata-table"><tbody><tr><th>وصف المؤشر</th><td>${publishedIndicator.description}</td></tr><tr><th>مصدر البيانات</th><td>${publishedIndicator.source}</td></tr><tr><th>وحدة القياس</th><td>${publishedIndicator.unit}</td></tr><tr><th>مستوى تفصيل البيانات</th><td>${publishedIndicator.detail}</td></tr><tr><th>طريقة الحساب</th><td>${publishedIndicator.method}</td></tr><tr><th>آخر تحديث</th><td>${publishedIndicator.updated}</td></tr><tr><th>ملاحظة</th><td>${publishedIndicator.note}</td></tr></tbody></table>
    <div class="simple-data-heading"><h4>جداول البيانات</h4><p>البيانات المنشورة للمؤشر بحسب الفئة والنوع الاجتماعي.</p></div>
    <div class="indicator-tables simple-indicator__tables">${publishedIndicator.tables.map((table,index)=>`
      <section class="data-table-card"><div class="data-table-card__head"><div><h4>${table.name}</h4></div><span>2020–2024</span></div>
      <div class="table-wrap"><table><thead><tr>${table.columns.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row=>`<tr>${row.map((cell,i)=>`<td>${i?formatNumber(cell):cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`).join('')}</div>
  </article>
  <article class="simple-indicator" id="indicator-141">
    <header class="simple-indicator__title"><span>${basicServicesIndicator.code}</span><div><small>المؤشر الثاني</small><h3>${basicServicesIndicator.title}</h3></div></header>
    <table class="metadata-table"><tbody><tr><th>وصف المؤشر</th><td>${basicServicesIndicator.description}</td></tr><tr><th>مصدر البيانات</th><td>${basicServicesIndicator.source}</td></tr><tr><th>وحدة القياس</th><td>${basicServicesIndicator.unit}</td></tr><tr><th>مستوى تفصيل البيانات</th><td>${basicServicesIndicator.detail}</td></tr><tr><th>طريقة الحساب</th><td>${basicServicesIndicator.method}</td></tr><tr><th>آخر تحديث</th><td>${basicServicesIndicator.updated}</td></tr></tbody></table>
    <div class="simple-data-heading"><h4>جداول البيانات</h4><p>البيانات المنشورة لمكونات الخدمات الأساسية ضمن المؤشر.</p></div>
    <div class="indicator-tables simple-indicator__tables">${basicServicesIndicator.tables.map(table=>`
      <section class="data-table-card"><div class="data-table-card__head"><div><h4>${table.name}</h4></div></div>
      <div class="table-wrap"><table><thead><tr>${table.columns.map(column=>`<th>${column}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row=>`<tr>${row.map(cell=>`<td>${typeof cell==='number'?formatNumber(cell):cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`).join('')}</div>
  </article>`;

const renderOfficialIndicator=(indicator,index)=>`
  <article class="simple-indicator" id="${indicatorId(indicator.code)}">
    <header class="simple-indicator__title"><span dir="ltr">${indicator.code}</span><div><h3>${indicator.title}</h3></div></header>
    <table class="metadata-table"><tbody>
      <tr><th>وصف المؤشر</th><td>${indicator.description}</td></tr>
      <tr><th>مصدر البيانات</th><td>${indicator.source}</td></tr>
      <tr><th>وحدة القياس</th><td>${indicator.unit}</td></tr>
      <tr><th>مستوى تفصيل البيانات</th><td>${indicator.detail}</td></tr>
      <tr><th>طريقة الحساب</th><td>${indicator.method}</td></tr>
      <tr><th>آخر تحديث</th><td>${indicator.updated}</td></tr>
      ${indicator.note?`<tr><th>ملاحظة</th><td>${indicator.note}</td></tr>`:''}
    </tbody></table>
    ${indicator.tables.length?`<div class="simple-data-heading"><h4>جداول البيانات</h4></div><div class="indicator-tables simple-indicator__tables">${indicator.tables.map((table,tableIndex)=>`
      <section class="data-table-card"><div class="data-table-card__head"><div><h4>${table.name}</h4></div><span>آخر تحديث ${indicator.updated}</span></div>
      <div class="table-wrap"><table><thead><tr>${table.columns.map(column=>`<th>${column}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row=>`<tr>${row.map((cell,cellIndex)=>`<td>${cellIndex===0||typeof cell==='string'?cell:formatNumber(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`).join('')}</div>`:`<div class="indicator-source-note"><span aria-hidden="true">i</span><p>هذا مؤشر سياساتي؛ تعرض النسخة المنشورة تعريفه ومنهجيته وحالة التحديث دون سلسلة رقمية سنوية.</p></div>`}
  </article>`;

const additionalArticles=additionalPublishedIndicators.map(renderOfficialIndicator).join('');
const allPublishedIndicators=cmsPublication?.indicators?.length?cmsPublication.indicators:[publishedIndicator,basicServicesIndicator,...additionalPublishedIndicators];
const detailedCodes=new Set([publishedIndicator.code,basicServicesIndicator.code,...additionalPublishedIndicators.map(indicator=>indicator.code)]);
const catalogueArticles=displayIndicators.filter(indicator=>!detailedCodes.has(indicator.code)).map((indicator,index)=>`
  <article class="simple-indicator simple-indicator--catalogue" id="${indicatorId(indicator.code)}">
    <header class="simple-indicator__title">
      <span dir="ltr">${indicator.code}</span>
      <div><small>المؤشر ${index+3}</small><h3>${indicator.name}</h3></div>
    </header>
    <div class="indicator-summary-grid">
      <div><small>الغاية المرتبطة</small><strong dir="ltr">${indicator.target}</strong></div>
      <div><small>نطاق المؤشر</small><strong>${indicator.scope}</strong></div>
      <div><small>حالة المؤشر</small><strong>${indicator.status}</strong></div>
    </div>
    <div class="indicator-source-note">
      <span aria-hidden="true">i</span>
      <p>يُعرض تعريف المؤشر ضمن سجل الهدف الأول. وتظهر جداول البيانات والمنهجية التفصيلية عند توفرها في النسخة المنشورة.</p>
    </div>
  </article>`).join('');

publishedContainer.innerHTML=cmsPublication?.indicators?.length?allPublishedIndicators.map(renderOfficialIndicator).join(''):detailedArticles+additionalArticles+catalogueArticles;

// A dedicated Excel download is presented with every indicator.
publishedContainer.querySelectorAll('.simple-indicator').forEach(article=>{
  const indicator=displayIndicators.find(item=>indicatorId(item.code)===article.id)
    ||allPublishedIndicators.find(item=>indicatorId(item.code)===article.id);
  if(!indicator)return;
  const hasData=Boolean(indicator.tables?.length);
  const button=document.createElement('button');
  button.type='button';
  button.className='indicator-excel-btn';
  button.dataset.indicatorCode=indicator.code;
  button.disabled=!hasData;
  button.setAttribute('aria-label',hasData?`تنزيل بيانات المؤشر ${indicator.code} بصيغة Excel`:`لا تتوفر بيانات Excel للمؤشر ${indicator.code}`);
  button.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h9l3 3V20.5H6zM15 3.5v3h3M9 11l4 5m0-5-4 5"/></svg><span>${hasData?'تنزيل بيانات المؤشر':'لا تتوفر بيانات'}</span><small>Excel</small>`;
  article.querySelector('.simple-indicator__title')?.append(button);
});

function exportIndicatorExcel(indicator){
  if(!window.XLSX||!indicator?.tables?.length)return;
  const book=XLSX.utils.book_new();
  book.Workbook={Views:[{RTL:true}]};
  indicator.tables.forEach((table,index)=>{
    const rows=[
      [`المؤشر ${indicator.code}`],
      [indicator.title||indicator.name||''],
      [`مصدر البيانات: ${indicator.source||''}`],
      [],
      [table.name],
      table.columns,
      ...table.rows
    ];
    const sheet=XLSX.utils.aoa_to_sheet(rows);
    const lastColumn=Math.max(table.columns.length-1,0);
    sheet['!merges']=[0,1,2,4].map(row=>({s:{r:row,c:0},e:{r:row,c:lastColumn}}));
    sheet['!cols']=table.columns.map((column,columnIndex)=>({wch:columnIndex===0?42:18}));
    sheet['!autofilter']={ref:`A6:${XLSX.utils.encode_col(lastColumn)}${6+table.rows.length}`};
    XLSX.utils.book_append_sheet(book,sheet,`${indicator.code}-${index+1}`.slice(0,31));
  });
  XLSX.writeFile(book,`SDG-Indicator-${indicator.code}.xlsx`);
}

publishedContainer.addEventListener('click',event=>{
  const button=event.target.closest('.indicator-excel-btn');
  if(!button||button.disabled)return;
  const indicator=allPublishedIndicators.find(item=>item.code===button.dataset.indicatorCode)
    ||displayIndicators.find(item=>item.code===button.dataset.indicatorCode);
  exportIndicatorExcel(indicator);
});

const tabLinks=[...indicatorTabs.querySelectorAll('a')];
tabLinks.forEach((link,index)=>{
  if(index===0) link.setAttribute('aria-current','true');
  link.addEventListener('click',()=>{
    tabLinks.forEach(item=>item.removeAttribute('aria-current'));
    link.setAttribute('aria-current','true');
  });
});
const indicatorArticles=[...publishedContainer.querySelectorAll('.simple-indicator')];
const indicatorObserver=new IntersectionObserver(entries=>{
  const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible)return;
  tabLinks.forEach(link=>{
    const active=link.hash===`#${visible.target.id}`;
    link.classList.toggle('active',active);
    if(active) link.setAttribute('aria-current','true'); else link.removeAttribute('aria-current');
  });
  const active=indicatorTabs.querySelector('a.active');
  active?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
},{rootMargin:'-24% 0px -60% 0px',threshold:[.05,.25,.5]});
indicatorArticles.forEach(article=>indicatorObserver.observe(article));

function exportPdf(){
  document.querySelectorAll('.target-item').forEach(item=>item.classList.add('open'));
  const oldTitle=document.title; document.title=`الهدف 01 - ${goalContent.title} - ${goalContent.updated}`;
  window.print(); setTimeout(()=>document.title=oldTitle,500);
}
function exportExcel(){
  if(window.XLSX){
    const book=XLSX.utils.book_new();
    book.Workbook={Views:[{RTL:true}]};
    const appendTables=indicator=>indicator.tables.forEach((table,index)=>{
      const rows=[
        [`المؤشر ${indicator.code}`],
        [indicator.title],
        [`مصدر البيانات: ${indicator.source}`],
        [],
        [table.name],
        table.columns,
        ...table.rows
      ];
      const sheet=XLSX.utils.aoa_to_sheet(rows);
      const lastColumn=Math.max(table.columns.length-1,0);
      sheet['!merges']=[0,1,2,4].map(row=>({s:{r:row,c:0},e:{r:row,c:lastColumn}}));
      sheet['!cols']=table.columns.map((column,columnIndex)=>({wch:columnIndex===0?42:18}));
      sheet['!autofilter']={ref:`A6:${XLSX.utils.encode_col(lastColumn)}${6+table.rows.length}`};
      XLSX.utils.book_append_sheet(book,sheet,`${indicator.code}-${index+1}`.slice(0,31));
    });
    allPublishedIndicators.forEach(indicator=>{
      if(indicator.tables?.length) appendTables(indicator);
    });
    XLSX.writeFile(book,'بيانات-مؤشرات-الهدف-الأول-2024.xlsx');
  }else{
    const table=publishedIndicator.tables[0]; const csv='\uFEFF'+[table.columns.join(','),...table.rows.map(row=>row.join(','))].join('\n');
    const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));link.download='goal-01-poverty-data-2024.csv';link.click();URL.revokeObjectURL(link.href);
  }
}
function exportCsv(){
  const escapeCsv=value=>{
    const text=String(value??'');
    return /[",\n]/.test(text)?`"${text.replaceAll('"','""')}"`:text;
  };
  const rows=[];
  allPublishedIndicators.forEach(indicator=>{
    indicator.tables?.forEach(table=>{
      rows.push([`المؤشر ${indicator.code}`],[indicator.title],[`مصدر البيانات: ${indicator.source}`],[],[table.name],table.columns,...table.rows,[],[]);
    });
  });
  const csv='\uFEFF'+rows.map(row=>row.map(escapeCsv).join(',')).join('\r\n');
  const link=document.createElement('a');
  link.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  link.download='بيانات-مؤشرات-الهدف-الأول-2024.csv';
  link.click();
  setTimeout(()=>URL.revokeObjectURL(link.href),1000);
}
['downloadPdf'].forEach(id=>document.querySelector('#'+id)?.addEventListener('click',exportPdf));
['downloadExcel'].forEach(id=>document.querySelector('#'+id)?.addEventListener('click',exportExcel));
['downloadCsv'].forEach(id=>document.querySelector('#'+id)?.addEventListener('click',exportCsv));

const apiService=document.querySelector('#apiService');
const apiToggle=document.querySelector('#openApiService');
apiToggle?.addEventListener('click',()=>{
  const open=apiService.hidden;
  apiService.hidden=!open;
  apiToggle.setAttribute('aria-expanded',String(open));
  if(open) apiService.scrollIntoView({behavior:'smooth',block:'nearest'});
});
document.querySelector('#copyApiEndpoint')?.addEventListener('click',async event=>{
  const endpoint='/api/v1/sdg/goals/1';
  try{await navigator.clipboard.writeText(endpoint)}catch{
    const field=document.createElement('textarea');field.value=endpoint;document.body.appendChild(field);field.select();document.execCommand('copy');field.remove();
  }
  const button=event.currentTarget;const oldText=button.textContent;button.textContent='تم النسخ';setTimeout(()=>button.textContent=oldText,1600);
});
document.querySelector('#downloadApiJson')?.addEventListener('click',()=>{
  const payload={
    api_version:'v1',
    generated_at:new Date().toISOString(),
    goal:{number:goalContent.number,title:goalContent.title,updated:goalContent.updated,source:goalContent.source},
    targets:goalContent.targets,
    indicators:allPublishedIndicators
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'});
  const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='sdg-goal-01-api-sample.json';link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
});

const sections=[...document.querySelectorAll('.goal-section')];
const navLinks=[...document.querySelectorAll('.goal-subnav nav a')];
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-25% 0px -65% 0px'});
sections.forEach(section=>sectionObserver.observe(section));

const header=document.querySelector('#header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
const menuBtn=document.querySelector('#menuBtn');
menuBtn.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menuBtn.setAttribute('aria-expanded',open)});
const searchPanel=document.querySelector('#searchPanel');
document.querySelector('#searchBtn').addEventListener('click',()=>{searchPanel.classList.add('open');searchPanel.setAttribute('aria-hidden','false')});
document.querySelector('#closeSearch').addEventListener('click',()=>{searchPanel.classList.remove('open');searchPanel.setAttribute('aria-hidden','true')});
