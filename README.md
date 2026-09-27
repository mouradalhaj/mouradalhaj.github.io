<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover"/>
<title>رفيق — شريك حياة رقمي</title>
<meta name="theme-color" content="#14110C"/>
<meta name="format-detection" content="telephone=no"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta name="apple-mobile-web-app-title" content="رفيق"/>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='12' fill='%2314110C'/%3E%3Cpath d='M10 26h8l3-9 6 16 3-7h8' stroke='%23E5A83E' stroke-width='2.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{
 --bg:#14110C;--panel:#191510;--card:#1E1912;--card2:#241E13;
 --line:#2C2517;--line2:#3B3220;
 --ink:#F1EADC;--ink2:#B0A58B;--ink3:#716750;
 --acc:#E5A83E;--acc-ink:#241B08;--acc-soft:rgba(229,168,62,.13);
 --good:#84C88E;--bad:#E4796B;
 --c-health:#84C88E;--c-relations:#E8907E;--c-money:#E2C063;--c-work:#8FBFCB;--c-mind:#B7A6DC;--c-growth:#DE9A66;
 --me-bg:#413413;--me-line:#5C4A1B;--tab-bg:rgba(20,16,11,.94);--frame:#292214;
 --fd:'Alexandria','SF Arabic',system-ui,sans-serif;
 --fb:'IBM Plex Sans Arabic','SF Arabic',system-ui,sans-serif;
}
html{color-scheme:dark;-webkit-text-size-adjust:100%}
html[data-theme="light"]{color-scheme:light}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html,body{height:100%}
body{position:fixed;top:0;left:0;right:0;bottom:0;background:#0A0906;font-family:var(--fb);color:var(--ink);display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:manipulation;-webkit-overflow-scrolling:touch}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit;-webkit-appearance:none;appearance:none}
input,textarea,select{-webkit-appearance:none;appearance:none}
@media (hover:none){input,textarea,select{font-size:16px}}
.stage{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;width:100%;height:100%}
.stage-cap{display:none;align-items:center;gap:9px;color:#8A7E62;font-size:12.5px}
.stage-cap .ic{color:var(--acc)}
@media(min-width:600px){.stage-cap{display:flex}}
#phone{position:relative;width:100%;height:100%;background:var(--bg);overflow:hidden;display:flex;flex-direction:column;transition:background .3s}
@media(min-width:600px){
 #phone{width:430px;height:min(900px,94vh);border-radius:38px;border:1px solid var(--frame);
 box-shadow:0 60px 140px -40px rgba(0,0,0,.85),0 0 0 8px #050403}
}
#splash{position:absolute;top:0;left:0;right:0;bottom:0;z-index:95;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px}
#splash .sp-t{font-family:var(--fd);font-weight:700;font-size:16px;color:var(--ink2)}
#splash .sp-bar{width:120px;height:4px;border-radius:100px;background:var(--card2);overflow:hidden}
#splash .sp-bar i{display:block;height:100%;width:40%;border-radius:100px;background:var(--acc);animation:sp 1.1s ease-in-out infinite}
@keyframes sp{0%{transform:translateX(60px)}100%{transform:translateX(-160px)}}
#app{display:flex;flex-direction:column;height:100%}
#app[hidden]{display:none!important}
.app-head{display:flex;align-items:center;justify-content:space-between;padding:calc(env(safe-area-inset-top) + 16px) 20px 12px;border-bottom:1px solid var(--line)}
.h-brand{display:flex;align-items:center;gap:10px}
.h-brand b{font-family:var(--fd);font-size:19px;font-weight:800;letter-spacing:.3px}
.logo{width:34px;height:34px;flex:none}
.logo .lg-ekg{stroke-dasharray:34 30;animation:lgp 2.6s linear infinite}
@keyframes lgp{from{stroke-dashoffset:64}to{stroke-dashoffset:0}}
.h-title{font-family:var(--fd);font-size:17px;font-weight:700}
.h-date{font-size:11.5px;color:var(--ink2);text-align:left;line-height:1.5}
#views{position:relative;flex:1;overflow:hidden}
.view{position:absolute;top:0;left:0;right:0;bottom:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:6px 18px 34px;display:none;scrollbar-width:thin;overscroll-behavior:contain}
.view.on{display:block;animation:viewIn .34s ease}
#v-chat{padding:0;overflow:hidden}
#v-chat.on{display:flex;flex-direction:column}
@keyframes viewIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.sec-t{display:flex;align-items:center;gap:7px;font-family:var(--fd);font-size:14.5px;font-weight:700;margin:22px 2px 11px;color:var(--ink)}
.sec-t .ic{color:var(--acc)}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px}
#tabbar{display:flex;align-items:flex-end;border-top:1px solid var(--line);background:var(--tab-bg);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);padding:6px 6px calc(env(safe-area-inset-bottom) + 7px);position:relative;z-index:10}
.tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:7px 0 3px;color:var(--ink3);font-size:10.5px;position:relative;transition:color .2s}
.tab.on{color:var(--acc)}
.tab-add{flex:1;display:flex;justify-content:center}
.tab-add button{width:56px;height:56px;border-radius:50%;background:var(--acc);color:var(--acc-ink);display:grid;place-items:center;transform:translateY(-20px);box-shadow:0 12px 26px -10px rgba(0,0,0,.55);transition:transform .15s}
.tab-add button:active{transform:translateY(-20px) scale(.92)}
.tab-dot{position:absolute;top:5px;right:calc(50% - 15px);width:8px;height:8px;border-radius:50%;background:var(--bad);display:none}
.tab-dot.show{display:block}
.greet-t{font-family:var(--fd);font-size:21px;font-weight:700;margin-top:10px}
.greet-t small{display:block;font-family:var(--fb);font-size:12.5px;font-weight:400;color:var(--ink2);margin-top:5px}
.life-card{margin-top:16px;background:var(--card);border:1px solid var(--line);border-radius:20px;padding:16px 16px 14px;text-align:center;position:relative;overflow:hidden;cursor:pointer;transition:border-color .2s}
.life-card:active{border-color:var(--line2)}
.lc-top{display:flex;align-items:center;justify-content:space-between;font-size:12.5px;color:var(--ink2)}
.lc-live{display:flex;align-items:center;gap:6px}
.pulse-dot{width:7px;height:7px;border-radius:50%;background:var(--good);animation:pd 1.8s ease infinite}
@keyframes pd{0%,100%{box-shadow:0 0 0 0 rgba(132,200,142,.5)}50%{box-shadow:0 0 0 5px rgba(132,200,142,0)}}
.lc-trend{font-size:12px;font-weight:600}
.lc-trend.up{color:var(--good)}.lc-trend.dn{color:var(--bad)}.lc-trend.fl{color:var(--ink3)}
.ring{width:196px;height:196px;margin:6px auto 0;display:block}
#ringArc{transition:stroke-dashoffset 1.1s cubic-bezier(.3,.8,.3,1)}
.ring-num{font-family:var(--fd);font-weight:800;font-size:37px;fill:var(--ink)}
.ring-sub{font-size:10.5px;fill:var(--ink3)}
.ekg{stroke:var(--acc);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:26 118;animation:ekgRun 2.4s linear infinite;opacity:.9}
@keyframes ekgRun{from{stroke-dashoffset:144}to{stroke-dashoffset:0}}
.lc-cap{font-size:13px;color:var(--ink2);margin-top:2px}
.lc-cap b{color:var(--ink)}
.hint-card{margin-top:14px;background:var(--card2);border:1px dashed var(--line2);border-radius:14px;padding:12px 14px;font-size:12.5px;line-height:1.9;color:var(--ink2)}
.hint-card b{color:var(--acc)}
.hint-x{float:left;color:var(--ink3);font-size:11px;font-weight:600;border:1px solid var(--line2);border-radius:100px;padding:3px 10px}
.mood-card{margin-top:14px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:14px 16px}
.mood-t{font-size:13px;color:var(--ink2);margin-bottom:10px}
.mood-row{display:flex;justify-content:space-between;gap:4px}
.mood-btn{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;color:var(--ink3);padding:7px 0;border-radius:12px;border:1px solid transparent;transition:.18s;font-size:10.5px}
.mood-btn.on{color:var(--acc);border-color:var(--line2);background:var(--card2)}
.mood-btn:active{transform:scale(.94)}
.rec{display:flex;gap:11px;align-items:flex-start;background:var(--card);border:1px solid var(--line);border-right:3px solid var(--rc,var(--acc));border-radius:14px;padding:12px 13px;margin-bottom:9px}
.rec-ic{width:34px;height:34px;flex:none;border-radius:10px;display:grid;place-items:center;color:var(--rc,var(--acc));background:var(--card2);border:1px solid var(--line)}
.rec-b{flex:1;min-width:0}
.rec-b b{font-size:13.5px;display:block;margin-bottom:3px}
.rec-b p{font-size:12.5px;color:var(--ink2);line-height:1.7}
.rec-btn{flex:none;align-self:center;font-size:11.5px;font-weight:600;color:var(--acc);border:1px solid var(--line2);border-radius:100px;padding:7px 12px;transition:.15s}
.rec-btn:active{transform:scale(.94)}
.rec-off{color:var(--ink3);border-color:transparent}
.ev{display:flex;gap:11px;align-items:flex-start;padding:11px 2px;border-bottom:1px solid var(--line)}
.ev:last-child{border-bottom:none}
.ev-ic{width:32px;height:32px;flex:none;border-radius:10px;display:grid;place-items:center;color:var(--rc);background:var(--card);border:1px solid var(--line)}
.ev-b{flex:1;min-width:0}
.ev-b p{font-size:13.5px;line-height:1.6}
.ev-b span{font-size:11px;color:var(--ink3)}
.ev-face{color:var(--ink3);flex:none;padding-top:4px}
.ev-th{width:40px;height:40px;border-radius:10px;overflow:hidden;flex:none;border:1px solid var(--line);cursor:zoom-in}
.ev-th img{width:100%;height:100%;object-fit:cover;display:block}
.empty{text-align:center;color:var(--ink3);font-size:13px;padding:26px 10px;line-height:2}
.empty .ic{color:var(--line2);margin-bottom:6px}
.hex-wrap{margin-top:14px;display:flex;justify-content:center}
.hex{width:100%;max-width:330px}
.hex-grid{fill:none;stroke:var(--line);stroke-width:1}
.hex-val{fill:var(--acc-soft);stroke:var(--acc);stroke-width:2;stroke-linejoin:round;transition:all .2s}
.hex-lab{font-size:11.5px;text-anchor:middle;font-family:var(--fb);font-weight:600}
.bar-row{display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid var(--line)}
.bar-row:last-child{border-bottom:none}
.bar-ic{width:30px;height:30px;flex:none;border-radius:9px;display:grid;place-items:center;color:var(--rc);background:var(--card);border:1px solid var(--line)}
.bar-name{width:58px;font-size:13px;font-weight:500;flex:none}
.bar-track{flex:1;height:7px;border-radius:100px;background:var(--card2);overflow:hidden}
.bar-track i{display:block;height:100%;border-radius:100px;background:var(--rc);width:0;transition:width 1s cubic-bezier(.3,.8,.3,1)}
.bar-val{font-family:var(--fd);font-size:14.5px;font-weight:700;color:var(--rc);width:30px;text-align:left;flex:none}
.bar-delta{font-size:10.5px;width:34px;text-align:left;flex:none;color:var(--ink3)}
.bar-delta.up{color:var(--good)}.bar-delta.dn{color:var(--bad)}
.spark-wrap{margin-top:20px;padding:15px 16px 10px}
.spark-t{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px}
.spark-t b{font-size:13.5px}
.spark-t span{font-size:11px;color:var(--ink3)}
.cal-head{display:flex;align-items:center;justify-content:space-between;margin-top:16px}
.cal-title{font-family:var(--fd);font-weight:700;font-size:16px}
.cal-nav{display:flex;gap:7px;align-items:center}
.cal-nav .today-chip{font-size:11.5px;font-weight:600;color:var(--acc);border:1px solid var(--line2);border-radius:100px;padding:6px 12px;margin-left:3px}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-top:14px}
.cal-wd{text-align:center;font-size:10.5px;color:var(--ink3);padding:4px 0;font-weight:500}
.cal-d{min-height:52px;border-radius:12px;border:1px solid transparent;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:13.5px;color:var(--ink2);transition:.15s}
.cal-d:not(.blank):active{background:var(--card2)}
.cal-d.blank{visibility:hidden}
.cal-d.has{color:var(--ink)}
.cal-d.today{border-color:var(--acc);background:var(--acc-soft);color:var(--ink);font-weight:700}
.cal-d.future{opacity:.28}
.cal-dots{display:flex;gap:2.5px;height:5px}
.cal-dots i{width:5px;height:5px;border-radius:50%}
.day-ev{display:flex;gap:11px;align-items:center;padding:11px 2px;border-bottom:1px solid var(--line)}
.day-ev:last-child{border-bottom:none}
.day-time{font-size:10.5px;color:var(--ink3);flex:none;width:36px}
.rel-sum{margin-top:14px;font-size:13px;color:var(--ink2);background:var(--card);border:1px solid var(--line);border-radius:14px;padding:12px 15px;line-height:1.8}
.rel-sum b{color:var(--ink)}
.rel{display:flex;gap:12px;align-items:center;padding:13px 2px;border-bottom:1px solid var(--line)}
.rel-av{width:42px;height:42px;flex:none;border-radius:50%;display:grid;place-items:center;font-family:var(--fd);font-weight:700;font-size:17px;color:var(--rc);background:var(--card);border:1.5px solid var(--rc)}
.rel-b{flex:1;min-width:0}
.rel-b b{font-size:14.5px;display:block}
.rel-b span{font-size:11.5px;color:var(--ink3)}
.rel-bar{height:4px;border-radius:100px;background:var(--card2);margin-top:7px;overflow:hidden}
.rel-bar i{display:block;height:100%;border-radius:100px;background:var(--rc);transition:width .9s ease}
.rel-acts{display:flex;gap:6px;flex:none}
.icon-btn{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;border:1px solid var(--line2);color:var(--ink2);transition:.15s}
.icon-btn.call{color:var(--good)}
.icon-btn:active{transform:scale(.9)}
.page-add{margin-top:18px}
.dec{margin-top:12px;overflow:hidden}
.dec-head{display:flex;align-items:center;gap:11px;padding:14px 15px;cursor:pointer}
.dec-ic{width:38px;height:38px;flex:none;border-radius:11px;display:grid;place-items:center;color:var(--acc);background:var(--card2);border:1px solid var(--line)}
.dec-b{flex:1;min-width:0}
.dec-b b{font-size:14.5px;display:block}
.dec-b span{font-size:11.5px;color:var(--ink3)}
.dec-badge{flex:none;font-size:10.5px;font-weight:600;padding:4px 10px;border-radius:100px;border:1px solid currentColor}
.dec-badge.b-ok{color:var(--good)}.dec-badge.b-mid{color:var(--acc)}.dec-badge.b-no{color:var(--bad)}
.dec-chev{color:var(--ink3);transition:transform .25s;flex:none}
.dec.open .dec-chev{transform:rotate(90deg)}
.dec-body{display:none;padding:2px 15px 15px;border-top:1px solid var(--line)}
.dec.open .dec-body{display:block;animation:viewIn .3s ease}
.dec-summ{font-size:12.5px;color:var(--ink2);line-height:1.8;padding:11px 0 4px}
.dec-cols{display:flex;gap:14px;margin-top:8px}
.dec-cols>div{flex:1}
.dec-cols h5,.dec-q h5{font-size:11.5px;color:var(--ink2);margin-bottom:6px;display:flex;gap:5px;align-items:center}
.dec-cols h5 .ic{color:var(--good)}
.dec-cols div:last-child h5 .ic{color:var(--bad)}
.dec-cols ul{list-style:none}
.dec-cols li,.dec-q li{font-size:12px;line-height:1.7;padding:3px 0;color:var(--ink);position:relative;padding-right:12px}
.dec-cols li::before,.dec-q li::before{content:'';position:absolute;right:0;top:12px;width:5px;height:5px;border-radius:50%;background:var(--line2)}
.dec-q{margin-top:12px;background:var(--card2);border:1px solid var(--line);border-radius:12px;padding:11px 13px}
.dec-q li::before{background:var(--acc)}
.dec-verdict{margin-top:12px;font-size:13px;line-height:1.8;border-right:3px solid var(--acc);padding:8px 12px;background:var(--card2);border-radius:0 10px 10px 0}
.dec-acts{display:flex;gap:8px;margin-top:13px}
.dec-acts .btn{padding:10px;font-size:12.5px}
.chat-head{display:flex;align-items:center;gap:11px;padding:14px 18px 11px;border-bottom:1px solid var(--line)}
.chat-av{width:40px;height:40px;border-radius:50%;background:var(--card2);border:1.5px solid var(--acc);display:grid;place-items:center;color:var(--acc)}
.chat-head b{font-family:var(--fd);font-size:15px;display:block}
.chat-head span{font-size:11px;color:var(--ink3)}
#chatList{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px 16px 6px;scrollbar-width:none;overscroll-behavior:contain}
#chatList::-webkit-scrollbar{display:none}
.msg{max-width:84%;padding:10px 14px;border-radius:16px;font-size:13.5px;line-height:1.8;margin-bottom:9px;white-space:pre-wrap;word-break:break-word}
.msg.rf{margin-left:auto;background:var(--card2);border:1px solid var(--line);border-top-right-radius:5px}
.msg.me{margin-right:auto;background:var(--me-bg);border:1px solid var(--me-line);border-top-left-radius:5px}
.msg-act{display:inline-block;margin:4px 4px 0 0;font-size:12px;font-weight:600;color:var(--acc);border:1px solid var(--line2);border-radius:100px;padding:6px 13px}
.msg-act:active{transform:scale(.95)}
.typing{display:inline-flex;gap:4px;padding:13px 16px;background:var(--card2);border:1px solid var(--line);border-radius:16px;border-top-right-radius:5px;margin-bottom:9px}
.typing i{width:6px;height:6px;border-radius:50%;background:var(--ink3);animation:tp 1s ease infinite}
.typing i:nth-child(2){animation-delay:.15s}.typing i:nth-child(3){animation-delay:.3s}
@keyframes tp{0%,100%{opacity:.25;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}
.chat-sugs{display:flex;gap:7px;overflow-x:auto;padding:9px 16px 3px;scrollbar-width:none}
.chat-sugs::-webkit-scrollbar{display:none}
.chat-sugs .chip{flex:none;font-size:12px;padding:7px 13px}
.composer{display:flex;gap:9px;align-items:center;padding:11px 14px calc(env(safe-area-inset-bottom) + 12px);border-top:1px solid var(--line);background:var(--panel)}
.composer input{flex:1}
.send-btn{width:44px;height:44px;flex:none;border-radius:50%;background:var(--acc);color:var(--acc-ink);display:grid;place-items:center;transition:.15s}
.send-btn:active{transform:scale(.9)}
.rp-range{display:flex;gap:7px;margin-top:16px}
.rp-range .chip{flex:1;text-align:center}
.rp-grid{display:flex;gap:9px;margin-top:14px}
.rp-box{flex:1;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:13px 10px;text-align:center}
.rp-box b{font-family:var(--fd);font-size:21px;display:block}
.rp-box span{font-size:10.5px;color:var(--ink3)}
.rp-sec{margin-top:13px;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:13px 15px}
.rp-sec h4{font-size:11.5px;color:var(--ink3);font-weight:500;margin-bottom:7px;display:flex;align-items:center;gap:6px}
.rp-sec p{font-size:13.5px;line-height:1.8}
.rp-pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:4px 11px;border-radius:100px;margin-left:6px;margin-bottom:6px;border:1px solid currentColor}
.tw-top{margin-top:16px;text-align:center;background:var(--card);border:1px solid var(--line);border-radius:20px;padding:20px 16px}
.tw-top p{font-size:12.5px;color:var(--ink2);line-height:1.8;margin-top:10px}
.tw-line{margin-top:18px;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:13px 15px}
.tw-line h4{font-size:11.5px;color:var(--ink3);font-weight:500;margin-bottom:6px}
.tw-line p{font-size:13.5px;line-height:1.8}
.tw-bar{display:flex;align-items:center;gap:9px;padding:7px 0}
.tw-bar span{width:56px;font-size:11.5px;color:var(--ink2)}
.tw-bar .bar-track{height:6px}
.tw-bar em{font-size:10.5px;color:var(--ink3);font-style:normal;width:34px;text-align:left}
.wd-bars{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-top:10px}
.wd-b{display:flex;flex-direction:column;align-items:center;gap:5px}
.wd-b span{font-size:9.5px;color:var(--ink3)}
.wd-track{width:14px;height:46px;border-radius:100px;background:var(--card2);display:flex;align-items:flex-end;overflow:hidden}
.wd-track i{display:block;width:100%;background:var(--line2);border-radius:100px}
.wd-track i.on{background:var(--acc)}
.set-card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:15px;margin-bottom:4px}
.set-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid var(--line)}
.set-row:last-child{border-bottom:none}
.set-row b{font-size:13.5px;display:block}
.set-row p{font-size:11.5px;color:var(--ink3);margin-top:3px;line-height:1.7}
.set-note{font-size:11px;color:var(--ink3);line-height:1.8;margin-top:11px;padding-top:11px;border-top:1px dashed var(--line2)}
.acc-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;color:var(--good);border:1px solid var(--line2);border-radius:100px;padding:4px 11px;flex:none}
.seg{display:flex;background:var(--card2);border:1px solid var(--line2);border-radius:12px;padding:3px;gap:3px}
.seg button{flex:1;padding:9px;border-radius:9px;color:var(--ink3);font-size:13px;display:flex;align-items:center;justify-content:center;gap:6px;transition:.15s}
.seg button.on{background:var(--acc);color:var(--acc-ink);font-weight:600}
.swatches{display:flex;gap:14px;margin-top:14px;justify-content:center}
.swatch{width:36px;height:36px;border-radius:50%;position:relative;border:2px solid transparent;transition:.15s}
.swatch.on{border-color:var(--ink)}
.swatch.on::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:11px;height:6px;border-right:2.5px solid var(--bg);border-bottom:2.5px solid var(--bg);transform:rotate(-45deg) translate(-1px,-2px)}
.sw{position:relative;width:44px;height:26px;border-radius:100px;background:var(--card2);border:1px solid var(--line2);transition:.2s;flex:none}
.sw i{position:absolute;top:2.5px;right:3px;width:19px;height:19px;border-radius:50%;background:var(--ink3);transition:.2s}
.sw.on{background:var(--acc);border-color:var(--acc)}
.sw.on i{right:20px;background:var(--acc-ink)}
.att-strip{display:flex;gap:9px;flex-wrap:wrap;align-items:center}
.att-th{position:relative;width:56px;height:56px;border-radius:12px;overflow:hidden;border:1px solid var(--line2)}
.att-th img{width:100%;height:100%;object-fit:cover;display:block;cursor:zoom-in}
.att-x{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:rgba(0,0,0,.65);color:#fff;display:grid;place-items:center}
.att-add{width:56px;height:56px;border-radius:12px;border:1.5px dashed var(--line2);color:var(--ink3);display:grid;place-items:center}
#lightbox{position:absolute;top:0;left:0;right:0;bottom:0;z-index:90;background:rgba(5,4,2,.92);display:none;align-items:center;justify-content:center;padding:20px}
#lightbox.show{display:flex}
#lightbox img{max-width:100%;max-height:82%;border-radius:14px}
#lightbox .sh-x{position:absolute;top:calc(env(safe-area-inset-top) + 16px);right:16px;background:rgba(255,255,255,.1)}
.pick-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.pick-grid.c2{grid-template-columns:repeat(2,1fr)}
.pick-card{position:relative;display:flex;flex-direction:column;align-items:center;gap:6px;padding:13px 4px 11px;border-radius:14px;border:1.5px solid var(--line);background:var(--card);color:var(--ink2);font-size:11.5px;font-weight:500;transition:all .18s;text-align:center}
.pick-card .ic{color:var(--rc,var(--ink3))}
.pick-card small{font-size:9.5px;color:var(--ink3);line-height:1.5}
.pick-card.on{border-color:var(--rc,var(--acc));background:var(--pc-soft,var(--acc-soft));color:var(--ink);font-weight:600;transform:translateY(-2px);box-shadow:0 8px 18px -10px rgba(0,0,0,.5)}
.pick-card.on::after{content:'';position:absolute;top:7px;left:7px;width:7px;height:4px;border-left:2px solid var(--rc,var(--acc));border-bottom:2px solid var(--rc,var(--acc));transform:rotate(-45deg)}
.pick-card:active{transform:scale(.94)}
.mood-row-lg{display:flex;gap:6px}
.mood-lg{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 0 8px;border-radius:14px;border:1.5px solid var(--line);color:var(--ink3);font-size:10.5px;transition:all .18s}
.mood-lg.on{color:var(--acc);border-color:var(--acc);background:var(--acc-soft);animation:pop .32s ease}
.mood-lg:active{transform:scale(.93)}
@keyframes pop{0%{transform:scale(.82)}60%{transform:scale(1.1)}100%{transform:scale(1)}}
.dq-row{display:flex;gap:7px}
.dq{flex:1;padding:10px;border-radius:12px;border:1.5px solid var(--line);color:var(--ink2);font-size:13px;text-align:center;transition:.15s}
.dq.on{border-color:var(--acc);color:var(--acc);background:var(--acc-soft);font-weight:600}
.dq:active{transform:scale(.97)}
#evDateWrap{overflow:hidden;max-height:0;transition:max-height .3s ease}
#evDateWrap.open{max-height:90px;padding-top:12px}
#relDateWrap{overflow:hidden;max-height:0;transition:max-height .3s ease}
#relDateWrap.open{max-height:90px;margin-top:12px}
.sh-grip{width:44px;height:4.5px;border-radius:100px;background:var(--line2);margin:0 auto 14px}
.sheet textarea{min-height:74px;max-height:200px}
input,textarea,select{width:100%;background:var(--card);border:1px solid var(--line2);color:var(--ink);border-radius:13px;padding:12px 14px;font:inherit;font-size:14px;outline:none;transition:border-color .2s}
input:focus,textarea:focus{border-color:var(--acc)}
textarea{resize:none;line-height:1.8}
input[type=date]{color-scheme:dark;min-height:46px}
html[data-theme="light"] input[type=date]{color-scheme:light}
.field{margin-bottom:14px}
.lab{font-size:12px;color:var(--ink2);margin-bottom:7px;display:block}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chip{padding:8px 14px;border-radius:100px;border:1px solid var(--line2);color:var(--ink2);font-size:13px;transition:.18s}
.chip.on{background:var(--acc);border-color:var(--acc);color:var(--acc-ink);font-weight:600}
.btn{display:block;width:100%;background:var(--acc);color:var(--acc-ink);font-weight:700;font-size:14.5px;border-radius:14px;padding:13px;text-align:center;transition:.15s}
.btn:active{transform:scale(.98)}
.btn.ghost{background:transparent;border:1px solid var(--line2);color:var(--ink)}
.btn.sm{width:auto;padding:10px 18px;font-size:13px}
.sheet{position:absolute;left:0;right:0;bottom:0;background:var(--panel);border-top:1px solid var(--line2);border-radius:24px 24px 0 0;transform:translateY(105%);transition:transform .38s cubic-bezier(.3,.9,.3,1);z-index:50;padding:14px 20px calc(env(safe-area-inset-bottom) + 20px);max-height:90%;overflow-y:auto;-webkit-overflow-scrolling:touch;scrollbar-width:thin}
.sheet.open{transform:none}
.sh-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}
.sh-head b{font-family:var(--fd);font-size:16.5px}
.sh-x{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;border:1px solid var(--line2);color:var(--ink2)}
#backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(8,6,3,.62);opacity:0;pointer-events:none;transition:.3s;z-index:40}
#backdrop.show{opacity:1;pointer-events:auto}
html[data-theme="light"] #backdrop{background:rgba(40,32,16,.4)}
.sug-chips{display:flex;gap:7px;flex-wrap:wrap;margin:10px 0 13px}
.sug{font-size:12px;padding:7px 12px;border-radius:100px;border:1px dashed var(--line2);color:var(--ink2)}
.sug:active{background:var(--card2)}
.cat-hint{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--ink2);margin-bottom:9px;flex-wrap:wrap}
.cat-hint b{color:var(--acc)}
.auto-tag{font-size:10px;border:1px solid var(--line2);border-radius:100px;padding:2px 8px;color:var(--ink3)}
.more-hi{font-family:var(--fd);font-size:17px;font-weight:700;margin-bottom:3px}
.more-sub{font-size:12px;color:var(--ink3);margin-bottom:16px}
.more-item{display:flex;align-items:center;gap:12px;width:100%;padding:13px 4px;border-bottom:1px solid var(--line);font-size:14px;text-align:right;transition:.15s}
.more-item:active{padding-right:9px}
.more-item .ic{color:var(--acc)}
.more-item span{flex:1}
.more-item small{color:var(--ink3);font-size:11px}
.more-div{height:1px;background:var(--line);margin:13px 0}
#toast{position:absolute;top:calc(env(safe-area-inset-top) + 14px);right:50%;transform:translate(50%,-160%);transition:.45s cubic-bezier(.2,.9,.3,1.15);background:var(--panel);border:1px solid var(--line2);border-right:3px solid var(--tc,var(--acc));border-radius:14px;padding:11px 15px;display:flex;gap:10px;align-items:center;z-index:70;max-width:86%;font-size:12.5px;line-height:1.6;box-shadow:0 14px 40px rgba(0,0,0,.55)}
#toast.show{transform:translate(50%,0)}
#toast .ic{color:var(--tc,var(--acc));flex:none}
#modal{position:absolute;top:0;left:0;right:0;bottom:0;z-index:80;display:none;align-items:center;justify-content:center;padding:28px;background:rgba(8,6,3,.66)}
html[data-theme="light"] #modal{background:rgba(40,32,16,.45)}
#modal.show{display:flex}
.md-box{background:var(--panel);border:1px solid var(--line2);border-radius:18px;padding:20px;width:100%;max-width:320px;animation:viewIn .25s ease}
.md-box b{font-family:var(--fd);font-size:15.5px;display:block;margin-bottom:8px}
.md-box p{font-size:13px;color:var(--ink2);line-height:1.8;margin-bottom:16px}
.md-acts{display:flex;gap:9px}
#ob{position:absolute;top:0;left:0;right:0;bottom:0;z-index:30;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:34px 26px calc(env(safe-area-inset-bottom) + 26px);display:flex;flex-direction:column;background:var(--bg)}
.ob-lang{position:absolute;top:calc(env(safe-area-inset-top) + 16px);left:18px;display:flex;gap:6px}
.ob-lang button{font-size:11.5px;font-weight:600;padding:6px 12px;border-radius:100px;border:1px solid var(--line2);color:var(--ink2)}
.ob-lang button.on{color:var(--acc);border-color:var(--acc)}
.ob-mid{flex:1;display:flex;flex-direction:column;justify-content:center}
.ob-h{font-family:var(--fd);font-size:27px;font-weight:800;text-align:center}
.ob-h em{font-style:normal;color:var(--acc)}
.ob-p{text-align:center;color:var(--ink2);font-size:13.5px;line-height:2;margin:13px auto 0;max-width:300px}
.ob-feats{margin:26px auto 0;max-width:290px;width:100%}
.ob-feat{display:flex;gap:12px;align-items:center;padding:11px 0}
.ob-feat .ic{color:var(--acc);flex:none}
.ob-feat p{font-size:13px;color:var(--ink2)}
.ob-feat p b{color:var(--ink)}
.ob-nav{margin-top:30px}
.ob-ind{display:flex;gap:6px;justify-content:center;margin-bottom:18px}
.ob-ind i{width:7px;height:7px;border-radius:50%;background:var(--line2);transition:.3s}
.ob-ind i.on{background:var(--acc);width:20px;border-radius:100px}
.ob-opts{margin-top:26px;display:flex;flex-direction:column;gap:11px}
.ob-opt{text-align:right;background:var(--card);border:1px solid var(--line2);border-radius:15px;padding:15px 17px;transition:.15s}
.ob-opt:active{transform:scale(.98)}
.ob-opt b{display:block;font-size:14.5px;margin-bottom:4px}
.ob-opt span{font-size:12px;color:var(--ink2);line-height:1.7;display:block}
html[dir="ltr"] .ob-opt{text-align:left}
.ic{display:inline-block;vertical-align:middle;flex:none}
html[dir="ltr"] .rec{border-right:1px solid var(--line);border-left:3px solid var(--rc,var(--acc))}
html[dir="ltr"] .dec-verdict{border-right:none;border-left:3px solid var(--acc);border-radius:10px 0 0 10px}
html[dir="ltr"] .dec-cols li::before,html[dir="ltr"] .dec-q li::before{right:auto;left:0}
html[dir="ltr"] .dec-cols li,html[dir="ltr"] .dec-q li{padding-right:0;padding-left:12px}
html[dir="ltr"] .msg.rf{margin-left:auto;margin-right:0;border-top-right-radius:16px;border-top-left-radius:5px}
html[dir="ltr"] .msg.me{margin-right:auto;margin-left:0;border-top-left-radius:16px;border-top-right-radius:5px}
html[dir="ltr"] .typing{border-top-right-radius:16px;border-top-left-radius:5px}
html[dir="ltr"] .sw i{right:auto;left:3px}
html[dir="ltr"] .sw.on i{right:auto;left:20px}
html[dir="ltr"] .tab-dot{right:auto;left:calc(50% - 15px)}
html[dir="ltr"] .more-item{text-align:left}
html[dir="ltr"] .more-item:active{padding-right:4px;padding-left:9px}
html[dir="ltr"] .hint-x{float:right}
html[dir="ltr"] .pick-card.on::after{left:auto;right:7px}
html[dir="ltr"] .att-x{left:auto;right:3px}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:var(--line2);border-radius:10px}
</style>
</head>
<body>
<div class="stage">
  <div class="stage-cap" id="stageCap"></div>
  <div id="phone">
    <div id="splash"><svg width="72" height="72" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="21.5" stroke="#E5A83E" stroke-width="1.6" opacity=".55"/><path d="M11 26h7l3-9 6 16 3-7h7" stroke="#E5A83E" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><div class="sp-t">رفيق · Rafiq</div><div class="sp-bar"><i></i></div></div>
    <div id="ob"></div>
    <div id="app" hidden>
      <header class="app-head" id="appHead"></header>
      <main id="views"></main>
      <nav id="tabbar"></nav>
    </div>
    <div id="backdrop"></div>
    <div class="sheet" id="shEvent"></div>
    <div class="sheet" id="shDay"></div>
    <div class="sheet" id="shRel"></div>
    <div class="sheet" id="shDec"></div>
    <div class="sheet" id="shMore"></div>
    <div id="lightbox"><button class="sh-x" data-lb-close></button><img id="lbImg" alt=""></div>
    <div id="toast"></div>
    <div id="modal"></div>
  </div>
