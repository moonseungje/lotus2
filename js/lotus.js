$(document).ready(function(){
	/*
	//왼쪽메뉴 호버
	$("nav li").hover(function(){
		$(this).children("nav").stop().slideDown();
	} , function(){
			$(this).children("nav").stop().slideUp();
	}); */
	
	//왼쪽 하위 메뉴
	$("#left li>a").on("mouseenter click"   ,  function(){     //"#left li>a"에 마우스를대거나 클릭,엔터 하거나 둘 모두 적용
		$("#left li>nav").stop().slideUp();
		$(this).next().stop().slideDown();   //"#left li>a"의 바로 아래형제가 slideDown 됌
	});
			
	//메뉴영역에서 마우스가 멀어질때
	$("#left>nav").mouseleave(function(){  //"#left li>a" 로 하면 하위메뉴를 선택할 수 가 없음 
		$("#left li>nav").stop().slideUp();
	});
				
	//왼쪽메뉴 마지막 하위메뉴가 포커스를 잃을때
	$(".last").blur(function(){
		$("#left li>nav").stop().slideUp();
	});
				
	//페이드 슬라이드 (자동,반복)
	const fade = setInterval(fading, 2800);
	let i = 3;			//항목의 개수 , 재할당을 하기위해 const는 쓰면안됌
								
	function fading(){
		i--;   //재할당
		if(i == 0){   //i가 0이된다면
			$("#slide a").stop().fadeIn();
			i = 3;   //재할당
		} else {
			$("#slide a").eq(i).stop().fadeOut();  //index 번호2 가 서서히 사라진다.
		}
	}
				
	/*	const x = ["딸기", "바나나", "수박", "키위", "파인애플"];  //배열 (Array)
		console.log( x[1] );  //x변수는 배열이다. 배열의 index번호 1 에는 바나나가 있다.  0부터시작 
		console.log( x.length );	//x변수 배열의 길이는 5이다.	*/
			
	//공지사항의 첫번째 글을 클릭하면 팝업이 나타남
	$(".pop").click(function(){
		$("#popup").fadeIn();
		$("#popup button").focus();    //닫기버튼이 선택됌
	});
				
	//팝업의 닫기 버튼을 누르면 팝업이 사라짐
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
			
});