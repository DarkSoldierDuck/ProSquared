

<!-- 公用内容 -->

<base href="https://cw-pay.hziee.edu.cn/yxt_jdbc/">
<link rel="stylesheet" type="text/css" href="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/weui/css/weui.min.css">
<link rel="stylesheet" type="text/css" href="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/weui/css/jquery-weui.min.css">
<script type="text/javascript" src="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/jquery.min.js"></script>
<script type="text/javascript" src="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/qrcode.js"></script>
<script type="text/javascript" src="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/qrcode.min.js"></script>
<script src="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/jquery.qrcode.min.js" type="text/javascript"></script>
<script type="text/javascript" src="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/jquery.cookie.js"></script>
<script type="text/javascript" src="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/jquery.form.js"></script>
<script type="text/javascript" src="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/weui/js/jquery-weui.min.js"></script>
<script type="text/javascript" src="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/weui/js/swiper.min.js"></script>
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">









<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>银校通</title>
<link href="res/img/yxt.ico" rel="shortcut icon" type="image/x-icon" />
<style type="text/css">
	.weui-input{
		
	}
</style>
</head>
<body>
	<div id="yxtOrder" hidden="hidden"></div>
	<div>
		<div style="background-color: #fbfbfb;">
			<div class="am-header-left am-header-nav" style="float:left;">
	          	<a class="left-link" style="top: 5px;">
	                <img src="res/img/school/xb.png" style="width: 55px;height: 55px;" />
	          	</a>
	     	 </div>
	     	 <div class="page__title_1" style="background-color: #fbfbfb;color: #3c3c3c;font-size: 19px;text-align: center;padding-right: 10px;">
	     	 	杭州电子科技大学信息工程学院
			</div>
		</div>
		<img src="res/img/school/bg.png" style="float:center; width: 100%;height: 150px;padding-left: 0px;">
		<div class="weui-toptips weui-toptips_warn js_tooltips">错误提示</div>
		<br>
		<HR>
		
		
		
		
		
<!-- 		<input type="hidden" id='tuitionFee' value=""> 
		<input type="hidden" id='quarterFee' value=""> 
		<input type="hidden" id='experimentFee' value=""> 
		<input type="hidden" id='teachMaterialFee' value=""> 
		<input type="hidden" id='otherFee1' value=""> 
		<input type="hidden" id='otherFee2' value=""> 
		<input type="hidden" id='otherFee3' value=""> 
		<input type="hidden" id='otherFee4' value=""> 
		<input type="hidden" id='chargeYear' value=""> -->
		<input type="hidden" id="checkPartPay" value="0" />
		<input type="hidden" id="payWayss" value="ccbpay:0&ccbwxpay:0&alipay:0&unionpay:0&abcpay:0&icbcpay:0&wxpay:0&hzbankpay:0&cmbpay:0&bocompay:0&zwpay:0&tyPay:0&pfPay:0&zhPay:0&icbcjftpay:0&icbcpospay:0&ccbPosPay:0" />
		<input type="hidden" id='tuitionFee' value="0.00"> 
		<input type="hidden" id='quarterFee' value="30249.98"> 
		<input type="hidden" id='experimentFee' value="0.00"> 
		<input type="hidden" id='teachMaterialFee' value="0.00"> 
		<input type="hidden" id='otherFee1' value="0.00"> 
		<input type="hidden" id='otherFee2' value="0.00"> 
		<input type="hidden" id='otherFee3' value="0.00"> 
		<input type="hidden" id='otherFee4' value="0.00"> 
		<input type="hidden" id='chargeYear' value="2026">
		<input type="hidden" id='attendId' value="0">
		<input type="hidden" id='years' value="2026">
		<input type="hidden" id='feeFlag' value="0"> 
		<input type="hidden" id='xfbz' value=""> 
		<input type="hidden" id='qsxf' value=""> 