</div>
<input type="file" id="importFile" accept=".json,application/json" hidden>
<input type="file" id="evFile" accept="image/*" hidden>
<script>
window.__rfStage='لم يبدأ السكربت الرئيسي';
window.__rfErr=function(msg){
 try{
  var b=document.getElementById('rfErrBar');
  if(!b){b=document.createElement('div');b.id='rfErrBar';
   b.style.cssText='position:fixed;left:10px;right:10px;bottom:calc(90px + env(safe-area-inset-bottom));z-index:999;background:#3A1B15;border:1px solid #7A3428;color:#F5CFC6;font:12px/1.7 -apple-system,sans-serif;padding:10px 12px;border-radius:12px;direction:rtl;text-align:right';
   b.onclick=function(){if(b.parentNode)b.parentNode.removeChild(b)};
   (document.body||document.documentElement).appendChild(b);}
  b.textContent='تنبيه تقني: '+String(msg).slice(0,160)+'  (اضغط للإخفاء وأرسل لي النص)';
  var sp=document.getElementById('splash');if(sp&&sp.parentNode)sp.parentNode.removeChild(sp);
 }catch(e){}
};
window.addEventListener('error',function(e){__rfErr(e.message+' @سطر '+e.lineno)});
window.addEventListener('unhandledrejection',function(e){__rfErr((e.reason&&e.reason.message)||String(e.reason))});
setTimeout(function(){if(!window.__rfBooted)__rfErr('المحرك لم يُقلع — تأكد أن آخر حرف في ملفك هو نهاية وسم html')},3000);
</script>
<script>
'use strict';
window.__rfStage='قراءة الأدوات';
/* =============== أدوات =============== */
const $=s=>document.querySelector(s), $$=s=>[].slice.call(document.querySelectorAll(s));
const put=(sel,html)=>{const el=$(sel);if(el)el.innerHTML=html;return el};
const uid=()=>'x'+Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-4);
const DAY=864e5, wait=ms=>new Promise(r=>setTimeout(r,ms));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dayStart=ts=>{const d=new Date(ts);d.setHours(0,0,0,0);return d.getTime()};
const isoDate=ts=>{const d=new Date(ts),o=d.getTimezoneOffset();return new Date(ts-o*6e4).toISOString().slice(0,10)};
const LOC=()=>LANG==='ar'?'ar':'en';
const fmtDate=ts=>new Date(ts).toLocaleDateString(LOC(),{weekday:'long',day:'numeric',month:'long'});
const fmtShort=ts=>new Date(ts).toLocaleDateString(LOC(),{day:'numeric',month:'short'});
const fmtTime=ts=>new Date(ts).toLocaleTimeString(LOC(),{hour:'numeric',minute:'2-digit'});
function timeAgo(ts){const d=Date.now()-ts;
 if(d<6e4)return LANG==='ar'?'الآن':'now';
 if(d<36e5)return LANG==='ar'?'قبل '+Math.floor(d/6e4)+' دقيقة':Math.floor(d/6e4)+'m ago';
 if(d<864e5)return LANG==='ar'?'قبل '+Math.floor(d/36e5)+' ساعة':Math.floor(d/36e5)+'h ago';
 const n=Math.floor(d/864e5);
 if(n===1)return LANG==='ar'?'أمس':'yesterday';
 if(n<7)return LANG==='ar'?'قبل '+n+' أيام':n+' days ago';
 return fmtShort(ts);}
function daysSince(ts){return Math.floor((Date.now()-ts)/DAY)}
function pd(n){return LANG==='ar'?(n===1?'يوم':'أيام'):(n===1?'day':'days')}
function calcAge(b){if(!b)return null;const d=new Date(b),n=new Date();let a=n.getFullYear()-d.getFullYear();if(n<new Date(n.getFullYear(),d.getMonth(),d.getDate()))a--;return a}

