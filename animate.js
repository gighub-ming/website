// JavaScript Document
//------------------------------------------------------------------------------------------------
	function animate(obj,target,callback){   //obj是谁要做动画，target是要走多少距离    加一个回调函数
		clearInterval(obj.timer)
		obj.timer = setInterval(function(){			//这里是为了性能优化，obj（谁）的timer就是谁做运动
		var step = (target - obj.offsetLeft)/15;  
		if(step>0){					//判断如果是负数就往小了取，正数就往大了取
			step = Math.ceil(step);
		}else{
			step = Math.floor(step);
		}
					//math.ceil是向上取整，可以刚好到达目标距离
				if(obj.offsetLeft == target){
					clearInterval(obj.timer);
					//obj.style.left = 0;
					if(callback){
						callback();					//回调函数要写到定时器结束位置，还要判断有没有这个函数
					}
				}
				obj.style.left = obj.offsetLeft+step+'px';
			},20)
	}
//-------------------------------------------------------------------------------------------------
