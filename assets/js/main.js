var eded;
 var reverse=0;
 var qaliq; 
 function palindromOfNumber(num) {
   eded=num
   while (num>0) {
    qaliq=num%10;
    num=(num-qaliq)/10;
    reverse = reverse*10+qaliq;
   }
   if(reverse==eded)
		{
		return "Eded Palindromdur";
		}
        return "Eded Palindrom deyl"
}
alert(palindromOfNumber(+prompt("Eded  daxil edin")))