/* =============== الترجمة =============== */
let LANG='ar';
const T={
 tab_home:['الرئيسية','Home'],tab_cal:['التقويم','Calendar'],tab_chat:['رفيق','Rafiq'],tab_more:['المزيد','More'],
 ti_cal:['التقويم','Calendar'],ti_life:['لوحة الحياة','Life Dashboard'],ti_relations:['العلاقات','Relationships'],ti_decisions:['مركز القرارات','Decision Center'],ti_report:['التقرير الأسبوعي','Weekly Report'],ti_twin:['التوأم الرقمي','Digital Twin'],ti_settings:['الإعدادات','Settings'],
 save:['حفظ','Save'],cancel:['إلغاء','Cancel'],del:['حذف','Delete'],done:['تم','Done'],next:['متابعة','Continue'],
 ob_h:['رفيق <em>·</em> شريك حياتك','Rafiq <em>·</em> your life companion'],
 ob_p:['ليس تطبيق مهام ولا دفتر ملاحظات. رفيقٌ يفهمك، يتذكر تفاصيلك بالصور، ويحوّل يومياتك إلى مؤشرات وقرارات أذكى.','Not a to-do app, not a notebook. Rafiq understands you, remembers your details and photos, and turns your days into signals and smarter decisions.'],
 ob_f1b:['يتذكر','Remembers'],ob_f1:[' — كل حدث تحكيه له يبقى في ذاكرته، حتى صوره',' — every event you tell him stays in memory, photos included'],
 ob_f2b:['يقيس','Measures'],ob_f2:[' — ستة مؤشرات حية لصحتك وعلاقاتك ومالك وصفائك',' — six live scores for health, relationships, money and mind'],
 ob_f3b:['يشاركك','Shares'],ob_f3:[' — تقارير أسبوعية جاهزة على واتساب بضغطة واحدة',' — weekly reports ready for WhatsApp, one tap away'],
 ob_start:['ابدأ الرحلة','Start the journey'],
 ob2_h:['كيف <em>نناديك</em>؟','What should <em>we call you</em>?'],
 ob2_p:['سأناديك بهذا الاسم في كل محادثة وتقرير.','I will use this name in every conversation and report.'],
 lbl_name:['اسمك','Your name'],ph_name:['مثال: مراد','e.g. Murad'],lbl_job:['مهنتك (اختياري)','Occupation (optional)'],ph_job:['مثال: مهندس، طالب، رائد أعمال','e.g. engineer, student, founder'],
 need_name:['أخبرني أولاً كيف أناديك','First tell me what to call you'],
 ob3_h:['أين تريد أن <em>يساندك</em>؟','Where do you want <em>his support</em>?'],
 ob3_p:['اختر ما يشغل بالك اليوم — يمكنك تعديله لاحقاً من الإعدادات.','Pick what matters now — change it later in Settings.'],
 goals:[['صحتي','علاقاتي','استقراري المالي','طموحي المهني','صفائي الذهني','تطوير ذاتي'],['My health','My relationships','Financial stability','Career ambition','Mental clarity','Personal growth']],
 ob4_h:['كيف <em>نبدأ</em>؟','How shall <em>we begin</em>?'],
 ob4_p:['يمكنك تجربة رفيق ببيانات نموذجية لتراه حياً فوراً، أو البدء بصفحة بيضاء.','Try Rafiq with sample data and see it alive instantly, or start from a blank page.'],
 ob_seed_b:['املأه ببيانات تجريبية','Fill with sample data'],ob_seed_s:['أسبوعان من الأحداث والعلاقات والقرارات — ترى كل المزايا فوراً، وتمسحها متى شئت.','Two weeks of events, relationships and decisions — see everything now, wipe anytime.'],
 ob_zero_b:['أبدأ من الصفر','Start from zero'],ob_zero_s:['صفحة بيضاء — أول حدث تسجّله سيكون بداية قصتك مع رفيق.','A blank page — your first logged event starts the story.'],
 gr_night:['ليلة هادئة','Quiet night'],gr_morn:['صباح الخير','Good morning'],gr_after:['طاب نهارك','Good afternoon'],gr_even:['مساء الخير','Good evening'],
 under_watch:['كل شيء تحت مراقبتي','everything under my watch'],
 life_watch:['مؤشر حياتك · اضغط للتفاصيل','Life score · tap for details'],
 wk_up:[' هذا الأسبوع',' this week'],stable:['مستقر','steady'],
 of100:['من 100','of 100'],
 lw1:['أنت في أفضل حالاتك','You are at your best'],lw2:['حياتك في توازن جيد','Your life is in good balance'],lw3:['حياتك تطلب لمسة عناية','Your life needs a gentle touch'],lw4:['لحظة إعادة ضبط تستحقها','A reset moment you deserve'],
 life_cap:[' — الصحة والعلاقات والمال والعمل والنفسية والتطور، في رقم واحد',' — health, relationships, money, work, mind and growth in one number'],
 mood_q:['كيف مزاجك الآن؟ (النفسية تُبنى من هنا)','How is your mood now? (your mind score builds here)'],
 mood_today:['مزاج اليوم: ','Today mood: '],mood_edit:[' — يمكنك تعديله',' — tap to change'],
 recs_t:['يوصي رفيق','Rafiq recommends'],recs_empty:['لا توصيات الآن — أنت على المسار الصحيح','No recommendations — you are on track'],
 mem_t:['آخر ذكرياتك','Latest memories'],mem_empty:['يومك ما زال بيضاً —','Your day is still blank —'],mem_first:['سجّل أول حدث','Log your first event'],
 tag_pos:[' · إيجابي',' · positive'],tag_neg:[' · سلبي',' · negative'],
 a2hs:['<b>اجعل رفيق تطبيقاً حقيقياً:</b> من سفاري اضغط زر المشاركة ثم «إضافة إلى الشاشة الرئيسية» — يفتح بملء الشاشة ويحفظ بياناتك بإحكام.','<b>Make Rafiq a real app:</b> in Safari tap Share then “Add to Home Screen” — it opens full-screen and keeps your data safe.'],
 a2hs_ok:['فهمت','Got it'],
 ev_t:['حدث جديد','New event'],ev_ph:['ماذا حدث اليوم؟ اكتب ببساطة كما تحكي لصديق…','What happened? Write it simply, like telling a friend…'],
 ev_cat:['التصنيف','Category'],ev_auto:['تلقائي','auto'],ev_sensed:['فهم رفيق: ','Rafiq sensed: '],
 ev_mood:['مزاجك حول هذا الحدث (اختياري)','Your mood about it (optional)'],
 ev_att:['مرفقات — صور اللحظة (حتى صورتين)','Attachments — photos (up to two)'],
 ev_date:['التاريخ','Date'],dq_today:['اليوم','Today'],dq_yest:['أمس','Yesterday'],dq_custom:['تاريخ محدد','Pick a date'],
 ev_save:['حفظ الحدث','Save event'],
 need_text:['اكتب الحدث أولاً — حتى سطر واحد يكفي','Write the event first — one line is enough'],
 need_date:['اختر التاريخ','Pick a date'],
 future:['لا أستطيع توثيق المستقبل — اختر اليوم أو أقدم','I cannot document the future — pick today or earlier'],
 c_press:['جارٍ ضغط الصورة…','Compressing image…'],c_ok:['أُرفقت الصورة — ستُخزن داخل حدثك','Attached — stored inside your event'],c_err:['تعذر قراءة الصورة','Could not read the image'],c_max:['صورتان كحد أقصى للحدث','Two photos max per event'],
 mood_toast:['مزاج اليوم: ','Mood today: '],mood_fx:[' — مؤشر النفسية تأثر فوراً',' — your mind score reacted'],
 ev_pos:['رائع يا ','Great, '],ev_pos2:[' ترتفع. هذا الجانب يُبنى بالتكرار لا بالحماس',' is rising. This side grows by repetition, not bursts'],
 ev_neg:['سجلتُه. الأيام الصعبة جزء من الصورة — وتسميتها أول خطوة لتجاوزها','Logged. Hard days are part of the picture — naming them is step one past them'],
 ev_neu:['سُجل في ذاكرتي. التوازن يبدأ برؤية يومك كما هو','In my memory. Balance starts with seeing your day as it is'],
 rel_sh:['شخص مهم في حياتك','Someone who matters'],rel_name:['الاسم','Name'],rel_name_ph:['مثال: أمي، خالد، سارة','e.g. Mom, Khalid, Sara'],
 rel_type:['الصلة','Relation'],rel_last:['آخر تواصل','Last contact'],rel_q20:['منذ أسابيع','Weeks ago'],rel_week:['منذ أسبوع','A week ago'],rel_custom:['تاريخ محدد','Pick a date'],rel_add_btn:['إضافة','Add'],
 rel_need:['من هو هذا الشخص المهم؟','Who is this important person?'],
 rel_joined:[' انضم لشبكتك — سأنبّهك قبل أن يبرد التواصل',' joined your circle — I will nudge you before it cools'],
 contact_toast:['سُجل تواصلك مع ','Logged your contact with '],contact_toast2:[' — العلاقات تُبنى بالتفاصيل الصغيرة',' — relationships grow on small details'],
 rel_del_t:['حذف ','Remove '],rel_del_p:['سيُزال من شبكة علاقاتك ولن أراقب هذا التواصل بعد الآن.','They will leave your circle and I will stop watching this connection.'],
 rel_deleted:['حُذف من شبكتك','Removed from your circle'],
 rel_view_t:['شبكتك الإنسانية','Your human circle'],
 rel_sum_a:['تراقب ','You are watching '],rel_sum_n:[' علاقة في حياتك.',' relationships.'],
 rel_stale:[' منها تحتاج تواصلاً الآن.',' of them need contact now.'],
 rel_good:[' جميعها حية ونشطة — أحسنت.',' All alive and active — well done.'],
 rel_empty:['لم تُض علاقات بعد. من الأشخاص الذين لا تريد أن يبردوا في حياتك؟','No relationships yet. Who should never go cold in your life?'],
 rl_today:['اليوم','Today'],rl_yest:['أمس','Yesterday'],rl_days:['منذ ',' ago'],
 rel_add:['أضف شخصاً مهماً','Add someone who matters'],
 dec_sh:['قرار جديد','New decision'],dec_what:['ما القرار؟','The decision'],
 dec_ph:['مثال: شراء سيارة، تغيير الوظيفة…','e.g. buy a car, change jobs…'],
 dec_kind:['النوع','Type'],dec_amt:['المبلغ التقريبي (اختياري)','Approximate amount (optional)'],dec_amt_ph:['مثال: 60,000 ر.س','e.g. SAR 60,000'],
 dec_go:['حلّله يا رفيق','Analyze it, Rafiq'],
 dec_need:['ما القرار الذي تريد تحليله؟','What decision should I analyze?'],
 dec_analyzed:['حللت القرار على ضوء مؤشراتك — اقرأ بتمعن','Analyzed against your scores — read it slowly'],
 dec_done_t:['قرار ناضج يُكتب ونُفَّذ — سأراقب أثره','A mature decision, made — I will watch its effect'],
 dec_made:['اتخذت القرار','Decision made'],dec_arch:['أرشفة','Archive'],
 dec_arch_t:['أرشفة القرار؟','Archive decision?'],dec_arch_p:['سيُحذف من مركز القرارات نهائياً.','It will be removed from the Decision Center for good.'],
 dec_view_t:['مركز القرارات','Decision Center'],
 dec_view_p:['قبل أي قرار — اعرضه عليّ. أحلله على ضوء مؤشر مالك وعملك، وأخرج الفرص والمخاطر والأسئلة التي تُنسى عادة.','Before any big call — bring it to me. I test it against your money and work scores and surface the upside, risks and forgotten questions.'],
 dec_empty:['لا قرارات معلّقة بعد','No pending decisions'],dec_new:['قرار جديد','New decision'],
 pros_h:['فرص','Upside'],risks_h:['مخاطر','Risks'],qs_h:['أسئلة رفيق لك','Questions from Rafiq'],
 badge_ok:['مدروس','Sound'],badge_mid:['بشروط','Conditional'],badge_no:['مؤجل','Postpone'],
 rep_t:['التقرير الأسبوعي','Weekly Report'],rep_this:['هذا الأسبوع','This week'],rep_last:['الأسبوع الماضي','Last week'],
 rep_s1:['حدث موثق','events logged'],rep_s2:['أيام نشطة','active days'],rep_s3:['مزاج الأسبوع','week mood'],
 rep_read:['قراءة رفيق','Rafiq reads your week'],
 rep_str:[' · أقوى جانب',' · strongest'],rep_weak:[' · يحتاج عناية',' · needs care'],
 rep_none:['لم يُسجل','not logged'],
 rep_ach:['إنجاز يستحق شكرك','A win worth credit'],rep_warm:['لحظة إنسانية دافئة','A warm human moment'],
 rep_next:['توجهات الأسبوع القادم','Toward next week'],
 rep_next_none:['أنت متوازن — لا شيء يستدعي تدخلي هذا الأسبوع.','You are balanced — nothing needs my hand this week.'],
 rep_share:['شارك التقرير على واتساب','Share report on WhatsApp'],
 tw_ring:['اكتمال التوأم','twin completeness'],
 tw_p:['توأمك الرقمي يتعلم من كل حدث وصورة ومحادثة: أنماطك، مصادر طاقتك، إيقاع أيامك، وقدرتك على التعافي. كلما زادت ذكرياتك صار أقرب إلى عقلها.','Your digital twin learns from every event, photo and chat: your patterns, energy sources, weekly rhythm and resilience. The more memories you feed it, the closer it gets to your mind.'],
 tw_week_t:['إيقاعك الأسبوعي','Your weekly rhythm'],
 tw_week_a:['لحظاتك الإيجابية موزعة على أيام الأسبوع — ','Your positive moments spread across the week — '],
 tw_week_b:[' هو ',' is your '],tw_gold:['يومك الذهبي','golden day'],tw_week_c:['.',' day.'],
 tw_pat_t:['أنماطي عنك','Patterns I see in you'],
 streak_t:['سلسلتك الحالية','Your current streak'],
 streak_on:[' متتالية من التوثيق. السلسلة أثمن من الكمال — لا تكسرها اليوم.',' straight days of logging. The streak beats perfection — do not break it today.'],
 streak_off:['لا سلسلة نشطة الآن. يوم واحد من التوثيق اليوم يبدأ سلسلة قد تغيّر سنتك.','No active streak. One day of logging today starts a chain that could change your year.'],
 habit_t:['عادتك الذهبية','Your golden habit'],
 habit_on:[' ظهرت ',' appeared '],habit_on2:[' مرات في لحظاتك الإيجابية — هذه عادتك الذهبية. احمِها بموعد ثابت في تقويمك.',' times in your positive moments — your golden habit. Protect it with a fixed calendar slot.'],
 habit_off:['لم أرصد بعد نشاطاً إيجابياً متكرراً — واصل التسجيل أسبوعين وسأسمّيها لك.','No repeating positive activity yet — keep logging for two weeks and I will name it.'],
 recov_t:['قدرتك على التعافي','Your recovery power'],
 recov_a:['بعد يوم ثقيل، تعود لتسجل شيئاً إيجابياً خلال ','After a heavy day you typically log something positive within '],
 recov_b:[' — مرونتك أسرع مما تظن، وهذا أهم مؤشر نفسي أملكه عنك.',' — your resilience is faster than you think, and it is the strongest signal I hold on you.'],
 recov_off:['لم أرصد بعد نمط تعافٍ كافٍ — واصل التسجيل لأعرف كم تحتاج بعد يوم سيئ.','No recovery pattern yet — keep logging so I learn how long you need after a bad day.'],
 energy_t:['مصدر طاقتك الأول','Top energy source'],
 energy_p:[' — رصدتُ منه ',' — I logged '],energy_p2:[' لحظة إيجابية عبر رحلتك.',' positive moments from it across your journey.'],
 stress_t:['مصدر الثقل','Weight source'],
 stress_on:[' — ظهر سلبياً ',' — showed up negatively '],stress_on2:[' مرة. يستحق خطة صغيرة هذا الأسبوع.',' times. It deserves a small plan this week.'],
 stress_off:['لم أرصد مصدر توتر واضحاً بعد — وهذا في ذاته مؤشر رائع.','No clear stress source yet — a great signal on its own.'],
 hour_t:['ساعتك الذهبية','Your golden hour'],
 hour_m:['صباحي النشاط — عقلك يبدأ يومه مبكراً','Morning-driven — your mind starts early'],
 hour_d:['نهاري الإيقاع — تزدهر بين الظهيرة والعصر','Daylight rhythm — you thrive from noon to afternoon'],
 hour_n:['ليلي الطبع — أفضل أفكارك تأتي بعد الغروب','Night nature — your best ideas come after sunset'],
 hour_s:[' (متوسط تسجيلاتك حول الساعة ',' (average logging around hour '],hour_s2:[').',').'],
 proj_t:['توقعاتي للأسبوع القادم','Forecast for next week'],
 proj_up_a:['إذا استمر مسارك، أتوقع مؤشرك بعد أسبوع قرب <b>','If your path holds, I expect your score near <b>'],
 proj_up_b:['/100</b> (صعود متوقع ','/100</b> next week (up '],proj_st:['مستقر','steady'],proj_up_c:[').',').'],
 proj_dn_b:['/100</b> (هبوط متوقع ','/100</b> (down '],
 proj_dn_c:['). والتوقع ليس قدَراً — كل حدث تسجله اليوم يعدّل هذا الرقم.','). A forecast is not fate — every event you log today bends this number.'],
 dist_t:['توزيع اهتمامك','Where attention goes'],
 ident_t:['جملة هويتك الآن','Your identity line'],
 tw_share:['شارك بصمة التوأم على واتساب','Share twin fingerprint on WhatsApp'],
 life_hex_t:['سداسي حياتك','Your life hexagon'],life_ind_t:['المؤشرات التفصيلية','Detailed scores'],
 spark_t:['مسار حياتك','Your life path'],spark_s:['آخر 14 يوماً · اليوم ','Last 14 days · today '],
 cal_today:['اليوم','Today'],
 cal_s1:['حدث هذا الشهر','events this month'],cal_s2:['يوم موثق','days documented'],cal_s3:['متوسط المزاج','avg mood'],
 cal_best_a:['يومك الأكثر حضوراً هذا الشهر: ','Your most present day this month: '],
 cal_best_b:[' بـ ',' with '],cal_best_c:[' أحداث — علّق مهامك الكبرى على أيام قوتك.',' events — put your big tasks on strong days.'],
 cal_add:['سجّل حدثاً','Log an event'],
 day_mood_on:['مزاج هذا اليوم: ','Mood that day: '],day_mood_off:['لم يُسجل مزاج لهذا اليوم.','No mood logged for this day.'],
 day_cnt:[' موثقة.',' documented.'],day_cnt1:[' حدث موثق.',' event documented.'],
 day_empty:['يوم بلا ذكريات مسجلة','A day with no logged memories'],
 day_add:['أضف حدثاً في هذا اليوم','Add an event on this day'],
 chat_sub:['يحلل بياناتك محلياً — يتذكر أحداثك وصورك وعلاقاتك','Reads your data locally — remembers events, photos, people'],
 chat_ph:['اكتب لرفيق…','Write to Rafiq…'],
 st_lang:['اللغة · Language','Language · اللغة'],
 st_store:['حالة التخزين','Storage status'],st_active:['نشط','Active'],
 st_idb:['محمي ودائم — IndexedDB','Protected & persistent — IndexedDB'],
 st_ls:['دائم احتياطي — localStorage','Persistent fallback — localStorage'],
 st_ls_note_f:['وضع ملف محلي: سفاري قد يجعل الحفظ مؤقتاً. للحفظ الكامل استضف الملف أو أضفه للشاشة الرئيسية.','Local file mode: Safari may keep this temporary. For full persistence host the file or add to Home Screen.'],
 st_ls_note_h:['حفظ احتياطي — للأمان الكامل أضف رفيق للشاشة الرئيسية من سفاري.','Fallback storage — for full safety add Rafiq to your Home Screen from Safari.'],
 st_mem:['مؤقت فقط — البيانات تُمسح عند الإغلاق','Temporary only — clears on close'],
 st_mem_note:['هذه البيئة تمنع الحفظ (معاينة محرر أو تصفح خاص). للتجربة الكاملة افتح الملف في سفاري أو استضفه.','This environment blocks storage (editor preview or private mode). Open in Safari or host it for the full experience.'],
 st_profile:['الملف الشخصي','Profile'],st_bday:['تاريخ الميلاد','Birth date'],st_age:[' · عمرك ',' · age '],st_age2:[' سنة',''],
 st_saved:['حُفظ ملفك — سأناديك به من الآن','Profile saved — I will call you by it'],st_needname:['الاسم لا يمكن أن يكون فارغاً','Name cannot be empty'],
 st_link_t:['ربط الحساب','Account linking'],st_email:['البريد الإلكتروني','Email'],
 st_link:['ربط البريد','Link email'],st_unlink:['فصل البريد','Unlink'],
 st_linked:['مرتبط','Linked'],st_linked_p:['بريدك المحفوظ محلياً على جهازك.','Saved locally on your device.'],
 st_badmail:['أدخل بريداً صحيحاً','Enter a valid email'],
 st_link_ok:['تم الربط المحلي — بريدك هوية حسابك مستقبلاً','Linked locally — ready as your future account id'],
 st_unlink_t:['فصل البريد؟','Unlink email?'],st_unlink_p:['سيُزال من ملفك ويمكن إعادته في أي وقت.','It will be removed from your profile; you can re-add anytime.'],
 st_link_note:['الربط الآن <b>محلي بالكامل</b>: يُخزَّن في قاعدة بياناتك ويصبح معرّف حسابك عند إطلاق المزامنة لاحقاً. لا يُرسل منه شيء حالياً.','Linking is <b>fully local</b> for now: stored in your own database, becoming your account id when cloud sync launches. Nothing is sent today.'],
 st_theme:['المظهر','Appearance'],st_dark:['ليلي','Dark'],st_light:['نهاري','Light'],
 st_alerts:['التنبيهات الذكية','Smart nudges'],
 st_tg_rel:['تنبيهات العلاقات الهادئة','Quiet relationship alerts'],st_tg_rel_p:['أنبّهك حين يبرد التواصل مع شخص مهم أكثر من 10 أيام.','A nudge when contact with someone important cools past 10 days.'],
 st_tg_hab:['تنبيهات العادات','Habit nudges'],st_tg_hab_p:['أذكّرك حين يغيب جانب (صحة، ادخار، تعلم) عن أيامك.','A reminder when a side (health, saving, learning) goes missing.'],
 st_wa:['مشاركة واتساب','WhatsApp sharing'],
 st_wa_r:['تقرير الأسبوع','Weekly report'],st_wa_r_p:['رسالة جاهزة تلخص مؤشراتك وإنجازك وتوصياتك.','A ready message with your scores, wins and tips.'],
 st_wa_t:['بصمة التوأم','Twin fingerprint'],st_wa_t_p:['ملخص شخصيتك الرقمية ومصادر طاقتك.','Your digital personality and energy sources.'],
 st_wa_note:['يفتح واتساب برسالة معبأة تختار محادثتها — من جهازك مباشرة دون خوادم وسيطة.','Opens WhatsApp with a pre-filled message you address — straight from your device.'],
 more_hi:['أهلاً ','Hi '],more_sub:['رفيق نسخة 2.1.2 · كل بياناتك على جهازك وحدك','Rafiq v2.1.2 · all data stays on your device'],
 m_life:['لوحة الحياة','Life dashboard'],m_life_s:['سداسي المؤشرات','The six-sided view'],
 m_cal:['التقويم','Calendar'],m_cal_s:['ذكرياتك يوماً بيوم','Your days, one by one'],
 m_twin:['التوأم الرقمي','Digital twin'],m_twin_s:['أنماطك وتوقعاتك','Patterns and forecasts'],
 m_rel:['العلاقات','Relationships'],m_rel_s:['شبكتك الإنسانية','Your human circle'],
 m_dec:['مركز القرارات','Decision center'],m_dec_s:['قبل أن تخاطر','Before you risk it'],
 m_rep:['التقرير الأسبوعي','Weekly report'],m_rep_s:['مرايا أسبوعك','Your week, reflected'],
 m_set:['الإعدادات','Settings'],m_set_s:['الملف · الحساب · المظهر · اللغة','Profile · account · appearance · language'],
 m_exp:['تصدير نسخة احتياطية','Export backup'],m_exp_s:['rafiq-backup.json مع الصور','rafiq-backup.json with photos'],
 m_imp:['استيراد نسخة احتياطية','Import backup'],m_imp_s:['للانتقال بين الأجهزة','Move between devices'],
 m_wipe:['مسح البيانات التجريبية','Wipe sample data'],m_wipe_s:['لنبدأ قصتك الحقيقية','Start your real story'],
 m_wipeall:['مسح كل البيانات','Erase everything'],m_wipeall_s:['لا رجعة بعدها','No way back'],
 exp_ok:['حُفظت نسختك — احتفظ بها في مكان آمن','Backup saved — keep it somewhere safe'],
 exp_share:['شارك النسخة أو احفظها في «الملفات»','Share it or save to Files'],
 imp_ok:['استُوردت نسختك — رفيق استرجع ذاكرته','Imported — Rafiq restored his memory'],
 imp_err:['الملف ليس نسخة رفيق صالحة','Not a valid Rafiq backup'],
 wipe_t:['مسح البيانات التجريبية؟','Wipe sample data?'],wipe_p:['ستُحذف الأحداث والعلاقات والقرارات التجريبية فقط وتبقى بياناتك سليمة.','Only the sample events, relationships and decisions are removed. Yours stay intact.'],
 wipe_ok:['مسح التجريبي — ابدأ قصتك بسجل أول حدث','Demo wiped — start your story with the first event'],
 wipeall_t:['مسح كل شيء؟','Erase everything?'],wipeall_p:['سيُمحى كل ما يعرفه رفيق عنك: الأحداث والصور والعلاقات والقرارات والمحادثات. صدّر نسخة احتياطية أولاً.','Everything Rafiq knows about you will be erased: events, photos, relationships, decisions, chats. Export a backup first.'],
 storage_warn:['تنبيه: هذه البيئة تمنع الحفظ الدائم — افتح الملف في سفاري أو أضفه للشاشة الرئيسية','Heads-up: this environment blocks persistent storage — open in Safari or add to Home Screen'],
 storage_ls:['يعمل بحفظ احتياطي — للأمان الكامل أضفه للشاشة الرئيسية','Running on fallback storage — add to Home Screen for full safety'],
 rec_rel_t:['تواصل مع ','Reach out to '],
 rec_rel_a:['مرّ ','It has been '],rec_rel_b:[' يوماً دون تواصل. مكالمة دقيقة تُبقي العلاقة حية.',' days without contact. One minute keeps it alive.'],
 rec_act_contact:['سجّل تواصلاً','Log contact'],
 rec_hab_t:['حرّك جسدك','Move your body'],
 rec_hab_a:['لم تسجل نشاطاً صحياً منذ ','No health activity logged for '],
 rec_hab_b:['. حتى مشي 20 دقيقة اليوم يرفع مؤشر صحتك.',' now. Even a 20-minute walk today lifts your score.'],
 rec_hab_long:['لم تسجل نشاطاً صحياً منذ فترة طويلة. حتى مشي 20 دقيقة اليوم يرفع مؤشر صحتك.','No health activity for a long while. Even a 20-minute walk today lifts your score.'],
 rec_act_log:['سجّلها','Log it'],
 rec_save_t:['ابدأ بادخار صغير','Start a tiny saving'],
 rec_save_p:['لا يوجد تسجيل ادخار هذا الشهر. مبلغ صغير ثابت يبني أمانك المالي أكثر من مبلغ كبير متقطع.','No saving logged this month. A small steady amount builds more security than a big rare one.'],
 rec_read_t:['عشرة دقائق تكفي','Ten minutes suffice'],
 rec_read_a:['التطوير غائب منذ ','Growth has been absent for '],
 rec_read_b:['. عشر صفحات قبل النوم تحافظ على وتيرتك.',' now. Ten pages before sleep keeps your pace.'],
 rec_read_long:['التطوير غائب منذ بداية الرحلة. عشر صفحات قبل النوم تحافظ على وتيرتك.','Growth absent since the start. Ten pages before sleep keeps your pace.'],
 rec_mood_t:['أيامك الثقيلة ملحوظة','Your heavy days are seen'],
 rec_mood_p:['مزاجك متدنٍّ آخر أيام. اكتب ثلاثة أشياء ممتن لها الآن — الامتنان يعيد ضبط الزاوية.','Your mood has been low lately. Write three things you are grateful for — gratitude resets the angle.'],
 rec_good_t:['إيقاعك الصحي ممتاز','Your health rhythm is excellent'],
 rec_good_b:['/100 وهذا الأسبوع أفضل من سابقه — حافظ على الإيقاع.','/100 and this week beats the last — keep the rhythm.'],
 rec_rem_t:['تذكير منك لنفسك','A reminder from you to you'],
 rec_rem_done:['أُنجز التذكير — أحسنت','Reminder done — well played'],
 wa_rep_r:['إعادة الإرسال','Resend'],
 seed_ready:['مرحباً ','Welcome '],seed_ready2:[' — بيئة حية جاهزة: تقويم وصور وتوأم وإعدادات. تنقّل بحرية',' — a living playground: calendar, photos, twin and settings. Explore freely'],
 prep:['أجهّز لك بيئة حية…','Preparing a living playground…']
};
function t(k){const v=T[k];return v?(LANG==='ar'?v[0]:v[1]):k}

window.__rfStage='قاعدة البيانات';
/* =============== طبقة التخزين =============== */
const STORES=['events','rels','decisions','chat','meta'];
const DB={driver:'mem',ok:false,_m:{},_idb:null,
 async open(){
  try{
   const db=await new Promise((res,rej)=>{
    if(typeof indexedDB==='undefined'){rej(new Error('no idb'));return}
    const r=indexedDB.open('rafiq-db',1);
    r.onupgradeneeded=e=>{const d=e.target.result;STORES.forEach(s=>{if(!d.objectStoreNames.contains(s))d.createObjectStore(s,{keyPath:s==='meta'?'key':'id'})})};
    r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);r.onblocked=()=>rej(new Error('blocked'))});
   DB._idb=db;DB.driver='idb';DB.ok=true;
   for(let i=0;i<STORES.length;i++){const s=STORES[i];
    DB._m[s]=await new Promise((res,rej)=>{const q=db.transaction(s).objectStore(s).getAll();q.onsuccess=()=>res(q.result||[]);q.onerror=()=>rej(q.error)})}
   return;
  }catch(e){}
  try{
   localStorage.setItem('rafiq__probe','1');localStorage.removeItem('rafiq__probe');
   DB.driver='ls';DB.ok=true;
   STORES.forEach(s=>{try{DB._m[s]=JSON.parse(localStorage.getItem('rafiq:'+s)||'[]')}catch(e2){DB._m[s]=[]}if(!Array.isArray(DB._m[s]))DB._m[s]=[]});
   return;
  }catch(e){}
  DB.driver='mem';DB.ok=false;STORES.forEach(s=>DB._m[s]=[]);
 },
 _keyOf(s,o){return s==='meta'?o.key:o.id},
 all(s){return Promise.resolve((DB._m[s]||[]).slice())},
 async put(s,o){
  const arr=DB._m[s]||(DB._m[s]=[]);const k=DB._keyOf(s,o);
  let f=false;for(let i=0;i<arr.length;i++){if(DB._keyOf(s,arr[i])===k){arr[i]=o;f=true;break}}
  if(!f)arr.push(o);
  if(DB.driver==='idb'&&DB._idb){try{await new Promise((res,rej)=>{const q=DB._idb.transaction(s,'readwrite').objectStore(s).put(o);q.onsuccess=()=>res();q.onerror=()=>rej(q.error)})}catch(e){}}
  else if(DB.driver==='ls')DB._lsSave(s);
  return o;
 },
 async del(s,key){
  const arr=DB._m[s]||(DB._m[s]=[]);
  for(let i=0;i<arr.length;i++){if(DB._keyOf(s,arr[i])===key){arr.splice(i,1);break}}
  if(DB.driver==='idb'&&DB._idb){try{await new Promise((res,rej)=>{const q=DB._idb.transaction(s,'readwrite').objectStore(s).delete(key);q.onsuccess=()=>res();q.onerror=()=>rej(q.error)})}catch(e){}}
  else if(DB.driver==='ls')DB._lsSave(s);
 },
 async clear(s){
  DB._m[s]=[];
  if(DB.driver==='idb'&&DB._idb){try{await new Promise((res,rej)=>{const q=DB._idb.transaction(s,'readwrite').objectStore(s).clear();q.onsuccess=()=>res();q.onerror=()=>rej(q.error)})}catch(e){}}
  else if(DB.driver==='ls')DB._lsSave(s);
 },
 _lsSave(s){try{localStorage.setItem('rafiq:'+s,JSON.stringify(DB._m[s]||[]))}catch(e){}}
};

/* =============== التصنيفات =============== */
const CATS=['health','relations','money','work','mind','growth'];
const CAT_META={
 health:{color:'#84C88E',icon:'heart',soft:'rgba(132,200,142,.14)',ar:'الصحة',en:'Health'},
 relations:{color:'#E8907E',icon:'users',soft:'rgba(232,144,126,.14)',ar:'العلاقات',en:'Relationships'},
 money:{color:'#E2C063',icon:'coins',soft:'rgba(226,192,99,.16)',ar:'المال',en:'Money'},
 work:{color:'#8FBFCB',icon:'briefcase',soft:'rgba(143,191,203,.15)',ar:'العمل',en:'Work'},
 mind:{color:'#B7A6DC',icon:'brain',soft:'rgba(183,166,220,.16)',ar:'النفسية',en:'Mind'},
 growth:{color:'#DE9A66',icon:'sprout',soft:'rgba(222,154,102,.16)',ar:'التطور',en:'Growth'}};
const cn=c=>CAT_META[c][LANG]||CAT_META[c].ar;
const WDS={ar:['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']};
const WD=()=>WDS[LANG];
const KW={
 health:['رياضة','سباحة','جري','مشي','مشيت','جيم','تمرين','تمارين','يوغا','دراجة','كرة','نمت','نوم','فحص','طبيب','دواء','مريض','مرض','صداع','حمى','وزن','حمية','خطوات','كارديو','gym','run','ran','walk','walked','swim','workout','exercise','yoga','slept','sleep','doctor','medicine','sick','headache','fever','weight','diet','steps','cardio'],
 relations:['زرت','زيارة','عائلة','عائلية','أمي','امي','أبي','ابي','والدي','والدة','زوجتي','زوجي','ابني','بنتي','أطفالي','اطفالي','صديق','صديقتي','مكالمة','اتصلت','مناسبة','عرس','زواج','خلاف','تشاجر','خصام','قعدة','جلسنا','ضيوف','تهنئة','عزاء','أخي','اخوي','أختي','حفلة','visited','family','mom','mother','dad','father','wife','husband','son','daughter','kids','friend','called','call','wedding','fight','argument','party','guests','brother','sister'],
 money:['فاتورة','دفعت','سددت','اشتريت','شراء','راتب','دخل','ادخرت','ادخار','استثمرت','استثمار','فلوس','مال','قرض','دين','بعت','بيع','خصم','أجرة','مكافأة','توفير','قسط','أقساط','غرامة','ربحت','خسرت','bill','paid','salary','income','saved','saving','invest','debt','loan','sold','buy','bought','bonus','fine','installment','rent'],
 work:['عمل','مشروع','اجتماع','مهمة','إنجاز','أنجزت','انجزت','وظيفة','مقابلة','ترقية','مدير','زميل','عميل','عرض عمل','تقرير','ديدلاين','ضغط عمل','عملت','دوام','شركة','مكتب','مهلة','عرض تقديمي','مفاوضة','work','project','meeting','task','deadline','boss','colleague','client','promotion','interview','office','report','presentation','shift'],
 mind:['تأمل','تامل','هدوء','استرخاء','قلق','توتر','إرهاق','ارهاق','محبط','احبطت','سعيد','سعادة','فرح','مزاج','زعلان','ضغط نفسي','راحة','أرق','ارق','تفكير','امتنان','ممتن','نوم متأخر','meditate','meditation','calm','relax','anxious','stress','tired','happy','joy','sad','mood','grateful','gratitude','insomnia'],
 growth:['قرأت','قراءة','كتاب','تعلمت','تعلم','دورة','كورس','درس','درست','بحثت','مهارة','لغة','محاضرة','بودكاست','ورشة','تدريب','شهادة','برمجة','كود','تجربة جديدة','read','book','learned','learn','course','lesson','studied','skill','language','lecture','podcast','workshop','training','certificate','coding']};
const NEG=['خلاف','تشاجر','خصام','مريض','مرض','صداع','حمى','توتر','قلق','إرهاق','ارهاق','محبط','احبطت','زعلان','أرق','ارق','حزين','تعب','تعبان','ضغط','فشل','خسرت','غرامة','دين','قرض','مشكلة','تأخر','عطل','فقدت','وحدة','fight','argument','sick','headache','fever','stress','anxious','tired','sad','insomnia','failed','lost','fine','debt','loan','problem','late','broke','lonely','angry'];
const POS=['نجحت','إنجاز','انجزت','أنجزت','ترقية','مكافأة','فرح','سعيد','سعادة','زواج','عرس','أحببت','رائع','جميل','هدوء','سافرت','امتنان','ممتن','ربحت','مثمر','ممتاز','فخر','تهنئة','وليمة','اعتزاز','success','achieved','promotion','bonus','happy','joy','wedding','loved','wonderful','beautiful','calm','traveled','grateful','won','excellent','proud'];
const SUGS_L={
 ar:{health:['مارست رياضة','نمت جيداً','مشيت 30 دقيقة','فحص طبي دوري'],relations:['زيارة عائلية','مكالمة مع صديق','مناسبة سعيدة','خلاف بسيط'],money:['دفعت فاتورة','ادّخرت مبلغاً','شراء جديد','استثمار'],work:['أنجزت مهمة مهمة','اجتماع مثمر','ضغط عمل','إنجاز جديد'],mind:['تأمل وهدوء','يوم هادئ','توتر وقلق','نوم جيد'],growth:['قرأت كتاباً','تعلمت مهارة','دورة تدريبية','بحثت موضوعاً']},
 en:{health:['Worked out','Slept well','Walked 30 minutes','Regular checkup'],relations:['Family visit','Call with a friend','Happy occasion','Small argument'],money:['Paid a bill','Saved an amount','New purchase','Investment'],work:['Finished a key task','Useful meeting','Work pressure','New win'],mind:['Meditation and calm','A quiet day','Stress and worry','Good sleep'],growth:['Read a book','Learned a skill','Took a course','Researched a topic']}};
