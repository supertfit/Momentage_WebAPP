$(document).ready( function(){
	$("#loadingContainer").fadeIn();
	$.ajax({
	    url: "http://momentage-api-staging.herokuapp.com/v1/moments/featured",
	    dataType: "json",
	    success: function( response ) {
	        console.log( response.moments.length );
        	for( i = 0; i < response.moments.length; i ++ ){
        		var obj = response.moments[i];
        		var objClone = $("#cloneImageItem").clone();
        		$(objClone).show();
        		$(objClone).attr("id","imageItem");
        		$(objClone).find("#itemImg").attr("src", obj.moment_items[0].small_url);
        		$(objClone).find("#itemTitle").text( obj.title );
        		$(objClone).find("#itemLikesCnt").text( obj.likes_count );
        		$(objClone).find("#itemCommentsCnt").text( obj.comments_count );
        		$(objClone).find("#itemImgA").attr("href", obj.moment_items[0].large_url);
        		$(objClone).find("#itemImgA").attr("title", obj.description);
        		$(objClone).find("#itemDetail").attr("href", obj.url);
        		
        		$("#imageList").append( objClone );
        		$("#imgTopArea").find("img#imgTop").eq(i).attr("src", obj.moment_items[0].small_url );
        	}
        	$("#loadingContainer").fadeOut();
        	$("#imageList").show();
        	$("#profileInfo").show();
        	
        	$("#imgTopArea").fadeIn();
        	
        	$(".fancybox").fancybox({
        		openEffect	: 'none',
        		closeEffect	: 'none'
        	});
	    }
	});
	return;
	$.ajax({
        url: "async-getFeedData.php",
        dataType : "json",
        type : "POST",
        success : function(data){
            if(data.result == "success"){
            	for( i = 0; i < data.resultList.length; i ++ ){
            		var objClone = $("#cloneImageItem").clone();
            		$(objClone).show();
            		$(objClone).attr("id","imageItem");
            		$(objClone).find("#itemImg").attr("src", data.resultList[i].smallImage);
            		$(objClone).find("#itemTitle").text( data.resultList[i].title );
            		$(objClone).find("#itemLikesCnt").text( data.resultList[i].likesCnt );
            		$(objClone).find("#itemCommentsCnt").text( data.resultList[i].commentsCnt );
            		$(objClone).find("#itemImgA").attr("href", data.resultList[i].largeImage);
            		$(objClone).find("#itemImgA").attr("title", data.resultList[i].description);
            		$(objClone).find("#itemDetail").attr("href", data.resultList[i].url);
            		
            		$("#imageList").append( objClone );
            		$("#imgTopArea").find("img#imgTop").eq(i).attr("src", data.resultList[i].smallImage );
            	}
            	$("#loadingContainer").fadeOut();
            	$("#imageList").show();
            	$("#profileInfo").show();
            	
            	$("#imgTopArea").fadeIn();
            	
            	$(".fancybox").fancybox({
            		openEffect	: 'none',
            		closeEffect	: 'none'
            	});
            }
        }
    });	
});

function onPreview( obj ){
	$(obj).parents("#imageItem").eq(0).find("#itemImgA").click();
}