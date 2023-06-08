# 日本史 前期期末  
<br>

## モンゴル襲来  
**(  ==フビライ==  )**（チンギスの孫）、高麗を通じて日本に朝貢を要求
⇒ 8代執権 **( ==北条時宗== )**（時頼の子）、要求を拒否

1274年  **(  ==文永の役==  )**
1281年  **(  ==弘安の役==  )**
⇒ **(  ==異国警備番役==  )** を強化（九州の御家人）
<br><br>

## モンゴル襲来後の政治  
博多に **(  ==鎮西探題==  )** を設置  
そうした中...　北条氏の嫡流の当主 **(  ==得宗== )** の権力を強化
⇒ 御家人や北条氏一門が幕政を主導する、**(  ==得宗専制政治==  )** が成立（9代執権 **(  ==北条貞時==  )** から）  
<br><br>

## 社会の変動  
農業 ･･･ **(  ==二毛作==  )** と **(  ==牛馬耕==  )** が普及
手工業・商業 ･･･ **(  ==座==  )** の結成、 **(  ==見世棚==  )** の出現、 **(  ==問==  )** の誕生・発達
貨幣流通 ･･･ **(  ==宋銭==  )** の流入、 **(  ==為替==  )** の使用、 **(  ==借上==  )** の出現  
<br><br><br>

## 幕府の衰退  
1297年  **(  ==永仁の徳政令==  )** （幕府が御家人の窮乏化に対応）  
**(  ==悪党==  )** の台頭 （年貢納入拒否など、荘園領主に抵抗する武士）  
<br><br>

## 鎌倉幕府の滅亡と建武の新政  
後嵯峨法皇の死後、皇統が **(  ==持明院統==  )** と **(  ==大覚寺統==  )** に分裂
<br><br>

<div id="space"></div>
<label id="o-header" for="show">
<input id="show" class="checkbox" type="checkbox" onchange="show();">
<span id="label">&nbsp;&nbsp;&nbsp;&nbsp;解答を表示</span>
</label>
<style>
    html body .markdown-preview {
        transform: none !important;
        left:0 !important;
    }
    body p {
        font-size: 1.4em;
        line-height: 1.8em;
    }
    @media screen and (min-width: 914px) {
        html body .markdown-preview {
            padding: 2em 10% !important;
        }
    }
    #space {height: 6rem;}
    #o-header {
        position: fixed;
        top:80px; right:5%; 
        padding:1rem 1.75rem 1rem 2.5rem;
        border-radius: 3rem;
        border: 2px solid rgba(0,0,0,0.2);
        background-color:#fff; 
    }
    mark {
        color: white;
        background-color: white;
    }
    .mark-show {
        color: #F06060;
    }
    #label {
        position: relative;
        cursor: pointer;
        font-size: 1.2rem;
    }
    #label::before {
        content: "";
        display: inline-block;
        width: 1em; height: 1em;
        border: 2px solid rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        position: absolute; top:0; left:0;
        transform: translate(-40%, -1px);
        z-index: 1;
    }
    #label::after {
        content: "";
        border-bottom: 5px solid #fff;
        border-left: 5px solid #fff;
        opacity: 0;
        height: 0.38em; width: 0.78em;
        position: absolute; top:0; left:0;
        transform: translate(-37%, 3px) rotate(-45deg);
        z-index: 10;
    }
    #show {display: none;}
    #show:checked ~ #label::before {
        background-color: #6bbaf0;
        border: 2px solid rgba(0, 0, 0, .08627);
    }
    #show:checked ~ #label::after {
        opacity: 1;
    }
    @media screen and (max-width: 480px) {
        #o-header {
            bottom:0; left:0; right:0; top:90%;
            text-align:center;
            background-color:#fff;
            border-top: 2px solid rgba(0,0,0,0.2);
            padding-top: 1rem;
            border-bottom:none;
            border-right:none;
            border-left:none;
            border-radius:0;
        }
    }
</style>
<script defer>
    const mark = document.querySelectorAll("mark");
    function show() {
        mark.forEach((elm)=>{elm.classList.toggle("mark-show")});
    }
</script>