const SUGS=()=>SUGS_L[LANG];
const MOODS={ar:{5:'ممتاز',4:'جيد',3:'عادي',2:'متعب',1:'متضايق'},en:{5:'Great',4:'Good',3:'Okay',2:'Tired',1:'Down'}};
const mw=m=>MOODS[LANG][m];
const DEC_KINDS={
 buy:{ar:'شراء',en:'Purchase',icon:'coins',d_ar:'سيارة، جهاز، أثاث…',d_en:'Car, device, furniture…'},
 invest:{ar:'استثمار',en:'Investment',icon:'file',d_ar:'صندوق، أسهم، ذهب…',d_en:'Fund, stocks, gold…'},
 job:{ar:'وظيفة/عرض',en:'Job offer',icon:'briefcase',d_ar:'عرض جديد أو انتقال',d_en:'New offer or a move'},
 project:{ar:'مشروع',en:'Project',icon:'hex',d_ar:'تأسيس أو شراكة',d_en:'Founding or partnership'}};
const REL_T={
 family:{ar:'عائلة',en:'Family',icon:'home',color:'var(--c-relations)'},
 spouse:{ar:'شريك الحياة',en:'Partner',icon:'heart',color:'var(--bad)'},
 kids:{ar:'أبناء',en:'Kids',icon:'sprout',color:'var(--c-money)'},
 friend:{ar:'صديق',en:'Friend',icon:'users',color:'var(--c-health)'},
 work:{ar:'عمل',en:'Work',icon:'briefcase',color:'var(--c-work)'}};
function classify(tx){let best=null,bn=0;const s=' '+tx+' ';CATS.forEach(c=>{let n=0;KW[c].forEach(w=>{if(s.indexOf(w)>=0)n++});if(n>bn){bn=n;best=c}});return best}
function sentiment(tx){let p=0,n=0;POS.forEach(w=>{if(tx.indexOf(w)>=0)p++});NEG.forEach(w=>{if(tx.indexOf(w)>=0)n++});return p>n?1:(n>p?-1:0)}

/* =============== الأيقونات =============== */
const ICONS={
 heart:'<path d="M12 20s-7-4.4-9.3-8.6C1 8 2.6 4.8 5.8 4.3c1.9-.3 3.8.6 4.9 2.2L12 8l1.3-1.5c1.1-1.6 3-2.5 4.9-2.2 3.2.5 4.8 3.7 3.1 7.1C19 15.6 12 20 12 20z"/>',
 users:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3 2.9-4.6 5.5-4.6s4.9 1.6 5.5 4.6"/><path d="M15.5 5.4a3 3 0 0 1 0 5.9M17 14.8c2 .5 3.4 1.9 3.9 4.2"/>',
 coins:'<circle cx="9.5" cy="9.5" r="5.7"/><path d="M13.5 4.6a5.7 5.7 0 1 1-8 8"/><path d="M7 9.5h5M9.5 7v5"/>',
 briefcase:'<rect x="3.5" y="7.5" width="17" height="12.5" rx="2.5"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 13h17"/>',
 brain:'<path d="M12 4.5a3.1 3.1 0 0 0-3.1 3.1 3.2 3.2 0 0 0-2.9 3.2c0 .9.3 1.7.9 2.2-.6.6-.9 1.4-.9 2.3a3.3 3.3 0 0 0 3.3 3.3c.4 1 1.4 1.7 2.7 1.7s2.3-.7 2.7-1.7a3.3 3.3 0 0 0 3.3-3.3c0-.9-.3-1.7-.9-2.3.6-.5.9-1.3.9-2.2a3.2 3.2 0 0 0-2.9-3.2A3.1 3.1 0 0 0 12 4.5z"/><path d="M12 4.5V20.3"/>',
 sprout:'<path d="M12 21.5v-8"/><path d="M12 13.5C12 9.5 9.4 7.3 5 7.3c0 4.2 2.6 6.2 7 6.2z"/><path d="M12 11.3c0-3.6 2.3-5.6 6.8-5.6 0 3.8-2.3 5.6-6.8 5.6z"/>',
 home:'<path d="M3.5 10.6 12 3.5l8.5 7.1"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>',
 hex:'<path d="M12 2.5 20 7v10l-8 4.5L4 17V7z"/><circle cx="12" cy="12" r="2.2"/>',
 grid:'<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
 chat:'<path d="M21 11.6a8.4 8.4 0 0 1-8.5 8.3c-1.5 0-2.9-.4-4.1-1L3 20l1.3-4.3A8.3 8.3 0 1 1 21 11.6z"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 x:'<path d="M6 6l12 12M18 6 6 18"/>',
 send:'<path d="M19 12H6"/><path d="m11 7-5 5 5 5"/>',
 check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
 phone:'<path d="M5.5 4h3.6L10.6 8l-2 1.6a12.5 12.5 0 0 0 5.8 5.8L16 13.4l4 1.5v3.6a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4z"/>',
 trash:'<path d="M4.5 6.5h15M9.5 6.3V4.5h5v1.8M7 6.5l.8 13.2h8.4L17 6.5"/><path d="M10 10.5v6M14 10.5v6"/>',
 spark:'<path d="M12 3l1.9 5.4L19.5 10l-5.6 1.6L12 17l-1.9-5.4L4.5 10l5.6-1.6z"/><path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
 clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2.5"/>',
 cal:'<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
 download:'<path d="M12 3.5v11.5"/><path d="m7.5 10.5 4.5 4.5 4.5-4.5"/><path d="M4.5 20h15"/>',
 upload:'<path d="M12 15V3.5"/><path d="m7.5 8 4.5-4.5L16.5 8"/><path d="M4.5 20h15"/>',
 file:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>',
 shield:'<path d="M12 3 19 6v6c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6z"/><path d="m9 11.5 2.2 2.2L15.5 9.5"/>',
 pulse:'<path d="M3 12h4l2.2-5.5L13 18l2-6h6"/>',
 twin:'<circle cx="9.5" cy="9.5" r="5"/><path d="M3.5 20c.7-3.3 3.2-5 6-5s5.3 1.7 6 5"/><circle cx="17" cy="7" r="2.6"/><path d="M14.5 13.6c.8-.4 1.6-.6 2.5-.6 2.3 0 4.3 1.4 4.9 4.4"/>',
 report:'<path d="M7 3.5h10v17H7z"/><path d="M10 8h4M10 11.5h4M10 15h2.5"/>',
 dec:'<path d="M9.5 14.5a4.5 4.5 0 1 1 5-7.4"/><path d="M14.5 9.5a4.5 4.5 0 1 1-5 7.4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2"/>',
 moon:'<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/>',
 sun:'<circle cx="12" cy="12" r="4.2"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>',
 chev:'<path d="m9 6 6 6-6 6"/>',
 edit:'<path d="M4 20h4l11-11-4-4L4 16z"/><path d="m13 6.5 4 4"/>',
 eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
 image:'<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="m4.5 17 4.5-4.5 3 3 3.5-3.5 4 4"/>',
 gear:'<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="7" cy="17" r="2"/>',
 wa:'<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M9 8.5c.3 2.8 3.7 6.2 6.5 6.5l1-1.8-2.2-1-1 .8c-.9-.5-1.8-1.4-2.3-2.3l.8-1-1-2.2z"/>',
 flame:'<path d="M12 3.5c.8 2.6-2.6 4-2.6 7.3a4.6 4.6 0 0 0 9.2.2c0-2.8-2.4-3.4-2.4-5.8-1.2.7-1.7 1.6-1.6 2.8C13.6 7 12.6 5.4 12 3.5z"/>',
 mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="m4.5 7.5 7.5 5.5 7.5-5.5"/>',
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.6 1.6"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.6-1.6"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"/>',
 db:'<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/><path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/>'};
