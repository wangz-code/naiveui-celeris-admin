import{d as e,bO as t,c as a,a8 as o,bS as r,o as s,e as n,w as i,f as d,g as u,bP as c,j as l,B as p}from"./index-MskScSmw.js";import{_ as m}from"./Space-EbjOeIIa.js";import{_ as f}from"./Result-iUrwMRuV.js";import"./get-slot-BjAOOWF7.js";var y=(e=>(e[e.Processing=102]="Processing",e[e.OK=200]="OK",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.RequestTimeout=408]="RequestTimeout",e[e.InternalServerError=500]="InternalServerError",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e))(y||{});const v=e({__name:"Exception",props:{status:{default:y.NotFound},title:{},description:{}},setup(e){const y=e,v=t(),P=a(""),R=a("error");return o((()=>{try{R.value=(e=y.status)>=500||e>=400?"error":e>=300?"warning":e>=200?"success":"info",(e=>{console.log("status log==>",e)})(y.status)}catch(t){P.value=`${y.status} ${r(t)}`}var e})),(e,t)=>{const a=p,o=m,r=f;return s(),n(r,{class:"p-4",status:u(R),title:u(P),description:e.description,size:"large"},{footer:i((()=>[d(o,{justify:"center"},{default:i((()=>[d(a,{type:"primary",onClick:t[0]||(t[0]=e=>u(v).push(u(c).BASE_HOME))},{default:i((()=>t[2]||(t[2]=[l(" 返回主页 ")]))),_:1}),d(a,{onClick:t[1]||(t[1]=e=>u(v).back())},{default:i((()=>t[3]||(t[3]=[l(" 返回上一级 ")]))),_:1})])),_:1})])),_:1},8,["status","title","description"])}}});export{v as default};