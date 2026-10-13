$(function() {
	 var payWays=$("#payWayss").val();
	 var temp =  payWays.split("&");// 以；拆分成数组｛"","",""｝
	 for(var i=0;i<temp.length;i++){
		 var state=temp[i].split(":");// 以；拆分成数组｛"","",""｝
		 if(state[1]=="1"){
			 var name=state[0];
			if(name=="alipay"){
				$("#aliPay").show();// 支付宝
			}
			if(name=="zhPay"){
				var fromtime = $("#fromtime").val();
				fromtime = fromtime *10;
				var totime = $("#totime").val();
				totime = totime *10;
				var nowtime = generateTimeReqestNumber();
				nowtime = nowtime *10;
				console.log(fromtime+","+totime+","+nowtime);
				if(nowtime<=totime&&fromtime<=nowtime){
					$("#zhPay").show();
				}else{
					alert("不在缴费时间内，无法缴费");
					return;
				}
				// 支付宝
			}
			
			if(name=="ccbpay"){
				$("#ccbPay").show();// 建行
			}
			if(name=="ccbwxpay"){
				$("#ccbwxPay").show();// 建行
			}
			if(name=="abcpay"){
				$("#abcPay").show();// 农行
			}
			if(name=="zwpay"){
				 $("#btnPay").show();//政务
			}
			if(name=="icbcjftpay"){
				 $("#btnJftPay").show();//政务
			}
			if(name=="ccbPosPay"){
				 $("#ccbPosPay").show();//政务
			}
		 }
	 }
	 
	 function pad2(n) { return n < 10 ? '0' + n : n };
	 
	function generateTimeReqestNumber() {
	    var date = new Date();
	    return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate());
	}
	 function getContextPaths() {
	        var pathName = document.location.pathname;
	        var index = pathName.substr(1).indexOf("/");
	        var result = pathName.substr(0,index+1);
	        return result;
	     }
	 var paths = getContextPaths();
	
	  $("#btnPay").click(function() {
			pay(); // 调用登录按钮的登录事件
	  });
	  $("#aliPay").click(function() {
			pay1(); // 调用登录按钮的登录事件
	  });
	  $("#ccbPay").click(function() {
			pay2(); // 调用登录按钮的登录事件
	  });
	  $("#abcPay").click(function() {
		  payAbc(); // 调用登录按钮的登录事件
	  });
	  $("#ccbwxPay").click(function() {
		  ccbwxPay(); // 调用登录按钮的登录事件
	  });
	   $("#zhPay").click(function() {
		  zhPay(); // 调用登录按钮的登录事件
	  });
	   $("#btnJftPay").click(function() {
		  btnJftPay(); // 调用登录按钮的登录事件
	  });
	   $("#ccbPosPay").click(function() {
		  ccbPosPay(); // 调用登录按钮的登录事件
	  });
	$("#btnHzPay").click(function() {
		  btnHzPay(); // 调用登录按钮的登录事件
	  });
	  $("#updateCard").click(function() {
		  var pwd = prompt("请输入身份证后六位", ""); 
			 
			var stuId = $("#studentID").val();
			var data = {
					 method : "checkPwd",
					 stuId : stuId,
//					 year : year,
					 idPwd : pwd
			};
			$.post("bankUpdate", data, function(msg) {
				if (msg.toString().indexOf('error:badStudentIdOrStudentName') == 0) {
					$("#idPwd").val("");
		    	    $.alert("密码有误");
		    	    return;
		    	}else if(msg.toString().indexOf('error:badPwd') == 0){
		    		$("#idPwd").val("");
		    		$.alert("密码长度不足6位");
			    	return;
		    	}else if(msg.toString().indexOf('success') == 0){
		    		window.location.href = paths + "/view/mobile/updateLgBankInfo.jsp";
		    	}
	  });
	})
	   function btnHzPay(){
			
			var oweTuitionFee = $('#oweTuitionFee').val();
			var oweQuarterFee = $('#oweQuarterFee').val();
			var oweExperimentFee = $('#oweExperimentFee').val();
			var oweTeachMaterialFee = $('#oweTeachMaterialFee').val();
			var oweOtherFee1 = $('#oweOtherFee1').val();
			var oweOtherFee2 = $('#oweOtherFee2').val();
			var oweOtherFee3 = $('#oweOtherFee3').val();
			var oweOtherFee4 = $('#oweOtherFee4').val();
			
			var realtuitionFee = $("#tuitionFee").val();
			var realquarterFee = $("#quarterFee").val();
			var realexperimentFee = $("#experimentFee").val();
			var realteachMaterialFee = $("#teachMaterialFee").val();
			var realotherFee1 = $("#otherFee1").val();
			var realotherFee2 = $("#otherFee2").val();
			var realotherFee3 = $("#otherFee3").val();
			var realotherFee4 = $("#otherFee4").val();
			var path = getContextPath();
		    function getContextPath() {
		        var pathName = document.location.pathname;
		        var index = pathName.substr(1).indexOf("/");
		        var result = pathName.substr(0,index+1);
		        return result;
		     }
    		 /*
			if(oweTuitionFee>realtuitionFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/order.jsp";
				return;
			}
			if(oweQuarterFee>realquarterFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/order.jsp";
				return;
			}
			if(oweExperimentFee>realexperimentFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/order.jsp";
				return;
			}
			if(oweTeachMaterialFee>realteachMaterialFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/order.jsp";
				return;
			}
			if(oweOtherFee1>realotherFee1){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/order.jsp";
				return;
			}
			if(oweOtherFee2>realotherFee2){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/order.jsp";
				return;
			}
			if(oweOtherFee3>realotherFee3){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/order.jsp";
				return;
			}
			if(oweOtherFee4>realotherFee4){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/order.jsp";
				return;
			}*/
			
//			var payFee = oweTuitionFee+oweQuarterFee+oweExperimentFee+oweTeachMaterialFee+oweOtherFee1+oweOtherFee2+oweOtherFee3+oweOtherFee4;
			var payFee = Number(oweTuitionFee)+Number(oweQuarterFee)+Number(oweExperimentFee)+Number(oweTeachMaterialFee)+Number(oweOtherFee1)
			  +Number(oweOtherFee2)+Number(oweOtherFee3)+Number(oweOtherFee4);
			var chargeYear = $("#chargeYear").val();
			var studentID = $("#studentID").val();
			var studentName = $("#studentName").val();
			
			 var data = {
					 method : "pay",
					 RecTuitionFee : oweTuitionFee,
					 RecQuarterFee : oweQuarterFee,
					 RecExperimentFee : oweExperimentFee,
					 RecTeachMaterialFee : oweTeachMaterialFee,
					 RecOtherFee1 : oweOtherFee1,
					 RecOtherFee2 : oweOtherFee2,
					 RecOtherFee3 : oweOtherFee3,
					 RecOtherFee4 : oweOtherFee4,
					 OccurAmt : payFee,
					 BankID : '010',
					 StudentID : studentID,
					 StudentName : studentName,
					 ChargeYear : chargeYear
			};
			 
			$.post("hzBankPayNew", data, function(msg) {
		    	// 如果登录失败 msg=error:errorCode:errorMessage
		    	if (msg.toString().indexOf('error') == 0) {
		    	    $.alert("系统错误请联系管理员");
		    	    return;
		    	} else {
		    			window.location.href = msg;
		    	}
			 });
			 
			
			
	  }
	  function pay(){
			
			var oweTuitionFee = $('#oweTuitionFee').val();
			var oweQuarterFee = $('#oweQuarterFee').val();
			var oweExperimentFee = $('#oweExperimentFee').val();
			var oweTeachMaterialFee = $('#oweTeachMaterialFee').val();
			var oweOtherFee1 = $('#oweOtherFee1').val();
			var oweOtherFee2 = $('#oweOtherFee2').val();
			var oweOtherFee3 = $('#oweOtherFee3').val();
			var oweOtherFee4 = $('#oweOtherFee4').val();
			var phone = $("#mobilePhone").val();
//			var payFee = oweTuitionFee+oweQuarterFee+oweExperimentFee+oweTeachMaterialFee+oweOtherFee1+oweOtherFee2+oweOtherFee3+oweOtherFee4;
			var payFee = Number(oweTuitionFee)+Number(oweQuarterFee)+Number(oweExperimentFee)+Number(oweTeachMaterialFee)+Number(oweOtherFee1)
			  +Number(oweOtherFee2)+Number(oweOtherFee3)+Number(oweOtherFee4);
			var chargeYear = $("#chargeYear").val();
			var studentID = $("#studentID").val();
			var studentName = $("#studentName").val();
			
			var feeFlag = $("#feeFlag").val();
			var kpName = $("#kpName").val().trim();
			var duty = $("#duty").val().trim();
			if(feeFlag=="qy"){
				if(kpName==null||kpName==""){
					alert("开票名称不能为空");
					return;
				}
				if(duty==null||duty==""){
					alert("企业开票，税号不能为空");
					return;
				}
			}
			
			if(phone.length>20){
				alert("手机号不要超过20位");
				return;
			}
			 var data = {
					 method : "pay",
					 RecTuitionFee : oweTuitionFee,
					 RecQuarterFee : oweQuarterFee,
					 RecExperimentFee : oweExperimentFee,
					 RecTeachMaterialFee : oweTeachMaterialFee,
					 RecOtherFee1 : oweOtherFee1,
					 RecOtherFee2 : oweOtherFee2,
					 RecOtherFee3 : oweOtherFee3,
					 RecOtherFee4 : oweOtherFee4,
					 MobilePhone : phone,
					 OccurAmt : payFee,
					 BankID : '200',
					 StudentID : studentID,
					 StudentName : studentName,
					 kpName : kpName,
					 feeFlag :feeFlag,
					 duty :duty,
					 ChargeYear : chargeYear
			};
			 
			 $.post("mobileNew", data, function(msg) {
		    	// 如果登录失败 msg=error:errorCode:errorMessage
		    	if (msg.toString().indexOf('error') == 0) {
		    	    $('.err').html(msg.replace(/.*:/, ''));
		    	    var errMsg = msg.replace(/.*error:/, '');
		    	    $.alert(errMsg);
		    	    return;
		    	}else if(msg.toString().indexOf('warn') == 0){
		    		
		    		var path = getContextPath();
	    		    function getContextPath() {
	    		        var pathName = document.location.pathname;
	    		        var index = pathName.substr(1).indexOf("/");
	    		        var result = pathName.substr(0,index+1);
	    		        return result;
	    		     }
	    		     $.alert("金额有误请确认");
	    		     //正常
		    		 window.location.href = path + "/view/mobile/orderNew.jsp";
		    		 
		    	} else {
		    			window.location.href = msg;
		    	}
			 });
			 
			 /*$.post("alipayMobile", data, function(msg) {
				 document.write(msg);
			     document.close();
			 });*/
	  }
	  
	  function ccbPosPay(){
			
			var oweTuitionFee = $('#oweTuitionFee').val();
			var oweQuarterFee = $('#oweQuarterFee').val();
			var oweExperimentFee = $('#oweExperimentFee').val();
			var oweTeachMaterialFee = $('#oweTeachMaterialFee').val();
			var oweOtherFee1 = $('#oweOtherFee1').val();
			var oweOtherFee2 = $('#oweOtherFee2').val();
			var oweOtherFee3 = $('#oweOtherFee3').val();
			var oweOtherFee4 = $('#oweOtherFee4').val();
			var phone = $("#mobilePhone").val();
//			var payFee = oweTuitionFee+oweQuarterFee+oweExperimentFee+oweTeachMaterialFee+oweOtherFee1+oweOtherFee2+oweOtherFee3+oweOtherFee4;
			var payFee = Number(oweTuitionFee)+Number(oweQuarterFee)+Number(oweExperimentFee)+Number(oweTeachMaterialFee)+Number(oweOtherFee1)
			  +Number(oweOtherFee2)+Number(oweOtherFee3)+Number(oweOtherFee4);
			var chargeYear = $("#chargeYear").val();
			var studentID = $("#studentID").val();
			var studentName = $("#studentName").val();
			
			/*var feeFlag = $("#feeFlag").val();
			var kpName = $("#kpName").val().trim();
			var duty = $("#duty").val().trim();
			if(feeFlag=="qy"){
				if(kpName==null||kpName==""){
					alert("开票名称不能为空");
					return;
				}
				if(duty==null||duty==""){
					alert("企业开票，税号不能为空");
					return;
				}
			}*/
			
			if(phone.length>20){
				alert("手机号不要超过20位");
				return;
			}
			 var data = {
					 method : "pay",
					 RecTuitionFee : oweTuitionFee,
					 RecQuarterFee : oweQuarterFee,
					 RecExperimentFee : oweExperimentFee,
					 RecTeachMaterialFee : oweTeachMaterialFee,
					 RecOtherFee1 : oweOtherFee1,
					 RecOtherFee2 : oweOtherFee2,
					 RecOtherFee3 : oweOtherFee3,
					 RecOtherFee4 : oweOtherFee4,
					 MobilePhone : phone,
					 OccurAmt : payFee,
					 BankID : '200',
					 StudentID : studentID,
					 StudentName : studentName,
//					 kpName : kpName,
//					 feeFlag :feeFlag,
//					 duty :duty,
					 ChargeYear : chargeYear
			};
			 
			 $.post("ccbPos", data, function(msg) {
		    	// 如果登录失败 msg=error:errorCode:errorMessage
		    	if (msg.toString().indexOf('error') == 0) {
		    	    $('.err').html(msg.replace(/.*:/, ''));
		    	    var errMsg = msg.replace(/.*error:/, '');
		    	    $.alert(errMsg);
		    	    return;
		    	}else if(msg.toString().indexOf('warn') == 0){
		    		
		    		var path = getContextPath();
	    		    function getContextPath() {
	    		        var pathName = document.location.pathname;
	    		        var index = pathName.substr(1).indexOf("/");
	    		        var result = pathName.substr(0,index+1);
	    		        return result;
	    		     }
	    		     $.alert("金额有误请确认");
	    		     //正常
		    		 window.location.href = path + "/view/mobile/orderNew.jsp";
		    		 
		    	} else {
		    			window.location.href = msg;
		    	}
			 });
	  }
	  
	  function pay1(){
			
			var oweTuitionFee = $('#oweTuitionFee').val();
			var oweQuarterFee = $('#oweQuarterFee').val();
			var oweExperimentFee = $('#oweExperimentFee').val();
			var oweTeachMaterialFee = $('#oweTeachMaterialFee').val();
			var oweOtherFee1 = $('#oweOtherFee1').val();
			var oweOtherFee2 = $('#oweOtherFee2').val();
			var oweOtherFee3 = $('#oweOtherFee3').val();
			var oweOtherFee4 = $('#oweOtherFee4').val();
			
			var realtuitionFee = $("#tuitionFee").val();
			var realquarterFee = $("#quarterFee").val();
			var realexperimentFee = $("#experimentFee").val();
			var realteachMaterialFee = $("#teachMaterialFee").val();
			var realotherFee1 = $("#otherFee1").val();
			var realotherFee2 = $("#otherFee2").val();
			var realotherFee3 = $("#otherFee3").val();
			var realotherFee4 = $("#otherFee4").val();
			var path = getContextPath();
		    function getContextPath() {
		        var pathName = document.location.pathname;
		        var index = pathName.substr(1).indexOf("/");
		        var result = pathName.substr(0,index+1);
		        return result;
		     }
    		 /*
			if(oweTuitionFee>realtuitionFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweQuarterFee>realquarterFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweExperimentFee>realexperimentFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweTeachMaterialFee>realteachMaterialFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee1>realotherFee1){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee2>realotherFee2){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee3>realotherFee3){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee4>realotherFee4){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}*/
			
			
//			var payFee = oweTuitionFee+oweQuarterFee+oweExperimentFee+oweTeachMaterialFee+oweOtherFee1+oweOtherFee2+oweOtherFee3+oweOtherFee4;
			var payFee = Number(oweTuitionFee)+Number(oweQuarterFee)+Number(oweExperimentFee)+Number(oweTeachMaterialFee)+Number(oweOtherFee1)
			  +Number(oweOtherFee2)+Number(oweOtherFee3)+Number(oweOtherFee4);
			var chargeYear = $("#chargeYear").val();
			var studentID = $("#studentID").val();
			var studentName = $("#studentName").val();
			
			 var data = {
					 method : "pay",
					 RecTuitionFee : oweTuitionFee,
					 RecQuarterFee : oweQuarterFee,
					 RecExperimentFee : oweExperimentFee,
					 RecTeachMaterialFee : oweTeachMaterialFee,
					 RecOtherFee1 : oweOtherFee1,
					 RecOtherFee2 : oweOtherFee2,
					 RecOtherFee3 : oweOtherFee3,
					 RecOtherFee4 : oweOtherFee4,
					 OccurAmt : payFee,
					 BankID : '008',
					 StudentID : studentID,
					 StudentName : studentName,
					 ChargeYear : chargeYear
			};
			 
			/* $.post("mobile", data, function(msg) {
		    	// 如果登录失败 msg=error:errorCode:errorMessage
		    	if (msg.toString().indexOf('error') == 0) {
		    	    $('.err').html(msg.replace(/.*:/, ''));
		    	    var errMsg = msg.replace(/.*error:/, '');
		    	    $.alert(errMsg);
		    	    return;
		    	} else {
		    			window.location.href = msg;
		    	}
			 });*/
			 
			 $.post("alipayMobile", data, function(msg) {
				 document.write(msg);
			     document.close();
			 });
			
			 // ccbpay
			/*var inputs = json2inputs(data);
			var yxtOrderForm = "";
			$("#yxtOrder").html(yxtOrderForm);
			// jquery mobile表单默认已ajax方式提交
			yxtOrderForm += "<form action='ccbpay' id='_yxtOrderForm' method='post' data-ajax='false'>";
			yxtOrderForm += inputs;
			yxtOrderForm += "</form>";
			yxtOrderForm += "<script>$('#_yxtOrderForm').submit();</script>";

			// console.log(yxtOrderForm);
			$("#yxtOrder").html(yxtOrderForm);*/
			 /*$(this).ajaxSubmit({
	            type: 'post', // 提交方式 get/post
	            url: '/ccbwxpay', // 需要提交的 url
	            data:data
		     });*/
	  }
	  
	  function pay2(){
			
			var oweTuitionFee = $('#oweTuitionFee').val();
			var oweQuarterFee = $('#oweQuarterFee').val();
			var oweExperimentFee = $('#oweExperimentFee').val();
			var oweTeachMaterialFee = $('#oweTeachMaterialFee').val();
			var oweOtherFee1 = $('#oweOtherFee1').val();
			var oweOtherFee2 = $('#oweOtherFee2').val();
			var oweOtherFee3 = $('#oweOtherFee3').val();
			var oweOtherFee4 = $('#oweOtherFee4').val();
			
//			var payFee = oweTuitionFee+oweQuarterFee+oweExperimentFee+oweTeachMaterialFee+oweOtherFee1+oweOtherFee2+oweOtherFee3+oweOtherFee4;
			var payFee = Number(oweTuitionFee)+Number(oweQuarterFee)+Number(oweExperimentFee)+Number(oweTeachMaterialFee)+Number(oweOtherFee1)
			  +Number(oweOtherFee2)+Number(oweOtherFee3)+Number(oweOtherFee4);
			var chargeYear = $("#chargeYear").val();
			var studentID = $("#studentID").val();
			var studentName = $("#studentName").val();
			
			
			 var data = {
					 method : "pay",
					 RecTuitionFee : oweTuitionFee,
					 RecQuarterFee : oweQuarterFee,
					 RecExperimentFee : oweExperimentFee,
					 RecTeachMaterialFee : oweTeachMaterialFee,
					 RecOtherFee1 : oweOtherFee1,
					 RecOtherFee2 : oweOtherFee2,
					 RecOtherFee3 : oweOtherFee3,
					 RecOtherFee4 : oweOtherFee4,
					 OccurAmt : payFee,
					 BankID : '010',
					 StudentID : studentID,
					 StudentName : studentName,
					 ChargeYear : chargeYear
			};
			 
			/* $.post("mobile", data, function(msg) {
		    	// 如果登录失败 msg=error:errorCode:errorMessage
		    	if (msg.toString().indexOf('error') == 0) {
		    	    $('.err').html(msg.replace(/.*:/, ''));
		    	    var errMsg = msg.replace(/.*error:/, '');
		    	    $.alert(errMsg);
		    	    return;
		    	} else {
		    			window.location.href = msg;
		    	}
			 });*/
			 
			 /*$.post("alipayMobile", data, function(msg) {
				 document.write(msg);
			     document.close();
			 });*/
			
			 // ccbpay
			var inputs = json2inputs(data);
			var yxtOrderForm = "";
			$("#yxtOrder").html(yxtOrderForm);
			// jquery mobile表单默认已ajax方式提交
			yxtOrderForm += "<form action='ccbpay' id='_yxtOrderForm' method='post' data-ajax='false'>";
			yxtOrderForm += inputs;
			yxtOrderForm += "</form>";
			yxtOrderForm += "<script>$('#_yxtOrderForm').submit();</script>";

			// console.log(yxtOrderForm);
			$("#yxtOrder").html(yxtOrderForm);
			 /*$(this).ajaxSubmit({
	            type: 'post', // 提交方式 get/post
	            url: '/ccbwxpay', // 需要提交的 url
	            data:data
		     });*/
	  }
	  
	  function payAbc(){
			
			var oweTuitionFee = $('#oweTuitionFee').val();
			var oweQuarterFee = $('#oweQuarterFee').val();
			var oweExperimentFee = $('#oweExperimentFee').val();
			var oweTeachMaterialFee = $('#oweTeachMaterialFee').val();
			var oweOtherFee1 = $('#oweOtherFee1').val();
			var oweOtherFee2 = $('#oweOtherFee2').val();
			var oweOtherFee3 = $('#oweOtherFee3').val();
			var oweOtherFee4 = $('#oweOtherFee4').val();
			
			var realtuitionFee = $("#tuitionFee").val();
			var realquarterFee = $("#quarterFee").val();
			var realexperimentFee = $("#experimentFee").val();
			var realteachMaterialFee = $("#teachMaterialFee").val();
			var realotherFee1 = $("#otherFee1").val();
			var realotherFee2 = $("#otherFee2").val();
			var realotherFee3 = $("#otherFee3").val();
			var realotherFee4 = $("#otherFee4").val();
			var path = getContextPath();
		    function getContextPath() {
		        var pathName = document.location.pathname;
		        var index = pathName.substr(1).indexOf("/");
		        var result = pathName.substr(0,index+1);
		        return result;
		     }
    		 /*
			if(oweTuitionFee*100>realtuitionFee*100){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweQuarterFee*100>realquarterFee*100){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweExperimentFee*100>realexperimentFee*100){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweTeachMaterialFee*100>realteachMaterialFee*100){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee1*100>realotherFee1*100){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee2*100>realotherFee2*100){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee3*100>realotherFee3*100){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee4*100>realotherFee4*100){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}*/
			
//			var payFee = oweTuitionFee+oweQuarterFee+oweExperimentFee+oweTeachMaterialFee+oweOtherFee1+oweOtherFee2+oweOtherFee3+oweOtherFee4;
			var payFee = Number(oweTuitionFee)+Number(oweQuarterFee)+Number(oweExperimentFee)+Number(oweTeachMaterialFee)+Number(oweOtherFee1)
			  +Number(oweOtherFee2)+Number(oweOtherFee3)+Number(oweOtherFee4);
			var chargeYear = $("#chargeYear").val();
			var studentID = $("#studentID").val();
			var studentName = $("#studentName").val();
			
			
			 var data = {
					 method : "pay",
					 RecTuitionFee : oweTuitionFee,
					 RecQuarterFee : oweQuarterFee,
					 RecExperimentFee : oweExperimentFee,
					 RecTeachMaterialFee : oweTeachMaterialFee,
					 RecOtherFee1 : oweOtherFee1,
					 RecOtherFee2 : oweOtherFee2,
					 RecOtherFee3 : oweOtherFee3,
					 RecOtherFee4 : oweOtherFee4,
					 OccurAmt : payFee,
					 BankID : '010',
					 StudentID : studentID,
					 StudentName : studentName,
					 ChargeYear : chargeYear
			};
			 
			$.post("abcpay", data, function(msg) {
		    	// 如果登录失败 msg=error:errorCode:errorMessage
		    	if (msg.toString().indexOf('error') == 0) {
		    	    $.alert("系统错误请联系管理员");
		    	    return;
		    	} else {
		    			window.location.href = msg;
		    	}
			 });
			 
			 /*$.post("alipayMobile", data, function(msg) {
				 document.write(msg);
			     document.close();
			 });*/
			
	  }
	  
	  function btnJftPay(){
			
			var oweTuitionFee = $('#oweTuitionFee').val();
			var oweQuarterFee = $('#oweQuarterFee').val();
			var oweExperimentFee = $('#oweExperimentFee').val();
			var oweTeachMaterialFee = $('#oweTeachMaterialFee').val();
			var oweOtherFee1 = $('#oweOtherFee1').val();
			var oweOtherFee2 = $('#oweOtherFee2').val();
			var oweOtherFee3 = $('#oweOtherFee3').val();
			var oweOtherFee4 = $('#oweOtherFee4').val();
			
			var realtuitionFee = $("#tuitionFee").val();
			var realquarterFee = $("#quarterFee").val();
			var realexperimentFee = $("#experimentFee").val();
			var realteachMaterialFee = $("#teachMaterialFee").val();
			var realotherFee1 = $("#otherFee1").val();
			var realotherFee2 = $("#otherFee2").val();
			var realotherFee3 = $("#otherFee3").val();
			var realotherFee4 = $("#otherFee4").val();
			var path = getContextPath();
		    function getContextPath() {
		        var pathName = document.location.pathname;
		        var index = pathName.substr(1).indexOf("/");
		        var result = pathName.substr(0,index+1);
		        return result;
		     }
    		 /*
			if(oweTuitionFee>realtuitionFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweQuarterFee>realquarterFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweExperimentFee>realexperimentFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweTeachMaterialFee>realteachMaterialFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee1>realotherFee1){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee2>realotherFee2){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee3>realotherFee3){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee4>realotherFee4){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}*/
			
//			var payFee = oweTuitionFee+oweQuarterFee+oweExperimentFee+oweTeachMaterialFee+oweOtherFee1+oweOtherFee2+oweOtherFee3+oweOtherFee4;
			var payFee = Number(oweTuitionFee)+Number(oweQuarterFee)+Number(oweExperimentFee)+Number(oweTeachMaterialFee)+Number(oweOtherFee1)
			  +Number(oweOtherFee2)+Number(oweOtherFee3)+Number(oweOtherFee4);
			var chargeYear = $("#chargeYear").val();
			var studentID = $("#studentID").val();
			var studentName = $("#studentName").val();
			
			
			 var data = {
					 method : "pay",
					 RecTuitionFee : oweTuitionFee,
					 RecQuarterFee : oweQuarterFee,
					 RecExperimentFee : oweExperimentFee,
					 RecTeachMaterialFee : oweTeachMaterialFee,
					 RecOtherFee1 : oweOtherFee1,
					 RecOtherFee2 : oweOtherFee2,
					 RecOtherFee3 : oweOtherFee3,
					 RecOtherFee4 : oweOtherFee4,
					 OccurAmt : payFee,
					 BankID : '010',
					 StudentID : studentID,
					 StudentName : studentName,
					 ChargeYear : chargeYear
			};
			 
			/*$.post("icbcJftPay", data, function(msg) {
		    	// 如果登录失败 msg=error:errorCode:errorMessage
		    	if (msg.toString().indexOf('error') == 0) {
		    	    $.alert("系统错误请联系管理员");
		    	    return;
		    	} else {
		    			window.location.href = msg;
		    	}
			 });*/
			 
			 $.post("icbcJftPay", data, function(msg) {
				 document.write(msg);
			     document.close();
			 });
			
	  }
	  
	  function ccbwxPay(){
			
			var oweTuitionFee = $('#oweTuitionFee').val();
			var oweQuarterFee = $('#oweQuarterFee').val();
			var oweExperimentFee = $('#oweExperimentFee').val();
			var oweTeachMaterialFee = $('#oweTeachMaterialFee').val();
			var oweOtherFee1 = $('#oweOtherFee1').val();
			var oweOtherFee2 = $('#oweOtherFee2').val();
			var oweOtherFee3 = $('#oweOtherFee3').val();
			var oweOtherFee4 = $('#oweOtherFee4').val();
			
			var realtuitionFee = $("#tuitionFee").val();
			var realquarterFee = $("#quarterFee").val();
			var realexperimentFee = $("#experimentFee").val();
			var realteachMaterialFee = $("#teachMaterialFee").val();
			var realotherFee1 = $("#otherFee1").val();
			var realotherFee2 = $("#otherFee2").val();
			var realotherFee3 = $("#otherFee3").val();
			var realotherFee4 = $("#otherFee4").val();
			var path = getContextPath();
		    function getContextPath() {
		        var pathName = document.location.pathname;
		        var index = pathName.substr(1).indexOf("/");
		        var result = pathName.substr(0,index+1);
		        return result;
		     }
  		 /*
			if(oweTuitionFee>realtuitionFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweQuarterFee>realquarterFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweExperimentFee>realexperimentFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweTeachMaterialFee>realteachMaterialFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee1>realotherFee1){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee2>realotherFee2){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee3>realotherFee3){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee4>realotherFee4){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}*/
			
//			var payFee = oweTuitionFee+oweQuarterFee+oweExperimentFee+oweTeachMaterialFee+oweOtherFee1+oweOtherFee2+oweOtherFee3+oweOtherFee4;
			var payFee = Number(oweTuitionFee)+Number(oweQuarterFee)+Number(oweExperimentFee)+Number(oweTeachMaterialFee)+Number(oweOtherFee1)
			  +Number(oweOtherFee2)+Number(oweOtherFee3)+Number(oweOtherFee4);
			var chargeYear = $("#chargeYear").val();
			var studentID = $("#studentID").val();
			var studentName = $("#studentName").val();
			
			 var data = {
					 method : "pay",
					 RecTuitionFee : oweTuitionFee,
					 RecQuarterFee : oweQuarterFee,
					 RecExperimentFee : oweExperimentFee,
					 RecTeachMaterialFee : oweTeachMaterialFee,
					 RecOtherFee1 : oweOtherFee1,
					 RecOtherFee2 : oweOtherFee2,
					 RecOtherFee3 : oweOtherFee3,
					 RecOtherFee4 : oweOtherFee4,
					 OccurAmt : payFee,
					 BankID : '010',
					 StudentID : studentID,
					 StudentName : studentName,
					 ChargeYear : chargeYear
			};
			 
			$.post("ccbphonepay", data, function(msg) {
		    	// 如果登录失败 msg=error:errorCode:errorMessage
		    	if (msg.toString().indexOf('error') == 0) {
		    	    $.alert("系统错误请联系管理员");
		    	    return;
		    	} else {
		    			window.location.href = msg;
		    	}
			 });
			 
			 /*$.post("alipayMobile", data, function(msg) {
				 document.write(msg);
			     document.close();
			 });*/
			
	  }
	  
	  function zhPay(){
			
			var oweTuitionFee = $('#oweTuitionFee').val();
			var oweQuarterFee = $('#oweQuarterFee').val();
			var oweExperimentFee = $('#oweExperimentFee').val();
			var oweTeachMaterialFee = $('#oweTeachMaterialFee').val();
			var oweOtherFee1 = $('#oweOtherFee1').val();
			var oweOtherFee2 = $('#oweOtherFee2').val();
			var oweOtherFee3 = $('#oweOtherFee3').val();
			var oweOtherFee4 = $('#oweOtherFee4').val();
			
			var realtuitionFee = $("#tuitionFee").val();
			var realquarterFee = $("#quarterFee").val();
			var realexperimentFee = $("#experimentFee").val();
			var realteachMaterialFee = $("#teachMaterialFee").val();
			var realotherFee1 = $("#otherFee1").val();
			var realotherFee2 = $("#otherFee2").val();
			var realotherFee3 = $("#otherFee3").val();
			var realotherFee4 = $("#otherFee4").val();
			var path = getContextPath();
		    function getContextPath() {
		        var pathName = document.location.pathname;
		        var index = pathName.substr(1).indexOf("/");
		        var result = pathName.substr(0,index+1);
		        return result;
		     }
  		 /*
			if(oweTuitionFee>realtuitionFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweQuarterFee>realquarterFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweExperimentFee>realexperimentFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweTeachMaterialFee>realteachMaterialFee){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee1>realotherFee1){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee2>realotherFee2){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee3>realotherFee3){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}
			if(oweOtherFee4>realotherFee4){
				$.alert("金额有误请确认");
				window.location.href = path + "/view/mobile/orderNew.jsp";
				return;
			}*/
			
//			var payFee = oweTuitionFee+oweQuarterFee+oweExperimentFee+oweTeachMaterialFee+oweOtherFee1+oweOtherFee2+oweOtherFee3+oweOtherFee4;
			var payFee = (Number(oweTuitionFee)*100+Number(oweQuarterFee)*100+Number(oweExperimentFee)*100
			+Number(oweTeachMaterialFee)*100+Number(oweOtherFee1)*100
			  +Number(oweOtherFee2)*100+Number(oweOtherFee3)*100+Number(oweOtherFee4)*100)/100;
			var chargeYear = $("#chargeYear").val();
			var studentID = $("#studentID").val();
			var studentName = $("#studentName").val();
			
			
			 var data = {
					 method : "pay",
					 RecTuitionFee : oweTuitionFee,
					 RecQuarterFee : oweQuarterFee,
					 RecExperimentFee : oweExperimentFee,
					 RecTeachMaterialFee : oweTeachMaterialFee,
					 RecOtherFee1 : oweOtherFee1,
					 RecOtherFee2 : oweOtherFee2,
					 RecOtherFee3 : oweOtherFee3,
					 RecOtherFee4 : oweOtherFee4,
					 OccurAmt : payFee,
					 BankID : '010',
					 StudentID : studentID,
					 StudentName : studentName,
					 ChargeYear : chargeYear
			};
			 
			$.post("zhPay", data, function(msg) {
		    	// 如果登录失败 msg=error:errorCode:errorMessage
		    	if (msg.toString().indexOf('error') == 0) {
		    	    $.alert("系统错误请联系管理员");
		    	    return;
		    	} else {
		    			window.location.href = msg;
		    	}
			 });
			 
			 /*$.post("alipayMobile", data, function(msg) {
				 document.write(msg);
			     document.close();
			 });*/
			
	  }
	  
	  function json2inputs(json) {
			var inputs = '';
			$.each(json, function(i, item) {
			    var input = "<input hidden='hidden' name='" + i + "' value='" + item + "'/>";
			    inputs += input;
			});
			return inputs;
	  }
	  
	  /**
	   * 按回车登录
	   */
	  document.onkeydown = function(e) {
	      // 浏览器兼容
	      e = e ? e : window.event;
	      var keyCode = e.which ? e.which : e.keyCode;
	      if (keyCode == 13) // 回车键的键值为13
	      {
	    	  pay(); // 调用登录按钮的登录事件
	      }
	  };
});