<!-- 	<input type="hidden" id='feeFlag' value="qy"> 
		<input type="hidden" id='feeFlag' value="0"> -->
		<input type="hidden" id='tuitionFeeFlag' value="0"> 
		<input type="hidden" id='quarterFeeFlag' value="0"> 
		<input type="hidden" id='experimentFeeFlag' value="0"> 
		<input type="hidden" id='teachMaterialFeeFlag' value="0"> 
		<input type="hidden" id='otherFee1Flag' value="0"> 
		<input type="hidden" id='otherFee2Flag' value="0"> 
		<input type="hidden" id='otherFee3Flag' value="0"> 
		<input type="hidden" id='otherFee4Flag' value="0"> 
		<input type="hidden" id='degreeFlag' value="0"> 
		<input type="hidden" id='fromtime' value="20130715"> 
		<input type="hidden" id='totime' value="20191031"> 
		<div id="orderForm" class="weui-cells weui-cells_form">
			
			<div class="weui-cell ">
				<div class="weui-cell__hd">
					<label class="weui-label" style="width:155px;">班级：</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="className" class="weui-input" value="260968101" readonly="readonly" style="text-align:right;">
				</div>
			</div>
			<div class="weui-cell ">
				<div class="weui-cell__hd">
					<label class="weui-label" style="width:155px;">学号：</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="studentID" class="weui-input" value="2026ZJ68020" readonly="readonly" style="text-align:right;">
				</div>
			</div>
			<div class="weui-cell ">
				<div class="weui-cell__hd">
					<label class="weui-label" style="width:155px;">姓名：</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="studentName" class="weui-input" value="黄锦希" readonly="readonly" style="text-align:right;">
				</div>
			</div>
			<div class="weui-cell " style="color: red;font-weight: bold;">
				<div class="weui-cell__hd">
					<label class="weui-label" style="width:155px;">手机号：</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="mobilePhone" class="weui-input" value="13968609186" placeholder="请输入手机号" style="text-align:right;">
				</div>
			</div>
			<div class="weui-cell " id = "kptt" >
				<div class="weui-cell__hd">
					<label class="weui-label" style="width:155px;">开票抬头：</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="kpName" class="weui-input" value="" placeholder="请输入企业输入公司名称" style="text-align:right;">
				</div>
			</div>
			<div class="weui-cell " id = "kpsh">
				<div class="weui-cell__hd">
					<label class="weui-label" style="width:155px;">税号：</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="duty" class="weui-input" value="" placeholder="请输入税号" style="text-align:right;">
				</div>
			</div>
			<div class="weui-tab" >
			
			<div class="weui-navbar" id = "result">
    			
  			</div>
  			
  			<br>
  			<br>
  			<div class="weui-form-preview__hd " style="line-height: 1.5em;" id = "zhanshi" >
				<label id="qjje" class="weui-form-preview__label" style="width:100px;color: red;">欠缴费用</label>
				<span class="weui-form-preview__value" id="yjje" style="font-size: 16px;color: red;">应缴金额</span>
			</div>
						
							<div class="weui-cell " id = "tuition" >
								<div class="weui-cell__hd">
									<label id="realTuitionFee" class="weui-form-preview__label" style="width:182px;font-weight: bold;">学费：0.00</label>
								</div>
								
								<div class="weui-cell__bd" style="text-align:right;">
									<input id="oweTuitionFee" class="weui-input" style="border: solid 1px;width: 80px;border: solid 0px;text-align:right;" placeholder="学费" value="0.00" onblur="cheakFee('#oweTuitionFee','#tuitionFee')">
								</div>
							</div>	
			
				
							<div class="weui-cell " id="quarter" >
								<div class="weui-cell__hd">
									<label id="realQuarterFee" class="weui-form-preview__label" style="width:182px;font-weight: bold;">住宿费：30249.98</label>
								</div>
								<div class="weui-cell__bd" style="text-align:right;">
									<input id="oweQuarterFee" class="weui-input" style="border: solid 1px;width: 80px;border: solid 0px;text-align:right;" placeholder="住宿费" value="30249.98" onblur="cheakFee('#oweQuarterFee','#quarterFee')" >
								</div>
							</div>
			
			
							<div class="weui-cell " id="experiment" >
								<div class="weui-cell__hd">
									<label id="realExperimentFee" class="weui-form-preview__label" style="width:182px;font-weight: bold;">清算学费：0.00</label>
								</div>
								<div class="weui-cell__bd" style="text-align:right;">
									<input id="oweExperimentFee" class="weui-input" style="border: solid 0px;width: 80px;text-align:right;" placeholder="清算学费" value="0.00" onblur="cheakFee('#oweExperimentFee','#experimentFee')" >
								</div>
							</div>
			
				
							<div class="weui-cell " id="teachMaterial" >
								<div class="weui-cell__hd">
									<label id="realTeachMaterialFee" class="weui-form-preview__label" style="width:182px;font-weight: bold;">代管费：0.00</label>
									
								</div>
								<div class="weui-cell__bd" style="text-align:right;">
									<input id="oweTeachMaterialFee" class="weui-input" style="border: solid 0px;width: 80px;text-align:right;" placeholder="代管费" value="0.00" onblur="cheakFee('#oweTeachMaterialFee','#teachMaterialFee')">
								</div>
							</div>
					
				
							<div class="weui-cell " id="other1" >
								<div class="weui-cell__hd">
									<label id="realOtherFee1" class="weui-form-preview__label" style="width:182px;font-weight: bold;">体检费：0.00</label>
								</div>
								<div class="weui-cell__bd" style="text-align:right;">
									<input id="oweOtherFee1" class="weui-input" style="border: solid 0px;width: 80px;text-align:right;" placeholder="体检费" value="0.00" onblur="cheakFee('#oweOtherFee1','#otherFee1')" >
								</div>
							</div>
					
				
							<div class="weui-cell " id="other2" >
								<div class="weui-cell__hd">
									<label id="realOtherFee2" class="weui-form-preview__label" style="width:182px;font-weight: bold;">一卡通：0.00</label>
								</div>
								<div class="weui-cell__bd" style="text-align:right;">
									<input id="oweOtherFee2" class="weui-input" style="border: solid 0px;width: 80px;text-align:right;" placeholder="一卡通" value="0.00" onblur="cheakFee('#oweOtherFee2','#otherFee2')" >
								</div>
							</div>
					
							
							<div class="weui-cell " id="other3" >
								<div class="weui-cell__hd">
									<label id="realOtherFee3" class="weui-form-preview__label" style="width:182px;font-weight: bold;">转专业：0.00</label>
								</div>
								<div class="weui-cell__bd" style="text-align:right;">
									<input id="oweOtherFee3" class="weui-input" style="border: solid 0px;width: 80px;text-align:right;" placeholder="转专业" value="0.00" onblur="cheakFee('#oweOtherFee3','#otherFee3')" >
								</div>
							</div>
					
							
							<div class="weui-cell " id="other4" >
								<div class="weui-cell__hd">
									<label id="realOtherFee4" class="weui-form-preview__label" style="width:182px;font-weight: bold;">军训服装费：0.00</label>
								</div>
								<div class="weui-cell__bd" style="text-align:right;">
									<input id="oweOtherFee4" class="weui-input" style="border: solid 0px;width: 80px;text-align:right;" placeholder="军训服装费" value="0.00" onblur="cheakFee('#oweOtherFee4','#otherFee4')" >
								</div>
							</div>
																	
			<div class="weui-cell ">
				<div class="weui-cell__hd">
					<label id="realPayFee" class="weui-form-preview__label" style="width:182px;font-weight: bold;">总金额：30249.98</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="owePayFee" readonly="readonly" class="weui-input" value="30249.98"  style="text-align:right;">
				</div> 
			</div>
			
			<div class="weui-form-preview__hd " style="line-height: 1.5em;" id = "ceshi" >
				<label id="qsjg" class="weui-form-preview__label" style="width:98%;color: red;padding-top: 10px;">学分学费清算结果</label>
			</div>	
			<div class="weui-cell " id="xfbz4" >
				<div class="weui-cell__hd">
					<label id="xfbzs" class="weui-form-preview__label" style="width:182px;font-weight: bold;">学分学费预收</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="xfxf" class="weui-input" style="border: solid 0px;width: 80px;text-align:right;"  value="" readonly="readonly" >
				</div>
			</div>
			<div class="weui-cell " id="qsxf4" >
				<div class="weui-cell__hd">
					<label id="qsxfs" class="weui-form-preview__label" style="width:182px;font-weight: bold;">历年学分学费清算</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="qsxfxf" class="weui-input" style="border: solid 0px;width: 80px;text-align:right;" value="" readonly="readonly" >
				</div>
			</div>
			<div class="weui-cell " id="hjxfxf" >
				<div class="weui-cell__hd">
					<label id="hjxfxfs" class="weui-form-preview__label" style="width:182px;font-weight: bold;">学分学费合计</label>
				</div>
				<div class="weui-cell__bd" style="text-align:right;">
					<input id="hjxf" class="weui-input" style="border: solid 0px;width: 80px;text-align:right;" value="" readonly="readonly" >
				</div>
			</div>
		</div>
	</div>
	<br>
	<div class="weui-footer" style="padding: 15px;">
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="btnPay">确认缴费</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="ccbwxPay">确认缴费</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="tyPay">确认缴费</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="ccbPay">建行缴费</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="abcPay">农行支付</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="aliPay">支付宝缴费</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="zhPay">中行缴费</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="btnJftPay">工行聚富通缴费</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="ccbPosPay">建行pos缴费</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="btnHzPay">缴费</a>
		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="btnOrderInfo">查询历史缴费信息</a>