function ic(n,s){s=s||18;return '<svg class="ic" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[n]||'')+'</svg>'}
function logoSvg(s){s=s||46;return '<svg class="logo" width="'+s+'" height="'+s+'" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="21.5" stroke="#E5A83E" stroke-width="1.6" opacity=".55"/><circle cx="24" cy="24" r="17.5" stroke="#E5A83E" stroke-width="1.2" opacity=".25"/><path class="lg-ekg" d="M11 26h7l3-9 6 16 3-7h7" stroke="#E5A83E" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'}
function faceSvg(m,s){s=s||30;const mouth={1:'M8.4 16.6c2.4-2.2 4.8-2.2 7.2 0',2:'M8.6 16c2.1-1.3 4.7-1.3 6.8 0',3:'M8.6 15.3h6.8',4:'M8.6 14c2.1 1.3 4.7 1.3 6.8 0',5:'M8.4 13.4c2.4 2.2 4.8 2.2 7.2 0'}[m];const brow=m<=2?'<path d="M7.6 8.2l3 1.1M16.4 8.2l-3 1.1"/>':'';
 return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="9.1" cy="10" r=".7" fill="currentColor" stroke="none"/><circle cx="14.9" cy="10" r=".7" fill="currentColor" stroke="none"/><path d="'+mouth+'"/>'+brow+'</svg>'}

/* =============== المظهر واللغة =============== */
const ACCENTS={
 amber:{ar:'كهرماني',en:'Amber',dark:'#E5A83E',darkInk:'#241B08',light:'#B07A10',lightInk:'#241B08',softD:'rgba(229,168,62,.13)',softL:'rgba(176,122,16,.12)'},
 emerald:{ar:'زمردي',en:'Emerald',dark:'#5CB98C',darkInk:'#0B2417',light:'#1E7A4F',lightInk:'#F1FBF4',softD:'rgba(92,185,140,.13)',softL:'rgba(30,122,79,.12)'},
 coral:{ar:'مرجاني',en:'Coral',dark:'#E08A76',darkInk:'#2A100A',light:'#B5503C',lightInk:'#FFF4F0',softD:'rgba(224,138,118,.13)',softL:'rgba(181,80,60,.10)'},
 teal:{ar:'فيروزي',en:'Teal',dark:'#5FB8B2',darkInk:'#0A2422',light:'#187E77',lightInk:'#EEFBF9',softD:'rgba(95,184,178,.13)',softL:'rgba(24,126,119,.10)'}};
function applyTheme(){
 const st=S.settings,dark=st.theme!=='light',A=ACCENTS[st.accent]||ACCENTS.amber;
 const r=document.documentElement.style;
 const V=dark?{'--bg':'#14110C','--panel':'#191510','--card':'#1E1912','--card2':'#241E13','--line':'#2C2517','--line2':'#3B3220','--ink':'#F1EADC','--ink2':'#B0A58B','--ink3':'#716750','--good':'#84C88E','--bad':'#E4796B','--me-bg':'#413413','--me-line':'#5C4A1B','--tab-bg':'rgba(20,16,11,.94)','--frame':'#292214','--acc':A.dark,'--acc-ink':A.darkInk,'--acc-soft':A.softD}
 :{'--bg':'#F6F1E6','--panel':'#FFFCF4','--card':'#FFFFFF','--card2':'#F4EDDD','--line':'#E9E0CA','--line2':'#D9CCA9','--ink':'#2B2417','--ink2':'#6D6250','--ink3':'#9D8F73','--good':'#2E7D46','--bad':'#BF4A38','--me-bg':'#F3E7C8','--me-line':'#DCC68F','--tab-bg':'rgba(255,251,242,.95)','--frame':'#E0D5B8','--acc':A.light,'--acc-ink':A.lightInk,'--acc-soft':A.softL};
 for(const k in V)r.setProperty(k,V[k]);
 document.documentElement.dataset.theme=dark?'dark':'light';
}
function applyLang(){
 document.documentElement.lang=LANG;
 document.documentElement.dir=LANG==='ar'?'rtl':'ltr';
 document.title=LANG==='ar'?'رفيق — شريك حياة رقمي':'Rafiq — Life Companion';
}

window.__rfStage='الحالة';
/* =============== الحالة =============== */
const S={profile:{name:'',job:'',email:'',bday:'',goals:[]},
 settings:{lang:'ar',theme:'dark',accent:'amber',toggles:{rel:true,habits:true},a2hsDone:false},
 events:[],rels:[],decisions:[],chat:[],reminders:[],
 ind:{},catDelta:{},life:50,delta:0,spark:[],recs:[],staleRels:[]};
const dismissed=new Set();
let currentView='home',reportWeek=0,calY=new Date().getFullYear(),calM=new Date().getMonth();
let evAttsTemp=[],evCatPick=null,evMoodPick=null,evAuto=true;
async function saveMeta(){await DB.put('meta',{key:'main',profile:S.profile,reminders:S.reminders,seeded:S.seeded,settings:S.settings})}
async function loadAll(){
 S.events=(await DB.all('events')).sort((a,b)=>a.ts-b.ts);
 S.rels=(await DB.all('rels')).sort((a,b)=>a.name.localeCompare(b.name,'ar'));
 S.decisions=(await DB.all('decisions')).sort((a,b)=>b.ts-a.ts);
 S.chat=(await DB.all('chat')).sort((a,b)=>a.ts-b.ts);
}

/* =============== المحرك =============== */
function catScoreAt(c,until){let s=50;S.events.forEach(e=>{if(e.category!==c||e.ts>=until||e.ts<until-30*DAY)return;
 if(e.polarity>0)s+=6;else if(e.polarity<0)s-=7;else s+=1;if(e.mood)s+=(e.mood-3)*5});return clamp(Math.round(s),5,100)}
function lifeAt(until){const v=CATS.map(c=>catScoreAt(c,until));return Math.round(v.reduce((a,b)=>a+b,0)/v.length)}
function computeAll(){
 const now=Date.now();
 CATS.forEach(c=>{S.ind[c]=catScoreAt(c,now+1e3);S.catDelta[c]=S.ind[c]-catScoreAt(c,now-7*DAY)});
 S.life=lifeAt(now+1e3);S.delta=S.life-lifeAt(now-7*DAY);
 S.spark=[];for(let d=13;d>=0;d--)S.spark.push(lifeAt(dayStart(now-d*DAY)+DAY));
 S.staleRels=S.rels.filter(r=>now-r.lastContact>10*DAY).sort((a,b)=>a.lastContact-b.lastContact);
 S.recs=buildRecs();
}
function scoreColor(v){return v>=70?'var(--good)':v>=45?'var(--acc)':'var(--bad)'}
function lifeWord(v){return v>=75?t('lw1'):v>=55?t('lw2'):v>=40?t('lw3'):t('lw4')}

function buildRecs(){
 const recs=[],now=Date.now(),tg=S.settings.toggles;
 S.staleRels.slice(0,2).forEach(r=>{if(tg.rel)recs.push({id:'rel:'+r.id,cat:'relations',title:t('rec_rel_t')+r.name,
  text:t('rec_rel_a')+daysSince(r.lastContact)+' '+pd(daysSince(r.lastContact))+t('rec_rel_b'),action:t('rec_act_contact')})});
 if(tg.habits){
  const he=S.events.filter(e=>e.category==='health'&&e.type!=='mood');
  const dH=he.length?daysSince(Math.max.apply(null,he.map(e=>e.ts))):99;
  if(dH>=3)recs.push({id:'habit:health',cat:'health',title:t('rec_hab_t'),text:dH===99?t('rec_hab_long'):dH+t('rec_hab_a')+dH+t('rec_hab_b'),action:t('rec_act_log')});
  const hasSave=S.events.some(e=>e.category==='money'&&e.polarity>0&&e.ts>now-30*DAY);
  if(!hasSave)recs.push({id:'habit:save',cat:'money',title:t('rec_save_t'),text:t('rec_save_p'),action:t('rec_act_log')});
  const ge=S.events.filter(e=>e.category==='growth');
  const dG=ge.length?daysSince(Math.max.apply(null,ge.map(e=>e.ts))):99;
  if(dG>=5)recs.push({id:'habit:read',cat:'growth',title:t('rec_read_t'),text:dG===99?t('rec_read_long'):dG+t('rec_read_a')+dG+t('rec_read_b'),action:t('rec_act_log')});
 }
 const moods=S.events.filter(e=>e.type==='mood'&&e.ts>now-5*DAY);
 if(moods.length>=2&&moods.reduce((a,e)=>a+e.mood,0)/moods.length<2.4)
  recs.push({id:'mood:low',cat:'mind',title:t('rec_mood_t'),text:t('rec_mood_p'),action:t('rec_act_log')});
 if(S.ind.health>=70&&S.events.some(e=>e.category==='health'&&e.polarity>0&&e.ts>now-3*DAY))
  recs.push({id:'good:health',cat:'health',title:t('rec_good_t'),text:(S.profile.name||'')+(LANG==='ar'?'، صحتك ':' — your health is ')+S.ind.health+t('rec_good_b'),action:null});
 S.reminders.forEach(r=>recs.push({id:'rem:'+r.id,cat:'growth',title:t('rec_rem_t'),text:r.text,action:t('done')}));
 return recs.filter(r=>!dismissed.has(r.id)).slice(0,4);
}

/* =============== محلل القرارات =============== */
function analyzeDecision(title,kind){
 const m=S.ind.money,w=S.ind.work,AR=LANG==='ar',pros=[],risks=[],qs=[];
 if(kind==='buy'){pros.push(AR?'قد يوفر وقتاً أو راحة يومية إن كان ضرورة حقيقية لا رفاهية':'May save daily time or comfort if it is a real need, not a luxury');pros.push(AR?'تفكيرك الآن بمنهجية — وهذا وحده يرفع جودة القرار':'You are thinking methodically right now — that alone raises decision quality');}
 else if(kind==='invest'){pros.push(AR?'بناء دخل ثانٍ أو تنمية رأس المال يحمي مستقبلك المالي':'A second income or growing capital protects your future');pros.push(AR?'الاستثمار المبكر — ولو صغيراً — يتفوق على الانتظار المثالي':'Investing early — even small — beats waiting for perfect');}
 else if(kind==='job'){pros.push(AR?'خطوة قد ترفع مؤشري عملك ودخلك معاً':'A step that may lift both your work score and income');pros.push(AR?'عرض جديد لا يلغيك من مكانك — المعرفة لا تُكلف شيئاً':'A new offer erases nothing — knowledge is free');}
 else{pros.push(AR?'مشروع من نموك ينعكس على كل جوانب حياتك':'A project born from growth reflects on every side of life');pros.push(AR?'ابدأ صغيراً وقابل للتراجع، ثم وسّع مع الدليل':'Start small and reversible, expand with evidence');}
 if(m<55)risks.push((AR?'مؤشر مالك ':'Money ')+m+'/100 — '+(AR?'دون المستوى الآمن لالتزام مالي كبير':'below the safe zone for a big commitment'));
 else risks.push((AR?'مؤشر مالك ':'Money ')+m+'/100 — '+(AR?'مقبول، لكن اربط المبلغ بهدف مكتوب':'acceptable, but tie the amount to a written goal'));
 if(w<50)risks.push(AR?'مؤشر عملك متوسط — تأكد أولاً من استقرار الدخل الشهري':'Work score is mid — secure stable monthly income first');
 risks.push(AR?'الحماس لحظة القرار يضخّم الفائدة المتوقعة بنسبة تفوق الواقع':'Excitement at decision time inflates the expected benefit beyond reality');
 qs.push(AR?'لو تأخّر القرار 30 يوماً، هل ستتغير نتائجه فعلاً؟':'If this waited 30 days, would the outcome really change?');
 qs.push(AR?'ما البديل الذي يحقق 80% من الفائدة بـ 20% من التكلفة؟':'What alternative delivers 80% of the benefit at 20% of the cost?');
 qs.push(AR?'هل صندوق الطوارئ يغطي 3-6 أشهر من مصروفك؟':'Does your emergency fund cover 3-6 months of expenses?');
 let verdict,short,cls;
 if(m>=65&&w>=55){short=t('badge_ok');cls='b-ok';verdict=AR?'رأي رفيق: القرار في متناولك. لكن اشترط مهلة 72 ساعة قبل التوقيع — إن بقيت الرغبة حية بعدها بلا تصاعد حماس، فأنت على صواب.':'Rafiq verdict: within reach. Set a 72-hour rule before signing — if the wish survives it without rising excitement, you are right.';}
 else if(m<50){short=t('badge_no');cls='b-no';verdict=AR?'رأي رفيق: أنصح بتأجيل الالتزام المالي حتى يتعافى مؤشر مالك فوق 55. اكتب القرار هنا وراجعه بعد أسبوعين.':'Rafiq verdict: postpone the financial commitment until money recovers above 55. Write it here and revisit in two weeks.';}
 else{short=t('badge_mid');cls='b-mid';verdict=AR?'رأي رفيق: ممكن بشروط — حدد سقفاً للإنفاق لا تتخطاه مهما تغيرت الأحوال، واجرِ تجربة صغيرة قبل الالتزام الكامل.':'Rafiq verdict: possible with conditions — set a spending ceiling you never cross, and run a small trial before full commitment.';}
 return {pros:pros.slice(0,3),risks:risks.slice(0,3),qs:qs,verdict:verdict,short:short,cls:cls,
  summary:(AR?'حللتُ القرار على ضوء مؤشراتك: المال ':'Analyzed against your scores: Money ')+m+'/100, '+(AR?'العمل ':'Work ')+w+'/100.'};
}

/* =============== التقرير الأسبوعي =============== */
function weeklyReport(off){
 off=off||0;
 const end=dayStart(Date.now())+DAY-off*7*DAY,start=end-7*DAY;
 const ev=S.events.filter(e=>e.ts>=start&&e.ts<end&&e.type!=='mood');
 const moods=S.events.filter(e=>e.type==='mood'&&e.ts>=start&&e.ts<end);
 const days=new Set(ev.map(e=>dayStart(e.ts))).size;
 const avgMood=moods.length?moods.reduce((a,e)=>a+e.mood,0)/moods.length:null;
 const posBy={};CATS.forEach(c=>posBy[c]=ev.filter(e=>e.category===c&&e.polarity>0).length);
 const strongest=CATS.reduce((a,c)=>posBy[c]>posBy[a]?c:a,'health');
 const active=CATS.filter(c=>ev.some(e=>e.category===c));
 const weakest=CATS.filter(c=>active.indexOf(c)<0)[0]||CATS.reduce((a,c)=>posBy[c]<posBy[a]?c:a,'health');
 const aw=ev.filter(e=>(e.category==='work'||e.category==='growth')&&e.polarity>0);
 const achieve=aw.length?aw[aw.length-1]:null;
 const wr=ev.filter(e=>e.category==='relations'&&e.polarity>0);
 const warm=wr.length?wr[wr.length-1]:null;
 return {start:start,end:end,ev:ev,days:days,avgMood:avgMood,strongest:strongest,strongestN:posBy[strongest],weakest:weakest,achieve:achieve,warm:warm};
}

/* =============== واتساب =============== */
function shareWa(text){
 const a=document.createElement('a');
 a.href='https://wa.me/?text='+encodeURIComponent(text);
 a.target='_blank';a.rel='noopener';
 document.body.appendChild(a);a.click();
 setTimeout(()=>{if(a.parentNode)a.parentNode.removeChild(a)},300);
}
function weeklyWaText(){
 const rp=weeklyReport(0),d=S.delta,AR=LANG==='ar';
 return (AR?'تقرير أسبوعي — رفيق':'Weekly report — Rafiq')+'\n'+fmtShort(rp.start)+' — '+fmtShort(rp.end-1)+'\n\n'+(AR?'مؤشر الحياة: ':'Life score: ')+S.life+'/100'+(d?' ('+(d>0?'+':'')+d+')':'')+'\n• '+(AR?'أحداث موثقة: ':'Events logged: ')+rp.ev.length+(AR?' عبر ':' across ')+rp.days+(AR?' أيام':' days')+'\n• '+(AR?'أقوى جانب: ':'Strongest: ')+cn(rp.strongest)+'\n• '+(AR?'يحتاج عناية: ':'Needs care: ')+cn(rp.weakest)+'\n• '+(AR?'مزاج الأسبوع: ':'Week mood: ')+(rp.avgMood?mw(Math.round(rp.avgMood)):t('rep_none'))+'\n'+(rp.achieve?'\n'+(AR?'إنجاز الأسبوع: ':'Win of the week: ')+'«'+rp.achieve.text+'»\n':'')+(S.recs[0]?'\n'+(AR?'توصية الأسبوع: ':'Tip of the week: ')+S.recs[0].title+' — '+S.recs[0].text+'\n':'')+'\n'+(AR?'أُرسل من رفيق — شريك حياة رقمي':'Sent from Rafiq — your life companion');
}
function twinWaText(){
 const d=twinData(),AR=LANG==='ar';
 return (AR?'بصمة توأمي الرقمي — رفيق':'My digital twin fingerprint — Rafiq')+'\n\n• '+(AR?'اكتمال التوأم: ':'Twin completeness: ')+d.compl+'%\n• '+(AR?'مصدر طاقتي: ':'Energy source: ')+cn(d.energy)+'\n• '+(AR?'سلسلة التوثيق: ':'Logging streak: ')+d.streak+' '+pd(d.streak)+'\n'+(AR?'• جملة هويتي: ':'• Identity line: ')+d.idPlain+'\n\n'+(AR?'أُرسل من رفيق — شريك حياة رقمي':'Sent from Rafiq — your life companion');
}

/* =============== التوأم =============== */
function twinData(){
 const n=S.events.length,attN=S.events.filter(e=>e.att&&e.att.length).length;
 const compl=clamp(Math.round(n*1.6+S.rels.length*4+S.decisions.length*4+attN*3+S.chat.length*.5),4,100);
 const posBy={},negBy={};CATS.forEach(c=>{posBy[c]=0;negBy[c]=0});
 S.events.forEach(e=>{if(!(e.category in posBy))return;if(e.polarity>0)posBy[e.category]++;if(e.polarity<0)negBy[e.category]++});
 const energy=CATS.reduce((a,c)=>posBy[c]>posBy[a]?c:a,'health');
 const stress=CATS.reduce((a,c)=>negBy[c]>negBy[a]?c:a,'health');
 const hours=S.events.map(e=>new Date(e.ts).getHours());
 const avgH=hours.length?hours.reduce((a,b)=>a+b,0)/hours.length:9;
 const when=avgH<12?t('hour_m'):avgH<18?t('hour_d'):t('hour_n');
 const sorted=[].slice.call(CATS).sort((a,b)=>S.ind[b]-S.ind[a]);
 const TR={health:['تعتني بجسدك','care for your body'],relations:['تُقدّم أهلَك وأصدقاءك','cherish family and friends'],money:['واعٍ مالياً','stay money-aware'],work:['طموح في مسيرتك','are ambitious at work'],mind:['تحرص على صفاء ذهنيك','guard your inner calm'],growth:['شغوف بالنمو','thrive on growth']};
 const idPlain=LANG==='ar'
  ?'أنت شخص '+TR[sorted[0]][0]+'، و'+TR[sorted[1]][0]+'. وجانب '+cn(sorted[5])+' ينتظر اهتمامك هذه الفترة.'
  :'You are someone who '+TR[sorted[0]][1]+', and who '+TR[sorted[1]][1]+'. Your '+cn(sorted[5])+' side is asking for attention this period.';
 const total=Math.max(1,S.events.filter(e=>e.type!=='mood').length);
 const dist=CATS.map(c=>({c:c,pct:Math.round(S.events.filter(e=>e.category===c&&e.type!=='mood').length/total*100)}));
 const wdPos=[0,0,0,0,0,0,0];
 S.events.forEach(e=>{if(e.polarity>0)wdPos[new Date(e.ts).getDay()]++});
 const bestWd=wdPos.indexOf(Math.max.apply(null,wdPos));
 let streak=0,d0=dayStart(Date.now());
 if(!S.events.some(e=>dayStart(e.ts)===d0))d0-=DAY;
 while(S.events.some(e=>dayStart(e.ts)===d0)){streak++;d0-=DAY}
 const cnt={};S.events.forEach(e=>{if(e.polarity<=0)return;const s=' '+e.text+' ';
  (KW[e.category]||[]).forEach(w=>{if(s.indexOf(w)>=0)cnt[w]=(cnt[w]||0)+1})});
 const topW=Object.keys(cnt).map(k=>[k,cnt[k]]).sort((a,b)=>b[1]-a[1])[0]||null;
 const evs=[].slice.call(S.events).sort((a,b)=>a.ts-b.ts);let recSum=0,recN=0;
 evs.forEach((e,i)=>{if(e.polarity<0){for(let j=i+1;j<evs.length;j++){if(evs[j].polarity>0){
  const gap=Math.floor((dayStart(evs[j].ts)-dayStart(e.ts))/DAY);
  if(gap>=0&&gap<=4){recSum+=gap;recN++}break}}}});
 const rec=recN?Math.max(1,Math.round(recSum/recN)):null;
 const sp=S.spark,mx=6.5,my=sp.reduce((a,b)=>a+b,0)/sp.length;
 let num=0,den=0;sp.forEach((v2,i)=>{num+=(i-mx)*(v2-my);den+=(i-mx)*(i-mx)});
 const slope=den?num/den:0,proj=clamp(Math.round(my+slope*(20-mx)),0,100),projD=proj-S.life;
 return {compl:compl,energy:energy,energyN:posBy[energy],stress:stress,stressN:negBy[stress],when:when,idPlain:idPlain,dist:dist,avgH:avgH,wdPos:wdPos,bestWd:bestWd,streak:streak,topW:topW,rec:rec,proj:proj,projD:projD};
}

/* =============== رفيق: المحادثة =============== */
function lifeLine(){const d=S.delta,AR=LANG==='ar';
 return (AR?'مؤشر حياتك الآن ':'Your life score is now ')+S.life+'/100 '+(d>0?(AR?'وصاعد بـ'+d+' نقاط هذا الأسبوع':'and up '+d+' points this week'):d<0?(AR?'ونازل بـ'+Math.abs(d)+' نقطة هذا الأسبوع':'and down '+Math.abs(d)+' points this week'):(AR?'ومستقر مقارنة بالأسبوع الماضي':'and steady vs last week'));}
function rafiqReply(tx){
 const s=tx.trim(),AR=LANG==='ar',name=S.profile.name||(AR?'صديقي':'friend');
 const has=r=>r.test(s);
 if(has(/^(مرحبا|مرحبتين|هلا|هاي|أهلا|اهلا|السلام|صباح الخير|مساء الخير|سلام|hi|hello|hey|good (morning|evening|afternoon))/i)){
  const h=new Date().getHours();
  const g=AR?(h<12?'صباح الخير':h<17?'طاب نهارك':'مساء الخير'):(h<12?'Good morning':h<17?'Good afternoon':'Good evening');
  const so=[].slice.call(CATS).sort((a,b)=>S.ind[b]-S.ind[a]);
  return {text:g+(AR?' يا ':' ')+name+'. '+lifeLine()+'.\n'+(AR?'أقوى جوانبك اليوم: ':'Your strongest side today: ')+cn(so[0])+'.\n'+(AR?'وأهم ما أريدك له: ':'And what I want you for first: ')+'«'+(S.recs[0]?S.recs[0].title:(AR?'كل شيء تحت السيطرة':'all under control'))+'».'};
 }
 if(has(/كيف حالي|حالتي|وضعي|قيّم|قيم حالتي|كيف أنا|كيف انا|how am i|my status|analyze me|how.s my life/i)){
  const so=[].slice.call(CATS).sort((a,b)=>S.ind[b]-S.ind[a]);
  const ev7=S.events.filter(e=>e.ts>Date.now()-7*DAY&&e.type!=='mood').length;
  return {text:(AR?'أقرأ بياناتك يا ':'Reading your data, ')+name+':\n• '+lifeLine()+'.\n• '+(AR?'أقوى جانب: ':'Strongest: ')+cn(so[0])+' ('+S.ind[so[0]]+'/100).\n• '+(AR?'الأضعف حالياً: ':'Weakest now: ')+cn(so[5])+' ('+S.ind[so[5]]+'/100).\n• '+(AR?'سجلت ':'You logged ')+ev7+(AR?' حدثاً آخر 7 أيام.':' events in the last 7 days.')+'\n'+(S.recs[0]?((AR?'أول توصية لي: ':'My first tip: ')+S.recs[0].title+' — '+S.recs[0].text):(AR?'استمر كما أنت.':'Keep going as you are.'))};
 }
 if(has(/أفكر|انوي|أنوي|قرار|شراء|اشتري|استثمر|استثمار|وظيفة|عرض عمل|مشروع|think(ing)? (of|about)|i (want|plan) to (buy|invest)|decision|job offer/i)){
  let subj=s.replace(/.*(أفكر في|أفكر بـ|أفكر ب|انوي|أنوي|قرار|بشراء|شراء|اشتري)/,'').replace(/^(i.*(thinking|want|plan)[^a-z]*|thinking of|decision:?)/i,'').replace(/[؟?.!]/g,'').trim()||(AR?'قرار جديد':'A new decision');
  const m=S.ind.money,w=S.ind.work;
  return {text:(AR?'قرأتُ قرارك: ':'I read your decision: ')+'«'+subj+'».\n• '+(AR?'مؤشر مالك ':'Money ')+m+'/100 '+(m>=60?(AR?'— يسمح بقرار كبير بحذر':'— allows a big call with care'):(AR?'— دون المستوى الآمن لالتزام كبير':'— below the safe zone for a big commitment'))+'.\n• '+(AR?'مؤشر عملك ':'Work ')+w+'/100 '+(w>=55?(AR?'— شبكة أمانك مستقرة':'— your safety net is steady'):(AR?'— ثبّت دخلك أولاً':'— stabilize income first'))+'.\n'+(AR?'قاعدتي: مهلة 72 ساعة. إن بقيت الرغبة حية بعدُ دون تصاعد حماس، فالقرار صحي.\nوسؤال واحد يكشف الكثير: هل تريده لأنك تحتاجه، أم لأن يومك يحتاج معنى؟':'My rule: 72 hours. If the wish survives it without rising excitement, the decision is right.\nOne question reveals a lot: do you want it because you need it — or because your day needs meaning?'),
   actions:[{label:AR?'حلّله في مركز القرارات':'Analyze in Decision Center',run:()=>{openDecSheet(subj)}}]};
 }
 if(has(/يسعدني|يفرحني|سعادتي|مصادر سعادتي|أكثر شيء يفرح|make(s)? me happy|my happiness|what lifts/i)){
  const cnt={};S.events.forEach(e=>{if(e.polarity>0&&e.type!=='mood')cnt[e.category]=(cnt[e.category]||0)+1});
  const keys=Object.keys(cnt);
  if(!keys.length)return {text:AR?'لم أرصد بعد أحداثاً سعيدة موثقة. سجل لحظاتك الجميلة — حتى الصغيرة — وسأكشف لك نمط سعادتك خلال أسابيع.':'No happy moments documented yet. Log your good moments — even tiny ones — and in weeks I will reveal your happiness pattern.'};
  const top=keys.reduce((a,c)=>cnt[c]>cnt[a]?c:a);
  const pw=S.events.filter(e=>e.category===top&&e.polarity>0);
  const ex=pw.length?pw[pw.length-1]:null;
  return {text:(AR?'إجابتي من بياناتك أنت، لا من التخمين:\nأكثر ما يرفعك هو ':'From your own data, not guessing:\nWhat lifts you most is ')+cn(top)+' — '+(AR?'رصدته ':'logged ')+cnt[top]+(AR?' مرة إيجابية.\nأحدث لحظة: «':' positive times.\nLatest moment: "')+(ex?esc(ex.text):'')+'».\n'+(AR?'اقتراحي: جدول لهذا الجانب موعداً أسبوعياً ثابتاً — السعادة تُدار، لا تُنتظر.':'Suggestion: give this side a fixed weekly slot — happiness is managed, not awaited.')};
 }
 if(has(/توتر|ضغط|حزين|متضايق|قلق|يتضايق|مزعج|stress|anxious|worried|sad|bothers|pressure/i)){
  const negs=S.events.filter(e=>e.polarity<0);
  if(!negs.length)return {text:AR?'ما تراه توتراً لم يثبت في سجلاتك بعد. سجله كحدث وسأربطه بالمؤشرات لأعرف هل هو ظرف عابر أم نمط متكرر.':'What you feel as stress is not in your records yet. Log it as an event and I will link it to your scores — passing wave or repeating pattern?'};
  const cnt={};negs.forEach(e=>cnt[e.category]=(cnt[e.category]||0)+1);
  const top=Object.keys(cnt).reduce((a,c)=>cnt[c]>cnt[a]?c:a);
  const nn=negs.filter(e=>e.category===top);
  const ex=nn.length?nn[nn.length-1]:null;
  return {text:(AR?'مصدر ضغطك الأكثر تكراراً: ':'Your most frequent pressure source: ')+cn(top)+' — '+(AR?'ظهر سلبياً ':'negative ')+cnt[top]+(AR?' مرة.\nآخر مرة: «':' times.\nLast time: "')+(ex?esc(ex.text):'')+'».\n'+(AR?'هذه الأشياء لا تُحل بتفكير أطول بل بتقليص مساحتها: ما أصغر خطوة تقلص الضغط 20% هذا الأسبوع؟':'These are not solved by longer thinking but by shrinking their space: what smallest step cuts this pressure 20% this week?')};
 }
 if(has(/تذكرني|ذكّرني|ذكرني|remind me/i)){
  const txt=s.replace(/.*(تذكرني بـ|تذكرني ب|تذكرني|ذكّرني بـ|ذكّرني ب|ذكّرني|ذكرني|remind me to|remind me)/i,'').trim();
  if(!txt)return {text:AR?'بكل سرور — أكمل الجملة: «ذكّرني بـ…»':'With pleasure — complete the sentence: “Remind me to…”'};
  S.reminders.push({id:uid(),text:txt});saveMeta();
  return {text:AR?'سجّلته في سجل التنبيهات. سأعرضه في صفحتك الرئيسية حتى تنجزه. لن أدعك تنساه.':'Added to your reminders. It will sit on your home page until done. I will not let you forget.'};
 }
 if(has(/واتساب|واتس|whatsapp|(share|send).*(report|week)/i)){
  if(has(/تقرير|أسبوع|report|week/)){setTimeout(()=>shareWa(weeklyWaText()),400);
   return {text:AR?'جهّزت تقرير أسبوعك كرسالة واتساب — ستفتح الآن، اختر المحادثة واضغط إرسال.':'Your weekly report is packed as a WhatsApp message — opening now, pick the chat and hit send.',actions:[{label:t('wa_rep_r'),run:()=>shareWa(weeklyWaText())}]}}
  return {text:AR?'أستطيع تجهيز رسالة واتساب جاهزة: تقرير أسبوعي أو بصمة توأمك. قل: «أرسل تقريري على واتساب».':'I can pack a WhatsApp message: weekly report or your twin fingerprint. Say: “Send my report on WhatsApp”.'};
 }
 if(has(/وش سويت|وش فعلت|ماذا فعلت|ماذا سجلت|يومياتي|سجلات اليوم|أحداث اليوم|حدث اليوم|أمس|البارحة|yesterday|what did i (do|log)|my day/i)){
  const wantY=has(/أمس|البارحة|yesterday/i);
  const target=wantY?dayStart(Date.now())-DAY:dayStart(Date.now());
  const list=S.events.filter(e=>dayStart(e.ts)===target&&e.type!=='mood').sort((a,b)=>a.ts-b.ts);
  const moodE=S.events.find(e=>e.type==='mood'&&dayStart(e.ts)===target);
  const label=wantY?(AR?'أمس':'yesterday'):(AR?'اليوم':'today');
  if(!list.length&&!moodE)return {text:(AR?'لا شيء موثق ':'Nothing documented ')+label+(AR?' بعد. ':' yet. ')+(wantY?(AR?'انظر التقويم لأيام سابقة، أو':'Check the calendar for earlier days, or'):(AR?'سجل شيئاً الآن — حتى سطر واحد يبقي صورتك كاملة.':'Log something now — one line keeps your picture complete.'))};
  let out=(AR?'ذكريات ':'MEMORIES ')+label+':\n';
  list.forEach((e,i)=>out+=(i+1)+'. '+e.text+' — '+cn(e.category)+'\n');
  if(moodE)out+='\n'+(AR?'مزاجك ':'Your mood ')+label+': '+mw(moodE.mood)+'.';
  if(!wantY&&list.length)out+=AR?'\n\nيوم موثق جيد — استمر، هكذا يكبر توأمك.':'\n\nWell documented — keep going, this is how your twin grows.';
  return {text:out.trim()};
 }
 if(has(/شكرا|شكرًا|مشكور|تسلم|thank|thx/i))return {text:AR?'على أتم الاستعداد دائماً. أنا لا أنجح إلا إذا نجحت أنت — وسجل يومك أولاً بأول.':'Always ready. I only succeed when you do — so log your day, first thing.'};
 if(has(/من أنت|من انت|ماذا تفعل|قدراتك|ساعدني|تساعدني|وش تقدر|who are you|what can you|help/i))
  return {text:AR?'أنا رفيق — مدير حياتك الشخصي:\n• أحوّل يومياتك إلى ستة مؤشرات حية.\n• أراقب علاقاتك وأنبّه قبل أن تبرد.\n• أحلل قراراتك قبل أن تخسر فيها.\n• أتذكر كل شيء تسجله — بالصور.\n• وأجهّز تقاريرك على واتساب حين تريد.\nكل ذلك على جهازك — بياناتك ملكك وحدك.':'I am Rafiq — your personal life manager:\n• I turn your days into six live scores.\n• I watch your relationships and warn before they cool.\n• I stress-test decisions before they cost you.\n• I remember everything you log — photos included.\n• And I pack your reports for WhatsApp on demand.\nAll of it on your device — your data belongs to you alone.'};
 if(has(/حزين|تعبان|مرهق|مكتئب|depressed|exhausted/i))
  return {text:AR?'أنا معك. الأيام الثقيلة تمر أسرع حين تُكتب. ما الذي أثقل عليك تحديداً اليوم؟ سجّله وأنا أتصرف بالباقي — وحتى لو كان مجرد كلام، هنا مكانه الآمن.':'I am with you. Heavy days pass faster when written. What weighed on you today, exactly? Log it and I handle the rest — even if it is just words, this is their safe place.'};
 const fb=AR?['أسمعك تماماً. هل نحوّل ما قلته إلى حدث؟ اضغط (+) واكتبه — سأصنفه تلقائياً وأربطه بمؤشراتك.','جرّبني: «كيف حالي؟» أو «وش سجلت أمس؟» أو «أفكر بـ…» أو «أرسل تقريري واتساب».','سأحتفظ بكلامك في ذاكرتي. بالمناسبة — هل سجلت مزاجك اليوم؟ إنه وقود مؤشر النفسية.']
 :['I hear you. Shall we turn this into an event? Tap (+) and write it — I will classify it and wire it to your scores.','Try me: “How am I?” or “What did I log yesterday?” or start with “I am thinking of…”','Your words stay in my memory. By the way — did you log your mood today? It fuels your mind score.'];
 return {text:fb[Math.floor(Math.random()*fb.length)]};
}

/* =============== توست ومودال =============== */
let toastTimer;
function toast(msg,color,icon){const el=$('#toast');if(!el)return;el.style.setProperty('--tc',color||'var(--acc)');
 el.innerHTML=ic(icon||'spark',17)+'<span>'+msg+'</span>';el.classList.add('show');
 clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3400)}
function askConfirm(title,text,okLabel,cb){
 const m=$('#modal');if(!m)return;
 m.innerHTML='<div class="md-box"><b>'+esc(title)+'</b><p>'+esc(text)+'</p><div class="md-acts"><button class="btn sm" id="mdOk">'+esc(okLabel)+'</button><button class="btn sm ghost" id="mdNo">'+t('cancel')+'</button></div></div>';
 m.classList.add('show');
 const ok=$('#mdOk'),no=$('#mdNo');
 if(ok)ok.onclick=()=>{m.classList.remove('show');cb()};
 if(no)no.onclick=()=>m.classList.remove('show');
}
function openSheet(id){const b=$('#backdrop'),sh=$(id);if(b)b.classList.add('show');if(sh)sh.classList.add('open')}
function closeSheets(){$$('#phone .sheet').forEach(s=>s.classList.remove('open'));const b=$('#backdrop');if(b)b.classList.remove('show')}

window.__rfStage='البذر والترحيب';
/* =============== البذر التجريبي =============== */
async function seedDemo(){
 const now=Date.now(),AR=LANG==='ar';
 const mk=(d,h,mi,a,en,cat,pol,mood)=>({id:uid(),seed:true,text:AR?a:en,category:cat,polarity:pol,mood:(mood===undefined?null:mood),ts:now-d*DAY+h*36e5+mi*6e4});
 const seedE=[
  mk(13,11,30,'أنجزت تقرير المشروع قبل الموعد','Finished the project report early','work',1),
  mk(13,20,5,'مكالمة طويلة مع أمي، ضحكنا كثيراً','Long call with mom, we laughed a lot','relations',1),
  mk(12,23,40,'نمت متأخراً وتعب اليوم','Slept late, felt drained today','mind',-1,2),
  mk(11,7,30,'سباحة 40 دقيقة — أفضل صباح منذ فترة','40 minutes swimming — best morning in a while','health',1,5),
  mk(10,18,0,'دفعت فاتورة الكهرباء والماء','Paid the electricity and water bill','money',0),
  mk(10,21,30,'قرأت 30 صفحة من كتاب العادات الذرية','Read 30 pages of Atomic Habits','growth',1,4),
  mk(9,14,0,'خلاف بسيط مع زميل على توزيع المهام','Small argument with a colleague over tasks','relations',-1,2),
  mk(8,6,45,'جريت 5 كم في الحديقة','Ran 5 km in the park','health',1,5),
  mk(8,10,0,'راتب الشهر وصل','Salary arrived','money',1,4),
  mk(7,13,30,'زيارة عائلية عند أبي — غداء جميل','Family lunch at my fathers — lovely day','relations',1,5),
  mk(6,12,0,'اجتماع ضاغط وضغط العمل عالي','Tense meeting, work pressure high','work',-1,2),
  mk(6,19,0,'تمرين مقاومة في النادي','Strength training at the gym','health',1),
  mk(5,16,0,'اشتريت سماعات جديدة','Bought new headphones','money',0),
  mk(5,22,30,'تأمل وهدوء 15 دقيقة قبل النوم','15 minutes of calm meditation before bed','mind',1,4),
  mk(4,20,0,'أنجزت أول وحدة من دورة البرمجة','Finished the first module of the coding course','growth',1,4),
  mk(3,8,30,'قهوة الصباح مع سارة — لحظة جميلة','Morning coffee with Sara — a lovely moment','relations',1,5),
  mk(3,10,0,'صداع خفيف بعد قلة نوم','Light headache after poor sleep','health',-1,2),
  mk(2,17,0,'دفعت القسط الشهري','Paid the monthly installment','money',0),
  mk(2,18,30,'مشي 8000 خطوة','Walked 8000 steps','health',1),
  mk(1,11,0,'اجتماع مثمر — مديري أثنى على جهدي','Great meeting — my boss praised my work','work',1,4),
  mk(1,22,0,'قرأت فصلاً من كتابي قبل النوم','Read a chapter before bed','growth',1),
  mk(0,7,0,'استيقظت مبكراً وبدأت يومي بالمشي','Up early, started the day with a walk','health',1,4),
  mk(0,12,30,'مكالمة مع صديقي — فضحكنا كثيراً','Call with my friend — we laughed a lot','relations',1)];
 for(let i=0;i<seedE.length;i++)await DB.put('events',seedE[i]);
 const mkR=(name,type,daysAgo,h)=>({id:uid(),seed:true,name:name,type:type,lastContact:now-daysAgo*DAY+h*36e5});
 await DB.put('rels',mkR(AR?'أمي':'Mom','family',0,20));
 await DB.put('rels',mkR(AR?'أبي':'Dad','family',7,13));
 await DB.put('rels',mkR(AR?'سارة':'Sara','spouse',1,21));
 await DB.put('rels',mkR(AR?'خالد':'Khalid','friend',16,12));
 await DB.put('rels',mkR(AR?'أحمد':'Ahmad','work',5,15));
}
async function finalizeSeed(){
 S.seeded=true;
 await loadAll();computeAll();
 const AR=LANG==='ar';
 const d1={id:uid(),seed:true,title:AR?'شراء سيارة':'Buying a car',kind:'buy',amount:AR?'≈ 60,000 ر.س':'≈ SAR 60,000',status:'open',ts:Date.now()-3*DAY};
 d1.analysis=analyzeDecision(d1.title,d1.kind);await DB.put('decisions',d1);
 const d2={id:uid(),seed:true,title:AR?'الاستثمار في صندوق مؤشرات':'Index fund investing',kind:'invest',amount:AR?'≈ 500 ر.س شهرياً':'≈ SAR 500 monthly',status:'open',ts:Date.now()-1*DAY};
 d2.analysis=analyzeDecision(d2.title,d2.kind);await DB.put('decisions',d2);
 await DB.put('chat',{id:uid(),role:'rf',ts:Date.now(),text:AR?('أهلاً بك يا '+(S.profile.name||'صديقي')+'. أنا رفيق — أراقب يومياتك بهدوء وأحوّلها إلى فهم.\nجرّبني: «كيف حالي؟» أو «وش سجلت أمس؟» أو شاركني قراراً يبدأ بـ «أفكر بـ…».'):(('Welcome, '+(S.profile.name||'friend'))+'. I am Rafiq — I quietly watch your days and turn them into understanding.\nTry me: “How am I?” or “What did I log yesterday?” or share a decision starting with “I am thinking of…”.')});
 await saveMeta();
}

/* =============== الترحيب =============== */
let obStep=1;const obData={goals:new Set()};
function renderOb(){
 killSplash();
 const ob=$('#ob');if(!ob)return;
 const ind='<div class="ob-ind">'+[1,2,3,4].map(i=>'<i class="'+(i<=obStep?'on':'')+'"></i>').join('')+'</div>';
 const langBtns='<div class="ob-lang"><button data-olang="en" class="'+(LANG==='en'?'on':'')+'">English</button><button data-olang="ar" class="'+(LANG==='ar'?'on':'')+'">العربية</button></div>';
 if(obStep===1){
  ob.innerHTML=langBtns+'<div class="ob-mid">'+logoSvg(84)+
   '<h1 class="ob-h">'+t('ob_h')+'</h1><p class="ob-p">'+t('ob_p')+'</p>'+
   '<div class="ob-feats">'+
   '<div class="ob-feat">'+ic('brain',20)+'<p><b>'+t('ob_f1b')+'</b>'+t('ob_f1')+'</p></div>'+
   '<div class="ob-feat">'+ic('pulse',20)+'<p><b>'+t('ob_f2b')+'</b>'+t('ob_f2')+'</p></div>'+
   '<div class="ob-feat">'+ic('wa',20)+'<p><b>'+t('ob_f3b')+'</b>'+t('ob_f3')+'</p></div>'+
   '</div></div>'+ind+'<div class="ob-nav"><button class="btn" data-ob-next="2">'+t('ob_start')+'</button></div>';
 }else if(obStep===2){
  ob.innerHTML=langBtns+'<div class="ob-mid"><h1 class="ob-h">'+t('ob2_h')+'</h1><p class="ob-p">'+t('ob2_p')+'</p>'+
   '<div style="margin-top:26px" class="field"><label class="lab">'+t('lbl_name')+'</label><input id="obName" placeholder="'+t('ph_name')+'" maxlength="24"></div>'+
   '<div class="field"><label class="lab">'+t('lbl_job')+'</label><input id="obJob" placeholder="'+t('ph_job')+'" maxlength="30"></div>'+
   '</div>'+ind+'<div class="ob-nav"><button class="btn" data-ob-next="3">'+t('next')+'</button></div>';
 }else if(obStep===3){
  const gs=t('goals');
  ob.innerHTML=langBtns+'<div class="ob-mid"><h1 class="ob-h">'+t('ob3_h')+'</h1><p class="ob-p">'+t('ob3_p')+'</p>'+
   '<div class="chips" style="margin-top:26px;justify-content:center" id="obGoals">'+
   gs.map(g=>'<button class="chip" data-g="'+esc(g)+'">'+esc(g)+'</button>').join('')+
   '</div></div>'+ind+'<div class="ob-nav"><button class="btn" data-ob-next="4">'+t('next')+'</button></div>';
 }else{
  ob.innerHTML=langBtns+'<div class="ob-mid"><h1 class="ob-h">'+t('ob4_h')+'</h1><p class="ob-p">'+t('ob4_p')+'</p>'+
   '<div class="ob-opts">'+
   '<button class="ob-opt" data-seed="1"><b>'+t('ob_seed_b')+'</b><span>'+t('ob_seed_s')+'</span></button>'+
   '<button class="ob-opt" data-seed="0"><b>'+t('ob_zero_b')+'</b><span>'+t('ob_zero_s')+'</span></button>'+
   '</div></div>'+ind+'<div class="ob-nav"></div>';
 }
}
function killSplash(){const sp=$('#splash');if(sp&&sp.parentNode)sp.parentNode.removeChild(sp)}
async function obFinish(seed){
 const name=($('#obName')?$('#obName').value:'').trim(),job=($('#obJob')?$('#obJob').value:'').trim();
 if(name)S.profile.name=name;if(job)S.profile.job=job;
 S.profile.goals=Array.from(obData.goals);
 await saveMeta();
 if(seed){toast(t('prep'),'var(--acc)','spark');
  await seedDemo();await finalizeSeed();}
 enterApp(seed);
}
 $('#ob').addEventListener('click',async e=>{
 const ol=e.target.closest('[data-olang]');
 if(ol){setLang(ol.dataset.olang);return}
 const nx=e.target.closest('[data-ob-next]');
 if(nx){const v=nx.dataset.obNext;
  if(v==='3'){const n=($('#obName')?$('#obName').value:'').trim();
   if(!n){toast(t('need_name'),'var(--acc)','users');return}
   S.profile.name=n;S.profile.job=($('#obJob')?$('#obJob').value:'').trim();}
  obStep=+v;renderOb();return}
 const g=e.target.closest('[data-g]');
 if(g){g.classList.toggle('on');if(g.classList.contains('on'))obData.goals.add(g.dataset.g);else obData.goals.delete(g.dataset.g);return}
 const sd=e.target.closest('[data-seed]');
 if(sd)await obFinish(sd.dataset.seed==='1');
});

window.__rfStage='بناء الواجهة';
/* =============== الهيكل =============== */
const VIEWS=['home','cal','life','chat','relations','decisions','report','twin','settings'];
const TITLES={home:'',cal:'ti_cal',life:'ti_life',chat:'',relations:'ti_relations',decisions:'ti_decisions',report:'ti_report',twin:'ti_twin',settings:'ti_settings'};
function buildShell(){
 put('#stageCap',ic('pulse',15)+' <b style="color:var(--ink)">'+(LANG==='ar'?'رفيق 2.1.2 — شريك حياة رقمي · عربي/إنجليزي':'Rafiq 2.1.2 — Life Companion · AR/EN')+'</b>');
 put('#appHead','<div class="h-brand" id="hBrand">'+logoSvg(34)+'<b>'+t('tab_chat')+'</b></div>'+
  '<div class="h-title" id="hTitle" hidden></div>'+
  '<div class="h-date" id="hDate">'+fmtDate(Date.now())+'</div>');
 put('#views',VIEWS.map(v=>'<section class="view" id="v-'+v+'" data-view="'+v+'"></section>').join(''));
 put('#tabbar','<button class="tab" data-tab="home">'+ic('home',21)+'<span>'+t('tab_home')+'</span></button>'+
  '<button class="tab" data-tab="cal">'+ic('cal',21)+'<span>'+t('tab_cal')+'</span></button>'+
  '<div class="tab-add"><button id="fabAdd" aria-label="new">'+ic('plus',26)+'</button></div>'+
  '<button class="tab" data-tab="chat">'+ic('chat',21)+'<span>'+t('tab_chat')+'</span></button>'+
  '<button class="tab" data-tab="more" id="tabMore">'+ic('grid',21)+'<span>'+t('tab_more')+'</span><i class="tab-dot" id="moreDot"></i></button>');
 try{buildSheets()}catch(err){__rfErr((err&&err.message||err)+' @buildSheets')}
}
function go(v){
 currentView=v;
 $$('#views .view').forEach(x=>x.classList.toggle('on',x.dataset.view===v));
 $$('#tabbar .tab').forEach(el=>el.classList.toggle('on',el.dataset.tab===v));
 const hb=$('#hBrand'),ht=$('#hTitle'),hd=$('#hDate');
 if(hb)hb.hidden=v!=='home';
 if(ht){ht.hidden=v==='home';ht.textContent=TITLES[v]?t(TITLES[v]):''}
 if(hd)hd.textContent=fmtDate(Date.now());
 const R={home:renderHome,cal:renderCal,life:renderLife,chat:renderChat,relations:renderRelations,decisions:renderDecisions,report:renderReport,twin:renderTwin,settings:renderSettings};
 if(R[v]){try{R[v]()}catch(err){__rfErr((err&&err.message||err)+' @'+v)}}
}
function refresh(){computeAll();renderDot();go(currentView)}
function renderDot(){const d=$('#moreDot');if(d)d.classList.toggle('show',S.staleRels.length>0)}
function setLang(l){
 LANG=l;S.settings.lang=l;
 applyLang();applyTheme();saveMeta();
 const app=$('#app');
 if(!app||app.hidden){renderOb();return}
 buildShell();computeAll();renderDot();go(currentView);
}

/* =============== الرئيسية =============== */
function isIos(){return /(iPad|iPhone|iPod)/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)}
function isStandalone(){return navigator.standalone===true||!!(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)}
function ringHtml(val){
 const R=62,C=(2*Math.PI*R).toFixed(1);
 const dots=CATS.map((c,i)=>{const a=(-90+i*60)*Math.PI/180,x=88+79*Math.cos(a),y=88+79*Math.sin(a);
  return '<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="4.5" fill="'+CAT_META[c].color+'" opacity="'+(0.2+0.8*val/100).toFixed(2)+'"/>'}).join('');
 return '<svg viewBox="0 0 176 176" class="ring">'+
  '<circle cx="88" cy="88" r="'+R+'" fill="none" stroke="#282112" stroke-width="11" opacity=".6"/>'+
  '<circle id="ringArc" cx="88" cy="88" r="'+R+'" fill="none" stroke="'+scoreColor(val)+'" stroke-width="11" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+C+'" transform="rotate(-90 88 88)"/>'+
  dots+
  '<text x="88" y="86" text-anchor="middle" class="ring-num" id="ringNum">0</text>'+
  '<text x="88" y="106" text-anchor="middle" class="ring-sub">'+t('of100')+'</text>'+
  '<path class="ekg" d="M62 124h13l4.5-9 6.5 17 4.5-9h23" fill="none"/></svg>';
}
function countUp(el,to,dur){dur=dur||950;const t0=performance.now();(function f(tm){const k=Math.min(1,(tm-t0)/dur);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0)}
function renderHome(){
 const v=$('#v-home');if(!v)return;
 const h=new Date().getHours();
 const greet=h<5?t('gr_night'):h<12?t('gr_morn'):h<17?t('gr_after'):h<21?t('gr_even'):t('gr_night');
 const moodToday=S.events.find(e=>e.type==='mood'&&e.ts>=dayStart(Date.now()));
 const d=S.delta;
 const trend=d>0?'<span class="lc-trend up">+'+d+t('wk_up')+'</span>':d<0?'<span class="lc-trend dn">−'+Math.abs(d)+t('wk_up')+'</span>':'<span class="lc-trend fl">'+t('stable')+'</span>';
 const recent=[].slice.call(S.events).sort((a,b)=>b.ts-a.ts).slice(0,5);
 const showA2hs=isIos()&&!isStandalone()&&!S.settings.a2hsDone;
 let memHtml='';
 if(recent.length){memHtml=recent.map(e=>{const cm=CAT_META[e.category]||CAT_META.mind;
  return '<div class="ev"><div class="ev-ic" style="--rc:'+cm.color+'">'+ic(cm.icon,16)+'</div>'+
  '<div class="ev-b"><p>'+esc(e.text)+'</p><span>'+timeAgo(e.ts)+' · '+cn(e.category)+(e.polarity>0?t('tag_pos'):e.polarity<0?t('tag_neg'):'')+'</span></div>'+
  ((e.att&&e.att.length)?'<span class="ev-th"><img src="'+e.att[0]+'" data-att="'+e.id+':0" alt=""></span>':'')+
  (e.mood?'<span class="ev-face" style="color:'+(e.mood>=4?'var(--good)':e.mood<=2?'var(--bad)':'var(--ink3)')+'">'+faceSvg(e.mood,22)+'</span>':'')+
  '</div>'}).join('');}
 else{memHtml='<div class="empty">'+ic('moon',26)+'<br>'+t('mem_empty')+'<br><button class="btn sm ghost" style="margin-top:10px" data-act="openEvent">'+t('mem_first')+'</button></div>';}
 v.innerHTML=
  '<div class="greet-t">'+greet+'، '+esc(S.profile.name||(LANG==='ar'?'صديقي':'friend'))+'<small>'+fmtDate(Date.now())+' · '+t('under_watch')+'</small></div>'+
  '<section class="life-card" data-act="goLife">'+
   '<div class="lc-top"><span class="lc-live"><span class="pulse-dot"></span> '+t('life_watch')+'</span>'+trend+'</div>'+
   ringHtml(S.life)+
   '<div class="lc-cap"><b>'+lifeWord(S.life)+'</b>'+t('life_cap')+'</div>'+
  '</section>'+
  '<section class="mood-card">'+
   '<div class="mood-t">'+(moodToday?t('mood_today')+'<b style="color:var(--acc)">'+mw(moodToday.mood)+'</b>'+t('mood_edit'):t('mood_q'))+'</div>'+
   '<div class="mood-row">'+[5,4,3,2,1].map(m=>'<button class="mood-btn '+(moodToday&&moodToday.mood===m?'on':'')+'" data-act="mood" data-m="'+m+'">'+faceSvg(m,32)+'<span>'+mw(m)+'</span></button>').join('')+'</div>'+
  '</section>'+
  (showA2hs?'<div class="hint-card">'+t('a2hs')+'<br><button class="hint-x" data-act="a2hs">'+t('a2hs_ok')+'</button></div>':'')+
  '<h3 class="sec-t">'+ic('spark',15)+' '+t('recs_t')+'</h3>'+
  '<div id="recsWrap">'+(S.recs.length?S.recs.map((r,i)=>
   '<div class="rec" style="--rc:'+CAT_META[r.cat].color+'">'+
    '<div class="rec-ic">'+ic(CAT_META[r.cat].icon,17)+'</div>'+
    '<div class="rec-b"><b>'+esc(r.title)+'</b><p>'+esc(r.text)+'</p></div>'+
    (r.action?'<button class="rec-btn" data-act="recGo" data-i="'+i+'">'+esc(r.action)+'</button>':'')+
    '<button class="rec-btn rec-off" data-act="recOff" data-i="'+i+'">'+ic('x',13)+'</button>'+
   '</div>').join(''):'<div class="empty">'+ic('check',26)+'<br>'+t('recs_empty')+'</div>')+'</div>'+
  '<h3 class="sec-t">'+ic('clock',15)+' '+t('mem_t')+'</h3>'+
  '<div>'+memHtml+'</div>'+
  '<div style="height:18px"></div>';
 const arc=$('#ringArc'),num=$('#ringNum');
 if(arc&&num){countUp(num,S.life);requestAnimationFrame(()=>{arc.style.strokeDashoffset=(2*Math.PI*62*(1-S.life/100)).toFixed(1)})}
}

/* =============== التقويم =============== */
function renderCal(){
 const v=$('#v-cal');if(!v)return;
 const first=new Date(calY,calM,1),offset=first.getDay(),dim=new Date(calY,calM+1,0).getDate();
 const monthEv=S.events.filter(e=>{const d=new Date(e.ts);return d.getFullYear()===calY&&d.getMonth()===calM});
 const byDay={};monthEv.forEach(e=>{const k=dayStart(e.ts);if(!byDay[k])byDay[k]=[];byDay[k].push(e)});
 const activeDays=Object.keys(byDay).length;
 const moods=monthEv.filter(e=>e.type==='mood');
 const avgMood=moods.length?Math.round(moods.reduce((a,e)=>a+e.mood,0)/moods.length):null;
 let bestD=null,bestN=0;for(const k in byDay){const n=byDay[k].filter(e=>e.type!=='mood').length;if(n>bestN){bestN=n;bestD=+k}}
 const today=dayStart(Date.now());
 let cells='';
 for(let i=0;i<offset;i++)cells+='<span class="cal-d blank"></span>';
 for(let d=1;d<=dim;d++){
  const ts=new Date(calY,calM,d).getTime();
  const evs=byDay[ts]||[];
  const cats=[];evs.forEach(e=>{if(cats.indexOf(e.category)<0)cats.push(e.category)});
  const cls='cal-d'+(ts===today?' today':'')+(evs.length?' has':'')+(ts>today?' future':'');
  cells+='<button class="'+cls+'" '+(ts<=today?'data-act="calDay" data-ts="'+ts+'"':'')+'>'+
   '<b>'+d+'</b>'+(cats.length?'<span class="cal-dots">'+cats.slice(0,4).map(c=>'<i style="background:'+CAT_META[c].color+'"></i>').join('')+'</span>':'')+
  '</button>';
 }
 v.innerHTML=
  '<div class="cal-head">'+
   '<div class="cal-title">'+first.toLocaleDateString(LOC(),{month:'long',year:'numeric'})+'</div>'+
   '<div class="cal-nav">'+
    '<button class="today-chip" data-act="calToday">'+t('cal_today')+'</button>'+
    '<button class="icon-btn" data-act="calPrev" style="transform:scaleX(-1)">'+ic('chev',16)+'</button>'+
    '<button class="icon-btn" data-act="calNext">'+ic('chev',16)+'</button>'+
   '</div></div>'+
  '<div class="cal-grid">'+WD().map(w=>'<span class="cal-wd">'+w.slice(0,3)+'</span>').join('')+cells+'</div>'+
  '<div class="rp-grid">'+
   '<div class="rp-box"><b>'+monthEv.filter(e=>e.type!=='mood').length+'</b><span>'+t('cal_s1')+'</span></div>'+
   '<div class="rp-box"><b>'+activeDays+'</b><span>'+t('cal_s2')+'</span></div>'+
   '<div class="rp-box"><b style="display:flex;justify-content:center;color:'+(avgMood>=4?'var(--good)':(avgMood&&avgMood<=2)?'var(--bad)':'var(--acc)')+'">'+(avgMood?faceSvg(avgMood,30):'—')+'</b><span>'+t('cal_s3')+'</span></div>'+
  '</div>'+
  (bestD?'<div class="rel-sum" style="margin-top:13px">'+t('cal_best_a')+'<b>'+WD()[new Date(bestD).getDay()]+'</b>'+t('cal_best_b')+bestN+t('cal_best_c')+'</div>':'')+
  '<div class="page-add"><button class="btn ghost" data-act="openEvent">'+ic('plus',16)+' '+t('cal_add')+'</button></div>'+
  '<div style="height:16px"></div>';
}
function openDaySheet(ts){
 const sh=$('#shDay');if(!sh)return;
 const list=S.events.filter(e=>dayStart(e.ts)===ts).sort((a,b)=>a.ts-b.ts);
 const moodE=list.find(e=>e.type==='mood');
 const future=ts>dayStart(Date.now());
 let items='';
 if(list.length){items=list.map(e=>{const cm=CAT_META[e.category]||CAT_META.mind;
  return '<div class="day-ev"><span class="day-time">'+fmtTime(e.ts)+'</span>'+
   '<div class="ev-ic" style="--rc:'+cm.color+';width:30px;height:30px">'+ic(cm.icon,15)+'</div>'+
   '<div class="ev-b"><p style="font-size:13px">'+esc(e.text)+'</p><span>'+cn(e.category)+(e.polarity>0?t('tag_pos'):e.polarity<0?t('tag_neg'):'')+'</span></div>'+
   ((e.att&&e.att.length)?'<span class="ev-th" style="width:34px;height:34px"><img src="'+e.att[0]+'" data-att="'+e.id+':0" alt=""></span>':'')+
  '</div>'}).join('');}
 else{items='<div class="empty">'+ic('moon',24)+'<br>'+t('day_empty')+'</div>';}
 sh.innerHTML=
  '<div class="sh-grip"></div><div class="sh-head"><b>'+fmtDate(ts)+'</b><button class="sh-x" data-close>'+ic('x',15)+'</button></div>'+
  '<div class="rel-sum" style="margin-top:0;margin-bottom:14px">'+(moodE?t('day_mood_on')+'<b style="color:var(--acc)">'+mw(moodE.mood)+'</b>':t('day_mood_off'))+(list.length?' · '+list.length+(list.length===1?t('day_cnt1'):t('day_cnt')):'')+'</div>'+
  items+
  (future?'':'<div class="page-add" style="margin-top:15px"><button class="btn" id="dayAdd">'+ic('plus',16)+' '+t('day_add')+'</button></div>');
 openSheet('#shDay');
 const da=$('#dayAdd');if(da)da.onclick=()=>{closeSheets();setTimeout(()=>openEventSheet(null,null,ts),120)};
}

/* =============== لوحة الحياة =============== */
let hexCur=null;
function hexSvg(){
 const cx=160,cy=150,r=104;
 const ring=k=>CATS.map((c,i)=>{const a=(-90+i*60)*Math.PI/180;return (cx+r*k*Math.cos(a)).toFixed(1)+','+(cy+r*k*Math.sin(a)).toFixed(1)}).join(' ');
 const spokes=CATS.map((c,i)=>{const a=(-90+i*60)*Math.PI/180;return '<line x1="160" y1="150" x2="'+(cx+r*Math.cos(a)).toFixed(1)+'" y2="'+(cy+r*Math.sin(a)).toFixed(1)+'" class="hex-grid"/>'}).join('');
 const labels=CATS.map((c,i)=>{const a=(-90+i*60)*Math.PI/180;return '<text x="'+(cx+(r+21)*Math.cos(a)).toFixed(1)+'" y="'+(cy+(r+21)*Math.sin(a)+4).toFixed(1)+'" fill="'+CAT_META[c].color+'" class="hex-lab">'+cn(c)+'</text>'}).join('');
 return '<svg viewBox="0 0 320 300" class="hex">'+
  '<polygon points="'+ring(1)+'" class="hex-grid"/><polygon points="'+ring(.66)+'" class="hex-grid"/><polygon points="'+ring(.33)+'" class="hex-grid"/>'+
  spokes+'<polygon id="hexPoly" class="hex-val"/>'+
  CATS.map((c,i)=>'<circle id="hexDot'+i+'" r="4" fill="'+CAT_META[c].color+'"/>').join('')+
  labels+'</svg>';
}
function drawHex(vals){
 const cx=160,cy=150,r=104;
 const pts=vals.map((v2,i)=>{const a=(-90+i*60)*Math.PI/180,rr=r*v2/100;return [cx+rr*Math.cos(a),cy+rr*Math.sin(a)]});
 const poly=$('#hexPoly');if(poly)poly.setAttribute('points',pts.map(p=>p.map(n=>n.toFixed(1)).join(',')).join(' '));
 pts.forEach((p,i)=>{const d=$('#hexDot'+i);if(d){d.setAttribute('cx',p[0].toFixed(1));d.setAttribute('cy',p[1].toFixed(1))}});
}
function hexTween(from,to){
 const t0=performance.now(),dur=800;
 (function f(tm){const k=Math.min(1,(tm-t0)/dur),e=1-Math.pow(1-k,3);
  drawHex(from.map((f0,i)=>f0+(to[i]-f0)*e));if(k<1)requestAnimationFrame(f)})(t0);
}
function sparkSvg(arr){
 const w=300,h=72,pad=7,mn=Math.min.apply(null,arr)-3,mx=Math.max.apply(null,arr)+3;
 const xs=i=>pad+i*(w-2*pad)/(arr.length-1),ys=v2=>h-pad-(v2-mn)*(h-2*pad)/(mx-mn);
 const pts=arr.map((v2,i)=>xs(i).toFixed(1)+','+ys(v2).toFixed(1));
 return '<svg viewBox="0 0 '+w+' '+h+'" style="width:100%"><polygon points="'+pad+','+(h-pad)+' '+pts.join(' ')+' '+(w-pad)+','+(h-pad)+'" fill="var(--acc-soft)"/><polyline points="'+pts.join(' ')+'" fill="none" stroke="var(--acc)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="'+xs(arr.length-1).toFixed(1)+'" cy="'+ys(arr[arr.length-1]).toFixed(1)+'" r="4" fill="var(--acc)"/></svg>';
}
function renderLife(){
 const v=$('#v-life');if(!v)return;
 let bars='';
 CATS.forEach(c=>{const val=S.ind[c],d=S.catDelta[c];
  bars+='<div class="bar-row" style="--rc:'+CAT_META[c].color+'">'+
   '<span class="bar-ic">'+ic(CAT_META[c].icon,15)+'</span>'+
   '<span class="bar-name">'+cn(c)+'</span>'+
   '<div class="bar-track"><i data-w="'+val+'"></i></div>'+
   '<b class="bar-val">'+val+'</b>'+
   '<span class="bar-delta '+(d>0?'up':d<0?'dn':'')+'">'+(d>0?'+'+d:d<0?d:'±0')+'</span></div>';});
 v.innerHTML=
  '<h3 class="sec-t" style="margin-top:14px">'+ic('hex',15)+' '+t('life_hex_t')+'</h3>'+
  '<div class="hex-wrap">'+hexSvg()+'</div>'+
  '<h3 class="sec-t">'+ic('pulse',15)+' '+t('life_ind_t')+'</h3>'+
  '<div class="card" style="padding:5px 15px">'+bars+'</div>'+
  '<div class="card spark-wrap"><div class="spark-t"><b>'+t('spark_t')+'</b><span>'+t('spark_s')+S.life+'</span></div>'+sparkSvg(S.spark)+'</div>'+
  '<div style="height:16px"></div>';
 const target=CATS.map(c=>S.ind[c]);
 const from=hexCur||target.map(()=>18);
 requestAnimationFrame(()=>{try{hexTween(from,target)}catch(e){}});hexCur=[].concat(target);
 requestAnimationFrame(()=>$$('#v-life .bar-track i').forEach(i=>i.style.width=i.dataset.w+'%'));
}

/* =============== المحادثة =============== */
const SUG_QUICK=()=>LANG==='ar'?['كيف حالي هذا الأسبوع؟','وش سجلت أمس؟','أفكر بشراء سيارة','أرسل تقريري على واتساب','ما أكثر شيء يفرحني؟']:['How am I this week?','What did I log yesterday?','I am thinking of buying a car','Send my report on WhatsApp','What makes me happiest?'];
function renderChat(){
 const v=$('#v-chat');if(!v)return;
 v.innerHTML=
  '<div class="chat-head"><div class="chat-av">'+ic('pulse',20)+'</div><div><b>'+t('tab_chat')+'</b><span>'+t('chat_sub')+'</span></div></div>'+
  '<div id="chatList"></div>'+
  '<div class="chat-sugs">'+SUG_QUICK().map(s=>'<button class="chip" data-sug="'+esc(s)+'">'+esc(s)+'</button>').join('')+'</div>'+
  '<div class="composer"><input id="chatInp" placeholder="'+t('chat_ph')+'" autocomplete="off"><button class="send-btn" id="chatSend">'+ic('send',19)+'</button></div>';
 const list=$('#chatList');if(!list)return;
 if(!S.chat.length)DB.put('chat',{id:uid(),role:'rf',ts:Date.now(),text:LANG==='ar'?(('أنا هنا يا '+(S.profile.name||'صديقي'))+'. أعرف أحداثك ومزاجك وصورك وعلاقاتك وقراراتك.\nجرّبني الآن، أو اضغط أحد الأسئلة الجاهزة بالأسفل.'):(('I am here, '+(S.profile.name||'friend'))+'. I know your events, moods, photos, people and decisions.\nTry me now, or tap a ready question below.')}).then(async()=>{S.chat=(await DB.all('chat')).sort((a,b)=>a.ts-b.ts);drawMsgs()});
 drawMsgs();
 const inp=$('#chatInp'),snd=$('#chatSend');
 if(snd)snd.onclick=()=>{if(!inp)return;const tx=inp.value.trim();if(!tx)return;inp.value='';sendChat(tx)};
 if(inp)inp.addEventListener('keydown',e=>{if(e.key==='Enter'){const tx=inp.value.trim();if(tx){inp.value='';sendChat(tx)}}});
 $$('#v-chat .chat-sugs .chip').forEach(c=>c.onclick=()=>sendChat(c.dataset.sug));
 function drawMsgs(){
  list.innerHTML=S.chat.slice(-40).map(m=>'<div class="msg '+(m.role==='rf'?'rf':'me')+'">'+esc(m.text)+'</div>').join('');
  list.scrollTop=list.scrollHeight;
 }
 async function pushMsg(role,text,actions){
  const o={id:uid(),role:role,text:text,ts:Date.now()};await DB.put('chat',o);S.chat.push(o);
  const div=document.createElement('div');div.className='msg '+role;div.textContent=text;list.appendChild(div);
  if(actions)actions.forEach(a=>{const b=document.createElement('button');b.className='msg-act';b.textContent=a.label;b.onclick=a.run;div.appendChild(document.createElement('br'));div.appendChild(b)});
  list.scrollTop=list.scrollHeight;
 }
 async function sendChat(tx){
  await pushMsg('me',tx);
  const tp=document.createElement('div');tp.className='typing';tp.innerHTML='<i></i><i></i><i></i>';
  list.appendChild(tp);list.scrollTop=list.scrollHeight;
  await wait(650+Math.random()*550);
  if(tp.parentNode)tp.parentNode.removeChild(tp);
  const r=rafiqReply(tx);
  await pushMsg('rf',r.text,r.actions);
 }
}

/* =============== العلاقات =============== */
function renderRelations(){
 const v=$('#v-relations');if(!v)return;
 let rows='';
 S.rels.forEach(r=>{const d=daysSince(r.lastContact);
  const col=d<=7?'var(--good)':d<=14?'var(--acc)':'var(--bad)';
  const pct=clamp(100-d/30*100,4,100);
  const dTxt=d===0?t('rl_today'):d===1?t('rl_yest'):t('rl_days')+d+' '+pd(d);
  const rt=REL_T[r.type]||REL_T.family;
  rows+='<div class="rel" style="--rc:'+rt.color+'">'+
   '<div class="rel-av">'+esc((r.name||'?')[0])+'</div>'+
   '<div class="rel-b"><b>'+esc(r.name)+'</b><span>'+rt[LANG]+' · '+t('rel_last')+' '+dTxt+'</span>'+
    '<div class="rel-bar"><i style="width:'+pct+'%;background:'+col+'"></i></div></div>'+
   '<div class="rel-acts">'+
    '<button class="icon-btn call" data-act="contact" data-id="'+r.id+'">'+ic('phone',16)+'</button>'+
    '<button class="icon-btn" data-act="delRel" data-id="'+r.id+'">'+ic('trash',15)+'</button>'+
   '</div></div>';});
 v.innerHTML=
  '<h3 class="sec-t" style="margin-top:14px">'+ic('users',15)+' '+t('rel_view_t')+'</h3>'+
  '<div class="rel-sum">'+(S.rels.length?t('rel_sum_a')+'<b>'+S.rels.length+'</b>'+t('rel_sum_n')+(S.staleRels.length?'<b style="color:var(--bad)">'+S.staleRels.length+'</b>'+t('rel_stale'):t('rel_good')):t('rel_empty'))+'</div>'+
  '<div>'+rows+'</div>'+
  '<div class="page-add"><button class="btn ghost" data-act="relAdd">'+ic('plus',16)+' '+t('rel_add')+'</button></div>'+
  '<div style="height:16px"></div>';
}

/* =============== القرارات =============== */
function renderDecisions(){
 const v=$('#v-decisions');if(!v)return;
 let rows='';
 S.decisions.forEach(d=>{const a=d.analysis;const kIc=(DEC_KINDS[d.kind]||DEC_KINDS.buy).icon;
  rows+='<div class="dec card">'+
   '<div class="dec-head" data-act="decToggle">'+
    '<div class="dec-ic">'+ic(kIc,18)+'</div>'+
    '<div class="dec-b"><b>'+esc(d.title)+'</b><span>'+(DEC_KINDS[d.kind][LANG]||d.kind)+(d.amount?' · '+esc(d.amount):'')+' · '+fmtShort(d.ts)+(d.status==='done'?' · ✓':'')+'</span></div>'+
    (a?'<span class="dec-badge '+a.cls+'">'+a.short+'</span>':'')+
    '<span class="dec-chev">'+ic('chev',15)+'</span>'+
   '</div>'+
   '<div class="dec-body">'+
    (a?'<p class="dec-summ">'+esc(a.summary)+'</p>'+
    '<div class="dec-cols">'+
     '<div><h5>'+ic('check',13)+' '+t('pros_h')+'</h5><ul>'+a.pros.map(p=>'<li>'+esc(p)+'</li>').join('')+'</ul></div>'+
     '<div><h5>'+ic('x',13)+' '+t('risks_h')+'</h5><ul>'+a.risks.map(p=>'<li>'+esc(p)+'</li>').join('')+'</ul></div>'+
    '</div>'+
    '<div class="dec-q"><h5>'+ic('spark',13)+' '+t('qs_h')+'</h5><ul>'+a.qs.map(q=>'<li>'+esc(q)+'</li>').join('')+'</ul></div>'+
    '<p class="dec-verdict">'+esc(a.verdict)+'</p>':'')+
    '<div class="dec-acts">'+
     (d.status!=='done'?'<button class="btn" data-act="decDone" data-id="'+d.id+'">'+ic('check',15)+' '+t('dec_made')+'</button>':'')+
     '<button class="btn ghost" data-act="decDel" data-id="'+d.id+'">'+ic('trash',14)+' '+t('dec_arch')+'</button>'+
    '</div></div></div>';});
 if(!rows)rows='<div class="empty">'+ic('dec',26)+'<br>'+t('dec_empty')+'</div>';
 v.innerHTML=
  '<h3 class="sec-t" style="margin-top:14px">'+ic('dec',15)+' '+t('dec_view_t')+'</h3>'+
  '<div class="rel-sum">'+t('dec_view_p')+'</div>'+
  '<div>'+rows+'</div>'+
  '<div class="page-add"><button class="btn" data-act="openDec">'+ic('plus',16)+' '+t('dec_new')+'</button></div>'+
  '<div style="height:16px"></div>';
}

/* =============== التقرير =============== */
function renderReport(){
 const v=$('#v-report');if(!v)return;
 const rp=weeklyReport(reportWeek);
 const rng=fmtShort(rp.start)+' — '+fmtShort(rp.end-1);
 const moodF=rp.avgMood?Math.round(rp.avgMood):null;
 const AR=LANG==='ar';
 v.innerHTML=
  '<h3 class="sec-t" style="margin-top:14px">'+ic('report',15)+' '+t('rep_t')+'</h3>'+
  '<div class="rp-range">'+
   '<button class="chip '+(reportWeek===0?'on':'')+'" data-act="week" data-w="0">'+t('rep_this')+'</button>'+
   '<button class="chip '+(reportWeek===1?'on':'')+'" data-act="week" data-w="1">'+t('rep_last')+'</button>'+
  '</div>'+
  '<div style="font-size:11.5px;color:var(--ink3);margin:10px 2px 0">'+rng+'</div>'+
  '<div class="rp-grid">'+
   '<div class="rp-box"><b>'+rp.ev.length+'</b><span>'+t('rep_s1')+'</span></div>'+
   '<div class="rp-box"><b>'+rp.days+'</b><span>'+t('rep_s2')+'</span></div>'+
   '<div class="rp-box"><b style="display:flex;justify-content:center;color:'+(moodF>=4?'var(--good)':(moodF&&moodF<=2)?'var(--bad)':'var(--acc)')+'">'+(moodF?faceSvg(moodF,30):'—')+'</b><span>'+t('rep_s3')+'</span></div>'+
  '</div>'+
  '<div class="rp-sec"><h4>'+ic('pulse',13)+' '+t('rep_read')+'</h4>'+
   '<p><span class="rp-pill" style="color:'+CAT_META[rp.strongest].color+'">'+cn(rp.strongest)+t('rep_str')+'</span>'+
   '<span class="rp-pill" style="color:var(--bad)">'+cn(rp.weakest)+t('rep_weak')+'</span></p>'+
   '<p style="margin-top:6px;font-size:12.5px;color:var(--ink2)">'+(AR?('سجلت '+rp.strongestN+' لحظة إيجابية في '+cn(rp.strongest)+'، بينما كان '+cn(rp.weakest)+' غائباً عن أسبوعك تقريباً. التوازن لا يعني المساواة — لكنه يعني ألا يظل جانب بلا حياة أسبوعاً كاملاً.'):('You logged '+rp.strongestN+' positive moments in '+cn(rp.strongest)+' while '+cn(rp.weakest)+' was nearly absent. Balance is not equality — no side of your life should stay empty for a whole week.'))+'</p>'+
  '</div>'+
  (rp.achieve?'<div class="rp-sec"><h4>'+ic('check',13)+' '+t('rep_ach')+'</h4><p>«'+esc(rp.achieve.text)+'»</p><p style="font-size:11px;color:var(--ink3);margin-top:4px">'+timeAgo(rp.achieve.ts)+'</p></div>':'')+
  (rp.warm?'<div class="rp-sec"><h4>'+ic('heart',13)+' '+t('rep_warm')+'</h4><p>«'+esc(rp.warm.text)+'»</p></div>':'')+
  '<div class="rp-sec"><h4>'+ic('spark',13)+' '+t('rep_next')+'</h4>'+
   (S.recs.length?S.recs.map(r=>'<p style="padding:4px 0"><b style="color:'+CAT_META[r.cat].color+'">'+esc(r.title)+':</b> '+esc(r.text)+'</p>').join(''):'<p>'+t('rep_next_none')+'</p>')+
  '</div>'+
  '<div class="page-add"><button class="btn ghost" data-act="waReport">'+ic('wa',17)+' '+t('rep_share')+'</button></div>'+
  '<div style="height:16px"></div>';
}

/* =============== التوأم =============== */
function ringSvgMini(val){
 const R=46,C=2*Math.PI*R;
 return '<svg viewBox="0 0 110 110" style="width:120px;margin:auto"><circle cx="55" cy="55" r="'+R+'" fill="none" stroke="#282112" stroke-width="8" opacity=".6"/>'+
 '<circle cx="55" cy="55" r="'+R+'" fill="none" stroke="var(--c-mind)" stroke-width="8" stroke-linecap="round" stroke-dasharray="'+C.toFixed(1)+'" stroke-dashoffset="'+(C*(1-val/100)).toFixed(1)+'" transform="rotate(-90 55 55)"/>'+
 '<text x="55" y="60" text-anchor="middle" class="ring-num" style="font-size:24px">'+val+'%</text>'+
 '<text x="55" y="76" text-anchor="middle" class="ring-sub">'+t('tw_ring')+'</text></svg>';
}
function renderTwin(){
 const v=$('#v-twin');if(!v)return;
 const d=twinData();
 const maxW=Math.max.apply(null,d.wdPos.concat([1]));
 const pattern=d.topW
  ?'«'+esc(d.topW[0])+'»'+t('habit_on')+d.topW[1]+t('habit_on2')
  :t('habit_off');
 const recovery=d.rec
  ?t('recov_a')+d.rec+' '+pd(d.rec)+t('recov_b')
  :t('recov_off');
 const projTxt=d.projD>=0
  ?t('proj_up_a')+d.proj+t('proj_up_b')+(d.projD>0?'+'+d.projD:t('proj_st'))+t('proj_up_c')
  :t('proj_up_a')+d.proj+t('proj_dn_b')+d.projD+t('proj_dn_c');
 v.innerHTML=
  '<div class="tw-top">'+ringSvgMini(d.compl)+'<p>'+t('tw_p')+'</p></div>'+
  '<h3 class="sec-t">'+ic('cal',15)+' '+t('tw_week_t')+'</h3>'+
  '<div class="tw-line"><p style="font-size:12px;color:var(--ink2)">'+t('tw_week_a')+WD()[d.bestWd]+t('tw_week_b')+'<b style="color:var(--acc)">'+t('tw_gold')+'</b>'+t('tw_week_c')+'</p>'+
   '<div class="wd-bars">'+WD().map((n2,i)=>'<div class="wd-b"><div class="wd-track"><i class="'+(i===d.bestWd?'on':'')+'" style="height:'+Math.max(6,Math.round(d.wdPos[i]/maxW*100))+'%"></i></div><span>'+n2.slice(0,3)+'</span></div>').join('')+'</div></div>'+
  '<h3 class="sec-t">'+ic('flame',15)+' '+t('tw_pat_t')+'</h3>'+
  '<div class="tw-line"><h4>'+t('streak_t')+'</h4><p>'+(d.streak>0?d.streak+' '+pd(d.streak)+t('streak_on'):t('streak_off'))+'</p></div>'+
  '<div class="tw-line"><h4>'+t('habit_t')+'</h4><p>'+pattern+'</p></div>'+
  '<div class="tw-line"><h4>'+t('recov_t')+'</h4><p>'+recovery+'</p></div>'+
  '<div class="tw-line"><h4>'+t('energy_t')+'</h4><p><b style="color:'+CAT_META[d.energy].color+'">'+cn(d.energy)+'</b>'+t('energy_p')+d.energyN+t('energy_p2')+'</p></div>'+
  '<div class="tw-line"><h4>'+t('stress_t')+'</h4><p>'+(d.stressN?'<b style="color:'+CAT_META[d.stress].color+'">'+cn(d.stress)+'</b>'+t('stress_on')+d.stressN+t('stress_on2'):t('stress_off'))+'</p></div>'+
  '<div class="tw-line"><h4>'+t('hour_t')+'</h4><p>'+d.when+t('hour_s')+Math.round(d.avgH)+t('hour_s2')+'</p></div>'+
  '<div class="tw-line"><h4>'+t('proj_t')+'</h4><p>'+projTxt+'</p></div>'+
  '<h3 class="sec-t">'+ic('eye',15)+' '+t('dist_t')+'</h3>'+
  '<div class="tw-line">'+d.dist.map(x=>'<div class="tw-bar" style="--rc:'+CAT_META[x.c].color+'"><span>'+cn(x.c)+'</span><div class="bar-track"><i style="width:'+x.pct+'%"></i></div><em>'+x.pct+'%</em></div>').join('')+'</div>'+
  '<div class="tw-line" style="border-right:3px solid var(--acc)"><h4>'+t('ident_t')+'</h4><p>'+esc(d.idPlain)+'</p></div>'+
  '<div class="page-add"><button class="btn ghost" data-act="waTwin">'+ic('wa',17)+' '+t('tw_share')+'</button></div>'+
  '<div style="height:16px"></div>';
}

/* =============== الإعدادات =============== */
function storageInfo(){
 const isFile=location.protocol==='file:';
 if(DB.driver==='idb')return {b:t('st_idb'),note:'',icon:'shield',col:'var(--good)'};
 if(DB.driver==='ls')return {b:t('st_ls'),note:isFile?t('st_ls_note_f'):t('st_ls_note_h'),icon:'shield',col:'var(--acc)'};
 return {b:t('st_mem'),note:t('st_mem_note'),icon:'x',col:'var(--bad)'};
}
function renderSettings(){
 const v=$('#v-settings');if(!v)return;
 const p=S.profile,st=S.settings,linked=!!p.email;
 const age=calcAge(p.bday);
 const si=storageInfo();
 const AR=LANG==='ar';
 v.innerHTML=
  '<h3 class="sec-t" style="margin-top:14px">'+ic('globe',15)+' '+t('st_lang')+'</h3>'+
  '<div class="set-card"><div class="seg" id="stLang">'+
   '<button data-lg="ar" class="'+(LANG==='ar'?'on':'')+'">العربية</button>'+
   '<button data-lg="en" class="'+(LANG==='en'?'on':'')+'">English</button>'+
  '</div></div>'+
  '<h3 class="sec-t">'+ic('db',15)+' '+t('st_store')+'</h3>'+
  '<div class="set-card"><div class="set-row"><div><b>'+si.b+'</b>'+(si.note?'<p>'+si.note+'</p>':'')+'</div><span class="acc-badge" style="color:'+si.col+'">'+ic(si.icon,13)+' '+t('st_active')+'</span></div></div>'+
  '<h3 class="sec-t">'+ic('edit',15)+' '+t('st_profile')+'</h3>'+
  '<div class="set-card">'+
   '<div class="field"><label class="lab">'+t('lbl_name')+'</label><input id="stName" maxlength="24" value="'+esc(p.name||'')+'"></div>'+
   '<div class="field"><label class="lab">'+t('lbl_job')+'</label><input id="stJob" maxlength="30" value="'+esc(p.job||'')+'"></div>'+
   '<div class="field"><label class="lab">'+t('st_bday')+(age?t('st_age')+age+t('st_age2'):'')+'</label><input type="date" id="stBday" value="'+(p.bday||'')+'" max="'+isoDate(Date.now())+'"></div>'+
   '<button class="btn" id="stProfileSave">'+ic('check',16)+' '+t('save')+'</button>'+
   ((p.goals&&p.goals.length)?'<div class="set-note">'+(AR?'أهدافك: ':'Goals: ')+p.goals.map(esc).join(' · ')+'</div>':'')+
  '</div>'+
  '<h3 class="sec-t">'+ic('link',15)+' '+t('st_link_t')+'</h3>'+
  '<div class="set-card">'+
   (linked?
    '<div class="set-row"><div><b style="direction:ltr;unicode-bidi:embed">'+esc(p.email)+'</b><p>'+t('st_linked_p')+'</p></div><span class="acc-badge">'+ic('shield',13)+' '+t('st_linked')+'</span></div>'+
    '<button class="btn ghost" id="stUnlink" style="margin-top:12px">'+t('st_unlink')+'</button>'
    :
    '<div class="field" style="margin-bottom:12px"><label class="lab">'+t('st_email')+'</label><input id="stEmail" type="email" style="direction:ltr;text-align:left" placeholder="you@example.com"></div>'+
    '<button class="btn" id="stLink">'+ic('link',16)+' '+t('st_link')+'</button>')+
   '<div class="set-note">'+t('st_link_note')+'</div>'+
  '</div>'+
  '<h3 class="sec-t">'+ic('moon',15)+' '+t('st_theme')+'</h3>'+
  '<div class="set-card">'+
   '<div class="seg" id="stTheme">'+
    '<button data-th="dark" class="'+(st.theme!=='light'?'on':'')+'">'+ic('moon',15)+' '+t('st_dark')+'</button>'+
    '<button data-th="light" class="'+(st.theme==='light'?'on':'')+'">'+ic('sun',15)+' '+t('st_light')+'</button>'+
   '</div>'+
   '<div class="swatches">'+Object.keys(ACCENTS).map(k=>'<button class="swatch '+(st.accent===k?'on':'')+'" data-ac="'+k+'" style="background:'+(st.theme==='light'?ACCENTS[k].light:ACCENTS[k].dark)+'"></button>').join('')+'</div>'+
  '</div>'+
  '<h3 class="sec-t">'+ic('spark',15)+' '+t('st_alerts')+'</h3>'+
  '<div class="set-card">'+
   '<div class="set-row"><div><b>'+t('st_tg_rel')+'</b><p>'+t('st_tg_rel_p')+'</p></div>'+
    '<button class="sw '+(st.toggles.rel?'on':'')+'" data-tg="rel"><i></i></button></div>'+
   '<div class="set-row"><div><b>'+t('st_tg_hab')+'</b><p>'+t('st_tg_hab_p')+'</p></div>'+
    '<button class="sw '+(st.toggles.habits?'on':'')+'" data-tg="habits"><i></i></button></div>'+
  '</div>'+
  '<h3 class="sec-t">'+ic('wa',15)+' '+t('st_wa')+'</h3>'+
  '<div class="set-card">'+
   '<div class="set-row"><div><b>'+t('st_wa_r')+'</b><p>'+t('st_wa_r_p')+'</p></div>'+
    '<button class="icon-btn" data-act="waReport">'+ic('send',15)+'</button></div>'+
   '<div class="set-row"><div><b>'+t('st_wa_t')+'</b><p>'+t('st_wa_t_p')+'</p></div>'+
    '<button class="icon-btn" data-act="waTwin">'+ic('send',15)+'</button></div>'+
   '<div class="set-note">'+t('st_wa_note')+'</div>'+
  '</div>'+
  '<div style="height:16px"></div>';
 const ps=$('#stProfileSave');
 if(ps)ps.onclick=async()=>{
  const nEl=$('#stName');const n=nEl?nEl.value.trim():'';
  if(!n){toast(t('st_needname'),'var(--acc)','edit');return}
  S.profile.name=n;S.profile.job=$('#stJob')?$('#stJob').value.trim():'';S.profile.bday=$('#stBday')?$('#stBday').value:'';
  await saveMeta();toast(t('st_saved'),'var(--good)','check');
  if(currentView==='home')go('home');
 };
 const lk=$('#stLink');
 if(lk)lk.onclick=async()=>{
  const emEl=$('#stEmail');const em=emEl?emEl.value.trim():'';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){toast(t('st_badmail'),'var(--bad)','mail');return}
  S.profile.email=em;await saveMeta();renderSettings();
  toast(t('st_link_ok'),'var(--good)','shield');
 };
 const ul=$('#stUnlink');
 if(ul)ul.onclick=()=>askConfirm(t('st_unlink_t'),t('st_unlink_p'),t('st_unlink'),async()=>{S.profile.email='';await saveMeta();renderSettings()});
 $$('#stLang button').forEach(b=>{b.onclick=()=>{if(b.dataset.lg!==LANG)setLang(b.dataset.lg)}});
 $$('#stTheme button').forEach(b=>b.onclick=()=>{S.settings.theme=b.dataset.th;applyTheme();saveMeta();renderSettings()});
 $$('#v-settings .swatch').forEach(b=>b.onclick=()=>{S.settings.accent=b.dataset.ac;applyTheme();saveMeta();renderSettings()});
 $$('#v-settings .sw').forEach(b=>b.onclick=()=>{S.settings.toggles[b.dataset.tg]=!S.settings.toggles[b.dataset.tg];saveMeta();renderSettings();computeAll();if(currentView==='home')go('home')});
}

