(this["webpackJsonpyashi-website"]=this["webpackJsonpyashi-website"]||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n(21),o=n.n(s),r=(n(62),n(63),n(7)),c=n(8),l=n(10),h=n(9),d=(n(64),n(11)),u=n(12),p=n(18),m=n(30),g=n(20),b=(n(69),n(41)),j=(n(70),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"descriptive-photos-container",children:this.props.images&&this.props.images.length>0&&Object(a.jsx)(b.a,{children:this.props.images.map((function(e){return Object(a.jsxs)(b.a.Item,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("img",{className:"img-fluid fixed-height",src:e.photo,alt:"First slide"})}),Object(a.jsxs)(b.a.Caption,{children:[e.caption&&Object(a.jsx)("h3",{children:e.caption}),e.description&&Object(a.jsx)("p",{children:e.description})]})]},Math.random())}))})})}}]),n}(i.Component)),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"createCard",value:function(){var e=this.props.homepage.content.description,t=this.props.homepage.content.contact.phones,n=this.props.homepage.content.contact.emails,i=this.props.homepage.content.socialMedia;return Object(a.jsxs)(p.a,{children:[Object(a.jsx)(p.a.Body,{children:Object(a.jsx)(p.a.Text,{children:e.map((function(e){return Object(a.jsxs)("span",{children:[" ",Object(a.jsx)("br",{}),e," ",Object(a.jsx)("br",{})," "]},Math.random())}))})}),Object(a.jsxs)(m.a,{className:"list-group-flush phones",children:[Object(a.jsx)(g.a,{className:"icon",children:Object(a.jsx)("img",{src:this.props.homepage.content.phoneIcon,alt:"phone"})}),Object(a.jsx)(g.a,{children:Object(a.jsx)(m.a,{className:"list-group-flush",children:t.map((function(e){return Object(a.jsx)(g.a,{children:e},Math.random())}))})})]}),Object(a.jsxs)(m.a,{className:"list-group-flush emails",children:[Object(a.jsx)(g.a,{className:"icon",children:Object(a.jsx)("img",{src:this.props.homepage.content.emailIcon,alt:"email"})}),Object(a.jsx)(g.a,{children:Object(a.jsx)(m.a,{className:"list-group-flush",children:n.map((function(e){return Object(a.jsx)(g.a,{children:e},Math.random())}))})})]}),Object(a.jsx)(p.a.Body,{className:"social",children:i.map((function(e){return Object(a.jsxs)("div",{className:"social-container",children:[Object(a.jsx)(p.a.Link,{href:e.link,children:Object(a.jsx)("img",{src:e.icon,alt:e.name})}),Object(a.jsx)(p.a.Link,{href:e.link,children:e.link})]},Math.random())}))})]})}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"main-container pt-lg-5",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"profile col-lg-6",children:Object(a.jsx)(j,{images:this.props.homepage.profilePhotos})}),Object(a.jsx)("div",{className:"content col-lg-6",children:this.createCard()})]})})})}}]),n}(i.Component),y=Object(u.b)((function(e){return{homepage:e.pages[0]}}))(f),O=(n(71),n(72),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"main-heading",style:{backgroundImage:"url(foggy-birds.png)"},children:Object(a.jsx)("h1",{children:this.props.heading})})}}]),n}(i.Component)),v=n(42),x=function(e){return e.map((function(e){return Object(a.jsxs)("div",{className:"content-container",children:[e.title&&Object(a.jsx)("div",{className:"heading",children:Object(a.jsx)("h3",{children:e.title})}),Object(a.jsx)("div",{className:"texts",children:e.texts.map((function(e){return Object(a.jsx)("p",{children:e},Math.random())}))}),e.links.length>0&&Object(a.jsx)("div",{className:"links",children:e.links.map((function(e){return Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:e,children:e})},Math.random())}))}),e.images.length>0&&Object(a.jsx)("div",{className:"images",children:e.images.map((function(e){return Object(a.jsx)("img",{src:e,alt:e,className:"img-fluid"},Math.random())}))})]},Math.random())}))},w=function(e){return e.map((function(e){return Object(a.jsxs)("div",{className:"content-container",children:[Object(a.jsx)(v.a,{defaultActiveKey:"0",children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(v.a.Toggle,{as:p.a.Header,eventKey:"0",children:Object(a.jsx)("h6",{children:e.title})}),Object(a.jsx)(v.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(p.a.Body,{children:[Object(a.jsx)("div",{className:"texts",children:e.texts.map((function(e){return Object(a.jsx)("p",{children:e},Math.random())}))}),e.links.length>0&&Object(a.jsx)("div",{className:"links",children:e.links.map((function(e){return Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:e,children:e})},Math.random())}))}),e.images.length>0&&Object(a.jsx)("div",{className:"images",children:e.images.map((function(e){return Object(a.jsx)("img",{src:e,alt:e,className:"img-fluid"},Math.random())}))})]})})]})}),Object(a.jsx)("br",{})]},Math.random())}))},k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(O,{heading:this.props.periodonticsPage.name}),Object(a.jsx)("div",{className:"main-container-periodontics pt-lg-5",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j,{images:this.props.periodonticsPage.decorativePhotos}),x(this.props.periodonticsPage.content),w(this.props.periodonticsPage.collapsableContent)]})})]})}}]),n}(i.Component),N=Object(u.b)((function(e){return{periodonticsPage:e.pages[1]}}))(k),P=(n(73),n(26)),I=n(85),T=(n(74),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"title",value:function(){return Object(a.jsxs)("div",{className:"title",children:[this.props.logo.title,"."]})}},{key:"firstName",value:function(){return Object(a.jsx)("div",{className:"firstname",children:this.props.logo.firstName})}},{key:"lastName",value:function(){return Object(a.jsx)("div",{className:"lastname",children:this.props.logo.lastName})}},{key:"degree",value:function(){return Object(a.jsx)("div",{className:"degree",children:this.props.logo.degree})}},{key:"speciality",value:function(){return Object(a.jsx)("div",{className:"speciality",children:this.props.logo.speciality})}},{key:"render",value:function(){return console.log(this.props,"/yashi-website/"+this.props.logo.logo),Object(a.jsxs)("div",{className:"logo",children:[Object(a.jsxs)("div",{className:"title-name",children:[Object(a.jsx)("div",{className:"title-container",children:this.title()}),Object(a.jsxs)("div",{className:"name",children:[this.firstName(),this.lastName()]})]}),Object(a.jsxs)("div",{className:"degree-spec",children:[this.degree(),this.speciality()]})]})}}]),n}(i.Component)),S=Object(u.b)((function(e){return{logo:e.header}}))(T),A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"createMenu",value:function(){return this.props.pages.map((function(e){return Object(a.jsx)(I.a.Link,{href:"#"+e.link,children:e.name},Math.random())}))}},{key:"render",value:function(){return Object(a.jsxs)(P.a,{bg:"light",expand:"lg",className:"header",children:[Object(a.jsx)(P.a.Brand,{href:"#home",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(S,{})})}),Object(a.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(P.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(I.a,{className:"mr-auto",children:this.createMenu()})})})]})}}]),n}(i.Component),E=Object(u.b)((function(e){return{pages:e.pages}}))(A),C=(n(77),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"createMenu",value:function(){return this.props.pages.map((function(e){return Object(a.jsx)(I.a.Link,{href:"#"+e.link,children:e.name},Math.random())}))}},{key:"render",value:function(){var e=this.props.copyrightText;return Object(a.jsxs)(P.a,{bg:"light",className:"footer",children:[Object(a.jsx)(I.a,{className:"mr-auto",children:this.createMenu()}),Object(a.jsx)("div",{className:"copyright",children:e})]})}}]),n}(i.Component)),D=Object(u.b)((function(e){return{pages:e.pages,copyrightText:e.header.copyrightText}}))(C),R=(n(78),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(O,{heading:this.props.meetPage.name}),Object(a.jsx)("div",{className:"main-container-meet pt-lg-5",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j,{images:this.props.meetPage.decorativePhotos}),x(this.props.meetPage.content)]})})]})}}]),n}(i.Component)),M=Object(u.b)((function(e){return{meetPage:e.pages[2]}}))(R),q=(n(79),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(O,{heading:this.props.treatmentsPage.name}),Object(a.jsx)("div",{className:"main-container-treatments pt-lg-5",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j,{images:this.props.treatmentsPage.decorativePhotos}),x(this.props.treatmentsPage.content)]})})]})}}]),n}(i.Component)),G=Object(u.b)((function(e){return{treatmentsPage:e.pages[3]}}))(q),L=(n(80),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(O,{heading:this.props.faqsPage.name}),Object(a.jsx)("div",{className:"main-container-faqs pt-lg-5",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j,{images:this.props.faqsPage.decorativePhotos}),w(this.props.faqsPage.content)]})})]})}}]),n}(i.Component)),H=Object(u.b)((function(e){return{faqsPage:e.pages[4]}}))(L),W=(n(81),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(O,{heading:this.props.visitPage.name}),Object(a.jsx)("div",{className:"main-container-visit pt-lg-5",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j,{images:this.props.visitPage.decorativePhotos}),x(this.props.visitPage.content)]})})]})}}]),n}(i.Component)),F=Object(u.b)((function(e){return{visitPage:e.pages[5]}}))(W),B=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"body",children:Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(E,{}),Object(a.jsx)("main",{children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/home",component:y,exact:!0}),Object(a.jsx)(d.a,{path:"/periodontics",component:N,exact:!0}),Object(a.jsx)(d.a,{path:"/meet",component:M,exact:!0}),Object(a.jsx)(d.a,{path:"/treatments",component:G,exact:!0}),Object(a.jsx)(d.a,{path:"/faqs",component:H,exact:!0}),Object(a.jsx)(d.a,{path:"/visit",component:F,exact:!0})]})}),Object(a.jsx)(D,{})]})})}}]),n}(i.Component),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))},U=n(46),K=n(32),V={header:{title:"Dr",firstName:"Yashi",lastName:"Priya",degree:"MDS",speciality:"Periodontology",logo:"dental.svg",copyrightText:"\xa9 2021 Yashi Priya. All Rights Reserved."},pages:[{name:"Home",link:"home",backdrop:"smiling-people.jpg",profilePhotos:[{photo:"picture1.png",description:null,caption:null}],content:{description:["Are you suffering with bad breath?","Do you have bleeding gums or any other gum related issue?","Consult Dr Yashi Priya, Periodontist (specialist in gum disease)."],phoneIcon:"phone-classic.svg",emailIcon:"email.svg",contact:{phones:["+91 9886429742","+91 7887325788"],emails:["yashipriya1@gmail.com","shekhar957@gmail.com"]},socialMedia:[{name:"LinkedIn",link:"https://www.linkedin.com/in/dryashi",icon:"linkedin.svg"},{name:"Instagram",link:"gumcare by dryashi",icon:"instagram.svg"}]}},{name:"Periodontics",link:"periodontics",decorativePhotos:[{photo:"d1.jpeg"},{photo:"d2.jpg"}],content:[{title:"Who is a Periodontist (Gum Specialist)?",texts:["A periodontist is a dentist who specializes in the prevention, diagnosis, and treatment of periodontal disease, and in the placement of dental implants. Periodontists are also experts in the treatment of oral inflammation. Periodontists receive extensive training in these areas, including three additional years of education beyond dental school. They are familiar with the latest techniques for diagnosing and treating periodontal disease, and are also trained in performing cosmetic periodontal procedures.","Periodontists often treat more problematic periodontal cases, such as those with severe gum disease or a complex medical history. Periodontists offer a wide range of treatments, such as scaling and root planing (in which the infected surface of the root is cleaned) or root surface debridement (in which damaged tissue is removed). They can also treat patients with severe gum problems using a range of surgical procedures. In addition, periodontists are specially trained in the placement, maintenance, and repair of dental implants."],images:[],links:[]},{title:"What is Periodontitis?",texts:["Periodontitis is often known as 'Gum Disease' and is a very common condition in which the gums and deeper periodontal structures become inflamed. This inflammation of the gums, which usually takes the form of redness, swelling and a tendency to bleed during tooth brushing, is the body\u2019s response to certain bacteria that have been allowed to accumulate on the teeth. Although part of the body\u2019s defense system, this inflammatory response can eventually cause serious damage. If left unchecked, the inflammation can spread down below the gums and along the roots of the teeth, causing destruction of the periodontal ligament and the supporting bone. This ultimately leads to the loosening and potential loss of the teeth."],images:["Per1.png"],links:["https://www.efp.org/patients/what-is-periodontitis.html"]}],collapsableContent:[{title:"What is an \u201cOngoing Infection\u201d?",texts:["Have you ever gotten a sliver of wood caught under the skin of your hand? Because the wound is open to bacteria, the site may become infected and so appear red and inflamed. In time, your immune system fights off the bacteria and your hand heals.","During an ongoing infection, however, your immune system is unable to conquer the bacteria on its own and the pain and redness continue to worsen.","Periodontal disease is an ongoing infection in the pockets around your teeth. You cannot fight off the infection alone, but with periodontal therapy, we are able to remove debris and bacteria from the site allowing the gum to heal as your hand had."],images:["Per2.png"],links:[]},{title:"What Can Cause a Burst of Infection Activity?",texts:["People with periodontal disease have low resistance to periodontal bacteria.\xa0 This causes an ongoing gum infection that grows in bursts of activity.\xa0 Each time it grows, more support for your teeth is lost.\xa0 Some factors that can cause a burst of activity are:","Poor oral hygiene","Dental plaque","Smoking","Genetic factors","Stress or tension","Diet","Age","Illness"],images:[],links:[]},{title:"Getting Periodontal Infection Treated Right Away",texts:["When your infection has a burst of activity, or when there are signs that this is about to occur, your general dentist may recommend you see a periodontist."],images:[],links:[]},{title:"Symptoms of Periodontal Infection ",texts:["Periodontal infection is usually painless until it reaches an advanced stage. However, there are some symptoms which can indicate the presence of periodontal infection. These include:","Red or swollen gums","Bleeding when brushing (pink toothbrush),\xa0or at other times","Aching, itchy, sore or tender gums","Receding gums (teeth beginning to look longer)","Pus between your teeth and gums when you press down on the gums","Bad breath","Any change in the way your teeth fit together when you bite","Any change in the fit of partial dentures","Loose, separating or protruding teeth","Spaces between teeth","If you notice any of the above warning signs of periodontal infection, please contact your general dentist and ask for a periodontal evaluation","Important Note:\xa0Your gums can look and feel quite normal and yet deep pockets of periodontal infection can still be present. To be certain about any periodontal disease, ask your dentist or periodontist to examine your gums for signs of infection"],images:[],links:[]}]},{name:"Meet The Doctor",link:"meet",decorativePhotos:[{photo:"profile1.jpeg"},{photo:"profile2.jpeg"}],content:[{title:"",texts:["Dr Yashi specialises in the field of Periodontology and Implantology, a field of dentistry which deals with the inflammatory disease that destroys gums and other supporting structures around the tooth.","She graduated from a very renowned institution VK Institute of Dental Sciences, KLE Belgaum and completed post-graduation from reputed Faculty of Dental Sciences, Ramaiah University of Applied Sciences. To pursue her interest in the field of Implants she has also received a fellowship degree in Oral Implantology (FICOI) from International Congress of Oral Implantology.","She is a member of Indian Society of Periodontology. In order to keep her updated with the recent advances in Periodontics she has also attended numerous workshops on Lasers and Microsurgery in Periodontology. Dr Yashi believes in providing quality treatment to her patients and has a valuable concept of ethics and honesty and respect for methods and protocols in the management of patients."],images:[],links:[]}]},{name:"Periodontal Treatments",link:"treatments",decorativePhotos:[],content:[{title:"NON-SURGICAL PERIODONTAL TREATMENT",texts:["AAP treatment guidelines stress that periodontal health should be achieved in the least invasive and most cost-effective manner. This is often accomplished through non-surgical periodontal treatment.","Non-surgical periodontal treatment does have its limitations. When it does not achieve periodontal health, surgery may be indicated to restore periodontal health."],images:[],links:[]},{title:"SCALING AND ROOT PLANING",texts:["Scaling and root planing is a careful cleaning of the root surfaces to remove plaque and calculus [tartar] from deep periodontal pockets and to smooth the tooth root to remove bacterial toxins. Scaling and root planing is sometimes\xa0followed by adjunctive therapy such as local delivery antimicrobials, systemic antibiotics, and host modulation, as needed on a case-by-case basis.","Most periodontists would agree that after scaling and root planing, many patients do not require any further active treatment. However, the majority of patients will require ongoing maintenance therapy to sustain health."],images:["sarp.png"],links:[]},{title:"LASER GUM THERAPY",texts:["Depending on your treatment needs, the laser may be for a long period of time or possibly only for brief moments. However, even those procedures that require only a short period of laser usage benefit from the advantages of laser therapy. With laser surgery, there is a reduced need for local anesthetics, bleeding is minimized, swelling is controlled, and there is usually little, if any, postoperative discomfort"],images:["lgt.png"],links:[]},{title:"REGENERATIVE PROCEDURES/ BONE GRAFTING",texts:["Bone grafting is a treatment that recreates the natural volume and contours of the bone supporting our teeth. There are three major indications for the build-up of bone (bone grafting):","For aesthetics, to improve contours around teeth and/or maintain the shape of a young, healthy face.","To prevent excessive bone loss after an extraction (ridge preservation)","To replace lost bone (bone reconstruction)"],images:["rpbg1.png","rpbg2.png","rpbg3.png"],links:[]},{title:"GUM GRAFTING",texts:["When gum recession occurs, teeth lose their attachment which is a natural defence against bacteria and trauma. Recession is always accompanied by root exposure, which leads to sensitivity and leaves them exposed and susceptible to root decay. Recession can be caused by grinding, past treatment with orthodontics (braces), malocclusion, and aggressive tooth brushing. Treatments and habits can be a greater risk for people who, based on their genetics, naturally have thin gums. When gum recession is a problem\xa0soft tissue grafting\xa0techniques may be a solution","A gum graft is designed to solve problems such as thin gums or insufficient gum coverage (recession). A thin piece of tissue is used to provide a stable band of attached gingiva around the tooth. The gingival graft may be placed to cover the exposed portion of the root or to increase the thickness of existing gums. This procedure is highly predictable and results in a stable healthy band of attached tissue around the tooth"],images:["gg1.png","gg2.png"],links:[]},{title:"CROWN LENGTHENING",texts:["Crown lengthening is a periodontal procedure that involves reshaping the bone and gums to create the correct proportions for an aesthetic smile. It may also be required when your tooth needs a crown or deep restorations below the gum tissue. Crown lengthening allows your dentist to access the area and keeps the restoration away from the bone for a predictable long-term crown or restoration","Crown lengthening involves adjusting the level of the gum tissue and bone around the tooth to create a new gum-to-tooth relationship. This allows your dentist to access the edge of the restoration ensuring a proper fit and sealed margin. It will also increase the amount of tooth structure available upon to attach the crown, reducing the possibility that your new restoration will become loose in the future. This improved access also allows you and your hygienist to better clean restoration margins where plaque and calculus can accumulate. Overall this helps to fend off recurrent decay and gum disease"],images:["cl1.png","cl2.png"],links:[]}]},{name:"Gum Disease Faqs",link:"faqs",decorativePhotos:[],content:[{title:"WHAT CAUSES PERIODONTAL DISEASE (PERIODONTITIS)?",texts:["Periodontitis is caused by any condition that promotes bacterial infection around teeth. These include a patient\u2019s medical condition, not adhering to ongoing maintenance, or a lack of adequate oral hygiene."],images:[],links:[]},{title:"WHAT WILL INCREASE MY RISK OF GETTING PERIODONTITIS?",texts:["Any factors that increase bacterial growth will increase your risks of periodontitis. The major risk factors include:","Poor oral hygiene","Smoking","Poorly controlled diabetes","Non-compliance with prescribed hygiene maintenance program","Other risk factors include:","Aging","Genetic predisposition","Systemic diseases and conditions","Stress","Inadequate nutrition","Puberty","Hormonal fluctuations","Pregnancy","Substance abuse","HIV infection","Certain medications"],images:[],links:[]},{title:"HOW IS PERIODONTITIS DIAGNOSED?",texts:["Patient symptoms\xa0may include: pain, tooth mobility, bad taste, and bleeding gums. It is important to note that in most cases there may be no symptoms noticed.","Signs observed by your dentist or hygienist\xa0include: suppuration (pus), bleeding, progressive bone loss, and increasing probing depths around all or some teeth."],images:[],links:[]},{title:"DO I HAVE PERIODONTAL DISEASE?",texts:["To protect your oral health, learn to recognize the signs of infection.\xa0 Periodontal disease symptoms include:","red, inflamed gums","bleeding gums","Receding gums","Loose teeth","Chronic bad breath","Pus around teeth and gums","Changes in bite"],images:[],links:[]},{title:"HOW IS PERIODONTITIS TREATED?",texts:["There are multiple ways in which periodontitis can be addressed, both surgically and non-surgically. The precise treatment plan depends on your unique conditions. In most cases a regular hygiene regimen with antimicrobial and anti-micro biotic therapies are prescribed.\xa0 In some cases periodontal surgery is needed"],images:[],links:[]},{title:"WHAT ARE THE CONSEQUENCES IF PERIODONTITIS IS NOT TREATED?",texts:["Often the initial symptoms of Periodontitis are very mild and may not be noticed by the patient. Without treatment, the disease progresses, bacteria infect the gums and bone, at which point the teeth can become loose and may have to be removed"],images:[],links:[]}]},{name:"First Visit",link:"visit",decorativePhotos:[],content:[{title:"",texts:["During the first visit, Dr Yashi Priya usually reviews the patient\u2019s complete medical and dental histories. It is extremely important for the periodontist to know if any medications are being taken or if the patient is being treated for any condition that can affect periodontal care, such as heart disease, diabetes, or pregnancy.","The periodontist examines the gums, checks to see if there is any gum line recession, assesses how the teeth fit together when biting, and checks the teeth to see if any are loose. The periodontist will also take a small measuring instrument called a probe and place it between the teeth and gums to determine the depth of those spaces, known as periodontal pockets; this helps the periodontist assess the health of the gums. X-rays (OPG) may also be taken to observe the health of the bone below the gum line."],images:[],links:[]}]}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return e},J=Object(K.b)(z);o.a.render(Object(a.jsx)(U.a,{basename:"/yashi-website",children:Object(a.jsx)(u.a,{store:J,children:Object(a.jsx)(B,{})})}),document.getElementById("root")),Y()}},[[83,1,2]]]);
//# sourceMappingURL=main.42ef9edb.chunk.js.map