<!-- 		<a class="weui-btn weui-btn_primary" style="color: white;display: bolck;background-color: #0c95ea;" id="btnOrderInfo">查询历史缴费信息</a>
		<a class="weui-btn weui-btn_primary" style="color: white;background-color: #0c95ea;" id="updateCards">代办费信息查询</a>
		<a class="weui-btn weui-btn_primary" style="color: white;background-color: #0c95ea;" id="btnZw">政务缴费查询</a> -->
<!-- 		<a class="weui-btn weui-btn_primary" style="color: white;" id="updateCard">银行卡修改页面</a> -->
	</div>
	</div>
	
</body>
  <script type="text/javascript" src="https://cw-pay.hziee.edu.cn/yxt_jdbc/res/js/orderNew.js"></script>  
<script type="text/javascript">

$(function(){
	 function getContextPaths() {
	        var pathName = document.location.pathname;
	        var index = pathName.substr(1).indexOf("/");
	        var result = pathName.substr(0,index+1);
	        return result;
	     }
	 var paths = getContextPaths();
	 var studentId = $("#studentID").val();
		var stuName = $("#studentName").val();
	$("#btnOrderInfo").click(function() {
//		window.location.href = paths + "/view/mobile/orderStuInfo.jsp?personId="+studentId+"&personName="+stuName;
	window.location.href = paths + "/view/mobile/orderStuInfoNew.jsp";	
  	});
	
	$("#updateCards").click(function() {
//		window.location.href = paths + "/view/mobile/orderStuInfo.jsp?personId="+studentId+"&personName="+stuName;
	window.location.href = paths + "/view/mobile/stuDbfFee.jsp";	
  	});
	
	$("#btnZw").click(function() {
//		window.location.href = paths + "/view/mobile/orderStuInfo.jsp?personId="+studentId+"&personName="+stuName;
	window.location.href = paths + "/view/mobile/stuZwFee.jsp";	
  	});
	 var feeFlag = $("#feeFlag").val();
	 if(feeFlag=="qy"){
		 $("#kptt").show();
		 $("#kpsh").show();
	 }else{
		 $("#kptt").attr("style","display:none;");
		 $("#kpsh").attr("style","display:none;");
	 }
	
	//根据金额隐藏金额为0的div
	var tuition = $("#tuitionFee").val();
	var quarter = $("#quarterFee").val();
	var experiment = $("#experimentFee").val();
	var teachMaterial = $("#teachMaterialFee").val();
	var other1 = $("#otherFee1").val();
	var other2 = $("#otherFee2").val();
	var other3 = $("#otherFee3").val();
	var other4 = $("#otherFee4").val();
	var xfbzfee = $("#xfbz").val();
	var qsxffee = $("#qsxf").val();
	if(xfbzfee==""||xfbzfee=="0"){
		$("#xfbz4").hide();
		xfbzfee ="0";
	}else{
		$("#xfbz4").show();
	}
	if(qsxffee==""||qsxffee=="0"){
		$("#qsxf4").hide();
		qsxffee ="0";
	}else{
		$("#qsxf4").show();
	}
	if(xfbzfee=="0"&&qsxffee=="0"){
		$("#hjxfxf").hide();
	}else{
		var hjxf = (qsxffee*100+xfbzfee*100)/100;
		$("#hjxf").val(hjxf);
		$("#hjxfxf").show();
	}
	$("#ceshi").hide();
	
	
	
	if(tuition<0){
		tuition = 0;
		$("#tuitionFee").val("0");
	}
	if(quarter<0){
		quarter=0;
		$("#quarterFee").val("0");
	}
	if(experiment<0){
		experiment=0;
		$("#experimentFee").val("0");
	}
	if(teachMaterial<0){
		teachMaterial=0;
		$("#teachMaterialFee").val("0");
	}
	if(other1<0){
		other1=0;
		$("#otherFee1").val("0");
	}
	if(other2<0){
		other2=0;
		$("#otherFee2").val("0");
	}
	if(other3<0){
		other3=0;
		$("#otherFee3").val("0");
	}
	if(other4<0){
		other4=0;
		$("#otherFee4").val("0");
	}
	var ttl = (tuition*100+quarter*100+experiment*100+teachMaterial*100+other1*100+other2*100+other3*100+other4*100)/100;
	$("#realPayFee").html("总金额："+ ttl);
	$("#owePayFee").val(ttl);
	var tuitionFlag = $("#tuitionFeeFlag").val();
	var quarterFlag = $("#quarterFeeFlag").val();
	var experimentFlag = $("#experimentFeeFlag").val();
	var teachMaterialFlag = $("#teachMaterialFeeFlag").val();
	var other1Flag = $("#otherFee1Flag").val();
	var other2Flag = $("#otherFee2Flag").val();
	var other3Flag = $("#otherFee3Flag").val();
	var other4Flag = $("#otherFee4Flag").val();
	if(tuition>0){
		$("#tuition").attr("style","display:block;");
	}else{
/* 		$("#tuition").css("display","block"); */
		$("#tuition").attr("style","display:none;");
	}
	if(quarter>0){
/* 		$("#quarter").css("display","none"); */
		$("#quarter").attr("style","display:block;");
	}else{
/* 		$("#quarter").css("display","block"); */
		$("#quarter").attr("style","display:none;");
	}
	if(experiment>0){
		/* $("#experiment").css("display","none"); */
		$("#experiment").attr("style","display:block;");
	}else{
	/* 	$("#experiment").css("display","block"); */
		$("#experiment").attr("style","display:none;");
	}
	if(teachMaterial>0){
/* 		$("#teachMaterial").css("display","none"); */
		$("#teachMaterial").attr("style","display:block;");
	}else{
/* 		$("#teachMaterial").css("display","block"); */
		$("#teachMaterial").attr("style","display:none;");
	}
	if(other1>0){
/* 		$("#other1").css("display","none"); */
		$("#other1").attr("style","display:block;");
	}else{
/* 		$("#other1").css("display","block"); */
		$("#other1").attr("style","display:none;");
	}
	if(other2>0){
		/* $("#other2").css("display","none"); */
		$("#other2").attr("style","display:block;");
	}else{
		/* $("#other2").css("display","block"); */
		$("#other2").attr("style","display:none;");
	}
	if(other3>0){
/* 		$("#other3").css("display","none"); */
		$("#other3").attr("style","display:block;");
	}else{
/* 		$("#other3").css("display","block"); */
		$("#other3").attr("style","display:none;");
	}
	if(other4>0){
/* 		$("#other4").css("display","none"); */
		$("#other4").attr("style","display:block;");
	}else{
/* 		$("#other4").css("display","block"); */
		$("#other4").attr("style","display:none;");
	}
	// 根据标志设定金额是否需要修改1不能修改，其他可以修改 根据 degreeFlag判断是修改字段是否生效，2是不生效
	var degreeFlag = $("#degreeFlag").val();
	if(tuitionFlag==1 && degreeFlag=="0"){
		$("#oweTuitionFee").attr("readonly",true); 
	}else{
		$("#oweTuitionFee").attr("readonly",false); 
	}
	if(quarterFlag==1 && degreeFlag=="0"){
		$("#oweQuarterFee").attr("readonly",true); 
	}else{
		$("#oweQuarterFee").attr("readonly",false); 
	}
	if(experimentFlag==1 && degreeFlag=="0"){
		$("#oweExperimentFee").attr("readonly",true); 
	}else{
		$("#oweExperimentFee").attr("readonly",false); 
	}
	if(teachMaterialFlag==1 && degreeFlag=="0"){
		$("#oweTeachMaterialFee").attr("readonly",true); 
	}else{
		$("#oweTeachMaterialFee").attr("readonly",false); 
	}
	if(other1Flag==1  && degreeFlag=="0"){
		$("#oweOtherFee1").attr("readonly",true); 
	}else{
		$("#oweOtherFee1").attr("readonly",false); 
	}
	if(other2Flag==1  && degreeFlag=="0"){
		$("#oweOtherFee2").attr("readonly",true); 
	}else{
		$("#oweOtherFee2").attr("readonly",false); 
	}
	if(other3Flag==1  && degreeFlag=="0"){
		$("#oweOtherFee3").attr("readonly",true); 
	}else{
		$("#oweOtherFee3").attr("readonly",false); 
	}
	if(other4Flag==1  && degreeFlag=="0"){
		$("#oweOtherFee4").attr("readonly",true); 
	}else{
		$("#oweOtherFee4").attr("readonly",false); 
	} 
	var checkPartPay = $("#checkPartPay").val();
	var attendId = $("#attendId").val();
	
	
	var years = $("#years").val();
/* 	var a = ;
	var b = a.split(",");
	console.log("a"+b); */
	var str = years.split(",");
//	var studentId = $("#studentID").val();
//	var stuName = $("#studentName").val();
	console.log("stu:"+studentId+",years:"+str);
	for(var i = 0;i<str.length;i++){
		  var searchResultElement = createSearchResult(i,str[i],studentId,stuName);
		    $("#result").append(searchResultElement);
	}
});


