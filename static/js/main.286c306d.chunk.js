(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(11),c=a.n(n),o=(a(19),a(2)),s=a(3),m=a(6),i=a(4),u=a(7),d=a(9),E=a.n(d),p=a(1),h=a(12),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={total_num_creditos:0,total_nota_creditos:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"aproximarDecimales",value:function(e){return+(Math.round(e+"e+2")+"e-2")}},{key:"render",value:function(){var e=this,t=this.props.items,a=this.props.items.reduce(function(e,t){return e+t.creditos},0),r=this.props.items.reduce(function(e,t){return e+t.nota_creditos},0);return l.a.createElement("div",{className:"card",id:"Table"},l.a.createElement("table",{className:"table table-bordered table-responsive"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Cursos"),l.a.createElement("th",null,"Corte 1"),l.a.createElement("th",null,"Corte 1(%)"),l.a.createElement("th",null,"Corte 2"),l.a.createElement("th",null,"Corte 2(%)"),l.a.createElement("th",null,"Corte 3"),l.a.createElement("th",null,"Corte 3(%)"),l.a.createElement("th",null,"Cr\xe9ditos"),l.a.createElement("th",null,"Nota del curso"),l.a.createElement("th",null,"Nota x Cr\xe9ditos")),t.map(function(t){return l.a.createElement("tr",{key:t.key},l.a.createElement("td",null,t.materia),l.a.createElement("td",null,t.nota1),l.a.createElement("td",null,e.aproximarDecimales(t.nota1p)),l.a.createElement("td",null,t.nota2),l.a.createElement("td",null,e.aproximarDecimales(t.nota2p)),l.a.createElement("td",null,t.nota3),l.a.createElement("td",null,e.aproximarDecimales(t.nota3p)),l.a.createElement("td",null,t.creditos),l.a.createElement("td",null,e.aproximarDecimales(t.nota_curso)),l.a.createElement("td",null,e.aproximarDecimales(t.nota_creditos)))})),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null,a),l.a.createElement("th",null),l.a.createElement("th",null,this.aproximarDecimales(r))),l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null,"PPP"),l.a.createElement("th",null,this.aproximarDecimales(r/a))))))}}]),t}(l.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).MateriaRef=l.a.createRef(),a.NotaCorte1Ref=l.a.createRef(),a.NotaCorte2Ref=l.a.createRef(),a.NotaCorte3Ref=l.a.createRef(),a.CreditosRef=l.a.createRef(),a.mostrarResultadoPPP=function(){if(0===a.state.items.length)return null;a.state.items;return l.a.createElement("div",null,l.a.createElement("h3",{className:"text-center alert alert-info"},"El promedio ponderado del semestre (PPP) es el siguiente:",l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",{className:""},a.state.materia))),l.a.createElement(f,{items:a.state.items}))},a.state={materia:0,nota1:0,nota2:0,nota3:0,creditos:0,key:0,items:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calcularPPP",value:function(e){e.preventDefault();var t=this.state.key,a=this.MateriaRef.current.value,r=parseFloat(this.NotaCorte1Ref.current.value),l=parseFloat(this.NotaCorte2Ref.current.value),n=parseFloat(this.NotaCorte3Ref.current.value),c=parseInt(this.CreditosRef.current.value),o=Object(h.a)(this.state.items);return o.push({key:t,materia:a,nota1:r,nota1p:.3*r,nota2:l,nota2p:.35*l,nota3:n,nota3p:.35*n,creditos:c,nota_curso:.3*r+.35*l+.35*n,nota_creditos:c*(.3*r+.35*l+.35*n)}),this.setState({items:o,key:this.state.key+1,materia:"",nota1:0,nota1p:0,nota2:0,nota2p:0,nota3:0,nota3p:0,creditos:0,nota_curso:0,nota_creditos:0}),this.state.key+=1,e.target.reset(),this.state.items}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-center"},"\xbfCu\xe1nto es mi promedio ponderado del periodo?"),l.a.createElement("small",null,"Esta herramienta corresponde a un ejercicio de simulaci\xf3n, por lo que el resultado es un estimado que puede variar respecto al promedio/nota reflejado en Banner."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.calcularPPP.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Materia",className:"text-secondary"},"Nombre del curso"),l.a.createElement("input",{className:"form-control",type:"text",step:".01",name:"Materia",placeholder:"Digite el nombre del curso",ref:this.MateriaRef,required:"required"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"NotaCorte1",className:"text-secondary"},"Nota 1er Corte"),l.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"NotaCorte1",placeholder:"Digita la nota del primer corte",ref:this.NotaCorte1Ref,required:"required",min:"0",max:"5"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"NotaCorte2",className:"text-secondary"},"Nota 2do Corte"),l.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"NotaCorte2",placeholder:"Digita la nota del segundo corte",ref:this.NotaCorte2Ref,required:"required",min:"0",max:"5"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"NotaCorte3",className:"text-secondary"},"Nota 3er Corte"),l.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"NotaCorte3",placeholder:"Digita la nota del tercer corte",ref:this.NotaCorte3Ref,required:"required",min:"0",max:"5"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Creditos",className:"text-secondary"},"Cr\xe9ditos"),l.a.createElement("input",{className:"form-control",type:"number",step:"1",name:"Creditos",placeholder:"Digita los cr\xe9ditos del curso",ref:this.CreditosRef,required:"required",min:"0"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("input",{type:"submit",value:"Calcular PPP",className:"btn btn-success mr-2"}),l.a.createElement("a",{href:"/calculadora3ernota/",className:"btn btn-info"},"Reiniciar"))))),l.a.createElement("div",{className:"mt-2"},this.mostrarResultadoPPP()))}}]),t}(l.a.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).CCRef=l.a.createRef(),a.PCRef=l.a.createRef(),a.CSRef=l.a.createRef(),a.mostrarResultado=function(){return 0===a.state.nota4?null:l.a.createElement("h3",{className:"text-center alert alert-info"},"PPS requerido para superar PA y RA:",l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",{className:""},a.state.nota4)))},a.state={nota4:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calcularPPS",value:function(e){e.preventDefault();var t=parseInt(this.CCRef.current.value),a=parseInt(this.PCRef.current.value),r=parseInt(this.CSRef.current.value);return this.setState({nota4:(3.2*(t+r)-t*(a/t))/r}),e.target.reset(),this.state.nota4}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-center"},"\xbfCu\xe1l es el promedio ponderado del semestre (PPS) que requieres para superar la condici\xf3n de Prueba Acad\xe9mica (PA) o Recuperaci\xf3n Acad\xe9mica (RA) ?"),l.a.createElement("small",null,"Esta herramienta corresponde a un ejercicio de simulaci\xf3n, por lo que el resultado es un estimado que puede variar respecto al promedio/nota reflejado en Banner."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.calcularPPS.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"CC",className:"text-secondary"},"Cr\xe9ditos Totales Cursados (o Cr\xe9ditos intentados) (CC)"),l.a.createElement("input",{className:"form-control",type:"number",step:"1",name:"CC",placeholder:"Digite los cr\xe9ditos Totales Cursados (o Cr\xe9ditos intentados)",ref:this.CCRef,required:"required",min:"0"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"PC",className:"text-secondary"},"Puntos de calidad para PGA totales (PC)"),l.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"PC",placeholder:"Digita los puntos de calidad para PGA totales",ref:this.PCRef,required:"required",min:"0"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"CS",className:"text-secondary"},"Cr\xe9ditos Matriculados en el Semestre (CS)"),l.a.createElement("input",{className:"form-control",type:"number",step:"1",name:"CS",placeholder:"Digita los cr\xe9ditos Matriculados en el Semestre",ref:this.CSRef,required:"required",min:"0"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("input",{type:"submit",value:"Calcular PPS",className:"btn btn-success mr-2"}),l.a.createElement("a",{href:"/calculadora3ernota/",className:"btn btn-info"},"Reiniciar"))))),l.a.createElement("div",{className:"mt-2"},this.mostrarResultado()))}}]),t}(l.a.Component),C=(a(22),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).nota1Ref=l.a.createRef(),a.nota2Ref=l.a.createRef(),a.mostrarResultado=function(){return 0===a.state.nota3?null:l.a.createElement("h3",{className:"text-center alert alert-info"},"La nota m\xednima requerida para aprobar la asignatura es:",l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("strong",{className:""},a.state.nota3)))},a.state={nota3:0,tabIndex:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calcularNota",value:function(e){e.preventDefault();var t=this.nota1Ref.current.value,a=this.nota2Ref.current.value;return this.setState({nota3:(3-(.3*t+.35*a))/.35}),this.state.nota3}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"row justify-content-center text-white"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("img",{src:E.a,alt:"Logo",className:"img-fluid mb-5"})))),l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"row justify-content-center text-white"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement(p.d,{forceRenderTabPanel:"true",selectedIndex:this.state.tabIndex,onSelect:function(t){return e.setState({tabIndex:t})}},l.a.createElement(p.b,null,l.a.createElement(p.a,null,"Calcunota"),l.a.createElement(p.a,null,"C\xe1lculo para superar PA o RA"),l.a.createElement(p.a,null,"Calcupromedio")),l.a.createElement(p.c,null,l.a.createElement("h2",{className:"text-center"},"\xbfCu\xe1nto debo obtener en el 3er corte para aprobar una asignatura?"),l.a.createElement("small",null,"Esta herramienta corresponde a un ejercicio de simulaci\xf3n, por lo que el resultado es un estimado que puede variar respecto al promedio/nota reflejado en Banner."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.calcularNota.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"nota1",className:"text-secondary"},"Nota 1er Corte"),l.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"nota1",placeholder:"Digita la nota del primer corte",ref:this.nota1Ref,required:"required",min:"0",max:"5"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"nota2",className:"text-secondary"},"Nota 2do Corte"),l.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"nota1",placeholder:"Digita la nota del segundo corte",ref:this.nota2Ref,required:"required",min:"0",max:"5"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("input",{type:"submit",value:"Calcular Nota",className:"btn btn-success mr-2"}),l.a.createElement("a",{href:"/calculadora3ernota/",className:"btn btn-info"},"Reiniciar"))))),l.a.createElement("div",{className:"mt-2"},this.mostrarResultado())),l.a.createElement(p.c,null,l.a.createElement(N,null)),l.a.createElement(p.c,null,l.a.createElement(b,null)))))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/logo.de6fb0dc.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.286c306d.chunk.js.map