$(document).ready(function(){


	if (document.location.hash.replace(/#/,'')){
		$.ajax({
			url: "text/menu.txt",
			success: function(a) {a=a.split(/\n/)
				for(i in a) {
					if(a[i]!=''){
						{ii=a[i].split(" ")
						if (document.location.hash.match(ii[0])){
							$(".maintext").append("<section class=id"+ii[0]+" id='main-content'><h1 class='flip'><a name='"+ii[0]+"' class='anchor' href='#"+ii[0]+"'><span>"+ii[2]+"</span></a></h1><inner></inner></section>")
							$(".id"+ii[0]).slideUp(0)
							$.ajax({
								url:"text/"+ii[1],
								spanid:ii[0],
								success:function(data){
									$(".id"+this.spanid).children('inner').append(data) 
									$(".id"+this.spanid).slideDown(200)
								}})

						}}}   }}

					})}
		else{
			$.ajax({
				url: "text/menu.txt",
				success: function(a) {a=a.split(/\n/)
					for(i in a) {
						if(a[i]!=''){
							{ii=a[i].split(" ")
							$(".maintext").append("<section class=id"+ii[0]+" id='main-content'><h1 class='flip'><a name='"+ii[0]+"' class='anchor' href='#"+ii[0]+"'><span>"+ii[2]+"</span></a></h1><inner></inner></section>")
							$(".id"+ii[0]).slideUp(0)
							$.ajax({
								url:"text/"+ii[1],
								spanid:ii[0],
								success:function(data){
									$(".id"+this.spanid).children('inner').append(data) 
									$(".id"+this.spanid).slideDown(200)
								}})

						}   }


					}}})

		}







	});