window.__rfStage='شاشات الإدخال';
/* =============== شاشات الإدخال =============== */
function fileToDataURL(f){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(f)})}
function fileToText(f){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsText(f)})}
async function compressImage(dataURL,max,q){
 max=max||1000;q=q||.72;
 const img=new Image();
 await new Promise((res,rej)=>{img.onload=res;img.onerror=rej;img.src=dataURL});
 let w=img.width,h=img.height;const k=Math.min(1,max/Math.max(w,h));w=Math.round(w*k);h=Math.round(h*k);
 const c=document.createElement('canvas');c.width=w;c.height=h;
 c.getContext('2d').drawImage(img,0,0,w,h);
 return c.toDataURL('image/jpeg',q);
}
function renderEvAtts(){
 const el=$('#evAtts');if(!el)return;
 el.innerHTML=evAttsTemp.map((s,i)=>'<div class="att-th"><img src="'+s+'" data-att="tmp:'+i+'" alt=""><button class="att-x" data-rm="'+i+'">'+ic('x',10)+'</button></div>').join('')+
  '<button class="att-add" id="evAttBtn" type="button">'+ic('image',18)+'</button>';
}
function catCardsHtml(){
 return CATS.map(c=>'<button class="pick-card" data-cat="'+c+'" style="--rc:'+CAT_META[c].color+';--pc-soft:'+CAT_META[c].soft+'">'+ic(CAT_META[c].icon,20)+'<span>'+cn(c)+'</span></button>').join('');
}
function moodLgHtml(){
 return [5,4,3,2,1].map(m=>'<button class="mood-lg" data-m="'+m+'">'+faceSvg(m,34)+'<span>'+mw(m)+'</span></button>').join('');
}
function buildSheets(){
 const AR=LANG==='ar';
 put('#shEvent',
  '<div class="sh-grip"></div><div class="sh-head"><b>'+t('ev_t')+'</b><button class="sh-x" data-close>'+ic('x',15)+'</button></div>'+
  '<textarea id="evText" placeholder="'+t('ev_ph')+'"></textarea>'+
  '<div class="sug-chips" id="evSugs"></div>'+
  '<div class="cat-hint">'+t('ev_cat')+': <b id="evCatName">—</b><span class="auto-tag" id="evAutoTag">'+t('ev_auto')+'</span><span id="evSensed" style="color:var(--acc);font-size:11.5px;font-weight:600"></span></div>'+
  '<div class="pick-grid" id="evCats">'+catCardsHtml()+'</div>'+
  '<div style="height:14px"></div>'+
  '<label class="lab">'+t('ev_mood')+'</label>'+
  '<div class="mood-row-lg" id="evMoodPick">'+moodLgHtml()+'</div>'+
  '<div style="height:14px"></div>'+
  '<label class="lab">'+t('ev_att')+'</label>'+
  '<div class="att-strip" id="evAtts"></div>'+
  '<div style="height:14px"></div>'+
  '<label class="lab">'+t('ev_date')+'</label>'+
  '<div class="dq-row">'+
   '<button class="dq" data-dq="today">'+t('dq_today')+'</button>'+
   '<button class="dq" data-dq="yesterday">'+t('dq_yest')+'</button>'+
   '<button class="dq" data-dq="custom">'+t('dq_custom')+'</button>'+
  '</div><div id="evDateWrap"><input type="date" id="evDate"></div>'+
  '<div style="height:16px"></div>'+
  '<button class="btn" id="evSave">'+ic('check',16)+' '+t('ev_save')+'</button>');
 put('#shRel',
  '<div class="sh-grip"></div><div class="sh-head"><b>'+t('rel_sh')+'</b><button class="sh-x" data-close>'+ic('x',15)+'</button></div>'+
  '<div class="field"><label class="lab">'+t('rel_name')+'</label><input id="relName" maxlength="24" placeholder="'+t('rel_name_ph')+'"></div>'+
  '<label class="lab">'+t('rel_type')+'</label>'+
  '<div class="pick-grid" id="relTypes">'+Object.keys(REL_T).map((k,i)=>'<button class="pick-card'+(i===0?' on':'')+'" data-rt="'+k+'" style="--rc:'+REL_T[k].color+';--pc-soft:'+CAT_META.relations.soft+'">'+ic(REL_T[k].icon,20)+'<span>'+REL_T[k][LANG]+'</span></button>').join('')+'</div>'+
  '<div style="height:14px"></div>'+
  '<label class="lab">'+t('rel_last')+'</label>'+
  '<div class="dq-row">'+
   '<button class="dq on" data-dq2="0">'+t('dq_today')+'</button>'+
   '<button class="dq" data-dq2="1">'+t('dq_yest')+'</button>'+
   '<button class="dq" data-dq2="7">'+t('rel_week')+'</button>'+
   '<button class="dq" data-dq2="20">'+t('rel_q20')+'</button>'+
   '<button class="dq" data-dq2="custom">'+t('rel_custom')+'</button>'+
  '</div>'+
  '<div id="relDateWrap"><input type="date" id="relDate"></div>'+
  '<div style="height:16px"></div>'+
  '<button class="btn" id="relSave">'+ic('check',16)+' '+t('rel_add_btn')+'</button>');
 put('#shDec',
  '<div class="sh-grip"></div><div class="sh-head"><b>'+t('dec_sh')+'</b><button class="sh-x" data-close>'+ic('x',15)+'</button></div>'+
  '<div class="field"><label class="lab">'+t('dec_what')+'</label><input id="decTitle" maxlength="60" placeholder="'+t('dec_ph')+'"></div>'+
  '<label class="lab">'+t('dec_kind')+'</label>'+
  '<div class="pick-grid c2" id="decKinds">'+Object.keys(DEC_KINDS).map((k,i)=>'<button class="pick-card'+(i===0?' on':'')+'" data-dk="'+k+'" style="--rc:var(--acc);--pc-soft:var(--acc-soft)">'+ic(DEC_KINDS[k].icon,20)+'<span>'+DEC_KINDS[k][LANG]+'</span><small>'+(AR?DEC_KINDS[k].d_ar:DEC_KINDS[k].d_en)+'</small></button>').join('')+'</div>'+
  '<div style="height:14px"></div>'+
  '<div class="field"><label class="lab">'+t('dec_amt')+'</label><input id="decAmount" maxlength="30" placeholder="'+t('dec_amt_ph')+'"></div>'+
  '<button class="btn" id="decSave">'+ic('dec',16)+' '+t('dec_go')+'</button>');
 const evText=$('#evText');
 if(!evText)return;
 const setSugs=()=>{const c=evCatPick||'health';
  const sg=$('#evSugs');if(sg)sg.innerHTML=(SUGS()[c]||[]).map(s=>'<button class="sug" data-sug="'+esc(s)+'">'+esc(s)+'</button>').join('');
  $$('#evSugs .sug').forEach(b=>b.onclick=()=>{evText.value=b.dataset.sug;autoClassify();evText.dispatchEvent(new Event('input'))})};
 function autoClassify(){
  const tx=evText.value.trim();
  if(evAuto){const c=classify(tx);if(c)evCatPick=c;
   const nm=$('#evCatName');if(nm)nm.textContent=evCatPick?cn(evCatPick):'—';
   const sn=$('#evSensed');if(sn)sn.textContent=tx&&evCatPick?t('ev_sensed')+cn(evCatPick):'';}
  $$('#evCats .pick-card').forEach(ch=>ch.classList.toggle('on',ch.dataset.cat===evCatPick));
  setSugs();
 }
 evText.addEventListener('input',()=>{evText.style.minHeight='74px';evText.style.minHeight=Math.min(200,evText.scrollHeight)+'px';autoClassify()});
 $$('#evCats .pick-card').forEach(ch=>ch.onclick=()=>{evCatPick=ch.dataset.cat;evAuto=false;const at=$('#evAutoTag');if(at)at.hidden=true;autoClassify()});
 $$('#evMoodPick .mood-lg').forEach(b=>b.onclick=()=>{evMoodPick=+b.dataset.m;$$('#evMoodPick .mood-lg').forEach(x=>x.classList.toggle('on',x===b))});
 const es=$('#evSave');if(es)es.onclick=saveEvent;
 $$('#shEvent .dq').forEach(b=>b.onclick=()=>setEvQuick(b.dataset.dq));
 $$('#relTypes .pick-card').forEach(c=>c.onclick=()=>{$$('#relTypes .pick-card').forEach(x=>x.classList.toggle('on',x===c))});
 $$('#shRel .dq').forEach(c=>c.onclick=()=>{
  $$('#shRel .dq').forEach(x=>x.classList.toggle('on',x===c));
  const w=$('#relDateWrap');
  if(w){if(c.dataset.dq2==='custom'){w.classList.add('open');try{const rd=$('#relDate');if(rd)rd.focus()}catch(e){}}
  else{w.classList.remove('open');const rd=$('#relDate');if(rd)rd.value=''}}});
 const rs=$('#relSave');if(rs)rs.onclick=saveRel;
 $$('#decKinds .pick-card').forEach(c=>c.onclick=()=>{$$('#decKinds .pick-card').forEach(x=>x.classList.toggle('on',x===c))});
 const ds=$('#decSave');if(ds)ds.onclick=saveDec;
 renderEvAtts();
}
function setEvQuick(q){
 $$('#shEvent .dq').forEach(b=>b.classList.toggle('on',b.dataset.dq===q));
 const w=$('#evDateWrap'),dt=$('#evDate');
 if(!w)return;
 if(q==='custom'){w.classList.add('open');try{if(dt)dt.focus()}catch(e){}}
 else{w.classList.remove('open');if(dt)dt.value=isoDate(Date.now()-(q==='yesterday'?DAY:0))}
}
 $('#shEvent').addEventListener('click',e=>{
 if(e.target.closest('#evAttBtn'))$('#evFile').click();
 const rm=e.target.closest('[data-rm]');
 if(rm){evAttsTemp.splice(+rm.dataset.rm,1);renderEvAtts()}
});
 $('#evFile').addEventListener('change',async e=>{
 const f=e.target.files[0];if(!f)return;
 if(evAttsTemp.length>=2){toast(t('c_max'),'var(--acc)','image');e.target.value='';return}
 toast(t('c_press'),'var(--acc)','image');
 try{const raw=await fileToDataURL(f);const c=await compressImage(raw);
  evAttsTemp.push(c);renderEvAtts();toast(t('c_ok'),'var(--good)','image')}
 catch(err){toast(t('c_err'),'var(--bad)','x')}
 e.target.value='';
});
function openEventSheet(text,cat,dateTs){
 if(!$('#evText'))buildSheets();
 const evText=$('#evText');
 if(!evText)return;
 evCatPick=cat||null;evMoodPick=null;evAuto=!cat;evAttsTemp=[];
 evText.value=text||'';
 $$('#evMoodPick .mood-lg').forEach(x=>x.classList.remove('on'));
 const at=$('#evAutoTag');if(at)at.hidden=!!cat;
 if(!evCatPick)evCatPick=classify(evText.value)||'health';
 $$('#evCats .pick-card').forEach(ch=>ch.classList.toggle('on',ch.dataset.cat===evCatPick));
 const nm=$('#evCatName');if(nm)nm.textContent=cn(evCatPick);
 const diff=Math.round((dayStart(Date.now())-(dateTs?dayStart(dateTs):dayStart(Date.now())))/DAY);
 setEvQuick(dateTs?(diff===1?'yesterday':diff>1?'custom':'today'):'today');
 if(diff>1){const dt=$('#evDate');if(dt)dt.value=isoDate(dateTs)}
 renderEvAtts();
 evText.dispatchEvent(new Event('input'));
 openSheet('#shEvent');
 if(!text)setTimeout(()=>{try{evText.focus()}catch(e){}},420);
}
async function saveEvent(){
 const evText=$('#evText');if(!evText)return;
 const text=evText.value.trim();
 if(!text){toast(t('need_text'),'var(--acc)','edit');return}
 const cat=evCatPick||classify(text)||'mind';
 const mood=evMoodPick;
 const pol=mood?(mood>=4?1:mood<=2?-1:0):sentiment(text);
 const dEl=$('#evDate');const dv=dEl?dEl.value:'';
 if(!dv){toast(t('need_date'),'var(--acc)','cal');return}
 const parts=dv.split('-');
 const n=new Date();
 const ts=new Date(+parts[0],+parts[1]-1,+parts[2],n.getHours(),n.getMinutes()).getTime();
 if(ts>dayStart(Date.now())+DAY-1){toast(t('future'),'var(--acc)','cal');return}
 const ev={id:uid(),text:text,category:cat,polarity:pol,mood:mood||null,ts:ts};
 if(evAttsTemp.length)ev.att=[].concat(evAttsTemp);
 await DB.put('events',ev);S.events.push(ev);
 closeSheets();
 const AR=LANG==='ar';
 const react=pol>0?[t('ev_pos')+(S.profile.name||(AR?'صديقي':'friend'))+' — '+cn(cat)+t('ev_pos2'),'var(--good)','check']
  :pol<0?[t('ev_neg'),'var(--bad)','heart']
  :[t('ev_neu'),'var(--acc)','check'];
 toast(react[0],react[1],react[2]);
 refresh();
}
async function saveRel(){
 const nEl=$('#relName');if(!nEl)return;
 const name=nEl.value.trim();
 if(!name){toast(t('rel_need'),'var(--acc)','users');return}
 const onC=$('#relTypes .pick-card.on');
 const type=onC?onC.dataset.rt:'family';
 let lc=Date.now();
 const q=$('#shRel .dq.on')?$('#shRel .dq.on').dataset.dq2:undefined;
 const rdEl=$('#relDate');const rd=rdEl?rdEl.value:'';
 if(rd){const p=rd.split('-');lc=new Date(+p[0],+p[1]-1,+p[2],12).getTime()}
 else if(q!==undefined)lc=Date.now()-(+q)*DAY;
 const nr={id:uid(),name:name,type:type,lastContact:lc};
 await DB.put('rels',nr);S.rels.push(nr);
 S.rels.sort((a,b)=>a.name.localeCompare(b.name,'ar'));
 closeSheets();toast(name+t('rel_joined'),'var(--c-relations)','users');
 refresh();
}
function openDecSheet(title){
 if(!$('#decTitle'))buildSheets();
 const dt=$('#decTitle');
 if(!dt)return;
 dt.value=title||'';const am=$('#decAmount');if(am)am.value='';
 openSheet('#shDec');
 if(!title)setTimeout(()=>{try{dt.focus()}catch(e){}},420);
}
async function saveDec(){
 const dt=$('#decTitle');if(!dt)return;
 const title=dt.value.trim();
 if(!title){toast(t('dec_need'),'var(--acc)','dec');return}
 const onC=$('#decKinds .pick-card.on');
 const kind=onC?onC.dataset.dk:'buy';
 const amEl=$('#decAmount');const am=amEl?amEl.value.trim():'';
 const d={id:uid(),title:title,kind:kind,amount:am,status:'open',ts:Date.now()};
 d.analysis=analyzeDecision(title,kind);
 await DB.put('decisions',d);S.decisions.unshift(d);
 closeSheets();go('decisions');
 requestAnimationFrame(()=>{const f=$('#v-decisions .dec');if(f)f.classList.add('open')});
 toast(t('dec_analyzed'),'var(--acc)','dec');
}
function buildMoreSheet(){
 put('#shMore',
  '<div class="sh-grip"></div><div class="sh-head"><b>'+t('tab_more')+'</b><button class="sh-x" data-close>'+ic('x',15)+'</button></div>'+
  '<div class="more-hi">'+t('more_hi')+esc(S.profile.name||(LANG==='ar'?'بك':'there'))+'</div>'+
  '<div class="more-sub">'+t('more_sub')+'</div>'+
  '<button class="more-item" data-more="life">'+ic('hex',19)+'<span>'+t('m_life')+'</span><small>'+t('m_life_s')+'</small></button>'+
  '<button class="more-item" data-more="cal">'+ic('cal',19)+'<span>'+t('m_cal')+'</span><small>'+t('m_cal_s')+'</small></button>'+
  '<button class="more-item" data-more="twin">'+ic('twin',19)+'<span>'+t('m_twin')+'</span><small>'+t('m_twin_s')+'</small></button>'+
  '<button class="more-item" data-more="relations">'+ic('users',19)+'<span>'+t('m_rel')+'</span><small>'+t('m_rel_s')+'</small></button>'+
  '<button class="more-item" data-more="decisions">'+ic('dec',19)+'<span>'+t('m_dec')+'</span><small>'+t('m_dec_s')+'</small></button>'+
  '<button class="more-item" data-more="report">'+ic('report',19)+'<span>'+t('m_rep')+'</span><small>'+t('m_rep_s')+'</small></button>'+
  '<button class="more-item" data-more="settings">'+ic('gear',19)+'<span>'+t('m_set')+'</span><small>'+t('m_set_s')+'</small></button>'+
  '<div class="more-div"></div>'+
  '<button class="more-item" data-more="export">'+ic('download',19)+'<span>'+t('m_exp')+'</span><small>'+t('m_exp_s')+'</small></button>'+
  '<button class="more-item" data-more="import">'+ic('upload',19)+'<span>'+t('m_imp')+'</span><small>'+t('m_imp_s')+'</small></button>'+
  '<button class="more-item" data-more="wipeDemo">'+ic('spark',19)+'<span>'+t('m_wipe')+'</span><small>'+t('m_wipe_s')+'</small></button>'+
  '<button class="more-item" data-more="wipeAll" style="color:var(--bad)">'+ic('trash',19)+'<span>'+t('m_wipeall')+'</span><small>'+t('m_wipeall_s')+'</small></button>');
}

