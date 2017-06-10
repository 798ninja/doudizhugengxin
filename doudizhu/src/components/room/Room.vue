<template>
	<div>
		<roomhead/>
		<roomready/>
	</div>
</template>
<script>
import RoomHead from './RoomHead'
import RoomReady from './RoomReady'
export default {
  components:{
  	roomhead:RoomHead,
  	roomready:RoomReady
  }
}
</script>