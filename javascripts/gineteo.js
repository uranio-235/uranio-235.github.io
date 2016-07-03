//  _includes/head.html
//  <script src="{{ root_url }}/javascripts/gineteo.js"></script>
$.ready(

   // iteramos por cada post para ponerle un valor distinto
	$('#cantidadbtc').each(function(indice,elspan){
      
      var btc=0;	// calcula un monto de bitcoins al azaar dentro del rango dado
      while (btc<0.010 || btc>0.019 ) { var btc=(Math.random()/10).toString().slice(0,5); }

      // métele el valor
      elspan.textContent=btc

   })

)