window.__rfStage='ربط الأفعال';
/* =============== الأفعال =============== */
 $('#views').addEventListener('click',async e=>{
 const b=e.target.closest('[data-act]');if(!b)return;
 const act=b.dataset.act,id=b.dataset.id;
 if(act==='mood'){
  const m=+b.dataset.m,ds=dayStart(Date.now());
  const ex=S.events.find(x=>x.type==='mood'&&x.ts>=ds);
  if(ex){ex.mood=m;ex.polarity=m>=4?1:m<=2?-1:0;await DB.put('events',ex)}
  else{const ev={id:uid(),type:'mood',category:'mind',mood:m,polarity:m>=4?1:m<=2?-1:0,text:LANG==='ar'?'مزاج اليوم':'Mood of the day',ts:Date.now()};await DB.put('events',ev);S.events.push(ev)}
  toast(t('mood_toast')+mw(m)+t('mood_fx'),'var(--c-mind)','brain');
  refresh();
 }
 else if(act==='a2hs'){S.settings.a2hsDone=true;saveMeta();refresh()}
 else if(act==='goLife')go('life');
 else if(act==='openEvent')openEventSheet();
 else if(act==='recGo'){const r=S.recs[+b.dataset.i];if(!r)return;
  if(r.id.indexOf('rel:')===0)recordContact(r.id.slice(4));
  else if(r.id.indexOf('rem:')===0){S.reminders=S.reminders.filter(x=>'rem:'+x.id!==r.id);await saveMeta();dismissed.add(r.id);toast(t('rec_rem_done'),'var(--good)','check');refresh()}
  else if(r.id.indexOf('habit:')===0){const map={health:[LANG==='ar'?'مارست رياضة':'Worked out','health'],save:[LANG==='ar'?'ادّخرت مبلغاً هذا الأسبوع':'Saved an amount this week','money'],read:[LANG==='ar'?'قرأت صفحات من كتاب':'Read pages of a book','growth']};const v2=map[r.id.split(':')[1]]||[LANG==='ar'?'سجلت عادة إيجابية':'Logged a positive habit','growth'];openEventSheet(v2[0],v2[1])}
  else if(r.id.indexOf('good:')===0)go('life');
  else openEventSheet();
 }
 else if(act==='recOff'){const r=S.recs[+b.dataset.i];if(r){dismissed.add(r.id);refresh()}}
 else if(act==='contact')recordContact(id);
 else if(act==='delRel'){const r=S.rels.find(x=>x.id===id);askConfirm(t('rel_del_t')+(r?r.name:''),t('rel_del_p'),t('del'),async()=>{await DB.del('rels',id);S.rels=S.rels.filter(x=>x.id!==id);refresh();toast(t('rel_deleted'),'var(--ink3)','trash')})}
 else if(act==='relAdd')openSheet('#shRel');
 else if(act==='decToggle'){const dec=b.closest('.dec');if(dec)dec.classList.toggle('open')}
 else if(act==='decDone'){const d=S.decisions.find(x=>x.id===id);if(d){d.status='done';await DB.put('decisions',d);toast(t('dec_done_t'),'var(--good)','check');refresh()}}
 else if(act==='decDel'){askConfirm(t('dec_arch_t'),t('dec_arch_p'),t('del'),async()=>{await DB.del('decisions',id);S.decisions=S.decisions.filter(x=>x.id!==id);refresh()})}
 else if(act==='openDec')openDecSheet();
 else if(act==='week'){reportWeek=+b.dataset.w;renderReport()}
 else if(act==='waReport')shareWa(weeklyWaText());
 else if(act==='waTwin')shareWa(twinWaText());
 else if(act==='calDay')openDaySheet(+b.dataset.ts);
 else if(act==='calToday'){const n=new Date();calY=n.getFullYear();calM=n.getMonth();renderCal()}
 else if(act==='calPrev'){calM--;if(calM<0){calM=11;calY--}renderCal()}
 else if(act==='calNext'){calM++;if(calM>11){calM=0;calY++}renderCal()}
});
 $('#tabbar').addEventListener('click',e=>{
 if(e.target.closest('#fabAdd')){openEventSheet();return}
 const el=e.target.closest('.tab');if(!el)return;
 if(el.dataset.tab==='more'){buildMoreSheet();openSheet('#shMore');return}
 go(el.dataset.tab);
});
 $('#shMore').addEventListener('click',async e=>{
 if(e.target.closest('[data-close]')){closeSheets();return}
 const it=e.target.closest('[data-more]');if(!it)return;
 const m=it.dataset.more;
 closeSheets();
 if(['life','cal','twin','relations','decisions','report','settings'].indexOf(m)>=0)setTimeout(()=>go(m),60);
 else if(m==='export')setTimeout(exportBackup,150);
 else if(m==='import')setTimeout(()=>$('#importFile').click(),150);
 else if(m==='wipeDemo')setTimeout(()=>askConfirm(t('wipe_t'),t('wipe_p'),t('del'),wipeDemo),150);
 else if(m==='wipeAll')setTimeout(()=>askConfirm(t('wipeall_t'),t('wipeall_p'),t('del'),wipeAll),150);
});
document.addEventListener('click',e=>{
 if(e.target.closest('[data-close]')){closeSheets();return}
 if(e.target.closest('#lightbox')||e.target.closest('[data-lb-close]')){const lb=$('#lightbox');if(lb)lb.classList.remove('show');return}
 const th=e.target.closest('[data-att]');
 if(th){const parts=th.dataset.att.split(':');const scope=parts[0],idx=+parts[1];let src=null;
  if(scope==='tmp')src=evAttsTemp[idx];
  else{const ev=S.events.find(x=>x.id===scope);if(ev&&ev.att)src=ev.att[idx]}
  const lb=$('#lightbox'),img=$('#lbImg');
  if(src&&lb&&img){img.src=src;lb.classList.add('show')}}
});
async function recordContact(id){
 const r=S.rels.find(x=>x.id===id);if(!r)return;
 r.lastContact=Date.now();await DB.put('rels',r);
 const ev={id:uid(),type:'contact',category:'relations',polarity:1,text:(LANG==='ar'?'تواصلت مع ':'Contacted ')+r.name,ts:Date.now()};
 await DB.put('events',ev);S.events.push(ev);
 dismissed.add('rel:'+id);
 toast(t('contact_toast')+r.name+t('contact_toast2'),'var(--c-relations)','phone');
 refresh();
}
async function exportBackup(){
 const data={app:'rafiq',version:3,exportedAt:new Date().toISOString(),
  events:S.events,rels:S.rels,decisions:S.decisions,chat:S.chat,
  meta:{profile:S.profile,reminders:S.reminders,seeded:S.seeded,settings:S.settings}};
 const txt=JSON.stringify(data,null,2);
 try{
  const file=new File([txt],'rafiq-backup.json',{type:'application/json'});
  if(navigator.canShare&&navigator.canShare({files:[file]})){
   await navigator.share({files:[file],title:'rafiq-backup.json'});
   toast(t('exp_share'),'var(--good)','download');return;
  }
 }catch(err){if(err&&err.name==='AbortError')return}
 const blob=new Blob([txt],{type:'application/json'});
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='rafiq-backup.json';
 document.body.appendChild(a);a.click();
 setTimeout(()=>{if(a.parentNode)a.parentNode.removeChild(a);URL.revokeObjectURL(a.href)},4000);
 toast(t('exp_ok'),'var(--good)','download');
}
 $('#importFile').addEventListener('change',async e=>{
 const f=e.target.files[0];if(!f)return;
 try{
  const data=JSON.parse(await fileToText(f));
  if(!data.app||!Array.isArray(data.events))throw new Error('bad');
  const sts=['events','rels','decisions','chat'];
  for(let i=0;i<sts.length;i++)await DB.clear(sts[i]);
  for(const ev of data.events)await DB.put('events',ev);
  for(const r of (data.rels||[]))await DB.put('rels',r);
  for(const d of (data.decisions||[]))await DB.put('decisions',d);
  for(const c of (data.chat||[]))await DB.put('chat',c);
  if(data.meta)await DB.put('meta',{key:'main',profile:data.meta.profile||{},reminders:data.meta.reminders||[],seeded:data.meta.seeded,settings:data.meta.settings});
  S.settings=Object.assign({lang:'ar',theme:'dark',accent:'amber',toggles:{rel:true,habits:true},a2hsDone:false},(data.meta&&data.meta.settings)||{});
  if(!S.settings.toggles)S.settings.toggles={rel:true,habits:true};
  LANG=S.settings.lang||'ar';
  applyLang();applyTheme();
  await loadAll();buildShell();refresh();
  toast(t('imp_ok'),'var(--good)','upload');
 }catch(err){toast(t('imp_err'),'var(--bad)','x')}
 e.target.value='';
});
async function wipeDemo(){
 const sts=['events','rels','decisions','chat'];
 for(let i=0;i<sts.length;i++){
  const all=await DB.all(sts[i]);
  for(const o of all)if(o.seed)await DB.del(sts[i],o.id);
 }
 await loadAll();refresh();
 toast(t('wipe_ok'),'var(--acc)','spark');
}
async function wipeAll(){
 const sts=['events','rels','decisions','chat','meta'];
 for(let i=0;i<sts.length;i++)await DB.clear(sts[i]);
 location.reload();
}

