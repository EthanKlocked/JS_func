function form_weekdays(date = new Date()){
	var yyyy = date.getFullYear();
	var raw_mm = date.getMonth() + 1;
	var raw_dd = date.getDate();  
	var mm = raw_mm > 9 ? raw_mm : '0'+ raw_mm;
	var dd = raw_dd > 9 ? raw_dd : '0'+ raw_dd;
	var format = `${yyyy}-${mm}-${dd}`;

	var end_real = new Date(yyyy, mm, 0);
	var real_enddate = end_real.getDate();
	var real_endday = end_real.getDay();
	var raw_cnt = 8;  
	for (var i=0; i < real_enddate-28; i++){
		var nowday = Number(real_endday - i);
		raw_cnt = (nowday == 6 || nowday == 7 || nowday == 0 || nowday == -1) ? raw_cnt+1 : raw_cnt;
	}
	var weekdays = real_enddate - raw_cnt;

	return [format, weekdays]; //yyyy-mm-dd foramt & weekdays
}
