import {axGet} from '../../common/HttpBean'

export function getRoomList(thisa){
		axGet('/api/hall/getRoomList',{},function(res){
			//alert(res.data);
			thisa.roomList=res.data;
			},function(err){
				alert(err);
		});
};

export function newRoom(formObj,thisa){
		axGet('/api/hall/newroom?'+formObj,function(res){
			alert(res.data);
			},function(err){
				alert(err);
		});
};