//检查用户名
function checkName(){
	//字符串处理
	//需要去处两端的空格
	var name = $.trim($(':text:first').val()) ;
	var len = name.length;

	var errmsg = null; //保存错误信息
	var ret = false;
	if(len == 0){
		errmsg = '用户名不能为空';
	}else if(len < 3){
		errmsg = '不能小于三个字符';
	}else{
		errmsg = 'ok';
		ret = true;
	}

	$('#uname-element span').text(errmsg);
	return ret;  //检查成功时返回true
}
//检查密码
function checkPassword(){
	var pass =$(':password:first').val();

	var len = pass.length;
	
	var errmsg = null;
	var ret = false;
	if(len == 0){
		errmsg = '密码不能为空';
	}else if(len < 6){
		errmsg = '密码不能小于6位';
	}else{
		errmsg = 'ok';
		ret = true;
	}
	$('#upass-element span').text(errmsg);
	return ret;
}
//检查验证密码
function checkRepass(){
	var pass =$(':password:last').val();
	var opass =$(':password:first').val();
	var len = pass.length;
	
	var errmsg = null;
	var ret = false;
	if(len == 0){
		errmsg = '重复密码不能为空';
	}else if(pass != opass){
		errmsg = '两次密码不一致';
	}else{
		errmsg = 'ok';
		ret = true;
	}
	$('#repass-element span').text(errmsg);
	return ret;

}
/*zan3@163.com
 包涵：一下部分：
 不区分大小写
	1.字母数字下划线
	2. @
	3. .
	4. 163 字母数字下划线
	5. com 字母（2-4字符）
	perl 风格的正则表达式：
	  /[a-z0-9-]{1,30]@[0-z0-9-]{1,65}.[a-z]{2,4}/
*/
function isEmail(str){
	str = str.toLowerCase();
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(str);
};
//检查Email
function checkEmail(){
	var email = $.trim($(':text:last').val());

	var len = email.length;

	var errmsg = null; //保存错误信息
	var ret = false;
	if(len == 0){
		errmsg = 'email不能为空';
	}else if(!isEmail(email)){
		errmsg = 'email格式不正确';
	}else{
		errmsg = 'ok';
		ret = true;
	}

	$('#email-element span').text(errmsg);
	return ret;
}
$(document).ready(function(){

	$(':text:eq(0)').blur(function(){
		checkName();
	});
	$(':password:first').blur(function(){
		checkPassword();
	});
	$(':password:last').blur(function(){
		checkRepass();
	});
	$(':text:last').blur(function(){

		checkEmail();
	});
	/*
	出现错误，阻止提交 return false
	 */
	$(':submit').click(function(){
		if(!checkName()){
			return false;
		}
		if(!checkPassword()){
			return false;
		}
		if(!checkRepass()){
			return false;
		}
		if(!checkEmail()){
			return false;
		}
		
		alert('提交成功');
	});
});