function createSearchResult(i,year,studentId,stuName){
	var result = '';
	studentId ="'"+ studentId+"'";
/* 	result +="<a href ='javascript:void(0);' id='"+i+"' class='weui-navbar__item weui-bar__item'  onclick='sear("+studentId+"+","+"+i+");'>" */
	if(i==0){
		result +='<a href ="javascript:void(0);" id="'+year+'" class="weui-navbar__item weui-bar__item--on"  onclick="sear('+studentId+','+year+','+i+');">';
	}else{
		result +='<a href ="javascript:void(0);" id="'+year+'" class="weui-navbar__item weui-bar__item"  onclick="sear('+studentId+','+year+','+i+');">';
	}
	
	result += year;
	result += "</a>";
//	console.log("res:"+result);
	return result;
}

function sear(studentId,year,i){
	var years = $("#years").val();
	var str = years.split(",");
	for(var i = 0;i<str.length;i++){
		$("#"+str[i]+"").attr("class","weui-navbar__item weui-bar__item");
	}
	var stuName = $("#studentName").val();
	var stuId = $("#studentID").val();
//	console.log("a:"+year+","+"sutdentId:"+studentId+",i:"+i);
	var data = {
			 method : "getStuInfo",
			 stuId : stuId,
			 year : year,
			 stuName : stuName
	};
	$("#"+year+"").attr("class","weui-navbar__item weui-bar__item--on");
	$.post("mobile", data, function(msg) {
		 var obj = eval('(' + msg + ')');
		 
		 // 修改输入框
		 $("#oweTuitionFee").val(obj.RealTuitionFee);
		 $("#oweQuarterFee").val(obj.RealQuarterFee);
		 $("#oweExperimentFee").val(obj.RealExperimentFee);
		 $("#oweTeachMaterialFee").val(obj.RealTeachMaterialFee);
		 $("#oweOtherFee1").val(obj.RealOtherFee1);
		 $("#oweOtherFee2").val(obj.RealOtherFee2);
		 $("#oweOtherFee3").val(obj.RealOtherFee3);
		 $("#oweOtherFee4").val(obj.RealOtherFee4);
		 $("#owePayFee").val(obj.RealPayFee);
		 $("#chargeYear").val(obj.ChargeYear);
		 var zzt = 0;
		 $("#tuitionFee").val(obj.RealTuitionFee);
		 $("#quarterFee").val(obj.RealQuarterFee);
		 $("#experimentFee").val(obj.RealExperimentFee);
		 $("#teachMaterialFee").val(obj.RealTeachMaterialFee);
		 $("#otherFee1").val(obj.RealOtherFee1);
		 $("#otherFee2").val(obj.RealOtherFee2);
		 $("#otherFee3").val(obj.RealOtherFee3);
		 $("#otherFee4").val(obj.RealOtherFee4);
		 if(obj.RealTuitionFee<=0){
			 $("#oweTuitionFee").val("0");
			 $("#tuitionFee").val("0");
			 $("#tuition").attr("style","display:none;");
		 }else{
			 zzt = zzt+obj.RealTuitionFee*100;
			 $("#tuition").attr("style","display:block;");
		 }
		 if(obj.RealQuarterFee<=0){
			 $("#oweQuarterFee").val("0");
			 $("#quarterFee").val("0");
			 $("#quarter").attr("style","display:none;");
		 }else{
			 zzt = zzt+obj.RealQuarterFee*100;
			 $("#quarter").attr("style","display:block;");
		 }
		 if(obj.RealExperimentFee<=0){
			 $("#experimentFee").val("0");
			 $("#oweExperimentFee").val("0");
			 $("#experiment").attr("style","display:none;");
		 }else{
			 zzt = zzt+obj.RealExperimentFee*100;
			 $("#experiment").attr("style","display:block;");
		 }
		 if(obj.RealTeachMaterialFee<=0){
			 $("#teachMaterialFee").val("0");
			 $("#oweTeachMaterialFee").val("0");
			 $("#teachMaterial").attr("style","display:none;");
		 }else{
			 zzt = zzt+obj.RealTeachMaterialFee*100;
			 $("#teachMaterial").attr("style","display:block;");
		 }
		 if(obj.RealOtherFee1<=0){
			 $("#otherFee1").val("0");
			 $("#oweOtherFee1").val("0");
			 $("#other1").attr("style","display:none;");
		 }else{
			 zzt = zzt+obj.RealOtherFee1*100;
			 $("#other1").attr("style","display:block;");
		 }
		 if(obj.RealOtherFee2<=0){
			 $("#otherFee2").val("0");
			 $("#oweOtherFee2").val("0");
			 $("#other2").attr("style","display:none;");
		 }else{
			 zzt = zzt+obj.RealOtherFee2*100;
			 $("#other2").attr("style","display:block;");
		 }
		 if(obj.RealOtherFee3<=0){
			 $("#otherFee3").val("0");
			 $("#oweOtherFee3").val("0");
			 $("#other3").attr("style","display:none;");
		 }else{
			 zzt = zzt+obj.RealOtherFee3*100;
			 $("#other3").attr("style","display:block;");
		 }
		 if(obj.RealOtherFee4<=0){
			 $("#otherFee4").val("0");
			 $("#oweOtherFee4").val("0");
			 $("#other4").attr("style","display:none;");
		 }else{
			 zzt = zzt+obj.RealOtherFee4*100;
			 $("#other4").attr("style","display:block;");
		 }
		 zzt= zzt/100;
		 $("#owePayFee").val(zzt);
		 // 修改label
		
		 $("#realTuitionFee").html("学费："+ obj.RealTuitionFees);
		 $("#realQuarterFee").html("住宿费："+ obj.RealQuarterFees);
		 $("#realExperimentFee").html("清算学费："+ obj.RealExperimentFees);
		 $("#realTeachMaterialFee").html("代管费："+ obj.RealTeachMaterialFees);
		 $("#realOtherFee1").html("体检费："+ obj.RealOtherFee1s);
		 $("#realOtherFee2").html("一卡通："+ obj.RealOtherFee2s);
		 $("#realOtherFee3").html("转专业："+ obj.RealOtherFee3s);
		 $("#realOtherFee4").html("军训服装费："+ obj.RealOtherFee4s);
//		 $("#realPayFee").html("总金额："+ obj.RealPayFees);
		 $("#realPayFee").html("总金额："+ zzt);
		 // 修改隐藏框
		 /* $("#tuitionFee").val(obj.RealTuitionFee);
		 $("#quarterFee").val(obj.RealQuarterFee);
		 $("#experimentFee").val(obj.RealExperimentFee);
		 $("#teachMaterialFee").val(obj.RealTeachMaterialFee);
		 $("#otherFee1").val(obj.RealOtherFee1);
		 $("#otherFee2").val(obj.RealOtherFee2);
		 $("#otherFee3").val(obj.RealOtherFee3);
		 $("#otherFee4").val(obj.RealOtherFee4); */
		 // 隐藏金额为0的div
		/*  if(obj.RealTuitionFee==0){
				$("#tuition").attr("style","display:none;");
		}else{
			$("#tuition").attr("style","display:block;");
		}
		if(obj.RealQuarterFee==0){
			$("#quarter").attr("style","display:none;");
		}else{
			$("#quarter").attr("style","display:block;");
		}
		if(obj.RealExperimentFee==0){
			$("#experiment").attr("style","display:none;");
		}else{
			$("#experiment").attr("style","display:block;");
		}
		if(obj.RealTeachMaterialFee==0){
			$("#teachMaterial").attr("style","display:none;");
		}else{
			$("#teachMaterial").attr("style","display:block;");
		}
		if(obj.RealOtherFee1==0){
			$("#other1").attr("style","display:none;");
		}else{
			$("#other1").attr("style","display:block;");
		}
		if(obj.RealOtherFee2==0){
			$("#other2").attr("style","display:none;");
		}else{
			$("#other2").attr("style","display:block;");
		}
		if(obj.RealOtherFee3==0){
			$("#other3").attr("style","display:none;");
		}else{
			$("#other3").attr("style","display:block;");
		}
		if(obj.RealOtherFee4==0){
			$("#other4").attr("style","display:none;");
		}else{
			$("#other4").attr("style","display:block;");
		}  */
	});
};

