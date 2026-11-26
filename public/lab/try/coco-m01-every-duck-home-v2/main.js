(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.id="coco-m01-every-duck-home-v2-styles",e.appendChild(document.createTextNode('.cs-app .coco svg{transform-origin:50% 100%}.cs-app .coco .coco-leaves{transform-box:fill-box;transform-origin:0% 100%;animation:csCocoLeaf 2.8s ease-in-out infinite}@keyframes csCocoLeaf{0%,to{transform:rotate(0)}50%{transform:rotate(-6deg)}}.cs-app .coco .coco-x{opacity:0;transform:scale(.4);transform-box:fill-box;transform-origin:center;transition:opacity .2s ease,transform .34s cubic-bezier(.22,1,.36,1)}.cs-app .coco .coco-x.on{opacity:1;transform:none}.cs-app .coco.coco-blending svg{animation:none!important}.cs-app .coco-idle svg{animation:csCocoBreathe 2.8s ease-in-out infinite}@keyframes csCocoBreathe{0%,to{transform:scale(1)}50%{transform:scale(1.025,.975)}}.cs-app .coco-happy svg{animation:csCocoHop 1.1s cubic-bezier(.34,1.4,.64,1) infinite}@keyframes csCocoHop{0%,60%,to{transform:translateY(0) scale(1)}20%{transform:translateY(-14%) scale(.96,1.04)}40%{transform:translateY(0) scale(1.05,.95)}}.cs-app .coco-wow svg{animation:csCocoPop 1.6s ease-in-out infinite}@keyframes csCocoPop{0%,to{transform:scale(1)}15%{transform:scale(1.1)}30%{transform:scale(1)}}.cs-app .coco-look svg{animation:csCocoBreathe 2.8s ease-in-out infinite}.cs-app .coco-think svg{animation:csCocoTilt 3s ease-in-out infinite}@keyframes csCocoTilt{0%,to{transform:rotate(0)}50%{transform:rotate(-6deg)}}.cs-app .coco-wink svg{animation:csCocoWinkLean 1.6s ease-in-out both}@keyframes csCocoWinkLean{0%,15%,80%,to{transform:rotate(0)}32%,60%{transform:rotate(6deg) translateY(-2%)}}.cs-app .coco-calm svg{animation:csCocoSway 3.4s ease-in-out infinite}@keyframes csCocoSway{0%,to{transform:rotate(0)}25%{transform:rotate(-3deg)}75%{transform:rotate(3deg)}}.cs-app .coco-oops svg{animation:csCocoShake 1.4s ease-in-out infinite}@keyframes csCocoShake{0%,50%,to{transform:translate(0)}10%,30%{transform:translate(-3%)}20%,40%{transform:translate(3%)}}.cs-app .coco-sad svg{animation:csCocoDroop 3s ease-in-out infinite}@keyframes csCocoDroop{0%,to{transform:translateY(0) scale(1)}50%{transform:translateY(2.5%) scale(1.03,.96)}}.cs-app .coco-sleepy svg{animation:csCocoDoze 4.2s ease-in-out infinite}@keyframes csCocoDoze{0%,to{transform:rotate(0) scale(1)}50%{transform:rotate(-4deg) scale(1.03,.97)}}.cs-app .coco-sleepy .coco-zz{animation:csCocoZz 4.2s ease-in-out infinite}@keyframes csCocoZz{0%{opacity:0;transform:translate(-4px,6px)}40%{opacity:1}to{opacity:0;transform:translate(4px,-8px)}}.cs-app .coco-dizzy svg{animation:csCocoWobble 1.2s ease-in-out infinite}@keyframes csCocoWobble{0%,to{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}}html[data-motion=off] .cs-app .coco *,html[data-motion=off] .cs-app .coco svg{animation:none!important;transition:none!important}@media(prefers-reduced-motion:reduce){.cs-app .coco *,.cs-app .coco svg{animation:none!important;transition:none!important}}.cs-app,.cs-app *{box-sizing:border-box}.cs-app{--teal: #4AC1BD;--teal-d: #3A9C98;--teal-l: #C7ECEB;--focus: #2E8E8A;--ink: #0D0D0D;--muted: #6B6B6B;--line: #D9D9D9;--cream: #FFFAD3;--backdrop: #EFE9C2;--yellow: #FFF186;--ok-bg: #D9F2D5;--ok-bd: #3E9B4F;--soft-bg: #FBE3DF;--soft-bd: #E3A199;--press: 4px 4px 0 rgba(13, 13, 13, .16);--tile: 4px 4px 0 #E6E6E6;--pop: cubic-bezier(.34, 1.56, .64, 1);position:absolute;inset:0;display:flex;flex-direction:column;overflow:hidden;background:#fff;color:var(--ink);font-family:DM Sans,system-ui,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;touch-action:manipulation}.cs-app button{font-family:inherit;color:inherit;cursor:pointer;border-radius:0}.cs-app button:focus-visible{outline:3px solid var(--focus);outline-offset:3px}.cs-app img{-webkit-user-drag:none;user-select:none}.cs-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;padding:0 22px;border:0;background:#fff;font-size:16px;font-weight:700;line-height:1;box-shadow:var(--tile);transition:translate .18s var(--pop),box-shadow .18s ease,filter .18s ease}.cs-btn.primary{background:var(--teal);color:#fff;box-shadow:var(--press)}.cs-btn.primary svg *,.cs-play svg *{fill:#fff;stroke:#fff}.cs-btn.lg{height:52px;font-size:18px;padding:0 26px}.cs-btn:hover{filter:brightness(1.03)}.cs-btn:active{translate:3px 3px;box-shadow:1px 1px #0d0d0d29}.cs-btn:disabled{background:var(--teal-l);box-shadow:none;cursor:default;filter:none}.cs-icon-btn{width:44px;height:44px;flex:none;display:inline-grid;place-items:center;padding:0;border:1.5px solid var(--line);background:#fff;box-shadow:var(--tile);transition:translate .18s var(--pop),box-shadow .18s ease}.cs-icon-btn:active{translate:3px 3px;box-shadow:1px 1px #e6e6e6}.cs-icon-btn:disabled{opacity:.35;box-shadow:none;cursor:default}.cs-icon-btn svg,.cs-play svg{display:block}.cs-top>.cs-icon-btn:first-child{border:0;background:transparent;box-shadow:none}.cs-top>.cs-icon-btn:last-child{width:44px;height:40px}.cs-icon-btn.off{background:#f2f2f2}.cs-top{flex:none;display:flex;align-items:center;gap:8px;padding:max(6px,env(safe-area-inset-top)) 12px 6px 6px;min-height:56px;background:#fff;border-bottom:1.5px solid var(--line)}.cs-top-title{flex:1;min-width:0;font-size:18px;font-weight:700;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cs-top-title small{display:block;font-family:Patrick Hand,cursive;font-weight:400;font-size:13px;color:var(--muted);letter-spacing:.04em}.cs-progress{flex:none;height:6px;background:var(--line)}.cs-progress i{display:block;height:100%;background:var(--teal);transition:width .3s ease-out}.cs-scroller{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;padding:20px 16px 170px;-webkit-overflow-scrolling:touch}.cs-column{width:min(640px,100%);margin:0 auto;display:flex;flex-direction:column;gap:24px}.cs-end-space{height:40px}.cs-panel{position:relative;overflow:hidden;background:#f4eecb;border:1.5px solid var(--line);aspect-ratio:941 / 1672}.cs-panel>img{display:block;width:100%;height:auto}.cs-bubble{position:absolute;z-index:2;font-size:max(var(--bfloor, 13px),calc(var(--pw, 640px) * .031 * var(--bs, 1)));opacity:0;visibility:hidden;transform:scale(.88);transition:opacity .22s ease-out,transform .3s var(--pop),visibility 0s linear .3s}.cs-bubble.is-on{cursor:pointer;opacity:1;visibility:visible;transform:none;transition-delay:0s}.cs-bubble.is-on.is-current{z-index:3}.cs-bubble-svg{position:absolute;left:0;top:0;overflow:visible;pointer-events:none}.cs-bubble-sh{fill:#e6e6e6;stroke:#e6e6e6;stroke-linejoin:miter;transition:fill .2s ease,stroke .2s ease}.cs-bubble.is-current .cs-bubble-sh{fill:var(--teal);stroke:var(--teal)}.cs-bubble-body{fill:#fff;stroke:var(--line);stroke-width:1.5px;stroke-linejoin:miter}.cs-bubble-text{position:relative;z-index:1;padding:.55em .8em .6em;text-align:center;font-weight:600;line-height:1.25;overflow-wrap:anywhere;user-select:none;-webkit-user-select:none}.cs-narration{align-self:stretch;width:100%;padding:12px 18px;text-align:center;background:#fff;border:1.5px solid var(--line);opacity:0;visibility:hidden;transform:translateY(12px);transition:opacity .35s ease-out,transform .5s var(--pop),visibility 0s linear .5s,background .2s ease}.cs-narration.is-on{opacity:1;visibility:visible;transform:none;transition-delay:0s;cursor:pointer}.cs-narration.is-current{background:var(--yellow);box-shadow:4px 4px #ebd950}.cs-narration p{margin:0;font-size:18px;font-weight:600;line-height:1.4}.cs-coco{flex:none;display:block;width:64px;height:60px;line-height:0}.cs-coco.sm{width:40px;height:38px}.cs-coco.xs{width:36px;height:34px}.cs-coco.lg{width:112px;height:105px}.cs-coco-face .coco{width:100%!important;height:100%!important}.cs-prompt{display:flex;flex-direction:column;align-items:center}.cs-prompt>.cs-coco{width:96px;height:90px}.cs-prompt.is-follow .cs-speech{margin-top:0}.cs-prompt .cs-label.is-coco{display:none}.cs-prompt.is-follow .cs-speech:before{display:none}.cs-prompt.is-current .cs-coco{animation:cs-bob 1.2s ease-in-out infinite}.cs-coco-screen{display:flex;flex-direction:column;justify-content:center;gap:12px;min-height:var(--sch, 100vh);padding-bottom:96px}.cs-coco-screen.is-opening{min-height:calc(var(--sch, 100vh) - 20px)}.cs-coco-screen.has-quiz .cs-speech,.cs-coco-screen.has-quiz .cs-prompt-actions{opacity:0;transform:translateY(10px);transition:opacity .45s ease-out,transform .45s cubic-bezier(.22,1,.36,1)}.cs-coco-screen.has-quiz .cs-prompt-actions{transition-delay:.15s}.cs-coco-screen.has-quiz.is-seen .cs-speech,.cs-coco-screen.has-quiz.is-seen .cs-prompt-actions{opacity:1;transform:none}.cs-scroller.is-intro{overflow:hidden}.cs-coco-screen.is-opening{animation:cs-rise .5s cubic-bezier(.22,1,.36,1) both}.cs-coco-screen.leaving{animation:cs-fade-out .32s ease-in both}@keyframes cs-fade-out{to{opacity:0;transform:translateY(-8px)}}.cs-column.cs-entering>*{animation:cs-slide-in .7s cubic-bezier(.22,1,.36,1) both}.cs-column.cs-entering>:nth-child(2){animation-delay:.08s}.cs-column.cs-entering>:nth-child(n+3){animation-delay:.16s}@keyframes cs-slide-in{0%{opacity:0;transform:translateY(64px)}}.cs-speech{position:relative;align-self:stretch;min-width:0;background:#fff;border:1.5px solid var(--line);padding:16px 20px 18px;margin-top:14px;text-align:center}.cs-speech:before{content:"";position:absolute;left:calc(50% - 5px);top:-6px;width:10px;height:10px;background:#fff;border-left:1.5px solid var(--line);border-top:1.5px solid var(--line);transform:rotate(45deg)}.cs-speech p{margin:0;font-size:19px;font-weight:600;line-height:1.3}.cs-prompt-actions{margin-top:16px;display:flex;justify-content:center}.cs-label{font-family:Patrick Hand,cursive;font-size:13px;color:var(--muted);letter-spacing:.04em;margin-bottom:4px}@keyframes cs-bob{50%{transform:translateY(-6px)}}.cs-bar{position:absolute;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));transform:translate(-50%);z-index:5;display:flex;align-items:center;gap:10px;padding:8px 12px;background:#fff;border:1.5px solid var(--line)}.cs-play{width:52px;height:52px;display:grid;place-items:center;padding:0;border:0;background:var(--teal);box-shadow:var(--press);transition:translate .18s var(--pop),box-shadow .18s ease}.cs-play:active{translate:3px 3px;box-shadow:1px 1px #0d0d0d29}.cs-play.hint{animation:cs-pulse 1.6s ease-in-out infinite}@keyframes cs-pulse{0%,to{box-shadow:var(--press),0 0 #4ac1bd8c}50%{box-shadow:var(--press),0 0 0 10px #4ac1bd00}}.cs-play:disabled{background:var(--teal-l);box-shadow:none;cursor:default}.cs-modal{container-type:size;position:absolute;inset:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:12px;background:#0d0d0d40}.cs-dialog{width:min(760px,100%);max-height:100%;min-height:0;overflow:hidden;display:flex;flex-direction:column;background:#fff;border:1.5px solid var(--line);animation:cs-rise .35s cubic-bezier(.22,1,.36,1) backwards}.cs-dialog.wide{width:min(1100px,100%)}@keyframes cs-rise{0%{opacity:0;transform:translateY(14px)}}.cs-dlg-head{position:relative;flex:none;display:flex;align-items:center;gap:10px;padding:8px 8px 8px 12px;border-bottom:1.5px solid var(--line)}.cs-dots.in-head{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.cs-dlg-head .cs-label{flex:1;margin:0}.cs-dlg-body{min-height:0;overflow-y:auto;display:flex;gap:18px;padding:16px}.cs-dlg-img{flex:none;width:min(50%,100cqh - 120px,560px);position:sticky;top:0;align-self:flex-start}.cs-zoom-in{position:relative;display:block;width:100%;padding:0;border:1.5px solid var(--line);background:#fff;cursor:zoom-in}.cs-zoom-in img{display:block;width:100%;height:auto}.cs-zoom-badge{position:absolute;right:8px;bottom:8px;width:40px;height:40px;display:grid;place-items:center;background:#fff;border:1.5px solid var(--line);box-shadow:var(--tile)}.cs-zoom{position:absolute;inset:0;z-index:30;display:grid;place-items:center;padding:12px;border:0;background:#0d0d0d99;cursor:zoom-out;animation:cs-rise .2s ease-out backwards}.cs-zoom img{width:auto;height:auto;max-width:calc(100cqw - 24px);max-height:calc(100cqh - 24px);object-fit:contain;border:1.5px solid var(--line);background:#fff}.cs-zoom-close{position:absolute;top:16px;right:16px;width:48px;height:48px;display:grid;place-items:center;background:#fff;border:1.5px solid var(--line);box-shadow:var(--tile)}.cs-dlg-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px}.cs-dlg-q{margin:0;font-size:22px;font-weight:700;line-height:1.3;position:sticky;top:-16px;z-index:1;background:#fff;padding:4px 0 6px}.cs-close{margin-left:14px}.cs-dots{display:flex;gap:6px}.cs-dots i{width:22px;height:6px;background:var(--line)}.cs-dots i.on{background:var(--teal)}.cs-opts{display:flex;flex-direction:column;gap:10px}.cs-opt{display:flex;align-items:center;gap:12px;width:100%;min-height:56px;padding:8px 14px 8px 8px;text-align:left;border:1.5px solid var(--line);background:#fff;box-shadow:var(--tile);font-size:19px;font-weight:600;line-height:1.25;transition:translate .18s var(--pop),box-shadow .18s ease,background .2s ease,opacity .2s ease}.cs-opt:not(:disabled):active{translate:3px 3px;box-shadow:1px 1px #e6e6e6}.cs-opt:disabled{cursor:default}.cs-letter{flex:none;width:40px;height:40px;display:grid;place-items:center;background:var(--teal);color:#fff;font-size:20px;font-weight:800}.cs-opt-text{flex:1;min-width:0}.cs-opt.ok{background:var(--ok-bg);border-color:var(--ok-bd);box-shadow:none}.cs-opt.soft{background:var(--soft-bg);border-color:var(--soft-bd);box-shadow:none}.cs-opt.dim{opacity:.55;box-shadow:none}.cs-opts.pics{flex-direction:row;justify-content:center;gap:14px}.cs-opt-wrap{position:relative;display:flex;min-width:0}.cs-opt-row{display:flex;gap:8px;align-items:stretch;min-width:0}.cs-opt-row>.cs-opt{flex:1 1 auto;min-width:0;padding-left:16px}.cs-opt-hear{order:-1;flex:none;width:56px;display:grid;place-items:center;padding:0;border:1.5px solid var(--line);background:#fff;box-shadow:var(--tile);transition:translate .18s var(--pop),box-shadow .18s ease,background .2s ease,opacity .2s ease}.cs-opt-hear:not(:disabled):active{translate:3px 3px;box-shadow:1px 1px #e6e6e6}.cs-opt-hear.on{background:var(--teal-l);border-color:var(--teal)}.cs-opt-hear:disabled{opacity:.45;box-shadow:none;cursor:default}.cs-opt:not(:has(.cs-letter)){padding-left:16px}.cs-opt-wrap>.cs-opt{flex:1 1 auto}.cs-opts.pics .cs-opt{flex:0 1 auto;min-width:0;flex-direction:column;align-items:center;gap:6px;padding:6px 6px 8px}.cs-opt-img{display:block;width:min(100%,100cqh - 230px,420px);height:auto;aspect-ratio:1;object-fit:cover}.cs-opt-zoom{position:absolute;right:8px;bottom:6px;z-index:2;width:40px;height:40px;display:grid;place-items:center;padding:0;background:#fff;border:1.5px solid var(--line);box-shadow:var(--tile);cursor:zoom-in}.cs-opt-zoom:active{translate:3px 3px;box-shadow:1px 1px #e6e6e6}.cs-opt-cap{display:flex;align-items:center;justify-content:center;gap:8px;min-height:40px}.cs-tick{flex:none;display:grid;place-items:center}.cs-expl{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#fff;border:1.5px solid var(--line);font-size:17px;line-height:1.4;font-weight:500;animation:cs-rise .3s ease-out backwards}.cs-expl b{font-weight:800}.cs-foot{display:flex;justify-content:flex-end;gap:10px;min-height:52px}.cs-foot.center{justify-content:center}.cs-score{padding:20px 16px 24px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px}.cs-stars{display:flex;justify-content:center;gap:10px;margin:6px 0 8px}.cs-stars>span{line-height:0}.cs-stars>span.on{animation:cs-star-in .45s cubic-bezier(.22,1,.36,1) both}.cs-stars>span.on:nth-child(2){animation-delay:.25s}.cs-stars>span.on:nth-child(3){animation-delay:.5s}@keyframes cs-star-in{0%{opacity:0;transform:scale(.4)}}.cs-btn.primary.cs-arrow-btn{width:50px;height:50px;min-width:0;padding:0;display:inline-grid;place-items:center;border:1.5px solid #2E8E8A;box-shadow:4px 4px #e6e6e6}.cs-btn.primary.cs-arrow-btn:active{box-shadow:1px 1px #e6e6e6}.cs-ask-reply{animation:cs-rise .35s ease-out both}.cs-pips i{width:26px;height:26px;border:2px solid var(--ink);background:#fff}.cs-pips i.on{background:var(--teal)}.cs-score h3{margin:4px 0 0;font-size:28px;font-weight:800}.cs-score p{margin:0 0 8px;font-size:18px;font-weight:500}@media(max-height:480px){.cs-modal{padding:6px}.cs-dlg-head{padding:4px 6px 4px 10px}.cs-score{padding:8px 12px 12px;gap:4px}.cs-score h3{font-size:22px}.cs-top{min-height:44px;padding-block:2px}.cs-top-title small{display:none}.cs-top-title{font-size:16px}.cs-scroller{padding-bottom:130px}.cs-dlg-body{padding:10px 12px;gap:12px}.cs-dlg-q{font-size:19px;top:-10px}.cs-opt{min-height:48px;font-size:17px}.cs-letter{width:34px;height:34px;font-size:18px}.cs-dlg-img{width:min(46%,100cqh - 80px)}.cs-opt-img{width:min(100%,100cqh - 180px)}.cs-opts.pics .cs-opt{padding:4px;gap:2px}.cs-opt-cap{min-height:34px}.cs-opt-zoom{width:34px;height:34px;right:6px;bottom:3px}.cs-expl{font-size:15px}.cs-coco.lg{width:72px;height:68px}}@media(max-width:560px){.cs-dlg-body.has-img{flex-direction:column}.cs-dlg-img{width:min(80%,100cqh - 300px);align-self:center;position:static}}@media(prefers-reduced-motion:reduce){.cs-app *,.cs-app *:before{animation:none!important;transition-duration:.01s!important;transition-delay:0s!important}.cs-bubble{transform:none}}@media(max-width:480px){.cs-scroller{padding-left:0;padding-right:0}.cs-panel{border-left-width:0;border-right-width:0}.cs-prompt{margin-left:16px;margin-right:16px}.cs-narration{border-left-width:0;border-right-width:0}}.cs-think-over{position:absolute;inset:0;z-index:4;display:grid;place-items:center;pointer-events:none;background:#fffffff2;animation:cs-think-in .26s ease-out both}.cs-think-over.leaving{animation:cs-think-out .26s ease-in both}@keyframes cs-think-in{0%{opacity:0}to{opacity:1}}@keyframes cs-think-out{0%{opacity:1}to{opacity:0}}.cs-think-stage{position:relative;display:flex;flex-direction:column;align-items:center;gap:14px;width:min(560px,calc(100% - 32px));padding-bottom:28px;animation:cs-rise .4s cubic-bezier(.22,1,.36,1) both}.cs-think-line{margin:0;align-self:stretch;padding:12px 18px;text-align:center;background:var(--yellow);border:1.5px solid var(--line);font-size:18px;font-weight:600;line-height:1.35}.cs-think-row{display:flex;align-items:flex-start;gap:6px;margin-right:40px}.cs-think-big{width:150px;height:141px;line-height:0}.cs-think-stage .cs-think-cloud{margin:0;padding:10px 14px;gap:7px;border-radius:0;border:1.5px solid var(--line);box-shadow:none;background:#fff}.cs-think-stage .cs-think-cloud i{width:10px;height:10px;background:var(--ink)}.cs-think-stage .cs-think-bar{left:10%;right:10%;bottom:0;height:6px;border-radius:0;background:var(--line)}.cs-think-stage .cs-think-bar i{background:var(--teal)}.cs-think-over.ask{pointer-events:auto;z-index:6;background:#fff}.cs-ask{display:flex;flex-direction:column;align-items:center;width:min(520px,calc(100% - 32px));animation:cs-rise .4s cubic-bezier(.22,1,.36,1) both}.cs-ask .cs-speech{margin-top:14px}.cs-ask-q p{font-size:21px}.cs-ask-opts{align-self:stretch;display:flex;flex-direction:column;gap:12px;margin-top:20px}.cs-ask-opts.row{flex-direction:row;justify-content:center}.cs-ask-opts.row{gap:22px}@media(max-width:560px){.cs-ask-opts.row{flex-direction:column;gap:12px}.cs-ask-opts.row .cs-ask-item{flex:none}}.cs-ask-opts.row .cs-ask-item{flex:0 1 120px;gap:3px}.cs-ask-opts.row .cs-ask-opt{font-size:26px}.cs-ask-item{display:flex;gap:8px;align-items:stretch;transition:opacity .25s ease}.cs-ask-item>.cs-ask-opt{flex:1 1 auto;min-width:0}.cs-ask-item.dim{opacity:.4}.cs-ask-hear{order:-1;flex:none;width:56px;min-height:56px;display:grid;place-items:center;padding:0;border:1.5px solid var(--line);background:#fff;box-shadow:var(--tile);transition:translate .18s var(--pop),box-shadow .18s ease,background .2s ease}.cs-ask-opts.row .cs-ask-hear{width:48px}.cs-ask-hear:not(:disabled):active{translate:3px 3px;box-shadow:1px 1px #e6e6e6}.cs-ask-hear.on{background:var(--teal-l);border-color:var(--teal)}.cs-ask-hear:disabled{cursor:default;box-shadow:none}.cs-ask-opt{min-height:56px;padding:10px 16px;border:1.5px solid var(--line);background:#fff;box-shadow:var(--tile);font-size:19px;font-weight:700;line-height:1.25;transition:translate .18s var(--pop),box-shadow .18s ease,background .25s ease,color .25s ease,opacity .25s ease}.cs-ask-opt:not(:disabled):active{translate:3px 3px;box-shadow:1px 1px #e6e6e6}.cs-ask-opt:disabled{cursor:default}.cs-ask-opt.on{background:var(--teal);border-color:var(--teal);color:#fff;box-shadow:none}.cs-ask-item.dim .cs-ask-opt{box-shadow:none}.cs-think{position:relative;display:flex;align-items:flex-end;justify-content:center;gap:4px;margin-top:10px;padding-top:4px}.cs-think-coco{width:72px;height:68px;line-height:0}.cs-think-cloud{display:inline-flex;gap:6px;align-items:center;padding:8px 12px;margin-bottom:44px;border:2px solid #000D26;border-radius:999px;background:#fff;box-shadow:0 2px #000d26}.cs-think-cloud i{width:9px;height:9px;border-radius:50%;background:#000d26;animation:cs-think-dot 1.2s ease-in-out infinite}.cs-think-cloud i:nth-child(2){animation-delay:.2s}.cs-think-cloud i:nth-child(3){animation-delay:.4s}.cs-think-bar{position:absolute;left:15%;right:15%;bottom:-6px;height:5px;border-radius:3px;background:#000d261f;overflow:hidden}.cs-think-bar i{display:block;height:100%;width:100%;background:#36b37e;transform-origin:left center;animation:cs-think-drain linear forwards}@keyframes cs-think-tilt{0%,to{transform:rotate(-6deg)}50%{transform:rotate(4deg)}}@keyframes cs-think-dot{0%,to{opacity:.25;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}@keyframes cs-think-drain{0%{transform:scaleX(1)}to{transform:scaleX(0)}}@media(prefers-reduced-motion:reduce){.cs-think-coco,.cs-think-cloud i{animation:none}}.cs-narration{position:relative}.cs-step-anchor{position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none}.cs-narration p.cs-chunk{animation:cs-chunk-in .35s ease-out backwards}@keyframes cs-chunk-in{0%{opacity:0;transform:translateY(6px)}}.cs-chunk-dots{display:flex;justify-content:center;gap:6px;margin-top:8px}.cs-chunk-dots i{width:8px;height:8px;border-radius:50%;background:var(--line)}.cs-chunk-dots i.on{background:#0d0d0d}.cs-dlg-img{width:min(55%,100cqh - 120px)}.cs-opts.pics{align-items:stretch}.cs-opts.pics>.cs-opt-wrap,.cs-opts.pics>.cs-opt{flex:1 1 0}.cs-opt-img{width:min(100%,100cqh - 230px)}.cs-flash-cover{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;width:100%;aspect-ratio:1;padding:16px;background:#eaf5ff;border:1.5px solid var(--line);box-shadow:var(--tile);font:inherit;font-size:20px;font-weight:700;color:#0d0d0d;text-align:center;cursor:pointer}.cs-flash-cover:disabled{cursor:default}.cs-flash-cover.small{padding:0;box-shadow:none;cursor:inherit}.cs-flash-eye{width:64px;height:40px;border:3px solid #0d0d0d;border-radius:50%/60%;display:grid;place-items:center;background:#fff}.cs-flash-eye i{width:18px;height:18px;border-radius:50%;background:#0d0d0d}.cs-flash-cover.small .cs-flash-eye{width:40px;height:26px}.cs-flash-cover.small .cs-flash-eye i{width:11px;height:11px}.cs-flash-pic img{display:block;width:100%;height:auto;border:1.5px solid var(--line)}.cs-flash-row{display:flex;justify-content:center}@media(max-width:560px){.cs-dlg-img{width:min(100%,100cqh - 350px)}.cs-opts.pics{gap:8px}.cs-flash-cover{font-size:17px}}@media(max-height:480px){.cs-dlg-img{width:min(50%,100cqh - 90px)}.cs-opt-img{width:min(100%,100cqh - 185px)}.cs-flash-cover{font-size:16px;gap:6px}}.cs-dlg-img{width:min(60%,100cqh - 120px)}@media(min-height:481px){.cs-dlg-body.wide-img{flex-direction:column}.cs-dlg-body.wide-img .cs-dlg-img{position:static;align-self:center;width:min(100%,(100cqh - 500px) * var(--ar, 2))}}@media(max-width:560px){.cs-dlg-img{width:min(100%,100cqh - 350px)}.cs-dlg-body.wide-img .cs-dlg-img{width:100%}}@media(max-height:480px){.cs-dlg-img{width:min(50%,100cqh - 90px)}}.cs-eye-closed{display:block;flex:none}.cs-card-img{display:block;width:min(100%,520px);height:auto;margin-top:18px;border-radius:14px;border:2px solid currentColor;background:#fff}@media(max-width:560px){.cs-opts.pics .cs-opt-zoom{display:none}}.cs-opt-img{object-fit:contain}@media(max-width:560px){.cs-opts.pics{flex-direction:column}.cs-opts.pics>.cs-opt-wrap,.cs-opts.pics>.cs-opt{flex:none;width:100%}.cs-opts.pics .cs-opt-img{width:100%;aspect-ratio:auto;max-height:34vh}}.cs-speech p+p{margin-top:4px}.cs-rotating{position:relative}.cs-rotating .cs-speech-part{animation:cs-chunk-in .35s ease-out backwards;transition:opacity .2s ease-in}.cs-rotating .cs-speech-part.leaving{opacity:0}.cs-card-img{width:auto;max-width:min(100%,520px);max-height:min(34vh,420px);margin-inline:auto}@media(min-height:481px)and (min-width:561px){.cs-dlg-body.wide-img.stem-opts .cs-dlg-img{width:min(100%,30cqh * var(--ar, 2))}}@media(min-width:561px){.cs-dlg-body.stem-opts .cs-opt-img{width:100%;aspect-ratio:auto;max-height:26cqh}}@media(max-height:480px){.cs-dlg-body{padding-bottom:6px;gap:12px}.cs-dlg-q{font-size:17px;margin:2px 0 6px}.cs-opts{gap:6px}.cs-opts:not(.pics) .cs-opt{min-height:0;padding-block:6px}.cs-dots{margin-bottom:4px}}.cs-dlg-space{flex:1}.cs-opt.is-num{justify-content:center;text-align:center;padding-left:14px}.cs-opt.is-num .cs-opt-text{flex:none}@media(max-width:560px){.cs-dots.in-head{gap:3px}.cs-dots.in-head i{width:9px}}.cs-app.cs-autoplay,.cs-app.cs-autoplay *{pointer-events:none!important;user-select:none;-webkit-user-select:none}.cs-autoplay .cs-top .cs-icon-btn,.cs-autoplay .cs-bar,.cs-autoplay .cs-dlg-head .cs-icon-btn,.cs-autoplay .cs-arrow-btn,.cs-autoplay .cs-opt-zoom,.cs-autoplay .cs-zoom-badge{visibility:hidden!important}.cs-autoplay .cs-opt-hear,.cs-autoplay .cs-ask-hear{display:none!important}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function m0(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var jo = { exports: {} }, vu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var UA;
function yp() {
  if (UA) return vu;
  UA = 1;
  var s = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function g(f, V, x) {
    var Y = null;
    if (x !== void 0 && (Y = "" + x), V.key !== void 0 && (Y = "" + V.key), "key" in V) {
      x = {};
      for (var k in V)
        k !== "key" && (x[k] = V[k]);
    } else x = V;
    return V = x.ref, {
      $$typeof: s,
      type: f,
      key: Y,
      ref: V !== void 0 ? V : null,
      props: x
    };
  }
  return vu.Fragment = o, vu.jsx = g, vu.jsxs = g, vu;
}
var QA;
function bp() {
  return QA || (QA = 1, jo.exports = yp()), jo.exports;
}
var h = bp(), Ho = { exports: {} }, Vu = {}, qo = { exports: {} }, Zo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OA;
function wp() {
  return OA || (OA = 1, (function(s) {
    function o(O, at) {
      var P = O.length;
      O.push(at);
      t: for (; 0 < P; ) {
        var Ct = P - 1 >>> 1, bt = O[Ct];
        if (0 < V(bt, at))
          O[Ct] = at, O[P] = bt, P = Ct;
        else break t;
      }
    }
    function g(O) {
      return O.length === 0 ? null : O[0];
    }
    function f(O) {
      if (O.length === 0) return null;
      var at = O[0], P = O.pop();
      if (P !== at) {
        O[0] = P;
        t: for (var Ct = 0, bt = O.length, Nt = bt >>> 1; Ct < Nt; ) {
          var ue = 2 * (Ct + 1) - 1, Se = O[ue], A = ue + 1, S = O[A];
          if (0 > V(Se, P))
            A < bt && 0 > V(S, Se) ? (O[Ct] = S, O[A] = P, Ct = A) : (O[Ct] = Se, O[ue] = P, Ct = ue);
          else if (A < bt && 0 > V(S, P))
            O[Ct] = S, O[A] = P, Ct = A;
          else break t;
        }
      }
      return at;
    }
    function V(O, at) {
      var P = O.sortIndex - at.sortIndex;
      return P !== 0 ? P : O.id - at.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      s.unstable_now = function() {
        return x.now();
      };
    } else {
      var Y = Date, k = Y.now();
      s.unstable_now = function() {
        return Y.now() - k;
      };
    }
    var N = [], H = [], T = 1, w = null, q = 3, J = !1, ft = !1, U = !1, Z = !1, ht = typeof setTimeout == "function" ? setTimeout : null, et = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null;
    function $(O) {
      for (var at = g(H); at !== null; ) {
        if (at.callback === null) f(H);
        else if (at.startTime <= O)
          f(H), at.sortIndex = at.expirationTime, o(N, at);
        else break;
        at = g(H);
      }
    }
    function mt(O) {
      if (U = !1, $(O), !ft)
        if (g(N) !== null)
          ft = !0, it || (it = !0, Rt());
        else {
          var at = g(H);
          at !== null && Dt(mt, at.startTime - O);
        }
    }
    var it = !1, X = -1, ct = 5, Lt = -1;
    function j() {
      return Z ? !0 : !(s.unstable_now() - Lt < ct);
    }
    function zt() {
      if (Z = !1, it) {
        var O = s.unstable_now();
        Lt = O;
        var at = !0;
        try {
          t: {
            ft = !1, U && (U = !1, et(X), X = -1), J = !0;
            var P = q;
            try {
              e: {
                for ($(O), w = g(N); w !== null && !(w.expirationTime > O && j()); ) {
                  var Ct = w.callback;
                  if (typeof Ct == "function") {
                    w.callback = null, q = w.priorityLevel;
                    var bt = Ct(
                      w.expirationTime <= O
                    );
                    if (O = s.unstable_now(), typeof bt == "function") {
                      w.callback = bt, $(O), at = !0;
                      break e;
                    }
                    w === g(N) && f(N), $(O);
                  } else f(N);
                  w = g(N);
                }
                if (w !== null) at = !0;
                else {
                  var Nt = g(H);
                  Nt !== null && Dt(
                    mt,
                    Nt.startTime - O
                  ), at = !1;
                }
              }
              break t;
            } finally {
              w = null, q = P, J = !1;
            }
            at = void 0;
          }
        } finally {
          at ? Rt() : it = !1;
        }
      }
    }
    var Rt;
    if (typeof lt == "function")
      Rt = function() {
        lt(zt);
      };
    else if (typeof MessageChannel < "u") {
      var It = new MessageChannel(), ne = It.port2;
      It.port1.onmessage = zt, Rt = function() {
        ne.postMessage(null);
      };
    } else
      Rt = function() {
        ht(zt, 0);
      };
    function Dt(O, at) {
      X = ht(function() {
        O(s.unstable_now());
      }, at);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, s.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ct = 0 < O ? Math.floor(1e3 / O) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, s.unstable_next = function(O) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var at = 3;
          break;
        default:
          at = q;
      }
      var P = q;
      q = at;
      try {
        return O();
      } finally {
        q = P;
      }
    }, s.unstable_requestPaint = function() {
      Z = !0;
    }, s.unstable_runWithPriority = function(O, at) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var P = q;
      q = O;
      try {
        return at();
      } finally {
        q = P;
      }
    }, s.unstable_scheduleCallback = function(O, at, P) {
      var Ct = s.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? Ct + P : Ct) : P = Ct, O) {
        case 1:
          var bt = -1;
          break;
        case 2:
          bt = 250;
          break;
        case 5:
          bt = 1073741823;
          break;
        case 4:
          bt = 1e4;
          break;
        default:
          bt = 5e3;
      }
      return bt = P + bt, O = {
        id: T++,
        callback: at,
        priorityLevel: O,
        startTime: P,
        expirationTime: bt,
        sortIndex: -1
      }, P > Ct ? (O.sortIndex = P, o(H, O), g(N) === null && O === g(H) && (U ? (et(X), X = -1) : U = !0, Dt(mt, P - Ct))) : (O.sortIndex = bt, o(N, O), ft || J || (ft = !0, it || (it = !0, Rt()))), O;
    }, s.unstable_shouldYield = j, s.unstable_wrapCallback = function(O) {
      var at = q;
      return function() {
        var P = q;
        q = at;
        try {
          return O.apply(this, arguments);
        } finally {
          q = P;
        }
      };
    };
  })(Zo)), Zo;
}
var zA;
function vp() {
  return zA || (zA = 1, qo.exports = wp()), qo.exports;
}
var Ko = { exports: {} }, rt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jA;
function Vp() {
  if (jA) return rt;
  jA = 1;
  var s = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), H = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), q = Symbol.for("react.view_transition"), J = Symbol.iterator;
  function ft(A) {
    return A === null || typeof A != "object" ? null : (A = J && A[J] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var U = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Z = Object.assign, ht = {};
  function et(A, S, W) {
    this.props = A, this.context = S, this.refs = ht, this.updater = W || U;
  }
  et.prototype.isReactComponent = {}, et.prototype.setState = function(A, S) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, S, "setState");
  }, et.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function lt() {
  }
  lt.prototype = et.prototype;
  function $(A, S, W) {
    this.props = A, this.context = S, this.refs = ht, this.updater = W || U;
  }
  var mt = $.prototype = new lt();
  mt.constructor = $, Z(mt, et.prototype), mt.isPureReactComponent = !0;
  var it = Array.isArray;
  function X() {
  }
  var ct = { H: null, A: null, T: null, S: null }, Lt = Object.prototype.hasOwnProperty;
  function j(A, S, W) {
    var L = W.ref;
    return {
      $$typeof: s,
      type: A,
      key: S,
      ref: L !== void 0 ? L : null,
      props: W
    };
  }
  function zt(A, S) {
    return j(A.type, S, A.props);
  }
  function Rt(A) {
    return typeof A == "object" && A !== null && A.$$typeof === s;
  }
  function It(A) {
    var S = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(W) {
      return S[W];
    });
  }
  var ne = /\/+/g;
  function Dt(A, S) {
    return typeof A == "object" && A !== null && A.key != null ? It("" + A.key) : S.toString(36);
  }
  function O(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(X, X) : (A.status = "pending", A.then(
          function(S) {
            A.status === "pending" && (A.status = "fulfilled", A.value = S);
          },
          function(S) {
            A.status === "pending" && (A.status = "rejected", A.reason = S);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function at(A, S, W, L, dt) {
    var yt = typeof A;
    (yt === "undefined" || yt === "boolean") && (A = null);
    var Vt = !1;
    if (A === null) Vt = !0;
    else
      switch (yt) {
        case "bigint":
        case "string":
        case "number":
          Vt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case s:
            case o:
              Vt = !0;
              break;
            case T:
              return Vt = A._init, at(
                Vt(A._payload),
                S,
                W,
                L,
                dt
              );
          }
      }
    if (Vt)
      return dt = dt(A), Vt = L === "" ? "." + Dt(A, 0) : L, it(dt) ? (W = "", Vt != null && (W = Vt.replace(ne, "$&/") + "/"), at(dt, S, W, "", function(E) {
        return E;
      })) : dt != null && (Rt(dt) && (dt = zt(
        dt,
        W + (dt.key == null || A && A.key === dt.key ? "" : ("" + dt.key).replace(
          ne,
          "$&/"
        ) + "/") + Vt
      )), S.push(dt)), 1;
    Vt = 0;
    var I = L === "" ? "." : L + ":";
    if (it(A))
      for (var nt = 0; nt < A.length; nt++)
        L = A[nt], yt = I + Dt(L, nt), Vt += at(
          L,
          S,
          W,
          yt,
          dt
        );
    else if (nt = ft(A), typeof nt == "function")
      for (A = nt.call(A), nt = 0; !(L = A.next()).done; )
        L = L.value, yt = I + Dt(L, nt++), Vt += at(
          L,
          S,
          W,
          yt,
          dt
        );
    else if (yt === "object") {
      if (typeof A.then == "function")
        return at(
          O(A),
          S,
          W,
          L,
          dt
        );
      throw S = String(A), Error(
        "Objects are not valid as a React child (found: " + (S === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : S) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Vt;
  }
  function P(A, S, W) {
    if (A == null) return A;
    var L = [], dt = 0;
    return at(A, L, "", "", function(yt) {
      return S.call(W, yt, dt++);
    }), L;
  }
  function Ct(A) {
    if (A._status === -1) {
      var S = A._result, W = S();
      W.then(
        function(L) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = L, W.status === void 0 && (W.status = "fulfilled", W.value = L));
        },
        function(L) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = L, W.status === void 0 && (W.status = "rejected", W.reason = L));
        }
      ), A._status === -1 && (A._status = 0, A._result = W);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var bt = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var S = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(S)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  };
  function Nt(A) {
    var S = ct.T, W = {};
    W.types = S !== null ? S.types : null, ct.T = W;
    try {
      var L = A(), dt = ct.S;
      dt !== null && dt(W, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(X, bt);
    } catch (yt) {
      bt(yt);
    } finally {
      S !== null && W.types !== null && (S.types = W.types), ct.T = S;
    }
  }
  function ue(A) {
    var S = ct.T;
    if (S !== null) {
      var W = S.types;
      W === null ? S.types = [A] : W.indexOf(A) === -1 && W.push(A);
    } else Nt(ue.bind(null, A));
  }
  var Se = {
    map: P,
    forEach: function(A, S, W) {
      P(
        A,
        function() {
          S.apply(this, arguments);
        },
        W
      );
    },
    count: function(A) {
      var S = 0;
      return P(A, function() {
        S++;
      }), S;
    },
    toArray: function(A) {
      return P(A, function(S) {
        return S;
      }) || [];
    },
    only: function(A) {
      if (!Rt(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return rt.Activity = w, rt.Children = Se, rt.Component = et, rt.Fragment = g, rt.Profiler = V, rt.PureComponent = $, rt.StrictMode = f, rt.Suspense = N, rt.ViewTransition = q, rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ct, rt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return ct.H.useMemoCache(A);
    }
  }, rt.addTransitionType = ue, rt.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, rt.cacheSignal = function() {
    return null;
  }, rt.cloneElement = function(A, S, W) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var L = Z({}, A.props), dt = A.key;
    if (S != null)
      for (yt in S.key !== void 0 && (dt = "" + S.key), S)
        !Lt.call(S, yt) || yt === "key" || yt === "__self" || yt === "__source" || yt === "ref" && S.ref === void 0 || (L[yt] = S[yt]);
    var yt = arguments.length - 2;
    if (yt === 1) L.children = W;
    else if (1 < yt) {
      for (var Vt = Array(yt), I = 0; I < yt; I++)
        Vt[I] = arguments[I + 2];
      L.children = Vt;
    }
    return j(A.type, dt, L);
  }, rt.createContext = function(A) {
    return A = {
      $$typeof: Y,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: x,
      _context: A
    }, A;
  }, rt.createElement = function(A, S, W) {
    var L, dt = {}, yt = null;
    if (S != null)
      for (L in S.key !== void 0 && (yt = "" + S.key), S)
        Lt.call(S, L) && L !== "key" && L !== "__self" && L !== "__source" && (dt[L] = S[L]);
    var Vt = arguments.length - 2;
    if (Vt === 1) dt.children = W;
    else if (1 < Vt) {
      for (var I = Array(Vt), nt = 0; nt < Vt; nt++)
        I[nt] = arguments[nt + 2];
      dt.children = I;
    }
    if (A && A.defaultProps)
      for (L in Vt = A.defaultProps, Vt)
        dt[L] === void 0 && (dt[L] = Vt[L]);
    return j(A, yt, dt);
  }, rt.createRef = function() {
    return { current: null };
  }, rt.forwardRef = function(A) {
    return { $$typeof: k, render: A };
  }, rt.isValidElement = Rt, rt.lazy = function(A) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: A },
      _init: Ct
    };
  }, rt.memo = function(A, S) {
    return {
      $$typeof: H,
      type: A,
      compare: S === void 0 ? null : S
    };
  }, rt.startTransition = Nt, rt.unstable_useCacheRefresh = function() {
    return ct.H.useCacheRefresh();
  }, rt.use = function(A) {
    return ct.H.use(A);
  }, rt.useActionState = function(A, S, W) {
    return ct.H.useActionState(A, S, W);
  }, rt.useCallback = function(A, S) {
    return ct.H.useCallback(A, S);
  }, rt.useContext = function(A) {
    return ct.H.useContext(A);
  }, rt.useDebugValue = function() {
  }, rt.useDeferredValue = function(A, S) {
    return ct.H.useDeferredValue(A, S);
  }, rt.useEffect = function(A, S) {
    return ct.H.useEffect(A, S);
  }, rt.useEffectEvent = function(A) {
    return ct.H.useEffectEvent(A);
  }, rt.useId = function() {
    return ct.H.useId();
  }, rt.useImperativeHandle = function(A, S, W) {
    return ct.H.useImperativeHandle(A, S, W);
  }, rt.useInsertionEffect = function(A, S) {
    return ct.H.useInsertionEffect(A, S);
  }, rt.useLayoutEffect = function(A, S) {
    return ct.H.useLayoutEffect(A, S);
  }, rt.useMemo = function(A, S) {
    return ct.H.useMemo(A, S);
  }, rt.useOptimistic = function(A, S) {
    return ct.H.useOptimistic(A, S);
  }, rt.useReducer = function(A, S, W) {
    return ct.H.useReducer(A, S, W);
  }, rt.useRef = function(A) {
    return ct.H.useRef(A);
  }, rt.useState = function(A) {
    return ct.H.useState(A);
  }, rt.useSyncExternalStore = function(A, S, W) {
    return ct.H.useSyncExternalStore(
      A,
      S,
      W
    );
  }, rt.useTransition = function() {
    return ct.H.useTransition();
  }, rt.version = "19.3.1", rt;
}
var HA;
function of() {
  return HA || (HA = 1, Ko.exports = Vp()), Ko.exports;
}
var Lo = { exports: {} }, ve = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qA;
function Mp() {
  if (qA) return ve;
  qA = 1;
  var s = of();
  function o(T) {
    var w = "https://react.dev/errors/" + T;
    if (1 < arguments.length) {
      w += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        w += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return "Minified React error #" + T + "; visit " + w + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g() {
  }
  var f = {
    d: {
      f: g,
      r: function() {
        throw Error(o(522));
      },
      D: g,
      C: g,
      L: g,
      m: g,
      X: g,
      S: g,
      M: g
    },
    p: 0,
    findDOMNode: null
  }, V = Symbol.for("react.portal"), x = Symbol.for("react.recoverable"), Y = Symbol.for("react.optimistic_key");
  function k(T, w, q) {
    var J = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: V,
      key: J == null ? null : J === Y ? Y : "" + J,
      children: T,
      containerInfo: w,
      implementation: q
    };
  }
  var N = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function H(T, w) {
    if (T === "font") return "";
    if (typeof w == "string")
      return w === "use-credentials" ? w : "";
  }
  return ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, ve.browser = function(T) {
    return { $$typeof: x, _reason: T };
  }, ve.createPortal = function(T, w) {
    var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!w || w.nodeType !== 1 && w.nodeType !== 9 && w.nodeType !== 11)
      throw Error(o(299));
    return k(T, w, null, q);
  }, ve.flushSync = function(T) {
    var w = N.T, q = f.p;
    try {
      if (N.T = null, f.p = 2, T) return T();
    } finally {
      N.T = w, f.p = q, f.d.f();
    }
  }, ve.preconnect = function(T, w) {
    typeof T == "string" && (w ? (w = w.crossOrigin, w = typeof w == "string" ? w === "use-credentials" ? w : "" : void 0) : w = null, f.d.C(T, w));
  }, ve.prefetchDNS = function(T) {
    typeof T == "string" && f.d.D(T);
  }, ve.preinit = function(T, w) {
    if (typeof T == "string" && w && typeof w.as == "string") {
      var q = w.as, J = H(q, w.crossOrigin), ft = typeof w.integrity == "string" ? w.integrity : void 0, U = typeof w.fetchPriority == "string" ? w.fetchPriority : void 0;
      q === "style" ? f.d.S(
        T,
        typeof w.precedence == "string" ? w.precedence : void 0,
        {
          crossOrigin: J,
          integrity: ft,
          fetchPriority: U
        }
      ) : q === "script" && f.d.X(T, {
        crossOrigin: J,
        integrity: ft,
        fetchPriority: U,
        nonce: typeof w.nonce == "string" ? w.nonce : void 0
      });
    }
  }, ve.preinitModule = function(T, w) {
    if (typeof T == "string")
      if (typeof w == "object" && w !== null) {
        if (w.as == null || w.as === "script") {
          var q = H(
            w.as,
            w.crossOrigin
          );
          f.d.M(T, {
            crossOrigin: q,
            integrity: typeof w.integrity == "string" ? w.integrity : void 0,
            nonce: typeof w.nonce == "string" ? w.nonce : void 0,
            fetchPriority: typeof w.fetchPriority == "string" ? w.fetchPriority : void 0
          });
        }
      } else w == null && f.d.M(T);
  }, ve.preload = function(T, w) {
    if (typeof T == "string" && typeof w == "object" && w !== null && typeof w.as == "string") {
      var q = w.as, J = H(q, w.crossOrigin);
      f.d.L(T, q, {
        crossOrigin: J,
        integrity: typeof w.integrity == "string" ? w.integrity : void 0,
        nonce: typeof w.nonce == "string" ? w.nonce : void 0,
        type: typeof w.type == "string" ? w.type : void 0,
        fetchPriority: typeof w.fetchPriority == "string" ? w.fetchPriority : void 0,
        referrerPolicy: typeof w.referrerPolicy == "string" ? w.referrerPolicy : void 0,
        imageSrcSet: typeof w.imageSrcSet == "string" ? w.imageSrcSet : void 0,
        imageSizes: typeof w.imageSizes == "string" ? w.imageSizes : void 0,
        media: typeof w.media == "string" ? w.media : void 0
      });
    }
  }, ve.preloadModule = function(T, w) {
    if (typeof T == "string")
      if (w) {
        var q = H(w.as, w.crossOrigin);
        f.d.m(T, {
          as: typeof w.as == "string" && w.as !== "script" ? w.as : void 0,
          crossOrigin: q,
          integrity: typeof w.integrity == "string" ? w.integrity : void 0,
          nonce: typeof w.nonce == "string" ? w.nonce : void 0,
          fetchPriority: typeof w.fetchPriority == "string" ? w.fetchPriority : void 0
        });
      } else f.d.m(T);
  }, ve.requestFormReset = function(T) {
    f.d.r(T);
  }, ve.unstable_batchedUpdates = function(T, w) {
    return T(w);
  }, ve.useFormState = function(T, w, q) {
    return N.H.useFormState(T, w, q);
  }, ve.useFormStatus = function() {
    return N.H.useHostTransitionStatus();
  }, ve.version = "19.3.1", ve;
}
var ZA;
function Ep() {
  if (ZA) return Lo.exports;
  ZA = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (o) {
        console.error(o);
      }
  }
  return s(), Lo.exports = Mp(), Lo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KA;
function Cp() {
  if (KA) return Vu;
  KA = 1;
  var s = vp(), o = of(), g = Ep();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function V(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function x(t) {
    for (var e = t, a = e; a && !a.alternate; )
      e = a, (e.flags & 4098) !== 0 && (t = e.return), a = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function Y(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function k(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function N(t) {
    if (x(t) !== t)
      throw Error(f(188));
  }
  function H(t) {
    var e = t.alternate;
    if (!e) {
      if (e = x(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var n = a.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === a) return N(n), t;
          if (u === l) return N(n), e;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (a.return !== l.return) a = n, l = u;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === a) {
            i = !0, a = n, l = u;
            break;
          }
          if (c === l) {
            i = !0, l = n, a = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === a) {
              i = !0, a = u, l = n;
              break;
            }
            if (c === l) {
              i = !0, l = u, a = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (a.alternate !== l) throw Error(f(190));
    }
    if (a.tag !== 3) throw Error(f(188));
    return a.stateNode.current === a ? t : e;
  }
  function T(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = T(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function w(t, e, a, l, n, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && a(t, l, n, u) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && w(
        t.child,
        e,
        a,
        l,
        n,
        u
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function q(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function J(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function ft(t) {
    var e = [null, null], a = q(t);
    return a === null || U(
      e,
      t,
      a.child,
      { foundSelf: !1 }
    ), e;
  }
  function U(t, e, a, l) {
    for (; a !== null; ) {
      if (a === e) l.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (l.foundSelf) return t[1] = a, !0;
        t[0] = a;
      } else if ((a.tag !== 22 || a.memoizedState === null) && U(
        t,
        e,
        a.child,
        l
      ))
        return !0;
      a = a.sibling;
    }
    return !1;
  }
  function Z(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(f(559));
    }
  }
  var ht = null, et = null;
  function lt(t, e, a) {
    return t === a ? !0 : t === e ? (ht = t, !0) : !1;
  }
  function $(t, e, a) {
    return t === a ? (et = t, !1) : t === e ? (et !== null && (ht = t), !0) : !1;
  }
  function mt(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function it(t, e, a) {
    for (var l = 0, n = t; n; n = a(n)) l++;
    n = 0;
    for (var u = e; u; u = a(u)) n++;
    for (; 0 < l - n; ) t = a(t), l--;
    for (; 0 < n - l; ) e = a(e), n--;
    for (; l--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = a(t), e = a(e);
    }
    return null;
  }
  var X = Object.assign, ct = Symbol.for("react.element"), Lt = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), zt = Symbol.for("react.fragment"), Rt = Symbol.for("react.strict_mode"), It = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), Dt = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), at = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), Nt = Symbol.for("react.activity"), ue = Symbol.for("react.legacy_hidden"), Se = Symbol.for("react.memo_cache_sentinel"), A = Symbol.for("react.view_transition"), S = Symbol.for("react.recoverable"), W = Symbol.iterator;
  function L(t) {
    return t === null || typeof t != "object" ? null : (t = W && t[W] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var dt = Symbol.for("react.client.reference");
  function yt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === dt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case zt:
        return "Fragment";
      case It:
        return "Profiler";
      case Rt:
        return "StrictMode";
      case at:
        return "Suspense";
      case P:
        return "SuspenseList";
      case Nt:
        return "Activity";
      case A:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case j:
          return "Portal";
        case Dt:
          return t.displayName || "Context";
        case ne:
          return (t._context.displayName || "Context") + ".Consumer";
        case O:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Ct:
          return e = t.displayName || null, e !== null ? e : yt(t.type) || "Memo";
        case bt:
          e = t._payload, t = t._init;
          try {
            return yt(t(e));
          } catch {
          }
      }
    return null;
  }
  var Vt = Array.isArray, I = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, nt = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, st = [], ot = -1;
  function D(t) {
    return { current: t };
  }
  function G(t) {
    0 > ot || (t.current = st[ot], st[ot] = null, ot--);
  }
  function _(t, e) {
    ot++, st[ot] = t.current, t.current = e;
  }
  var Ut = D(null), Zt = D(null), qt = D(null), Jt = D(null);
  function ie(t, e) {
    switch (_(qt, e), _(Zt, t), _(Ut, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ld(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Ld(e), t = Id(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    G(Ut), _(Ut, t);
  }
  function Ae() {
    G(Ut), G(Zt), G(qt);
  }
  function se(t) {
    var e = t.memoizedState;
    e !== null && (En._currentValue = e.memoizedState, _(Jt, t)), e = Ut.current;
    var a = Id(e, t.type);
    e !== a && (_(Zt, t), _(Ut, a));
  }
  function Ee(t) {
    Zt.current === t && (G(Ut), G(Zt)), Jt.current === t && (G(Jt), En._currentValue = E);
  }
  var Pt, Qa;
  function Oa(t) {
    if (Pt === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        Pt = e && e[1] || "", Qa = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Pt + t + Qa;
  }
  var cc = !1;
  function sc(t, e) {
    if (!t || cc) return "";
    cc = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (Q) {
                  var m = Q;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (Q) {
                  m = Q;
                }
                B = !1;
                try {
                  var v = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), B = !0, new t();
                } finally {
                  B && (v !== void 0 ? Object.defineProperty(t.prototype, "props", v) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                m = Q;
              }
              (B = t()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (Q) {
            if (Q && m && typeof Q.stack == "string")
              return [Q.stack, m.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var r = i.split(`
`), y = c.split(`
`);
        for (n = l = 0; l < r.length && !r[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < y.length && !y[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === r.length || n === y.length)
          for (l = r.length - 1, n = y.length - 1; 1 <= l && 0 <= n && r[l] !== y[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (r[l] !== y[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || r[l] !== y[n]) {
                  var M = `
` + r[l].replace(" at new ", " at ");
                  return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), M;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      cc = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Oa(a) : "";
  }
  function V0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Oa(t.type);
      case 16:
        return Oa("Lazy");
      case 13:
        return t.child !== e && e !== null ? Oa("Suspense Fallback") : Oa("Suspense");
      case 19:
        return Oa("SuspenseList");
      case 0:
      case 15:
        return sc(t.type, !1);
      case 11:
        return sc(t.type.render, !1);
      case 1:
        return sc(t.type, !0);
      case 31:
        return Oa("Activity");
      case 30:
        return Oa("ViewTransition");
      default:
        return "";
    }
  }
  function df(t) {
    try {
      var e = "", a = null;
      do
        e += V0(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var oc = Object.prototype.hasOwnProperty, fc = s.unstable_scheduleCallback, rc = s.unstable_cancelCallback, M0 = s.unstable_shouldYield, E0 = s.unstable_requestPaint, Qe = s.unstable_now, C0 = s.unstable_getCurrentPriorityLevel, Af = s.unstable_ImmediatePriority, gf = s.unstable_UserBlockingPriority, Bu = s.unstable_NormalPriority, B0 = s.unstable_LowPriority, mf = s.unstable_IdlePriority, D0 = s.log, x0 = s.unstable_setDisableYieldValue, xn = null, Oe = null;
  function za(t) {
    if (typeof D0 == "function" && x0(t), Oe && typeof Oe.setStrictMode == "function")
      try {
        Oe.setStrictMode(xn, t);
      } catch {
      }
  }
  var ze = Math.clz32 ? Math.clz32 : T0, S0 = Math.log, Y0 = Math.LN2;
  function T0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (S0(t) / Y0 | 0) | 0;
  }
  var Du = 256, xu = 262144, Su = 4194304;
  function hl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Yu(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = l & 134217727;
    return c !== 0 ? (l = c & ~u, l !== 0 ? n = hl(l) : (i &= c, i !== 0 ? n = hl(i) : a || (a = c & ~t, a !== 0 && (n = hl(a))))) : (c = l & ~u, c !== 0 ? n = hl(c) : i !== 0 ? n = hl(i) : a || (a = l & ~t, a !== 0 && (n = hl(a)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, a = e & -e, u >= a || u === 32 && (a & 4194048) !== 0) ? e : n;
  }
  function Sn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function pf(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var l = 31 - ze(a), n = 1 << l;
        e |= t[l], a &= ~n;
      }
    return e;
  }
  function G0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yf() {
    var t = Su;
    return Su <<= 1, (Su & 62914560) === 0 && (Su = 4194304), t;
  }
  function hc(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Yn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function k0(t, e, a, l, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var c = t.entanglements, r = t.expirationTimes, y = t.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var M = 31 - ze(a), B = 1 << M;
      c[M] = 0, r[M] = -1;
      var m = y[M];
      if (m !== null)
        for (y[M] = null, M = 0; M < m.length; M++) {
          var v = m[M];
          v !== null && (v.lane &= -536870913);
        }
      a &= ~B;
    }
    l !== 0 && bf(t, l, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function bf(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - ze(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
  }
  function wf(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var l = 31 - ze(a), n = 1 << l;
      n & e | t[l] & e && (t[l] |= e), a &= ~n;
    }
  }
  function vf(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : dc(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function dc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ac(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Vf() {
    var t = nt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : SA(t.type));
  }
  function Mf(t, e) {
    var a = nt.p;
    try {
      return nt.p = t, e();
    } finally {
      nt.p = a;
    }
  }
  var Va = Math.random().toString(36).slice(2), ge = "__reactFiber$" + Va, Ye = "__reactProps$" + Va, Ql = "__reactContainer$" + Va, Ef = "__reactEvents$" + Va, R0 = "__reactListeners$" + Va, N0 = "__reactHandles$" + Va, Cf = "__reactResources$" + Va, Tn = "__reactMarker$" + Va, Tu = "__reactLoad$" + Va;
  function Gu(t) {
    delete t[ge], delete t[Ye], delete t[R0], delete t[N0];
  }
  function dl(t) {
    var e;
    if (e = t[ge]) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Ql] || a[ge]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = oA(t); t !== null; ) {
            if (a = t[ge]) return a;
            t = oA(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Ol(t) {
    if (t = t[ge] || t[Ql]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Gn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function zl(t) {
    var e = t[Cf];
    return e || (e = t[Cf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function oe(t) {
    t[Tn] = !0;
  }
  function Bf(t) {
    t[Tu] = void 0;
  }
  var Df = /* @__PURE__ */ new Set(), xf = {};
  function Al(t, e) {
    jl(t, e), jl(t + "Capture", e);
  }
  function jl(t, e) {
    for (xf[t] = e, t = 0; t < e.length; t++)
      Df.add(e[t]);
  }
  var U0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Sf = {}, Yf = {};
  function Q0(t) {
    return oc.call(Yf, t) ? !0 : oc.call(Sf, t) ? !1 : U0.test(t) ? Yf[t] = !0 : (Sf[t] = !0, !1);
  }
  var xt = !1;
  function Tf() {
    var t = xt;
    return xt = !1, t;
  }
  function ku(t, e, a) {
    if (Q0(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, a);
      }
  }
  function Ru(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, a);
    }
  }
  function Ma(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, l);
    }
  }
  function je(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Gf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function O0(t, e, a) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, u = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          a = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function gc(t) {
    if (!t._valueTracker) {
      var e = Gf(t) ? "checked" : "value";
      t._valueTracker = O0(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function kf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), l = "";
    return t && (l = Gf(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), !0) : !1;
  }
  var z0 = /[\n"\\]/g;
  function Xe(t) {
    return t.replace(
      z0,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function mc(t, e, a, l, n, u, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + je(e)) : t.value !== "" + je(e) && (t.value = "" + je(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? i === "number" && t.value == e ? pc(t, je(t.value)) : pc(t, je(e)) : a != null ? pc(t, je(a)) : l != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + je(c) : t.removeAttribute("name");
  }
  function Rf(t, e, a, l, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        gc(t);
        return;
      }
      a = a != null ? "" + je(a) : "", e = e != null ? "" + je(e) : a, c || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = c ? t.checked : !!l, t.defaultChecked = !!l, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), gc(t);
  }
  function pc(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Hl(t, e, a, l) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < a.length; n++)
        e["$" + a[n]] = !0;
      for (a = 0; a < t.length; a++)
        n = e.hasOwnProperty("$" + t[a].value), t[a].selected !== n && (t[a].selected = n), n && l && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + je(a), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === a) {
          t[n].selected = !0, l && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Nf(t, e, a) {
    if (e != null && (e = "" + je(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + je(a) : "";
  }
  function Uf(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(f(92));
        if (Vt(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), e = a;
    }
    a = je(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), gc(t);
  }
  function ql(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var j0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Qf(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || j0.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function Of(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "", xt = !0);
      for (var n in e)
        l = e[n], e.hasOwnProperty(n) && a[n] !== l && (Qf(t, n, l), xt = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Qf(t, u, e[u]);
  }
  function yc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var H0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), q0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nu(t) {
    return q0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function fa() {
  }
  var bc = null;
  function wc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Zl = null, Kl = null;
  function zf(t) {
    var e = Ol(t);
    if (e && (t = e.stateNode)) {
      var a = t[Ye] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (mc(
            t,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Xe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var n = l[Ye] || null;
                if (!n) throw Error(f(90));
                mc(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              l = a[e], l.form === t.form && kf(l);
          }
          break t;
        case "textarea":
          Nf(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && Hl(t, !!a.multiple, e, !1);
      }
    }
  }
  var vc = !1;
  function jf(t, e, a) {
    if (vc) return t(e, a);
    vc = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (vc = !1, (Zl !== null || Kl !== null) && (Ni(), Zl && (e = Zl, t = Kl, Kl = Zl = null, zf(e), t)))
        for (e = 0; e < t.length; e++) zf(t[e]);
    }
  }
  function kn(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[Ye] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function")
      throw Error(
        f(231, e, typeof a)
      );
    return a;
  }
  var Ea = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vc = !1;
  if (Ea)
    try {
      var Rn = {};
      Object.defineProperty(Rn, "passive", {
        get: function() {
          Vc = !0;
        }
      }), window.addEventListener("test", Rn, Rn), window.removeEventListener("test", Rn, Rn);
    } catch {
      Vc = !1;
    }
  var ja = null, Mc = null, Uu = null;
  function Hf() {
    if (Uu) return Uu;
    var t, e = Mc, a = e.length, l, n = "value" in ja ? ja.value : ja.textContent, u = n.length;
    for (t = 0; t < a && e[t] === n[t]; t++) ;
    var i = a - t;
    for (l = 1; l <= i && e[a - l] === n[u - l]; l++) ;
    return Uu = n.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Qu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ou() {
    return !0;
  }
  function qf() {
    return !1;
  }
  function Ce(t) {
    function e(a, l, n, u, i) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (a = t[c], this[c] = a ? a(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ou : qf, this.isPropagationStopped = qf, this;
    }
    return X(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ou);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ou);
      },
      persist: function() {
      },
      isPersistent: Ou
    }), e;
  }
  var Ha = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, zu = Ce(Ha), Nn = X({}, Ha, { view: 0, detail: 0 }), Z0 = Ce(Nn), Ec, Cc, Un, ju = X({}, Nn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Dc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Un && (Un && t.type === "mousemove" ? (Ec = t.screenX - Un.screenX, Cc = t.screenY - Un.screenY) : Cc = Ec = 0, Un = t), Ec);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Cc;
    }
  }), Zf = Ce(ju), K0 = X({}, ju, { dataTransfer: 0 }), L0 = Ce(K0), I0 = X({}, Nn, { relatedTarget: 0 }), Bc = Ce(I0), F0 = X({}, Ha, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), J0 = Ce(F0), X0 = X({}, Ha, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), W0 = Ce(X0), P0 = X({}, Ha, { data: 0 }), Kf = Ce(P0), _0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, $0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, tg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function eg(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = tg[t]) ? !!e[t] : !1;
  }
  function Dc() {
    return eg;
  }
  var ag = X({}, Nn, {
    key: function(t) {
      if (t.key) {
        var e = _0[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Qu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? $0[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Dc,
    charCode: function(t) {
      return t.type === "keypress" ? Qu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Qu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), lg = Ce(ag), ng = X({}, ju, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Lf = Ce(ng), ug = X({}, Ha, { submitter: 0 }), ig = Ce(ug), cg = X({}, Nn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Dc
  }), sg = Ce(cg), og = X({}, Ha, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fg = Ce(og), rg = X({}, ju, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hg = Ce(rg), dg = X({}, Ha, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Ag = Ce(dg), gg = [9, 13, 27, 32], xc = Ea && "CompositionEvent" in window, Qn = null;
  Ea && "documentMode" in document && (Qn = document.documentMode);
  var mg = Ea && "TextEvent" in window && !Qn, If = Ea && (!xc || Qn && 8 < Qn && 11 >= Qn), Ff = " ", Jf = !1;
  function Xf(t, e) {
    switch (t) {
      case "keyup":
        return gg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ll = !1;
  function pg(t, e) {
    switch (t) {
      case "compositionend":
        return Wf(e);
      case "keypress":
        return e.which !== 32 ? null : (Jf = !0, Ff);
      case "textInput":
        return t = e.data, t === Ff && Jf ? null : t;
      default:
        return null;
    }
  }
  function yg(t, e) {
    if (Ll)
      return t === "compositionend" || !xc && Xf(t, e) ? (t = Hf(), Uu = Mc = ja = null, Ll = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return If && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var bg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Pf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!bg[t.type] : e === "textarea";
  }
  function _f(t, e, a, l) {
    Zl ? Kl ? Kl.push(l) : Kl = [l] : Zl = l, e = Hi(e, "onChange"), 0 < e.length && (a = new zu(
      "onChange",
      "change",
      null,
      a,
      l
    ), t.push({ event: a, listeners: e }));
  }
  var On = null, zn = null;
  function wg(t) {
    zd(t, 0);
  }
  function Hu(t) {
    var e = Gn(t);
    if (kf(e)) return t;
  }
  function $f(t, e) {
    if (t === "change") return e;
  }
  var tr = !1;
  if (Ea) {
    var Sc;
    if (Ea) {
      var Yc = "oninput" in document;
      if (!Yc) {
        var er = document.createElement("div");
        er.setAttribute("oninput", "return;"), Yc = typeof er.oninput == "function";
      }
      Sc = Yc;
    } else Sc = !1;
    tr = Sc && (!document.documentMode || 9 < document.documentMode);
  }
  function ar() {
    On && (On.detachEvent("onpropertychange", lr), zn = On = null);
  }
  function lr(t) {
    if (t.propertyName === "value" && Hu(zn)) {
      var e = [];
      _f(
        e,
        zn,
        t,
        wc(t)
      ), jf(wg, e);
    }
  }
  function vg(t, e, a) {
    t === "focusin" ? (ar(), On = e, zn = a, On.attachEvent("onpropertychange", lr)) : t === "focusout" && ar();
  }
  function Vg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Hu(zn);
  }
  function Mg(t, e) {
    if (t === "click") return Hu(e);
  }
  function Eg(t, e) {
    if (t === "input" || t === "change")
      return Hu(e);
  }
  function Cg(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var He = typeof Object.is == "function" ? Object.is : Cg;
  function jn(t, e) {
    if (He(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!oc.call(e, n) || !He(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Tc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function nr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ur(t, e) {
    var a = nr(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = t + a.textContent.length, t <= e && l >= e)
          return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = nr(a);
    }
  }
  function ir(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? ir(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function cr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Tc(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Tc(t.document);
    }
    return e;
  }
  function Gc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Bg = Ea && "documentMode" in document && 11 >= document.documentMode, Il = null, kc = null, Hn = null, Rc = !1;
  function sr(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Rc || Il == null || Il !== Tc(l) || (l = Il, "selectionStart" in l && Gc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Hn && jn(Hn, l) || (Hn = l, l = Hi(kc, "onSelect"), 0 < l.length && (e = new zu(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }), e.target = Il)));
  }
  function gl(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var Fl = {
    animationend: gl("Animation", "AnimationEnd"),
    animationiteration: gl("Animation", "AnimationIteration"),
    animationstart: gl("Animation", "AnimationStart"),
    transitionrun: gl("Transition", "TransitionRun"),
    transitionstart: gl("Transition", "TransitionStart"),
    transitioncancel: gl("Transition", "TransitionCancel"),
    transitionend: gl("Transition", "TransitionEnd")
  }, Nc = {}, or = {};
  Ea && (or = document.createElement("div").style, "AnimationEvent" in window || (delete Fl.animationend.animation, delete Fl.animationiteration.animation, delete Fl.animationstart.animation), "TransitionEvent" in window || delete Fl.transitionend.transition);
  function ml(t) {
    if (Nc[t]) return Nc[t];
    if (!Fl[t]) return t;
    var e = Fl[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in or)
        return Nc[t] = e[a];
    return t;
  }
  var fr = ml("animationend"), rr = ml("animationiteration"), hr = ml("animationstart"), Dg = ml("transitionrun"), xg = ml("transitionstart"), Sg = ml("transitioncancel"), dr = ml("transitionend"), Ar = /* @__PURE__ */ new Map(), Uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Uc.push("scrollEnd");
  function na(t, e) {
    Ar.set(t, e), Al(e, [t]);
  }
  var Yg = 0;
  function Ca(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = sa.identifierPrefix;
    var a = Yg++;
    return t = "_" + t + "t_" + a.toString(32) + "_", e.autoName = t;
  }
  function gr(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, a = An;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = t[a[l]];
        if (n != null) {
          if (n === "none") return "none";
          e = e == null ? n : e + (" " + n);
        }
      }
    return e ?? t.default;
  }
  function Ba(t, e) {
    return t = gr(t), e = gr(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var qu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, We = [], Jl = 0, Qc = 0;
  function Zu() {
    for (var t = Jl, e = Qc = Jl = 0; e < t; ) {
      var a = We[e];
      We[e++] = null;
      var l = We[e];
      We[e++] = null;
      var n = We[e];
      We[e++] = null;
      var u = We[e];
      if (We[e++] = null, l !== null && n !== null) {
        var i = l.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), l.pending = n;
      }
      u !== 0 && mr(a, n, u);
    }
  }
  function Ku(t, e, a, l) {
    We[Jl++] = t, We[Jl++] = e, We[Jl++] = a, We[Jl++] = l, Qc |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function Oc(t, e, a, l) {
    return Ku(t, e, a, l), Lu(t);
  }
  function pl(t, e) {
    return Ku(t, null, null, e), Lu(t);
  }
  function mr(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ze(a), t = u.hiddenUpdates, l = t[n], l === null ? t[n] = [e] : l.push(e), e.lane = a | 536870912), u) : null;
  }
  function Lu(t) {
    if (50 < ou)
      throw ou = 0, Ri = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Xl = {};
  function Tg(t, e, a, l) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Te(t, e, a, l) {
    return new Tg(t, e, a, l);
  }
  function zc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Da(t, e) {
    var a = t.alternate;
    return a === null ? (a = Te(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 1206910976, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function pr(t, e) {
    t.flags &= 1206910978;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Iu(t, e, a, l, n, u) {
    var i = 0;
    if (l = t, typeof l == "function") zc(l) && (i = 1);
    else if (typeof l == "string")
      i = up(
        t,
        a,
        Ut.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (l) {
        case Nt:
          return t = Te(31, a, e, n), t.elementType = Nt, t.lanes = u, t;
        case zt:
          return yl(a.children, n, u, e);
        case Rt:
          i = 8, n |= 24;
          break;
        case It:
          return t = Te(12, a, e, n | 2), t.elementType = It, t.lanes = u, t;
        case at:
          return t = Te(13, a, e, n), t.elementType = at, t.lanes = u, t;
        case P:
          return t = Te(19, a, e, n), t.elementType = P, t.lanes = u, t;
        case ue:
        case A:
          return t = n | 32, t = Te(30, a, e, t), t.elementType = A, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Dt:
                i = 10;
                break t;
              case ne:
                i = 9;
                break t;
              case O:
                i = 11;
                break t;
              case Ct:
                i = 14;
                break t;
              case bt:
                i = 16, l = null;
                break t;
            }
          i = 29, a = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = Te(i, a, e, n), e.elementType = t, e.type = l, e.lanes = u, e;
  }
  function yl(t, e, a, l) {
    return t = Te(7, t, l, e), t.lanes = a, t;
  }
  function jc(t, e, a) {
    return t = Te(6, t, null, e), t.lanes = a, t;
  }
  function yr(t) {
    var e = Te(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Hc(t, e, a) {
    return e = Te(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var br = /* @__PURE__ */ new WeakMap();
  function Pe(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = br.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: df(e)
      }, br.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: df(e)
    };
  }
  var Wl = [], Pl = 0, Fu = null, qn = 0, _e = [], $e = 0, qa = null, ra = 1, ha = "";
  function xa(t, e) {
    Wl[Pl++] = qn, Wl[Pl++] = Fu, Fu = t, qn = e;
  }
  function wr(t, e, a) {
    _e[$e++] = ra, _e[$e++] = ha, _e[$e++] = qa, qa = t;
    var l = ra;
    t = ha;
    var n = 32 - ze(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - ze(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (l & (1 << i) - 1).toString(32), l >>= i, n -= i, ra = 1 << 32 - ze(e) + n | a << n | l, ha = u + t;
    } else
      ra = 1 << u | a << n | l, ha = t;
  }
  function Ju(t) {
    t.return !== null && (xa(t, 1), wr(t, 1, 0));
  }
  function qc(t) {
    for (; t === Fu; )
      Fu = Wl[--Pl], Wl[Pl] = null, qn = Wl[--Pl], Wl[Pl] = null;
    for (; t === qa; )
      qa = _e[--$e], _e[$e] = null, ha = _e[--$e], _e[$e] = null, ra = _e[--$e], _e[$e] = null;
  }
  function vr(t, e) {
    _e[$e++] = ra, _e[$e++] = ha, _e[$e++] = qa, ra = e.id, ha = e.overflow, qa = t;
  }
  var fe = null, jt = null, pt = !1, Za = null, ta = !1, Zc = Error(f(519));
  function Ka(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Zn(Pe(e, t)), Zc;
  }
  function Vr(t) {
    var e = t.stateNode, a = t.type, l = t.memoizedProps;
    switch (e[ge] = t, e[Ye] = l, a) {
      case "dialog":
        vt("cancel", e), vt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ru.length; a++)
          vt(ru[a], e);
        break;
      case "source":
        vt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        vt("error", e), vt("load", e);
        break;
      case "details":
        vt("toggle", e);
        break;
      case "input":
        vt("invalid", e), Rf(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        vt("invalid", e);
        break;
      case "textarea":
        vt("invalid", e), Uf(e, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || Zd(e.textContent, a) ? (l.popover != null && (vt("beforetoggle", e), vt("toggle", e)), l.onScroll != null && vt("scroll", e), l.onScrollEnd != null && vt("scrollend", e), l.onClick != null && (e.onclick = fa), e = !0) : e = !1, e || Ka(t, !0);
  }
  function Xu(t) {
    for (fe = t.return; fe; )
      switch (fe.tag) {
        case 5:
        case 31:
        case 13:
          ta = !1;
          return;
        case 27:
        case 3:
          ta = !0;
          return;
        default:
          fe = fe.return;
      }
  }
  function _l(t) {
    if (t !== fe) return !1;
    if (!pt) return Xu(t), pt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || wo(t.type, t.memoizedProps)), a = !a), a && jt && Ka(t), Xu(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      jt = sA(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      jt = sA(t);
    } else
      e === 27 ? (e = jt, il(t.type) ? (t = So, So = null, jt = t) : jt = e) : jt = fe ? aa(t.stateNode.nextSibling) : null;
    return !0;
  }
  function bl() {
    jt = fe = null, pt = !1;
  }
  function Kc() {
    var t = Za;
    return t !== null && (Re === null ? Re = t : Re.push.apply(
      Re,
      t
    ), Za = null), t;
  }
  function Zn(t) {
    Za === null ? Za = [t] : Za.push(t);
  }
  var Lc = D(null), wl = null, Sa = null;
  function La(t, e, a) {
    _(Lc, e._currentValue), e._currentValue = a;
  }
  function Ya(t) {
    t._currentValue = Lc.current, G(Lc);
  }
  function Wu(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function Ic(t, e, a, l) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var r = 0; r < e.length; r++)
            if (c.context === e[r]) {
              u.lanes |= a, c = u.alternate, c !== null && (c.lanes |= a), Wu(
                u.return,
                a,
                t
              ), l || (i = null);
              break t;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(f(341));
        i.lanes |= a, u = i.alternate, u !== null && (u.lanes |= a), Wu(i, a, t), i = null;
      } else
        n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null ? (n.lanes |= a, i = n.alternate, i !== null && (i.lanes |= a), Wu(
          n.return,
          a,
          t
        ), i = n.child, i = i !== null ? i.sibling : null) : i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function vl(t, e, a, l) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          He(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (n === Jt.current) {
        if (i = n.alternate, i === null) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(En) : t = [En]);
      }
      n = n.return;
    }
    return t !== null && Ic(
      e,
      t,
      a,
      l
    ), e.flags |= 262144, t !== null;
  }
  function Pu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!He(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Vl(t) {
    wl = t, Sa = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function me(t) {
    return Mr(wl, t);
  }
  function _u(t, e) {
    return wl === null && Vl(t), Mr(t, e);
  }
  function Mr(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, Sa === null) {
      if (t === null) throw Error(f(308));
      Sa = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Sa = Sa.next = e;
    return a;
  }
  var Gg = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, kg = s.unstable_scheduleCallback, Rg = s.unstable_NormalPriority, te = {
    $$typeof: Dt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Fc() {
    return {
      controller: new Gg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Kn(t) {
    t.refCount--, t.refCount === 0 && kg(Rg, function() {
      t.controller.abort();
    });
  }
  function Er(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var a = t.transitionTypes;
      for (a === null && (a = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var l = e[t];
        a.indexOf(l) === -1 && a.push(l);
      }
    }
  }
  var Ln = null;
  function Ng(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var In = null, Jc = 0, Ml = 0, $l = null;
  function Ug(t, e) {
    if (In === null) {
      var a = In = [];
      Jc = 0, Ml = fo(), $l = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return Jc++, e.then(Cr, Cr), e;
  }
  function Cr() {
    if (--Jc === 0 && (Ln = null, In !== null)) {
      $l !== null && ($l.status = "fulfilled");
      var t = In;
      In = null, Ml = 0, $l = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Qg(t, e) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var n = 0; n < a.length; n++) (0, a[n])(e);
      },
      function(n) {
        for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), l;
  }
  var Br = I.S;
  I.S = function(t, e) {
    if (yd = Qe(), typeof e == "object" && e !== null && typeof e.then == "function" && Ug(t, e), Ln !== null)
      for (var a = yn; a !== null; )
        Er(a, Ln), a = a.next;
    if (a = t.types, a !== null) {
      for (var l = yn; l !== null; )
        Er(l, a), l = l.next;
      if (Ml !== 0) {
        l = Ln, l === null && (l = Ln = []);
        for (var n = 0; n < a.length; n++) {
          var u = a[n];
          l.indexOf(u) === -1 && l.push(u);
        }
      }
    }
    Br !== null && Br(t, e);
  };
  var El = D(null);
  function Xc() {
    var t = El.current;
    return t !== null ? t : Ot.pooledCache;
  }
  function $u(t, e) {
    e === null ? _(El, El.current) : _(El, e.pool);
  }
  function Dr() {
    var t = Xc();
    return t === null ? null : { parent: te._currentValue, pool: t };
  }
  var tn = Error(f(460)), Wc = Error(f(474)), ti = Error(f(542)), ei = { then: function() {
  } };
  function xr(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Sr(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(fa, fa), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Tr(t), t === void 0 && !("reason" in e) ? Error(f(600)) : t;
      default:
        if (typeof e.status == "string") e.then(fa, fa);
        else {
          if (t = Ot, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Tr(t), t;
        }
        throw Bl = e, tn;
    }
  }
  function Cl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Bl = a, tn) : a;
    }
  }
  var Bl = null;
  function Yr() {
    if (Bl === null) throw Error(f(459));
    var t = Bl;
    return Bl = null, t;
  }
  function Tr(t) {
    if (t === tn || t === ti)
      throw Error(f(483));
  }
  var en = null, Fn = 0;
  function ai(t) {
    var e = Fn;
    return Fn += 1, en === null && (en = []), Sr(en, t, e);
  }
  function Ia(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function li(t, e) {
    throw e.$$typeof === ct ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Gr(t) {
    function e(p, d) {
      if (t) {
        var b = p.deletions;
        b === null ? (p.deletions = [d], p.flags |= 16) : b.push(d);
      }
    }
    function a(p, d) {
      if (!t) return null;
      for (; d !== null; )
        e(p, d), d = d.sibling;
      return null;
    }
    function l(p) {
      for (var d = /* @__PURE__ */ new Map(); p !== null; )
        p.key === null ? d.set(p.index, p) : d.set(p.key, p), p = p.sibling;
      return d;
    }
    function n(p, d) {
      return p = Da(p, d), p.index = 0, p.sibling = null, p;
    }
    function u(p, d, b) {
      return p.index = b, t ? (b = p.alternate, b !== null ? (b = b.index, b < d ? (p.flags |= 2, d) : b) : (p.flags |= 134217730, d)) : (p.flags |= 1048576, d);
    }
    function i(p) {
      return t && p.alternate === null && (p.flags |= 134217730), p;
    }
    function c(p, d, b, C) {
      return d === null || d.tag !== 6 ? (d = jc(b, p.mode, C), d.return = p, d) : (d = n(d, b), d.return = p, d);
    }
    function r(p, d, b, C) {
      var K = b.type;
      return K === zt ? (p = M(
        p,
        d,
        b.props.children,
        C,
        b.key
      ), Ia(p, b), p) : d !== null && (d.elementType === K || typeof K == "object" && K !== null && K.$$typeof === bt && Cl(K) === d.type) ? (d = n(d, b.props), Ia(d, b), d.return = p, d) : (d = Iu(
        b.type,
        b.key,
        b.props,
        null,
        p.mode,
        C
      ), Ia(d, b), d.return = p, d);
    }
    function y(p, d, b, C) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== b.containerInfo || d.stateNode.implementation !== b.implementation ? (d = Hc(b, p.mode, C), d.return = p, d) : (d = n(d, b.children || []), d.return = p, d);
    }
    function M(p, d, b, C, K) {
      return d === null || d.tag !== 7 ? (d = yl(
        b,
        p.mode,
        C,
        K
      ), d.return = p, d) : (d = n(d, b), d.return = p, d);
    }
    function B(p, d, b) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = jc(
          "" + d,
          p.mode,
          b
        ), d.return = p, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Lt:
            return b = Iu(
              d.type,
              d.key,
              d.props,
              null,
              p.mode,
              b
            ), Ia(b, d), b.return = p, b;
          case j:
            return d = Hc(
              d,
              p.mode,
              b
            ), d.return = p, d;
          case bt:
            return d = Cl(d), B(p, d, b);
        }
        if (Vt(d) || L(d))
          return d = yl(
            d,
            p.mode,
            b,
            null
          ), d.return = p, d;
        if (typeof d.then == "function")
          return B(p, ai(d), b);
        if (d.$$typeof === Dt)
          return B(
            p,
            _u(p, d),
            b
          );
        li(p, d);
      }
      return null;
    }
    function m(p, d, b, C) {
      var K = d !== null ? d.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return K !== null ? null : c(p, d, "" + b, C);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Lt:
            return b.key === K ? r(p, d, b, C) : null;
          case j:
            return b.key === K ? y(p, d, b, C) : null;
          case bt:
            return b = Cl(b), m(p, d, b, C);
        }
        if (Vt(b) || L(b))
          return K !== null ? null : M(p, d, b, C, null);
        if (typeof b.then == "function")
          return m(
            p,
            d,
            ai(b),
            C
          );
        if (b.$$typeof === Dt)
          return m(
            p,
            d,
            _u(p, b),
            C
          );
        li(p, b);
      }
      return null;
    }
    function v(p, d, b, C, K) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return p = p.get(b) || null, c(d, p, "" + C, K);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Lt:
            return p = p.get(
              C.key === null ? b : C.key
            ) || null, r(d, p, C, K);
          case j:
            return p = p.get(
              C.key === null ? b : C.key
            ) || null, y(d, p, C, K);
          case bt:
            return C = Cl(C), v(
              p,
              d,
              b,
              C,
              K
            );
        }
        if (Vt(C) || L(C))
          return p = p.get(b) || null, M(d, p, C, K, null);
        if (typeof C.then == "function")
          return v(
            p,
            d,
            b,
            ai(C),
            K
          );
        if (C.$$typeof === Dt)
          return v(
            p,
            d,
            b,
            _u(d, C),
            K
          );
        li(d, C);
      }
      return null;
    }
    function Q(p, d, b, C) {
      for (var K = null, Et = null, tt = d, ut = d = 0, le = null; tt !== null && ut < b.length; ut++) {
        tt.index > ut ? (le = tt, tt = null) : le = tt.sibling;
        var Bt = m(
          p,
          tt,
          b[ut],
          C
        );
        if (Bt === null) {
          tt === null && (tt = le);
          break;
        }
        t && tt && Bt.alternate === null && e(p, tt), d = u(Bt, d, ut), Et === null ? K = Bt : Et.sibling = Bt, Et = Bt, tt = le;
      }
      if (ut === b.length)
        return a(p, tt), pt && xa(p, ut), K;
      if (tt === null) {
        for (; ut < b.length; ut++)
          tt = B(p, b[ut], C), tt !== null && (d = u(
            tt,
            d,
            ut
          ), Et === null ? K = tt : Et.sibling = tt, Et = tt);
        return pt && xa(p, ut), K;
      }
      for (tt = l(tt); ut < b.length; ut++)
        le = v(
          tt,
          p,
          ut,
          b[ut],
          C
        ), le !== null && (t && (Bt = le.alternate, Bt !== null && tt.delete(Bt.key === null ? ut : Bt.key)), d = u(
          le,
          d,
          ut
        ), Et === null ? K = le : Et.sibling = le, Et = le);
      return t && tt.forEach(function(rl) {
        return e(p, rl);
      }), pt && xa(p, ut), K;
    }
    function F(p, d, b, C) {
      if (b == null) throw Error(f(151));
      for (var K = null, Et = null, tt = d, ut = d = 0, le = null, Bt = b.next(); tt !== null && !Bt.done; ut++, Bt = b.next()) {
        tt.index > ut ? (le = tt, tt = null) : le = tt.sibling;
        var rl = m(p, tt, Bt.value, C);
        if (rl === null) {
          tt === null && (tt = le);
          break;
        }
        t && tt && rl.alternate === null && e(p, tt), d = u(rl, d, ut), Et === null ? K = rl : Et.sibling = rl, Et = rl, tt = le;
      }
      if (Bt.done)
        return a(p, tt), pt && xa(p, ut), K;
      if (tt === null) {
        for (; !Bt.done; ut++, Bt = b.next())
          Bt = B(p, Bt.value, C), Bt !== null && (d = u(Bt, d, ut), Et === null ? K = Bt : Et.sibling = Bt, Et = Bt);
        return pt && xa(p, ut), K;
      }
      for (tt = l(tt); !Bt.done; ut++, Bt = b.next())
        Bt = v(tt, p, ut, Bt.value, C), Bt !== null && (t && (le = Bt.alternate, le !== null && tt.delete(
          le.key === null ? ut : le.key
        )), d = u(Bt, d, ut), Et === null ? K = Bt : Et.sibling = Bt, Et = Bt);
      return t && tt.forEach(function(pp) {
        return e(p, pp);
      }), pt && xa(p, ut), K;
    }
    function gt(p, d, b, C) {
      if (typeof b == "object" && b !== null && b.type === zt && b.key === null && b.props.ref === void 0 && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Lt:
            t: {
              for (var K = b.key; d !== null; ) {
                if (d.key === K) {
                  if (K = b.type, K === zt) {
                    if (d.tag === 7) {
                      a(
                        p,
                        d.sibling
                      ), C = n(
                        d,
                        b.props.children
                      ), Ia(C, b), C.return = p, p = C;
                      break t;
                    }
                  } else if (d.elementType === K || typeof K == "object" && K !== null && K.$$typeof === bt && Cl(K) === d.type) {
                    a(
                      p,
                      d.sibling
                    ), C = n(d, b.props), Ia(C, b), C.return = p, p = C;
                    break t;
                  }
                  a(p, d);
                  break;
                } else e(p, d);
                d = d.sibling;
              }
              b.type === zt ? (C = yl(
                b.props.children,
                p.mode,
                C,
                b.key
              ), Ia(C, b), C.return = p, p = C) : (C = Iu(
                b.type,
                b.key,
                b.props,
                null,
                p.mode,
                C
              ), Ia(C, b), C.return = p, p = C);
            }
            return i(p);
          case j:
            t: {
              for (K = b.key; d !== null; ) {
                if (d.key === K)
                  if (d.tag === 4 && d.stateNode.containerInfo === b.containerInfo && d.stateNode.implementation === b.implementation) {
                    a(
                      p,
                      d.sibling
                    ), C = n(d, b.children || []), C.return = p, p = C;
                    break t;
                  } else {
                    a(p, d);
                    break;
                  }
                else e(p, d);
                d = d.sibling;
              }
              C = Hc(b, p.mode, C), C.return = p, p = C;
            }
            return i(p);
          case bt:
            return b = Cl(b), gt(
              p,
              d,
              b,
              C
            );
        }
        if (Vt(b))
          return Q(
            p,
            d,
            b,
            C
          );
        if (L(b)) {
          if (K = L(b), typeof K != "function") throw Error(f(150));
          return b = K.call(b), F(
            p,
            d,
            b,
            C
          );
        }
        if (typeof b.then == "function")
          return gt(
            p,
            d,
            ai(b),
            C
          );
        if (b.$$typeof === Dt)
          return gt(
            p,
            d,
            _u(p, b),
            C
          );
        li(p, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, d !== null && d.tag === 6 ? (a(p, d.sibling), C = n(d, b), C.return = p, p = C) : (a(p, d), C = jc(b, p.mode, C), C.return = p, p = C), i(p)) : a(p, d);
    }
    return function(p, d, b, C) {
      try {
        Fn = 0;
        var K = gt(
          p,
          d,
          b,
          C
        );
        return en = null, K;
      } catch (tt) {
        if (tt === tn || tt === ti) throw tt;
        var Et = Te(29, tt, null, p.mode);
        return Et.lanes = C, Et.return = p, Et;
      } finally {
      }
    };
  }
  var Dl = Gr(!0), kr = Gr(!1), Fa = !1;
  function Pc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _c(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ja(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Xa(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (St & 2) !== 0) {
      var n = l.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), l.pending = e, e = Lu(t), mr(t, null, a), e;
    }
    return Ku(t, l, e, a), Lu(t);
  }
  function Jn(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, wf(t, a);
    }
  }
  function $c(t, e) {
    var a = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, u = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, a = a.next;
        } while (a !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var ts = !1;
  function Xn() {
    if (ts) {
      var t = $l;
      if (t !== null) throw t;
    }
  }
  function Wn(t, e, a, l) {
    ts = !1;
    var n = t.updateQueue;
    Fa = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var r = c, y = r.next;
      r.next = null, i === null ? u = y : i.next = y, i = r;
      var M = t.alternate;
      M !== null && (M = M.updateQueue, c = M.lastBaseUpdate, c !== i && (c === null ? M.firstBaseUpdate = y : c.next = y, M.lastBaseUpdate = r));
    }
    if (u !== null) {
      var B = n.baseState;
      i = 0, M = y = r = null, c = u;
      do {
        var m = c.lane & -536870913, v = m !== c.lane;
        if (v ? (Mt & m) === m : (l & m) === m) {
          m !== 0 && m === Ml && (ts = !0), M !== null && (M = M.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var Q = t, F = c;
            m = e;
            var gt = a;
            switch (F.tag) {
              case 1:
                if (Q = F.payload, typeof Q == "function") {
                  B = Q.call(gt, B, m);
                  break t;
                }
                B = Q;
                break t;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = F.payload, m = typeof Q == "function" ? Q.call(gt, B, m) : Q, m == null) break t;
                B = X({}, B, m);
                break t;
              case 2:
                Fa = !0;
            }
          }
          m = c.callback, m !== null && (t.flags |= 64, v && (t.flags |= 8192), v = n.callbacks, v === null ? n.callbacks = [m] : v.push(m));
        } else
          v = {
            lane: m,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, M === null ? (y = M = v, r = B) : M = M.next = v, i |= m;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          v = c, c = v.next, v.next = null, n.lastBaseUpdate = v, n.shared.pending = null;
        }
      } while (!0);
      M === null && (r = B), n.baseState = r, n.firstBaseUpdate = y, n.lastBaseUpdate = M, u === null && (n.shared.lanes = 0), al |= i, t.lanes = i, t.memoizedState = B;
    }
  }
  function Rr(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function Nr(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        Rr(a[t], e);
  }
  var Wa = D(null), ni = D(0);
  function Ur(t, e) {
    t = Na, _(ni, t), _(Wa, e), Na = t | e.baseLanes;
  }
  function es() {
    _(ni, Na), _(Wa, Wa.current);
  }
  function as() {
    Na = ni.current, G(Wa), G(ni);
  }
  var pe = D(null), Ve = null;
  function Pa(t) {
    var e = t.alternate;
    _(ye, ye.current & 1), _(pe, t), Ve === null && (e === null || Wa.current !== null || e.memoizedState !== null) && (Ve = t);
  }
  function ls(t) {
    _(ye, ye.current), _(pe, t), Ve === null && (Ve = t);
  }
  function Qr(t) {
    t.tag === 22 ? (_(ye, ye.current), _(pe, t), Ve === null && (Ve = t)) : _a();
  }
  function _a() {
    _(ye, ye.current), _(pe, pe.current);
  }
  function qe(t) {
    G(pe), Ve === t && (Ve = null), G(ye);
  }
  var ye = D(0);
  function Pn(t, e) {
    _(pe, pe.current), _(ye, e);
  }
  function ns(t) {
    G(ye), G(pe), Ve === t && (Ve = null);
  }
  function ui(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Do(a) || xo(a)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Ta = 0, At = null, Qt = null, ee = null, ii = !1, an = !1, xl = !1, ci = 0, _n = 0, ln = null, Og = 0;
  function Xt() {
    throw Error(f(321));
  }
  function us(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!He(t[a], e[a])) return !1;
    return !0;
  }
  function is(t, e, a, l, n, u) {
    return Ta = u, At = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, I.H = t === null || t.memoizedState === null ? wh : vh, xl = !1, u = a(l, n), xl = !1, an && (u = zr(
      e,
      a,
      l,
      n
    )), Or(t), u;
  }
  function Or(t) {
    I.H = Ai;
    var e = Qt !== null && Qt.next !== null;
    if (Ta = 0, ee = Qt = At = null, ii = !1, _n = 0, ln = null, e) throw Error(f(300));
    t === null || ae || (t = t.dependencies, t !== null && Pu(t) && (ae = !0));
  }
  function zr(t, e, a, l) {
    At = t;
    var n = 0;
    do {
      if (an && (ln = null), _n = 0, an = !1, 25 <= n) throw Error(f(301));
      if (n += 1, ee = Qt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      I.H = Ig, u = e(a, l);
    } while (an);
    return u;
  }
  function zg() {
    var t = I.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? $n(e) : e, t = t.useState()[0], (Qt !== null ? Qt.memoizedState : null) !== t && (At.flags |= 1024), e;
  }
  function cs() {
    var t = ci !== 0;
    return ci = 0, t;
  }
  function ss(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function os(t) {
    if (ii) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ii = !1;
    }
    Ta = 0, ee = Qt = At = null, an = !1, _n = ci = 0, ln = null;
  }
  function Be() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ee === null ? At.memoizedState = ee = t : ee = ee.next = t, ee;
  }
  function _t() {
    if (Qt === null) {
      var t = At.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Qt.next;
    var e = ee === null ? At.memoizedState : ee.next;
    if (e !== null)
      ee = e, Qt = t;
    else {
      if (t === null)
        throw At.alternate === null ? Error(f(467)) : Error(f(310));
      Qt = t, t = {
        memoizedState: Qt.memoizedState,
        baseState: Qt.baseState,
        baseQueue: Qt.baseQueue,
        queue: Qt.queue,
        next: null
      }, ee === null ? At.memoizedState = ee = t : ee = ee.next = t;
    }
    return ee;
  }
  function si() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $n(t) {
    var e = _n;
    return _n += 1, ln === null && (ln = []), t = Sr(ln, t, e), e = At, (ee === null ? e.memoizedState : ee.next) === null && (e = e.alternate, I.H = e === null || e.memoizedState === null ? wh : vh), t;
  }
  function oi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return $n(t);
      if (t.$$typeof === S) return;
      if (t.$$typeof === Dt) return me(t);
    }
    throw Error(f(438, String(t)));
  }
  function fs(t) {
    var e = null, a = At.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var l = At.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = si(), At.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++)
        a[l] = Se;
    return e.index++, a;
  }
  function Ga(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function fi(t) {
    var e = _t();
    return rs(e, Qt, t);
  }
  function rs(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = a;
    var n = t.baseQueue, u = l.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, l.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var c = i = null, r = null, y = e, M = !1;
      do {
        var B = y.lane & -536870913;
        if (B !== y.lane ? (Mt & B) === B : (Ta & B) === B) {
          var m = y.revertLane;
          if (m === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), B === Ml && (M = !0);
          else if ((Ta & m) === m) {
            y = y.next, m === Ml && (M = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, r === null ? (c = r = B, i = u) : r = r.next = B, At.lanes |= m, al |= m;
          B = y.action, xl && a(u, B), u = y.hasEagerState ? y.eagerState : a(u, B);
        } else
          m = {
            lane: B,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, r === null ? (c = r = m, i = u) : r = r.next = m, At.lanes |= B, al |= B;
        y = y.next;
      } while (y !== null && y !== e);
      if (r === null ? i = u : r.next = c, !He(u, t.memoizedState) && (ae = !0, M && (a = $l, a !== null)))
        throw a;
      t.memoizedState = u, t.baseState = i, t.baseQueue = r, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function hs(t) {
    var e = _t(), a = e.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch, n = a.pending, u = e.memoizedState;
    if (n !== null) {
      a.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      He(u, e.memoizedState) || (ae = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function jr(t, e, a) {
    var l = At, n = _t(), u = pt;
    if (u) {
      if (a === void 0) throw Error(f(407));
      a = a();
    } else a = e();
    var i = !He(
      (Qt || n).memoizedState,
      a
    );
    if (i && (n.memoizedState = a, ae = !0), n = n.queue, gs(Zr.bind(null, l, n, t), [
      t
    ]), t = n.getSnapshot !== e || i || ee !== null && (ee.memoizedState.tag & 1) !== 0, nn(
      t ? 9 : 8,
      { destroy: void 0 },
      qr.bind(null, l, n, a, e),
      null
    ), t) {
      if (l.flags |= 2048, Ot === null) throw Error(f(349));
      u || (Ta & 127) !== 0 || Hr(l, e, a);
    }
    return a;
  }
  function Hr(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = At.updateQueue, e === null ? (e = si(), At.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function qr(t, e, a, l) {
    e.value = a, e.getSnapshot = l, Kr(e) && Lr(t);
  }
  function Zr(t, e, a) {
    return a(function() {
      Kr(e) && Lr(t);
    });
  }
  function Kr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !He(t, a);
    } catch {
      return !0;
    }
  }
  function Lr(t) {
    var e = pl(t, 2);
    e !== null && Ne(e, t, 2);
  }
  function ds(t) {
    var e = Be();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), xl) {
        za(!0);
        try {
          a();
        } finally {
          za(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ga,
      lastRenderedState: t
    }, e;
  }
  function Ir(t, e, a, l) {
    return t.baseState = a, rs(
      t,
      Qt,
      typeof l == "function" ? l : Ga
    );
  }
  function jg(t, e, a, l, n) {
    if (di(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      I.T !== null ? a(!0) : u.isTransition = !1, l(u), a = e.pending, a === null ? (u.next = e.pending = u, Fr(e, u)) : (u.next = a.next, e.pending = a.next = u);
    }
  }
  function Fr(t, e) {
    var a = e.action, l = e.payload, n = t.state;
    if (e.isTransition) {
      var u = I.T, i = {};
      i.types = u !== null ? u.types : null, I.T = i;
      try {
        var c = a(n, l), r = I.S;
        r !== null && r(i, c), Jr(t, e, c);
      } catch (y) {
        As(t, e, y);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), I.T = u;
      }
    } else
      try {
        u = a(n, l), Jr(t, e, u);
      } catch (y) {
        As(t, e, y);
      }
  }
  function Jr(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Xr(t, e, l);
      },
      function(l) {
        return As(t, e, l);
      }
    ) : Xr(t, e, a);
  }
  function Xr(t, e, a) {
    e.status = "fulfilled", e.value = a, Wr(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Fr(t, a)));
  }
  function As(t, e, a) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = a, Wr(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function Wr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Pr(t, e) {
    return e;
  }
  function _r(t, e) {
    if (pt) {
      var a = Ot.formState;
      if (a !== null) {
        t: {
          var l = At;
          if (pt) {
            if (jt) {
              e: {
                for (var n = jt, u = ta; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = aa(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                jt = aa(
                  n.nextSibling
                ), l = n.data === "F!";
                break t;
              }
            }
            Ka(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return a = Be(), a.memoizedState = a.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pr,
      lastRenderedState: e
    }, a.queue = l, a = ph.bind(
      null,
      At,
      l
    ), l.dispatch = a, l = ds(!1), u = ws.bind(
      null,
      At,
      !1,
      l.queue
    ), l = Be(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = n, a = jg.bind(
      null,
      At,
      n,
      u,
      a
    ), n.dispatch = a, l.memoizedState = t, [e, a, !1];
  }
  function $r(t) {
    var e = _t();
    return th(e, Qt, t);
  }
  function th(t, e, a) {
    if (e = rs(
      t,
      e,
      Pr
    )[0], t = fi(Ga)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = $n(e);
      } catch (i) {
        throw i === tn ? ti : i;
      }
    else l = e;
    e = _t();
    var n = e.queue, u = n.dispatch;
    return a !== e.memoizedState && (At.flags |= 2048, nn(
      9,
      { destroy: void 0 },
      Hg.bind(null, n, a),
      null
    )), [l, u, t];
  }
  function Hg(t, e) {
    t.action = e;
  }
  function eh(t) {
    var e = _t(), a = Qt;
    if (a !== null)
      return th(e, a, t);
    _t(), e = e.memoizedState, a = _t();
    var l = a.queue.dispatch;
    return a.memoizedState = t, [e, l, !1];
  }
  function nn(t, e, a, l) {
    return t = { tag: t, create: a, deps: l, inst: e, next: null }, e = At.updateQueue, e === null && (e = si(), At.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t;
  }
  function ah() {
    return _t().memoizedState;
  }
  function ri(t, e, a, l) {
    var n = Be();
    At.flags |= t, n.memoizedState = nn(
      1 | e,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function hi(t, e, a, l) {
    var n = _t();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    Qt !== null && l !== null && us(l, Qt.memoizedState.deps) ? n.memoizedState = nn(e, u, a, l) : (At.flags |= t, n.memoizedState = nn(
      1 | e,
      u,
      a,
      l
    ));
  }
  function lh(t, e) {
    ri(8390656, 8, t, e);
  }
  function gs(t, e) {
    hi(2048, 8, t, e);
  }
  function qg(t) {
    At.flags |= 4;
    var e = At.updateQueue;
    if (e === null)
      e = si(), At.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function nh(t) {
    var e = _t().memoizedState;
    return qg({ ref: e, nextImpl: t }), function() {
      if ((St & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function uh(t, e) {
    return hi(4, 2, t, e);
  }
  function ih(t, e) {
    return hi(4, 4, t, e);
  }
  function ch(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function sh(t, e, a) {
    a = a != null ? a.concat([t]) : null, hi(4, 4, ch.bind(null, e, t), a);
  }
  function ms() {
  }
  function oh(t, e) {
    var a = _t();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && us(e, l[1]) ? l[0] : (a.memoizedState = [t, e], t);
  }
  function fh(t, e) {
    var a = _t();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && us(e, l[1]))
      return l[0];
    if (l = t(), xl) {
      za(!0);
      try {
        t();
      } finally {
        za(!1);
      }
    }
    return a.memoizedState = [l, e], l;
  }
  function ps(t, e, a) {
    return a === void 0 || (Ta & 1073741824) !== 0 && (Mt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = wd(), At.lanes |= t, al |= t, a);
  }
  function rh(t, e, a, l) {
    return He(a, e) ? a : Wa.current !== null ? (t = ps(t, a, l), He(t, e) || (ae = !0), t) : (Ta & 106) === 0 || (Ta & 1073741824) !== 0 && (Mt & 261930) === 0 ? (ae = !0, t.memoizedState = a) : (t = wd(), At.lanes |= t, al |= t, e);
  }
  function hh(t, e, a, l, n) {
    var u = nt.p;
    nt.p = u !== 0 && 8 > u ? u : 8;
    var i = I.T, c = {};
    c.types = i !== null ? i.types : null, I.T = c, ws(t, !1, e, a);
    try {
      var r = n(), y = I.S;
      if (y !== null && y(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var M = Qg(
          r,
          l
        );
        tu(
          t,
          e,
          M,
          Ie(t)
        );
      } else
        tu(
          t,
          e,
          l,
          Ie(t)
        );
    } catch (B) {
      tu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: B },
        Ie()
      );
    } finally {
      nt.p = u, i !== null && c.types !== null && (i.types = c.types), I.T = i;
    }
  }
  function Zg() {
  }
  function ys(t, e, a, l) {
    if (t.tag !== 5) throw Error(f(476));
    var n = dh(t).queue;
    hh(
      t,
      n,
      e,
      E,
      a === null ? Zg : function() {
        return Ah(t), a(l);
      }
    );
  }
  function dh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: E,
      baseState: E,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ga,
        lastRenderedState: E
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ga,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Ah(t) {
    var e = dh(t);
    e.next === null && (e = t.alternate.memoizedState), tu(
      t,
      e.next.queue,
      {},
      Ie()
    );
  }
  function bs() {
    return me(En);
  }
  function gh() {
    return _t().memoizedState;
  }
  function mh() {
    return _t().memoizedState;
  }
  function Kg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = Ie();
          t = Ja(a);
          var l = Xa(e, t, a);
          l !== null && (Ne(l, e, a), Jn(l, e, a)), e = { cache: Fc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Lg(t, e, a) {
    var l = Ie();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, di(t) ? yh(e, a) : (a = Oc(t, e, a, l), a !== null && (Ne(a, t, l), bh(a, e, l)));
  }
  function ph(t, e, a) {
    var l = Ie();
    tu(t, e, a, l);
  }
  function tu(t, e, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (di(t)) yh(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var i = e.lastRenderedState, c = u(i, a);
          if (n.hasEagerState = !0, n.eagerState = c, He(c, i))
            return Ku(t, e, n, 0), Ot === null && Zu(), !1;
        } catch {
        } finally {
        }
      if (a = Oc(t, e, n, l), a !== null)
        return Ne(a, t, l), bh(a, e, l), !0;
    }
    return !1;
  }
  function ws(t, e, a, l) {
    if (l = {
      lane: 2,
      revertLane: fo(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, di(t)) {
      if (e) throw Error(f(479));
    } else
      e = Oc(
        t,
        a,
        l,
        2
      ), e !== null && Ne(e, t, 2);
  }
  function di(t) {
    var e = t.alternate;
    return t === At || e !== null && e === At;
  }
  function yh(t, e) {
    an = ii = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function bh(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, wf(t, a);
    }
  }
  var Ai = {
    readContext: me,
    use: oi,
    useCallback: Xt,
    useContext: Xt,
    useEffect: Xt,
    useImperativeHandle: Xt,
    useLayoutEffect: Xt,
    useInsertionEffect: Xt,
    useMemo: Xt,
    useReducer: Xt,
    useRef: Xt,
    useState: Xt,
    useDebugValue: Xt,
    useDeferredValue: Xt,
    useTransition: Xt,
    useSyncExternalStore: Xt,
    useId: Xt,
    useHostTransitionStatus: Xt,
    useFormState: Xt,
    useActionState: Xt,
    useOptimistic: Xt,
    useMemoCache: Xt,
    useCacheRefresh: Xt,
    useEffectEvent: Xt
  }, wh = {
    readContext: me,
    use: oi,
    useCallback: function(t, e) {
      return Be().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: me,
    useEffect: lh,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, ri(
        4194308,
        4,
        ch.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return ri(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      ri(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = Be();
      e = e === void 0 ? null : e;
      var l = t();
      if (xl) {
        za(!0);
        try {
          t();
        } finally {
          za(!1);
        }
      }
      return a.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, a) {
      var l = Be();
      if (a !== void 0) {
        var n = a(e);
        if (xl) {
          za(!0);
          try {
            a(e);
          } finally {
            za(!1);
          }
        }
      } else n = e;
      return l.memoizedState = l.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, l.queue = t, t = t.dispatch = Lg.bind(
        null,
        At,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = Be();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = ds(t);
      var e = t.queue, a = ph.bind(null, At, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: ms,
    useDeferredValue: function(t, e) {
      var a = Be();
      return ps(a, t, e);
    },
    useTransition: function() {
      var t = ds(!1);
      return t = hh.bind(
        null,
        At,
        t.queue,
        !0,
        !1
      ), Be().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var l = At, n = Be();
      if (pt) {
        if (a === void 0)
          throw Error(f(407));
        a = a();
      } else {
        if (a = e(), Ot === null)
          throw Error(f(349));
        (Mt & 127) !== 0 || Hr(l, e, a);
      }
      n.memoizedState = a;
      var u = { value: a, getSnapshot: e };
      return n.queue = u, lh(Zr.bind(null, l, u, t), [
        t
      ]), l.flags |= 2048, nn(
        9,
        { destroy: void 0 },
        qr.bind(
          null,
          l,
          u,
          a,
          e
        ),
        null
      ), a;
    },
    useId: function() {
      var t = Be(), e = Ot.identifierPrefix;
      if (pt) {
        var a = ha, l = ra;
        a = (l & ~(1 << 32 - ze(l) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = ci++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = Og++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: bs,
    useFormState: _r,
    useActionState: _r,
    useOptimistic: function(t) {
      var e = Be();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = ws.bind(
        null,
        At,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: fs,
    useCacheRefresh: function() {
      return Be().memoizedState = Kg.bind(
        null,
        At
      );
    },
    useEffectEvent: function(t) {
      var e = Be(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((St & 2) !== 0)
          throw Error(f(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, vh = {
    readContext: me,
    use: oi,
    useCallback: oh,
    useContext: me,
    useEffect: gs,
    useImperativeHandle: sh,
    useInsertionEffect: uh,
    useLayoutEffect: ih,
    useMemo: fh,
    useReducer: fi,
    useRef: ah,
    useState: function() {
      return fi(Ga);
    },
    useDebugValue: ms,
    useDeferredValue: function(t, e) {
      var a = _t();
      return rh(
        a,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = fi(Ga)[0], e = _t().memoizedState;
      return [
        typeof t == "boolean" ? t : $n(t),
        e
      ];
    },
    useSyncExternalStore: jr,
    useId: gh,
    useHostTransitionStatus: bs,
    useFormState: $r,
    useActionState: $r,
    useOptimistic: function(t, e) {
      var a = _t();
      return Ir(a, Qt, t, e);
    },
    useMemoCache: fs,
    useCacheRefresh: mh,
    useEffectEvent: nh
  }, Ig = {
    readContext: me,
    use: oi,
    useCallback: oh,
    useContext: me,
    useEffect: gs,
    useImperativeHandle: sh,
    useInsertionEffect: uh,
    useLayoutEffect: ih,
    useMemo: fh,
    useReducer: hs,
    useRef: ah,
    useState: function() {
      return hs(Ga);
    },
    useDebugValue: ms,
    useDeferredValue: function(t, e) {
      var a = _t();
      return Qt === null ? ps(a, t, e) : rh(
        a,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = hs(Ga)[0], e = _t().memoizedState;
      return [
        typeof t == "boolean" ? t : $n(t),
        e
      ];
    },
    useSyncExternalStore: jr,
    useId: gh,
    useHostTransitionStatus: bs,
    useFormState: eh,
    useActionState: eh,
    useOptimistic: function(t, e) {
      var a = _t();
      return Qt !== null ? Ir(a, Qt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: fs,
    useCacheRefresh: mh,
    useEffectEvent: nh
  };
  function vs(t, e, a, l) {
    e = t.memoizedState, a = a(l, e), a = a == null ? e : X({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Vs = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var l = Ie(), n = Ja(l);
      n.payload = e, a != null && (n.callback = a), e = Xa(t, n, l), e !== null && (Ne(e, t, l), Jn(e, t, l));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var l = Ie(), n = Ja(l);
      n.tag = 1, n.payload = e, a != null && (n.callback = a), e = Xa(t, n, l), e !== null && (Ne(e, t, l), Jn(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = Ie(), l = Ja(a);
      l.tag = 2, e != null && (l.callback = e), e = Xa(t, l, a), e !== null && (Ne(e, t, a), Jn(e, t, a));
    }
  };
  function Vh(t, e, a, l, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, i) : e.prototype && e.prototype.isPureReactComponent ? !jn(a, l) || !jn(n, u) : !0;
  }
  function Mh(t, e, a, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && Vs.enqueueReplaceState(e, e.state, null);
  }
  function Sl(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e)
        l !== "ref" && (a[l] = e[l]);
    }
    if (t = t.defaultProps) {
      a === e && (a = X({}, a));
      for (var n in t)
        a[n] === void 0 && (a[n] = t[n]);
    }
    return a;
  }
  function Eh(t) {
    qu(t);
  }
  function Ch(t) {
    console.error(t);
  }
  function Bh(t) {
    qu(t);
  }
  function gi(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Dh(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ms(t, e, a) {
    return a = Ja(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      gi(t, e);
    }, a;
  }
  function xh(t) {
    return t = Ja(t), t.tag = 3, t;
  }
  function Sh(t, e, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = l.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Dh(e, a, l);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      Dh(e, a, l), typeof n != "function" && (ll === null ? ll = /* @__PURE__ */ new Set([this]) : ll.add(this));
      var c = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Fg(t, e, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = a.alternate, e !== null && vl(
        e,
        a,
        n,
        !0
      ), a = pe.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return Ve === null ? Ui() : a.alternate === null && Wt === 0 && (Wt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === ei ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), co(t, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === ei ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), co(t, l, n)), !1;
        }
        throw Error(f(435, a.tag));
      }
      return co(t, l, n), Ui(), !1;
    }
    if (pt)
      return e = pe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, l !== Zc && (t = Error(f(422), { cause: l }), Zn(Pe(t, a)))) : (l !== Zc && (e = Error(f(423), {
        cause: l
      }), Zn(
        Pe(e, a)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, l = Pe(l, a), n = Ms(
        t.stateNode,
        l,
        n
      ), $c(t, n), Wt !== 4 && (Wt = 2)), !1;
    var u = Error(f(520), { cause: l });
    if (u = Pe(u, a), su === null ? su = [u] : su.push(u), Wt !== 4 && (Wt = 2), e === null) return !0;
    l = Pe(l, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = n & -n, a.lanes |= t, t = Ms(a.stateNode, l, t), $c(a, t), !1;
        case 1:
          if (e = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ll === null || !ll.has(u))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = xh(n), Sh(
              n,
              t,
              a,
              l
            ), $c(a, n), !1;
          break;
        case 22:
          if (a.memoizedState !== null)
            return a.flags |= 65536, !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Es = Error(f(461)), ae = !1;
  function ce(t, e, a, l) {
    e.child = t === null ? kr(e, null, a, l) : Dl(
      e,
      t.child,
      a,
      l
    );
  }
  function Yh(t, e, a, l, n) {
    a = a.render;
    var u = e.ref;
    if ("ref" in l) {
      var i = {};
      for (var c in l)
        c !== "ref" && (i[c] = l[c]);
    } else i = l;
    return Vl(e), l = is(
      t,
      e,
      a,
      i,
      u,
      n
    ), c = cs(), t !== null && !ae ? (ss(t, e, n), ka(t, e, n)) : (pt && c && Ju(e), e.flags |= 1, ce(t, e, l, n), e.child);
  }
  function Th(t, e, a, l, n) {
    if (t === null) {
      var u = a.type;
      return typeof u == "function" && !zc(u) && u.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = u, Gh(
        t,
        e,
        u,
        l,
        n
      )) : (t = Iu(
        a.type,
        null,
        l,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Gs(t, n)) {
      var i = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : jn, a(i, l) && t.ref === e.ref)
        return ka(t, e, n);
    }
    return e.flags |= 1, t = Da(u, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Gh(t, e, a, l, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (jn(u, l) && t.ref === e.ref)
        if (ae = !1, e.pendingProps = l = u, Gs(t, n))
          (t.flags & 131072) !== 0 && (ae = !0);
        else
          return e.lanes = t.lanes, ka(t, e, n);
    }
    return Cs(
      t,
      e,
      a,
      l,
      n
    );
  }
  function kh(t, e, a, l) {
    var n = l.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | a : a, t !== null) {
          for (l = e.child = t.child, n = 0; l !== null; )
            n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~u;
        } else l = 0, e.child = null;
        return Rh(
          t,
          e,
          u,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && $u(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Ur(e, u) : es(), Qr(e);
      else
        return l = e.lanes = 536870912, Rh(
          t,
          e,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? ($u(e, u.cachePool), Ur(e, u), _a(), e.memoizedState = null) : (t !== null && $u(e, null), es(), _a());
    return ce(t, e, n, a), e.child;
  }
  function eu(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Rh(t, e, a, l, n) {
    var u = Xc();
    return u = u === null ? null : { parent: te._currentValue, pool: u }, e.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, t !== null && $u(e, null), es(), Qr(e), t !== null && vl(t, e, l, !0), e.childLanes = n, null;
  }
  function mi(t, e) {
    return e = pi(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Nh(t, e, a) {
    return Dl(e, t.child, null, a), t = mi(e, e.pendingProps), t.flags |= 2, qe(e), e.memoizedState = null, t;
  }
  function Jg(t, e, a) {
    var l = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (pt) {
        if (l.mode === "hidden")
          return t = mi(e, l), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, eu(null, t);
        if (ls(e), (t = jt) ? (t = cA(
          t,
          ta
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: qa !== null ? { id: ra, overflow: ha } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = yr(t), a.return = e, e.child = a, fe = e, jt = null)) : t = null, t === null) throw Ka(e);
        return e.lanes = 536870912, null;
      }
      return mi(e, l);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (ls(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = Nh(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (ae || vl(t, e, a, !1), n = (a & t.childLanes) !== 0, ae || n) {
        if (Wa.current === null) {
          if (l = Ot, l !== null && (i = vf(l, a), i !== 0 && i !== u.retryLane))
            throw u.retryLane = i, pl(t, i), Ne(l, t, i), Es;
          Ui();
        }
        e = Nh(
          t,
          e,
          a
        );
      } else
        t = u.treeContext, jt = aa(i.nextSibling), fe = e, pt = !0, Za = null, ta = !1, t !== null && vr(e, t), e = mi(e, l), e.flags |= 134221824;
      return e;
    }
    return t = Da(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function un(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(f(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Cs(t, e, a, l, n) {
    return Vl(e), a = is(
      t,
      e,
      a,
      l,
      void 0,
      n
    ), l = cs(), t !== null && !ae ? (ss(t, e, n), ka(t, e, n)) : (pt && l && Ju(e), e.flags |= 1, ce(t, e, a, n), e.child);
  }
  function Uh(t, e, a, l, n, u) {
    return Vl(e), e.updateQueue = null, a = zr(
      e,
      l,
      a,
      n
    ), Or(t), l = cs(), t !== null && !ae ? (ss(t, e, u), ka(t, e, u)) : (pt && l && Ju(e), e.flags |= 1, ce(t, e, a, u), e.child);
  }
  function Qh(t, e, a, l, n) {
    if (Vl(e), e.stateNode === null) {
      var u = Xl, i = a.contextType;
      typeof i == "object" && i !== null && (u = me(i)), u = new a(l, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Vs, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = l, u.state = e.memoizedState, u.refs = {}, Pc(e), i = a.contextType, u.context = typeof i == "object" && i !== null ? me(i) : Xl, u.state = e.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (vs(
        e,
        a,
        i,
        l
      ), u.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Vs.enqueueReplaceState(u, u.state, null), Wn(e, l, u, n), Xn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      u = e.stateNode;
      var c = e.memoizedProps, r = Sl(a, c);
      u.props = r;
      var y = u.context, M = a.contextType;
      i = Xl, typeof M == "object" && M !== null && (i = me(M));
      var B = a.getDerivedStateFromProps;
      M = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = e.pendingProps !== c, M || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || y !== i) && Mh(
        e,
        u,
        l,
        i
      ), Fa = !1;
      var m = e.memoizedState;
      u.state = m, Wn(e, l, u, n), Xn(), y = e.memoizedState, c || m !== y || Fa ? (typeof B == "function" && (vs(
        e,
        a,
        B,
        l
      ), y = e.memoizedState), (r = Fa || Vh(
        e,
        a,
        r,
        l,
        m,
        y,
        i
      )) ? (M || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = y), u.props = l, u.state = y, u.context = i, l = r) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      u = e.stateNode, _c(t, e), i = e.memoizedProps, M = Sl(a, i), u.props = M, B = e.pendingProps, m = u.context, y = a.contextType, r = Xl, typeof y == "object" && y !== null && (r = me(y)), c = a.getDerivedStateFromProps, (y = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== B || m !== r) && Mh(
        e,
        u,
        l,
        r
      ), Fa = !1, m = e.memoizedState, u.state = m, Wn(e, l, u, n), Xn();
      var v = e.memoizedState;
      i !== B || m !== v || Fa || t !== null && t.dependencies !== null && Pu(t.dependencies) ? (typeof c == "function" && (vs(
        e,
        a,
        c,
        l
      ), v = e.memoizedState), (M = Fa || Vh(
        e,
        a,
        M,
        l,
        m,
        v,
        r
      ) || t !== null && t.dependencies !== null && Pu(t.dependencies)) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, v, r), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        v,
        r
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && m === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && m === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = v), u.props = l, u.state = v, u.context = r, l = M) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && m === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && m === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return u = l, un(t, e), l = (e.flags & 128) !== 0, u || l ? (u = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && l ? (e.child = Dl(
      e,
      t.child,
      null,
      n
    ), e.child = Dl(
      e,
      null,
      a,
      n
    )) : ce(t, e, a, n), e.memoizedState = u.state, t = e.child) : t = ka(
      t,
      e,
      n
    ), t;
  }
  function Oh(t, e, a, l) {
    return bl(), e.flags |= 256, ce(t, e, a, l), e.child;
  }
  var Bs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ds(t) {
    return { baseLanes: t, cachePool: Dr() };
  }
  function xs(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Le), t;
  }
  function zh(t, e, a) {
    var l = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (ye.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (pt) {
        if (n ? Pa(e) : _a(), (t = jt) ? (t = cA(
          t,
          ta
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: qa !== null ? { id: ra, overflow: ha } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = yr(t), a.return = e, e.child = a, fe = e, jt = null)) : t = null, t === null) throw Ka(e);
        return xo(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = l.children, l = l.fallback, n ? (_a(), n = e.mode, u = pi(
        { mode: "hidden", children: u },
        n
      ), l = yl(
        l,
        n,
        a,
        null
      ), u.return = e, l.return = e, u.sibling = l, e.child = u, l = e.child, l.memoizedState = Ds(a), l.childLanes = xs(
        t,
        i,
        a
      ), e.memoizedState = Bs, eu(null, l)) : (Pa(e), Ss(e, u));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var r = c.dehydrated;
      if (r !== null)
        return Xg(
          t,
          e,
          u,
          i,
          l,
          r,
          c,
          a
        );
    }
    return n ? (_a(), n = l.fallback, u = e.mode, c = t.child, r = c.sibling, l = Da(c, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = c.subtreeFlags & 1206910976, r !== null ? n = Da(r, n) : (n = yl(
      n,
      u,
      a,
      null
    ), n.flags |= 2), n.return = e, l.return = e, l.sibling = n, e.child = l, eu(null, l), l = e.child, n = t.child.memoizedState, n === null ? n = Ds(a) : (u = n.cachePool, u !== null ? (c = te._currentValue, u = u.parent !== c ? { parent: c, pool: c } : u) : u = Dr(), n = {
      baseLanes: n.baseLanes | a,
      cachePool: u
    }), l.memoizedState = n, l.childLanes = xs(
      t,
      i,
      a
    ), e.memoizedState = Bs, eu(t.child, l)) : (Pa(e), a = t.child, t = a.sibling, a = Da(a, {
      mode: "visible",
      children: l.children
    }), a.return = e, a.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function Ss(t, e) {
    return e = pi(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function pi(t, e) {
    return t = Te(22, t, null, e), t.lanes = 0, t;
  }
  function yi(t, e, a) {
    return Dl(e, t.child, null, a), t = Ss(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Xg(t, e, a, l, n, u, i, c) {
    if (a)
      return e.flags & 256 ? (Pa(e), e.flags &= -257, yi(
        t,
        e,
        c
      )) : e.memoizedState !== null ? (_a(), e.child = t.child, e.flags |= 128, null) : (_a(), u = n.fallback, i = e.mode, n = pi(
        { mode: "visible", children: n.children },
        i
      ), u = yl(
        u,
        i,
        c,
        null
      ), u.flags |= 2, n.return = e, u.return = e, n.sibling = u, e.child = n, Dl(e, t.child, null, c), n = e.child, n.memoizedState = Ds(c), n.childLanes = xs(
        t,
        l,
        c
      ), e.memoizedState = Bs, eu(null, n));
    if (Pa(e), xo(u)) {
      if (l = u.nextSibling && u.nextSibling.dataset, l) var r = l.dgst;
      return l = r, l !== "" && (n = Error(f(419)), n.stack = "", n.digest = l, Zn({ value: n, source: null, stack: null })), yi(
        t,
        e,
        c
      );
    }
    if (ae || vl(t, e, c, !1), l = (c & t.childLanes) !== 0, ae || l) {
      if (Wa.current !== null)
        return yi(
          t,
          e,
          c
        );
      if (l = Ot, l !== null && (n = vf(
        l,
        c
      ), n !== 0 && n !== i.retryLane))
        throw i.retryLane = n, pl(t, n), Ne(l, t, n), Es;
      return Do(u) || Ui(), yi(
        t,
        e,
        c
      );
    }
    return Do(u) ? (e.flags |= 192, e.child = t.child, null) : (t = i.treeContext, jt = aa(u.nextSibling), fe = e, pt = !0, Za = null, ta = !1, t !== null && vr(e, t), e = Ss(
      e,
      n.children
    ), e.flags |= 134221824, e);
  }
  function jh(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Wu(t.return, e, a);
  }
  function Hh(t) {
    for (var e = null; t !== null; ) {
      var a = t.alternate;
      a !== null && ui(a) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function bi(t, e, a, l, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = l, i.tail = a, i.tailMode = n, i.treeForkCount = u);
  }
  function Ys(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var a = e.sibling;
      e.sibling = t.child, t.child = e, e = a;
    }
  }
  function Ts(t, e, a) {
    var l = e.pendingProps, n = l.revealOrder, u = l.tail;
    l = l.children;
    var i = ye.current;
    if (e.flags & 128)
      return Pn(e, i), null;
    var c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, Pn(e, i), n === "backwards" && t !== null ? (Ys(t), ce(t, e, l, a), Ys(t)) : ce(t, e, l, a), l = pt ? qn : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && jh(t, a, e);
        else if (t.tag === 19)
          jh(t, a, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "backwards":
        a = Hh(e.child), a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null, Ys(e)), bi(
          e,
          !0,
          n,
          null,
          u,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (a = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && ui(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = a, a = n, n = t;
        }
        bi(
          e,
          !0,
          a,
          null,
          u,
          l
        );
        break;
      case "together":
        bi(
          e,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        a = Hh(e.child), a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null), bi(
          e,
          !1,
          n,
          a,
          u,
          l
        );
    }
    return e.child;
  }
  function qh(t, e, a) {
    var l = e.pendingProps;
    return La(e, e.type, l.value), ce(t, e, l.children, a), e.child;
  }
  function ka(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), al |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (vl(
          t,
          e,
          a,
          !1
        ), (a & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, a = Da(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = Da(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function Gs(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Pu(t)));
  }
  function Wg(t, e, a) {
    switch (e.tag) {
      case 3:
        ie(e, e.stateNode.containerInfo), La(e, te, t.memoizedState.cache), bl();
        break;
      case 27:
      case 5:
        se(e);
        break;
      case 4:
        ie(e, e.stateNode.containerInfo);
        break;
      case 10:
        La(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, ls(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return Pa(e), e.flags |= 128, null;
          l = vl(
            t,
            e,
            a,
            !1
          );
          var n = e.child.childLanes;
          return l || (a & n) !== 0 ? zh(t, e, a) : (Pa(e), t = ka(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        }
        Pa(e);
        break;
      case 19:
        if (e.flags & 128)
          return Ts(
            t,
            e,
            a
          );
        if (n = (t.flags & 128) !== 0, l = (a & e.childLanes) !== 0, l || (vl(
          t,
          e,
          a,
          !1
        ), l = (a & e.childLanes) !== 0), n) {
          if (l)
            return Ts(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Pn(e, ye.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, kh(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        La(e, te, t.memoizedState.cache);
    }
    return ka(t, e, a);
  }
  function Zh(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ae = !0;
      else {
        if (!Gs(t, a) && (e.flags & 128) === 0)
          return ae = !1, Wg(
            t,
            e,
            a
          );
        ae = (t.flags & 131072) !== 0;
      }
    else
      ae = !1, pt && (e.flags & 1048576) !== 0 && wr(e, qn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = Cl(e.elementType), e.type = t, typeof t == "function")
            zc(t) ? (l = Sl(t, l), e.tag = 1, e = Qh(
              null,
              e,
              t,
              l,
              a
            )) : (e.tag = 0, e = Cs(
              null,
              e,
              t,
              l,
              a
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === O) {
                e.tag = 11, e = Yh(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              } else if (n === Ct) {
                e.tag = 14, e = Th(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              } else if (n === Dt) {
                e.tag = 10, e.type = t, e = qh(
                  null,
                  e,
                  a
                );
                break t;
              }
            }
            throw e = yt(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return Cs(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return l = e.type, n = Sl(
          l,
          e.pendingProps
        ), Qh(
          t,
          e,
          l,
          n,
          a
        );
      case 3:
        t: {
          if (ie(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, _c(t, e), Wn(e, l, null, a);
          var i = e.memoizedState;
          if (l = i.cache, La(e, te, l), l !== u.cache && Ic(
            e,
            [te],
            a,
            !0
          ), Xn(), l = i.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Oh(
                t,
                e,
                l,
                a
              );
              break t;
            } else if (l !== n) {
              n = Pe(
                Error(f(424)),
                e
              ), Zn(n), e = Oh(
                t,
                e,
                l,
                a
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (jt = aa(t.firstChild), fe = e, pt = !0, Za = null, ta = !0, a = kr(
                e,
                null,
                l,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 134221824, a = a.sibling;
            }
          else {
            if (bl(), l === n) {
              e = ka(
                t,
                e,
                a
              );
              break t;
            }
            ce(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return un(t, e), t === null ? (a = AA(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : pt || (e.stateNode = Fd(
          e.type,
          e.pendingProps,
          qt.current,
          e
        )) : e.memoizedState = AA(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return se(e), t === null && pt && (l = e.stateNode = fA(
          e.type,
          e.pendingProps,
          qt.current
        ), fe = e, ta = !0, n = jt, il(e.type) ? (So = n, jt = aa(l.firstChild)) : jt = n), ce(
          t,
          e,
          e.pendingProps.children,
          a
        ), un(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && pt && ((n = l = jt) && (l = Km(
          l,
          e.type,
          e.pendingProps,
          ta
        ), l !== null ? (e.stateNode = l, fe = e, jt = aa(l.firstChild), ta = !1, n = !0) : n = !1), n || Ka(e)), se(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, l = u.children, wo(n, u) ? l = null : i !== null && wo(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = is(
          t,
          e,
          zg,
          null,
          null,
          a
        ), En._currentValue = n), un(t, e), ce(t, e, l, a), e.child;
      case 6:
        return t === null && pt && ((t = a = jt) && (a = Lm(
          a,
          e.pendingProps,
          ta
        ), a !== null ? (e.stateNode = a, fe = e, jt = null, t = !0) : t = !1), t || Ka(e)), null;
      case 13:
        return zh(t, e, a);
      case 4:
        return ie(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = Dl(
          e,
          null,
          l,
          a
        ) : ce(t, e, l, a), e.child;
      case 11:
        return Yh(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return l = e.pendingProps, un(t, e), ce(t, e, l, a), e.child;
      case 8:
        return ce(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return ce(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return qh(t, e, a);
      case 9:
        return n = e.type._context, l = e.pendingProps.children, Vl(e), n = me(n), l = l(n), e.flags |= 1, ce(t, e, l, a), e.child;
      case 14:
        return Th(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return Gh(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return Ts(t, e, a);
      case 31:
        return Jg(t, e, a);
      case 22:
        return kh(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return Vl(e), l = me(te), t === null ? (n = Xc(), n === null && (n = Ot, u = Fc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), e.memoizedState = { parent: l, cache: n }, Pc(e), La(e, te, n)) : ((t.lanes & a) !== 0 && (_c(t, e), Wn(e, null, null, a), Xn()), n = t.memoizedState, u = e.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), La(e, te, l)) : (l = u.cache, La(e, te, l), l !== n.cache && Ic(
          e,
          [te],
          a,
          !0
        ))), ce(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = e.pendingProps, l.name != null && l.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : pt && Ju(e), t !== null && t.memoizedProps.name !== l.name ? e.flags |= 4194816 : un(t, e), ce(t, e, l.children, a), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Ra(t) {
    t.flags |= 4;
  }
  function ks(t, e, a, l, n) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = a === null ? yA(e, l) : yA(e, l) && (l.src !== a.src || l.srcSet !== a.srcSet)), u) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Ed()) t.flags |= 8192;
        else
          throw Bl = ei, Wc;
    } else t.flags &= -16777217;
  }
  function Kh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !bA(e))
      if (Ed()) t.flags |= 8192;
      else
        throw Bl = ei, Wc;
  }
  function wi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? yf() : 536870912, t.lanes |= e, rn |= e);
  }
  function au(t, e) {
    if (!pt)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var a = t.tail, l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (e = t.tail, a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t.tail = null : a.sibling = null;
      }
  }
  function Ht(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
    if (e)
      for (var n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 1206910976, l |= n.flags & 1206910976, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= l, t.childLanes = a, e;
  }
  function Pg(t, e, a) {
    var l = e.pendingProps;
    switch (qc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ht(e), null;
      case 1:
        return Ht(e), null;
      case 3:
        return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ya(te), Ae(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (_l(e) ? Ra(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Kc())), Ht(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (Ra(e), u !== null ? (Ht(e), Kh(e, u)) : (Ht(e), ks(
          e,
          n,
          null,
          l,
          a
        ))) : u ? u !== t.memoizedState ? (Ra(e), Ht(e), Kh(e, u)) : (Ht(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && Ra(e), Ht(e), ks(
          e,
          n,
          t,
          l,
          a
        )), null;
      case 27:
        if (Ee(e), a = qt.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && Ra(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Ht(e), e.subtreeFlags &= -33554433, null;
          }
          t = Ut.current, _l(e) ? Vr(e) : (t = fA(n, l, a), e.stateNode = t, Ra(e));
        }
        return Ht(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Ee(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && Ra(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Ht(e), e.subtreeFlags &= -33554433, null;
          }
          if (u = Ut.current, _l(e))
            Vr(e);
          else {
            var i = du(
              qt.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? i.createElement("select", {
                      is: l.is
                    }) : i.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? i.createElement(n, { is: l.is }) : i.createElement(n);
                }
            }
            u[ge] = e, u[Ye] = l;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = u;
            t: switch (we(u, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && Ra(e);
          }
        }
        return Ht(e), e.subtreeFlags &= -33554433, ks(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          a
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && Ra(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = qt.current, _l(e)) {
            if (t = e.stateNode, a = e.memoizedProps, l = null, n = fe, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            t[ge] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Zd(t.nodeValue, a)), t || Ka(e, !0);
          } else
            t = du(t).createTextNode(
              l
            ), t[ge] = e, e.stateNode = t;
        }
        return Ht(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = _l(e), a !== null) {
            if (t === null) {
              if (!l) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[ge] = e;
            } else
              bl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ht(e), t = !1;
          } else
            a = Kc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Ht(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = _l(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[ge] = e;
            } else
              bl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ht(e), n = !1;
          } else
            n = Kc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
        }
        return qe(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = e.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), wi(e, e.updateQueue), Ht(e), null);
      case 4:
        return Ae(), t === null && go(e.stateNode.containerInfo), e.flags |= 67108864, Ht(e), null;
      case 10:
        return Ya(e.type), Ht(e), null;
      case 19:
        if (ns(e), l = e.memoizedState, l === null) return Ht(e), null;
        if (n = (e.flags & 128) !== 0, u = l.rendering, u === null)
          if (n) au(l, !1);
          else {
            if (Wt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = ui(t), u !== null) {
                  for (e.flags |= 128, au(l, !1), t = u.updateQueue, e.updateQueue = t, wi(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    pr(a, t), a = a.sibling;
                  return Pn(
                    e,
                    ye.current & 1 | 2
                  ), pt && xa(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && Qe() > Gi && (e.flags |= 128, n = !0, au(l, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = ui(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, wi(e, t), au(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !u.alternate && !pt)
                return Ht(e), null;
            } else
              2 * Qe() - l.renderingStartTime > Gi && a !== 536870912 && (e.flags |= 128, n = !0, au(l, !1), e.lanes = 4194304);
          l.isBackwards ? (u.sibling = e.child, e.child = u) : (t = l.last, t !== null ? t.sibling = u : e.child = u, l.last = u);
        }
        if (l.tail !== null) {
          t = l.tail;
          t: {
            for (a = t; a !== null; ) {
              if (a.alternate !== null) {
                a = !1;
                break t;
              }
              a = a.sibling;
            }
            a = !0;
          }
          return l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Qe(), t.sibling = null, u = ye.current, u = n ? u & 1 | 2 : u & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !a || pt ? Pn(e, u) : (a = u, _(pe, e), _(ye, a), Ve === null && (Ve = e)), pt && xa(e, l.treeForkCount), t;
        }
        return Ht(e), null;
      case 22:
      case 23:
        return qe(e), as(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Ht(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ht(e), a = e.updateQueue, a !== null && wi(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && G(El), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ya(te), Ht(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Ht(e), null;
    }
    throw Error(f(156, e.tag));
  }
  function _g(t, e) {
    switch (qc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ya(te), Ae(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ee(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (qe(e), e.alternate === null)
            throw Error(f(340));
          bl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (qe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          bl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return ns(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Ae(), null;
      case 10:
        return Ya(e.type), null;
      case 22:
      case 23:
        return qe(e), as(), t !== null && G(El), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ya(te), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lh(t, e) {
    switch (qc(e), e.tag) {
      case 3:
        Ya(te), Ae();
        break;
      case 26:
      case 27:
      case 5:
        Ee(e);
        break;
      case 4:
        Ae();
        break;
      case 31:
        e.memoizedState !== null && qe(e);
        break;
      case 13:
        qe(e);
        break;
      case 19:
        ns(e);
        break;
      case 10:
        Ya(e.type);
        break;
      case 22:
      case 23:
        qe(e), as(), t !== null && G(El);
        break;
      case 24:
        Ya(te);
    }
  }
  function lu(t, e) {
    try {
      var a = e.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var u = a.create, i = a.inst;
            l = u(), i.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (c) {
      Gt(e, e.return, c);
    }
  }
  function $a(t, e, a) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var i = l.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = e;
              var r = a, y = c;
              try {
                y();
              } catch (M) {
                Gt(
                  n,
                  r,
                  M
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (M) {
      Gt(e, e.return, M);
    }
  }
  function Ih(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Nr(e, a);
      } catch (l) {
        Gt(t, t.return, l);
      }
    }
  }
  function Fh(t, e, a) {
    a.props = Sl(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Gt(t, e, l);
    }
  }
  function da(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            var n = t.stateNode, u = Ca(t.memoizedProps, n);
            (n.ref === null || n.ref.name !== u) && (n.ref = tA(u)), l = n.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var i = new Fe(t);
              w(
                t.child,
                !1,
                qm,
                i,
                void 0,
                void 0
              ), t.stateNode = i;
            }
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
      }
    } catch (c) {
      Gt(t, e, c);
    }
  }
  function be(t, e) {
    var a = t.ref, l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          Gt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          Gt(t, e, n);
        }
      else a.current = null;
  }
  function vi(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var a = 0; a < e.length; a++)
        iA(
          t.stateNode,
          e[a]
        );
  }
  function Jh(t) {
    for (var e = t.return; e !== null && (Ns(e) && iA(t.stateNode, e.stateNode), !Rs(e)); )
      e = e.return;
  }
  function nu(t) {
    for (var e = t.return; e !== null && (Ns(e) && Zm(t.stateNode, e.stateNode), !Rs(e)); )
      e = e.return;
  }
  function Rs(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Ns(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Us(t) {
    var e = t.type, a = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      Gt(t, t.return, n);
    }
  }
  function Qs(t, e, a) {
    try {
      var l = t.stateNode;
      Em(l, t.type, a, e), l[Ye] = e;
    } catch (n) {
      Gt(t, t.return, n);
    }
  }
  function Xh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && il(t.type) || t.tag === 4;
  }
  function Os(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Xh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && il(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zs(t, e, a, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(n, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(n), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = fa)), vi(t, l), xt = !0;
    else if (n !== 4 && (n === 27 && (vi(t, l), l = null, il(t.type) && (a = t.stateNode, e = null)), t = t.child, t !== null))
      for (zs(
        t,
        e,
        a,
        l
      ), t = t.sibling; t !== null; )
        zs(
          t,
          e,
          a,
          l
        ), t = t.sibling;
  }
  function Vi(t, e, a, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, e ? a.insertBefore(n, e) : a.appendChild(n), vi(t, l), xt = !0;
    else if (n !== 4 && (n === 27 && (vi(t, l), l = null, il(t.type) && (a = t.stateNode)), t = t.child, t !== null))
      for (Vi(
        t,
        e,
        a,
        l
      ), t = t.sibling; t !== null; )
        Vi(
          t,
          e,
          a,
          l
        ), t = t.sibling;
  }
  function Wh(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var l = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      we(e, l, a), e[ge] = t, e[Ye] = a;
    } catch (u) {
      Gt(t, t.return, u);
    }
  }
  var Mi = !1, Ze = null;
  function Ph(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Mi = !0);
  }
  var Aa = null;
  function _h() {
    var t = Aa;
    return Aa = null, t;
  }
  var Ge = 0;
  function cn(t, e, a, l, n) {
    return Ge = 0, $h(
      t.child,
      e,
      a,
      l,
      n
    );
  }
  function $h(t, e, a, l, n) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (l !== null) {
          var c = Mo(i);
          l.push(c), c.view && (u = !0);
        } else
          u || Mo(i).view && (u = !0);
        Mi = !0, _d(
          i,
          Ge === 0 ? e : e + "_" + Ge,
          a
        ), Ge++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && n || $h(
        t.child,
        e,
        a,
        l,
        n
      ) && (u = !0));
      t = t.sibling;
    }
    return u;
  }
  function ga(t, e) {
    for (; t !== null; )
      t.tag === 5 ? $d(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || ga(
        t.child,
        e
      )), t = t.sibling;
  }
  function Ei(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (Ei(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(f(544));
          var a = e.name;
          e = Ba(e.default, e.share), e !== "none" && (cn(
            t,
            a,
            e,
            null,
            !1
          ) || ga(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function js(t, e) {
    if (t.tag === 30) {
      var a = t.stateNode, l = t.memoizedProps, n = Ca(l, a), u = Ba(
        l.default,
        a.paired ? l.share : l.enter
      );
      u !== "none" ? cn(t, n, u, null, !1) ? (Ei(t), a.paired || e || gn(t, l.onEnter)) : ga(t.child, !1) : Ei(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        js(t, e), t = t.sibling;
    else Ei(t);
  }
  function Hs(t) {
    if (Ze !== null && Ze.size !== 0) {
      var e = Ze;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var a = t.memoizedProps, l = a.name;
              if (l != null && l !== "auto") {
                var n = e.get(l);
                if (n !== void 0) {
                  var u = Ba(
                    a.default,
                    a.share
                  );
                  if (u !== "none" && (cn(
                    t,
                    l,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, n.paired = u, u.paired = n, gn(t, a.onShare)) : ga(t.child, !1)), e.delete(l), e.size === 0) break;
                }
              }
            }
            Hs(t);
          }
          t = t.sibling;
        }
    }
  }
  function qs(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, a = Ca(e, t.stateNode), l = Ze !== null ? Ze.get(a) : void 0, n = Ba(
        e.default,
        l !== void 0 ? e.share : e.exit
      );
      n !== "none" && (cn(t, a, n, null, !1) ? l !== void 0 ? (n = t.stateNode, l.paired = n, n.paired = l, Ze.delete(a), gn(t, e.onShare)) : gn(t, e.onExit) : ga(t.child, !1)), Ze !== null && Hs(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        qs(t), t = t.sibling;
    else
      Ze !== null && Hs(t);
  }
  function td(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, a = Ca(e, t.stateNode);
        e = Ba(e.default, e.update), t.flags &= -5, e !== "none" && cn(
          t,
          a,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && td(t);
      t = t.sibling;
    }
  }
  function Zs(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, ga(t.child, !1));
          }
          Zs(t);
        }
        t = t.sibling;
      }
  }
  function Ci(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, ga(t.child, !1), Zs(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ci(t), t = t.sibling;
    else Zs(t);
  }
  function ed(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? ga(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && ed(t), t = t.sibling;
  }
  function Ks(t, e, a, l, n, u, i) {
    for (var c = !1; e !== null; ) {
      if (e.tag === 5) {
        var r = e.stateNode;
        if (u !== null && Ge < u.length) {
          var y = u[Ge], M = Mo(r);
          (y.view || M.view) && (c = !0);
          var B;
          if (B = (t.flags & 4) === 0)
            if (M.clip) B = !0;
            else {
              B = y.rect;
              var m = M.rect;
              B = B.y !== m.y || B.x !== m.x || B.height !== m.height || B.width !== m.width;
            }
          B && (t.flags |= 4), M.abs ? M = !y.abs : (y = y.rect, M = M.rect, M = y.height !== M.height || y.width !== M.width), M && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && _d(
          r,
          Ge === 0 ? a : a + "_" + Ge,
          n
        ), c && (t.flags & 4) !== 0 || (Aa === null && (Aa = []), Aa.push(
          r,
          Ge === 0 ? l : l + "_" + Ge,
          e.memoizedProps
        )), Ge++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i ? t.flags |= e.flags & 32 : Ks(
        t,
        e.child,
        a,
        l,
        n,
        u,
        i
      ) && (c = !0));
      e = e.sibling;
    }
    return c;
  }
  function ad(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var a = t.memoizedProps, l = t.stateNode, n = Ca(a, l), u = Ba(a.default, a.update), i;
        i = t.memoizedState, t.memoizedState = null, l = t;
        var c = t.child;
        Ge = 0, n = Ks(
          l,
          c,
          n,
          n,
          u,
          i,
          !1
        ), (t.flags & 4) !== 0 && n && gn(t, a.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && ad(t);
      t = t.sibling;
    }
  }
  var re = !1, Yt = !1, ma = !1, Ls = !1, ld = typeof WeakSet == "function" ? WeakSet : Set, he = null, pa = !1, uu = !1, Bi = !1, Is = !1;
  function $g(t, e, a) {
    if (t = t.containerInfo, yo = Cn, t = cr(t), Gc(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var u = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0, r = -1, y = -1, M = 0, B = 0, m = t, v = null;
            e: for (; ; ) {
              for (var Q; m !== l || u !== 0 && m.nodeType !== 3 || (r = c + u), m !== i || n !== 0 && m.nodeType !== 3 || (y = c + n), m.nodeType === 3 && (c += m.nodeValue.length), (Q = m.firstChild) !== null; )
                v = m, m = Q;
              for (; ; ) {
                if (m === t) break e;
                if (v === l && ++M === u && (r = c), v === i && ++B === n && (y = c), (Q = m.nextSibling) !== null) break;
                m = v, v = m.parentNode;
              }
              m = Q;
            }
            l = r === -1 || y === -1 ? null : { start: r, end: y };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (bo = { focusedElem: t, selectionRange: l }, Cn = !1, a = (a & 335544064) === a, he = e, e = a ? 9270 : 1024; he !== null; ) {
      if (t = he, a && (l = t.deletions, l !== null))
        for (u = 0; u < l.length; u++)
          a && qs(l[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        a && Ph(t), Di(a);
      else {
        if (t.tag === 22) {
          if (l = t.alternate, t.memoizedState !== null) {
            l !== null && l.memoizedState === null && a && qs(l), Di(a);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            a && Ph(t), Di(a);
            continue;
          }
        }
        l = t.child, (t.subtreeFlags & e) !== 0 && l !== null ? (l.return = t, he = l) : (a && td(t), Di(a));
      }
    }
    Ze = null;
  }
  function Di(t) {
    for (; he !== null; ) {
      var e = he, a = t, l = e.alternate, n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && l !== null) {
            a = void 0, n = l.memoizedProps, l = l.memoizedState;
            var u = e.stateNode;
            try {
              var i = Sl(
                e.type,
                n
              );
              a = u.getSnapshotBeforeUpdate(
                i,
                l
              ), u.__reactInternalSnapshotBeforeUpdate = a;
            } catch (c) {
              Gt(e, e.return, c);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (l = e.stateNode.containerInfo, a = l.nodeType, a === 9)
              Bo(l);
            else if (a === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Bo(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          a && l !== null && (a = Ca(
            l.memoizedProps,
            l.stateNode
          ), n = e.memoizedProps, n = Ba(n.default, n.update), n !== "none" && cn(
            l,
            a,
            n,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(f(163));
      }
      if (l = e.sibling, l !== null) {
        l.return = e.return, he = l;
        break;
      }
      he = e.return;
    }
  }
  function nd(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ya(t, a), l & 4 && lu(5, a);
        break;
      case 1:
        if (ya(t, a), l & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (i) {
              Gt(a, a.return, i);
            }
          else {
            var n = Sl(
              a.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              Gt(
                a,
                a.return,
                i
              );
            }
          }
        l & 64 && Ih(a), l & 512 && da(a, a.return);
        break;
      case 3:
        if (ya(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Nr(t, e);
          } catch (i) {
            Gt(a, a.return, i);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Wh(a);
      case 26:
      case 5:
        ya(t, a), e === null && l & 4 && Us(a), l & 512 && da(a, a.return);
        break;
      case 12:
        ya(t, a);
        break;
      case 31:
        ya(t, a), l & 4 && sd(t, a);
        break;
      case 13:
        ya(t, a), l & 4 && od(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = rm.bind(
          null,
          a
        ), Im(t, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || re, !l) {
          var u = e !== null && e.memoizedState !== null || Yt;
          e = re, n = Yt, re = l, (Yt = u) && !n ? (l = 2, (a.subtreeFlags & 8772) !== 0 && (l |= 1), ca(
            t,
            a,
            l
          )) : ya(t, a), re = e, Yt = n;
        }
        break;
      case 30:
        ya(t, a), l & 512 && da(a, a.return);
        break;
      case 7:
        l & 512 && da(a, a.return);
      default:
        ya(t, a);
    }
  }
  function Fs(t, e) {
    for (t = t.child; t !== null; )
      ud(t, e), t = t.sibling;
  }
  function ud(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var a = t.stateNode;
          if (e) {
            var l = a.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var n = t.stateNode, u = t.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null;
            n.style.display = i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (r) {
          Gt(t, t.return, r);
        }
        Js(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, xt = !0;
        } catch (r) {
          Gt(t, t.return, r);
        }
        break;
      case 18:
        try {
          var c = t.stateNode;
          e ? Pd(c, !0) : Pd(t.stateNode, !1);
        } catch (r) {
          Gt(t, t.return, r);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Fs(t, e);
        break;
      default:
        Fs(t, e);
    }
  }
  function Js(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var a = t, l = e;
          switch (a.tag) {
            case 4:
              ud(a, l);
              break t;
            case 22:
              a.memoizedState === null && Js(a, l);
              break t;
            default:
              Js(a, l);
          }
        }
        t = t.sibling;
      }
  }
  function id(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, id(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Gu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Kt = null, ke = !1;
  function ua(t, e, a) {
    for (a = a.child; a !== null; )
      cd(t, e, a), a = a.sibling;
  }
  function cd(t, e, a) {
    if (Oe && typeof Oe.onCommitFiberUnmount == "function")
      try {
        Oe.onCommitFiberUnmount(xn, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Yt || be(a, e), ua(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && !Yt && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Yt || be(a, e), nu(a);
        var l = Kt, n = ke;
        il(a.type) && (Kt = a.stateNode, ke = !1), ua(
          t,
          e,
          a
        ), rA(
          a.stateNode,
          a.type,
          a.memoizedProps
        ), Kt = l, ke = n;
        break;
      case 5:
        Yt || be(a, e), nu(a);
      case 6:
        if (a.tag === 6 && nu(a), l = Kt, n = ke, Kt = null, ua(
          t,
          e,
          a
        ), Kt = l, ke = n, Kt !== null)
          if (ke)
            try {
              (Kt.nodeType === 9 ? Kt.body : Kt.nodeName === "HTML" ? Kt.ownerDocument.body : Kt).removeChild(a.stateNode), xt = !0;
            } catch (u) {
              Gt(
                a,
                e,
                u
              );
            }
          else
            try {
              Kt.removeChild(a.stateNode), xt = !0;
            } catch (u) {
              Gt(
                a,
                e,
                u
              );
            }
        break;
      case 18:
        Kt !== null && (ke ? (t = Kt, Wd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), Bn(t)) : Wd(Kt, a.stateNode));
        break;
      case 4:
        l = Kt, n = ke, Kt = a.stateNode.containerInfo, ke = !0, ua(
          t,
          e,
          a
        ), Kt = l, ke = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $a(2, a, e), Yt || $a(4, a, e), ua(
          t,
          e,
          a
        );
        break;
      case 1:
        Yt || (be(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && Fh(
          a,
          e,
          l
        )), ua(
          t,
          e,
          a
        );
        break;
      case 21:
        ua(
          t,
          e,
          a
        );
        break;
      case 22:
        Yt = (l = Yt) || a.memoizedState !== null, ua(
          t,
          e,
          a
        ), Yt = l;
        break;
      case 30:
        be(a, e), ua(
          t,
          e,
          a
        );
        break;
      case 7:
        Yt || be(a, e), ua(
          t,
          e,
          a
        );
        break;
      default:
        ua(
          t,
          e,
          a
        );
    }
  }
  function sd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Bn(t);
      } catch (a) {
        Gt(e, e.return, a);
      }
    }
  }
  function od(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Bn(t);
      } catch (a) {
        Gt(e, e.return, a);
      }
  }
  function tm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ld()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new ld()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function xi(t, e) {
    var a = tm(t);
    e.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = hm.bind(null, t, l);
        l.then(n, n);
      }
    });
  }
  function De(t, e, a) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var u = l[n], i = t, c = e, r = c;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (il(r.type)) {
                Kt = r.stateNode, ke = !1;
                break t;
              }
              break;
            case 5:
              Kt = r.stateNode, ke = !1;
              break t;
            case 3:
            case 4:
              Kt = r.stateNode.containerInfo, ke = !0;
              break t;
          }
          r = r.return;
        }
        if (Kt === null) throw Error(f(160));
        cd(i, c, u), Kt = null, ke = !1, i = u.alternate, i !== null && (i.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        fd(e, t, a), e = e.sibling;
  }
  var ia = null;
  function fd(t, e, a) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (n & 4 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var u = 0; u < l.length; u++) {
            var i = l[u];
            i.ref.impl = i.nextImpl;
          }
        De(e, t, a), xe(t), n & 4 && ($a(3, t, t.return), lu(3, t), $a(5, t, t.return));
        break;
      case 1:
        De(e, t, a), xe(t), n & 512 && (Yt || l === null || be(l, l.return)), n & 64 && re && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        if (u = ia, De(e, t, a), xe(t), n & 512 && (Yt || l === null || be(l, l.return)), n & 4)
          if (n = l !== null ? l.memoizedState : null, a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null)
                if (re)
                  t.stateNode = Fd(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, a = t.memoizedProps, n = u.ownerDocument || u;
                    e: switch (e) {
                      case "title":
                        l = n.getElementsByTagName("title")[0], (!l || l[Tn] || l[ge] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = n.createElement(e), n.head.insertBefore(
                          l,
                          n.querySelector("head > title")
                        )), we(l, e, a), l[ge] = t, oe(l), e = l;
                        break t;
                      case "link":
                        if (u = pA(
                          "link",
                          "href",
                          n
                        ).get(e + (a.href || ""))) {
                          for (i = 0; i < u.length; i++)
                            if (l = u[i], l.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && l.getAttribute("rel") === (a.rel == null ? null : a.rel) && l.getAttribute("title") === (a.title == null ? null : a.title) && l.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              u.splice(i, 1);
                              break e;
                            }
                        }
                        l = n.createElement(e), we(l, e, a), n.head.appendChild(l);
                        break;
                      case "meta":
                        if (u = pA(
                          "meta",
                          "content",
                          n
                        ).get(e + (a.content || ""))) {
                          for (i = 0; i < u.length; i++)
                            if (l = u[i], l.getAttribute("content") === (a.content == null ? null : "" + a.content) && l.getAttribute("name") === (a.name == null ? null : a.name) && l.getAttribute("property") === (a.property == null ? null : a.property) && l.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && l.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              u.splice(i, 1);
                              break e;
                            }
                        }
                        l = n.createElement(e), we(l, e, a), n.head.appendChild(l);
                        break;
                      default:
                        throw Error(f(468, e));
                    }
                    l[ge] = t, oe(l), e = l;
                  }
                  t.stateNode = e;
                }
              else
                re || ko(u, t.type, t.stateNode);
            else
              t.stateNode = mA(
                u,
                a,
                t.memoizedProps
              );
          else
            n !== a ? (n === null ? (e = l.stateNode, e === null || Yt || e.parentNode.removeChild(e)) : n.count--, a === null ? re || ko(u, t.type, t.stateNode) : mA(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && Qs(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        De(e, t, a), xe(t), n & 512 && (Yt || l === null || be(l, l.return)), l !== null && n & 4 && Qs(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (u = ma, ma = !1, De(e, t, a), ma = u, xe(t), n & 512 && (Yt || l === null || be(l, l.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            ql(e, ""), xt = !0;
          } catch (M) {
            Gt(t, t.return, M);
          }
        }
        n & 4 && t.stateNode != null && (e = t.memoizedProps, Qs(
          t,
          e,
          l !== null ? l.memoizedProps : e
        )), n & 1024 && (Ls = !0);
        break;
      case 6:
        if (De(e, t, a), xe(t), n & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          e = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = e, xt = !0;
          } catch (M) {
            Gt(t, t.return, M);
          }
        }
        break;
      case 3:
        if (xt = !1, Zi = null, u = ia, ia = Au(e.containerInfo), De(e, t, a), ia = u, xe(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Bn(e.containerInfo);
          } catch (M) {
            Gt(t, t.return, M);
          }
        Ls && (Ls = !1, rd(t)), xt = !1;
        break;
      case 4:
        n = ma, ma = re, l = Tf(), u = ia, ia = Au(
          t.stateNode.containerInfo
        ), De(e, t, a), xe(t), ia = u, xt && uu && (Bi = !0), xt = l, ma = n;
        break;
      case 12:
        De(e, t, a), xe(t);
        break;
      case 31:
        De(e, t, a), xe(t), n & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, xi(t, e)));
        break;
      case 13:
        De(e, t, a), xe(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ti = Qe()), n & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, xi(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, i = l !== null && l.memoizedState !== null;
        var c = re, r = Yt, y = ma;
        re = c || u, ma = y || u, Yt = r || i, De(e, t, a), Yt = r, ma = y, re = c, xe(t), n & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || l === null || i || re || Yt || (e = i || Yt, a = re, l = Yt, re = u || re, Yt = e, tl(t, 2), re = a, Yt = l), !u && ma || Fs(t, u)), n & 4 && (e = t.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, xi(t, a))));
        break;
      case 19:
        De(e, t, a), xe(t), n & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, xi(t, e)));
        break;
      case 30:
        n & 512 && (Yt || l === null || be(l, l.return)), n = Tf(), u = uu, i = (a & 335544064) === a, c = t.memoizedProps, uu = i && Ba(
          c.default,
          c.update
        ) !== "none", De(e, t, a), xe(t), i && l !== null && xt && (t.flags |= 4), uu = u, xt = n;
        break;
      case 21:
        break;
      case 7:
        n & 512 && (Yt || l === null || be(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = t);
      default:
        De(e, t, a), xe(t);
    }
  }
  function xe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (Xh(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var n = t.return; n !== null; ) {
          if (Ns(n)) {
            var u = n.stateNode;
            l === null ? l = [u] : l.push(u);
          }
          if (Rs(n)) break;
          n = n.return;
        }
        var i = l;
        if (a == null) throw Error(f(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, r = Os(t);
            Vi(
              t,
              r,
              c,
              i
            );
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (ql(y, ""), a.flags &= -33);
            var M = Os(t);
            Vi(
              t,
              M,
              y,
              i
            );
            break;
          case 3:
          case 4:
            var B = a.stateNode.containerInfo, m = Os(t);
            zs(
              t,
              m,
              B,
              i
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (v) {
        Gt(t, t.return, v);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function rd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        rd(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, Cn = !0, e.reset(), Cn = !1), t = t.sibling;
      }
  }
  function sn(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        hd(e, t), e = e.sibling;
    else ad(e);
  }
  function hd(t, e) {
    var a = t.alternate;
    if (a === null) js(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Is = pa = !1, _h(), sn(e, t), !pa && !Bi) {
            if (t = Aa, t !== null)
              for (var l = 0; l < t.length; l += 3) {
                a = t[l];
                var n = t[l + 1];
                $d(a, t[l + 2]), a = a.ownerDocument.documentElement, a !== null && a.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + n + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Is = !0;
          }
          Aa = null;
          break;
        case 5:
          sn(e, t);
          break;
        case 4:
          l = pa, pa = !1, sn(e, t), pa && (Bi = !0), pa = l;
          break;
        case 22:
          t.memoizedState === null && (a.memoizedState !== null ? js(t, !1) : sn(e, t));
          break;
        case 30:
          l = pa, n = _h(), pa = !1, sn(e, t), pa && (t.flags |= 4);
          var u = t.memoizedProps, i = t.stateNode;
          e = Ca(u, i), i = Ca(a.memoizedProps, i);
          var c = Ba(u.default, u.update);
          c === "none" ? e = !1 : (u = a.memoizedState, a.memoizedState = null, a = t.child, Ge = 0, e = Ks(
            t,
            a,
            e,
            i,
            c,
            u,
            !0
          ), Ge !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (gn(
            t,
            t.memoizedProps.onUpdate
          ), Aa = n) : n !== null && (n.push.apply(n, Aa), Aa = n), pa = (t.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          sn(e, t);
      }
  }
  function ya(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        nd(t, e.alternate, e), e = e.sibling;
  }
  function tl(t, e) {
    for (t = t.child; t !== null; ) {
      var a = t, l = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $a(4, a, a.return), tl(
            a,
            l
          );
          break;
        case 1:
          be(a, a.return);
          var n = a.stateNode;
          typeof n.componentWillUnmount == "function" && Fh(
            a,
            a.return,
            n
          ), tl(
            a,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && rA(
            a.stateNode,
            a.type,
            a.memoizedProps
          );
        case 5:
          be(a, a.return), a.tag !== 5 && a.tag !== 27 || nu(a), tl(
            a,
            l
          );
          break;
        case 6:
          nu(a);
          break;
        case 26:
          be(a, a.return), n = a.stateNode, a.memoizedState !== null || n === null || Yt || n.parentNode.removeChild(n), tl(
            a,
            l
          );
          break;
        case 22:
          a.memoizedState === null && tl(
            a,
            l
          );
          break;
        case 30:
          be(a, a.return), tl(
            a,
            l
          );
          break;
        case 7:
          be(a, a.return);
        default:
          tl(
            a,
            l
          );
      }
      t = t.sibling;
    }
  }
  function ca(t, e, a) {
    for (a = (e.subtreeFlags & 8772) !== 0 ? a : a & -2, e = e.child; e !== null; ) {
      var l = e.alternate, n = t, u = e, i = u.flags, c = (a & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ca(
            n,
            u,
            a
          ), lu(4, u);
          break;
        case 1:
          if (ca(
            n,
            u,
            a
          ), l = u, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (M) {
              Gt(l, l.return, M);
            }
          if (l = u, n = l.updateQueue, n !== null) {
            var r = l.stateNode;
            try {
              var y = n.shared.hiddenCallbacks;
              if (y !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)
                  Rr(y[n], r);
            } catch (M) {
              Gt(l, l.return, M);
            }
          }
          c && i & 64 && Ih(u), da(u, u.return);
          break;
        case 27:
          (a & 2) !== 0 && Wh(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Jh(u), ca(
            n,
            u,
            a
          ), c && l === null && i & 4 && Us(u), da(u, u.return);
          break;
        case 6:
          Jh(u);
          break;
        case 26:
          r = u.stateNode, u.memoizedState !== null || r === null || re || ko(
            Au(r.ownerDocument),
            u.type,
            r
          ), ca(
            n,
            u,
            a
          ), c && l === null && i & 4 && Us(u), da(u, u.return);
          break;
        case 12:
          ca(
            n,
            u,
            a
          );
          break;
        case 31:
          ca(
            n,
            u,
            a
          ), c && i & 4 && sd(n, u);
          break;
        case 13:
          ca(
            n,
            u,
            a
          ), c && i & 4 && od(n, u);
          break;
        case 22:
          u.memoizedState === null && ca(
            n,
            u,
            a
          ), da(u, u.return);
          break;
        case 30:
          ca(
            n,
            u,
            a
          ), da(u, u.return);
          break;
        case 7:
          da(u, u.return);
        default:
          ca(
            n,
            u,
            a
          );
      }
      e = e.sibling;
    }
  }
  function Xs(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Kn(a));
  }
  function Ws(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Kn(t));
  }
  function ea(t, e, a, l) {
    var n = (a & 335544064) === a;
    if (e.subtreeFlags & (n ? 10262 : 10256))
      for (e = e.child; e !== null; )
        dd(
          t,
          e,
          a,
          l
        ), e = e.sibling;
    else n && ed(e);
  }
  function dd(t, e, a, l) {
    var n = (a & 335544064) === a;
    n && e.alternate === null && e.return !== null && e.return.alternate !== null && Ci(e);
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ea(
          t,
          e,
          a,
          l
        ), u & 2048 && lu(9, e);
        break;
      case 1:
        ea(
          t,
          e,
          a,
          l
        );
        break;
      case 3:
        ea(
          t,
          e,
          a,
          l
        ), n && Is && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Kn(u)));
        break;
      case 12:
        if (u & 2048) {
          ea(
            t,
            e,
            a,
            l
          ), u = e.stateNode;
          try {
            var i = e.memoizedProps, c = i.id, r = i.onPostCommit;
            typeof r == "function" && r(
              c,
              e.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (y) {
            Gt(e, e.return, y);
          }
        } else
          ea(
            t,
            e,
            a,
            l
          );
        break;
      case 31:
        ea(
          t,
          e,
          a,
          l
        );
        break;
      case 13:
        ea(
          t,
          e,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, c = e.alternate, e.memoizedState !== null ? (n && c !== null && c.memoizedState === null && Ci(c), i._visibility & 2 ? ea(
          t,
          e,
          a,
          l
        ) : iu(
          t,
          e
        )) : (n && c !== null && c.memoizedState !== null && Ci(e), i._visibility & 2 ? ea(
          t,
          e,
          a,
          l
        ) : (i._visibility |= 2, on(
          t,
          e,
          a,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && Xs(c, e);
        break;
      case 24:
        ea(
          t,
          e,
          a,
          l
        ), u & 2048 && Ws(e.alternate, e);
        break;
      case 30:
        n && (u = e.alternate, u !== null && (ga(u.child, !0), ga(e.child, !0))), ea(
          t,
          e,
          a,
          l
        );
        break;
      default:
        ea(
          t,
          e,
          a,
          l
        );
    }
  }
  function on(t, e, a, l, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, i = e, c = a, r = l, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          on(
            u,
            i,
            c,
            r,
            n
          ), lu(8, i);
          break;
        case 23:
          break;
        case 22:
          var M = i.stateNode;
          i.memoizedState !== null ? M._visibility & 2 ? on(
            u,
            i,
            c,
            r,
            n
          ) : iu(
            u,
            i
          ) : (M._visibility |= 2, on(
            u,
            i,
            c,
            r,
            n
          )), n && y & 2048 && Xs(
            i.alternate,
            i
          );
          break;
        case 24:
          on(
            u,
            i,
            c,
            r,
            n
          ), n && y & 2048 && Ws(i.alternate, i);
          break;
        default:
          on(
            u,
            i,
            c,
            r,
            n
          );
      }
      e = e.sibling;
    }
  }
  function iu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, l = e, n = l.flags;
        switch (l.tag) {
          case 22:
            iu(a, l), n & 2048 && Xs(
              l.alternate,
              l
            );
            break;
          case 24:
            iu(a, l), n & 2048 && Ws(l.alternate, l);
            break;
          default:
            iu(a, l);
        }
        e = e.sibling;
      }
  }
  var Yl = 8192;
  function Tl(t, e, a) {
    if (t.subtreeFlags & Yl)
      for (t = t.child; t !== null; )
        Ad(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function Ad(t, e, a) {
    switch (t.tag) {
      case 26:
        Tl(
          t,
          e,
          a
        ), t.flags & Yl && (t.memoizedState !== null ? ip(
          a,
          ia,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && vA(a, t)));
        break;
      case 5:
        Tl(
          t,
          e,
          a
        ), t.flags & Yl && (t = t.stateNode, (e & 335544128) === e && vA(a, t));
        break;
      case 3:
      case 4:
        var l = ia;
        ia = Au(t.stateNode.containerInfo), Tl(
          t,
          e,
          a
        ), ia = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Yl, Yl = 16777216, Tl(
          t,
          e,
          a
        ), Yl = l) : Tl(
          t,
          e,
          a
        ));
        break;
      case 30:
        if ((t.flags & Yl) !== 0 && (l = t.memoizedProps.name, l != null && l !== "auto")) {
          var n = t.stateNode;
          n.paired = null, Ze === null && (Ze = /* @__PURE__ */ new Map()), Ze.set(l, n);
        }
        Tl(
          t,
          e,
          a
        );
        break;
      default:
        Tl(
          t,
          e,
          a
        );
    }
  }
  function gd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function cu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          he = l, pd(
            l,
            t
          );
        }
      gd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        md(t), t = t.sibling;
  }
  function md(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        cu(t), t.flags & 2048 && $a(9, t, t.return);
        break;
      case 3:
        cu(t);
        break;
      case 12:
        cu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Si(t)) : cu(t);
        break;
      default:
        cu(t);
    }
  }
  function Si(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          he = l, pd(
            l,
            t
          );
        }
      gd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          $a(8, e, e.return), Si(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, Si(e));
          break;
        default:
          Si(e);
      }
      t = t.sibling;
    }
  }
  function pd(t, e) {
    for (; he !== null; ) {
      var a = he;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          $a(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Kn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, he = l;
      else
        t: for (a = t; he !== null; ) {
          l = he;
          var n = l.sibling, u = l.return;
          if (id(l), l === a) {
            he = null;
            break t;
          }
          if (n !== null) {
            n.return = u, he = n;
            break t;
          }
          he = u;
        }
    }
  }
  var em = {
    getCacheForType: function(t) {
      var e = me(te), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return me(te).controller.signal;
    }
  }, am = typeof WeakMap == "function" ? WeakMap : Map, St = 0, Ot = null, wt = null, Mt = 0, Tt = 0, Ke = null, el = !1, fn = !1, Ps = !1, Na = 0, Wt = 0, al = 0, Gl = 0, Yi = 0, Le = 0, rn = 0, su = null, Re = null, _s = !1, Ti = 0, yd = 0, Gi = 1 / 0, ki = null, ll = null, Ft = 0, sa = null, kl = null, ba = 0, $s = 0, to = null, bd = null, hn = null, dn = null, An = null, ou = 0, Ri = null;
  function Ie() {
    return (St & 2) !== 0 && Mt !== 0 ? Mt & -Mt : I.T !== null ? fo() : Vf();
  }
  function wd() {
    if (Le === 0)
      if ((Mt & 536870912) === 0 || pt) {
        var t = xu;
        xu <<= 1, (xu & 3932160) === 0 && (xu = 262144), Le = t;
      } else Le = 536870912;
    return t = pe.current, t !== null && (t.flags |= 32), Le;
  }
  function gn(t, e) {
    if (e != null) {
      var a = t.stateNode, l = a.ref;
      l === null && (l = a.ref = tA(
        Ca(t.memoizedProps, a)
      )), dn === null && (dn = []), dn.push(e.bind(null, l));
    }
  }
  function Ne(t, e, a) {
    (t === Ot && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null) && (mn(t, 0), nl(
      t,
      Mt,
      Le,
      !1
    )), Yn(t, a), ((St & 2) === 0 || t !== Ot) && (t === Ot && ((St & 2) === 0 && (Gl |= a), Wt === 4 && nl(
      t,
      Mt,
      Le,
      !1
    )), wa(t));
  }
  function vd(t, e, a) {
    if ((St & 6) !== 0) throw Error(f(327));
    var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Sn(t, e), n = l ? um(t, e) : ao(t, e, !0), u = l;
    do {
      if (n === 0) {
        fn && !l && nl(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, u && !lm(a)) {
          n = ao(t, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var c = t;
              n = su;
              var r = c.current.memoizedState.isDehydrated;
              if (r && (mn(c, i).flags |= 256), i = ao(
                c,
                i,
                !1
              ), i !== 2 && i !== 6) {
                if (Ps && !r) {
                  c.errorRecoveryDisabledLanes |= u, Gl |= u, n = 4;
                  break t;
                }
                u = Re, Re = n, u !== null && (Re === null ? Re = u : Re.push.apply(
                  Re,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          mn(t, 0), nl(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, u = n, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              nl(
                l,
                e,
                Le,
                !el
              );
              break t;
            case 2:
              Re = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (n = Ti + 300 - Qe(), 10 < n)) {
            if (nl(
              l,
              e,
              Le,
              !el
            ), Yu(l, 0, !0) !== 0) break t;
            ba = e, l.timeoutHandle = Vo(
              Vd.bind(
                null,
                l,
                a,
                Re,
                ki,
                _s,
                e,
                Le,
                Gl,
                rn,
                el,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Vd(
            l,
            a,
            Re,
            ki,
            _s,
            e,
            Le,
            Gl,
            rn,
            el,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    wa(t);
  }
  function Vd(t, e, a, l, n, u, i, c, r, y, M, B, m, v) {
    t.timeoutHandle = -1;
    var Q = e.subtreeFlags, F = (u & 335544064) === u;
    if (B = null, (F || Q & 8192 || (Q & 16785408) === 16785408) && (B = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: fa
    }, Ze = null, Ad(
      e,
      u,
      B
    ), F && (Q = B, F = t.containerInfo, F = (F.nodeType === 9 ? F : F.ownerDocument).__reactViewTransition, F != null && (Q.count++, Q.waitingForViewTransition = !0, Q = pu.bind(Q), F.finished.then(Q, Q))), Q = (u & 62914560) === u ? Ti - Qe() : (u & 4194048) === u ? yd - Qe() : 0, Q = cp(
      B,
      Q
    ), Q !== null)) {
      ba = u, t.cancelPendingCommit = Q(
        Yd.bind(
          null,
          t,
          e,
          u,
          a,
          l,
          n,
          i,
          c,
          r,
          y,
          M,
          B,
          null,
          m,
          v
        )
      ), nl(t, u, i, !y);
      return;
    }
    Yd(
      t,
      e,
      u,
      a,
      l,
      n,
      i,
      c,
      r,
      y,
      M,
      B
    );
  }
  function lm(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], u = n.getSnapshot;
          n = n.value;
          try {
            if (!He(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null)
        a.return = e, e = a;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function nl(t, e, a, l) {
    e = pf(t, e), e &= ~Yi, e &= ~Gl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - ze(n), i = 1 << u;
      l[u] = -1, n &= ~i;
    }
    a !== 0 && bf(t, a, e);
  }
  function Ni() {
    return (St & 6) === 0 ? (fu(0), !1) : !0;
  }
  function eo() {
    if (wt !== null) {
      if (Tt === 0)
        var t = wt.return;
      else
        t = wt, Sa = wl = null, os(t), en = null, Fn = 0, t = wt;
      for (; t !== null; )
        Lh(t.alternate, t), t = t.return;
      wt = null;
    }
  }
  function mn(t, e) {
    var a = t.timeoutHandle;
    return a !== -1 && (t.timeoutHandle = -1, Dm(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), ba = 0, eo(), Ot = t, wt = a = Da(t.current, null), Mt = e, Tt = 0, Ke = null, el = !1, fn = Sn(t, e), Ps = !1, rn = Le = Yi = Gl = al = Wt = 0, Re = su = null, _s = !1, Na = pf(t, e), Zu(), a;
  }
  function Md(t, e) {
    At = null, I.H = Ai, e === tn || e === ti ? (e = Yr(), Tt = 3) : e === Wc ? (e = Yr(), Tt = 4) : Tt = e === Es ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ke = e, wt === null && (Wt = 1, gi(
      t,
      Pe(e, t.current)
    ));
  }
  function Ed() {
    var t = pe.current;
    return t === null ? !0 : (Mt & 4194048) === Mt ? Ve === null : (Mt & 62914560) === Mt || (Mt & 536870912) !== 0 ? t === Ve : !1;
  }
  function Cd() {
    var t = I.H;
    return I.H = Ai, t === null ? Ai : t;
  }
  function Bd() {
    var t = I.A;
    return I.A = em, t;
  }
  function Ui() {
    Wt = 4, el || (Mt & 4194048) !== Mt && pe.current !== null || (fn = !0), (al & 134217727) === 0 && (Gl & 134217727) === 0 || Ot === null || nl(
      Ot,
      Mt,
      Le,
      !1
    );
  }
  function ao(t, e, a) {
    var l = St;
    St |= 2;
    var n = Cd(), u = Bd();
    (Ot !== t || Mt !== e) && (ki = null, mn(t, e)), e = !1;
    var i = Wt;
    t: do
      try {
        if (Tt !== 0 && wt !== null) {
          var c = wt, r = Ke;
          switch (Tt) {
            case 8:
              eo(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              pe.current === null && (e = !0);
              var y = Tt;
              if (Tt = 0, Ke = null, pn(t, c, r, y), a && fn) {
                i = 0;
                break t;
              }
              break;
            default:
              y = Tt, Tt = 0, Ke = null, pn(t, c, r, y);
          }
        }
        nm(), i = Wt;
        break;
      } catch (M) {
        Md(t, M);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Sa = wl = null, St = l, I.H = n, I.A = u, wt === null && (Ot = null, Mt = 0, Zu()), i;
  }
  function nm() {
    for (; wt !== null; ) Dd(wt);
  }
  function um(t, e) {
    var a = St;
    St |= 2;
    var l = Cd(), n = Bd();
    Ot !== t || Mt !== e ? (ki = null, Gi = Qe() + 500, mn(t, e)) : fn = Sn(
      t,
      e
    );
    t: do
      try {
        if (Tt !== 0 && wt !== null) {
          e = wt;
          var u = Ke;
          e: switch (Tt) {
            case 1:
              Tt = 0, Ke = null, pn(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (xr(u)) {
                Tt = 0, Ke = null, xd(e);
                break;
              }
              e = function() {
                Tt !== 2 && Tt !== 9 || Ot !== t || (Tt = 7), wa(t);
              }, u.then(e, e);
              break t;
            case 3:
              Tt = 7;
              break t;
            case 4:
              Tt = 5;
              break t;
            case 7:
              xr(u) ? (Tt = 0, Ke = null, xd(e)) : (Tt = 0, Ke = null, pn(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (wt.tag) {
                case 26:
                  i = wt.memoizedState;
                case 5:
                case 27:
                  var c = wt;
                  if (i ? bA(i) : c.stateNode.complete) {
                    Tt = 0, Ke = null;
                    var r = c.sibling;
                    if (r !== null) wt = r;
                    else {
                      var y = c.return;
                      y !== null ? (wt = y, Qi(y)) : wt = null;
                    }
                    break e;
                  }
              }
              Tt = 0, Ke = null, pn(t, e, u, 5);
              break;
            case 6:
              Tt = 0, Ke = null, pn(t, e, u, 6);
              break;
            case 8:
              eo(), Wt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        im();
        break;
      } catch (M) {
        Md(t, M);
      }
    while (!0);
    return Sa = wl = null, I.H = l, I.A = n, St = a, wt !== null ? 0 : (Ot = null, Mt = 0, Zu(), Wt);
  }
  function im() {
    for (; wt !== null && !M0(); )
      Dd(wt);
  }
  function Dd(t) {
    var e = Zh(t.alternate, t, Na);
    t.memoizedProps = t.pendingProps, e === null ? Qi(t) : wt = e;
  }
  function xd(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Uh(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Mt
        );
        break;
      case 11:
        e = Uh(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Mt
        );
        break;
      case 5:
        os(e);
        var l = e;
        l === fe && (pt ? (Xu(l), l.tag === 5 && l.stateNode != null && (jt = l.stateNode)) : (Xu(l), pt = !0));
      default:
        Lh(a, e), e = wt = pr(e, Na), e = Zh(a, e, Na);
    }
    t.memoizedProps = t.pendingProps, e === null ? Qi(t) : wt = e;
  }
  function pn(t, e, a, l) {
    Sa = wl = null, os(e), en = null, Fn = 0;
    var n = e.return;
    try {
      if (Fg(
        t,
        n,
        e,
        a,
        Mt
      )) {
        Wt = 1, gi(
          t,
          Pe(a, t.current)
        ), wt = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw wt = n, u;
      Wt = 1, gi(
        t,
        Pe(a, t.current)
      ), wt = null;
      return;
    }
    e.flags & 32768 ? (pt || l === 1 ? t = !0 : fn || (Mt & 536870912) !== 0 ? t = !1 : (el = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = pe.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Sd(e, t)) : Qi(e);
  }
  function Qi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Sd(
          e,
          el
        );
        return;
      }
      t = e.return;
      var a = Pg(
        e.alternate,
        e,
        Na
      );
      if (a !== null) {
        wt = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        wt = e;
        return;
      }
      wt = e = t;
    } while (e !== null);
    Wt === 0 && (Wt = 5);
  }
  function Sd(t, e) {
    do {
      var a = _g(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, wt = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        wt = t;
        return;
      }
      wt = t = a;
    } while (t !== null);
    Wt = 6, wt = null;
  }
  function Yd(t, e, a, l, n, u, i, c, r, y, M, B) {
    t.cancelPendingCommit = null;
    do
      Oi();
    while (Ft !== 0);
    if ((St & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      t === Ot && (wt = Ot = null, Mt = 0), kl = e, sa = t, ba = a, to = n, bd = l, cm(
        t,
        e,
        a,
        i,
        c,
        r,
        B
      );
    }
  }
  function cm(t, e, a, l, n, u, i) {
    var c = e.lanes | e.childLanes;
    if ($s = c, c |= Qc, k0(
      t,
      a,
      c,
      l,
      n,
      u
    ), dn = null, (a & 335544064) === a ? (An = Ng(t), l = 10262) : (An = null, l = 10256), (e.subtreeFlags & l) !== 0 || (e.flags & l) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, dm(Bu, function() {
      return io(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Mi = !1, l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
      l = I.T, I.T = null, n = nt.p, nt.p = 2, u = St, St |= 4;
      try {
        $g(t, e, a);
      } finally {
        St = u, nt.p = n, I.T = l;
      }
    }
    Ft = 1, Mi ? hn = km(
      i,
      t.containerInfo,
      An,
      lo,
      no,
      om,
      uo,
      io,
      sm
    ) : (lo(), no(), uo());
  }
  function sm(t) {
    if (Ft !== 0) {
      var e = sa.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function om() {
    Ft === 3 && (Ft = 0, hd(kl, sa), Ft = 4);
  }
  function lo() {
    if (Ft === 1) {
      Ft = 0;
      var t = sa, e = kl, a = ba, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = I.T, I.T = null;
        var n = nt.p;
        nt.p = 2;
        var u = St;
        St |= 4;
        try {
          uu = Bi = !1, fd(e, t, a), a = bo;
          var i = cr(t.containerInfo), c = a.focusedElem, r = a.selectionRange;
          if (i !== c && c && c.ownerDocument && ir(
            c.ownerDocument.documentElement,
            c
          )) {
            if (r !== null && Gc(c)) {
              var y = r.start, M = r.end;
              if (M === void 0 && (M = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  M,
                  c.value.length
                );
              else {
                var B = c.ownerDocument || document, m = B && B.defaultView || window;
                if (m.getSelection) {
                  var v = m.getSelection(), Q = c.textContent.length, F = Math.min(r.start, Q), gt = r.end === void 0 ? F : Math.min(r.end, Q);
                  !v.extend && F > gt && (i = gt, gt = F, F = i);
                  var p = ur(
                    c,
                    F
                  ), d = ur(
                    c,
                    gt
                  );
                  if (p && d && (v.rangeCount !== 1 || v.anchorNode !== p.node || v.anchorOffset !== p.offset || v.focusNode !== d.node || v.focusOffset !== d.offset)) {
                    var b = B.createRange();
                    b.setStart(p.node, p.offset), v.removeAllRanges(), F > gt ? (v.addRange(b), v.extend(d.node, d.offset)) : (b.setEnd(d.node, d.offset), v.addRange(b));
                  }
                }
              }
            }
            for (B = [], v = c; v = v.parentNode; )
              v.nodeType === 1 && B.push({
                element: v,
                left: v.scrollLeft,
                top: v.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < B.length; c++) {
              var C = B[c];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          Cn = !!yo, bo = yo = null;
        } finally {
          St = u, nt.p = n, I.T = l;
        }
      }
      t.current = e, Ft = 2;
    }
  }
  function no() {
    if (Ft === 2) {
      Ft = 0;
      var t = sa, e = kl, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = I.T, I.T = null;
        var l = nt.p;
        nt.p = 2;
        var n = St;
        St |= 4;
        try {
          nd(t, e.alternate, e);
        } finally {
          St = n, nt.p = l, I.T = a;
        }
      }
      Ft = 3;
    }
  }
  function uo() {
    if (Ft === 4 || Ft === 3) {
      Ft = 0;
      var t = hn;
      hn = null, E0();
      var e = sa, a = kl, l = ba, n = bd, u = (l & 335544064) === l ? 10262 : 10256;
      if ((a.subtreeFlags & u) !== 0 || (a.flags & u) !== 0 ? Ft = 5 : (Ft = 0, kl = sa = null, Td(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (ll = null), Ac(l), a = a.stateNode, Oe && typeof Oe.onCommitFiberRoot == "function")
        try {
          Oe.onCommitFiberRoot(
            xn,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        a = I.T, u = nt.p, nt.p = 2, I.T = null;
        try {
          for (var i = e.onRecoverableError, c = 0; c < n.length; c++) {
            var r = n[c];
            i(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          I.T = a, nt.p = u;
        }
      }
      if (n = dn, i = An, An = null, n !== null && (dn = null, i === null && (i = []), t !== null))
        for (r = 0; r < n.length; r++)
          a = (0, n[r])(
            i
          ), a !== void 0 && t.finished.finally(a);
      (ba & 3) !== 0 && Oi(), wa(e), u = e.pendingLanes, (l & 261930) !== 0 && (u & 42) !== 0 ? e === Ri ? ou++ : (ou = 0, Ri = e) : (ou = 0, Ri = null), fu(0);
    }
  }
  function Td(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Kn(e)));
  }
  function Oi() {
    return hn !== null && (hn.skipTransition(), hn = null), lo(), no(), uo(), io();
  }
  function io() {
    if (Ft !== 5) return !1;
    var t = sa, e = $s;
    $s = 0;
    var a = Ac(ba), l = I.T, n = nt.p;
    try {
      nt.p = 32 > a ? 32 : a, I.T = null, a = to, to = null;
      var u = sa, i = ba;
      if (Ft = 0, kl = sa = null, ba = 0, (St & 6) !== 0) throw Error(f(331));
      var c = St;
      if (St |= 4, md(u.current), dd(
        u,
        u.current,
        i,
        a
      ), St = c, fu(0, !1), Oe && typeof Oe.onPostCommitFiberRoot == "function")
        try {
          Oe.onPostCommitFiberRoot(xn, u);
        } catch {
        }
      return !0;
    } finally {
      nt.p = n, I.T = l, Td(t, e);
    }
  }
  function Gd(t, e, a) {
    e = Pe(a, e), e = Ms(t.stateNode, e, 2), t = Xa(t, e, 2), t !== null && (Yn(t, 2), wa(t));
  }
  function Gt(t, e, a) {
    if (t.tag === 3)
      Gd(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Gd(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ll === null || !ll.has(l))) {
            t = Pe(a, t), a = xh(2), l = Xa(e, a, 2), l !== null && (Sh(
              a,
              l,
              e,
              t
            ), Yn(l, 2), wa(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function co(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new am();
      var n = /* @__PURE__ */ new Set();
      l.set(e, n);
    } else
      n = l.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(e, n));
    n.has(a) || (Ps = !0, n.add(a), t = fm.bind(null, t, e, a), e.then(t, t));
  }
  function fm(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Ot === t && (Mt & a) === a && ((Wt === 4 || Wt === 3 && (Mt & 62914560) === Mt && 300 > Qe() - Ti) && (St & 2) === 0 ? mn(t, 0) : Yi |= a, rn === Mt && (rn = 0)), wa(t);
  }
  function kd(t, e) {
    e === 0 && (e = yf()), t = pl(t, e), t !== null && (Yn(t, e), wa(t));
  }
  function rm(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), kd(t, a);
  }
  function hm(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, n = t.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    l !== null && l.delete(e), kd(t, a);
  }
  function dm(t, e) {
    return fc(t, e);
  }
  var yn = null, bn = null, so = !1, zi = !1, oo = !1, ul = 0;
  function wa(t) {
    t !== bn && t.next === null && (bn === null ? yn = bn = t : bn = bn.next = t), zi = !0, so || (so = !0, gm());
  }
  function fu(t, e) {
    if (!oo && zi) {
      oo = !0;
      do
        for (var a = !1, l = yn; l !== null; ) {
          if (t !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = l.suspendedLanes, c = l.pingedLanes;
              u = (1 << 31 - ze(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, Qd(l, u));
          } else
            u = Mt, u = Yu(
              l,
              l === Ot ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || Sn(l, u) || (a = !0, Qd(l, u));
          l = l.next;
        }
      while (a);
      oo = !1;
    }
  }
  function Am() {
    Rd();
  }
  function Rd() {
    zi = so = !1;
    var t = 0;
    ul !== 0 && Bm() && (t = ul);
    for (var e = Qe(), a = null, l = yn; l !== null; ) {
      var n = l.next, u = Nd(l, e);
      u === 0 ? (l.next = null, a === null ? yn = n : a.next = n, n === null && (bn = a)) : (a = l, (t !== 0 || (u & 3) !== 0) && (zi = !0)), l = n;
    }
    Ft !== 0 && Ft !== 5 || fu(t), ul !== 0 && (ul = 0);
  }
  function Nd(t, e) {
    for (var a = t.suspendedLanes, l = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - ze(u), c = 1 << i, r = n[i];
      r === -1 ? ((c & a) === 0 || (c & l) !== 0) && (n[i] = G0(c, e)) : r <= e && (t.expiredLanes |= c), u &= ~c;
    }
    if (e = Ot, a = Mt, a = Yu(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, a === 0 || t === e && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && rc(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Sn(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (l !== null && rc(l), Ac(a)) {
        case 2:
        case 8:
          a = gf;
          break;
        case 32:
          a = Bu;
          break;
        case 268435456:
          a = mf;
          break;
        default:
          a = Bu;
      }
      return l = Ud.bind(null, t), a = fc(a, l), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return l !== null && l !== null && rc(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Ud(t, e) {
    if (Ft !== 0 && Ft !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (Oi() && t.callbackNode !== a)
      return null;
    var l = Mt;
    return l = Yu(
      t,
      t === Ot ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (vd(t, l, e), Nd(t, Qe()), t.callbackNode != null && t.callbackNode === a ? Ud.bind(null, t) : null);
  }
  function Qd(t, e) {
    if (Oi()) return null;
    vd(t, e, !0);
  }
  function gm() {
    xm(function() {
      (St & 6) !== 0 ? fc(
        Af,
        Am
      ) : Rd();
    });
  }
  function fo() {
    if (ul === 0) {
      var t = Ml;
      t === 0 && (t = Du, Du <<= 1, (Du & 261888) === 0 && (Du = 256)), ul = t;
    }
    return ul;
  }
  function Od(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Nu(t);
  }
  function mm(t, e, a, l, n) {
    if (e === "submit" && a && a.stateNode === n) {
      var u = Od(
        (n[Ye] || null).action
      ), i = l.submitter;
      i && (e = (e = i[Ye] || null) ? Od(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var c = new zu(
        "action",
        "action",
        null,
        l,
        n
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ul !== 0) {
                  var r = new FormData(n, i);
                  ys(
                    a,
                    {
                      pending: !0,
                      data: r,
                      method: n.method,
                      action: u
                    },
                    null,
                    r
                  );
                }
              } else
                typeof u == "function" && (c.preventDefault(), r = new FormData(n, i), ys(
                  a,
                  {
                    pending: !0,
                    data: r,
                    method: n.method,
                    action: u
                  },
                  u,
                  r
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var ro = 0; ro < Uc.length; ro++) {
    var ho = Uc[ro], pm = ho.toLowerCase(), ym = ho[0].toUpperCase() + ho.slice(1);
    na(
      pm,
      "on" + ym
    );
  }
  na(fr, "onAnimationEnd"), na(rr, "onAnimationIteration"), na(hr, "onAnimationStart"), na("dblclick", "onDoubleClick"), na("focusin", "onFocus"), na("focusout", "onBlur"), na(Dg, "onTransitionRun"), na(xg, "onTransitionStart"), na(Sg, "onTransitionCancel"), na(dr, "onTransitionEnd"), jl("onMouseEnter", ["mouseout", "mouseover"]), jl("onMouseLeave", ["mouseout", "mouseover"]), jl("onPointerEnter", ["pointerout", "pointerover"]), jl("onPointerLeave", ["pointerout", "pointerover"]), Al(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Al(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Al("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Al(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Al(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Al(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ru = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), bm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru)
  );
  function zd(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a], n = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = l.length - 1; 0 <= i; i--) {
            var c = l[i], r = c.instance, y = c.currentTarget;
            if (c = c.listener, r !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (M) {
              qu(M);
            }
            n.currentTarget = null, u = r;
          }
        else
          for (i = 0; i < l.length; i++) {
            if (c = l[i], r = c.instance, y = c.currentTarget, c = c.listener, r !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (M) {
              qu(M);
            }
            n.currentTarget = null, u = r;
          }
      }
    }
  }
  function vt(t, e) {
    var a = e[Ef];
    a === void 0 && (a = e[Ef] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    a.has(l) || (jd(e, t, 2, !1), a.add(l));
  }
  function Ao(t, e, a) {
    var l = 0;
    e && (l |= 4), jd(
      a,
      t,
      l,
      e
    );
  }
  var ji = "_reactListening" + Math.random().toString(36).slice(2);
  function go(t) {
    if (!t[ji]) {
      t[ji] = !0, Df.forEach(function(a) {
        a !== "selectionchange" && (bm.has(a) || Ao(a, !1, t), Ao(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ji] || (e[ji] = !0, Ao("selectionchange", !1, e));
    }
  }
  function jd(t, e, a, l) {
    switch (SA(e)) {
      case 2:
        var n = rp;
        break;
      case 8:
        n = hp;
        break;
      default:
        n = No;
    }
    a = n.bind(
      null,
      e,
      a,
      t
    ), n = void 0, !Vc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), l ? n !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, a, !0) : n !== void 0 ? t.addEventListener(e, a, {
      passive: n
    }) : t.addEventListener(e, a, !1);
  }
  function mo(t, e, a, l, n) {
    var u = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var i = l.tag;
        if (i === 3 || i === 4) {
          var c = l.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = l.return; i !== null; ) {
              var r = i.tag;
              if ((r === 3 || r === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = dl(c), i === null) return;
            if (r = i.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              l = u = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        l = l.return;
      }
    jf(function() {
      var y = u, M = wc(a), B = [];
      t: {
        var m = Ar.get(t);
        if (m !== void 0) {
          var v = zu, Q = t;
          switch (t) {
            case "keypress":
              if (Qu(a) === 0) break t;
            case "keydown":
            case "keyup":
              v = lg;
              break;
            case "focusin":
              Q = "focus", v = Bc;
              break;
            case "focusout":
              Q = "blur", v = Bc;
              break;
            case "beforeblur":
            case "afterblur":
              v = Bc;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = Zf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = L0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = sg;
              break;
            case fr:
            case rr:
            case hr:
              v = J0;
              break;
            case dr:
              v = fg;
              break;
            case "scroll":
            case "scrollend":
              v = Z0;
              break;
            case "wheel":
              v = hg;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = W0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = Lf;
              break;
            case "submit":
              v = ig;
              break;
            case "toggle":
            case "beforetoggle":
              v = Ag;
          }
          var F = (e & 4) !== 0, gt = !F && (t === "scroll" || t === "scrollend"), p = F ? m !== null ? m + "Capture" : null : m;
          F = [];
          for (var d = y, b; d !== null; ) {
            var C = d;
            if (b = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || b === null || p === null || (C = kn(d, p), C != null && F.push(
              hu(d, C, b)
            )), gt) break;
            d = d.return;
          }
          0 < F.length && (m = new v(
            m,
            Q,
            null,
            a,
            M
          ), B.push({ event: m, listeners: F }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (v = t === "mouseover" || t === "pointerover", m = t === "mouseout" || t === "pointerout", v && a !== bc && (Q = a.relatedTarget || a.fromElement) && (dl(Q) || Q[Ql]))
            break t;
          (m || v) && (Q = M.window === M ? M : (v = M.ownerDocument) ? v.defaultView || v.parentWindow : window, m ? (v = a.relatedTarget || a.toElement, m = y, v = v ? dl(v) : null, v !== null && (gt = x(v), F = v.tag, v !== gt || F !== 5 && F !== 27 && F !== 6) && (v = null)) : (m = null, v = y), m !== v && (F = Zf, C = "onMouseLeave", p = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (F = Lf, C = "onPointerLeave", p = "onPointerEnter", d = "pointer"), gt = m == null ? Q : Gn(m), b = v == null ? Q : Gn(v), Q = new F(
            C,
            d + "leave",
            m,
            a,
            M
          ), Q.target = gt, Q.relatedTarget = b, C = null, dl(M) === y && (F = new F(
            p,
            d + "enter",
            v,
            a,
            M
          ), F.target = b, F.relatedTarget = gt, C = F), gt = C, F = m && v ? it(
            m,
            v,
            wm
          ) : null, m !== null && Hd(
            B,
            Q,
            m,
            F,
            !1
          ), v !== null && gt !== null && Hd(
            B,
            gt,
            v,
            F,
            !0
          )));
        }
        t: {
          if (m = y ? Gn(y) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file")
            var K = $f;
          else if (Pf(m))
            if (tr)
              K = Eg;
            else {
              K = Vg;
              var Et = vg;
            }
          else
            v = m.nodeName, !v || v.toLowerCase() !== "input" || m.type !== "checkbox" && m.type !== "radio" ? y && yc(y.elementType) && (K = $f) : K = Mg;
          if (K && (K = K(t, y))) {
            _f(
              B,
              K,
              a,
              M
            );
            break t;
          }
          Et && Et(t, m, y);
        }
        switch (Et = y ? Gn(y) : window, t) {
          case "focusin":
            (Pf(Et) || Et.contentEditable === "true") && (Il = Et, kc = y, Hn = null);
            break;
          case "focusout":
            Hn = kc = Il = null;
            break;
          case "mousedown":
            Rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rc = !1, sr(B, a, M);
            break;
          case "selectionchange":
            if (Bg) break;
          case "keydown":
          case "keyup":
            sr(B, a, M);
        }
        var tt;
        if (xc)
          t: {
            switch (t) {
              case "compositionstart":
                var ut = "onCompositionStart";
                break t;
              case "compositionend":
                ut = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ut = "onCompositionUpdate";
                break t;
            }
            ut = void 0;
          }
        else
          Ll ? Xf(t, a) && (ut = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (ut = "onCompositionStart");
        ut && (If && a.locale !== "ko" && (Ll || ut !== "onCompositionStart" ? ut === "onCompositionEnd" && Ll && (tt = Hf()) : (ja = M, Mc = "value" in ja ? ja.value : ja.textContent, Ll = !0)), Et = Hi(y, ut), 0 < Et.length && (ut = new Kf(
          ut,
          t,
          null,
          a,
          M
        ), B.push({ event: ut, listeners: Et }), tt ? ut.data = tt : (tt = Wf(a), tt !== null && (ut.data = tt)))), (tt = mg ? pg(t, a) : yg(t, a)) && (ut = Hi(y, "onBeforeInput"), 0 < ut.length && (Et = new Kf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          M
        ), B.push({
          event: Et,
          listeners: ut
        }), Et.data = tt)), mm(
          B,
          t,
          y,
          a,
          M
        );
      }
      zd(B, e);
    });
  }
  function hu(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function Hi(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = kn(t, a), n != null && l.unshift(
        hu(t, n, u)
      ), n = kn(t, e), n != null && l.push(
        hu(t, n, u)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function wm(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Hd(t, e, a, l, n) {
    for (var u = e._reactName, i = []; a !== null && a !== l; ) {
      var c = a, r = c.alternate, y = c.stateNode;
      if (c = c.tag, r !== null && r === l) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (r = y, n ? (y = kn(a, u), y != null && i.unshift(
        hu(a, y, r)
      )) : n || (y = kn(a, u), y != null && i.push(
        hu(a, y, r)
      ))), a = a.return;
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var vm = /\r\n?/g, Vm = /\u0000|\uFFFD/g;
  function qd(t) {
    return (typeof t == "string" ? t : "" + t).replace(vm, `
`).replace(Vm, "");
  }
  function Zd(t, e) {
    return e = qd(e), qd(t) === e;
  }
  function kt(t, e, a, l, n, u) {
    switch (a) {
      case "children":
        if (typeof l == "string")
          e === "body" || e === "textarea" && l === "" || ql(t, l);
        else if (typeof l == "number" || typeof l == "bigint")
          e !== "body" && ql(t, "" + l);
        else return;
        break;
      case "className":
        Ru(t, "class", l);
        break;
      case "tabIndex":
        Ru(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ru(t, a, l);
        break;
      case "style":
        Of(t, l, u);
        return;
      case "data":
        if (e !== "object") {
          Ru(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = Nu(l), t.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (a === "formAction" ? (e !== "input" && kt(t, e, "name", n.name, n, null), kt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), kt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), kt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (kt(t, e, "encType", n.encType, n, null), kt(t, e, "method", n.method, n, null), kt(t, e, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = Nu(l), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = fa);
        return;
      case "onScroll":
        l != null && vt("scroll", t);
        return;
      case "onScrollEnd":
        l != null && vt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(f(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(f(60));
            u?.__html !== a && (t.innerHTML = a);
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = Nu(l), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
        break;
      case "popover":
        vt("beforetoggle", t), vt("toggle", t), ku(t, "popover", l);
        break;
      case "xlinkActuate":
        Ma(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Ma(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Ma(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Ma(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Ma(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Ma(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Ma(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Ma(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Ma(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        ku(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N")
          a = H0.get(a) || a, ku(t, a, l);
        else return;
    }
    xt = !0;
  }
  function po(t, e, a, l, n, u) {
    switch (a) {
      case "style":
        Of(t, l, u);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(f(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(f(60));
            u?.__html !== a && (t.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof l == "string") ql(t, l);
        else if (typeof l == "number" || typeof l == "bigint")
          ql(t, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && vt("scroll", t);
        return;
      case "onScrollEnd":
        l != null && vt("scrollend", t);
        return;
      case "onClick":
        l != null && (t.onclick = fa);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!xf.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), u = a.slice(2, n ? a.length - 7 : void 0), e = t[Ye] || null, e = e != null ? e[a] : null, typeof e == "function" && t.removeEventListener(u, e, n), typeof l == "function")) {
              typeof e != "function" && e !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(u, l, n);
              break t;
            }
            xt = !0, a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : ku(t, a, l);
          }
        return;
    }
    xt = !0;
  }
  function we(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        vt("error", t), vt("load", t);
        var l = !1, n = !1, u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var i = a[u];
            if (i != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  kt(t, e, u, i, a, null);
              }
          }
        n && kt(t, e, "srcSet", a.srcSet, a, null), l && kt(t, e, "src", a.src, a, null);
        return;
      case "input":
        vt("invalid", t);
        var c = u = i = n = null, r = null, y = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var M = a[l];
            if (M != null)
              switch (l) {
                case "name":
                  n = M;
                  break;
                case "type":
                  i = M;
                  break;
                case "checked":
                  r = M;
                  break;
                case "defaultChecked":
                  y = M;
                  break;
                case "value":
                  u = M;
                  break;
                case "defaultValue":
                  c = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(f(137, e));
                  break;
                default:
                  kt(t, e, l, M, a, null);
              }
          }
        Rf(
          t,
          u,
          c,
          r,
          y,
          i,
          n,
          !1
        );
        return;
      case "select":
        vt("invalid", t), l = i = u = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (c = a[n], c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                l = c;
              default:
                kt(t, e, n, c, a, null);
            }
        e = u, a = i, t.multiple = !!l, e != null ? Hl(t, !!l, e, !1) : a != null && Hl(t, !!l, a, !0);
        return;
      case "textarea":
        vt("invalid", t), u = n = l = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (c = a[i], c != null))
            switch (i) {
              case "value":
                l = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(f(91));
                break;
              default:
                kt(t, e, i, c, a, null);
            }
        Uf(t, l, n, u);
        return;
      case "option":
        for (r in a)
          if (a.hasOwnProperty(r) && (l = a[r], l != null))
            switch (r) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                kt(t, e, r, l, a, null);
            }
        return;
      case "dialog":
        vt("beforetoggle", t), vt("toggle", t), vt("cancel", t), vt("close", t);
        break;
      case "iframe":
      case "object":
        vt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ru.length; l++)
          vt(ru[l], t);
        break;
      case "image":
        vt("error", t), vt("load", t);
        break;
      case "details":
        vt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        vt("error", t), vt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a)
          if (a.hasOwnProperty(y) && (l = a[y], l != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                kt(t, e, y, l, a, null);
            }
        return;
      default:
        if (yc(e)) {
          for (M in a)
            a.hasOwnProperty(M) && (l = a[M], l !== void 0 && po(
              t,
              e,
              M,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (l = a[c], l != null && kt(t, e, c, l, a, null));
  }
  var Mm = {};
  function Em(t, e, a, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, c = null, r = null, y = null, M = null;
        for (v in a) {
          var B = a[v];
          if (a.hasOwnProperty(v) && B != null)
            switch (v) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = B;
              default:
                l.hasOwnProperty(v) || kt(t, e, v, null, l, B);
            }
        }
        for (var m in l) {
          var v = l[m];
          if (B = a[m], l.hasOwnProperty(m) && (v != null || B != null))
            switch (m) {
              case "type":
                v !== B && (xt = !0), u = v;
                break;
              case "name":
                v !== B && (xt = !0), n = v;
                break;
              case "checked":
                v !== B && (xt = !0), y = v;
                break;
              case "defaultChecked":
                v !== B && (xt = !0), M = v;
                break;
              case "value":
                v !== B && (xt = !0), i = v;
                break;
              case "defaultValue":
                v !== B && (xt = !0), c = v;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(f(137, e));
                break;
              default:
                v !== B && kt(
                  t,
                  e,
                  m,
                  v,
                  l,
                  B
                );
            }
        }
        mc(
          t,
          i,
          c,
          r,
          y,
          M,
          u,
          n
        );
        return;
      case "select":
        v = i = c = m = null;
        for (u in a)
          if (r = a[u], a.hasOwnProperty(u) && r != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                v = r;
              default:
                l.hasOwnProperty(u) || kt(
                  t,
                  e,
                  u,
                  null,
                  l,
                  r
                );
            }
        for (n in l)
          if (u = l[n], r = a[n], l.hasOwnProperty(n) && (u != null || r != null))
            switch (n) {
              case "value":
                u !== r && (xt = !0), m = u;
                break;
              case "defaultValue":
                u !== r && (xt = !0), c = u;
                break;
              case "multiple":
                u !== r && (xt = !0), i = u;
              default:
                u !== r && kt(
                  t,
                  e,
                  n,
                  u,
                  l,
                  r
                );
            }
        e = c, a = i, l = v, m != null ? Hl(t, !!a, m, !1) : !!l != !!a && (e != null ? Hl(t, !!a, e, !0) : Hl(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        v = m = null;
        for (c in a)
          if (n = a[c], a.hasOwnProperty(c) && n != null && !l.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                kt(t, e, c, null, l, n);
            }
        for (i in l)
          if (n = l[i], u = a[i], l.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                n !== u && (xt = !0), m = n;
                break;
              case "defaultValue":
                n !== u && (xt = !0), v = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && kt(t, e, i, n, l, u);
            }
        Nf(t, m, v);
        return;
      case "option":
        for (var Q in a)
          if (m = a[Q], a.hasOwnProperty(Q) && m != null && !l.hasOwnProperty(Q))
            switch (Q) {
              case "selected":
                t.selected = !1;
                break;
              default:
                kt(
                  t,
                  e,
                  Q,
                  null,
                  l,
                  m
                );
            }
        for (r in l)
          if (m = l[r], v = a[r], l.hasOwnProperty(r) && m !== v && (m != null || v != null))
            switch (r) {
              case "selected":
                m !== v && (xt = !0), t.selected = m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                kt(
                  t,
                  e,
                  r,
                  m,
                  l,
                  v
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var F in a)
          m = a[F], a.hasOwnProperty(F) && m != null && !l.hasOwnProperty(F) && kt(t, e, F, null, l, m);
        for (y in l)
          if (m = l[y], v = a[y], l.hasOwnProperty(y) && m !== v && (m != null || v != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(f(137, e));
                break;
              default:
                kt(
                  t,
                  e,
                  y,
                  m,
                  l,
                  v
                );
            }
        return;
      default:
        if (yc(e)) {
          for (var gt in a)
            m = a[gt], a.hasOwnProperty(gt) && m !== void 0 && !l.hasOwnProperty(gt) && po(
              t,
              e,
              gt,
              void 0,
              l,
              m
            );
          for (M in l)
            m = l[M], v = a[M], !l.hasOwnProperty(M) || m === v || m === void 0 && v === void 0 || po(
              t,
              e,
              M,
              m,
              l,
              v
            );
          return;
        }
    }
    for (var p in a)
      m = a[p], a.hasOwnProperty(p) && m != null && !l.hasOwnProperty(p) && kt(t, e, p, null, l, m);
    for (B in l)
      m = l[B], v = a[B], !l.hasOwnProperty(B) || m === v || m == null && v == null || kt(t, e, B, m, l, v);
  }
  function Kd(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Cm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && Kd(i)) {
          for (i = 0, c = n.responseEnd, l += 1; l < a.length; l++) {
            var r = a[l], y = r.startTime;
            if (y > c) break;
            var M = r.transferSize, B = r.initiatorType;
            M && Kd(B) && (r = r.responseEnd, i += M * (r < c ? 1 : (c - y) / (r - y)));
          }
          if (--l, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var yo = null, bo = null;
  function du(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ld(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Id(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Fd(t, e, a, l) {
    return a = du(
      a
    ).createElement(t), a[ge] = l, a[Ye] = e, we(a, t, e), oe(a), a;
  }
  function wo(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var vo = null;
  function Bm() {
    var t = window.event;
    return t && t.type === "popstate" ? t === vo ? !1 : (vo = t, !0) : (vo = null, !1);
  }
  var Vo = typeof setTimeout == "function" ? setTimeout : void 0, Dm = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, Xd = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Vo, xm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jd < "u" ? function(t) {
    return Jd.resolve(null).then(t).catch(Sm);
  } : Vo;
  function Sm(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function il(t) {
    return t === "head";
  }
  function Wd(t, e) {
    var a = e, l = 0;
    do {
      var n = a.nextSibling;
      if (t.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            t.removeChild(n), Bn(e);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          Yo(
            t.ownerDocument.documentElement
          );
        else if (a === "head") {
          a = t.ownerDocument.head, Yo(a);
          for (var u = a.firstChild; u; ) {
            var i = u.nextSibling, c = u.nodeName;
            u[Tn] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = i;
          }
        } else
          a === "body" && Yo(t.ownerDocument.body);
      a = n;
    } while (a);
    Bn(e);
  }
  function Pd(t, e) {
    var a = t;
    t = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (t === 0) break;
          t--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = l;
    } while (a);
  }
  function _d(t, e, a) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, a != null && (t.style.viewTransitionClass = a), a = getComputedStyle(t), a.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var l = 1;
      else
        for (var n = l = 0; n < e.length; n++) {
          var u = e[n];
          0 < u.width && 0 < u.height && l++;
        }
      l === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + a.paddingTop, t.marginBottom = "-" + a.paddingBottom);
    }
  }
  function $d(t, e) {
    t = t.style, e = e.style;
    var a = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), a = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (a = e.display, t.display = a == null || typeof a == "boolean" ? "" : a, a = e.margin, a != null ? t.margin = a : (a = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = a == null || typeof a == "boolean" ? "" : a, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function Ym(t, e, a) {
    return a = a.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= a.innerHeight && t.left <= a.innerWidth
    };
  }
  function Mo(t) {
    var e = t.getBoundingClientRect(), a = getComputedStyle(t);
    return Ym(e, a, t);
  }
  function Tm(t) {
    return t.documentElement.clientHeight;
  }
  function Gm(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function km(t, e, a, l, n, u, i, c, r) {
    var y = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var M = y.startViewTransition({
        update: function() {
          var m = y.defaultView, v = m.navigation && m.navigation.transition, Q = y.fonts.status;
          l();
          var F = [];
          if (Q === "loaded" && (Tm(y), y.fonts.status === "loading" && F.push(y.fonts.ready)), Q = F.length, t !== null)
            for (var gt = t.suspenseyImages, p = 0, d = 0; d < gt.length; d++) {
              var b = gt[d];
              if (!b.complete) {
                var C = b.getBoundingClientRect();
                if (0 < C.bottom && 0 < C.right && C.top < m.innerHeight && C.left < m.innerWidth) {
                  if (p += wA(b), p > Ki) {
                    F.length = Q;
                    break;
                  }
                  b = new Promise(
                    Gm.bind(b)
                  ), F.push(b);
                }
              }
            }
          if (0 < F.length)
            return m = Promise.race([
              Promise.all(F),
              new Promise(function(K) {
                return setTimeout(K, 500);
              })
            ]).then(n, n), (v ? Promise.allSettled([v.finished, m]) : m).then(u, u);
          if (n(), v)
            return v.finished.then(
              u,
              u
            );
          u();
        },
        types: a
      });
      y.__reactViewTransition = M;
      var B = [];
      return M.ready.then(
        function() {
          for (var m = y.documentElement.getAnimations({
            subtree: !0
          }), v = 0; v < m.length; v++) {
            var Q = m[v], F = Q.effect, gt = F.pseudoElement;
            if (gt != null && gt.startsWith("::view-transition")) {
              B.push(Q), Q = F.getKeyframes();
              for (var p = gt = void 0, d = !0, b = 0; b < Q.length; b++) {
                var C = Q[b], K = C.width;
                if (gt === void 0) gt = K;
                else if (gt !== K) {
                  d = !1;
                  break;
                }
                if (K = C.height, p === void 0) p = K;
                else if (p !== K) {
                  d = !1;
                  break;
                }
                delete C.width, delete C.height, C.transform === "none" && delete C.transform;
              }
              d && gt !== void 0 && p !== void 0 && (F.setKeyframes(Q), d = getComputedStyle(
                F.target,
                F.pseudoElement
              ), d.width !== gt || d.height !== p) && (d = Q[0], d.width = gt, d.height = p, d = Q[Q.length - 1], d.width = gt, d.height = p, F.setKeyframes(Q));
            }
          }
          i();
        },
        function(m) {
          y.__reactViewTransition === M && (y.__reactViewTransition = null);
          try {
            if (typeof m == "object" && m !== null)
              switch (m.name) {
                case "InvalidStateError":
                  (m.message === "View transition was skipped because document visibility state is hidden." || m.message === "Skipping view transition because document visibility state has become hidden." || m.message === "Skipping view transition because viewport size changed." || m.message === "Transition was aborted because of invalid state") && (m = null);
              }
            m !== null && r(m);
          } finally {
            l(), n(), i();
          }
        }
      ), M.finished.finally(function() {
        for (var m = 0; m < B.length; m++)
          B[m].cancel();
        y.__reactViewTransition === M && (y.__reactViewTransition = null), c();
      }), M;
    } catch {
      return l(), n(), i(), null;
    }
  }
  function Rl(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Rl.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : X({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Rl.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, a = t.getAnimations({ subtree: !0 }), l = [], n = 0; n < a.length; n++) {
      var u = a[n].effect;
      u !== null && u.target === t && u.pseudoElement === e && l.push(a[n]);
    }
    return l;
  }, Rl.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function tA(t) {
    return {
      name: t,
      group: new Rl("group", t),
      imagePair: new Rl("image-pair", t),
      old: new Rl("old", t),
      new: new Rl("new", t)
    };
  }
  function Fe(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Fe.prototype.addEventListener = function(t, e, a) {
    var l = null, n = null;
    if (!(a != null && typeof a != "boolean" && (l = a.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (aA(u, t, e, a) === -1) {
        var i = this, c = e;
        a != null && typeof a != "boolean" && a.once === !0 && (c = function(r) {
          i.removeEventListener(
            t,
            e,
            a
          ), typeof e == "function" ? e.call(this, r) : e.handleEvent(r);
        }), l !== null && (n = i.removeEventListener.bind(
          i,
          t,
          e,
          a
        ), l.addEventListener("abort", n, { once: !0 }), n = l.removeEventListener.bind(l, "abort", n)), l = wn(a), u.push({
          type: t,
          listener: e,
          optionsOrUseCapture: a,
          attachedListener: c,
          cleanup: n
        }), w(
          this._fragmentFiber.child,
          !1,
          Rm,
          t,
          c,
          l
        );
      }
      this._eventListeners = u;
    }
  };
  function Rm(t, e, a, l) {
    return Z(t).addEventListener(
      e,
      a,
      l
    ), !1;
  }
  Fe.prototype.removeEventListener = function(t, e, a) {
    var l = this._eventListeners;
    if (l !== null && (e = aA(
      l,
      t,
      e,
      a
    ), e !== -1)) {
      var n = l[e];
      a = n.attachedListener;
      var u = n.cleanup;
      n = wn(n.optionsOrUseCapture), w(
        this._fragmentFiber.child,
        !1,
        Nm,
        t,
        a,
        n
      ), l.splice(e, 1), u !== null && u();
    }
  };
  function Nm(t, e, a, l) {
    return Z(t).removeEventListener(
      e,
      a,
      l
    ), !1;
  }
  function wn(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function eA(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function aA(t, e, a, l) {
    if (t.length === 0) return -1;
    l = eA(l);
    for (var n = 0; n < t.length; n++) {
      var u = t[n];
      if (u.type === e && u.listener === a && eA(u.optionsOrUseCapture) === l)
        return n;
    }
    return -1;
  }
  Fe.prototype.dispatchEvent = function(t) {
    var e = q(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = Z(e);
    var a = this._eventListeners;
    if (a !== null && 0 < a.length || !t.bubbles) {
      var l = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (a)
        for (var n = 0; n < a.length; n++) {
          var u = a[n];
          l.addEventListener(
            u.type,
            u.attachedListener,
            wn(u.optionsOrUseCapture)
          );
        }
      if (e.appendChild(l), t = l.dispatchEvent(t), a)
        for (n = 0; n < a.length; n++)
          u = a[n], l.removeEventListener(
            u.type,
            u.attachedListener,
            wn(u.optionsOrUseCapture)
          );
      return e.removeChild(l), t;
    }
    return e.dispatchEvent(t);
  }, Fe.prototype.focus = function(t) {
    w(
      this._fragmentFiber.child,
      !0,
      lA,
      t,
      void 0,
      void 0
    );
  };
  function lA(t, e) {
    return t.tag === 6 ? !1 : (t = Z(t), Fm(t, e));
  }
  Fe.prototype.focusLast = function(t) {
    var e = [];
    w(
      this._fragmentFiber.child,
      !0,
      Eo,
      e,
      void 0,
      void 0
    );
    for (var a = e.length - 1; 0 <= a && !lA(e[a], t); a--) ;
  };
  function Eo(t, e) {
    return e.push(t), !1;
  }
  Fe.prototype.blur = function() {
    var t = q(
      this._fragmentFiber
    );
    t !== null && (t = Z(t), t = du(t).activeElement, t !== null && w(
      this._fragmentFiber.child,
      !1,
      Um,
      t,
      void 0,
      void 0
    ));
  };
  function Um(t, e) {
    return t.tag === 6 ? !1 : (t = Z(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Fe.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), w(
      this._fragmentFiber.child,
      !1,
      Qm,
      t,
      void 0,
      void 0
    );
  };
  function Qm(t, e) {
    return t.tag === 6 || (t = Z(t), e.observe(t)), !1;
  }
  Fe.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), w(
        this._fragmentFiber.child,
        !1,
        Om,
        t,
        void 0,
        void 0
      );
      for (var a = e = 0; a < oa.length; a++) {
        var l = oa[a];
        l.fragmentInstance === this && l.observer === t ? t.unobserve(l.instance) : oa[e++] = l;
      }
      oa.length = e;
    }
  };
  function Om(t, e) {
    return t.tag === 6 || (t = Z(t), e.unobserve(t)), !1;
  }
  var oa = [], Co = !1;
  function zm(t, e, a) {
    oa.push({
      fragmentInstance: t,
      observer: e,
      instance: a
    }), Co || (Co = !0, Jm(function() {
      Co = !1;
      var l = oa;
      oa = [];
      for (var n = 0; n < l.length; n++) {
        var u = l[n];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  Fe.prototype.getClientRects = function() {
    var t = [];
    return w(
      this._fragmentFiber.child,
      !1,
      jm,
      t,
      void 0,
      void 0
    ), t;
  };
  function jm(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var a = t.ownerDocument.createRange();
      a.selectNodeContents(t), e.push.apply(e, a.getClientRects());
    } else
      t = Z(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Fe.prototype.getRootNode = function(t) {
    var e = q(
      this._fragmentFiber
    );
    return e === null ? this : Z(e).getRootNode(t);
  }, Fe.prototype.compareDocumentPosition = function(t) {
    var e = q(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var a = [];
    w(
      this._fragmentFiber.child,
      !1,
      Eo,
      a,
      void 0,
      void 0
    );
    var l = Z(e);
    if (a.length === 0) {
      if (a = l, J(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (a = e);
      }
      e = this._fragmentFiber;
      var n = l = a.compareDocumentPosition(t);
      return a === t ? n = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (a = ft(e)[1], a === null ? n = Node.DOCUMENT_POSITION_PRECEDING : (t = Z(a).compareDocumentPosition(
        t
      ), n = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = Z(a[0]), n = Z(a[a.length - 1]);
    var u = J(this._fragmentFiber) ? e.parentElement : l;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var i = e.compareDocumentPosition(t), c = n.compareDocumentPosition(t), r = i & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = l && u && i & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, e = l && e === t || u && n === t || r || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && e === t || !u && n === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Hm(
      e,
      this._fragmentFiber,
      a[0],
      a[a.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Hm(t, e, a, l, n) {
    var u = dl(n);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (a = !!u)
        t: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === e || u.alternate === e)) {
              a = !0;
              break t;
            }
            u = u.return;
          }
          a = !1;
        }
      return a;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return u = n.ownerDocument, n === u || n === u.documentElement || n === u.body;
      t: {
        for (u = e, e = q(e); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== e && u.alternate !== e)) {
            u = !0;
            break t;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === a) && (e = it(
      a,
      u,
      mt
    ), e === null ? e = !1 : (w(
      e,
      !0,
      lt,
      u,
      a
    ), u = ht, ht = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === l) && (e = it(
      l,
      u,
      mt
    ), e === null ? e = !1 : (w(
      e,
      !0,
      $,
      u,
      l
    ), u = ht, et = ht = null, e = u !== null)), e) : !1;
  }
  function nA(t, e) {
    var a = t.ownerDocument.createRange();
    a.selectNodeContents(t), t = a.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Fe.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(f(566));
    var e = [];
    w(
      this._fragmentFiber.child,
      !1,
      Eo,
      e,
      void 0,
      void 0
    );
    var a = t !== !1;
    if (e.length === 0) {
      var l = ft(
        this._fragmentFiber
      );
      if (l = a ? l[1] || l[0] || q(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        t = Z(l), nA(t, a);
        return;
      }
      if (l = Z(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          a = "host" in l ? l.host : null, a !== null && a.scrollIntoView(t);
          return;
        }
        l.scrollIntoView(t);
      }
    }
    for (l = a ? e.length - 1 : 0; l !== (a ? -1 : e.length); ) {
      var n = e[l];
      n.tag === 6 ? (n = Z(n), nA(n, a)) : Z(n).scrollIntoView(t), l += a ? -1 : 1;
    }
  };
  function qm(t, e) {
    return t = Z(t), uA(t, e), !1;
  }
  function uA(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function iA(t, e) {
    var a = e._eventListeners;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l];
        t.addEventListener(
          n.type,
          n.attachedListener,
          wn(n.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(u) {
      for (var i = 0, c = 0; c < oa.length; c++) {
        var r = oa[c];
        (r.fragmentInstance !== e || r.observer !== u || r.instance !== t) && (oa[i++] = r);
      }
      oa.length = i, u.observe(t);
    }), uA(t, e));
  }
  function Zm(t, e) {
    var a = e._eventListeners;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l];
        t.removeEventListener(
          n.type,
          n.attachedListener,
          wn(n.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(u) {
      typeof u.rootMargin == "string" ? zm(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Bo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bo(a), Gu(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function Km(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var n = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[Tn])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = aa(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Lm(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = aa(t.nextSibling), t === null)) return null;
    return t;
  }
  function cA(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = aa(t.nextSibling), t === null)) return null;
    return t;
  }
  function Do(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function xo(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Im(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading")
      e();
    else {
      var l = function() {
        e(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function aa(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var So = null;
  function sA(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0)
            return aa(t.nextSibling);
          e--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function oA(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else a !== "/$" && a !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Fm(t, e) {
    function a() {
      l = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var l = !1;
    try {
      t.ownerDocument.addEventListener("focus", a, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", a, !0);
    }
    return l;
  }
  function Jm(t) {
    Xd(function() {
      Xd(function(e) {
        return t(e);
      });
    });
  }
  function fA(t, e, a) {
    switch (e = du(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function rA(t, e, a) {
    for (var l in a) {
      var n = a[l];
      a.hasOwnProperty(l) && n != null && kt(t, e, l, null, Mm, n);
    }
    a.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === fa && (t.onclick = null), Gu(t);
  }
  function Yo(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Gu(t);
  }
  var la = /* @__PURE__ */ new Map(), hA = /* @__PURE__ */ new Set();
  function Au(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Ua = nt.d;
  nt.d = {
    f: Xm,
    r: Wm,
    D: Pm,
    C: _m,
    L: $m,
    m: tp,
    X: ap,
    S: ep,
    M: lp
  };
  function Xm() {
    var t = Ua.f(), e = Ni();
    return t || e;
  }
  function Wm(t) {
    var e = Ol(t);
    e !== null && e.tag === 5 && e.type === "form" ? Ah(e) : Ua.r(t);
  }
  var vn = typeof document > "u" ? null : document;
  function dA(t, e, a) {
    var l = vn;
    if (l && typeof e == "string" && e) {
      var n = Xe(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), hA.has(n) || (hA.add(n), t = { rel: t, crossOrigin: a, href: e }, l.querySelector(n) === null && (e = l.createElement("link"), we(e, "link", t), oe(e), l.head.appendChild(e)));
    }
  }
  function Pm(t) {
    Ua.D(t), dA("dns-prefetch", t, null);
  }
  function _m(t, e) {
    Ua.C(t, e), dA("preconnect", t, e);
  }
  function $m(t, e, a) {
    Ua.L(t, e, a);
    var l = vn;
    if (l && t && e) {
      var n = 'link[rel="preload"][as="' + Xe(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + Xe(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + Xe(
        a.imageSizes
      ) + '"]')) : n += '[href="' + Xe(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Vn(t);
          break;
        case "script":
          u = Mn(t);
      }
      if (!(la.has(u) || (t = X(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), la.set(u, t), l.querySelector(n) !== null || e === "style" && l.querySelector(gu(u)) || e === "script" && l.querySelector(mu(u))))) {
        var i = l.createElement("link");
        we(i, "link", t), e === "style" && (i[Tu] = !0, i.onload = i.onerror = function() {
          Bf(i);
        }), oe(i), l.head.appendChild(i);
      }
    }
  }
  function tp(t, e) {
    Ua.m(t, e);
    var a = vn;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Xe(l) + '"][href="' + Xe(t) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Mn(t);
      }
      if (!la.has(u) && (t = X({ rel: "modulepreload", href: t }, e), la.set(u, t), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(mu(u)))
              return;
        }
        l = a.createElement("link"), we(l, "link", t), oe(l), a.head.appendChild(l);
      }
    }
  }
  function ep(t, e, a) {
    Ua.S(t, e, a);
    var l = vn;
    if (l && t) {
      var n = zl(l).hoistableStyles, u = Vn(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = l.querySelector(
          gu(u)
        ))
          c.loading = 5;
        else {
          t = X(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = la.get(u)) && To(t, a);
          var r = i = l.createElement("link");
          oe(r), we(r, "link", t), r._p = new Promise(function(y, M) {
            r.onload = y, r.onerror = M;
          }), r.addEventListener("load", function() {
            c.loading |= 1;
          }), r.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, qi(i, e, l);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function ap(t, e) {
    Ua.X(t, e);
    var a = vn;
    if (a && t) {
      var l = zl(a).hoistableScripts, n = Mn(t), u = l.get(n);
      u || (u = a.querySelector(mu(n)), u || (t = X({ src: t, async: !0 }, e), (e = la.get(n)) && Go(t, e), u = a.createElement("script"), oe(u), we(u, "link", t), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function lp(t, e) {
    Ua.M(t, e);
    var a = vn;
    if (a && t) {
      var l = zl(a).hoistableScripts, n = Mn(t), u = l.get(n);
      u || (u = a.querySelector(mu(n)), u || (t = X({ src: t, async: !0, type: "module" }, e), (e = la.get(n)) && Go(t, e), u = a.createElement("script"), oe(u), we(u, "link", t), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function AA(t, e, a, l) {
    var n = (n = qt.current) ? Au(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Vn(a.href), e = zl(
          n
        ).hoistableStyles, l = e.get(a), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(a, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Vn(a.href);
          var u = zl(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            gu(t)
          )) ? u._p || (i.instance = u, i.state.loading = 5) : (u = la.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, la.set(t, u)), np(
            n,
            t,
            u,
            i.state
          ))), e && l === null)
            throw Error(f(528, ""));
          return i;
        }
        if (e && l !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Mn(a), e = zl(
          n
        ).hoistableScripts, l = e.get(a), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(a, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function Vn(t) {
    return 'href="' + Xe(t) + '"';
  }
  function gu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function gA(t) {
    return X({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function np(t, e, a, l) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[Tu] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[Tu] = !0, e.onload = e.onerror = Bf.bind(null, e), we(e, "link", a), oe(e), t.head.appendChild(e);
    l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Mn(t) {
    return '[src="' + Xe(t) + '"]';
  }
  function mu(t) {
    return "script[async]" + t;
  }
  function mA(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + Xe(a.href) + '"]'
          );
          if (l)
            return e.instance = l, oe(l), l;
          var n = X({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), oe(l), we(l, "style", n), qi(l, a.precedence, t), e.instance = l;
        case "stylesheet":
          n = Vn(a.href);
          var u = t.querySelector(
            gu(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, oe(u), u;
          l = gA(a), (n = la.get(n)) && To(l, n), u = (t.ownerDocument || t).createElement("link"), oe(u);
          var i = u;
          return i._p = new Promise(function(c, r) {
            i.onload = c, i.onerror = r;
          }), we(u, "link", l), e.state.loading |= 4, qi(u, a.precedence, t), e.instance = u;
        case "script":
          return u = Mn(a.src), (n = t.querySelector(
            mu(u)
          )) ? (e.instance = n, oe(n), n) : (l = a, (n = la.get(u)) && (l = X({}, a), Go(l, n)), t = t.ownerDocument || t, n = t.createElement("script"), oe(n), we(n, "link", l), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, qi(l, a.precedence, t));
    return e.instance;
  }
  function qi(t, e, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, u = n, i = 0; i < l.length; i++) {
      var c = l[i];
      if (c.dataset.precedence === e) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function To(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Go(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Zi = null;
  function pA(t, e, a) {
    if (Zi === null) {
      var l = /* @__PURE__ */ new Map(), n = Zi = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = Zi, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[Tn] || u[ge] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var c = l.get(i);
        c ? c.push(u) : l.set(i, [u]);
      }
    }
    return l;
  }
  function ko(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function up(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function yA(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function bA(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function wA(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function vA(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += wA(e), t.suspenseyImages.push(e)), t = sp.bind(t), e.decode().then(t, t));
  }
  function ip(t, e, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Vn(l.href), u = e.querySelector(
          gu(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = pu.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = u, oe(u);
          return;
        }
        u = e.ownerDocument || e, l = gA(l), (n = la.get(n)) && To(l, n), u = u.createElement("link"), oe(u);
        var i = u;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r;
        }), we(u, "link", l), a.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = pu.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var Ki = 0;
  function cp(t, e) {
    return t.stylesheets && t.count === 0 && Ii(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (t.stylesheets && Ii(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ki === 0 && (Ki = 62500 * Cm());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ii(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Ki ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function VA(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Ii(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function pu() {
    this.count--, VA(this);
  }
  function sp() {
    this.imgCount--, VA(this);
  }
  var Li = null;
  function Ii(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Li = /* @__PURE__ */ new Map(), e.forEach(op, t), Li = null, pu.call(t));
  }
  function op(t, e) {
    if (!(e.state.loading & 4)) {
      var a = Li.get(t);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Li.set(t, a);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), l = i);
        }
        l && a.set(null, l);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = a.get(i) || l, u === l && a.set(null, n), a.set(i, n), this.count++, l = pu.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var En = {
    $$typeof: Dt,
    Provider: null,
    Consumer: null,
    _currentValue: E,
    _currentValue2: E,
    _threadCount: 0
  };
  function fp(t, e, a, l, n, u, i, c, r) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hc(0), this.hiddenUpdates = hc(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function MA(t, e, a, l, n, u, i, c, r, y, M, B) {
    return t = new fp(
      t,
      e,
      a,
      i,
      r,
      y,
      M,
      B,
      c
    ), e = 1, u === !0 && (e |= 24), u = Te(3, null, null, e), t.current = u, u.stateNode = t, e = Fc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: e
    }, Pc(u), t;
  }
  function EA(t) {
    return t ? (t = Xl, t) : Xl;
  }
  function CA(t, e, a, l, n, u) {
    n = EA(n), l.context === null ? l.context = n : l.pendingContext = n, l = Ja(e), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Xa(t, l, e), a !== null && (Ne(a, t, e), Jn(a, t, e));
  }
  function BA(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Ro(t, e) {
    BA(t, e), (t = t.alternate) && BA(t, e);
  }
  function DA(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = pl(t, 67108864);
      e !== null && Ne(e, t, 67108864), Ro(t, 67108864);
    }
  }
  function xA(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ie();
      e = dc(e);
      var a = pl(t, e);
      a !== null && Ne(a, t, e), Ro(t, e);
    }
  }
  var Cn = !0;
  function rp(t, e, a, l) {
    var n = I.T;
    I.T = null;
    var u = nt.p;
    try {
      nt.p = 2, No(t, e, a, l);
    } finally {
      nt.p = u, I.T = n;
    }
  }
  function hp(t, e, a, l) {
    var n = I.T;
    I.T = null;
    var u = nt.p;
    try {
      nt.p = 8, No(t, e, a, l);
    } finally {
      nt.p = u, I.T = n;
    }
  }
  function No(t, e, a, l) {
    if (Cn) {
      var n = Uo(l);
      if (n === null)
        mo(
          t,
          e,
          l,
          Fi,
          a
        ), YA(t, l);
      else if (Ap(
        n,
        t,
        e,
        a,
        l
      ))
        l.stopPropagation();
      else if (YA(t, l), e & 4 && -1 < dp.indexOf(t)) {
        for (; n !== null; ) {
          var u = Ol(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = hl(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var r = 1 << 31 - ze(i);
                      c.entanglements[1] |= r, i &= ~r;
                    }
                    wa(u), (St & 6) === 0 && (Gi = Qe() + 500, fu(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = pl(u, 2), c !== null && Ne(c, u, 2), Ni(), Ro(u, 2);
            }
          if (u = Uo(l), u === null && mo(
            t,
            e,
            l,
            Fi,
            a
          ), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else
        mo(
          t,
          e,
          l,
          null,
          a
        );
    }
  }
  function Uo(t) {
    return t = wc(t), Qo(t);
  }
  var Fi = null;
  function Qo(t) {
    if (Fi = null, t = dl(t), t !== null) {
      var e = x(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = Y(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = k(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Fi = t, null;
  }
  function SA(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (C0()) {
          case Af:
            return 2;
          case gf:
            return 8;
          case Bu:
          case B0:
            return 32;
          case mf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Oo = !1, cl = null, sl = null, ol = null, yu = /* @__PURE__ */ new Map(), bu = /* @__PURE__ */ new Map(), fl = [], dp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function YA(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        cl = null;
        break;
      case "dragenter":
      case "dragleave":
        sl = null;
        break;
      case "mouseover":
      case "mouseout":
        ol = null;
        break;
      case "pointerover":
      case "pointerout":
        yu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bu.delete(e.pointerId);
    }
  }
  function wu(t, e, a, l, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = Ol(e), e !== null && DA(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function Ap(t, e, a, l, n) {
    switch (e) {
      case "focusin":
        return cl = wu(
          cl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return sl = wu(
          sl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return ol = wu(
          ol,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return yu.set(
          u,
          wu(
            yu.get(u) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, bu.set(
          u,
          wu(
            bu.get(u) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
    }
    return !1;
  }
  function TA(t) {
    var e = dl(t.target);
    if (e !== null) {
      var a = x(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = Y(a), e !== null) {
            t.blockedOn = e, Mf(t.priority, function() {
              xA(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = k(a), e !== null) {
            t.blockedOn = e, Mf(t.priority, function() {
              xA(a);
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ji(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Uo(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        bc = l, a.target.dispatchEvent(l), bc = null;
      } else
        return e = Ol(a), e !== null && DA(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function GA(t, e, a) {
    Ji(t) && a.delete(e);
  }
  function gp() {
    Oo = !1, cl !== null && Ji(cl) && (cl = null), sl !== null && Ji(sl) && (sl = null), ol !== null && Ji(ol) && (ol = null), yu.forEach(GA), bu.forEach(GA);
  }
  function Xi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Oo || (Oo = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      gp
    )));
  }
  var Wi = null;
  function kA(t) {
    Wi !== t && (Wi = t, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      function() {
        Wi === t && (Wi = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], l = t[e + 1], n = t[e + 2];
          if (typeof l != "function") {
            if (Qo(l || a) === null)
              continue;
            break;
          }
          var u = Ol(a);
          u !== null && (t.splice(e, 3), e -= 3, ys(
            u,
            {
              pending: !0,
              data: n,
              method: a.method,
              action: l
            },
            l,
            n
          ));
        }
      }
    ));
  }
  function Bn(t) {
    function e(r) {
      return Xi(r, t);
    }
    cl !== null && Xi(cl, t), sl !== null && Xi(sl, t), ol !== null && Xi(ol, t), yu.forEach(e), bu.forEach(e);
    for (var a = 0; a < fl.length; a++) {
      var l = fl[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < fl.length && (a = fl[0], a.blockedOn === null); )
      TA(a), a.blockedOn === null && fl.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], u = a[l + 1], i = n[Ye] || null;
        if (typeof u == "function")
          i || kA(a);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Ye] || null)
              c = i.formAction;
            else if (Qo(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? a[l + 1] = c : (a.splice(l, 3), l -= 3), kA(a);
        }
      }
  }
  function RA() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function zo(t) {
    this._internalRoot = t;
  }
  Pi.prototype.render = zo.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var a = e.current, l = Ie();
    CA(a, l, t, e, null, null);
  }, Pi.prototype.unmount = zo.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      CA(t.current, 2, null, t, null, null), Ni(), e[Ql] = null;
    }
  };
  function Pi(t) {
    this._internalRoot = t;
  }
  Pi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Vf();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < fl.length && e !== 0 && e < fl[a].priority; a++) ;
      fl.splice(a, 0, t), a === 0 && TA(t);
    }
  };
  var NA = o.version;
  if (NA !== "19.3.1")
    throw Error(
      f(
        527,
        NA,
        "19.3.1"
      )
    );
  nt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = H(e), t = t !== null ? T(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var mp = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_i.isDisabled && _i.supportsFiber)
      try {
        xn = _i.inject(
          mp
        ), Oe = _i;
      } catch {
      }
  }
  return Vu.createRoot = function(t, e) {
    if (!V(t)) throw Error(f(299));
    var a = !1, l = "", n = Eh, u = Ch, i = Bh;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = MA(
      t,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      n,
      u,
      i,
      RA
    ), t[Ql] = e.current, go(t), new zo(e);
  }, Vu.hydrateRoot = function(t, e, a) {
    if (!V(t)) throw Error(f(299));
    var l = !1, n = "", u = Eh, i = Ch, c = Bh, r = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (r = a.formState)), e = MA(
      t,
      1,
      !0,
      e,
      a ?? null,
      l,
      n,
      r,
      u,
      i,
      c,
      RA
    ), e.context = EA(null), a = e.current, l = Ie(), l = dc(l), n = Ja(l), n.callback = null, Xa(a, n, l), a = l, e.current.lanes = a, Yn(e, a), wa(e), t[Ql] = e.current, go(t), new Pi(e);
  }, Vu.version = "19.3.1", Vu;
}
var LA;
function Bp() {
  if (LA) return Ho.exports;
  LA = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (o) {
        console.error(o);
      }
  }
  return s(), Ho.exports = Cp(), Ho.exports;
}
var Dp = Bp();
const xp = /* @__PURE__ */ m0(Dp);
var z = of();
const de = /* @__PURE__ */ m0(z), Sp = z.createContext(null);
function Yp({
  children: s,
  didCatch: o,
  error: g,
  resetErrorBoundary: f
}) {
  const V = z.useMemo(
    () => ({ didCatch: o, error: g, resetErrorBoundary: f }),
    [o, g, f]
  );
  return z.createElement(Sp.Provider, { value: V }, s);
}
const Io = {
  didCatch: !1,
  error: null
};
class Tp extends z.Component {
  constructor(o) {
    super(o), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Io;
  }
  static getDerivedStateFromError(o) {
    return { didCatch: !0, error: o };
  }
  resetErrorBoundary(...o) {
    const { didCatch: g } = this.state;
    g && (this.props.onReset?.({
      args: o,
      reason: "imperative-api"
    }), this.setState(Io));
  }
  componentDidCatch(o, g) {
    this.props.onError?.(o, g);
  }
  componentDidUpdate(o, g) {
    const { didCatch: f } = this.state, { resetKeys: V } = this.props;
    f && g.didCatch && Gp(o.resetKeys, V) && (this.props.onReset?.({
      next: V,
      prev: o.resetKeys,
      reason: "keys"
    }), this.setState(Io));
  }
  render() {
    const { children: o, fallbackRender: g, FallbackComponent: f, fallback: V } = this.props, { didCatch: x, error: Y } = this.state;
    let k = o;
    if (x) {
      const N = {
        error: Y,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof g == "function")
        k = g(N);
      else if (f)
        k = z.createElement(f, N);
      else if ("fallback" in this.props)
        k = V;
      else
        throw Y;
    }
    return z.createElement(
      Yp,
      {
        didCatch: x,
        error: Y,
        resetErrorBoundary: this.resetErrorBoundary
      },
      k
    );
  }
}
function Gp(s = [], o = []) {
  return s.length !== o.length || s.some((g, f) => !Object.is(g, o[f]));
}
const kp = "coco-m01-every-duck-home-v2", Rp = "Every Duck Home", Np = "COUNTING", Up = "M01", Qp = "Maths", Op = 7, zp = ["M1", "M2", "M3", "M4", "M5", "M6"], jp = "6-7", Hp = /* @__PURE__ */ JSON.parse(`{"6-7":{"items":[{"type":"coco","id":"67-open","text":"In Assam, it gets dark early. Ducks must be inside by night. How would you know if one was missing?","audio":{"path":"assets/voice/coco/440e917a6e609a47.mp3","dur":6.7}},{"type":"panel","id":"67-p01","num":1,"image":{"path":"assets/panels/m01_p01.webp","w":941,"h":1686},"alt":"Panel 1","dialogues":[{"id":"67-p01-d1","kind":"narration","speaker":"Coco","text":"Zara, Neel and Thomas came from Chennai to Assam. They stayed with Grandma in her village.","placement":"before","group":"67-p01-d1","chunk":1,"chunks":2,"audio":{"path":"assets/voice/narrator/74aa36802bdc31da.mp3","dur":6.6}},{"id":"67-p01-d1-c2","kind":"narration","speaker":"Coco","text":"That morning, Grandma counted her ducks going to the lake.","placement":"before","group":"67-p01-d1","chunk":2,"chunks":2,"audio":{"path":"assets/voice/narrator/2d847e1a46ef2c20.mp3","dur":4.2}},{"id":"67-p01-d2","kind":"speech","speaker":"Grandma Leena","text":"63 ducks went out. I wrote it on the door.","bubble":{"x":42.56,"y":4.24,"w":52,"tx":70.56,"ty":24.69,"fs":100},"audio":{"path":"assets/voice/cast/60fec02cab658840.mp3","dur":4.4}},{"id":"67-p01-d3","kind":"speech","speaker":"Zara","text":"Even the grey-head duck, Grandma? She always gets lost!","bubble":{"x":2,"y":11.68,"w":42,"tx":23.5,"ty":45.45,"fs":100},"audio":{"path":"assets/voice/cast/37a5c5d7f0fdc21a.mp3","dur":4}},{"id":"67-p01-d4","kind":"speech","speaker":"Grandma Leena","text":"Yes! Jackals come at night. Count each duck going in.","bubble":{"x":27.87,"y":26.19,"w":34.01,"tx":69.03,"ty":36.05,"fs":100},"audio":{"path":"assets/voice/cast/df936e3836fc26f2.mp3","dur":6.2}}]},{"type":"panel","id":"67-p02","num":2,"image":{"path":"assets/panels/m01_p02.webp","w":941,"h":1686},"alt":"Panel 2","dialogues":[{"id":"67-p02-d1","kind":"speech","speaker":"Thomas","text":"1, 2, 3, 4... did I count you? Start again!","bubble":{"x":2,"y":3,"w":46,"tx":42,"ty":41,"fs":100},"audio":{"path":"assets/voice/cast/f627761066c1180f.mp3","dur":5}},{"id":"67-p02-d2","kind":"speech","speaker":"Zara","text":"They won't keep still, Thomas!","bubble":{"x":2.52,"y":14.12,"w":26.71,"tx":14.52,"ty":43.12,"fs":100},"audio":{"path":"assets/voice/cast/4530a1ab9237c48b.mp3","dur":2.2}},{"id":"67-p02-d3","kind":"speech","speaker":"Neel","text":"If we count fewer than 63, a duck is outside.","bubble":{"x":47.27,"y":20.15,"w":46,"tx":82.25,"ty":32.97,"fs":100},"audio":{"path":"assets/voice/cast/c0b8fbd7fe3ebe25.mp3","dur":4.1}},{"id":"67-p02-d4","kind":"narration","speaker":"Coco","text":"Ducks do not keep still. How can the children count them?","placement":"after","group":"67-p02-d4","chunk":1,"chunks":2,"audio":{"path":"assets/voice/narrator/842280ac1e574915.mp3","dur":3.7}},{"id":"67-p02-d4-c2","kind":"narration","speaker":"Coco","text":"Think about it.","placement":"after","group":"67-p02-d4","chunk":2,"chunks":2,"thinkMs":4000,"audio":{"path":"assets/voice/narrator/e815e4c0d1134104.mp3","dur":1},"ask":{"q":"How can the children count the ducks?","options":["Drop a pebble for each duck","Count them in your head"],"optionAudio":[{"path":"assets/voice/options/55a0e17bdeb84513.mp3","dur":2},{"path":"assets/voice/options/a06406d5e949ec9c.mp3","dur":1.5}]}}]},{"type":"panel","id":"67-p03","num":3,"image":{"path":"assets/panels/m01_p03.webp","w":941,"h":1687},"alt":"Panel 3","dialogues":[{"id":"67-p03-d1","kind":"speech","speaker":"Zara","text":"Let's count them at the door! Just one fits through.","bubble":{"x":2,"y":4,"w":44,"tx":20,"ty":50,"fs":100},"audio":{"path":"assets/voice/cast/703d11d61076ef78.mp3","dur":3.7}},{"id":"67-p03-d2","kind":"speech","speaker":"Neel","text":"A pebble for each duck! Pebbles keep still.","bubble":{"x":28.73,"y":15.39,"w":33.9,"tx":48.73,"ty":44.98,"fs":100},"audio":{"path":"assets/voice/cast/6a57e6b818610a79.mp3","dur":3.5}},{"id":"67-p03-d3","kind":"speech","speaker":"Thomas","text":"Pebbles? I can count them in my head!","bubble":{"x":54,"y":29.6,"w":41.7,"tx":80.49,"ty":40.53,"fs":100},"audio":{"path":"assets/voice/cast/801918429e87fbf2.mp3","dur":2.8}}]},{"type":"panel","id":"67-p04","num":4,"image":{"path":"assets/panels/m01_p04.webp","w":941,"h":1686},"alt":"Panel 4","dialogues":[{"id":"67-p04-d1","kind":"narration","speaker":"Coco","text":"Soon 14 ducks were in.","placement":"before","audio":{"path":"assets/voice/narrator/f77c8225380c3c03.mp3","dur":2.5}},{"id":"67-p04-d2","kind":"speech","speaker":"Neel","text":"Crooked-tail is out, so her pebble comes out.","bubble":{"x":2,"y":3,"w":50,"tx":52,"ty":47,"fs":100},"audio":{"path":"assets/voice/cast/12c986628eb7aeb8.mp3","dur":3.3}},{"id":"67-p04-d3","kind":"speech","speaker":"Thomas","text":"Ha! She is quacking at us!","bubble":{"x":50,"y":17,"w":48,"tx":76,"ty":40,"fs":100},"audio":{"path":"assets/voice/cast/48910036113ab419.mp3","dur":2.5}}]},{"type":"panel","id":"67-p05","num":5,"image":{"path":"assets/panels/m01_p05.webp","w":941,"h":1686},"alt":"Panel 5","dialogues":[{"id":"67-p05-d1","kind":"speech","speaker":"Zara","text":"One at a time, through the little door.","bubble":{"x":2,"y":3,"w":44,"tx":13,"ty":46,"fs":100},"audio":{"path":"assets/voice/cast/f4eb25dabdba0492.mp3","dur":2.6}},{"id":"67-p05-d2","kind":"speech","speaker":"Thomas","text":"Crooked-tail went back in! Now she's out again!","bubble":{"x":50.7,"y":10.01,"w":48,"tx":77.73,"ty":37.47,"fs":100},"audio":{"path":"assets/voice/cast/0d3cfa355d3b6ea5.mp3","dur":3.6}},{"id":"67-p05-d3","kind":"speech","speaker":"Neel","text":"Duck in, pebble in. Duck out, pebble out!","bubble":{"x":22.4,"y":25.41,"w":46,"tx":55.09,"ty":44.65,"fs":100},"audio":{"path":"assets/voice/cast/0983bb05e6f6015b.mp3","dur":3.9}},{"id":"67-p05-d4","kind":"narration","speaker":"Coco","text":"The pebbles piled up in the bowl. One for every duck inside.","placement":"after","audio":{"path":"assets/voice/narrator/d88c759544afd53a.mp3","dur":4.2}}]},{"type":"quiz","id":"67-cp1","kind":"checkpoint","label":"Checkpoint 1","skippable":true,"cta":"Pick one","intro":{"text":"Your turn! A duck goes in, a pebble goes in. What if one comes out?","audio":{"path":"assets/voice/coco/22afa588043709d3.mp3","dur":5.9}},"questions":[{"id":"67-cp1-q1","question":"20 pebbles are in the bowl. 2 ducks go in. Then Crooked-tail comes out. How many pebbles now?","speak":"20 pebbles are in the bowl. 2 ducks go in. Then Crooked-tail comes out. How many pebbles now?","pictureNote":"on a plain white background, a wide shallow steel bowl on a low stone step holding exactly 20 grey pebbles in two rows of ten, every pebble a separate round grey pebble, in one layer, none touching or overlapping, seen from slightly above so every one inside shows, so a child can count all 20, with no number written anywhere, two brown ducks stepping in through a small dark door one behind the other, a pencil-doodle arrow pointing in beside them, and the crooked-tailed brown duck, side-on, stepping back out beside them, a pencil-doodle arrow pointing out. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_67_cp1.webp","w":1298,"h":1082},"options":[{"text":"22","speak":"22"},{"text":"21","speak":"21"},{"text":"23","speak":"23"}],"correct":1,"explanation":"2 in, 2 pebbles in: 22. 1 out, 1 pebble out: 21.","conceptMarker":""}]},{"type":"panel","id":"67-p06","num":6,"image":{"path":"assets/panels/m01_p06.webp","w":941,"h":1687},"alt":"Panel 6","dialogues":[{"id":"67-p06-d1","kind":"narration","speaker":"Coco","text":"More ducks went in. The sky was already dark.","placement":"before","audio":{"path":"assets/voice/narrator/80bd48ecf6ecd6db.mp3","dur":3.5}},{"id":"67-p06-d2","kind":"speech","speaker":"Zara","text":"So dark already? We haven't even had dinner!","bubble":{"x":2,"y":0.5,"w":40,"tx":10,"ty":45,"fs":100},"audio":{"path":"assets/voice/cast/8d06c012eabf4ee7.mp3","dur":3.3}},{"id":"67-p06-d3","kind":"speech","speaker":"Thomas","text":"59! I counted every duck that went in!","bubble":{"x":27.91,"y":12,"w":54,"tx":57.64,"ty":40.78,"fs":100},"audio":{"path":"assets/voice/cast/8e1dfd9f5960037c.mp3","dur":4}},{"id":"67-p06-d4","kind":"speech","speaker":"Neel","text":"Even the crooked-tail duck? She keeps coming out!","bubble":{"x":63.63,"y":21.24,"w":34.48,"tx":83.39,"ty":34.05,"fs":100},"audio":{"path":"assets/voice/cast/a547f6f58d989703.mp3","dur":3.2}}]},{"type":"panel","id":"67-p07","num":7,"image":{"path":"assets/panels/m01_p07.webp","w":941,"h":1686},"alt":"Panel 7","dialogues":[{"id":"67-p07-d1","kind":"narration","speaker":"Coco","text":"The boys argued. But the last ducks kept going in!","placement":"before","group":"67-p07-d1","chunk":1,"chunks":2,"audio":{"path":"assets/voice/narrator/de47b89828869937.mp3","dur":4.1}},{"id":"67-p07-d1-c2","kind":"narration","speaker":"Coco","text":"Zara picked up the little tin dish.","placement":"before","group":"67-p07-d1","chunk":2,"chunks":2,"audio":{"path":"assets/voice/narrator/772f1fd0ecd09315.mp3","dur":2.9}},{"id":"67-p07-d2","kind":"speech","speaker":"Zara","text":"Nobody is dropping pebbles! I'll use my dish.","bubble":{"x":15.85,"y":34.57,"w":34.58,"tx":21.36,"ty":67.74,"fs":100},"audio":{"path":"assets/voice/cast/77faf4313a27f654.mp3","dur":3.4}},{"id":"67-p07-d3","kind":"speech","speaker":"Zara","text":"1, 2, 3, 4, 5, 6. 6 in my dish!","bubble":{"x":53.85,"y":84.44,"w":41.07,"tx":33.85,"ty":77.44,"fs":100},"audio":{"path":"assets/voice/cast/f56d2d09f35ebf29.mp3","dur":5.9}}]},{"type":"panel","id":"67-p08","num":8,"image":{"path":"assets/panels/m01_p08.webp","w":941,"h":1686},"alt":"Panel 8","dialogues":[{"id":"67-p08-d1","kind":"speech","speaker":"Thomas","text":"I kept counting in my head. 65! Bar the door!","bubble":{"x":2,"y":3,"w":50,"tx":60,"ty":42,"fs":100},"audio":{"path":"assets/voice/cast/8c1009585c2d0d2f.mp3","dur":4}},{"id":"67-p08-d2","kind":"speech","speaker":"Neel","text":"65? Only 63 went out! Let's count the pebbles.","bubble":{"x":54,"y":13.79,"w":46,"tx":83.09,"ty":32.75,"fs":100},"audio":{"path":"assets/voice/cast/da00585b3f2ac936.mp3","dur":4.8}},{"id":"67-p08-d3","kind":"speech","speaker":"Zara","text":"I kept dropping pebbles. 6 more ducks in my dish!","bubble":{"x":50,"y":87,"w":46,"tx":29.4,"ty":85.31,"fs":100},"audio":{"path":"assets/voice/cast/5ee4c3df93e1b49c.mp3","dur":3.9}}]},{"type":"panel","id":"67-p09","num":9,"image":{"path":"assets/panels/m01_p09.webp","w":941,"h":1686},"alt":"Panel 9","dialogues":[{"id":"67-p09-d1","kind":"narration","speaker":"Coco","text":"The pebble heap was too big to count.","placement":"before","audio":{"path":"assets/voice/narrator/4947d5e89bfea60f.mp3","dur":2.9}},{"id":"67-p09-d2","kind":"speech","speaker":"Neel","text":"I'll put 10 pebbles in each of Grandma's baskets!","bubble":{"x":46,"y":3,"w":52,"tx":85,"ty":35,"fs":100},"audio":{"path":"assets/voice/cast/3a3f5acfb3ff19af.mp3","dur":3.4}},{"id":"67-p09-d3","kind":"speech","speaker":"Neel","text":"10, 20, 30, 40, 50, 51, 52, 53...","bubble":{"x":7.09,"y":12.02,"w":52,"tx":78.18,"ty":33.67,"fs":100},"audio":{"path":"assets/voice/cast/d486084a09395cb3.mp3","dur":7.4}},{"id":"67-p09-d4","kind":"speech","speaker":"Thomas","text":"54, 55, 56! Counting in tens is so fast!","bubble":{"x":4.94,"y":57.77,"w":44,"tx":53.28,"ty":52.27,"fs":100},"audio":{"path":"assets/voice/cast/3ab1b243a0262428.mp3","dur":5.6}}]},{"type":"quiz","id":"67-cp2","kind":"checkpoint","label":"Checkpoint 2","skippable":true,"cta":"Pick one","intro":{"text":"Your turn! Count the baskets in tens, then the bowl.","audio":{"path":"assets/voice/coco/382899d68edcae4f.mp3","dur":3.6}},"questions":[{"id":"67-cp2-q1","question":"How many pebbles are there?","speak":"How many pebbles are there?","pictureNote":"on a plain white background, a low stone step with 3 little flat cane baskets in a row, each holding exactly 10 grey pebbles in two rows of five, and beside them a small steel bowl holding exactly 2 more pebbles, every pebble a separate round grey pebble, in one layer, none touching or overlapping, seen from slightly above so every one inside shows, so a child can count every pebble, with no number written anywhere. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_67_cp2.webp","w":1300,"h":869},"options":[{"text":"5","speak":"5"},{"text":"32","speak":"32"},{"text":"23","speak":"23"}],"correct":1,"explanation":"10, 20, 30, then 31, 32. Baskets of 10 make it quicker.","conceptMarker":""}]},{"type":"panel","id":"67-p10","num":10,"image":{"path":"assets/panels/m01_p10.webp","w":941,"h":1686},"alt":"Panel 10","dialogues":[{"id":"67-p10-d1","kind":"speech","speaker":"Neel","text":"Zara counted the last 6 ducks. Count on from 56!","bubble":{"x":2,"y":2,"w":52,"tx":42,"ty":37,"fs":100},"audio":{"path":"assets/voice/cast/e0e8dcc72bb5b042.mp3","dur":4.7}},{"id":"67-p10-d2","kind":"speech","speaker":"Neel","text":"Zara's dish: 57, 58, 59, 60, 61, 62.","bubble":{"x":2,"y":12,"w":46,"tx":42,"ty":37,"fs":100},"audio":{"path":"assets/voice/cast/c194c2672cfd8e3c.mp3","dur":7.8}},{"id":"67-p10-d3","kind":"speech","speaker":"Thomas","text":"I never took the crooked-tail duck off my count!","bubble":{"x":55.12,"y":60.15,"w":36,"tx":72.64,"ty":47.22,"fs":100},"audio":{"path":"assets/voice/cast/d8a3931e730757c3.mp3","dur":3.2}}]},{"type":"panel","id":"67-p11","num":11,"image":{"path":"assets/panels/m01_p11.webp","w":941,"h":1686},"alt":"Panel 11","dialogues":[{"id":"67-p11-d1","kind":"speech","speaker":"Thomas","text":"62. The door says 63. One is missing!","bubble":{"x":2,"y":3,"w":50,"tx":15,"ty":44,"fs":100},"audio":{"path":"assets/voice/cast/c9a21caffffbb31a.mp3","dur":5.1}},{"id":"67-p11-d2","kind":"speech","speaker":"Zara","text":"The grey-head duck! I said she gets lost!","bubble":{"x":40.19,"y":16.21,"w":48,"tx":65.69,"ty":44.98,"fs":100},"audio":{"path":"assets/voice/cast/178c9841f6e049f9.mp3","dur":3.6}}]},{"type":"panel","id":"67-p12","num":12,"image":{"path":"assets/panels/m01_p12.webp","w":941,"h":1686},"alt":"Panel 12","dialogues":[{"id":"67-p12-d1","kind":"narration","speaker":"Coco","text":"Grandma saw them searching and came out with her torch.","placement":"before","audio":{"path":"assets/voice/narrator/103b45ce70d244bb.mp3","dur":3.1}},{"id":"67-p12-d2","kind":"speech","speaker":"Zara","text":"There she is! Under the banana plants!","bubble":{"x":50.22,"y":3.23,"w":46,"tx":77.76,"ty":61.86,"fs":100},"audio":{"path":"assets/voice/cast/f0377828bd764211.mp3","dur":2.7}},{"id":"67-p12-d3","kind":"speech","speaker":"Grandma Leena","text":"She laid an egg! Put it in this bowl, Zara.","bubble":{"x":30.23,"y":17,"w":38.37,"tx":55.08,"ty":35.61,"fs":100},"audio":{"path":"assets/voice/cast/c669307dfb5cdbc4.mp3","dur":4.3}},{"id":"67-p12-d4","kind":"speech","speaker":"Zara","text":"One little egg! It goes in with her.","bubble":{"x":47.95,"y":90.87,"w":46,"tx":71.95,"ty":83.87,"fs":100},"audio":{"path":"assets/voice/cast/d22c910621b693d1.mp3","dur":3}}]},{"type":"panel","id":"67-p13","num":13,"image":{"path":"assets/panels/m01_p13.webp","w":941,"h":1686},"alt":"Panel 13","dialogues":[{"id":"67-p13-d1","kind":"speech","speaker":"Zara","text":"Not one duck outside now. 0!","bubble":{"x":52,"y":84,"w":46,"tx":72,"ty":78,"fs":100},"audio":{"path":"assets/voice/cast/bde0ab74dde1bcd7.mp3","dur":3}},{"id":"67-p13-d2","kind":"speech","speaker":"Thomas","text":"62, 63! Same as the door! I'll shut it.","bubble":{"x":2,"y":3,"w":54,"tx":52,"ty":40,"fs":100},"audio":{"path":"assets/voice/cast/a9e167c9b9451ce6.mp3","dur":4.5}}]},{"type":"panel","id":"67-p14","num":14,"image":{"path":"assets/panels/m01_p14.webp","w":941,"h":1686},"alt":"Panel 14","dialogues":[{"id":"67-p14-d1","kind":"speech","speaker":"Grandma Leena","text":"All safe for the night. Even the egg!","bubble":{"x":6.41,"y":2.91,"w":50,"tx":32.41,"ty":27.91,"fs":100},"audio":{"path":"assets/voice/cast/5cc0cad34a3b6d9b.mp3","dur":3.9}},{"id":"67-p14-d2","kind":"speech","speaker":"Zara","text":"Can we count them out in the morning?","bubble":{"x":47.12,"y":14.7,"w":48,"tx":40.17,"ty":56.17,"fs":100},"audio":{"path":"assets/voice/cast/52914960e81e1c0f.mp3","dur":1.8}},{"id":"67-p14-d3","kind":"speech","speaker":"Grandma Leena","text":"Yes! One at a time, through the little door.","bubble":{"x":62.97,"y":29.02,"w":30.59,"tx":43.15,"ty":36.34,"fs":100},"audio":{"path":"assets/voice/cast/84ba7af20da0074e.mp3","dur":4.5}},{"id":"67-p14-d4","kind":"narration","speaker":"Coco","text":"In the duck house, 63 ducks slept on the straw.","placement":"after","audio":{"path":"assets/voice/narrator/94514e3e545c906c.mp3","dur":3.5}}]},{"type":"coco","id":"67-outro-c1","text":"Drop beans in a cup, one by one. Put them in tens.","audio":{"path":"assets/voice/coco/16cbfac1dc7afab3.mp3","dur":4}},{"type":"quiz","id":"67-final","kind":"final","label":"Final quiz","skippable":false,"cta":"Start the quiz","intro":{"text":"Can you get to 100?","audio":{"path":"assets/voice/coco/0031a83e4f5dd2c2.mp3","dur":1.6}},"questions":[{"id":"67-q1","question":"5 ducks go in, one at a time. Neel drops 1 pebble for each. How many pebbles are in the bowl?","speak":"5 ducks go in, one at a time. Neel drops 1 pebble for each. How many pebbles are in the bowl?","options":[{"text":"5","speak":"5"},{"text":"4","speak":"4"},{"text":"6","speak":"6"}],"correct":0,"explanation":"1 pebble for each duck. 5 ducks, 5 pebbles.","conceptMarker":"M1","tag":"M1: One for each"},{"id":"67-q2","question":"A duck pops back out of the door. What happens to her pebble?","speak":"A duck pops back out of the door. What happens to her pebble?","options":[{"text":"It stays in the bowl","speak":"It stays in the bowl"},{"text":"It comes out of the bowl","speak":"It comes out of the bowl"},{"text":"A second pebble goes in","speak":"A second pebble goes in"}],"correct":1,"explanation":"She is outside now. Her pebble comes out.","conceptMarker":"M3","tag":"M3: A duck goes out"},{"id":"67-q3","question":"A boy counts pebbles in baskets of 10: 10, 20, 30, 40, 50, 60, 70. How many baskets?","speak":"A boy counts pebbles in baskets of 10: 10, 20, 30, 40, 50, 60, 70. How many baskets?","options":[{"text":"70","speak":"70"},{"text":"10","speak":"10"},{"text":"7","speak":"7"}],"correct":2,"explanation":"1 basket for each number he says. 7 numbers, 7 baskets.","conceptMarker":"M2","tag":"M2: Counting the baskets"},{"id":"67-q4","question":"Both steps have 40 pebbles. Which is quicker to count?","speak":"Both steps have 40 pebbles. Which is quicker to count?","pictureNote":"two stone steps side by side on a plain white background, each labelled with its letter only. A: exactly 40 grey pebbles scattered in no order in one loose patch, every pebble separate and none on top of another, so they can be counted but only slowly. B: exactly 4 little flat cane baskets, each holding exactly 10 grey pebbles in two rows of five, every pebble a separate round grey pebble, in one layer, none touching or overlapping, seen from slightly above so every one inside shows. No number written anywhere. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_67_q4.webp","w":1298,"h":766},"options":[{"text":"The heap","speak":"The heap"},{"text":"The baskets","speak":"The baskets"},{"text":"Both are just as quick","speak":"Both are just as quick"}],"correct":1,"explanation":"Baskets go 10, 20, 30, 40. That's quick!","conceptMarker":"M2","tag":"M2: Why baskets of ten"},{"id":"67-q5","question":"A farmer counts his ducks: ninety-eight, ninety-nine. One more duck goes in. What does he say?","speak":"A farmer counts his ducks: ninety-eight, ninety-nine. One more duck goes in. What does he say?","options":[{"text":"Ninety-ten","speak":"Ninety-ten"},{"text":"One hundred","speak":"One hundred"},{"text":"Ninety","speak":"Ninety"}],"correct":1,"explanation":"After ninety-nine comes one hundred.","conceptMarker":"M1","tag":"M1: Count on across a boundary"},{"id":"67-q6","question":"Thomas writes seventy-four in chalk. Which one is right?","speak":"Thomas writes seventy-four in chalk. Which one is right?","options":[{"text":"47","speak":null},{"text":"70","speak":null},{"text":"74","speak":null}],"correct":2,"explanation":"Seventy-four: write a seven, then a four.","conceptMarker":"M4","tag":"M4: Write numbers"},{"id":"67-q7","question":"The door shows a number. The pebbles make 70. What should they do?","speak":"The door shows a number. The pebbles make 70. What should they do?","pictureNote":"on a plain white background with a faint peach dusk wash, a small duck house door of flat dark boards in a bamboo frame, the number 71 in large white chalk on it, and on the step in front of it exactly 7 little flat cane baskets in a row, each holding exactly 10 grey pebbles in two rows of five, every pebble a separate round grey pebble, in one layer, none touching or overlapping, seen from slightly above so every one inside shows, so a child can count seventy pebbles. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_67_q7.webp","w":1300,"h":1300},"options":[{"text":"Shut the door","speak":"Shut the door"},{"text":"Look for the missing duck","speak":"Look for the missing duck"},{"text":"Take a pebble out","speak":"Take a pebble out"}],"correct":1,"explanation":"The door says 71. 1 duck is still outside.","conceptMarker":"M5","tag":"M5: Read numbers"},{"id":"67-q8","question":"A girl counts: 10, 20, 30, 40, 1, 2, 3. What went wrong?","speak":"A girl counts: 10, 20, 30, 40, 1, 2, 3. What went wrong?","pictureNote":"on a plain white background, a low stone step with 4 little flat cane baskets in a row, each holding exactly 10 grey pebbles in two rows of five, and exactly 3 loose pebbles in a short row beside them, every pebble a separate round grey pebble, in one layer, none touching or overlapping, seen from slightly above so every one inside shows, with no number written anywhere. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_67_q8.webp","w":1298,"h":644},"options":[{"text":"She went back to 1 after 40","speak":"She went back to 1 after 40"},{"text":"She counted 1 basket too many","speak":"She counted 1 basket too many"},{"text":"Nothing, she counted it right","speak":"Nothing, she counted it right"}],"correct":0,"explanation":"After 40 comes 41, 42, 43. She started again at 1.","conceptMarker":"M3","tag":"M3: Find the slip"}]}]},"5-6":{"items":[{"type":"coco","id":"56-open","text":"In Assam, it gets dark early. Ducks must be in by night. How can you tell if one is missing?","audio":{"path":"assets/voice/coco/6a7db57e8ac2f57f.mp3","dur":5.9}},{"type":"panel","id":"56-p01","num":1,"image":{"path":"assets/panels/m01_b56_p01.webp","w":941,"h":1686},"alt":"Panel 1","dialogues":[{"id":"56-p01-d1","kind":"narration","speaker":"Coco","text":"Zara, Neel and Thomas came from Chennai to Assam. They stayed with Grandma in her village.","placement":"before","group":"56-p01-d1","chunk":1,"chunks":2,"audio":{"path":"assets/voice/narrator/74aa36802bdc31da.mp3","dur":6.6}},{"id":"56-p01-d1-c2","kind":"narration","speaker":"Coco","text":"That morning, Grandma counted her ducks going to the lake.","placement":"before","group":"56-p01-d1","chunk":2,"chunks":2,"audio":{"path":"assets/voice/narrator/2d847e1a46ef2c20.mp3","dur":4.2}},{"id":"56-p01-d2","kind":"speech","speaker":"Grandma Leena","text":"18 ducks went out. I wrote it on the door.","bubble":{"x":53.21,"y":2.99,"w":44,"tx":72.44,"ty":25.16,"fs":100},"audio":{"path":"assets/voice/cast/02b78535acfd9513.mp3","dur":4.7}},{"id":"56-p01-d3","kind":"speech","speaker":"Zara","text":"Even the grey-head duck, Grandma? She always gets lost!","bubble":{"x":2,"y":11.5,"w":42,"tx":23.13,"ty":46.61,"fs":100},"audio":{"path":"assets/voice/cast/37a5c5d7f0fdc21a.mp3","dur":4}},{"id":"56-p01-d4","kind":"speech","speaker":"Grandma Leena","text":"Yes! Jackals come at night. Count each duck going in.","bubble":{"x":27.73,"y":29.4,"w":32.87,"tx":67.41,"ty":35.21,"fs":100},"audio":{"path":"assets/voice/cast/df936e3836fc26f2.mp3","dur":6.2}}]},{"type":"panel","id":"56-p02","num":2,"image":{"path":"assets/panels/m01_b56_p02.webp","w":941,"h":1686},"alt":"Panel 2","dialogues":[{"id":"56-p02-d1","kind":"speech","speaker":"Thomas","text":"1, 2, 3... did I count you? Start again!","bubble":{"x":26,"y":2,"w":40,"tx":48.22,"ty":40.24,"fs":100},"audio":{"path":"assets/voice/cast/2a5162310806dfa8.mp3","dur":4.3}},{"id":"56-p02-d2","kind":"speech","speaker":"Zara","text":"They won't keep still, Thomas!","bubble":{"x":3.8,"y":10.23,"w":36,"tx":13.11,"ty":45.43,"fs":100},"audio":{"path":"assets/voice/cast/4530a1ab9237c48b.mp3","dur":2.2}},{"id":"56-p02-d3","kind":"speech","speaker":"Neel","text":"We need a new way to count them!","bubble":{"x":58.04,"y":21.27,"w":40,"tx":81.37,"ty":32.83,"fs":100},"audio":{"path":"assets/voice/cast/678f84cc6ecfff68.mp3","dur":2.2}},{"id":"56-p02-d4","kind":"narration","speaker":"Coco","text":"Ducks do not keep still. How can the children count them?","placement":"after","group":"56-p02-d4","chunk":1,"chunks":2,"audio":{"path":"assets/voice/narrator/842280ac1e574915.mp3","dur":3.7}},{"id":"56-p02-d4-c2","kind":"narration","speaker":"Coco","text":"Think about it.","placement":"after","group":"56-p02-d4","chunk":2,"chunks":2,"thinkMs":4000,"audio":{"path":"assets/voice/narrator/e815e4c0d1134104.mp3","dur":1},"ask":{"q":"How can the children count the ducks?","options":["Drop a pebble for each duck","Count them in your head"],"optionAudio":[{"path":"assets/voice/options/55a0e17bdeb84513.mp3","dur":2},{"path":"assets/voice/options/a06406d5e949ec9c.mp3","dur":1.5}]}}]},{"type":"panel","id":"56-p03","num":3,"image":{"path":"assets/panels/m01_b56_p03.webp","w":941,"h":1647},"alt":"Panel 3","dialogues":[{"id":"56-p03-d1","kind":"speech","speaker":"Zara","text":"Let's count them at the door! Just one fits through.","bubble":{"x":3.55,"y":2.71,"w":44,"tx":17.58,"ty":42.61,"fs":100},"audio":{"path":"assets/voice/cast/703d11d61076ef78.mp3","dur":3.7}},{"id":"56-p03-d2","kind":"speech","speaker":"Neel","text":"Yes! A pebble for each duck. Pebbles keep still!","bubble":{"x":34.82,"y":15.5,"w":44,"tx":55.64,"ty":36.88,"fs":100},"audio":{"path":"assets/voice/cast/bc025202dc708670.mp3","dur":4.3}},{"id":"56-p03-d3","kind":"speech","speaker":"Zara","text":"One duck, one pebble. 1!","bubble":{"x":27.56,"y":72.5,"w":40,"tx":20.11,"ty":61.19,"fs":100},"audio":{"path":"assets/voice/cast/7014a622c3f9c817.mp3","dur":3}}]},{"type":"panel","id":"56-p04","num":4,"image":{"path":"assets/panels/m01_b56_p04.webp","w":941,"h":1686},"alt":"Panel 4","dialogues":[{"id":"56-p04-d1","kind":"narration","speaker":"Coco","text":"Soon 6 ducks were in.","placement":"before","audio":{"path":"assets/voice/narrator/b86eb84ffaf41b86.mp3","dur":2}},{"id":"56-p04-d2","kind":"speech","speaker":"Neel","text":"The crooked-tail duck came out! What about her pebble?","bubble":{"x":2,"y":2,"w":46,"tx":57,"ty":37,"fs":100},"audio":{"path":"assets/voice/cast/ce5fc6440a1b2649.mp3","dur":3.6}},{"id":"56-p04-d3","kind":"speech","speaker":"Zara","text":"She's not in now. Her pebble comes out!","bubble":{"x":5.27,"y":19.4,"w":37.17,"tx":52.15,"ty":51.54,"fs":100},"audio":{"path":"assets/voice/cast/4b95a86ae36f2605.mp3","dur":3}},{"id":"56-p04-d4","kind":"speech","speaker":"Thomas","text":"Ha! She is quacking at us!","bubble":{"x":66.37,"y":29.52,"w":29.35,"tx":81.9,"ty":43.57,"fs":100},"audio":{"path":"assets/voice/cast/48910036113ab419.mp3","dur":2.5}}]},{"type":"panel","id":"56-p05","num":5,"image":{"path":"assets/panels/m01_b56_p05.webp","w":941,"h":1686},"alt":"Panel 5","dialogues":[{"id":"56-p05-d1","kind":"narration","speaker":"Coco","text":"More ducks went in. Soon Zara had 11 pebbles.","placement":"before","audio":{"path":"assets/voice/narrator/ac49662ab1b02c11.mp3","dur":4.4}},{"id":"56-p05-d2","kind":"speech","speaker":"Zara","text":"One at a time, through the little door.","bubble":{"x":2,"y":2,"w":44,"tx":14,"ty":46,"fs":100},"audio":{"path":"assets/voice/cast/f4eb25dabdba0492.mp3","dur":2.6}},{"id":"56-p05-d3","kind":"speech","speaker":"Thomas","text":"Look! Crooked-tail is sneaking out again!","bubble":{"x":55.96,"y":7.95,"w":40,"tx":76.95,"ty":38.79,"fs":100},"audio":{"path":"assets/voice/cast/aed1f0f94cd3ea88.mp3","dur":3}},{"id":"56-p05-d4","kind":"speech","speaker":"Zara","text":"She's out again! One pebble out. 10 ducks are in.","bubble":{"x":26.13,"y":24.89,"w":44,"tx":18.69,"ty":46.15,"fs":100},"audio":{"path":"assets/voice/cast/62d2452cf1102ee7.mp3","dur":4.7}}]},{"type":"quiz","id":"56-cp1","kind":"checkpoint","label":"Checkpoint 1","skippable":true,"cta":"Pick one","intro":{"text":"Your turn! A duck goes in, a pebble goes in. What if one comes out?","audio":{"path":"assets/voice/coco/22afa588043709d3.mp3","dur":5.9}},"questions":[{"id":"56-cp1-q1","question":"8 ducks are in. A duck comes out. How many ducks are in now?","speak":"8 ducks are in. A duck comes out. How many ducks are in now?","pictureNote":"on a plain white background, Zara, a small girl with dark brown skin, two curly hair puffs with pink bobbles and a gap in her front teeth, in a yellow cotton frock with small white flowers and a soft pink knitted cardigan, her free hand reaching toward the hem and no pebble taken out yet, holds up the hem of her frock with exactly 8 grey pebbles in it, and a plain white duck is just stepping out of a small door. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_56_cp1.webp","w":1300,"h":1300},"options":[{"text":"7","speak":"7"},{"text":"8","speak":"8"},{"text":"9","speak":"9"}],"correct":0,"explanation":"1 duck out, 1 pebble out. 8, then 7.","conceptMarker":""}]},{"type":"panel","id":"56-p06","num":6,"image":{"path":"assets/panels/m01_b56_p06.webp","w":941,"h":1686},"alt":"Panel 6","dialogues":[{"id":"56-p06-d1","kind":"narration","speaker":"Coco","text":"More ducks went in. The crooked-tail duck popped out again.","placement":"before","group":"56-p06-d1","chunk":1,"chunks":2,"audio":{"path":"assets/voice/narrator/d428a3e981309b3a.mp3","dur":4.2}},{"id":"56-p06-d1-c2","kind":"narration","speaker":"Coco","text":"Zara took her pebble out.","placement":"before","group":"56-p06-d1","chunk":2,"chunks":2,"audio":{"path":"assets/voice/narrator/22bb3f412884f246.mp3","dur":2.1}},{"id":"56-p06-d2","kind":"speech","speaker":"Thomas","text":"Here she comes, the last one! All in!","bubble":{"x":30,"y":2,"w":44,"tx":58,"ty":40,"fs":100},"audio":{"path":"assets/voice/cast/cdbbca3dea70e957.mp3","dur":3.2}},{"id":"56-p06-d3","kind":"speech","speaker":"Neel","text":"How many ducks are in?","bubble":{"x":62,"y":13,"w":36,"tx":85.37,"ty":32.94,"fs":100},"audio":{"path":"assets/voice/cast/7248b1f050081430.mp3","dur":1.4}},{"id":"56-p06-d4","kind":"speech","speaker":"Zara","text":"15, 16, 17. 17 ducks!","bubble":{"x":5.29,"y":23.15,"w":40,"tx":15.26,"ty":51.57,"fs":100},"audio":{"path":"assets/voice/cast/f4883e42d90a0301.mp3","dur":4.2}}]},{"type":"panel","id":"56-p07","num":7,"image":{"path":"assets/panels/m01_b56_p07.webp","w":941,"h":1686},"alt":"Panel 7","dialogues":[{"id":"56-p07-d1","kind":"narration","speaker":"Coco","text":"Inside, the ducks squashed up on the straw.","placement":"before","audio":{"path":"assets/voice/narrator/0d4f07e4455fb2fc.mp3","dur":2.9}},{"id":"56-p07-d2","kind":"speech","speaker":"Zara","text":"Oh no! Look, only a few ducks! Some ran away!","bubble":{"x":2,"y":2,"w":44,"tx":66,"ty":45,"fs":100},"audio":{"path":"assets/voice/cast/5fe8f45a6318bbd6.mp3","dur":4.7}},{"id":"56-p07-d3","kind":"speech","speaker":"Zara","text":"I will look by the lake!","bubble":{"x":3.27,"y":12.6,"w":33.64,"tx":62.26,"ty":43.6,"fs":100},"audio":{"path":"assets/voice/cast/4f2597ded1be41cc.mp3","dur":1.6}},{"id":"56-p07-d4","kind":"speech","speaker":"Neel","text":"Stop! Dark comes early here. Too dark for the lake!","bubble":{"x":60.28,"y":19.48,"w":35.65,"tx":84.71,"ty":33.5,"fs":100},"audio":{"path":"assets/voice/cast/a7da693e3292dd83.mp3","dur":4.2}}]},{"type":"panel","id":"56-p08","num":8,"image":{"path":"assets/panels/m01_b56_p08.webp","w":941,"h":1686},"alt":"Panel 8","dialogues":[{"id":"56-p08-d1","kind":"speech","speaker":"Zara","text":"My pebbles will tell! I'll count them in a line.","bubble":{"x":2,"y":3,"w":46,"tx":36,"ty":63,"fs":100},"audio":{"path":"assets/voice/cast/526926322f11d740.mp3","dur":3.7}},{"id":"56-p08-d2","kind":"speech","speaker":"Zara","text":"1, 2, 3, 4, 5, 6, 7, 8.","bubble":{"x":41.99,"y":13.79,"w":48,"tx":38.84,"ty":63.07,"fs":100},"audio":{"path":"assets/voice/cast/578091804ad014fa.mp3","dur":5.7}},{"id":"56-p08-d3","kind":"speech","speaker":"Zara","text":"9, 10, 11, 12, 13, 14, 15, 16, 17.","bubble":{"x":51.13,"y":60.51,"w":40.29,"tx":45.01,"ty":74.29,"fs":100},"audio":{"path":"assets/voice/cast/aeb29e01ca0c5a68.mp3","dur":7.9}}]},{"type":"panel","id":"56-p09","num":9,"image":{"path":"assets/panels/m01_b56_p09.webp","w":941,"h":1686},"alt":"Panel 9","dialogues":[{"id":"56-p09-d1","kind":"speech","speaker":"Neel","text":"Push them into a heap. Did any pebble go away?","bubble":{"x":18.59,"y":2.61,"w":46,"tx":59.97,"ty":37.23,"fs":100},"audio":{"path":"assets/voice/cast/8874d79261e487be.mp3","dur":3.7}},{"id":"56-p09-d2","kind":"speech","speaker":"Zara","text":"1, 2, 3... 17! 17 again!","bubble":{"x":2.71,"y":14.18,"w":40.52,"tx":37.11,"ty":63.5,"fs":100},"audio":{"path":"assets/voice/cast/b3bf705b31828bc6.mp3","dur":4.6}},{"id":"56-p09-d3","kind":"speech","speaker":"Thomas","text":"Squished up, still 17! The ducks too! None ran away!","bubble":{"x":61.63,"y":21.98,"w":35.44,"tx":83.12,"ty":44.44,"fs":100},"audio":{"path":"assets/voice/cast/0fc7d7ab6934745f.mp3","dur":5.1}}]},{"type":"quiz","id":"56-cp2","kind":"checkpoint","label":"Checkpoint 2","skippable":true,"cta":"Pick one","intro":{"text":"Your turn! The pebbles got pushed into a heap.","audio":{"path":"assets/voice/coco/7391aaf9628349c1.mp3","dur":3.1}},"questions":[{"id":"56-cp2-q1","question":"The pebbles are in a heap now. Are there as many as in the line?","speak":"The pebbles are in a heap now. Are there as many as in the line?","pictureNote":"before and after, on a plain white background, on a stone step: on the left, 8 pebbles in a long line; a pencil-doodle arrow; on the right, 8 pebbles pushed into one tight single-layer cluster, all 8 visible. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_56_cp2.webp","w":1298,"h":392},"options":[{"text":"No, the line has more","speak":"No, the line has more"},{"text":"Yes, they are the same","speak":"Yes, they are the same"},{"text":"No, the heap has more","speak":"No, the heap has more"}],"correct":1,"explanation":"8 in a line. 8 in a heap. Same!","conceptMarker":""}]},{"type":"panel","id":"56-p10","num":10,"image":{"path":"assets/panels/m01_b56_p10.webp","w":941,"h":1686},"alt":"Panel 10","dialogues":[{"id":"56-p10-d1","kind":"speech","speaker":"Zara","text":"My number is 17. The door says 18.","bubble":{"x":3.01,"y":2.26,"w":36,"tx":12.11,"ty":48.44,"fs":100},"audio":{"path":"assets/voice/cast/420c242e5035ec2b.mp3","dur":4}},{"id":"56-p10-d2","kind":"speech","speaker":"Neel","text":"So one duck never came home!","bubble":{"x":25.73,"y":16.67,"w":40,"tx":48.25,"ty":35.35,"fs":100},"audio":{"path":"assets/voice/cast/bf22ce317a694627.mp3","dur":2.4}},{"id":"56-p10-d3","kind":"speech","speaker":"Thomas","text":"Wait! I won't put the bar on yet!","bubble":{"x":57.95,"y":25.54,"w":40,"tx":78.05,"ty":37.12,"fs":100},"audio":{"path":"assets/voice/cast/12d573ff04a2e6f8.mp3","dur":2.8}}]},{"type":"panel","id":"56-p11","num":11,"image":{"path":"assets/panels/m01_p12.webp","w":941,"h":1686},"alt":"Panel 11","dialogues":[{"id":"56-p11-d1","kind":"narration","speaker":"Coco","text":"Grandma saw them looking. She came out with her torch.","placement":"before","audio":{"path":"assets/voice/narrator/49452b27ae5736f7.mp3","dur":3.8}},{"id":"56-p11-d2","kind":"speech","speaker":"Zara","text":"The grey-head duck! Under the banana plants!","bubble":{"x":50.22,"y":3.23,"w":46,"tx":77.76,"ty":61.86,"fs":100},"audio":{"path":"assets/voice/cast/c2fc9f644d9a33bf.mp3","dur":3.3}},{"id":"56-p11-d3","kind":"speech","speaker":"Grandma Leena","text":"She laid an egg! Put it in this bowl, Zara.","bubble":{"x":30.23,"y":17,"w":38.37,"tx":55.08,"ty":35.61,"fs":100},"audio":{"path":"assets/voice/cast/c669307dfb5cdbc4.mp3","dur":4.3}},{"id":"56-p11-d4","kind":"speech","speaker":"Zara","text":"One little egg! It goes in with her.","bubble":{"x":47.95,"y":90.87,"w":46,"tx":71.95,"ty":83.87,"fs":100},"audio":{"path":"assets/voice/cast/d22c910621b693d1.mp3","dur":3}}]},{"type":"panel","id":"56-p12","num":12,"image":{"path":"assets/panels/m01_p13.webp","w":941,"h":1686},"alt":"Panel 12","dialogues":[{"id":"56-p12-d1","kind":"speech","speaker":"Grandma Leena","text":"One at a time, through the little door.","bubble":{"x":2,"y":4,"w":50,"tx":30,"ty":47,"fs":100},"audio":{"path":"assets/voice/cast/e09fa10160b00abc.mp3","dur":2.7}},{"id":"56-p12-d2","kind":"speech","speaker":"Zara","text":"Not one duck outside. 0!","bubble":{"x":52,"y":84,"w":46,"tx":72,"ty":78,"fs":100},"audio":{"path":"assets/voice/cast/cf23e34a44bcb3f4.mp3","dur":2.9}}]},{"type":"panel","id":"56-p13","num":13,"image":{"path":"assets/panels/m01_b56_p13.webp","w":941,"h":1686},"alt":"Panel 13","dialogues":[{"id":"56-p13-d1","kind":"speech","speaker":"Zara","text":"17, 18! The same as the door!","bubble":{"x":2,"y":8,"w":44,"tx":12.18,"ty":49.14,"fs":100},"audio":{"path":"assets/voice/cast/918a3ccb7a619fc0.mp3","dur":3.3}},{"id":"56-p13-d2","kind":"speech","speaker":"Thomas","text":"All home now. I'll put the bar on!","bubble":{"x":48.62,"y":18.86,"w":46,"tx":63.07,"ty":39.06,"fs":100},"audio":{"path":"assets/voice/cast/77c8431f56a57f32.mp3","dur":2.6}},{"id":"56-p13-d3","kind":"narration","speaker":"Coco","text":"Inside, 18 ducks slept on the straw. One at a time, through the little door!","placement":"after","audio":{"path":"assets/voice/narrator/4bf6e443958e7497.mp3","dur":6}}]},{"type":"coco","id":"56-outro-c1","text":"Count your shoes.","audio":{"path":"assets/voice/coco/24fc56ecb25b2df8.mp3","dur":1.2}},{"type":"quiz","id":"56-final","kind":"final","label":"Final quiz","skippable":false,"cta":"Start the quiz","intro":{"text":"Heap them. Same number?","audio":{"path":"assets/voice/coco/a032f73d1cb2a339.mp3","dur":1.7}},"questions":[{"id":"56-q1","question":"Why does Zara drop 1 pebble for each duck?","speak":"Why does Zara drop 1 pebble for each duck?","pictureNote":"on a plain white background, Zara, a small girl with dark brown skin, two curly hair puffs with pink bobbles and a gap in her front teeth, in a yellow cotton frock with small white flowers and a soft pink knitted cardigan, holds up the hem of her frock with 4 grey pebbles in it, dropping a 5th pebble in as the last of 5 brown ducks steps through the small door of flat dark boards in a bamboo frame on a duck house; the other 4 are already inside, out of sight, so only this one duck shows. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_56_q1.webp","w":1300,"h":1300},"options":[{"text":"So she counts every duck once","speak":"So she counts every duck once"},{"text":"So the ducks go in faster","speak":"So the ducks go in faster"},{"text":"So she has lots of pebbles","speak":"So she has lots of pebbles"}],"correct":0,"explanation":"1 pebble for each duck. No duck is missed.","conceptMarker":"M2","tag":"M2: One for each"},{"id":"56-q2","question":"How many ducks are outside?","speak":"How many ducks are outside?","pictureNote":"on a plain white background with a faint peach dusk wash, a small duck house and its open door, no ducks anywhere, only a few feathers on the ground. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_56_q2.webp","w":1300,"h":1300},"options":[{"text":"2","speak":"2"},{"text":"1","speak":"1"},{"text":"0","speak":"0"}],"correct":2,"explanation":"No ducks at all. Zero means none. We write it 0.","conceptMarker":"M5","tag":"M5: Zero"},{"id":"56-q3","question":"How many pebbles are there?","speak":"How many pebbles are there?","pictureNote":"on a plain white background, 14 grey pebbles in two neat rows of seven on a stone step, a child's finger on the last one. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_56_q3.webp","w":1296,"h":601},"options":[{"text":"12","speak":"12"},{"text":"14","speak":"14"},{"text":"16","speak":"16"}],"correct":1,"explanation":"Count each pebble once. The last number is 14.","conceptMarker":"M1","tag":"M1: Count the picture"},{"id":"56-q4","question":"Zara counted: eighteen, nineteen. What does she say next?","speak":"Zara counted: eighteen, nineteen. What does she say next?","pictureNote":"on a plain white background, 20 grey pebbles in two rows of ten, a child's finger touching the nineteenth. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_56_q4.webp","w":1296,"h":893},"options":[{"text":"10","speak":"10"},{"text":"17","speak":"17"},{"text":"20","speak":"20"}],"correct":2,"explanation":"After nineteen comes twenty.","conceptMarker":"M1","tag":"M1: What comes next"},{"id":"56-q5","question":"Zara counts twelve ducks. She writes the number on the door. Which is right?","speak":"Zara counts twelve ducks. She writes the number on the door. Which is right?","pictureNote":"on a plain white background, Zara, a small girl with dark brown skin, two curly hair puffs with pink bobbles and a gap in her front teeth, in a yellow cotton frock with small white flowers and a soft pink knitted cardigan, stands at the small duck house door of flat dark boards in a bamboo frame, holding a stick of white chalk, and exactly 12 brown and white ducks stand in front of the door in two rows of six. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_56_q5.webp","w":1300,"h":1294},"options":[{"text":"20","speak":null},{"text":"12","speak":null},{"text":"2","speak":null}],"correct":1,"explanation":"Twelve: write a one, then a two.","conceptMarker":"M6","tag":"M6: Write a number"},{"id":"56-q6","question":"What number does the door say?","speak":"What number does the door say?","pictureNote":"on a plain white background with a faint peach dusk wash, a small duck house door of flat dark boards in a bamboo frame, the number 16 in large white chalk on it. Style: clean ink outline, flat colour fills with almost no texture, plain white background.","image":{"path":"assets/quiz/m01_56_q6.webp","w":1300,"h":1300},"options":[{"text":"Six","speak":"Six"},{"text":"Sixteen","speak":"Sixteen"},{"text":"Nineteen","speak":"Nineteen"}],"correct":1,"explanation":"Sixteen is a one, then a six.","conceptMarker":"M6","tag":"M6: Read a numeral"}]}]}}`), qp = { 0: { path: "assets/voice/coco/1b5a4ef376e9404a.mp3", dur: 1.1 }, 1: { path: "assets/voice/coco/a2774f27d329d41f.mp3", dur: 0.6 }, 2: { path: "assets/voice/coco/ddee04215aa823df.mp3", dur: 0.5 }, 4: { path: "assets/voice/coco/4eb33997fb1450b4.mp3", dur: 0.6 }, 5: { path: "assets/voice/coco/c35c73063bb2d5a4.mp3", dur: 0.6 }, 6: { path: "assets/voice/coco/12b3b26e5446da32.mp3", dur: 0.7 }, 7: { path: "assets/voice/coco/1b8278fe1f7ba619.mp3", dur: 0.9 }, 8: { path: "assets/voice/coco/4338363833fd2e4a.mp3", dur: 0.5 }, 9: { path: "assets/voice/coco/9c28b378549d9d1a.mp3", dur: 0.7 }, 10: { path: "assets/voice/coco/2140c408f57fece4.mp3", dur: 0.5 }, 12: { path: "assets/voice/coco/2bf38fc8648222d1.mp3", dur: 0.8 }, 14: { path: "assets/voice/coco/54b15a46f12f788e.mp3", dur: 1.1 }, 16: { path: "assets/voice/coco/2a82c89eda979828.mp3", dur: 0.9 }, 17: { path: "assets/voice/coco/f131747102961f65.mp3", dur: 0.9 }, 20: { path: "assets/voice/coco/669d08649d629682.mp3", dur: 0.6 }, 21: { path: "assets/voice/coco/d7838a191f48b26b.mp3", dur: 0.8 }, 22: { path: "assets/voice/coco/b139419fa85831bb.mp3", dur: 0.8 }, 23: { path: "assets/voice/coco/2b12fe16db9a3029.mp3", dur: 0.8 }, 32: { path: "assets/voice/coco/04e95eefc46a9f7d.mp3", dur: 0.9 }, 70: { path: "assets/voice/coco/04160a2e5d882e40.mp3", dur: 0.7 }, "In Assam, it gets dark early. Ducks must be inside by night. How would you know if one was missing?": { path: "assets/voice/coco/440e917a6e609a47.mp3", dur: 6.7 }, "Your turn! A duck goes in, a pebble goes in. What if one comes out?": { path: "assets/voice/coco/22afa588043709d3.mp3", dur: 5.9 }, "20 pebbles are in the bowl. 2 ducks go in. Then Crooked-tail comes out. How many pebbles now?": { path: "assets/voice/coco/6ad0b133aab52e8d.mp3", dur: 7.5 }, "2 in, 2 pebbles in: 22. 1 out, 1 pebble out: 21.": { path: "assets/voice/coco/1b47734e5fa27f03.mp3", dur: 6.3 }, "Your turn! Count the baskets in tens, then the bowl.": { path: "assets/voice/coco/382899d68edcae4f.mp3", dur: 3.6 }, "How many pebbles are there?": { path: "assets/voice/coco/a44ccfc56be7dbe4.mp3", dur: 1.7 }, "10, 20, 30, then 31, 32. Baskets of 10 make it quicker.": { path: "assets/voice/coco/223cad9e9f42a7dd.mp3", dur: 7.9 }, "Drop beans in a cup, one by one. Put them in tens.": { path: "assets/voice/coco/16cbfac1dc7afab3.mp3", dur: 4 }, "Can you get to 100?": { path: "assets/voice/coco/0031a83e4f5dd2c2.mp3", dur: 1.6 }, "5 ducks go in, one at a time. Neel drops 1 pebble for each. How many pebbles are in the bowl?": { path: "assets/voice/coco/e367f62a0dfc96dc.mp3", dur: 7.1 }, "1 pebble for each duck. 5 ducks, 5 pebbles.": { path: "assets/voice/coco/2dc7903320cfe2d9.mp3", dur: 4.4 }, "A duck pops back out of the door. What happens to her pebble?": { path: "assets/voice/coco/21e33578691b6deb.mp3", dur: 4.5 }, "She is outside now. Her pebble comes out.": { path: "assets/voice/coco/95dc8672cf99415d.mp3", dur: 3.2 }, "It stays in the bowl": { path: "assets/voice/coco/5275c383bd85d952.mp3", dur: 1.3 }, "It comes out of the bowl": { path: "assets/voice/coco/103b96b713859c6f.mp3", dur: 1.7 }, "A second pebble goes in": { path: "assets/voice/coco/622f869249392ac1.mp3", dur: 1.6 }, "A boy counts pebbles in baskets of 10: 10, 20, 30, 40, 50, 60, 70. How many baskets?": { path: "assets/voice/coco/3d0fb7e9c30b51ac.mp3", dur: 9.3 }, "1 basket for each number he says. 7 numbers, 7 baskets.": { path: "assets/voice/coco/c74e799114fcc529.mp3", dur: 4.7 }, "Both steps have 40 pebbles. Which is quicker to count?": { path: "assets/voice/coco/071340385ea4e894.mp3", dur: 3.4 }, "Baskets go 10, 20, 30, 40. That's quick!": { path: "assets/voice/coco/5c0a8f6a81b8d950.mp3", dur: 4.2 }, "The heap": { path: "assets/voice/coco/0c13858ac8d035c0.mp3", dur: 0.8 }, "The baskets": { path: "assets/voice/coco/060ffe8eb7039524.mp3", dur: 0.9 }, "Both are just as quick": { path: "assets/voice/coco/42d8f852998a0bbd.mp3", dur: 1.7 }, "A farmer counts his ducks: ninety-eight, ninety-nine. One more duck goes in. What does he say?": { path: "assets/voice/coco/266a94b02bb284fe.mp3", dur: 6.4 }, "After ninety-nine comes one hundred.": { path: "assets/voice/coco/6f284bbd63f6141f.mp3", dur: 2.6 }, "Ninety-ten": { path: "assets/voice/coco/90f2a56e18f0f732.mp3", dur: 1.2 }, "One hundred": { path: "assets/voice/coco/680e1d794539d9e6.mp3", dur: 1 }, Ninety: { path: "assets/voice/coco/81640bf73a893ea1.mp3", dur: 1 }, "Thomas writes seventy-four in chalk. Which one is right?": { path: "assets/voice/coco/ce1d65f1468622b9.mp3", dur: 3.5 }, "Seventy-four: write a seven, then a four.": { path: "assets/voice/coco/ca8c56590bbed6ef.mp3", dur: 3.2 }, "The door shows a number. The pebbles make 70. What should they do?": { path: "assets/voice/coco/23f8b842df554127.mp3", dur: 5 }, "The door says 71. 1 duck is still outside.": { path: "assets/voice/coco/4f0052f3d484ccb9.mp3", dur: 3.5 }, "Shut the door": { path: "assets/voice/coco/07e921a074481767.mp3", dur: 0.9 }, "Look for the missing duck": { path: "assets/voice/coco/8713228132fbf625.mp3", dur: 1.4 }, "Take a pebble out": { path: "assets/voice/coco/121064a564e10719.mp3", dur: 1.4 }, "A girl counts: 10, 20, 30, 40, 1, 2, 3. What went wrong?": { path: "assets/voice/coco/e531504f437baeba.mp3", dur: 10.8 }, "After 40 comes 41, 42, 43. She started again at 1.": { path: "assets/voice/coco/5fdf05e7c21f8773.mp3", dur: 6 }, "She went back to 1 after 40": { path: "assets/voice/coco/893a3ebfc83d3095.mp3", dur: 2.1 }, "She counted 1 basket too many": { path: "assets/voice/coco/10de9bcc7822ec4b.mp3", dur: 2.4 }, "Nothing, she counted it right": { path: "assets/voice/coco/1fdbf06683946bbb.mp3", dur: 2.1 }, "Great work!": { path: "assets/voice/coco/5b1b277ce47bb3fc.mp3", dur: 1.6 }, "You really know this!": { path: "assets/voice/coco/1c246ec4a2e84ca8.mp3", dur: 1.3 }, "Good job!": { path: "assets/voice/coco/6e52de952f61ae61.mp3", dur: 1.1 }, "You learned a lot!": { path: "assets/voice/coco/34a8363833c93769.mp3", dur: 1.7 }, "Nice try!": { path: "assets/voice/coco/edbaa4d5796ba054.mp3", dur: 0.7 }, "Every try helps you learn!": { path: "assets/voice/coco/11a70e4fe5e5facc.mp3", dur: 2.4 }, "In Assam, it gets dark early. Ducks must be in by night. How can you tell if one is missing?": { path: "assets/voice/coco/6a7db57e8ac2f57f.mp3", dur: 5.9 }, "8 ducks are in. A duck comes out. How many ducks are in now?": { path: "assets/voice/coco/ef14630dffd19a6c.mp3", dur: 4.9 }, "1 duck out, 1 pebble out. 8, then 7.": { path: "assets/voice/coco/5ccc00c9a5878268.mp3", dur: 4.5 }, "Your turn! The pebbles got pushed into a heap.": { path: "assets/voice/coco/7391aaf9628349c1.mp3", dur: 3.1 }, "The pebbles are in a heap now. Are there as many as in the line?": { path: "assets/voice/coco/462064629a844bd8.mp3", dur: 3.9 }, "8 in a line. 8 in a heap. Same!": { path: "assets/voice/coco/a5e328d2ede04a5e.mp3", dur: 3 }, "No, the line has more": { path: "assets/voice/coco/8668fd16172ebf82.mp3", dur: 2.4 }, "Yes, they are the same": { path: "assets/voice/coco/055ac001b4f70ac3.mp3", dur: 1.6 }, "No, the heap has more": { path: "assets/voice/coco/fba45a801fd5b3cd.mp3", dur: 1.9 }, "Count your shoes.": { path: "assets/voice/coco/24fc56ecb25b2df8.mp3", dur: 1.2 }, "Heap them. Same number?": { path: "assets/voice/coco/a032f73d1cb2a339.mp3", dur: 1.7 }, "Why does Zara drop 1 pebble for each duck?": { path: "assets/voice/coco/9c7773fe11de0573.mp3", dur: 3.1 }, "1 pebble for each duck. No duck is missed.": { path: "assets/voice/coco/657f2c1eb9c61d72.mp3", dur: 3.6 }, "So she counts every duck once": { path: "assets/voice/coco/69db786d153a3644.mp3", dur: 3.1 }, "So the ducks go in faster": { path: "assets/voice/coco/05554065aa374021.mp3", dur: 1.9 }, "So she has lots of pebbles": { path: "assets/voice/coco/666793a68ea4e6bb.mp3", dur: 2.7 }, "How many ducks are outside?": { path: "assets/voice/coco/da05beaca68231bf.mp3", dur: 1.8 }, "No ducks at all. Zero means none. We write it 0.": { path: "assets/voice/coco/95e73d7f1d33348f.mp3", dur: 5.8 }, "Count each pebble once. The last number is 14.": { path: "assets/voice/coco/cc4f74da96f980c8.mp3", dur: 4.3 }, "Zara counted: eighteen, nineteen. What does she say next?": { path: "assets/voice/coco/b232346df01a6321.mp3", dur: 5.1 }, "After nineteen comes twenty.": { path: "assets/voice/coco/95afb2a2e256f0ac.mp3", dur: 2.1 }, "Zara counts twelve ducks. She writes the number on the door. Which is right?": { path: "assets/voice/coco/d5dc7f95cf352bb5.mp3", dur: 5.7 }, "Twelve: write a one, then a two.": { path: "assets/voice/coco/1cf2156d52d6bc45.mp3", dur: 3 }, "What number does the door say?": { path: "assets/voice/coco/e609ffd34386a307.mp3", dur: 1.5 }, "Sixteen is a one, then a six.": { path: "assets/voice/coco/8636614a270e8ba4.mp3", dur: 3.5 }, Six: { path: "assets/voice/coco/d5850a1d189478a0.mp3", dur: 0.6 }, Sixteen: { path: "assets/voice/coco/18a2bbce421add9c.mp3", dur: 1 }, Nineteen: { path: "assets/voice/coco/f2fe145ba5015371.mp3", dur: 1 }, "Nice one!": { path: "assets/voice/coco/508e430b896e78be.mp3", dur: 0.8 }, "Good try!": { path: "assets/voice/coco/e45e365905a6590f.mp3", dur: 1.1 }, "Hmm... let's see what happens!": { path: "assets/voice/coco/060ca97d11a01bd6.mp3", dur: 2.2 }, "Ooh, let's find out!": { path: "assets/voice/coco/fc271b1798cc107e.mp3", dur: 2.7 }, "Good thinking! Let's see.": { path: "assets/voice/coco/884dd9e7e5402ca0.mp3", dur: 2.1 } }, IA = {
  id: kp,
  title: Rp,
  kicker: Np,
  episode: Up,
  subject: Qp,
  minutes: Op,
  conceptMarkers: zp,
  canonicalBand: jp,
  bands: Hp,
  voice: qp
};
let p0 = "";
function Zp(s) {
  p0 = (s || "").replace(/\/+$/, "");
}
function Je(s) {
  if (/^(https?:|data:|blob:)/.test(s)) return s;
  const o = s.startsWith("/") ? s : "/" + s;
  return p0 + o + (o.includes("?") ? "&" : "?") + "v=mwt8brn5";
}
const Me = { on: !1 }, ff = (s, o, g) => Math.max(o, Math.min(g, s)), Kp = (s) => ff(350 + s.length * 24, 1100, 3200), Lp = (s) => ff(1400 + s.length * 14, 2e3, 3500), Ip = 1800, Fp = 1800, Jp = (s) => ff(1800 + s.length * 20, 2600, 4500), Xp = { Zara: 1.35, Neel: 1, Thomas: 1.12, "Grandma Leena": 0.82, Auntie: 0.9, Granddaughter: 1.25, Coco: 1.08 }, Wp = (s, o, g) => Math.max(o, Math.min(g, s)), Pp = (s) => Wp(500 + s.length * 36, 1300, 5500);
function _p() {
  const s = navigator.userActivation;
  return !s || s.hasBeenActive;
}
let ac = !1;
function lf() {
  try {
    ac = (window.speechSynthesis?.getVoices().length || 0) > 0;
  } catch {
    ac = !1;
  }
  return ac;
}
typeof window < "u" && window.speechSynthesis && (lf(), window.speechSynthesis.addEventListener?.("voiceschanged", lf));
const $p = () => !y0 && (ac || lf()), FA = 1200;
let Fo = 0, y0 = !1;
function t1() {
  try {
    const o = window.speechSynthesis.getVoices().filter((g) => g.localService);
    return o.find((g) => /^en[-_]IN/i.test(g.lang)) || o.find((g) => /^en[-_](GB|US|AU)/i.test(g.lang)) || o.find((g) => /^en/i.test(g.lang)) || null;
  } catch {
    return null;
  }
}
class e1 {
  enabled = !0;
  audio = null;
  token = 0;
  timer;
  watchdog;
  utter = null;
  // kept so the browser does not drop it before "end"
  ensureAudio() {
    return this.audio || (this.audio = new Audio(), this.audio.preload = "auto"), this.audio;
  }
  cancel() {
    if (this.token++, window.clearTimeout(this.timer), window.clearTimeout(this.watchdog), this.audio) {
      this.audio.onended = null, this.audio.onerror = null;
      try {
        this.audio.pause();
      } catch {
      }
    }
    try {
      window.speechSynthesis?.cancel();
    } catch {
    }
  }
  /** read one line; onDone fires when it ends (or its reading time is up) */
  say(o, g) {
    this.cancel();
    const f = this.token;
    let V = !1;
    const x = () => {
      V || f !== this.token || (V = !0, window.clearTimeout(this.timer), window.clearTimeout(this.watchdog), g());
    }, Y = Pp(o.text);
    if (!this.enabled || !o.text || Me.on) {
      this.timer = window.setTimeout(x, Y);
      return;
    }
    if (o.audio?.path) {
      const N = this.ensureAudio();
      N.src = Je(o.audio.path), N.onended = x, N.onerror = () => {
        f === this.token && (this.timer = window.setTimeout(x, Y));
      };
      const H = N.play();
      H && H.catch && H.catch(() => {
        f === this.token && (this.timer = window.setTimeout(x, Y));
      }), this.watchdog = window.setTimeout(x, ((o.audio.dur || 12) + 3) * 1e3);
      return;
    }
    const k = typeof window < "u" ? window.speechSynthesis : void 0;
    if (!k || !_p() || !$p()) {
      this.timer = window.setTimeout(x, Y);
      return;
    }
    try {
      const N = new SpeechSynthesisUtterance(o.text), H = t1();
      H ? (N.voice = H, N.lang = H.lang) : N.lang = "en-IN", N.rate = 0.95, N.pitch = Xp[o.speaker || "Coco"] ?? 1.05;
      let T = !1;
      N.onstart = () => {
        T = !0, Fo = 0;
      }, N.onend = x, N.onerror = () => {
        f === this.token && (window.clearTimeout(this.watchdog), this.timer = window.setTimeout(x, Y));
      }, this.utter = N;
      try {
        k.resume();
      } catch {
      }
      k.speak(N), this.watchdog = window.setTimeout(() => {
        if (!(T || f !== this.token)) {
          Fo += 1, Fo >= 2 && (y0 = !0);
          try {
            k.cancel();
          } catch {
          }
          window.clearTimeout(this.timer), this.timer = window.setTimeout(x, Math.max(0, Y - FA));
        }
      }, FA), this.timer = window.setTimeout(() => {
        f === this.token && x();
      }, Y * 1.8 + 2500);
    } catch {
      this.timer = window.setTimeout(x, Y);
    }
  }
  /** read several short lines one after another (a question and its options); stops quietly when cancelled */
  sayAll(o, g) {
    const f = (V) => {
      if (V >= o.length) {
        g?.();
        return;
      }
      this.say(o[V], () => f(V + 1));
    };
    f(0);
  }
}
const JA = (s) => {
  let o;
  const g = /* @__PURE__ */ new Set(), f = (H, T) => {
    const w = typeof H == "function" ? H(o) : H;
    if (!Object.is(w, o)) {
      const q = o;
      o = T ?? (typeof w != "object" || w === null) ? w : Object.assign({}, o, w), g.forEach((J) => J(o, q));
    }
  }, V = () => o, k = { setState: f, getState: V, getInitialState: () => N, subscribe: (H) => (g.add(H), () => g.delete(H)) }, N = o = s(f, V, k);
  return k;
}, a1 = ((s) => s ? JA(s) : JA), l1 = (s) => s;
function n1(s, o = l1) {
  const g = de.useSyncExternalStore(
    s.subscribe,
    de.useCallback(() => o(s.getState()), [s, o]),
    () => o(s.getInitialState())
  );
  return de.useDebugValue(g), g;
}
const XA = (s) => {
  const o = a1(s), g = (f) => n1(o, f);
  return Object.assign(g, o), g;
}, u1 = ((s) => s ? XA(s) : XA), $t = u1((s) => ({
  cursor: -1,
  playing: !1,
  waiting: !1,
  finished: !1,
  readAloud: !0,
  openQuiz: null,
  thinking: null,
  results: {},
  set: (o) => s(o),
  reset: (o) => s({ cursor: -1, playing: !1, waiting: !1, finished: !1, readAloud: o, openQuiz: null, thinking: null, results: {} })
})), i1 = (s, o, g) => Math.max(o, Math.min(g, s));
function c1(s) {
  const o = [], g = {}, f = {};
  return s.forEach((V) => {
    V.type === "panel" ? V.dialogues.forEach((x) => {
      f[V.id] == null && (f[V.id] = o.length), g[x.id] = o.length, o.push({ type: "dlg", item: V, d: x });
    }) : V.type === "coco" ? (f[V.id] = o.length, g[V.id] = o.length, o.push({ type: "coco", item: V })) : (f[V.id] = o.length, g[V.id] = o.length, o.push({ type: "act", item: V }));
  }), { steps: o, stepOf: g, firstStepOf: f };
}
function Jo(s) {
  return s.type === "dlg" ? { text: s.d.text, speaker: s.d.kind === "narration" ? "Coco" : s.d.speaker, audio: s.d.audio } : s.type === "coco" ? { text: s.item.text, speaker: "Coco", audio: s.item.audio } : { text: s.item.intro.text, speaker: "Coco", audio: s.item.intro.audio };
}
class s1 {
  constructor(o, g, f) {
    this.steps = o, this.narrator = g, this.hooks = f;
  }
  timer;
  tok = 0;
  /** was playback running when the current dialog opened */
  wasPlaying = !1;
  get st() {
    return $t.getState();
  }
  resumeTok = 0;
  dispose() {
    this.tok++, window.clearTimeout(this.timer), this.narrator.cancel();
  }
  /** the reader scrolled by hand to a later panel: show it all, without reading or scrolling */
  reveal(o) {
    if (this.st.playing || this.st.openQuiz || o <= this.st.cursor) return;
    this.stopMedia(), this.st.set({ finished: !1, waiting: !1, cursor: Math.min(o, this.steps.length - 1) });
    const g = this.steps[this.st.cursor];
    g && this.hooks.onStep(this.st.cursor, g);
  }
  /** a bubble was tapped: make it the current line and read just that line */
  replay(o) {
    if (this.st.openQuiz) return;
    this.stopMedia(), this.st.set({ playing: !1, finished: !1, waiting: !1, cursor: o });
    const g = this.steps[o];
    g && (this.hooks.onStep(o, g), this.narrator.say(Jo(g), () => {
    }));
  }
  goto(o) {
    this.stopMedia();
    const g = i1(o, -1, this.steps.length - 1);
    this.st.set({ finished: !1, waiting: !1, cursor: g }), g >= 0 && this.hooks.onStep(g, this.steps[g]), this.st.playing && this.playStep();
  }
  stopMedia() {
    this.tok++, window.clearTimeout(this.timer), this.narrator.cancel(), this.st.thinking && this.st.set({ thinking: null });
  }
  playStep() {
    const o = this.steps[this.st.cursor];
    if (!o) return;
    const g = ++this.tok;
    if (Me.on) {
      const f = o.type === "dlg" ? Kp(o.d.text) : Lp(Jo(o).text);
      this.timer = window.setTimeout(() => {
        g === this.tok && this.afterStep();
      }, f);
      return;
    }
    this.narrator.say(Jo(o), () => {
      g === this.tok && this.afterStep();
    });
  }
  afterStep() {
    const o = this.steps[this.st.cursor];
    if (!o) return;
    if (o.type === "act") {
      if (this.st.set({ waiting: !0 }), Me.on) {
        const x = o.item;
        this.timer = window.setTimeout(() => {
          this.st.playing && this.st.waiting && this.openAct(x);
        }, 700);
      }
      return;
    }
    if (this.st.cursor >= this.steps.length - 1) {
      this.st.set({ playing: !1, finished: !0 });
      return;
    }
    const g = this.steps[this.st.cursor + 1], f = o.type === "dlg" && g?.type === "dlg" && g.item.id === o.item.id;
    if (o.type === "dlg" && o.d.thinkMs) {
      if (this.st.set({ thinking: o.d.id }), o.d.ask) return;
      this.timer = window.setTimeout(() => {
        this.st.set({ thinking: null }), this.st.playing && this.goto(this.st.cursor + 1);
      }, Me.on ? Ip : o.d.thinkMs);
      return;
    }
    const V = Me.on ? f ? 250 : 600 : f ? 350 : 800;
    this.timer = window.setTimeout(() => {
      this.st.playing && this.goto(this.st.cursor + 1);
    }, V);
  }
  /** the child picked an option in the thinking pause: the story goes on */
  answered() {
    this.st.thinking && (this.st.set({ thinking: null }), this.st.playing && this.goto(this.st.cursor + 1));
  }
  pause() {
    this.st.set({ playing: !1 }), this.stopMedia();
  }
  toggle() {
    if (!this.st.openQuiz) {
      if (this.st.playing) {
        this.pause();
        return;
      }
      if (this.st.set({ playing: !0 }), this.st.finished || this.st.cursor < 0) {
        this.goto(0);
        return;
      }
      if (this.st.waiting) {
        const o = this.steps[this.st.cursor];
        o && o.type === "act" && this.openAct(o.item);
        return;
      }
      this.playStep();
    }
  }
  stepBy(o) {
    this.st.openQuiz || (o < 0 ? this.goto(this.st.cursor <= 0 ? 0 : this.st.cursor - 1) : this.st.cursor < this.steps.length - 1 && this.goto(this.st.cursor + 1));
  }
  /** a checkpoint prompt's button: pause playback and open its dialog */
  openAct(o) {
    this.st.openQuiz || (this.wasPlaying = this.st.playing, this.st.playing ? this.pause() : this.stopMedia(), this.st.set({ openQuiz: o.id }), this.hooks.onOpenQuiz(o));
  }
  /** the dialog closed; `completed` is false when the child left it without finishing */
  quizClosed(o, g) {
    this.st.set({ openQuiz: null });
    const f = this.steps[this.st.cursor], V = !!f && f.type === "act" && f.item === o, x = this.st.cursor >= this.steps.length - 1;
    if (g && V) {
      if (x) {
        this.st.set({ playing: !1, finished: !0, waiting: !1 });
        return;
      }
      this.st.set({ playing: this.wasPlaying, waiting: !1 });
      const Y = ++this.resumeTok;
      window.setTimeout(() => {
        Y === this.resumeTok && this.goto(this.st.cursor + 1);
      }, 60);
      return;
    }
    if (this.wasPlaying)
      if (this.st.set({ playing: !0 }), V) this.st.set({ waiting: !0 });
      else {
        const Y = ++this.resumeTok;
        window.setTimeout(() => {
          Y === this.resumeTok && this.playStep();
        }, 60);
      }
  }
}
class o1 {
  constructor(o, g, f, V, x) {
    this.challengeId = g, this.band = f, this.stepsTotal = V, this.bus = o || null, this.bus ? (this.off = this.bus.on("mfe:progress-loaded", (Y) => {
      !Y || Y.challengeId !== g || (this.timesCompleted = Y.timesCompleted || 0, (Y.checkpointsDone || []).forEach((k) => this.checkpointsDone.add(k)), x(Y));
    }), this.bus.emit("mfe:request-progress", { challengeId: g })) : console.info("[coco-story] no event bus: events are logged only");
  }
  bus;
  off = null;
  lastPanel = "";
  checkpointsDone = /* @__PURE__ */ new Set();
  finalQuizRight = 0;
  finalQuizTotal = 0;
  completed = !1;
  timesCompleted = 0;
  payload(o) {
    return {
      progressType: "story",
      band: this.band,
      lastStep: o,
      stepsTotal: this.stepsTotal(),
      percent: this.stepsTotal() ? Math.min(100, Math.round((o + 1) / this.stepsTotal() * 100)) : 0,
      completed: this.completed,
      timesCompleted: this.timesCompleted,
      checkpointsDone: [...this.checkpointsDone],
      finalQuizRight: this.finalQuizRight,
      finalQuizTotal: this.finalQuizTotal,
      lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  /** the version as the app's stage number: 5-6 = 1 (S1), 6-7 = 2 (S2) */
  get stage() {
    return this.band === "5-6" ? 1 : 2;
  }
  emit(o, g) {
    this.bus && this.bus.emit(o, g);
  }
  /** each new panel reached */
  panelReached(o, g) {
    o !== this.lastPanel && (this.lastPanel = o, this.emit("mfe:progress-updated", { challengeId: this.challengeId, progress: this.payload(g) }));
  }
  /** one checkpoint or quiz answer; `question` is the field the app reads as the item id (`itemId` kept as before) */
  question(o) {
    this.emit("mfe:question-completed", { challengeId: this.challengeId, band: this.band, stage: this.stage, question: o.itemId, ...o });
  }
  checkpointDone(o, g) {
    this.checkpointsDone.add(o), this.emit("mfe:progress-updated", { challengeId: this.challengeId, progress: this.payload(g) });
  }
  /** the final quiz is finished: progress, then game-complete (in that order) */
  finalQuizDone(o, g, f) {
    this.finalQuizRight = o, this.finalQuizTotal = g, this.completed = !0, this.timesCompleted += 1, this.emit("mfe:progress-updated", { challengeId: this.challengeId, progress: this.payload(f) });
    const V = g > 0 ? o / g >= 0.8 ? 3 : o / g >= 0.5 ? 2 : 1 : 3;
    this.emit("mfe:game-complete", {
      challengeId: this.challengeId,
      score: o,
      total: g,
      stars: V,
      level: this.stage,
      stage: this.stage,
      completed: !0,
      replay: this.timesCompleted > 1,
      progress: this.payload(f)
    });
  }
  quit() {
    this.emit("mfe:quit-challenge", { challengeId: this.challengeId });
  }
  fatal(o) {
    this.emit("mfe:error", { error: o });
  }
  dispose() {
    this.off?.(), this.off = null;
  }
}
const f1 = "data:audio/mpeg;base64,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YGAwWDFzh+gXkACEQbK4MB2EQeBjpIgDJQMMDYPC6+GGBsHBdf4DwCA8AgNADisCsBq7/FV+QhC/H4fv///kW/loslqAIikOhJAQCDAMMqCoYEBjYLmAxsZKG5xEQlgVGKzqZUFptMwG8j8YtJhrRFmFxUEjcwvJzmIXEQmYSVgkFMaIBU/MgDj/LI9LIPSSqAzKFV2QBKnIw/OUioYugDMqbCbm//PkZGEpchUwH85sACpR7kARnNAAlFQsAOgWCGMOkLDrOyEJSS81RqN+QCtBMDITQSEFAFE6EaonXdGG3+ae9DTRhBNVNwqBGLiwQgmglb/SRUr/yRknqwQGpy38GQJSGQEJoIuYYLGVgRmxUiqVkCy8dzv0Lm/it1v6eB7l9TiB4PMhLQw3XwYQHCwArYrhBQME/+l//////1zLmf/z//jE0U1WmAgqnzGxMmA4ouxhaa7w/////////////////////6twYAKTXmlevT/f9/5OiYgEaZF3///////////////////////////////Vjg//gyDnLcty4O/4P//csABggAJkYpqdmTB8p0Y4NR6BFmPiOa6mBmUEGXnyaEExWFDLAJCwAMEhsWAZg8KAhCF+KC4Y2LD8rKs4McONyBdM32WjBIB0jE0lEQQboiwVFgAqsEliOQJSgI6t4iauiFloYAX+REaBXIJHM4ZZdbKNCfpEo7yncRvxdWyifF1vjN95Xk+7c+5SXfu/9FQRr6D/zsUV/uVrmqaKxK9SSWL/djP//////3m8AAcQQQsFpRQkJBZKDWwWojqwLpQshOnYLAg41MiIG5mL4NYPBA5BKrcaEAF0w3YBX0KJgZq0//PkZDclsgtIu81sAScKbnFBmqAAZYLBbUdeiMmajFRpBKv00dNdd8nSNGFF9xsUJxYc9nIYIkJakjRxkFAQqTiwH8ZBASCA8LBJikUCnx0lcut5CQCwDQe02kHQ5xfpiwcK6jTOBYdX0rcvuioF8UP+6tH74Kf/0UGLOCjqJD1z0nVctK/2ytn/4hdTf/03U4v+NRouCIiAeJGGomsQTWL3MJHi+lu+2Sn+9Ev+7J/+JN2U/fuXb33qb/VlxyfZm1yml8uz7duU0fs2b/3JB36Hn1MP+7nEL//d/6W98k//+/QL5daM0EaoqGgof+g//jX///9Djz/59y//6///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QBuKNGsDrhCWVHV8TxsALfF4I0AiPQrA6DgzWFEfX8pq8euuRRrGA/Ob+gjiwfnCCsplJvNOv+/nb+UE0ZEJevH0ejMer4wRhOX/mkJZQg0pQgrOYIwtMx6wjD6vGki4Ox4B5f9L3H2w//PkZOcgtezmAWmP26s0FeQGwkte/LOv975Tb48081DngRIcfCvJlHD4CNGGESwEIHgAeBQJ6NUUkjaLodluNHG+UEPZzUfnZ1pLqMxmqKhL7LinpHRamZND0Pf8kjcmzzhhzuTuGFHw8f5acDWf8rAMlpzmW80YoiZCsD57nRgtMtPlRg7ZqHDRY7DnA8VzzPH+WhnuZmf8y0/Zae////wKnYFYf///3M8d5mH//8DW/8Lk5Qkskijeowu3SOSmLtwYtBFfVGF0fQRJ9BEnEQqBSCJPOKugi3QRJ///yCzVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0hLo3h/BmjoBvD5HaLIIkAJRPAYx8iaoYJKXgA2H2CpOgA2FfARTZDBPgypTlWDSU6qYYjknUwli2rh1G8K7DR9GYp2FlblEiUqX50nlUiUqAYnDJZh+IiqATBUPHhU2KTjbiYBRsWJlUnkKAVMAkRhlIVIxSUJVBU2CJAGjopTQwavP5SuGxyTyFclWups1LJbZCNC4IlHSlsY00VehyVPlSXCRqquahI1Ak8+pOWRw5ZGORAkwk52csxZFtotE1EUsFQJWRuZKSNliRSTz2p0//PkRNIbtezYAD0myK/8EcQOM8wZS0abcdabgShRJUTaU3IKAVp1kNI+TxN5CSRGuLafhlSq2JBVp3IIgp0DiO1KQCkAo1EoKBT0aayIpMjoKgSsiUuXbSJS0aElonbnkpIGTAJRJyMA0AyZGCVkWZ8JHkSgoTeFqJFqr/+nyn51kWJWRMCjt7yUkahMnabLU9aCmBQkaSLvK8tppUb//lES0CReVaJ0EjVEnntJyyOHaRKhyk1JETj9z//90gUgFFonJOSNVrJGxRpQUaicSPAIGEnJPOVtVKJyRGDoXWG1TEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV", r1 = "data:audio/mpeg;base64,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";
let b0 = !0;
function WA(s) {
  b0 = s;
}
const PA = (s, o) => {
  const g = new Audio(s);
  return g.preload = "auto", g.volume = o, g;
};
let Xo = null, Wo = null;
function _A(s) {
  if (!(!b0 || Me.on))
    try {
      s.currentTime = 0, s.play().catch(() => {
      });
    } catch {
    }
}
const nf = {
  correct() {
    Me.on || (Xo ??= PA(f1, 0.8), _A(Xo));
  },
  success() {
    Me.on || (Wo ??= PA(r1, 0.8), _A(Wo));
  },
  stop() {
    [Xo, Wo].forEach((s) => {
      try {
        s?.pause();
      } catch {
      }
    });
  }
}, uf = (s, o, g) => Math.max(o, Math.min(g, s));
function h1(s) {
  const o = s % 2 === 0, g = 52, f = o ? 6 : 42, V = Math.min(5 + s * 17, 72);
  return { x: f, y: V, w: g, tx: f + g / 2 + (o ? -6 : 6), ty: Math.min(V + 24, 96) };
}
function d1(s, o, g, f, V, x) {
  const Y = g >= 0 && g <= s && f >= 0 && f <= o;
  V = V <= 0 ? 0 : Math.max(2, Math.min(V, o / 2, s / 2));
  let k = "M" + V + ",0";
  if (Y)
    return k + "H" + (s - V) + "Q" + s + ",0 " + s + "," + V + "V" + (o - V) + "Q" + s + "," + o + " " + (s - V) + "," + o + "H" + V + "Q0," + o + " 0," + (o - V) + "V" + V + "Q0,0 " + V + ",0Z";
  const N = s / 2, H = o / 2, T = g - N, w = f - H, q = Math.abs(T) / N > Math.abs(w) / H ? T > 0 ? "r" : "l" : w > 0 ? "b" : "t", J = V + x, ft = (ht, et) => {
    const lt = et - V - x;
    return lt < J ? et / 2 : uf(ht, J, lt);
  }, U = ft(N + (g - N) * 0.5, s), Z = ft(H + (f - H) * 0.5, o);
  return q === "t" && (k += "H" + (U - x) + "L" + g + "," + f + "L" + (U + x) + ",0"), k += "H" + (s - V) + "Q" + s + ",0 " + s + "," + V, q === "r" && (k += "V" + (Z - x) + "L" + g + "," + f + "L" + s + "," + (Z + x)), k += "V" + (o - V) + "Q" + s + "," + o + " " + (s - V) + "," + o, q === "b" && (k += "H" + (U + x) + "L" + g + "," + f + "L" + (U - x) + "," + o), k += "H" + V + "Q0," + o + " 0," + (o - V), q === "l" && (k += "V" + (Z + x) + "L" + g + "," + f + "L0," + (Z - x)), k + "V" + V + "Q0,0 " + V + ",0Z";
}
function A1({ d: s, n: o, on: g, current: f, panelEl: V, onTap: x }) {
  const Y = s.bubble || h1(o), k = z.useRef(null), [N, H] = z.useState(""), [T, w] = z.useState({ w: 0, h: 0, tx: 0, ty: 0, sw: 2 }), q = z.useRef(""), J = () => {
    const ft = V.current, U = k.current;
    if (!ft || !U) return;
    const Z = ft.clientWidth, ht = ft.clientHeight, et = U.offsetWidth, lt = U.offsetHeight;
    if (!Z || !et || !lt) return;
    const $ = [Z, ht, et, lt, Y.x, Y.y, Y.tx, Y.ty].join();
    if ($ === q.current) return;
    q.current = $;
    const mt = Y.tx / 100 * Z - Y.x / 100 * Z, it = Y.ty / 100 * ht - Y.y / 100 * ht, X = uf(Z * 45e-4, 2, 3.5);
    H(d1(et, lt, mt, it, 0, uf(Z * 0.03, 9, 20))), w({ w: et, h: lt, tx: mt, ty: it, sw: X });
  };
  return z.useLayoutEffect(J), z.useEffect(() => {
    const ft = V.current, U = k.current;
    if (!ft || !U || typeof ResizeObserver > "u") return;
    const Z = new ResizeObserver(J);
    return Z.observe(ft), Z.observe(U), document.fonts?.ready.then(J), () => Z.disconnect();
  }, []), /* @__PURE__ */ h.jsxs(
    "div",
    {
      ref: k,
      className: "cs-bubble" + (g ? " is-on" : "") + (f ? " is-current" : ""),
      "data-step-id": s.id,
      "data-speaker": s.speaker,
      style: { left: Y.x + "%", top: Y.y + "%", width: Y.w + "%", transformOrigin: `${T.tx}px ${T.ty}px`, "--bs": String((Y.fs || 100) / 100) },
      onClick: g ? x : void 0,
      role: g ? "button" : void 0,
      "aria-label": g ? `${s.speaker}: ${s.text}. Tap to hear it again` : void 0,
      children: [
        /* @__PURE__ */ h.jsxs("svg", { className: "cs-bubble-svg", width: T.w, height: T.h, "aria-hidden": "true", children: [
          /* @__PURE__ */ h.jsx("path", { className: "cs-bubble-sh", d: N, strokeWidth: T.sw, transform: `translate(${T.sw * 1.5},${T.sw * 1.5})` }),
          /* @__PURE__ */ h.jsx("path", { className: "cs-bubble-body", d: N, strokeWidth: T.sw })
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "cs-bubble-text", children: s.text })
      ]
    }
  );
}
const Cu = { fill: "none", stroke: "#0D0D0D", strokeWidth: 2.6, strokeLinecap: "round", strokeLinejoin: "round" }, rf = ({ size: s = 28, body: o }) => /* @__PURE__ */ h.jsx("svg", { width: s, height: s, viewBox: "0 0 48 48", "aria-hidden": "true", fill: "none", dangerouslySetInnerHTML: { __html: o } }), lc = ({ size: s = 28 }) => /* @__PURE__ */ h.jsx(rf, { size: s, body: '<path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="#4AC1BD" stroke="#2E8E8A" stroke-width="3.4" stroke-linejoin="round"/><path d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33" stroke="#2E8E8A" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.2359 41.1857C40.0836 37.6953 44 31.305 44 24C44 16.8085 40.2043 10.5035 34.507 6.97906" stroke="#2E8E8A" stroke-width="3.4" stroke-linecap="round"/>' }), g1 = ({ size: s = 28 }) => /* @__PURE__ */ h.jsx(rf, { size: s, body: '<path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="#D9D9D9" stroke="#9A9A9A" stroke-width="3.4" stroke-linejoin="round"/><path d="M32 18L44 30" stroke="#9A9A9A" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 18L32 30" stroke="#9A9A9A" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>' }), m1 = ({ size: s = 40, empty: o = !1 }) => /* @__PURE__ */ h.jsx(rf, { size: s, body: `<path d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z" fill="${o ? "#F1F1F1" : "#FDBE35"}" stroke="${o ? "#D9D9D9" : "#C98A12"}" stroke-width="3.4" stroke-linejoin="round"/>` }), p1 = () => /* @__PURE__ */ h.jsx("svg", { width: 26, height: 26, viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M4 12h15M13 6l6 6-6 6", fill: "none", stroke: "#FFFFFF", strokeWidth: 2.8, strokeLinecap: "round", strokeLinejoin: "round" }) }), y1 = () => /* @__PURE__ */ h.jsx("svg", { width: "26", height: "26", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M8 4.8v14.4a.6.6 0 0 0 .9.5l11.6-7.2a.6.6 0 0 0 0-1L8.9 4.3a.6.6 0 0 0-.9.5z", fill: "#0D0D0D", stroke: "#0D0D0D", strokeWidth: "1.5", strokeLinejoin: "round" }) }), b1 = () => /* @__PURE__ */ h.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", "aria-hidden": "true", children: [
  /* @__PURE__ */ h.jsx("rect", { x: "6", y: "4.5", width: "4.2", height: "15", fill: "#0D0D0D" }),
  /* @__PURE__ */ h.jsx("rect", { x: "13.8", y: "4.5", width: "4.2", height: "15", fill: "#0D0D0D" })
] }), w1 = () => /* @__PURE__ */ h.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", ...Cu, "aria-hidden": "true", children: [
  /* @__PURE__ */ h.jsx("path", { d: "M4 12a8 8 0 1 0 2.6-5.9" }),
  /* @__PURE__ */ h.jsx("path", { d: "M4 4v5h5" })
] }), v1 = () => /* @__PURE__ */ h.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", ...Cu, strokeWidth: 3, "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M15 5l-7 7 7 7" }) }), V1 = () => /* @__PURE__ */ h.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", ...Cu, strokeWidth: 3, "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M9 5l7 7-7 7" }) }), cf = () => /* @__PURE__ */ h.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", ...Cu, strokeWidth: 3, "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M5 5l14 14M19 5L5 19" }) }), $A = ({ color: s = "#1E7B3A" }) => /* @__PURE__ */ h.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: s, strokeWidth: "3.4", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M4 12.5l5 5L20 6.5" }) }), t0 = () => /* @__PURE__ */ h.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", ...Cu, strokeWidth: 2.6, "aria-hidden": "true", children: [
  /* @__PURE__ */ h.jsx("circle", { cx: "10.5", cy: "10.5", r: "6" }),
  /* @__PURE__ */ h.jsx("path", { d: "M15 15l5 5M10.5 8v5M8 10.5h5" })
] }), e0 = ({ size: s = 64 }) => /* @__PURE__ */ h.jsxs("svg", { className: "cs-eye-closed", width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "#000000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ h.jsx("path", { d: "m15 18-.722-3.25" }),
  /* @__PURE__ */ h.jsx("path", { d: "M2 8a10.645 10.645 0 0 0 20 0" }),
  /* @__PURE__ */ h.jsx("path", { d: "m20 15-1.726-2.05" }),
  /* @__PURE__ */ h.jsx("path", { d: "m4 15 1.726-2.05" }),
  /* @__PURE__ */ h.jsx("path", { d: "m9 18 .722-3.25" })
] }), M1 = {
  happy: 2200,
  wow: 1600,
  look: 2800,
  think: 3e3,
  wink: 1600,
  calm: 3400,
  oops: 1400,
  sad: 3e3,
  dizzy: 2400
}, a0 = 5e3, E1 = 9e3, l0 = 280, $i = 340, Nl = "#2B1A10", R = { l: 38, r: 62, y: 60 }, Po = 3.2, hf = (s, o, g, f, V, x) => [...s, ...o, ...g, ...f, ...V, ...x], uc = (s, o, g, f) => hf(s, o, g, f, g, o), va = (s, o, g) => uc(s, [s[0] + 2 / 3 * (o[0] - s[0]), s[1] + 2 / 3 * (o[1] - s[1])], [g[0] + 2 / 3 * (o[0] - g[0]), g[1] + 2 / 3 * (o[1] - g[1])], g), ic = (s, o, g, f) => {
  const V = 1.3333333333333333 * f;
  return hf([s - g, o], [s - g, o - V], [s + g, o - V], [s + g, o], [s + g, o + V], [s - g, o + V]);
}, Dn = (s) => `M${s[0]} ${s[1]} C${s[2]} ${s[3]} ${s[4]} ${s[5]} ${s[6]} ${s[7]} C${s[8]} ${s[9]} ${s[10]} ${s[11]} ${s[0]} ${s[1]} Z`, Eu = (s) => ic(s, R.y, 3.2, 3.2), n0 = (s) => va([s - 5.5, R.y + 0.5], [s, R.y + 0.5], [s + 5.5, R.y + 0.5]), u0 = (s) => va([s - 5.5, R.y + 2], [s, R.y - 5], [s + 5.5, R.y + 2]), i0 = (s) => va([s - 5.5, R.y - 1.5], [s, R.y + 5], [s + 5.5, R.y - 1.5]), C1 = (s) => va([s - 6, R.y + 1], [s, R.y - 5.5], [s + 6, R.y + 1]), c0 = (s, o) => va([s - 5.5 * o, R.y + 1], [s, R.y + 3.4], [s + 5.5 * o, R.y + 2.6]), Ue = (s, o = 0, g = 0) => ic(s + o, R.y + g, 2.3, 2.3), s0 = (s, o) => uc([s - 5 * o, R.y - 4], [s + 5.7 * o, R.y], [s + 5.7 * o, R.y], [s - 5 * o, R.y + 4]), o0 = (s) => uc([s - 4, R.y - 4], [s - 1.3, R.y - 1.3], [s + 1.3, R.y + 1.3], [s + 4, R.y + 4]), w0 = va([39, 71], [50, 80.5], [61, 71]), _o = va([44, 72], [50, 77], [56, 72]), B1 = hf([38.5, 70], [46, 70], [54, 70], [61.5, 70], [54, 80.5], [46, 80.5]), D1 = ic(50, 74, 2.4, 3.4), x1 = ic(50, 74, 1.1, 1.5), S1 = va([42, 77], [50, 70], [58, 77]), f0 = uc([40, 74], [46, 68.5], [54, 79.5], [60, 74]), $o = va([46, 74], [53, 77], [58, 71]), Y1 = va([40, 72], [51, 81], [62, 69]), tc = { l: Eu(R.l), r: Eu(R.r), m: w0 }, tf = {
  idle: { pose: tc, blink: !0 },
  happy: { pose: { l: u0(R.l), r: u0(R.r), m: B1, x: ["tongue"] } },
  wow: { pose: { l: Ue(R.l), r: Ue(R.r), m: D1, x: ["whites"] } },
  // a glance to the side and back
  look: {
    pose: { l: Ue(R.l, 2.4), r: Ue(R.r, 2.4), m: _o, x: ["whites"] },
    seq: [
      [{ l: Ue(R.l, 2.4), r: Ue(R.r, 2.4), m: _o, x: ["whites"] }, 900],
      [{ l: Ue(R.l, -2.4), r: Ue(R.r, -2.4), m: _o, x: ["whites"] }, 900]
    ],
    loop: !0
  },
  // eyes up, drifting from one side to the other while he thinks
  think: {
    pose: { l: Ue(R.l, -1.6, -2.8), r: Ue(R.r, -1.6, -2.8), m: $o, x: ["whites"] },
    seq: [
      [{ l: Ue(R.l, -1.6, -2.8), r: Ue(R.r, -1.6, -2.8), m: $o, x: ["whites"] }, 1100],
      [{ l: Ue(R.l, 1.4, -2.6), r: Ue(R.r, 1.4, -2.6), m: $o, x: ["whites"] }, 1100]
    ],
    loop: !0
  },
  // both eyes open, then the right one squeezes shut with a lopsided grin and opens again
  wink: {
    pose: tc,
    seq: [
      [tc, 280],
      [{ l: Eu(R.l), r: C1(R.r), m: Y1, x: ["cheek"] }, 620],
      [tc, 0]
    ]
  },
  calm: { pose: { l: i0(R.l), r: i0(R.r), m: w0 } },
  oops: { pose: { l: s0(R.l, -1), r: s0(R.r, 1), m: f0 } },
  sad: { pose: { l: Eu(R.l), r: Eu(R.r), m: S1, x: ["brows"] } },
  sleepy: { pose: { l: c0(R.l, -1), r: c0(R.r, 1), m: x1, x: ["zz"] } },
  dizzy: { pose: { l: o0(R.l), r: o0(R.r), m: f0, x: ["cross"] } }
}, r0 = ({ x: s, y: o, rot: g, s: f }) => /* @__PURE__ */ h.jsxs("g", { transform: `translate(${s} ${o}) rotate(${g}) scale(${f})`, children: [
  /* @__PURE__ */ h.jsx("path", { d: "M0 0 Q10 -14 26 -12 Q16 2 0 0 Z", fill: "#5FB26B" }),
  /* @__PURE__ */ h.jsx("path", { d: "M2 -1 Q12 -9 23 -10.5", stroke: "#4F9D69", strokeWidth: 1.4, fill: "none", strokeLinecap: "round" })
] }), T1 = () => typeof document < "u" && document.documentElement.dataset.motion === "off" || typeof window < "u" && (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1);
function G1(s, o) {
  const [g, f] = de.useState(s);
  return de.useEffect(() => {
    f(s);
    const V = M1[s];
    if (!V || o) return;
    let x = 0;
    const Y = () => {
      f(s), x = window.setTimeout(k, V);
    }, k = () => {
      f("idle"), x = window.setTimeout(Y, a0 + Math.random() * (E1 - a0));
    };
    return x = window.setTimeout(k, V), () => window.clearTimeout(x);
  }, [s, o]), g;
}
const k1 = (s) => s < 0.5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2, ef = (s, o, g) => s.map((f, V) => f + (o[V] - f) * g);
function R1({ size: s = 94, mood: o = "idle" }) {
  const g = Math.round(s * 184 / 196), f = T1(), V = G1(o, f), x = de.useRef(null), Y = de.useRef(null), k = de.useRef(null), N = de.useRef(null), H = de.useRef(tf[V].pose), T = de.useRef(0), [w, q] = de.useState(tf[V].pose.x ?? []), J = () => {
    Y.current?.setAttribute("d", Dn(H.current.l)), k.current?.setAttribute("d", Dn(H.current.r)), N.current?.setAttribute("d", Dn(H.current.m));
  }, ft = (it, X) => {
    if (cancelAnimationFrame(T.current), q(it.x ?? []), X <= 0) {
      H.current = it, J();
      return;
    }
    const ct = H.current, Lt = performance.now(), j = (zt) => {
      const Rt = k1(Math.min(1, (zt - Lt) / X));
      H.current = { l: ef(ct.l, it.l, Rt), r: ef(ct.r, it.r, Rt), m: ef(ct.m, it.m, Rt), x: it.x }, J(), Rt < 1 && (T.current = requestAnimationFrame(j));
    };
    T.current = requestAnimationFrame(j);
  };
  de.useEffect(() => {
    const it = tf[V];
    if (ft(it.pose, f ? 0 : $i), f) return () => cancelAnimationFrame(T.current);
    let X = !0;
    const ct = [], Lt = (j, zt) => ct.push(window.setTimeout(() => X && j(), zt));
    if (it.seq) {
      const j = it.seq;
      let zt = 0;
      const Rt = () => {
        if (zt >= j.length) {
          if (!it.loop) return;
          zt = 0;
        }
        const [It, ne] = j[zt++];
        ft(It, $i), Lt(Rt, $i + ne);
      };
      Lt(Rt, $i);
    }
    if (it.blink) {
      const j = () => {
        ft({ ...it.pose, l: n0(R.l), r: n0(R.r) }, 80), Lt(() => ft(it.pose, 130), 150), Lt(j, 2600 + Math.random() * 2600);
      };
      Lt(j, 1800 + Math.random() * 1800);
    }
    return () => {
      X = !1, ct.forEach((j) => window.clearTimeout(j)), cancelAnimationFrame(T.current);
    };
  }, [V, f]);
  const [U, Z] = de.useState(V), [ht, et] = de.useState(!1), lt = de.useRef("none");
  de.useLayoutEffect(() => {
    V !== U && (lt.current = !f && x.current ? getComputedStyle(x.current).transform : "none", Z(V), f || et(!0));
  }, [V, U, f]), de.useLayoutEffect(() => {
    if (!ht) return;
    const it = x.current?.animate([{ transform: lt.current }, { transform: "none" }], { duration: l0, easing: "cubic-bezier(.22,1,.36,1)" }), X = window.setTimeout(() => et(!1), l0);
    return () => {
      window.clearTimeout(X), it?.cancel();
    };
  }, [ht]);
  const $ = (it) => `coco-x${w.includes(it) ? " on" : ""}`, mt = { fill: Nl, stroke: Nl, strokeWidth: Po, strokeLinejoin: "round", strokeLinecap: "round" };
  return /* @__PURE__ */ h.jsx("div", { className: `coco coco-${U}${ht ? " coco-blending" : ""}`, style: { width: s, height: g, lineHeight: 0 }, children: /* @__PURE__ */ h.jsxs("svg", { ref: x, width: "100%", height: "100%", viewBox: "0 2 100 102", role: "img", "aria-label": "Coco", style: { overflow: "visible" }, children: [
    /* @__PURE__ */ h.jsxs("g", { className: "coco-leaves", children: [
      /* @__PURE__ */ h.jsx(r0, { x: 60, y: 24, rot: -40, s: 1.05 }),
      /* @__PURE__ */ h.jsx(r0, { x: 56, y: 26, rot: -78, s: 0.8 })
    ] }),
    /* @__PURE__ */ h.jsx("circle", { cx: 50, cy: 60, r: 41, fill: "#8E5D3A" }),
    /* @__PURE__ */ h.jsx("circle", { cx: 50, cy: 60, r: 38, fill: "#B07A4E" }),
    /* @__PURE__ */ h.jsx("ellipse", { cx: 50, cy: 26, rx: 27, ry: 8, fill: "#FFFBF2" }),
    /* @__PURE__ */ h.jsx("ellipse", { cx: 50, cy: 27, rx: 20, ry: 5, fill: "#F2E8D2" }),
    /* @__PURE__ */ h.jsx("ellipse", { className: $("whites"), cx: R.l, cy: R.y, rx: 6.6, ry: 7.4, fill: "#FFFFFF" }),
    /* @__PURE__ */ h.jsx("ellipse", { className: $("whites"), cx: R.r, cy: R.y, rx: 6.6, ry: 7.4, fill: "#FFFFFF" }),
    /* @__PURE__ */ h.jsx("path", { className: $("brows"), d: `M${R.l - 6} ${R.y - 8} L${R.l + 4} ${R.y - 11}`, stroke: Nl, strokeWidth: 2.6, strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("path", { className: $("brows"), d: `M${R.r + 6} ${R.y - 8} L${R.r - 4} ${R.y - 11}`, stroke: Nl, strokeWidth: 2.6, strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("path", { ref: Y, d: Dn(H.current.l), ...mt }),
    /* @__PURE__ */ h.jsx("path", { ref: k, d: Dn(H.current.r), ...mt }),
    /* @__PURE__ */ h.jsx("path", { className: $("cross"), d: `M${R.l + 4} ${R.y - 4} L${R.l - 4} ${R.y + 4}`, stroke: Nl, strokeWidth: Po, strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("path", { className: $("cross"), d: `M${R.r + 4} ${R.y - 4} L${R.r - 4} ${R.y + 4}`, stroke: Nl, strokeWidth: Po, strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("path", { className: $("cheek"), d: `M${R.r - 3.5} ${R.y + 5.5} Q${R.r} ${R.y + 4} ${R.r + 3.5} ${R.y + 5.5}`, stroke: Nl, strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeOpacity: 0.55 }),
    /* @__PURE__ */ h.jsx("path", { ref: N, d: Dn(H.current.m), ...mt }),
    /* @__PURE__ */ h.jsx("ellipse", { className: $("tongue"), cx: 50, cy: 78.4, rx: 5, ry: 2.6, fill: "#E5867A" }),
    /* @__PURE__ */ h.jsx("g", { className: $("zz"), children: /* @__PURE__ */ h.jsxs("g", { className: "coco-zz", fontFamily: "DM Sans, sans-serif", fontWeight: 800, fill: "#6B7B86", children: [
      /* @__PURE__ */ h.jsx("text", { x: 80, y: 30, fontSize: 12, children: "z" }),
      /* @__PURE__ */ h.jsx("text", { x: 88, y: 20, fontSize: 9, children: "z" })
    ] }) })
  ] }) });
}
function Ul({ className: s, size: o, mood: g = "idle", alt: f = "" }) {
  return /* @__PURE__ */ h.jsx("span", { className: s + " cs-coco-face", role: f ? "img" : void 0, "aria-label": f || void 0, "aria-hidden": f ? void 0 : !0, children: /* @__PURE__ */ h.jsx(R1, { size: o, mood: g }) });
}
const N1 = (s) => String.fromCharCode(65 + s), af = {
  3: ["Great work!", "You really know this!"],
  2: ["Good job!", "You learned a lot!"],
  1: ["Nice try!", "Every try helps you learn!"]
}, h0 = (s, o) => s / o >= 0.8 ? 3 : s / o >= 0.5 ? 2 : 1;
function U1({ item: s, narrator: o, onQuestion: g, onClose: f, onScore: V, clips: x }) {
  const Y = (D) => ({ text: D, speaker: "Coco", audio: x?.[D] }), [k, N] = z.useState(null), H = (D, G) => {
    N(D), o.say(Y(G), () => N((_) => _ === D ? null : _));
  }, T = s.questions, [w, q] = z.useState(0), [J, ft] = z.useState(null), [U, Z] = z.useState(0), [ht, et] = z.useState([]), [lt, $] = z.useState(!1), [mt, it] = z.useState(null), X = z.useRef(0), ct = z.useRef(performance.now()), Lt = z.useRef(null), j = T[w], zt = z.useRef(w);
  zt.current = w;
  const Rt = T.length > 1, It = !!j && j.options.length > 0 && j.options.every((D) => D.image), ne = s.kind === "final", Dt = !!j?.image && (!It || !!j.stem), O = Dt && It, at = Dt && (O || j.image.w / j.image.h >= 1.4), P = !!j?.flashMs && !!(j.image || It), [Ct, bt] = z.useState("ready"), [Nt, ue] = z.useState(0), Se = z.useRef(void 0), A = 2, S = P ? Dt ? [Je(j.image.path)] : j.options.map((D) => Je(D.image.path)) : [], W = z.useRef(null), L = z.useRef(!1);
  z.useEffect(() => {
    W.current = S.length ? Promise.all(S.map((D) => {
      const G = new Image();
      return G.src = D, G.decode().catch(() => {
      });
    })) : null;
  }, [w]);
  const dt = async () => {
    if (!j?.flashMs || Ct === "showing" || Nt >= A || (o.cancel(), L.current)) return;
    L.current = !0;
    const D = j.flashMs, G = w;
    await W.current, L.current = !1, G === zt.current && (bt("showing"), ue((_) => _ + 1), window.clearTimeout(Se.current), Se.current = window.setTimeout(() => bt("hidden"), D));
  }, yt = P && J === null && Ct !== "showing";
  z.useEffect(() => () => window.clearTimeout(Se.current), []);
  const Vt = () => {
    j && (N(null), o.say(Y(j.speak), () => {
    }));
  };
  z.useEffect(() => {
    if (!lt)
      return ft(null), it(null), window.clearTimeout(Se.current), bt("ready"), ue(0), X.current = 0, ct.current = performance.now(), Vt(), Lt.current?.focus({ preventScroll: !0 }), document.querySelector(".cs-dlg-body")?.scrollTo({ top: 0 }), () => o.cancel();
  }, [w, lt]), z.useEffect(() => () => {
    o.cancel();
  }, [o]);
  const I = (D) => {
    if (J !== null) return;
    X.current += 1;
    const G = D === j.correct;
    ft(D), G && (Z((_) => _ + 1), nf.correct()), et((_) => {
      const Ut = _.slice();
      return Ut[w] = G, Ut;
    }), g(j, G, X.current, w, Math.round(performance.now() - ct.current)), N(null), o.sayAll([Y(G ? "Nice one!" : "Good try!"), Y(j.explanation)]), window.setTimeout(() => document.querySelector(".cs-expl")?.scrollIntoView({ block: "nearest" }), 60);
  }, nt = () => {
    if (o.cancel(), !(w >= T.length - 1)) {
      q(w + 1);
      return;
    }
    if (!Rt || Me.on) {
      f(!0, { right: U, total: T.length });
      return;
    }
    $(!0), V?.(U, T.length), nf.success(), o.sayAll(af[h0(U, T.length)].map(Y));
  }, E = z.useRef({ choose: I, next: nt, startLook: dt });
  E.current = { choose: I, next: nt, startLook: dt }, z.useEffect(() => {
    if (!Me.on || lt || !j) return;
    const D = [];
    let G = Fp;
    return P && (D.push(window.setTimeout(() => {
      E.current.startLook();
    }, 700)), G = 700 + (j.flashMs || 0) + 1e3), D.push(window.setTimeout(() => E.current.choose(j.correct), G)), () => D.forEach((_) => window.clearTimeout(_));
  }, [w, lt]), z.useEffect(() => {
    if (!Me.on || J === null || !j) return;
    const D = window.setTimeout(() => E.current.next(), Jp(j.explanation));
    return () => window.clearTimeout(D);
  }, [J, w]);
  const st = s.label + (lt ? " · Results" : ""), ot = h0(U, T.length);
  return /* @__PURE__ */ h.jsx("div", { className: "cs-modal", onKeyDown: (D) => {
    D.key === "Escape" && (mt ? it(null) : f(!1));
  }, children: /* @__PURE__ */ h.jsxs("div", { className: "cs-dialog" + (!lt && (j?.image || It) ? " wide" : ""), role: "dialog", "aria-modal": "true", "aria-label": st, children: [
    !lt && /* @__PURE__ */ h.jsxs("div", { className: "cs-dlg-head", children: [
      !lt && /* @__PURE__ */ h.jsx(Ul, { className: "cs-coco sm", size: 40 }),
      /* @__PURE__ */ h.jsx("div", { className: "cs-dlg-space" }),
      Rt && !lt && /* @__PURE__ */ h.jsx("div", { className: "cs-dots in-head", role: "img", "aria-label": `Question ${w + 1} of ${T.length}`, children: T.map((D, G) => /* @__PURE__ */ h.jsx("i", { className: G <= w ? "on" : "" }, G)) }),
      !lt && /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-icon-btn", "aria-label": "Hear it again", onClick: Vt, children: /* @__PURE__ */ h.jsx(lc, { size: 28 }) }),
      !lt && /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-icon-btn cs-close", "aria-label": ne ? "Close the quiz" : "Close", onClick: () => f(!1), children: /* @__PURE__ */ h.jsx(cf, {}) })
    ] }),
    lt ? /* @__PURE__ */ h.jsxs("div", { className: "cs-score", children: [
      /* @__PURE__ */ h.jsx(Ul, { className: "cs-coco lg", size: 112, mood: U / T.length >= 0.5 ? "happy" : "calm" }),
      /* @__PURE__ */ h.jsx("h3", { children: af[ot][0] }),
      /* @__PURE__ */ h.jsx("div", { className: "cs-stars", role: "img", "aria-label": `${ot} of 3 stars`, children: [0, 1, 2].map((D) => /* @__PURE__ */ h.jsx("span", { className: D < ot ? "on" : "", children: /* @__PURE__ */ h.jsx(m1, { size: 56, empty: D >= ot }) }, D)) }),
      /* @__PURE__ */ h.jsx("p", { children: af[ot][1] }),
      /* @__PURE__ */ h.jsx("div", { className: "cs-foot center", children: /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-btn primary lg", onClick: () => f(!0, { right: U, total: T.length }), children: "Done" }) })
    ] }) : /* @__PURE__ */ h.jsxs("div", { className: "cs-dlg-body" + (Dt ? " has-img" : "") + (at ? " wide-img" : "") + (O ? " stem-opts" : ""), children: [
      Dt && j.image && /* @__PURE__ */ h.jsx("div", { className: "cs-dlg-img", style: { "--ar": String(j.image.w / j.image.h) }, children: yt ? /* @__PURE__ */ h.jsxs("button", { type: "button", className: "cs-flash-cover", style: { aspectRatio: `${j.image.w} / ${j.image.h}` }, onClick: dt, disabled: Nt >= A, "aria-label": Nt === 0 ? "Look at the picture quickly" : Nt < A ? "Look again" : "The picture is hidden", children: [
        /* @__PURE__ */ h.jsx(e0, { size: 72 }),
        /* @__PURE__ */ h.jsx("span", { className: "cs-flash-txt", children: Nt === 0 ? "Ready? Tap to look quickly!" : Nt < A ? "Tap to look again" : "What did you see?" })
      ] }) : P && J === null ? /* @__PURE__ */ h.jsx("div", { className: "cs-flash-pic", children: /* @__PURE__ */ h.jsx("img", { src: Je(j.image.path), alt: j.pictureNote || "", width: j.image.w, height: j.image.h, draggable: !1 }) }) : /* @__PURE__ */ h.jsxs("button", { type: "button", className: "cs-zoom-in", "aria-label": "See the picture bigger", onClick: () => it({ img: j.image, alt: j.pictureNote || "" }), children: [
        /* @__PURE__ */ h.jsx("img", { src: Je(j.image.path), alt: j.pictureNote || "", width: j.image.w, height: j.image.h, draggable: !1 }),
        /* @__PURE__ */ h.jsx("span", { className: "cs-zoom-badge", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(t0, {}) })
      ] }) }),
      mt && /* @__PURE__ */ h.jsxs("button", { type: "button", className: "cs-zoom", "aria-label": "Close the big picture", onClick: () => it(null), children: [
        /* @__PURE__ */ h.jsx("img", { src: Je(mt.img.path), alt: mt.alt, draggable: !1 }),
        /* @__PURE__ */ h.jsx("span", { className: "cs-zoom-close", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(cf, {}) })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "cs-dlg-main", children: [
        /* @__PURE__ */ h.jsx("h3", { className: "cs-dlg-q", children: j.question }),
        P && It && !Dt && J === null && /* @__PURE__ */ h.jsx("div", { className: "cs-flash-row", children: /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-btn primary", onClick: dt, disabled: Ct === "showing" || Nt >= A, children: Ct === "showing" ? "Look!" : Nt === 0 ? "Ready? Tap to look quickly!" : Nt < A ? "Look again" : "What did you see?" }) }),
        /* @__PURE__ */ h.jsx("div", { className: "cs-opts" + (It ? " pics" : ""), children: j.options.map((D, G) => {
          const _ = J === null ? "" : G === j.correct ? " ok" : G === J ? " soft" : " dim", Ut = !D.image && /^\d+$/.test(D.text.trim()), Zt = /* @__PURE__ */ h.jsx(
            "button",
            {
              ref: G === 0 ? Lt : void 0,
              type: "button",
              className: "cs-opt" + _ + (Ut ? " is-num" : ""),
              disabled: J !== null,
              onClick: () => I(G),
              children: It && D.image ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
                yt && !Dt ? /* @__PURE__ */ h.jsx("span", { className: "cs-opt-img cs-flash-cover small", "aria-label": "Picture hidden", children: /* @__PURE__ */ h.jsx(e0, { size: 44 }) }) : /* @__PURE__ */ h.jsx("img", { className: "cs-opt-img", src: Je(D.image.path), alt: D.text, width: D.image.w, height: D.image.h, draggable: !1 }),
                J !== null && G === j.correct && /* @__PURE__ */ h.jsx("span", { className: "cs-opt-cap", children: /* @__PURE__ */ h.jsx("span", { className: "cs-tick", children: /* @__PURE__ */ h.jsx($A, {}) }) })
              ] }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
                /* @__PURE__ */ h.jsx("span", { className: "cs-opt-text", children: D.text }),
                J !== null && G === j.correct && /* @__PURE__ */ h.jsx("span", { className: "cs-tick", children: /* @__PURE__ */ h.jsx($A, {}) })
              ] })
            },
            G
          );
          if (!(It && D.image)) {
            if (!D.speak || /^\d+$/.test(D.text.trim())) return Zt;
            const Jt = D.speak;
            return /* @__PURE__ */ h.jsxs("div", { className: "cs-opt-row", children: [
              Zt,
              /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-opt-hear" + (k === G ? " on" : ""), "aria-label": `Hear: ${Jt}`, onClick: () => H(G, Jt), disabled: J !== null, children: /* @__PURE__ */ h.jsx(lc, { size: 28 }) })
            ] }, G);
          }
          const qt = D.image;
          return /* @__PURE__ */ h.jsxs("div", { className: "cs-opt-wrap", children: [
            Zt,
            !(P && !Dt && J === null) && /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-opt-zoom", "aria-label": `See picture ${N1(G)} bigger`, onClick: () => it({ img: qt, alt: D.text }), children: /* @__PURE__ */ h.jsx(t0, {}) })
          ] }, G);
        }) }),
        J !== null && /* @__PURE__ */ h.jsx("div", { className: "cs-expl", role: "status", children: /* @__PURE__ */ h.jsxs("div", { children: [
          /* @__PURE__ */ h.jsx("b", { children: J === j.correct ? "Nice one!" : "Good try!" }),
          " ",
          j.explanation
        ] }) }),
        /* @__PURE__ */ h.jsx("div", { className: "cs-foot", children: J !== null && /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-btn primary cs-arrow-btn", onClick: nt, autoFocus: !0, "aria-label": w >= T.length - 1 ? Rt ? "See my score" : "Continue the story" : "Next question", children: /* @__PURE__ */ h.jsx(p1, {}) }) })
      ] })
    ] })
  ] }) });
}
const d0 = (s) => s.trim().toLowerCase(), Q1 = () => typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)").matches;
function O1({ story: s, band: o, eventBus: g, isSoundOn: f = !0, onClose: V, autoplay: x = !1 }) {
  const Y = s.bands[o].items, { steps: k, stepOf: N } = z.useMemo(() => c1(Y), [Y]), H = $t((E) => E.cursor), T = $t((E) => E.playing), w = $t((E) => E.finished), q = $t((E) => E.waiting), J = $t((E) => E.readAloud), ft = $t((E) => E.openQuiz), U = $t((E) => E.results), Z = z.useRef(null), ht = z.useRef(null), et = z.useRef(null), lt = z.useRef(null), $ = z.useRef(!1), mt = z.useRef(!1), it = z.useRef(0), [X, ct] = z.useState(!1), [Lt, j] = z.useState(!1);
  z.useEffect(() => {
    $t.getState().reset(f), WA(f);
    const E = new e1();
    E.enabled = f, ht.current = E;
    const st = Y.filter((G) => G.type === "panel"), ot = (G) => {
      st[G] && Object.assign(new Image(), { src: Je(st[G].image.path) });
    }, D = new s1(k, E, {
      onStep: (G, _) => {
        if (_.type === "dlg") {
          lt.current?.panelReached(_.item.id, G);
          const Ut = st.findIndex((Zt) => Zt.id === _.item.id);
          ot(Ut + 1), ot(Ut + 2);
        }
      },
      onOpenQuiz: () => {
      }
    });
    return et.current = D, x || (lt.current = new o1(g, s.id, o, () => k.length, (G) => {
      G && !G.completed && (!G.band || G.band === o) && typeof G.lastStep == "number" && G.lastStep > 0 && G.lastStep < k.length && ($.current = !0, D.goto(G.lastStep), $t.getState().set({ playing: !1 }));
    })), st.slice(0, 2).forEach((G, _) => ot(_)), j(!0), x && (ct(!0), $t.getState().set({ playing: !0 }), D.goto(0)), () => {
      D.dispose(), E.cancel(), lt.current?.dispose(), lt.current = null, j(!1), $t.getState().reset(!0);
    };
  }, [s.id, o]), z.useEffect(() => {
    ht.current && (ht.current.enabled = J && !x), WA(J && !x);
  }, [J, x]), z.useEffect(() => {
    if (!x || !w) return;
    const E = window.setTimeout(() => {
      $t.getState().set({ results: {}, playing: !0 }), et.current?.goto(0);
    }, 1500);
    return () => window.clearTimeout(E);
  }, [x, w]);
  const zt = z.useMemo(() => k.findIndex((E) => E.type === "dlg"), [k]), Rt = z.useMemo(() => Math.max(0, Y.findIndex((E) => E.type === "panel")), [Y]), It = Rt > 0 && zt > 0 && H < zt, [ne, Dt] = z.useState(It ? "on" : "off"), [O, at] = z.useState(!1);
  z.useEffect(() => {
    if (It) {
      Dt("on"), at(!1);
      return;
    }
    if (ne !== "on") return;
    if ($.current) {
      Dt("off");
      return;
    }
    Dt("leaving");
    const E = window.setTimeout(() => {
      Dt("off"), at(!0);
    }, 320);
    return () => window.clearTimeout(E);
  }, [It]), z.useEffect(() => {
    if (!O) return;
    Z.current?.scrollTo({ top: 0 });
    const E = window.setTimeout(() => at(!1), 900);
    return () => window.clearTimeout(E);
  }, [O]), z.useLayoutEffect(() => {
    const E = Z.current;
    if (!E || typeof ResizeObserver > "u") return;
    const st = () => E.style.setProperty("--sch", E.clientHeight + "px");
    st();
    const ot = new ResizeObserver(st);
    return ot.observe(E), () => ot.disconnect();
  }, []);
  const P = (E) => E.type === "dlg" ? E.d.id : E.item.id;
  z.useEffect(() => {
    if (H < 0) return;
    if (mt.current) {
      mt.current = !1;
      return;
    }
    const E = k[H], st = Z.current;
    if (!E || !st) return;
    const ot = st.querySelector(`[data-step-id="${P(E)}"]`);
    if (!ot) return;
    const D = st.getBoundingClientRect(), G = st.clientHeight, _ = st.parentElement?.querySelector(".cs-bar"), Ut = _ ? Math.max(0, D.bottom - _.getBoundingClientRect().top + 8) : 96, Zt = (Pt) => Pt.top - D.top + st.scrollTop, qt = ot.getBoundingClientRect(), Jt = qt.top >= D.top + 4 && qt.bottom <= D.bottom - Ut, ie = E.type === "dlg" && E.d.kind !== "narration" ? ot.closest(".cs-panel") : null, Ae = ot.closest(".cs-coco-screen");
    let se = null;
    if (Ae) {
      const Pt = Ae.getBoundingClientRect();
      Math.abs(Pt.top - D.top) > 2 && (se = Zt(Pt));
    } else if (ie) {
      const Pt = ie.getBoundingClientRect();
      if (Pt.height <= G) {
        (Pt.top < D.top - 1 || Pt.bottom > D.bottom + 1) && (se = Zt(Pt));
        const Qa = se ?? st.scrollTop;
        Zt(qt) + qt.height + 24 - Qa > G - Ut && (se = Zt(qt) + qt.height + 24 - (G - Ut));
      } else if (Pt.top > D.top + 1 && qt.bottom - Pt.top <= G - Ut)
        se = Zt(Pt);
      else if (!Jt) {
        const Qa = Zt(qt) + qt.height / 2 - (G - Ut) * 0.4;
        se = Math.min(Math.max(Qa, Zt(Pt)), Zt(Pt) + Pt.height - G);
      }
    } else Jt || (se = Zt(qt) + qt.height / 2 - (G - Ut) * 0.45);
    const Ee = !$.current && !Q1();
    $.current = !1, se !== null && (it.current = performance.now() + (Ee ? 900 : 100), st.scrollTo({ top: Math.max(0, se), behavior: Ee ? "smooth" : "auto" }));
  }, [H, k]);
  const Ct = z.useCallback((E, st) => {
    const ot = N[st.id];
    if (ot > H) return !1;
    for (const D of E.dialogues) {
      if (D === st || D.kind === "narration") continue;
      const G = N[D.id];
      if (d0(D.speaker) === d0(st.speaker) && G > ot && G <= H) return !1;
    }
    return !0;
  }, [H, N]);
  z.useEffect(() => {
    const E = Z.current;
    if (!E) return;
    let st, ot, D = -1;
    const G = () => {
      const Jt = $t.getState();
      if (Jt.playing || Jt.openQuiz) return;
      const ie = Jt.cursor + 1;
      if (ie > D || !k[ie]) return;
      mt.current = !0, et.current?.reveal(ie);
      const Ae = E.querySelector(`[data-step-id="${P(k[ie])}"]`), se = !!Ae && Ae.getBoundingClientRect().bottom < E.getBoundingClientRect().top, Ee = k[ie + 1], Pt = Ee && Ee.type === "dlg" && !!Ee.d.group && k[ie].type === "dlg" && k[ie].d.group === Ee.d.group, Qa = k[ie].type === "dlg" ? k[ie].d.text.split(/\s+/).length : 0;
      ot = window.setTimeout(G, se ? 0 : Pt ? Math.max(2500, Qa * 350) : 550);
    };
    let _ = -1e9;
    const Ut = () => {
      _ = performance.now();
    }, Zt = ["touchstart", "touchmove", "wheel", "pointerdown", "keydown"];
    Zt.forEach((Jt) => E.addEventListener(Jt, Ut, { passive: !0 }));
    const qt = () => {
      window.clearTimeout(st), st = window.setTimeout(() => {
        if (performance.now() - _ > 1500) return;
        const Jt = $t.getState();
        if (Jt.playing || Jt.openQuiz) return;
        const ie = E.getBoundingClientRect().top + E.clientHeight * 0.6;
        let Ae = -1;
        E.querySelectorAll(".cs-column [data-step-id]").forEach((se) => {
          const Ee = N[se.dataset.stepId];
          Ee != null && se.getBoundingClientRect().top < ie && (Ae = Math.max(Ae, Ee));
        }), Ae > D && (D = Ae), D > Jt.cursor && (window.clearTimeout(ot), G());
      }, 160);
    };
    return E.addEventListener("scroll", qt, { passive: !0 }), () => {
      E.removeEventListener("scroll", qt), Zt.forEach((Jt) => E.removeEventListener(Jt, Ut)), window.clearTimeout(st), window.clearTimeout(ot);
    };
  }, [k, N]);
  const bt = k[H], Nt = (E) => !!bt && P(bt) === E, ue = ft ? Y.find((E) => E.id === ft) : void 0, Se = k.length - 1, A = (E) => (st, ot, D, G, _) => {
    lt.current?.question({
      itemId: st.id,
      kind: E.kind === "final" ? "quiz" : "checkpoint",
      slot: E.kind === "final" ? `q${G + 1}` : E.id,
      conceptMarker: st.conceptMarker || "",
      correct: ot,
      attempts: D,
      ms: _
    });
  }, S = (E) => (st, ot) => {
    st && ot && $t.getState().set({ results: { ...$t.getState().results, [E.id]: ot } }), st && E.kind === "checkpoint" && lt.current?.checkpointDone(E.id, $t.getState().cursor), et.current?.quizClosed(E, st), st && E.kind === "final" && lt.current?.quit();
  }, W = (E, st) => lt.current?.finalQuizDone(E, st, Se), L = et.current, dt = k.length, yt = dt ? Math.max(0, H + 1) / dt * 100 : 0, Vt = () => {
    const E = !J;
    $t.getState().set({ readAloud: E }), E || ht.current?.cancel();
  }, I = (E, st) => {
    const ot = Y[st - 1], D = !!ot && (ot.type === "coco" || ot.type === "quiz");
    if (E.type === "coco")
      return /* @__PURE__ */ h.jsxs("section", { className: "cs-prompt" + (D ? " is-follow" : "") + (Nt(E.id) ? " is-current" : ""), "data-step-id": E.id, children: [
        D ? null : /* @__PURE__ */ h.jsx(Ul, { className: "cs-coco", size: 64, mood: Nt(E.id) ? "happy" : "idle", alt: "Coco" }),
        /* @__PURE__ */ h.jsxs("div", { className: "cs-speech", children: [
          /* @__PURE__ */ h.jsx("div", { className: "cs-label is-coco", children: "Coco" }),
          g0(E.text).map((G, _) => /* @__PURE__ */ h.jsx("p", { children: G }, _))
        ] }),
        E.image ? /* @__PURE__ */ h.jsx("img", { className: "cs-card-img", src: Je(E.image.path), alt: E.alt || "", width: E.image.w, height: E.image.h, loading: "lazy", decoding: "async", draggable: !1 }) : null
      ] }, E.id);
    if (E.type === "quiz") {
      const G = !!U[E.id], _ = Nt(E.id);
      return /* @__PURE__ */ h.jsxs("section", { className: "cs-prompt" + (D ? " is-follow" : "") + (_ ? " is-current" : ""), "data-step-id": E.id, children: [
        D ? null : /* @__PURE__ */ h.jsx(Ul, { className: "cs-coco", size: 64, mood: _ ? "happy" : "idle", alt: "Coco" }),
        /* @__PURE__ */ h.jsxs("div", { className: "cs-speech", children: [
          /* @__PURE__ */ h.jsx("div", { className: "cs-label", children: E.label }),
          /* @__PURE__ */ h.jsx("p", { children: E.intro.text })
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "cs-prompt-actions", children: /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-btn primary lg", onClick: () => L?.openAct(E), disabled: !!ft, children: G ? "Play again" : E.cta }) })
      ] }, E.id);
    }
    return /* @__PURE__ */ h.jsx(K1, { panel: E, cursor: H, stepOf: N, bubbleOn: Ct, isCurrent: Nt, onTapLine: (G) => {
      ct(!0), L?.replay(N[G]);
    }, eager: E.num <= 2 }, E.id);
  }, nt = (E) => {
    const st = E.some((D) => Nt(D.id)), ot = E.filter((D) => D.type === "quiz");
    return /* @__PURE__ */ h.jsxs("section", { className: "cs-prompt cs-merged" + (st ? " is-current" : ""), children: [
      /* @__PURE__ */ h.jsx(Ul, { className: "cs-coco", size: 64, mood: st ? "happy" : "idle", alt: "Coco" }),
      /* @__PURE__ */ h.jsx(
        z1,
        {
          parts: E.map((D) => ({ id: D.id, lines: D.type === "coco" ? g0(D.text) : D.type === "quiz" ? [D.intro.text] : [] })),
          at: (() => {
            const D = E.findIndex((G) => Nt(G.id));
            return D >= 0 ? D : N[E[0].id] > H ? 0 : E.length - 1;
          })()
        }
      ),
      E.map((D) => D.type === "coco" && D.image ? /* @__PURE__ */ h.jsx("img", { className: "cs-card-img", src: Je(D.image.path), alt: D.alt || "", width: D.image.w, height: D.image.h, loading: "lazy", decoding: "async", draggable: !1 }, "img-" + D.id) : null),
      ot.map((D) => /* @__PURE__ */ h.jsx("div", { className: "cs-prompt-actions", children: /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-btn primary lg", onClick: () => L?.openAct(D), disabled: !!ft, children: U[D.id] ? "Play again" : D.cta }) }, "act-" + D.id))
    ] }, E[0].id);
  };
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: "cs-app" + (x ? " cs-autoplay" : ""),
      "data-ready": Lt ? "1" : "0",
      inert: x || void 0,
      "aria-hidden": x || void 0,
      onClickCapture: x ? Mu : void 0,
      onPointerDownCapture: x ? Mu : void 0,
      onKeyDownCapture: x ? Mu : void 0,
      onWheelCapture: x ? Mu : void 0,
      onTouchStartCapture: x ? Mu : void 0,
      children: [
        /* @__PURE__ */ h.jsxs("header", { className: "cs-top", children: [
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-icon-btn", "aria-label": "Close the story", onClick: () => V?.(), children: /* @__PURE__ */ h.jsx(cf, {}) }),
          /* @__PURE__ */ h.jsxs("div", { className: "cs-top-title", children: [
            /* @__PURE__ */ h.jsx("small", { children: s.kicker }),
            s.title
          ] }),
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-icon-btn" + (J ? "" : " off"), "aria-label": J ? "Read aloud is on. Turn it off" : "Read aloud is off. Turn it on", "aria-pressed": J, onClick: Vt, children: J ? /* @__PURE__ */ h.jsx(lc, { size: 28 }) : /* @__PURE__ */ h.jsx(g1, { size: 28 }) })
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "cs-progress", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(yt), children: /* @__PURE__ */ h.jsx("i", { style: { width: yt + "%" } }) }),
        /* @__PURE__ */ h.jsx("div", { className: "cs-scroller" + (ne !== "off" ? " is-intro" : ""), ref: Z, children: /* @__PURE__ */ h.jsxs("main", { className: "cs-column" + (O ? " cs-entering" : ""), children: [
          H1(Y, Rt, ne !== "off").map((E) => {
            if (E.kind === "panel") return E.items.map((ot) => I(ot, Y.indexOf(ot)));
            const st = E.items.length > 1 ? nt(E.items) : I(E.items[0], Y.indexOf(E.items[0]));
            return /* @__PURE__ */ h.jsx(j1, { className: "cs-coco-screen" + (ne === "on" ? " is-opening" : ne === "leaving" ? " is-opening leaving" : ""), hasQuiz: ne === "off" && E.items.some((ot) => ot.type === "quiz"), children: st }, "screen-" + E.items[0].id);
          }),
          ne === "off" ? /* @__PURE__ */ h.jsx("div", { className: "cs-end-space", "aria-hidden": "true" }) : null
        ] }) }),
        /* @__PURE__ */ h.jsx(Z1, { items: Y, onAnswer: () => L?.answered(), clips: s.voice }),
        /* @__PURE__ */ h.jsxs("div", { className: "cs-bar", role: "group", "aria-label": "Story controls", children: [
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-icon-btn", "aria-label": "Previous line", disabled: H < 0 || !!ft, onClick: () => L?.stepBy(-1), children: /* @__PURE__ */ h.jsx(v1, {}) }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "cs-play" + (!X && !T ? " hint" : ""),
              disabled: !!ft,
              "aria-label": T ? "Pause" : w ? "Replay" : "Play",
              onClick: () => {
                ct(!0), L?.toggle();
              },
              children: T && !q ? /* @__PURE__ */ h.jsx(b1, {}) : w ? /* @__PURE__ */ h.jsx(w1, {}) : /* @__PURE__ */ h.jsx(y1, {})
            }
          ),
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-icon-btn", "aria-label": "Next line", disabled: H >= dt - 1 || !!ft, onClick: () => L?.stepBy(1), children: /* @__PURE__ */ h.jsx(V1, {}) })
        ] }),
        ue && ht.current && /* @__PURE__ */ h.jsx(
          U1,
          {
            item: ue,
            narrator: ht.current,
            onQuestion: A(ue),
            onClose: S(ue),
            onScore: ue.kind === "final" ? W : void 0,
            clips: s.voice
          },
          ue.id
        )
      ]
    }
  );
}
const Mu = (s) => {
  s.stopPropagation(), s.cancelable && s.type !== "wheel" && s.type !== "touchstart" && s.preventDefault();
};
function z1({ parts: s, at: o }) {
  const [g, f] = z.useState(o), [V, x] = z.useState(!1);
  z.useEffect(() => {
    if (o === g) return;
    x(!0);
    const k = window.setTimeout(() => {
      f(o), x(!1);
    }, 220);
    return () => window.clearTimeout(k);
  }, [o]);
  const Y = s[Math.min(g, s.length - 1)];
  return /* @__PURE__ */ h.jsxs("div", { className: "cs-speech cs-rotating", children: [
    s.map((k) => /* @__PURE__ */ h.jsx("span", { className: "cs-step-anchor", "data-step-id": k.id, "aria-hidden": "true" }, k.id)),
    /* @__PURE__ */ h.jsx("div", { className: "cs-speech-part" + (V ? " leaving" : ""), "aria-live": "polite", children: Y.lines.map((k, N) => /* @__PURE__ */ h.jsx("p", { children: k }, N)) }, Y.id),
    s.length > 1 ? /* @__PURE__ */ h.jsx("span", { className: "cs-chunk-dots", "aria-label": `Part ${g + 1} of ${s.length}`, children: s.map((k, N) => /* @__PURE__ */ h.jsx("i", { className: N <= g ? "on" : "" }, k.id)) }) : null
  ] });
}
function j1({ className: s, hasQuiz: o, children: g }) {
  const f = z.useRef(null), [V, x] = z.useState(!1);
  return z.useEffect(() => {
    const Y = f.current;
    if (!o || V || !Y) return;
    if (typeof IntersectionObserver > "u") {
      x(!0);
      return;
    }
    const k = new IntersectionObserver(([N]) => {
      N.intersectionRatio >= 0.5 && x(!0);
    }, { threshold: [0, 0.5, 1] });
    return k.observe(Y), () => k.disconnect();
  }, [o, V]), /* @__PURE__ */ h.jsx("div", { ref: f, className: s + (o ? " has-quiz" : "") + (V ? " is-seen" : ""), children: g });
}
function H1(s, o, g) {
  const f = [];
  for (const V of g ? s.slice(0, o) : s.slice(o)) {
    const x = V.type === "panel" ? "panel" : "coco", Y = f[f.length - 1];
    x === "coco" && Y?.kind === "coco" ? Y.items.push(V) : f.push({ kind: x, items: [V] });
  }
  return f;
}
const A0 = ["Hmm... let's see what happens!", "Ooh, let's find out!", "Good thinking! Let's see."], q1 = (s) => A0[[...s].reduce((o, g) => o + g.charCodeAt(0), 0) % A0.length];
function Z1({ items: s, onAnswer: o, clips: g }) {
  const f = $t((et) => et.thinking), [V, x] = z.useState(null), [Y, k] = z.useState(!1), [N, H] = z.useState(null), [T, w] = z.useState(0), q = z.useRef(null), [J, ft] = z.useState(null), U = () => {
    const et = q.current;
    et && (et.onended = null, et.pause()), ft(null);
  }, Z = (et, lt) => {
    U();
    const $ = q.current ??= new Audio();
    $.src = Je(lt), $.onended = () => ft(null), ft(et), $.play().catch(() => ft(null));
  };
  z.useEffect(() => () => U(), []);
  const ht = z.useRef(null);
  if (z.useEffect(() => {
    if (!Me.on || !V?.ask) return;
    const et = window.setTimeout(() => ht.current?.(0), 1600);
    return () => window.clearTimeout(et);
  }, [V?.id, V?.ask]), z.useEffect(() => {
    if (f) {
      const lt = s.flatMap(($) => $.type === "panel" ? $.dialogues : []).find(($) => $.id === f);
      lt?.thinkMs && (x({ id: lt.id, ms: lt.thinkMs, text: lt.text, ask: lt.ask }), k(!1), H(null), w(0));
      return;
    }
    if (!V) return;
    k(!0);
    const et = window.setTimeout(() => {
      x(null), k(!1);
    }, 260);
    return () => window.clearTimeout(et);
  }, [f, s]), !V) return null;
  if (V.ask) {
    const et = q1(V.id), lt = ($) => {
      N === null && (U(), H($), window.setTimeout(() => w(1), 120), window.setTimeout(() => {
        w(2);
        const mt = Me.on ? void 0 : g?.[et];
        let it = !1;
        const X = () => {
          it || (it = !0, window.setTimeout(o, 500));
        };
        if (!mt) {
          window.setTimeout(X, Me.on ? 1400 : 1800);
          return;
        }
        const ct = q.current ??= new Audio();
        ct.src = Je(mt.path), ct.onended = X, ct.play().catch(X), window.setTimeout(X, ((mt.dur || 3) + 1.5) * 1e3);
      }, 300));
    };
    return ht.current = lt, /* @__PURE__ */ h.jsx("div", { className: "cs-think-over ask" + (Y ? " leaving" : ""), role: "dialog", "aria-label": V.ask.q, children: /* @__PURE__ */ h.jsxs("div", { className: "cs-ask", children: [
      /* @__PURE__ */ h.jsx(Ul, { className: "cs-think-big", size: 150, mood: T < 2 ? "think" : "look", alt: "Coco" }),
      /* @__PURE__ */ h.jsx("div", { className: "cs-speech cs-ask-q", children: /* @__PURE__ */ h.jsx("p", { className: T < 2 ? "" : "cs-ask-reply", children: T < 2 ? V.ask.q : et }, T < 2 ? "q" : "r") }),
      /* @__PURE__ */ h.jsx("div", { className: "cs-ask-opts" + (V.ask.options.every(($) => $.length <= 3) ? " row" : ""), children: V.ask.options.map(($, mt) => {
        const it = /^\d+$/.test($.trim()) ? null : V.ask?.optionAudio?.[mt], X = N !== null && N !== mt && T >= 1;
        return /* @__PURE__ */ h.jsxs("div", { className: "cs-ask-item" + (X ? " dim" : ""), children: [
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-ask-opt" + (N === mt ? " on" : ""), onClick: () => lt(mt), disabled: N !== null, children: $ }),
          it ? /* @__PURE__ */ h.jsx("button", { type: "button", className: "cs-ask-hear" + (J === mt ? " on" : ""), "aria-label": `Hear: ${$}`, onClick: () => Z(mt, it.path), disabled: N !== null, children: /* @__PURE__ */ h.jsx(lc, { size: 28 }) }) : null
        ] }, $);
      }) })
    ] }, V.id) });
  }
  return /* @__PURE__ */ h.jsx("div", { className: "cs-think-over" + (Y ? " leaving" : ""), role: "status", "aria-label": "Coco is thinking", children: /* @__PURE__ */ h.jsxs("div", { className: "cs-think-stage", children: [
    /* @__PURE__ */ h.jsx("p", { className: "cs-think-line", children: V.text }),
    /* @__PURE__ */ h.jsxs("div", { className: "cs-think-row", children: [
      /* @__PURE__ */ h.jsxs("span", { className: "cs-think-cloud", "aria-hidden": "true", children: [
        /* @__PURE__ */ h.jsx("i", {}),
        /* @__PURE__ */ h.jsx("i", {}),
        /* @__PURE__ */ h.jsx("i", {})
      ] }),
      /* @__PURE__ */ h.jsx(Ul, { className: "cs-think-big", size: 150, mood: "think" })
    ] }),
    /* @__PURE__ */ h.jsx("span", { className: "cs-think-bar", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("i", { style: { animationDuration: V.ms + "ms" } }) })
  ] }, V.id) });
}
function K1({ panel: s, cursor: o, stepOf: g, bubbleOn: f, isCurrent: V, onTapLine: x, eager: Y }) {
  $t((U) => U.thinking);
  const k = z.useRef(null), [N, H] = z.useState(640);
  z.useLayoutEffect(() => {
    const U = k.current;
    if (!U || (U.clientWidth && H(U.clientWidth), typeof ResizeObserver > "u")) return;
    const Z = new ResizeObserver(() => H(U.clientWidth));
    return Z.observe(U), () => Z.disconnect();
  }, []);
  const T = (U) => {
    const Z = [];
    for (const ht of U) {
      const et = Z[Z.length - 1];
      ht.group && et && et[0].group === ht.group ? et.push(ht) : Z.push([ht]);
    }
    return Z;
  }, w = (U) => {
    const Z = U.filter(($) => g[$.id] <= o), ht = Z.length ? Z[Z.length - 1] : U[0], et = Z.length > 0, lt = U.some(($) => V($.id));
    return /* @__PURE__ */ h.jsxs("div", { className: "cs-narration" + (et ? " is-on" : "") + (lt ? " is-current" : ""), "data-step-id": U.length === 1 ? ht.id : void 0, onClick: () => {
      et && x(ht.id);
    }, children: [
      U.length > 1 ? U.map(($) => /* @__PURE__ */ h.jsx("span", { className: "cs-step-anchor", "data-step-id": $.id, "aria-hidden": "true" }, $.id)) : null,
      /* @__PURE__ */ h.jsx("p", { className: U.length > 1 ? "cs-chunk" : void 0, "aria-live": U.length > 1 ? "polite" : void 0, children: ht.text }, ht.id),
      U.length > 1 ? /* @__PURE__ */ h.jsx("span", { className: "cs-chunk-dots", "aria-label": `Part ${Math.max(1, Z.length)} of ${U.length}`, children: U.map(($, mt) => /* @__PURE__ */ h.jsx("i", { className: mt < Math.max(1, Z.length) ? "on" : "" }, $.id)) }) : null,
      null
    ] }, U[0].id);
  }, q = T(s.dialogues.filter((U) => U.kind === "narration" && U.placement !== "after")), J = T(s.dialogues.filter((U) => U.kind === "narration" && U.placement === "after"));
  let ft = 0;
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    q.map(w),
    /* @__PURE__ */ h.jsxs("div", { className: "cs-panel", ref: k, "data-item": s.id, style: { "--pw": N + "px" }, children: [
      /* @__PURE__ */ h.jsx("img", { src: Je(s.image.path), alt: s.alt || `Panel ${s.num}`, width: s.image.w, height: s.image.h, loading: Y ? "eager" : "lazy", decoding: "async", draggable: !1 }),
      s.dialogues.filter((U) => U.kind === "speech").map((U) => /* @__PURE__ */ h.jsx(A1, { d: U, n: ft++, on: f(s, U), current: V(U.id), panelEl: k, onTap: () => x(U.id) }, U.id))
    ] }),
    J.map(w)
  ] });
}
function g0(s) {
  if (s.split(/\s+/).length <= 16) return [s];
  const o = s.split(/(?<=[.!?])\s+/).filter(Boolean), g = [];
  for (let f = 0; f < o.length; f += 2) g.push(o.slice(f, f + 2).join(" "));
  return g;
}
const ec = ["5-6", "6-7", "7-8", "8-9", "9+"];
function L1(s, o) {
  return s == null || Number.isNaN(s) ? o : s <= 5 ? "5-6" : s === 6 ? "6-7" : s === 7 ? "7-8" : s === 8 ? "8-9" : "9+";
}
function I1(s, o, g) {
  const f = ec.filter((Y) => s.bands[Y]);
  if (g && f.includes(g)) return g;
  const V = L1(o, s.canonicalBand);
  if (f.includes(V)) return V;
  const x = ec.indexOf(V);
  for (let Y = x - 1; Y >= 0; Y--) if (f.includes(ec[Y])) return ec[Y];
  return s.canonicalBand;
}
function F1({ eventBus: s, childAge: o, bandOverride: g, isSoundOn: f, onClose: V, autoplay: x }) {
  const Y = I1(IA, o, g);
  return /* @__PURE__ */ h.jsx(O1, { story: IA, band: Y, eventBus: s, isSoundOn: f, onClose: V, autoplay: x });
}
function J1() {
  try {
    window.speechSynthesis?.cancel();
  } catch {
  }
  nf.stop(), document.querySelectorAll(".coco-story-host audio").forEach((s) => {
    try {
      s.pause();
    } catch {
    }
  });
}
let nc = null, sf = null;
function v0() {
  if (!document.getElementById("coco-story-fonts") && !document.querySelector('link[href*="Gabarito"]')) {
    const s = document.createElement("link");
    s.id = "coco-story-fonts", s.rel = "stylesheet", s.href = "https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=DM+Sans:wght@400;600;700;800&family=Patrick+Hand&display=swap", document.head.appendChild(s);
  }
}
function X1({ error: s, resetErrorBoundary: o }) {
  const g = s instanceof Error ? s.message : String(s);
  return /* @__PURE__ */ h.jsx("div", { style: { position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "#FFFAD3", fontFamily: "'Gabarito', sans-serif", padding: 24, textAlign: "center" }, children: /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsx("p", { style: { fontSize: 20, fontWeight: 700 }, children: "The story stopped for a moment." }),
    /* @__PURE__ */ h.jsx("p", { style: { fontSize: 13, color: "#6B6B6B" }, children: g }),
    /* @__PURE__ */ h.jsx("button", { onClick: o, style: { height: 52, padding: "0 24px", border: 0, background: "#4AC1BD", fontWeight: 700, fontSize: 18, boxShadow: "4px 4px 0 rgba(13,13,13,.16)", borderRadius: 0 }, children: "Try again" })
  ] }) });
}
async function W1(s) {
  v0();
}
async function P1(s) {
  v0();
  let o = s.domElement;
  if (!o && s.containerId)
    for (let V = 0; V < 50 && !o; V++)
      o = document.getElementById(s.containerId) || void 0, o || await new Promise((x) => setTimeout(x, 100));
  if (!o) throw new Error("No container element found. The host must provide a valid container.");
  Zp(s.assetBase || "");
  const g = !!s.autoplay;
  Me.on = g, sf = o, getComputedStyle(o).position === "static" && (o.style.position = "relative"), o.classList.add("coco-story-host");
  const f = null;
  nc = xp.createRoot(o), nc.render(
    /* @__PURE__ */ h.jsx(Tp, { FallbackComponent: X1, onError: (V) => s.onError?.(V instanceof Error ? V : new Error(String(V))), children: /* @__PURE__ */ h.jsx(
      F1,
      {
        eventBus: g ? void 0 : s.eventBus,
        childAge: s.user?.childAge ?? null,
        bandOverride: f?.get("band"),
        isSoundOn: g ? !1 : s.soundSettings?.isSoundOn ?? !0,
        onClose: g ? void 0 : s.onClose,
        autoplay: g
      }
    ) })
  );
}
async function _1(s) {
  J1(), nc?.unmount(), nc = null, Me.on = !1, sf?.classList.remove("coco-story-host"), sf = null;
}
export {
  W1 as bootstrap,
  P1 as mount,
  _1 as unmount
};
