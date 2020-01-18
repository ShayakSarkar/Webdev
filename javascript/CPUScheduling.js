/* 1: FCFS
 * 2: SJF
 * 3: SRTF
 * 4: RR
 * 5: PRIORITY NON-PREEMPTIVE
 * 6: PRIORITY PRE-EMPTIVE
 */

function doFCFS(map)
{
	if(map.length==0)
		return null;
	map.sort(function(a,b){return a[1]-b[1]});
	ganttChart=[]
	time=map[0][1]
	for(i=0;i<map.length;i++)
		ganttChart.push([map[i],time,time+map[i][2]])
	return ganttChart;	
}

function doSJF(map)
{
	if(map.length==0)
		return null;
	map.sort(function(a,b){return a[1]-b[1]});
	


function schedule(processTimeMap,schedulingType)	//processTimeMap: {[[Pname,AT,BT],[...],...]}, schedulingType: Integer dettermining the type of scheduling to perform
{	
	console.log(processTimeMap)
	ganttChart=null;
	switch(schedulingType)
	{
		case 1: 
			ganttChart=doFCFS(processTimeMap);
			break;
		case 2: 
			ganttChart=doSJF(processTimeMap);
			break;
		case 3: 
			ganttChart=doSJF(processTimeMap);
			break;
		case 4: 
			ganttChart=doSJF(processTimeMap);
			break;
		case 5: 
			ganttChart=doSJF(processTimeMap);
			break;
		case 6: 
			ganttChart=doSJF(processTimeMap);
			break;
		default: 
			console.log("Erroneous Scheduling Type....");

	}
	console.log(ganttChart);
}
schedule([["a",2,2],["b",1,2],["c",-9,8],["d",10,2],["e",7,14]]);