function cheakFee(oweId,hiddenId){
	  var oweFee = $(oweId).val();
//	  console.log(oweFee);
	  var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
	  var flag = reg.test(oweFee);
	  if(!flag){
		  $(oweId).val("0");
		  $.alert("数字格式不正确");
	  } 
	  
	  if (oweFee.length==0) { 
		  $(oweId).val('0');
	  } 
	  var oweFees = oweFee*100/100;
	  oweFees = oweFees.toFixed(2);
	  $(oweId).val(oweFees);
	  var maxFee = $(hiddenId).val();
//	  console.log("oweFee:"+oweFee);
//	  console.log("maxFee:"+maxFee);
	  if(Number(oweFee)>Number(maxFee)){
//		  console.log("a:"+Number(oweFee)+","+Number(maxFee));
		  $(oweId).val(maxFee);
	  }
	  var oweTuFee = $("#oweTuitionFee").val();
	  var oweQuFee = $("#oweQuarterFee").val();
	  var oweExFee = $("#oweExperimentFee").val(); 
	  var oweTeFee = $("#oweTeachMaterialFee").val();	  
	  var oweOt1 = $("#oweOtherFee1").val();	  
	  var oweOt2 = $("#oweOtherFee2").val();	  
	  var oweOt3 = $("#oweOtherFee3").val();	  
	  var oweOt4 = $("#oweOtherFee4").val();
	/*   var owePayFee = Number(oweTuFee)+Number(oweQuFee)+Number(oweExFee)+Number(oweTeFee)+Number(oweOt1)
	  +Number(oweOt2)+Number(oweOt3)+Number(oweOt4); */
	  var owePayFee = (oweTuFee*100+oweQuFee*100+oweExFee*100+oweTeFee*100+oweOt1*100+oweOt2*100+oweOt3*100+oweOt4*100)/100;
	  owePayFee= owePayFee.toFixed(2);
	  $("#owePayFee").val(owePayFee);
}

</script>
</html>
