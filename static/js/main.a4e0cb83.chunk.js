(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(10),c=a.n(l),o=(a(19),a(2)),s=a(3),m=a(6),i=a(4),u=a(7),d=a(9),h=a.n(d),f=a(1),p=a(12),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={total_num_creditos:0,total_nota_creditos:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"aproximarDecimales",value:function(e){return+(Math.round(e+"e+2")+"e-2")}},{key:"render",value:function(){var e=this,t=this.props.items,a=this.props.items.reduce(function(e,t){return e+t.creditos},0),r=this.props.items.reduce(function(e,t){return e+t.nota_creditos},0);return n.a.createElement("div",{className:"card",id:"Table"},n.a.createElement("table",{className:"table table-bordered table-responsive"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Cursos"),n.a.createElement("th",null,"Corte 1"),n.a.createElement("th",null,"Corte 1(%)"),n.a.createElement("th",null,"Corte 2"),n.a.createElement("th",null,"Corte 2(%)"),n.a.createElement("th",null,"Corte 3"),n.a.createElement("th",null,"Corte 3(%)"),n.a.createElement("th",null,"Cr\xe9ditos"),n.a.createElement("th",null,"Nota del curso"),n.a.createElement("th",null,"Nota x Cr\xe9ditos")),t.map(function(t){return n.a.createElement("tr",{key:t.key},n.a.createElement("td",null,t.materia),n.a.createElement("td",null,t.nota1),n.a.createElement("td",null,e.aproximarDecimales(t.nota1p)),n.a.createElement("td",null,t.nota2),n.a.createElement("td",null,e.aproximarDecimales(t.nota2p)),n.a.createElement("td",null,t.nota3),n.a.createElement("td",null,e.aproximarDecimales(t.nota3p)),n.a.createElement("td",null,t.creditos),n.a.createElement("td",null,e.aproximarDecimales(t.nota_curso)),n.a.createElement("td",null,e.aproximarDecimales(t.nota_creditos)))})),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null,a),n.a.createElement("th",null),n.a.createElement("th",null,this.aproximarDecimales(r))),n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null),n.a.createElement("th",null,"PPS"),n.a.createElement("th",null,this.aproximarDecimales(r/a))))))}}]),t}(n.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).MateriaRef=n.a.createRef(),a.NotaCorte1Ref=n.a.createRef(),a.NotaCorte2Ref=n.a.createRef(),a.NotaCorte3Ref=n.a.createRef(),a.CreditosRef=n.a.createRef(),a.handleOnClick=function(e){a.myRef.current&&a.myRef.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.componentDidMount=function(){return a.handleOnClick()},a.componentDidUpdate=function(){return a.handleOnClick()},a.mostrarResultadoPPP=function(){if(0===a.state.items.length)return null;a.state.items;return n.a.createElement("div",null,n.a.createElement("h3",{className:"text-center alert alert-info"},"Tu promedio ponderado del semestre (PPS) es el siguiente:",n.a.createElement("br",null),n.a.createElement("h2",null,n.a.createElement("strong",{className:""},a.state.materia))),n.a.createElement(E,{items:a.state.items}))},a.state={materia:0,nota1:0,nota2:0,nota3:0,creditos:0,key:0,items:[]},a.myRef=n.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calcularPPP",value:function(e){e.preventDefault();var t=this.state.key,a=this.MateriaRef.current.value,r=parseFloat(this.NotaCorte1Ref.current.value),n=parseFloat(this.NotaCorte2Ref.current.value),l=parseFloat(this.NotaCorte3Ref.current.value),c=parseInt(this.CreditosRef.current.value),o=Object(p.a)(this.state.items);return o.push({key:t,materia:a,nota1:r,nota1p:.3*r,nota2:n,nota2p:.35*n,nota3:l,nota3p:.35*l,creditos:c,nota_curso:.3*r+.35*n+.35*l,nota_creditos:c*(.3*r+.35*n+.35*l)}),this.setState({items:o,key:this.state.key+1,materia:"",nota1:0,nota1p:0,nota2:0,nota2p:0,nota3:0,nota3p:0,creditos:0,nota_curso:0,nota_creditos:0}),this.state.key+=1,e.target.reset(),this.state.items}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",{className:"text-center"},"\xbfC\xf3mo calcular el promedio ponderado del semestre?"),n.a.createElement("small",null,"Ten en cuenta que esta calculadora corresponde a un ejercicio de simulaci\xf3n, por lo que el resultado obtenido puede variar con respecto a los c\xe1lculos de Banner. "),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h4",null,"Digita la informaci\xf3n correspondiente de cada una de las asignaturas que tienes matriculadas en el semestre. Al finalizar podr\xe1s visualizar la tabla con el c\xe1lculo del PPS."),n.a.createElement("br",null),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:this.calcularPPP.bind(this)},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"Materia",className:"text-secondary"},"Nombre del curso"),n.a.createElement("input",{className:"form-control",type:"text",step:".01",name:"Materia",placeholder:"Digite el nombre del curso",ref:this.MateriaRef,required:"required"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"form-group col"},n.a.createElement("label",{htmlFor:"NotaCorte1",className:"text-secondary"},"Nota 1er corte"),n.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"NotaCorte1",placeholder:"Digita la nota del 1er corte",ref:this.NotaCorte1Ref,required:"required",min:"0",max:"5"})),n.a.createElement("div",{className:"form-group col"},n.a.createElement("label",{htmlFor:"NotaCorte2",className:"text-secondary"},"Nota 2do corte"),n.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"NotaCorte2",placeholder:"Digita la nota del 2do corte",ref:this.NotaCorte2Ref,required:"required",min:"0",max:"5"})),n.a.createElement("div",{className:"form-group col"},n.a.createElement("label",{htmlFor:"NotaCorte3",className:"text-secondary"},"Nota 3er corte"),n.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"NotaCorte3",placeholder:"Digita la nota del 3er corte",ref:this.NotaCorte3Ref,required:"required",min:"0",max:"5"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"Creditos",className:"text-secondary"},"N\xfamero de cr\xe9ditos de la asignatura"),n.a.createElement("input",{className:"form-control",type:"number",step:"1",name:"Creditos",placeholder:"Digita los cr\xe9ditos del curso",ref:this.CreditosRef,required:"required",min:"0"})),n.a.createElement("div",{className:"form-group text-center"},n.a.createElement("input",{onClick:this.handleOnClick,type:"submit",value:"Siguiente Asignatura",className:"btn btn-success mr-2"}),n.a.createElement("a",{href:"/calculadora3ernota/",className:"btn btn-info"},"Reiniciar"))))),n.a.createElement("div",{className:"mt-2",ref:this.myRef},this.mostrarResultadoPPP()))}}]),t}(n.a.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).CCRef=n.a.createRef(),a.PCRef=n.a.createRef(),a.CSRef=n.a.createRef(),a.handleOnClick=function(e){a.myRef.current&&a.myRef.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.componentDidMount=function(){return a.handleOnClick()},a.componentDidUpdate=function(){return a.handleOnClick()},a.mostrarResultado=function(){return 0===a.state.nota4?null:n.a.createElement("h3",{className:"text-center alert alert-info"},"PPS requerido para superar PA o RA:",n.a.createElement("br",null),n.a.createElement("h2",null,n.a.createElement("strong",{className:""},a.state.nota4)))},a.state={nota4:0},a.myRef=n.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calcularPPS",value:function(e){e.preventDefault();var t=parseInt(this.CCRef.current.value),a=parseInt(this.PCRef.current.value),r=parseInt(this.CSRef.current.value);return this.setState({nota4:(3.2*(t+r)-t*(a/t))/r}),e.target.reset(),this.state.nota4}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",{className:"text-center"},"\xbfCu\xe1l es el promedio ponderado del semestre (PPS) que requieres para superar la condici\xf3n de Prueba Acad\xe9mica (PA) o Recuperaci\xf3n Acad\xe9mica (RA) ?"),n.a.createElement("small",null,"Ten en cuenta que esta calculadora corresponde a un ejercicio de simulaci\xf3n, por lo que el resultado obtenido puede variar con respecto a los c\xe1lculos de Banner. "),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:this.calcularPPS.bind(this)},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"CC",className:"text-secondary"},"Cr\xe9ditos Totales Cursados (o Cr\xe9ditos intentados) "),n.a.createElement("input",{className:"form-control",type:"number",step:"1",name:"CC",placeholder:"Digite los cr\xe9ditos totales cursados durante toda su carrera (o cr\xe9ditos intentados)",ref:this.CCRef,required:"required",min:"0"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"PC",className:"text-secondary"},"Puntos de calidad para Promedio Ponderado Acumulado (PPA) "),n.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"PC",placeholder:"Digita los puntos de calidad para PPA",ref:this.PCRef,required:"required",min:"0"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"CS",className:"text-secondary"},"Cr\xe9ditos matriculados en el semestre"),n.a.createElement("input",{className:"form-control",type:"number",step:"1",name:"CS",placeholder:"Digita los cr\xe9ditos matriculados en el Semestre",ref:this.CSRef,required:"required",min:"0"})),n.a.createElement("div",{className:"form-group text-center"},n.a.createElement("input",{onClick:this.handleOnClick,type:"submit",value:"Calcular PPS",className:"btn btn-success mr-2"}),n.a.createElement("a",{href:"/calculadora3ernota/",className:"btn btn-info"},"Reiniciar"))))),n.a.createElement("div",{className:"mt-2",ref:this.myRef},this.mostrarResultado()))}}]),t}(n.a.Component),v=(a(22),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).nota1Ref=n.a.createRef(),a.nota2Ref=n.a.createRef(),a.handleOnClick=function(e){a.myRef.current&&a.myRef.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.componentDidMount=function(){return a.handleOnClick()},a.componentDidUpdate=function(){return a.handleOnClick()},a.mostrarResultado=function(){return 0===a.state.nota3?null:n.a.createElement("h3",{className:"text-center alert alert-info"},"La nota m\xednima requerida para aprobar la asignatura es:",n.a.createElement("br",null),n.a.createElement("h2",null,n.a.createElement("strong",{className:""},a.state.nota3)))},a.state={nota3:0,tabIndex:0},a.myRef=n.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calcularNota",value:function(e){e.preventDefault();var t=this.nota1Ref.current.value,a=this.nota2Ref.current.value;return this.setState({nota3:(3-(.3*t+.35*a))/.35}),this.state.nota3}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row justify-content-center text-white"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("img",{src:h.a,alt:"Logo",className:"img-fluid mb-5"})))),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row justify-content-center text-white"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement(f.d,{forceRenderTabPanel:"true",selectedIndex:this.state.tabIndex,onSelect:function(t){return e.setState({tabIndex:t})}},n.a.createElement(f.b,null,n.a.createElement(f.a,null,"Calcunota"),n.a.createElement(f.a,null,"C\xe1lculo para superar PA o RA"),n.a.createElement(f.a,null,"Calcupromedio")),n.a.createElement(f.c,null,n.a.createElement("h2",{className:"text-center"},"\xbfCu\xe1nto debo obtener en el 3er corte para aprobar una asignatura?"),n.a.createElement("small",null,"Ten en cuenta que esta calculadora corresponde a un ejercicio de simulaci\xf3n, por lo que el resultado obtenido puede variar con respecto a los c\xe1lculos de Banner. "),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:this.calcularNota.bind(this)},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"nota1",className:"text-secondary"},"Nota 1er corte"),n.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"nota1",placeholder:"Digita la nota del 1er corte",ref:this.nota1Ref,required:"required",min:"0",max:"5"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"nota2",className:"text-secondary"},"Nota 2do corte"),n.a.createElement("input",{className:"form-control",type:"number",step:".01",name:"nota1",placeholder:"Digita la nota del 2do corte",ref:this.nota2Ref,required:"required",min:"0",max:"5"})),n.a.createElement("div",{className:"form-group text-center"},n.a.createElement("input",{onClick:this.handleOnClick,type:"submit",value:"Calcular Nota",className:"btn btn-success mr-2"}),n.a.createElement("a",{href:"/calculadora3ernota/",className:"btn btn-info"},"Reiniciar"))))),n.a.createElement("div",{className:"mt-2",ref:this.myRef},this.mostrarResultado())),n.a.createElement(f.c,null,n.a.createElement(N,null)),n.a.createElement(f.c,null,n.a.createElement(b,null)))))))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/logo.de6fb0dc.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.a4e0cb83.chunk.js.map