/* =============== التشغيل =============== */
window.__rfStage='فتح قاعدة البيانات';
(async function init(){
 try{
  await DB.open();
  window.__rfStage='قراءة البيانات المحفوظة';
  let m=null;
  try{m=(await DB.all('meta')).find(x=>x.key==='main')}catch(e){}
  S.settings=Object.assign({lang:'ar',theme:'dark',accent:'amber',toggles:{rel:true,habits:true},a2hsDone:false},(m&&m.settings)||{});
  if(!S.settings.toggles)S.settings.toggles={rel:true,habits:true};
  LANG=S.settings.lang||'ar';
  applyLang();applyTheme();
  window.__rfStage='بناء الشاشات';
  buildShell();
  if(m&&m.profile){
   S.profile=Object.assign(S.profile,m.profile||{});
   S.reminders=(m&&m.reminders)||[];
   await loadAll();computeAll();renderDot();enterApp(false);
  }else renderOb();
  if(DB.driver==='mem')setTimeout(()=>toast(t('storage_warn'),'var(--bad)','shield'),1600);
  else if(DB.driver==='ls')setTimeout(()=>toast(t('storage_ls'),'var(--acc)','shield'),1600);
 }catch(err){__rfErr((err&&err.message||err)+' @init')}
})();
function enterApp(seeded){
 killSplash();
 const ob=$('#ob');if(ob)ob.style.display='none';
 const app=$('#app');if(app)app.hidden=false;
 computeAll();renderDot();go('home');
 if(seeded)setTimeout(()=>toast(t('seed_ready')+(S.profile.name||'')+t('seed_ready2'),'var(--acc)','spark'),600);
}
window.__rfBooted=true;
</script>
</body>
</html>
